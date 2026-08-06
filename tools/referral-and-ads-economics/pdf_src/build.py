import html
import os
import sys

SRC_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SRC_DIR)
import content as c
from weasyprint import HTML

OUT_DIR = SRC_DIR


def esc(s):
    return html.escape(str(s), quote=False)


def formula_card(formula, explain):
    return f'''
    <div class="fcard">
      <div class="formula">{esc(formula)}</div>
      <p class="fcard-explain">{esc(explain)}</p>
    </div>
    '''


def data_table(t, status_col=None):
    headers = "".join(f"<th>{esc(h)}</th>" for h in t["headers"])
    rows_html = ""
    for row in t["rows"]:
        cells = ""
        for i, val in enumerate(row):
            if isinstance(val, tuple):
                label, color = val
                cells += f'<td><span class="chip chip-{color}">{esc(label)}</span></td>'
            else:
                is_last = (i == len(row) - 1)
                cls = "num-cell" if not is_last else "num-cell"
                cells += f'<td class="{cls}">{esc(val)}</td>'
        rows_html += f"<tr>{cells}</tr>"
    caption_html = f'<p class="table-caption">{esc(t["caption"])}</p>' if t.get("caption") else ""
    return f'''
    {caption_html}
    <table class="ref-table">
      <tr>{headers}</tr>
      {rows_html}
    </table>
    '''


def numbered_bullets(items):
    lis = "".join(f'<li><strong>{esc(a)}</strong> — {esc(b)}</li>' for a, b in items)
    return f'<ol class="num-list">{lis}</ol>'


def dash_bullets(items, use_dash_sep=True):
    sep = " — " if use_dash_sep else " "
    lis = "".join(f'<li><strong>{esc(a)}</strong>{sep}{esc(b)}</li>' for a, b in items)
    return f'<ul class="dash-list">{lis}</ul>'


def plain_bullets(items):
    lis = "".join(f'<li>{esc(i)}</li>' for i in items)
    return f'<ul class="plain-list">{lis}</ul>'


def key_value_table(rows):
    trs = "".join(
        f'<tr><td class="kv-key">{esc(k)}</td><td class="kv-val">{esc(v)}</td></tr>'
        for k, v in rows
    )
    return f'<table class="kv-table">{trs}</table>'


# ---------------------------------------------------------------------------
# Assemble sections
# ---------------------------------------------------------------------------

referral_formulas_html = "".join(formula_card(f, e) for f, e in c.REFERRAL_FORMULAS)
ads_formulas_html = "".join(formula_card(f, e) for f, e in c.ADS_FORMULAS)

worked_referral_html = (
    data_table(c.TIER1_TABLE) + data_table(c.TIER2_TABLE) + data_table(c.COMBINED_TABLE) +
    data_table(c.MARGIN_TABLE) +
    '<p class="lead-in"><strong>Minimum margin needed to stay safe:</strong></p>' +
    plain_bullets(c.MIN_MARGIN_BULLETS)
)

worked_ads_html = data_table(c.ADS_WORKED_TABLE)

peter_html = (
    f'<p class="sec-intro">{esc(c.PETER_INTRO)}</p>'
    '<p class="lead-in"><strong>The three numbers that actually matter, in order of importance:</strong></p>'
    + numbered_bullets(c.PETER_POINTS) +
    f'<div class="note-box"><strong>The habit to build:</strong> {esc(c.PETER_HABIT)}</div>'
)

ads_health_html = (
    f'<p class="sec-intro">{esc(c.ADS_HEALTH_INTRO1)}</p>'
    f'<div class="formula">{esc(c.ADS_HEALTH_FORMULA)}</div>'
    f'<p class="sec-intro">{esc(c.ADS_HEALTH_FORMULA_NOTE)}</p>'
    + data_table(c.ADS_HEALTH_TABLE) +
    f'<p class="sec-intro">{esc(c.ADS_HEALTH_RESULT)}</p>'
    '<p class="lead-in"><strong>Signals that Google Ads is starting to eat into margins instead of building them:</strong></p>'
    + dash_bullets(c.ADS_WARNING_SIGNS)
)


