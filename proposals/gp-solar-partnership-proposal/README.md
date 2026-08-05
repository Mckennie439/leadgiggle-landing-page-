# G&P Solar Systems — Partnership Proposal

`GP_Solar_Partnership_Proposal.pdf` is the print-ready proposal prepared for Murage Farms.

## Regenerating the PDF

```
pip install weasyprint matplotlib
python3 src/make_logo.py   # regenerates the brand mark assets
python3 src/build.py       # builds index.html and the PDF
```

- `src/content.py` holds the section copy.
- `src/build.py` renders the HTML/CSS layout and exports the PDF via WeasyPrint.
- `src/make_logo.py` generates the sunburst brand mark (`assets/*.png`) used on the cover, footer, and closing page.
- `assets/` also holds the Poppins and Source Sans 3 font files used for headings and body text.
