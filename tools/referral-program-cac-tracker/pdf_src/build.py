import html
import os
import sys

SRC_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SRC_DIR)
from content import (RATE_CELLS, INSTALL_LOG_GROUPS, DASHBOARD_GROUPS,
                      STATUS_FORMULA, STATUS_RULES, EXAMPLE_ROW)
from weasyprint import HTML

OUT_DIR = SRC_DIR


def esc(s):
    return html.escape(str(s), quote=False)


def field_card(f):
    type_tag = ('<span class="tag tag-manual">Manual entry</span>' if f["type"] == "manual"
                else '<span class="tag tag-formula">Formula</span>')
    formula_html = (f'<div class="formula">{esc(f["formula"])}</div>'
                     if f.get("formula") else "")
    return f'''
    <div class="card">
      <div class="card-head">
        <span class="col-badge">{esc(f["col"])}</span>
        <span class="card-title">{esc(f["name"])}</span>
        {type_tag}
      </div>
      {formula_html}
      <p class="card-explain">{esc(f["explain"])}</p>
    </div>
    '''


def metric_card(m):
    formula_html = (f'<div class="formula">{esc(m["formula"])}</div>'
                     if m.get("formula") else "")
    explain_html = (f'<p class="card-explain">{esc(m["explain"])}</p>'
                     if m.get("explain") else "")
    return f'''
    <div class="card">
      <div class="card-head">
        <span class="cell-badge">{esc(m["cell"])}</span>
        <span class="card-title">{esc(m["name"])}</span>
      </div>
      {formula_html}
      {explain_html}
    </div>
    '''


install_log_html = ""
for group in INSTALL_LOG_GROUPS:
    install_log_html += f'<h3 class="group-title">{esc(group["title"])}</h3>\n'
    for f in group["fields"]:
        install_log_html += field_card(f)

dashboard_html = ""
for group in DASHBOARD_GROUPS:
    dashboard_html += f'<h3 class="group-title">{esc(group["title"])}</h3>\n'
    for m in group["metrics"]:
        dashboard_html += metric_card(m)

rate_rows_html = "".join(
    f'''<tr>
        <td class="mono">{esc(cell)}</td>
        <td>{esc(name)}</td>
        <td class="rate-val">{esc(val)}</td>
        <td>{esc(note)}</td>
      </tr>'''
    for cell, name, val, note in RATE_CELLS
)

status_rows_html = "".join(
    f'''<tr>
        <td><span class="status-chip status-{color}">{esc(label)}</span></td>
        <td>{esc(rule)}</td>
      </tr>'''
    for label, color, rule in STATUS_RULES
)

example_rows_html = "".join(
    f'<tr><td>{esc(k)}</td><td class="ex-val">{esc(v)}</td></tr>'
    for k, v in EXAMPLE_ROW.items()
)

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
  --blue: #1D4ED8;
}}

* {{ box-sizing: border-box; }}
html, body {{
  margin:0; padding:0;
  font-family:"Source Sans 3", sans-serif;
  color: var(--ink);
  font-size: 9.6pt;
  line-height: 1.48;
}}
h1,h2,h3,h4 {{ font-family:"Poppins", sans-serif; margin:0; }}
p {{ margin: 0 0 6pt 0; }}