def real_numbers_block(s):
    kv = key_value_table(s["example_lines"])
    return f'''
    <div class="subcard">
      <h4 class="subcard-title"><span class="mini-badge">{esc(s["num"])}</span>{esc(s["title"])}</h4>
      <div class="formula">{esc(s["formula"])}</div>
      <p class="kv-label">{esc(s["example_label"])}</p>
      {kv}
      <p class="card-explain">{esc(s["closing"])}</p>
    </div>
    '''


real_numbers_html = "".join(real_numbers_block(s) for s in c.REAL_NUMBERS_SECTIONS)

sensitivity_html = (
    f'<p class="sec-intro">{esc(c.SENSITIVITY_INTRO)}</p>'
    + data_table(c.SENS_TIER1) + data_table(c.SENS_TIER2) + data_table(c.SENS_ADS) +
    '<h3 class="group-title">What the Sensitivity Analysis Shows</h3>'
    + dash_bullets(c.SENSITIVITY_TAKEAWAYS, use_dash_sep=False)
)

status_table_html = data_table(c.STATUS_TABLE)

status_current_html = ""
for chan, color, verdict, expl in c.STATUS_CURRENT:
    status_current_html += f'''
    <div class="card">
      <div class="card-head">
        <span class="card-title">{esc(chan)}:</span>
        <span class="chip chip-{color}">{esc(verdict.rstrip('.'))}</span>
      </div>
      <p class="card-explain">{esc(expl)}</p>
    </div>
    '''

