"""Content for the CAC Tracker formula/methodology PDF.
Formulas here are copied verbatim from Referral_Program_CAC_Tracker.xlsx (row 8 = Install #1,
the first data row) so the documentation always matches the shipped workbook.
"""

RATE_CELLS = [
    ("D3", "Commission Rate (all tiers)", "5.0%",
     "Applied to every install regardless of tier, per the current program structure. "
     "Referenced by every row's Commission % formula — change it once here and all 30 "
     "rows re-price."),
    ("D4", "Discount Rate – Above 250k", "4.0%",
     "Discount applied to installs valued at KES 250,000 or more."),
    ("D5", "Discount Rate – 150k–250k", "3.0%",
     "Discount applied to installs valued between KES 150,000 and KES 249,999."),
]

INSTALL_LOG_GROUPS = [
    {
        "title": "Deal Basics",
        "fields": [
            {
                "col": "A", "name": "Install #", "type": "formula",
                "formula": "=ROW()-7",
                "explain": ("Sequential install number, derived from the row position so it "
                            "stays correct even if rows are reordered. Row 8 is Install #1, "
                            "row 37 is Install #30."),
            },
            {
                "col": "B", "name": "Referral Code", "type": "manual",
                "explain": "The unique code the farmer quoted when they first contacted G&P.",
            },
            {
                "col": "C", "name": "Referrer Name", "type": "manual",
                "explain": "Who the commission and program credit belong to.",
            },
            {
                "col": "D", "name": "Installation Date", "type": "manual",
                "explain": "Date the installation was completed and the deal closed.",
            },
            {
                "col": "E", "name": "Installation Value (KES)", "type": "manual",
                "explain": ("The closed deal value. Every downstream formula in the row keys "
                            "off this cell — leaving it blank keeps the whole row blank."),
            },
            {
                "col": "F", "name": "Tier", "type": "formula",
                "formula": '=IF(E8="","",IF(E8>=250000,"Above 250k",'
                           'IF(E8>=150000,"150k-250k","Below 150k")))',
                "explain": ('Buckets the install by Installation Value. "Below 150k" is a '
                            "safety net the spec didn't define a rate for — see the note "
                            "under Discount % below."),
            },
        ],
    },
    {
        "title": "Commission",
        "fields": [
            {
                "col": "G", "name": "Commission %", "type": "formula",
                "formula": '=IF(E8="","",$D$3)',
                "explain": ("Pulls the flat rate from the editable Commission Rate cell "
                            "(D3) rather than hardcoding 5% into every row."),
            },
            {
                "col": "H", "name": "Commission Paid (KES)", "type": "formula",
                "formula": '=IF(E8="","",E8*G8)',
                "explain": "Installation Value × Commission %.",
            },
        ],
    },
    {
        "title": "Discount",
        "fields": [
            {
                "col": "I", "name": "Discount %", "type": "formula",
                "formula": '=IF(F8="","",IF(F8="Above 250k",$D$4,'
                           'IF(F8="150k-250k",$D$5,0)))',
                "explain": ('Looks up the rate for the row\'s Tier from D4/D5. A "Below 150k" '
                            "install gets 0% here — the program terms didn't specify a rate "
                            "for that band, so it defaults to no discount rather than "
                            "guessing at one."),
            },
            {
                "col": "J", "name": "Discount Given (KES)", "type": "formula",
                "formula": '=IF(E8="","",E8*I8)',
                "explain": "Installation Value × Discount %.",
            },
        ],
    },
    {
        "title": "Margin",
        "fields": [
            {
                "col": "K", "name": "Cost of Materials/Labor/Logistics (KES)", "type": "manual",
                "explain": "All-in delivered cost of the install: panels, inverter, labor, logistics.",
            },
            {
                "col": "L", "name": "Gross Margin (KES)", "type": "formula",
                "formula": '=IF(OR(E8="",K8=""),"",E8-K8)',
                "explain": ("Installation Value − Cost. Blank until both E and K are filled "
                            "in, so an unentered cost never silently reads as a zero-cost, "
                            "100%-margin install."),
            },
            {
                "col": "M", "name": "Gross Margin %", "type": "formula",
                "formula": '=IF(OR(L8="",E8="",E8=0),"",L8/E8)',
                "explain": "Gross Margin ÷ Installation Value.",
            },
        ],
    },
    {
        "title": "Acquisition Cost & Risk",
        "fields": [
            {
                "col": "N", "name": "Overhead Allocation (KES)", "type": "manual",
                "explain": ("This install's share of landing-page cost, admin time, and other "
                            "program overhead — however you choose to divide it across installs."),
            },
            {
                "col": "O", "name": "Total Acquisition Cost (KES)", "type": "formula",
                "formula": '=IF(OR(E8="",N8=""),"",H8+J8+N8)',
                "explain": "Commission Paid + Discount Given + Overhead Allocation.",
            },
            {
                "col": "P", "name": "CAC % of Deal Value", "type": "formula",
                "formula": '=IF(OR(O8="",E8="",E8=0),"",O8/E8)',
                "explain": "Total Acquisition Cost ÷ Installation Value.",
            },
            {
                "col": "Q", "name": "CAC-to-Margin Ratio", "type": "formula",
                "formula": '=IF(OR(O8="",L8="",L8=0),"",O8/L8)',
                "explain": ("Total Acquisition Cost ÷ Gross Margin — the core health metric: "
                            "how much of the profit on this install got spent acquiring it."),
            },
            {
                "col": "R", "name": "Flag", "type": "formula",
                "formula": '=IF(Q8="","",IF(Q8>0.4,"High Risk",'
                           'IF(Q8>=0.3,"Caution","Healthy")))',
                "explain": ("Labels the row from its CAC-to-Margin Ratio. Conditional "
                            "formatting colors this cell red above 0.40, yellow from 0.30–0.40, "
                            "and green below 0.30."),
            },
        ],
    },
]

