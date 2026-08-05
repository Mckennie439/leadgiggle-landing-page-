# G&P Solar Systems — Partnership Proposal

`GP_Solar_Partnership_Proposal.pdf` is the print-ready proposal prepared for Murage Farms.

## Regenerating the PDF

```
pip install weasyprint pillow numpy
python3 src/process_logo.py   # derives logo_transparent.png / footer_mark.png from the source logo
python3 src/build.py          # builds index.html and the PDF
```

- `src/content.py` holds the section copy.
- `src/build.py` renders the HTML/CSS layout and exports the PDF via WeasyPrint.
- `assets/logo_source_original.png` is the original G&P Solar Systems logo. `src/process_logo.py`
  chroma-keys out its flat background and crops it to produce `logo_transparent.png` (cover +
  closing watermark) and `footer_mark.png` (small running footer mark).
- `assets/` also holds the Poppins and Source Sans 3 font files used for headings and body text.