html_doc = f"""<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
@font-face {{ font-family:"Poppins"; src:url("assets/Poppins-400-normal.ttf"); font-weight:400; }}
@font-face {{ font-family:"Poppins"; src:url("assets/Poppins-500-normal.ttf"); font-weight:500; }}
@font-face {{ font-family:"Poppins"; src:url("assets/Poppins-600-normal.ttf"); font-weight:600; }}
@font-face {{ font-family:"Poppins"; src:url("assets/Poppins-700-normal.ttf"); font-weight:700; }}
@font-face {{ font-family:"Poppins"; src:url("assets/Poppins-800-normal.ttf"); font-weight:800; }}
@font-face {{ font-family:"Source Sans 3"; src:url("assets/SourceSans3-400-normal.ttf"); font-weight:400; }}
@font-face {{ font-family:"Source Sans 3"; src:url("assets/SourceSans3-400-italic.ttf"); font-weight:400; font-style:italic; }}
@font-face {{ font-family:"Source Sans 3"; src:url("assets/SourceSans3-500-normal.ttf"); font-weight:500; }}
@font-face {{ font-family:"Source Sans 3"; src:url("assets/SourceSans3-600-normal.ttf"); font-weight:600; }}

:root {{
  --red: #C8272A;
  --red-deep: #A31F22;
  --ink: #262019;
  --ink-soft: #5A5148;
  --cream: #FBF6EC;
  --cream-deep: #F2EAD8;
  --border: #E3DAC5;
  --code-bg: #F4EFE2;
  --green: #1E8449;
  --yellow: #B7860B;
}}

* {{ box-sizing: border-box; }}
html, body {{ margin:0; padding:0; font-family:"Source Sans 3", sans-serif; color: var(--ink);
  font-size: 9.5pt; line-height: 1.46; }}
h1,h2,h3,h4 {{ font-family:"Poppins", sans-serif; margin:0; }}
p {{ margin: 0 0 6pt 0; }}

@page cover {{ size: A4; margin: 0; }}
.cover-page {{
  page: cover; width:100%; height:297mm;
  background: linear-gradient(160deg, #FBF6EC 0%, #F5EBD0 55%, #EEDFB9 100%);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  position:relative; page-break-after: always;
}}
.cover-bar {{ position:absolute; left:0; right:0; height:9px;
  background: linear-gradient(90deg, var(--red) 0%, #E4901F 60%, #F0A227 100%); }}
.cover-bar.top {{ top:0; }} .cover-bar.bottom {{ bottom:0; }}
.cover-kicker {{ font-family:"Poppins",sans-serif; font-weight:600; letter-spacing:3px;
  text-transform:uppercase; font-size:9.5pt; color:#B5651D; margin-bottom:10pt; }}
.cover-title {{ font-family:"Poppins",sans-serif; font-weight:800; font-size:25pt;
  color: var(--red-deep); text-align:center; line-height:1.28; max-width:460pt; }}
.cover-sub {{ margin-top:16pt; font-family:"Poppins",sans-serif; font-weight:500;
  font-size:12pt; color: var(--ink-soft); text-align:center; max-width: 420pt; }}
.cover-divider {{ width:60pt; height:3px; background:#E4901F; margin:20pt 0; }}
.cover-toc {{ margin-top: 26pt; text-align:left; font-size:9.3pt; color: var(--ink-soft); }}
.cover-toc div {{ margin-bottom: 4pt; }}
.cover-toc b {{ color: var(--red-deep); font-family:"Poppins",sans-serif; }}
.cover-footer {{ position:absolute; bottom:44pt; text-align:center; font-size:8.3pt;
  letter-spacing:1.2px; text-transform:uppercase; color: var(--ink-soft); }}

@page content {{
  size: A4;
  margin: 24mm 18mm 22mm 18mm;
  @top-center {{ content:""; border-top:2.4px solid #E4901F; display:block; width:100%; }}
  @top-left {{ content:"REFERRAL PROGRAM & GOOGLE ADS"; font-family:"Poppins",sans-serif;
    font-weight:600; font-size:7.2pt; letter-spacing:0.7px; color: var(--ink-soft);
    white-space:nowrap; padding-top:6pt; }}
  @top-right {{ content:"Formulas, Worked Examples & Health Check"; font-family:"Source Sans 3",sans-serif;
    font-style:italic; font-size:7.4pt; color: var(--ink-soft); white-space:nowrap; padding-top:6pt; }}
  @bottom-right {{ content:"Page " counter(page) " of " counter(pages);
    font-family:"Source Sans 3",sans-serif; font-size:8pt; color: var(--ink-soft); }}
  @bottom-center {{ content:""; border-top:0.75px solid var(--border); display:block; width:100%; }}
}}
.content-page {{ page: content; }}

h2.sec {{ font-weight:700; font-size:14pt; color: var(--red-deep); margin: 0 0 4pt 0;
  break-after: avoid; }}
.sec-rule {{ height:2px; margin: 5pt 0 11pt 0;
  background: linear-gradient(90deg, #E4901F 0%, #EFDDB8 45%, transparent 78%);
  break-after: avoid; }}
.sec-intro {{ margin-bottom: 9pt; color: var(--ink); }}
.lead-in {{ margin: 9pt 0 5pt 0; }}
.section-block {{ margin-bottom: 18pt; }}

h3.group-title {{ font-size: 10.6pt; font-weight:700; color: var(--ink);
  margin: 13pt 0 7pt 0; padding-bottom:3pt; border-bottom: 1px solid var(--border);
  break-after: avoid; }}

.fcard {{ border:1px solid var(--border); border-radius:4px; padding: 8pt 10pt;
  margin-bottom: 7pt; break-inside: avoid; background:#fff; }}
.fcard .formula {{ margin-bottom: 5pt; }}
.fcard-explain {{ margin:0; color: var(--ink-soft); font-size:9.1pt; }}

.formula {{ font-family: monospace; font-size: 8.6pt; background: var(--code-bg);
  border: 1px solid var(--border); border-radius: 3px; padding: 6pt 8pt; margin-bottom: 8pt;
  white-space: pre-wrap; word-break: break-word; color:#3A3226; font-weight:600; }}

.card {{ border: 1px solid var(--border); border-radius: 4px; padding: 8pt 10pt;
  margin-bottom: 7pt; break-inside: avoid; background: #FFFFFF; }}
.card-head {{ display:flex; align-items:center; gap:8pt; margin-bottom:5pt; }}
.card-title {{ font-weight:700; font-size:10pt; }}
.card-explain {{ margin:0; color: var(--ink-soft); font-size:9.1pt; }}

.subcard {{ border:1px solid var(--border); border-radius:4px; padding:9pt 11pt;
  margin-bottom: 9pt; break-inside: avoid; background:#fff; }}
.subcard-title {{ display:flex; align-items:center; gap:7pt; font-size:10.4pt;
  font-weight:700; margin-bottom:6pt; }}
.mini-badge {{ flex:none; width:16pt; height:16pt; border-radius:3px; background: var(--red);
  color:#fff; font-family:"Poppins",sans-serif; font-weight:700; font-size:8.2pt;
  display:flex; align-items:center; justify-content:center; }}
.kv-label {{ font-size:8.8pt; color: var(--ink-soft); font-style:italic; margin: 0 0 4pt 0; }}

table.kv-table {{ width:100%; border-collapse:collapse; margin-bottom:6pt; }}
table.kv-table td {{ padding: 3.5pt 6pt; font-size:8.9pt; border-bottom:1px solid var(--border); }}
table.kv-table tr:last-child td {{ border-bottom:none; }}
.kv-key {{ color: var(--ink-soft); width:44%; }}
.kv-val {{ font-family: monospace; font-weight:600; color: var(--red-deep); }}

table.ref-table {{ width:100%; border-collapse:collapse; margin-bottom:11pt; break-inside: avoid; }}
table.ref-table th {{ background: var(--red); color:#fff; font-family:"Poppins",sans-serif;
  font-weight:600; font-size:8.1pt; text-align:left; padding:5.5pt 7pt; border:1px solid var(--red); }}
table.ref-table td {{ border:1px solid var(--border); padding:5.5pt 7pt; font-size:8.6pt;
  vertical-align:top; }}
.num-cell {{ font-family: monospace; }}
.table-caption {{ font-weight:600; font-size:9.3pt; margin: 10pt 0 5pt 0; color: var(--ink); }}

ol.num-list {{ margin: 0 0 8pt 0; padding-left: 0; list-style:none; counter-reset: nl; }}
ol.num-list li {{ counter-increment: nl; position:relative; padding-left:20pt;
  margin-bottom:7pt; font-size:9.2pt; color: var(--ink); break-inside: avoid; }}
ol.num-list li::before {{ content: counter(nl); position:absolute; left:0; top:0.5pt;
  width:14pt; height:14pt; border-radius:50%; background: var(--cream-deep);
  border:1.2px solid #E4901F; color: var(--red-deep); font-family:"Poppins",sans-serif;
  font-weight:700; font-size:7.6pt; display:flex; align-items:center; justify-content:center; }}
ol.num-list li strong {{ color: var(--ink); }}

ul.plain-list {{ margin: 0 0 8pt 0; padding-left: 15pt; }}
ul.plain-list li {{ margin-bottom: 4pt; font-size:9.2pt; }}

ul.dash-list {{ margin: 0 0 8pt 0; padding-left: 0; list-style:none; }}
ul.dash-list li {{ position:relative; padding-left:14pt; margin-bottom:7pt; font-size:9.2pt;
  color: var(--ink); break-inside: avoid; }}
ul.dash-list li::before {{ content:""; position:absolute; left:0; top:5.5pt; width:6pt;
  height:6pt; background: #E4901F; transform: rotate(45deg); }}
ul.dash-list li strong {{ color: var(--ink); }}

.note-box {{ background: var(--cream-deep); border-left:3px solid var(--red);
  padding: 9pt 11pt; margin-top: 8pt; font-size:9pt; color: var(--ink-soft); }}

.chip {{ display:inline-block; padding:2pt 8pt; border-radius:9pt; font-family:"Poppins",sans-serif;
  font-weight:700; font-size:8pt; color:#fff; white-space:nowrap; }}
.chip-red {{ background:#C0392B; }}
.chip-yellow {{ background:#B7860B; }}
.chip-green {{ background:#1E8449; }}

.bottom-line-box {{ background: var(--red); color:#fff; border-radius:5px; padding:12pt 14pt;
  margin-top: 10pt; }}
.bottom-line-box .bl-label {{ font-family:"Poppins",sans-serif; font-weight:700; font-size:9.3pt;
  text-transform:uppercase; letter-spacing:0.6px; margin-bottom:4pt; }}
.bottom-line-box p {{ margin:0; font-size:9.6pt; line-height:1.5; }}
</style>
</head>
<body>

<div class="cover-page">
  <div class="cover-bar top"></div>
  <div class="cover-kicker">Formulas &middot; Worked Examples &middot; Health Check</div>
  <div class="cover-title">Referral Program &amp; Google Ads<br>Economics, Explained</div>
  <div class="cover-divider"></div>
  <div class="cover-sub">Every formula, a full worked example on both channels, and a
    margin-sensitivity check on whether the referral program and Google Ads are actually
    healthy, not just profitable this month.</div>
  <div class="cover-toc">
    <div><b>1.</b> Referral Program Formulas — Explained</div>
    <div><b>2.</b> Google Ads Formulas — Explained</div>
    <div><b>3.</b> Worked Examples — Referral Program &amp; Google Ads</div>
    <div><b>4.</b> What Peter Should Actually Be Looking At</div>
    <div><b>5.</b> Is Google Ads Still Healthy, or Eating Away Margins?</div>
    <div><b>6.</b> How to Calculate Your Real Numbers</div>
    <div><b>7.</b> Sensitivity Analysis Across Different Margins</div>
    <div><b>8.</b> Health Status &amp; Bottom Line</div>
  </div>
  <div class="cover-footer">G&amp;P Solar Systems &middot; Referral Program &amp; Paid Acquisition Review</div>
  <div class="cover-bar bottom"></div>
</div>

<div class="content-page">

<div class="section-block">
<h2 class="sec">1. Referral Program Formulas — Explained</h2>
<div class="sec-rule"></div>
{referral_formulas_html}
</div>

<div class="section-block">
<h2 class="sec">2. Google Ads Formulas — Explained</h2>
<div class="sec-rule"></div>
{ads_formulas_html}
</div>

<div class="section-block">
<h2 class="sec">3. Worked Examples</h2>
<div class="sec-rule"></div>
<h3 class="group-title">Referral Program (17 Referrals)</h3>
{worked_referral_html}
<h3 class="group-title">Google Ads</h3>
{worked_ads_html}
</div>

<div class="section-block">
<h2 class="sec">4. What Peter Should Actually Be Looking At</h2>
<div class="sec-rule"></div>
{peter_html}
</div>

<div class="section-block">
<h2 class="sec">5. Is Google Ads Still Healthy, or Eating Away Margins?</h2>
<div class="sec-rule"></div>
{ads_health_html}
</div>

<div class="section-block">
<h2 class="sec">6. How to Calculate Your Real Numbers</h2>
<div class="sec-rule"></div>
<p class="sec-intro">Worked examples for the four inputs this whole document currently
assumes rather than measures.</p>
{real_numbers_html}
</div>

<div class="section-block">
<h2 class="sec">7. Sensitivity Analysis: CAC-to-Margin Ratio Across Different Margins</h2>
<div class="sec-rule"></div>
{sensitivity_html}
</div>

<div class="section-block">
<h2 class="sec">8. Health Status: Healthy / Needs Attention / Caution</h2>
<div class="sec-rule"></div>
{status_table_html}
<p class="lead-in"><strong>Where both channels currently sit:</strong></p>
{status_current_html}
<div class="bottom-line-box">
  <div class="bl-label">Bottom Line</div>
  <p>{esc(c.BOTTOM_LINE)}</p>
</div>
</div>

</div>

</body>
</html>
"""

with open(f"{OUT_DIR}/index.html", "w") as f:
    f.write(html_doc)

doc = HTML(filename=f"{OUT_DIR}/index.html", base_url=OUT_DIR).render()
doc.metadata.title = "Referral Program & Google Ads — Formulas, Worked Examples & Health Check"
doc.metadata.authors = ["G&P Solar Systems"]
doc.metadata.description = ("Formulas, worked examples, and a margin-sensitivity health "
                             "check for the referral program and Google Ads channel")
doc.write_pdf(f"{OUT_DIR}/Referral_and_Ads_Formulas_Explained.pdf")
print("PDF built")
