# Referral Program & Google Ads — Economics, Explained

`Referral_and_Ads_Formulas_Explained.pdf` is a 9-page reference and analysis document covering:

1. Referral Program Formulas — Explained
2. Google Ads Formulas — Explained
3. Worked Examples (17 referrals across both tiers; the Google Ads campaign)
4. What Peter Should Actually Be Looking At
5. Is Google Ads Still Healthy, or Eating Away Margins?
6. How to Calculate Your Real Numbers (margin, close rate, ad CAC, overhead allocation)
7. Sensitivity Analysis: CAC-to-Margin Ratio Across Different Margins
8. Health Status (Healthy / Needs Attention / Caution) & Bottom Line

Every dollar figure in the worked examples and sensitivity tables is either a figure supplied
in conversation (the KES 12,914 / 24-day / KES 517,000 ad numbers, the 17-referral tier split)
or an explicitly labeled assumption (the 25% gross margin used throughout, and the four
placeholder inputs broken out in Section 6). Section 6 exists specifically so the placeholders
can be replaced with real numbers once they're available — see that section for what to pull
from the lead log and cost records.

## Regenerating

```
pip install weasyprint
python3 pdf_src/build.py
```

`pdf_src/content.py` holds all of the copy, formulas, and table data; `pdf_src/build.py`
renders it to HTML/CSS and exports the PDF via WeasyPrint. `pdf_src/assets/` holds the Poppins
and Source Sans 3 font files used for headings and body text.
