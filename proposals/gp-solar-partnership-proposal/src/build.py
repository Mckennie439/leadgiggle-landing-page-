import os
import sys

SRC_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SRC_DIR)
from content import SECTIONS
from weasyprint import HTML

OUT_DIR = os.path.dirname(SRC_DIR)

def section_html(s):
    parts = []
    parts.append('<section class="sec">')
    parts.append('<div class="sec-head">')
    parts.append(f'<span class="sec-num">{s["num"]}</span>')
    parts.append(f'<h2>{s["title"]}</h2>')
    parts.append('</div>')
    parts.append('<div class="sec-rule"></div>')
    if "paras" in s:
        for p in s["paras"]:
            parts.append(f'<p>{p}</p>')
    if "ordered" in s:
        parts.append('<ol class="steps">')
        for item in s["ordered"]:
            parts.append(f'<li>{item}</li>')
        parts.append('</ol>')
    if "bullets" in s:
        parts.append('<ul class="bullets">')
        for item in s["bullets"]:
            parts.append(f'<li>{item}</li>')
        parts.append('</ul>')
    parts.append('</section>')
    return "\n".join(parts)


sections_html = "\n".join(section_html(s) for s in SECTIONS)

html_doc = f"""<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
@font-face {{
  font-family: "Poppins";
  src: url("assets/Poppins-400-normal.ttf");
  font-weight: 400;
}}
@font-face {{
  font-family: "Poppins";
  src: url("assets/Poppins-500-normal.ttf");
  font-weight: 500;
}}
@font-face {{
  font-family: "Poppins";
  src: url("assets/Poppins-600-normal.ttf");
  font-weight: 600;
}}
@font-face {{
  font-family: "Poppins";
  src: url("assets/Poppins-700-normal.ttf");
  font-weight: 700;
}}
@font-face {{
  font-family: "Poppins";
  src: url("assets/Poppins-800-normal.ttf");
  font-weight: 800;
}}
@font-face {{
  font-family: "Source Sans 3";
  src: url("assets/SourceSans3-400-normal.ttf");
  font-weight: 400;
}}
@font-face {{
  font-family: "Source Sans 3";
  src: url("assets/SourceSans3-400-italic.ttf");
  font-weight: 400;
  font-style: italic;
}}
@font-face {{
  font-family: "Source Sans 3";
  src: url("assets/SourceSans3-500-normal.ttf");
  font-weight: 500;
}}
@font-face {{
  font-family: "Source Sans 3";
  src: url("assets/SourceSans3-600-normal.ttf");
  font-weight: 600;
}}

:root {{
  --red: #C6281D;
  --red-deep: #A82016;
  --orange: #E4901F;
  --gold: #F0A227;
  --cream: #FBF6E9;
  --cream-deep: #F3EAD1;
  --ink: #2B241D;
  --ink-soft: #56493B;
}}

* {{ box-sizing: border-box; }}

html, body {{
  margin: 0;
  padding: 0;
  font-family: "Source Sans 3", sans-serif;
  color: var(--ink);
  font-size: 10.3pt;
  line-height: 1.52;
}}

h1, h2, h3 {{
  font-family: "Poppins", sans-serif;
  margin: 0;
}}

p {{
  margin: 0 0 8pt 0;
  text-align: left;
}}

/* ---------- COVER PAGE ---------- */
@page cover {{
  size: A4;
  margin: 0;
}}

.cover-page {{
  page: cover;
  width: 100%;
  height: 297mm;
  background: linear-gradient(160deg, #FBF6E9 0%, #F7EED4 55%, #F1E3C2 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  page-break-after: always;
}}

.cover-rays-top {{
  position: absolute;
  top: -140px;
  right: -140px;
  width: 380px;
  opacity: 0.16;
}}
.cover-rays-bottom {{
  position: absolute;
  bottom: -160px;
  left: -160px;
  width: 420px;
  opacity: 0.12;
}}

.cover-bar {{
  position: absolute;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(90deg, var(--red) 0%, var(--orange) 55%, var(--gold) 100%);
}}
.cover-bar.top {{ top: 0; }}
.cover-bar.bottom {{ bottom: 0; }}

.cover-logo {{
  width: 168px;
  height: 168px;
  margin-bottom: 34pt;
  position: relative;
  z-index: 2;
}}

.cover-kicker {{
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  font-size: 10.5pt;
  color: var(--orange);
  margin-bottom: 10pt;
  position: relative;
  z-index: 2;
}}

.cover-title {{
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 30pt;
  color: var(--red-deep);
  text-align: center;
  line-height: 1.22;
  max-width: 460pt;
  position: relative;
  z-index: 2;
}}

.cover-sub {{
  margin-top: 20pt;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13.5pt;
  color: var(--ink-soft);
  text-align: center;
  position: relative;
  z-index: 2;
}}

.cover-sub .for-name {{
  color: var(--red);
  font-weight: 700;
}}

.cover-divider {{
  width: 64pt;
  height: 3px;
  background: var(--gold);
  margin: 22pt 0;
  position: relative;
  z-index: 2;
}}

.cover-footer {{
  position: absolute;
  bottom: 46pt;
  left: 0;
  right: 0;
  text-align: center;
  font-family: "Source Sans 3", sans-serif;
  font-size: 8.6pt;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--ink-soft);
  z-index: 2;
}}

/* ---------- CONTENT PAGES ---------- */
@page content {{
  size: A4;
  margin: 30mm 20mm 26mm 20mm;

  @top-center {{
    content: "";
    border-top: 2.6px solid var(--orange);
    display: block;
    width: 100%;
  }}
  @top-left {{
    content: "G&P SOLAR SYSTEMS";
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 7.4pt;
    letter-spacing: 0.8px;
    color: var(--ink-soft);
    white-space: nowrap;
    vertical-align: bottom;
    padding-top: 6pt;
  }}
  @top-right {{
    content: "Partnership Proposal";
    font-family: "Source Sans 3", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 7.8pt;
    color: var(--ink-soft);
    white-space: nowrap;
    vertical-align: bottom;
    padding-top: 6pt;
  }}
  @bottom-left {{
    content: url("assets/footer_mark.png") " G&P Solar Systems";
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 8pt;
    color: var(--ink-soft);
    vertical-align: middle;
    white-space: nowrap;
    width: 90mm;
    image-resolution: 1920dpi;
  }}
  @bottom-right {{
    content: "Page " counter(page) " of " counter(pages);
    font-family: "Source Sans 3", sans-serif;
    font-size: 8pt;
    color: var(--ink-soft);
    vertical-align: middle;
    white-space: nowrap;
    width: 60mm;
  }}
  @bottom-center {{
    content: "";
    border-top: 0.75px solid #E4D9BC;
    display: block;
    width: 100%;
  }}
}}

.content-page {{
  page: content;
}}

/* ---------- SECTION STYLES ---------- */
.sec {{
  break-inside: auto;
  margin-bottom: 15pt;
}}

.sec-head {{
  display: flex;
  align-items: center;
  gap: 9pt;
  break-after: avoid;
  break-inside: avoid;
}}

.sec-num {{
  flex: none;
  width: 21pt;
  height: 21pt;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--red) 0%, var(--orange) 100%);
  color: #FFFDF6;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 10pt;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}}

.sec-head h2 {{
  font-weight: 700;
  font-size: 13.3pt;
  color: var(--ink);
  letter-spacing: 0.1px;
}}

.sec-rule {{
  height: 2px;
  margin: 7pt 0 10pt 0;
  background: linear-gradient(90deg, var(--orange) 0%, #EFDDB8 42%, transparent 75%);
  break-after: avoid;
}}

.sec p {{
  color: var(--ink);
}}

ol.steps {{
  margin: 4pt 0 8pt 0;
  padding-left: 0;
  list-style: none;
  counter-reset: step;
}}
ol.steps li {{
  counter-increment: step;
  position: relative;
  padding-left: 24pt;
  margin-bottom: 7pt;
  break-inside: avoid;
}}
ol.steps li::before {{
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0.5pt;
  width: 16pt;
  height: 16pt;
  border-radius: 50%;
  background: var(--cream-deep);
  border: 1.3px solid var(--orange);
  color: var(--red-deep);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 8.3pt;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}}

ul.bullets {{
  margin: 4pt 0 8pt 0;
  padding-left: 0;
  list-style: none;
}}
ul.bullets li {{
  position: relative;
  padding-left: 16pt;
  margin-bottom: 7pt;
  break-inside: avoid;
}}
ul.bullets li::before {{
  content: "";
  position: absolute;
  left: 0;
  top: 6.2pt;
  width: 6.5pt;
  height: 6.5pt;
  background: var(--gold);
  transform: rotate(45deg);
}}

.closing {{
  margin-top: 6pt;
  padding: 14pt 16pt;
  background: var(--cream-deep);
  border-left: 3px solid var(--red);
  break-inside: avoid;
}}
.closing .cname {{
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 11.5pt;
  color: var(--red-deep);
  margin-bottom: 4pt;
}}
.closing .cline {{
  font-size: 9.3pt;
  color: var(--ink-soft);
  line-height: 1.55;
}}

.closing-mark {{
  margin-top: 34pt;
  display: flex;
  align-items: center;
  justify-content: center;
}}
.closing-mark img {{
  width: 150pt;
  opacity: 0.14;
}}

</style>
</head>
<body>

<div class="cover-page">
  <div class="cover-bar top"></div>
  <img class="cover-rays-top" src="assets/logo_transparent.png">
  <img class="cover-rays-bottom" src="assets/logo_transparent.png">
  <img class="cover-logo" src="assets/logo_transparent.png">
  <div class="cover-kicker">Referral Partnership</div>
  <div class="cover-title">G&amp;P Solar Systems<br>Partnership Proposal</div>
  <div class="cover-divider"></div>
  <div class="cover-sub">Prepared for <span class="for-name">Murage Farms</span></div>
  <div class="cover-footer">Ruiru &middot; Nairobi &middot; Kenya</div>
  <div class="cover-bar bottom"></div>
</div>

<div class="content-page">
{sections_html}

<div class="closing">
  <div class="cname">G&amp;P Solar Systems</div>
  <div class="cline">
    Karuguru Plaza, 146, off Thika Road, Ruiru, Nairobi<br>
    Phone: 0745207621 &nbsp;|&nbsp; Email: solarsystemsgp@gmail.com
  </div>
</div>

<div class="closing-mark"><img src="assets/logo_transparent.png"></div>

</div>

</body>
</html>
"""

with open(f"{OUT_DIR}/index.html", "w") as f:
    f.write(html_doc)

doc = HTML(filename=f"{OUT_DIR}/index.html", base_url=OUT_DIR).render()
doc.metadata.title = "G&P Solar Systems — Partnership Proposal"
doc.metadata.authors = ["G&P Solar Systems"]
doc.metadata.description = "Referral partnership proposal prepared for Murage Farms"
doc.write_pdf(f"{OUT_DIR}/GP_Solar_Partnership_Proposal.pdf")
print("PDF built")