DASHBOARD_GROUPS = [
    {
        "title": "Totals",
        "metrics": [
            {
                "name": "Installs Logged", "cell": "B3",
                "formula": "=COUNT('Install Log'!E8:E37)",
                "explain": "Counts rows with an Installation Value entered, out of the 30 available.",
            },
            {
                "name": "Total Installation Value (KES)", "cell": "B4",
                "formula": "=SUM('Install Log'!E8:E37)",
                "explain": None,
            },
            {
                "name": "Total Commissions Paid (KES)", "cell": "B5",
                "formula": "=SUM('Install Log'!H8:H37)",
                "explain": None,
            },
            {
                "name": "Total Discounts Given (KES)", "cell": "B6",
                "formula": "=SUM('Install Log'!J8:J37)",
                "explain": None,
            },
            {
                "name": "Total Overhead Allocated (KES)", "cell": "B7",
                "formula": "=SUM('Install Log'!N8:N37)",
                "explain": None,
            },
        ],
    },
    {
        "title": "Blended CAC Metrics",
        "metrics": [
            {
                "name": "Average Deal Value (KES)", "cell": "B10",
                "formula": "=IF(COUNT('Install Log'!E8:E37)=0,\"\","
                           "SUM('Install Log'!E8:E37)/COUNT('Install Log'!E8:E37))",
                "explain": "Total Installation Value ÷ Installs Logged.",
            },
            {
                "name": "Blended CAC (KES)", "cell": "B11",
                "formula": "=IF(COUNT('Install Log'!E8:E37)=0,\"\","
                           "SUM('Install Log'!O8:O37)/COUNT('Install Log'!E8:E37))",
                "explain": ("Total Acquisition Cost across all logged installs ÷ Installs "
                            "Logged — the average acquisition cost per install."),
            },
            {
                "name": "Blended CAC % of Avg Deal Value", "cell": "B12",
                "formula": '=IF(OR(B10="",B10=0),"",B11/B10)',
                "explain": "Blended CAC ÷ Average Deal Value.",
            },
            {
                "name": "Average Gross Margin %", "cell": "B13",
                "formula": "=IFERROR(AVERAGE('Install Log'!M8:M37),\"\")",
                "explain": "Straight average of each logged row's Gross Margin %.",
            },
            {
                "name": "Average CAC-to-Margin Ratio", "cell": "B14",
                "formula": "=IFERROR(AVERAGE('Install Log'!Q8:Q37),\"\")",
                "explain": ("Straight average of each logged row's CAC-to-Margin Ratio. This "
                            "is the number the Program Status box (below) is built on."),
            },
        ],
    },
    {
        "title": "Trend Check — Installs 1–15 vs 16–30",
        "metrics": [
            {
                "name": "Avg CAC-to-Margin Ratio, Installs 1–15", "cell": "B17",
                "formula": "=IFERROR(AVERAGE('Install Log'!Q8:Q22),\"\")",
                "explain": None,
            },
            {
                "name": "Avg CAC-to-Margin Ratio, Installs 16–30", "cell": "B18",
                "formula": "=IFERROR(AVERAGE('Install Log'!Q23:Q37),\"\")",
                "explain": None,
            },
            {
                "name": "Trend Indicator", "cell": "B19",
                "formula": '=IF(OR(B17="",B18=""),"Insufficient Data",'
                           'IF(B18>B17*1.05,"Climbing",'
                           'IF(B18<B17*0.95,"Improving","Stable")))',
                "explain": ('"Climbing" if the second-half average is more than 5% above the '
                            'first half; "Improving" if more than 5% below; otherwise "Stable". '
                            "The 5% band is an assumption, not a figure from the program terms — "
                            "the 1.05 / 0.95 multipliers in the formula are what to edit to "
                            "change the sensitivity."),
            },
        ],
    },
]

STATUS_FORMULA = ('=IF(B14="","INSUFFICIENT DATA",'
                   'IF(B14>0.4,"RENEGOTIATE TERMS",'
                   'IF(B14>=0.35,"REVIEW NEEDED",'
                   'IF(B19="Climbing","REVIEW NEEDED","SAFE TO SCALE"))))')

STATUS_RULES = [
    ("RENEGOTIATE TERMS", "red", "Average CAC-to-Margin Ratio (B14) is above 0.40."),
    ("REVIEW NEEDED", "yellow", "Average CAC-to-Margin Ratio is 0.35–0.40 — "
                                 "or it's under 0.35 but the Trend Indicator (B19) reads "
                                 '"Climbing."'),
    ("SAFE TO SCALE", "green", 'Average CAC-to-Margin Ratio is under 0.35 and the trend '
                                 'is not "Climbing."'),
]

EXAMPLE_ROW = {
    "Installation Value (KES)": "275,000",
    "Tier": "Above 250k  (≥ 250,000)",
    "Commission % → Commission Paid": "5.0% × 275,000 = KES 13,750",
    "Discount % → Discount Given": "4.0% × 275,000 = KES 11,000",
    "Cost of Materials/Labor/Logistics (KES)": "190,000",
    "Gross Margin → Gross Margin %": "275,000 − 190,000 = KES 85,000  (30.9%)",
    "Overhead Allocation (KES)": "3,000",
    "Total Acquisition Cost": "13,750 + 11,000 + 3,000 = KES 27,750",
    "CAC % of Deal Value": "27,750 ÷ 275,000 = 10.1%",
    "CAC-to-Margin Ratio → Flag": "27,750 ÷ 85,000 = 0.33  →  Caution",
}
