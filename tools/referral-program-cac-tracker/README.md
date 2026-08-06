# Referral Program CAC Tracker

`Referral_Program_CAC_Tracker.xlsx` tracks customer acquisition cost across the first 30
installs of the referral program.

`Referral_Program_CAC_Tracker_Formulas.pdf` is a companion reference document: every column
and dashboard metric explained in plain English, with its exact formula (copied verbatim from
the workbook) and a hand-worked example using Install #1. Read this when a formula needs
checking or explaining to someone who isn't going to open the spreadsheet.

## Sheets

- **Install Log** — one row per install (30 rows, pre-built with formulas). Manual-entry
  cells (Referral Code, Referrer Name, Installation Date, Installation Value, Cost of
  Materials/Labor/Logistics, Overhead Allocation) are in blue text; everything else is
  auto-calculated. Row 8 (Install #1) is a filled-in example row showing the expected
  format — clear it before logging real data.
- **Summary Dashboard** — totals, blended CAC, average margin/ratio, a 1–15 vs 16–30 trend
  check, and a large status cell (SAFE TO SCALE / REVIEW NEEDED / RENEGOTIATE TERMS).

## Editable assumptions

The Commission Rate and the two Discount Rate cells (yellow fill, top of Install Log) drive
every row's Commission %/Discount % formulas — update them there rather than per row.

## Regenerating

```
pip install openpyxl
python3 build_xlsx.py
```

Then recalculate with the `xlsx` skill's `recalc.py` (LibreOffice) so the formula results are
cached in the file — openpyxl alone leaves formula cells blank until a spreadsheet app opens
and recalculates them.

To regenerate the PDF after editing a formula in `build_xlsx.py`, update the matching entry in
`pdf_src/content.py` (formulas are duplicated there, not read from the workbook) and run:

```
pip install weasyprint
python3 pdf_src/build.py
```