@page cover {{ size: A4; margin: 0; }}
.cover-page {{
  page: cover;
  width: 100%; height: 297mm;
  background: linear-gradient(160deg, #FBF6EC 0%, #F5EBD0 55%, #EEDFB9 100%);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  position:relative;
  page-break-after: always;
}}
.cover-bar {{ position:absolute; left:0; right:0; height:9px;
  background: linear-gradient(90deg, var(--red) 0%, #E4901F 60%, #F0A227 100%); }}
.cover-bar.top {{ top:0; }} .cover-bar.bottom {{ bottom:0; }}
.cover-kicker {{ font-family:"Poppins",sans-serif; font-weight:600; letter-spacing:3px;
  text-transform:uppercase; font-size:10pt; color:#B5651D; margin-bottom:10pt; }}
.cover-title {{ font-family:"Poppins",sans-serif; font-weight:800; font-size:28pt;
  color: var(--red-deep); text-align:center; line-height:1.25; max-width:460pt; }}
.cover-sub {{ margin-top:16pt; font-family:"Poppins",sans-serif; font-weight:500;
  font-size:12.5pt; color: var(--ink-soft); text-align:center; }}
.cover-divider {{ width:60pt; height:3px; background:#E4901F; margin:20pt 0; }}
.cover-note {{ margin-top:30pt; max-width:400pt; text-align:center; font-size:9.5pt;
  color: var(--ink-soft); font-style:italic; }}
.cover-footer {{ position:absolute; bottom:44pt; text-align:center; font-size:8.5pt;
  letter-spacing:1.2px; text-transform:uppercase; color: var(--ink-soft); }}

@page content {{
  size: A4;
  margin: 24mm 18mm 22mm 18mm;
  @top-center {{ content:""; border-top:2.4px solid #E4901F; display:block; width:100%; }}
  @top-left {{ content:"REFERRAL PROGRAM CAC TRACKER"; font-family:"Poppins",sans-serif;
    font-weight:600; font-size:7.2pt; letter-spacing:0.8px; color: var(--ink-soft);
    white-space:nowrap; padding-top:6pt; }}
  @top-right {{ content:"Formulas & Methodology"; font-family:"Source Sans 3",sans-serif;
    font-style:italic; font-size:7.6pt; color: var(--ink-soft); white-space:nowrap; padding-top:6pt; }}
  @bottom-left {{ content:"Companion guide to Referral_Program_CAC_Tracker.xlsx";
    font-family:"Source Sans 3",sans-serif; font-size:7.6pt; font-style:italic;
    color: var(--ink-soft); white-space:nowrap; }}
  @bottom-right {{ content:"Page " counter(page) " of " counter(pages);
    font-family:"Source Sans 3",sans-serif; font-size:8pt; color: var(--ink-soft); }}
  @bottom-center {{ content:""; border-top:0.75px solid var(--border); display:block; width:100%; }}
}}
.content-page {{ page: content; }}

h2.sec {{
  font-weight:700; font-size:14.5pt; color: var(--red-deep);
  margin: 0 0 4pt 0; break-after: avoid;
}}
.sec-rule {{ height:2px; margin: 5pt 0 12pt 0;
  background: linear-gradient(90deg, #E4901F 0%, #EFDDB8 45%, transparent 78%);
  break-after: avoid; }}
.sec-intro {{ margin-bottom: 10pt; color: var(--ink); }}
.section-block {{ margin-bottom: 20pt; }}

h3.group-title {{
  font-size: 10.8pt; font-weight:700; color: var(--ink);
  margin: 14pt 0 7pt 0; padding-bottom:3pt;
  border-bottom: 1px solid var(--border);
  break-after: avoid;
}}

.card {{
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 8pt 10pt;
  margin-bottom: 7pt;
  break-inside: avoid;
  background: #FFFFFF;
}}
.card-head {{ display:flex; align-items:center; gap:7pt; margin-bottom:5pt; }}
.col-badge {{
  flex:none; width:17pt; height:17pt; border-radius:3px;
  background: var(--red); color:#fff; font-family:"Poppins",sans-serif; font-weight:700;
  font-size:8.6pt; display:flex; align-items:center; justify-content:center;
}}
.cell-badge {{
  flex:none; padding: 1.5pt 6pt; border-radius:3px;
  background: var(--cream-deep); border:1px solid var(--border);
  color: var(--red-deep); font-family:"Source Sans 3",sans-serif; font-weight:600;
  font-size:8pt; font-family: monospace;
}}
.card-title {{ font-weight:700; font-size:9.8pt; flex:1; }}
.tag {{ flex:none; font-size:7.3pt; font-weight:600; padding:2pt 6pt; border-radius:8pt;
  text-transform:uppercase; letter-spacing:0.4px; }}
.tag-manual {{ background:#DCE7FB; color: var(--blue); }}
.tag-formula {{ background:#EDEDED; color:#444; }}
.formula {{
  font-family: monospace;
  font-size: 8.1pt;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 5pt 7pt;
  margin-bottom: 5pt;
  white-space: pre-wrap;
  word-break: break-word;
  color: #3A3226;
}}
.card-explain {{ margin:0; color: var(--ink-soft); font-size:9.2pt; }}

table.ref-table {{ width:100%; border-collapse:collapse; margin-bottom:10pt; }}
table.ref-table th {{
  background: var(--red); color:#fff; font-family:"Poppins",sans-serif; font-weight:600;
  font-size:8.6pt; text-align:left; padding:6pt 8pt; border:1px solid var(--red);
}}
table.ref-table td {{ border:1px solid var(--border); padding:6pt 8pt; font-size:9pt;
  vertical-align:top; }}
.mono {{ font-family: monospace; font-size:8.6pt; color: var(--red-deep); font-weight:600; }}
.rate-val {{ font-weight:700; color: var(--ink); }}

.status-chip {{ display:inline-block; padding:2.5pt 9pt; border-radius:10pt;
  font-family:"Poppins",sans-serif; font-weight:700; font-size:8.6pt; color:#fff; }}
.status-red {{ background:#C0392B; }}
.status-yellow {{ background:#B7860B; }}
.status-green {{ background:#1E8449; }}

.example-box {{ border:1px solid var(--border); border-radius:4px; overflow:hidden;
  break-inside: avoid; }}
.example-box table {{ width:100%; border-collapse:collapse; }}
.example-box td {{ padding:5pt 9pt; font-size:9pt; border-bottom:1px solid var(--border); }}
.example-box tr:last-child td {{ border-bottom:none; }}
.example-box td:first-child {{ color: var(--ink-soft); width:46%; }}
.ex-val {{ font-family: monospace; font-weight:600; color: var(--red-deep); }}

.note-box {{
  background: var(--cream-deep); border-left:3px solid var(--red);
  padding: 9pt 11pt; margin-top: 8pt; font-size:9pt; color: var(--ink-soft);
}}
</style>
</head>
<body>

<div class="cover-page">
  <div class="cover-bar top"></div>
  <div class="cover-kicker">Formulas &amp; Methodology</div>
  <div class="cover-title">Referral Program CAC Tracker</div>
  <div class="cover-divider"></div>
  <div class="cover-sub">A field-by-field guide to every formula in<br>Referral_Program_CAC_Tracker.xlsx</div>
  <div class="cover-note">Every formula below is copied verbatim from the workbook, using row 8
    (Install&nbsp;#1) as the worked reference row. The same formula pattern repeats down to row 37 (Install&nbsp;#30).</div>
  <div class="cover-footer">G&amp;P Solar Systems &middot; Murage Farms Referral Program</div>
  <div class="cover-bar bottom"></div>
</div>

<div class="content-page">

<div class="section-block">
<h2 class="sec">1. Overview</h2>
<div class="sec-rule"></div>
<p class="sec-intro">
Referral_Program_CAC_Tracker.xlsx is a two-sheet workbook for tracking customer acquisition
cost (CAC) across the first 30 installs of the referral program. <strong>Install Log</strong>
holds one row per install, with manual-entry deal data and 12 auto-calculating columns.
<strong>Summary Dashboard</strong> rolls those 30 rows up into blended totals, a trend check,
and a single traffic-light verdict on whether the program is safe to scale.
</p>
<p class="sec-intro">
This document explains what every formula does and why it's built the way it is. It does not
replace the workbook — open Referral_Program_CAC_Tracker.xlsx to enter data; use this guide
as the reference when a formula needs checking or editing.
</p>
</div>

<div class="section-block">
<h2 class="sec">2. Editable Assumptions</h2>
<div class="sec-rule"></div>
<p class="sec-intro">Three cells at the top of Install Log drive every row's commission and
discount math. They're the only inputs meant to change after the program launches.</p>
<table class="ref-table">
<tr><th style="width:9%">Cell</th><th style="width:26%">Assumption</th><th style="width:12%">Current Value</th><th>Notes</th></tr>
{rate_rows_html}
</table>
</div>

<div class="section-block">
<h2 class="sec">3. Install Log — Column Reference</h2>
<div class="sec-rule"></div>
<p class="sec-intro">Columns A–E and K, N are manual entry (blue text in the workbook). Every
other column is a formula (black text) and recalculates automatically as soon as the manual
cells in its row are filled in.</p>
{install_log_html}
</div>

<div class="section-block">
<h2 class="sec">4. Summary Dashboard — Metric Reference</h2>
<div class="sec-rule"></div>
<p class="sec-intro">Every metric below reads from the 30-row range Install&nbsp;Log!8:37, so it
updates automatically as rows are filled in — no manual refresh needed.</p>
{dashboard_html}
</div>

<div class="section-block">
<h2 class="sec">5. Program Status Logic</h2>
<div class="sec-rule"></div>
<p class="sec-intro">The large status cell on the dashboard evaluates this formula against
Average CAC-to-Margin Ratio (B14) and the Trend Indicator (B19):</p>
<div class="formula">{esc(STATUS_FORMULA)}</div>
<table class="ref-table">
<tr><th style="width:26%">Result</th><th>Trigger condition</th></tr>
{status_rows_html}
</table>
<div class="note-box">
Reading note: a climbing trend keeps the status out of "SAFE TO SCALE" even when the average
ratio is still under 0.35 — it falls back to "REVIEW NEEDED" instead, since a rising CAC trend
isn't "stable" even if it hasn't crossed a hard threshold yet. This is a judgment call built
into the nested IF above, not a number from the original program terms — adjust the formula
directly if a different interpretation is wanted.
</div>
</div>

<div class="section-block">
<h2 class="sec">6. Worked Example — Install #1</h2>
<div class="sec-rule"></div>
<p class="sec-intro">Row 8 in the shipped workbook is a filled-in example so the expected
format is obvious. Here is the same row traced through every formula by hand:</p>
<div class="example-box">
<table>
{example_rows_html}
</table>
</div>
</div>

</div>

</body>
</html>
"""

with open(f"{OUT_DIR}/index.html", "w") as f:
    f.write(html_doc)

doc = HTML(filename=f"{OUT_DIR}/index.html", base_url=OUT_DIR).render()
doc.metadata.title = "Referral Program CAC Tracker — Formulas & Methodology"
doc.metadata.authors = ["G&P Solar Systems"]
doc.metadata.description = "Formula-by-formula reference for Referral_Program_CAC_Tracker.xlsx"
doc.write_pdf(f"{OUT_DIR}/Referral_Program_CAC_Tracker_Formulas.pdf")
print("PDF built")
