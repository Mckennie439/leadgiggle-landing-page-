"""Content for the Referral Program & Google Ads formulas/health-check PDF."""

REFERRAL_FORMULAS = [
    ("Total Acquisition Cost = Referrer Commission + Customer Discount",
     "This is everything you give up to win one referred install, the cash paid to the "
     "referrer plus the revenue you forgo through the customer's discount. Both are real "
     "costs, not just the commission line."),
    ("Referrer Commission = Installation Value × Commission %",
     "What you pay the person who referred the deal, calculated straight off the contract "
     "value."),
    ("Customer Discount = Installation Value × Discount %",
     "What the referred customer saves off their invoice, forgone revenue on your side."),
    ("CAC % of Deal Value = Total Acquisition Cost ÷ Installation Value",
     "Tells you what share of each deal's revenue is spent just acquiring it. Useful for a "
     "quick gut check, but revenue-based, not profit-based, so it can look deceptively "
     "small."),
    ("Gross Profit = Revenue − COGS",
     "What's left after the direct cost of materials, labor, and logistics for that install, "
     "before touching overhead or acquisition costs."),
    ("Gross Margin % = Gross Profit ÷ Revenue",
     "The percentage of each shilling of revenue that's actually profit before overhead."),
    ("CAC-to-Margin Ratio = Total Acquisition Cost ÷ Gross Profit",
     "The real safety check. Instead of asking “what % of revenue did acquisition cost,” "
     "this asks “what % of my actual profit did acquisition cost consume.” This is the "
     "number that tells you if a channel is quietly draining the business, even while "
     "revenue looks fine."),
    ("Contribution Margin = Gross Profit − Total Acquisition Cost",
     "What's genuinely left over per install after paying for the referral. If this shrinks "
     "toward zero or goes negative, the program is costing more than it's contributing."),
    ("Minimum Margin Required for Safety = CAC % ÷ Target CAC-to-Margin Ratio",
     "Works backward from your CAC % to tell you the minimum gross margin you need to keep "
     "the ratio at a safe level (0.35). If your actual margin is below this number, no "
     "amount of volume fixes it, only better margins or renegotiated terms do."),
    ("Program ROI = (Total Gross Profit − Total Acquisition Cost) ÷ Total Acquisition Cost",
     "For every shilling spent acquiring referrals, how many shillings of profit came "
     "back."),
]

ADS_FORMULAS = [
    ("CTR (Click-Through Rate) = Clicks ÷ Impressions",
     "How often people who see your ad actually click it, a signal of how relevant and "
     "compelling the ad is."),
    ("CPC (Cost Per Click) = Ad Spend ÷ Clicks",
     "What you pay, on average, for each click, driven by competition for the keyword and "
     "your ad quality."),
    ("Conversion Rate = Leads ÷ Clicks",
     "Of the people who clicked, how many actually became a lead (call, form, WhatsApp "
     "message)."),
    ("Cost Per Lead = Ad Spend ÷ Leads",
     "What it costs you to generate one lead, the number most useful for budgeting."),
    ("CAC (Ads) = Ad Spend ÷ Installs Closed",
     "What it actually costs to win one paying customer through ads, the number that "
     "matters more than cost per lead, since not every lead converts."),
    ("ROAS = Revenue Generated ÷ Ad Spend",
     "For every shilling spent, how many shillings came back in revenue. Your current "
     "campaign runs at 40x."),
    ("ROI = (Revenue Generated − Ad Spend) ÷ Ad Spend",
     "Same idea as ROAS but expressed as net return rather than a multiple, useful for "
     "comparing against other investment types."),
]

TIER1_TABLE = {
    "caption": "Tier 1: 150,000–250,000 (7 referrals, assumed avg. KES 180,000)",
    "headers": ["Metric", "Formula", "Per Install", "× 7"],
    "rows": [
        ["Commission (5%)", "180,000 × 5%", "KES 9,000", "KES 63,000"],
        ["Discount (3%)", "180,000 × 3%", "KES 5,400", "KES 37,800"],
        ["Total Acquisition Cost", "9,000 + 5,400", "KES 14,400", "KES 100,800"],
        ["Revenue", "—", "KES 180,000", "KES 1,260,000"],
    ],
}

TIER2_TABLE = {
    "caption": "Tier 2: Above 250,000 (10 referrals, assumed avg. KES 383,000)",
    "headers": ["Metric", "Formula", "Per Install", "× 10"],
    "rows": [
        ["Commission (5%)", "383,000 × 5%", "KES 19,150", "KES 191,500"],
        ["Discount (4%)", "383,000 × 4%", "KES 15,320", "KES 153,200"],
        ["Total Acquisition Cost", "19,150 + 15,320", "KES 34,470", "KES 344,700"],
        ["Revenue", "—", "KES 383,000", "KES 3,830,000"],
    ],
}

COMBINED_TABLE = {
    "caption": "Combined (17 referrals)",
    "headers": ["Metric", "Formula", "Result"],
    "rows": [
        ["Total Revenue", "1,260,000 + 3,830,000", "KES 5,090,000"],
        ["Total Commissions", "63,000 + 191,500", "KES 254,500"],
        ["Total Discounts", "37,800 + 153,200", "KES 191,000"],
        ["Total Acquisition Cost", "254,500 + 191,000", "KES 445,500"],
        ["Blended CAC % of Revenue", "445,500 ÷ 5,090,000", "8.75%"],
    ],
}

MARGIN_TABLE = {
    "caption": "At an assumed 25% gross margin",
    "headers": ["Metric", "Formula", "Result"],
    "rows": [
        ["Total Gross Profit", "5,090,000 × 25%", "KES 1,272,500"],
        ["CAC-to-Margin Ratio", "445,500 ÷ 1,272,500", "0.35"],
        ["Program ROI", "(1,272,500 − 445,500) ÷ 445,500", "1.86"],
    ],
}

MIN_MARGIN_BULLETS = [
    "Tier 1: 8% ÷ 0.35 = 22.9% minimum gross margin",
    "Tier 2: 9% ÷ 0.35 = 25.7% minimum gross margin",
]

ADS_WORKED_TABLE = {
    "caption": "KES 12,914 spent over 24 days, KES 517,000 revenue generated.",
    "headers": ["Metric", "Formula", "Result"],
    "rows": [
        ["ROAS", "517,000 ÷ 12,914", "40.0x"],
        ["ROI", "(517,000 − 12,914) ÷ 12,914", "3,904%"],
    ],
}

PETER_INTRO = ("It's easy to get pulled toward the raw profit number, “we made KES "
               "80,000 this month,” because it feels concrete and satisfying. But a raw "
               "profit figure on its own tells you almost nothing about whether the "
               "business is healthy, since it doesn't say what it cost to get there or "
               "whether that cost is climbing.")

PETER_POINTS = [
    ("CAC-to-Margin Ratio (both channels)",
     "this is the single most important number in this whole document. It answers "
     "“how much of what I earned did I have to give away to earn it,” which is the "
     "real test of whether a channel is sustainable, not whether it made money this "
     "month."),
    ("Trend over time, not a single snapshot",
     "one month's ratio means little. What matters is whether the ratio is climbing "
     "(getting worse as you scale) or holding steady/improving. A KES 80,000 profit "
     "month that came with a 0.25 ratio is genuinely healthy; the same KES 80,000 with "
     "a 0.42 ratio is a warning sign wearing a good-news number."),
    ("Margin %, not margin KES",
     "KES profit numbers grow naturally as revenue grows, even if the business is "
     "getting less efficient. The percentage is what tells you if efficiency is "
     "actually improving or just being masked by higher volume."),
]

PETER_HABIT = ("Every time a profit figure comes up in conversation, immediately ask "
               "“at what CAC-to-margin ratio, and compared to last month?” A shilling "
               "figure without that context is close to meaningless for decision-making, "
               "it's a headline, not an answer.")

ADS_HEALTH_INTRO1 = ("So far, ROAS and ROI have been used to judge the ads channel, and "
                      "both look excellent (40x, 3,904%). But ROAS is a revenue measure, "
                      "it doesn't account for your actual margin, the same blind spot that "
                      "made the referral program look deceptively safe until the "
                      "CAC-to-margin ratio was applied. The same check needs to run on ads.")

ADS_HEALTH_FORMULA = ("Ad CAC-to-Margin Ratio = Total Ad Spend ÷ Gross Profit Generated "
                       "from Ad-Driven Installs")
ADS_HEALTH_FORMULA_NOTE = ("This is the direct equivalent of the referral program's safety "
                            "check, applied to ads instead.")

ADS_HEALTH_TABLE = {
    "caption": ("Worked example, using the KES 517,000 in ad-driven revenue and the same "
                "25% assumed margin used throughout this document"),
    "headers": ["Metric", "Formula", "Result"],
    "rows": [
        ["Ad-Driven Gross Profit", "517,000 × 25%", "KES 129,250"],
        ["Ad CAC-to-Margin Ratio", "12,914 ÷ 129,250", "0.10"],
    ],
}

ADS_HEALTH_RESULT = ("At 0.10, Google Ads sits comfortably in the healthy range, far below "
                      "the 0.30 threshold, meaning ads are consuming only about 10% of the "
                      "profit they generate, versus the referral program's 35%. This is the "
                      "number that actually confirms ads are the stronger channel, not just "
                      "the ROAS multiple.")

ADS_WARNING_SIGNS = [
    ("Rising CPC without a matching rise in conversion rate",
     "you're paying more per click but not converting more of them, a sign of increased "
     "keyword competition eating efficiency."),
    ("Ad CAC-to-Margin Ratio climbing month over month",
     "even if ROAS still looks good, a climbing ratio means margin is quietly being "
     "consumed faster than revenue is growing."),
    ("Cost Per Lead rising faster than close rate improves",
     "if leads get more expensive but don't convert better, CAC per install rises even "
     "if raw lead volume looks fine."),
    ("ROAS holding steady while gross margin % declines",
     "this can happen if material/labor costs rise while ad performance stays flat; "
     "ROAS alone won't catch it, only tracking margin separately will."),
]

REAL_NUMBERS_SECTIONS = [
    {
        "num": "1", "title": "Real Gross Margin",
        "formula": "Gross Margin % = (Revenue − COGS) ÷ Revenue",
        "example_label": "Example, using placeholder costs for a KES 180,000 install",
        "example_lines": [
            ("Revenue", "KES 180,000"),
            ("Materials", "KES 95,000"),
            ("Direct Labor", "KES 25,000"),
            ("Logistics/Site Visit", "KES 8,000"),
            ("COGS Total", "95,000 + 25,000 + 8,000 = KES 128,000"),
            ("Gross Profit", "180,000 − 128,000 = KES 52,000"),
            ("Gross Margin %", "52,000 ÷ 180,000 = 28.9%"),
        ],
        "closing": ("Do this for a handful of real completed installs (ideally one from "
                    "each tier), then average the result, that average replaces the 25% "
                    "placeholder used everywhere else in this document."),
    },
    {
        "num": "2", "title": "Close Rate (Leads → Installs)",
        "formula": "Close Rate = Installs Closed ÷ Total Leads Received",
        "example_label": "Example, using placeholder monthly data",
        "example_lines": [
            ("Leads received in a month", "40"),
            ("Installs closed from those leads", "8"),
            ("Close Rate", "8 ÷ 40 = 20%"),
        ],
        "closing": ("Pull this from your actual lead log (Google Ads leads + referral "
                    "leads combined, or split by channel for more precision) over the "
                    "last 2-3 months for a reliable figure, one month alone can be "
                    "noisy."),
    },
    {
        "num": "3", "title": "Ad CAC Using Real Installs Won",
        "formula": "CAC (Ads) = Ad Spend ÷ Installs Closed from That Spend",
        "example_label": "Example, using the actual KES 12,914 spend with a placeholder install count",
        "example_lines": [
            ("Ad Spend", "KES 12,914"),
            ("Installs Closed from this campaign", "3 (placeholder, needs confirming)"),
            ("CAC", "12,914 ÷ 3 = KES 4,305 per install"),
        ],
        "closing": ("Compare this CAC against the gross profit per install (from the "
                    "margin calculation above) to see the real CAC-to-margin ratio for "
                    "ads, not just the revenue-based ROAS figure."),
    },
    {
        "num": "4", "title": "Overhead Allocation for the Referral Program",
        "formula": "Overhead Per Install = Total Program Overhead ÷ Number of Installs in the Period",
        "example_label": "Example, using placeholder monthly costs",
        "example_lines": [
            ("Peter's admin time on referrals", "~6 hours/month × KES 1,000/hour = KES 6,000"),
            ("Landing page hosting/maintenance", "KES 2,000/month"),
            ("WhatsApp/tracking tools", "KES 1,000/month"),
            ("Total Monthly Overhead", "KES 9,000"),
            ("Installs that month", "3"),
            ("Overhead Per Install", "9,000 ÷ 3 = KES 3,000"),
        ],
        "closing": ("Add this KES 3,000 to the Total Acquisition Cost formula for a more "
                    "accurate (and slightly higher) CAC-to-margin ratio than the "
                    "commission + discount-only figures used earlier in this document."),
    },
]

SENSITIVITY_INTRO = ("Since every calculation in this document depends on the 25% margin "
                      "assumption, here's how the referral program and Google Ads both "
                      "look across a realistic range, so the analysis isn't fragile to one "
                      "guess being wrong.")

SENS_TIER1 = {
    "caption": "Referral Program — Tier 1 (150k–250k, CAC % = 8%)",
    "headers": ["Gross Margin %", "Gross Profit (on KES 180,000)", "Total Acquisition Cost",
                "CAC-to-Margin Ratio", "Status"],
    "rows": [
        ["15%", "KES 27,000", "KES 14,400", "0.53", ("Caution", "red")],
        ["20%", "KES 36,000", "KES 14,400", "0.40", ("Caution", "red")],
        ["25%", "KES 45,000", "KES 14,400", "0.32", ("Needs Attention", "yellow")],
        ["30%", "KES 54,000", "KES 14,400", "0.27", ("Healthy", "green")],
        ["35%", "KES 63,000", "KES 14,400", "0.23", ("Healthy", "green")],
    ],
}

SENS_TIER2 = {
    "caption": "Referral Program — Tier 2 (Above 250k, CAC % = 9%)",
    "headers": ["Gross Margin %", "Gross Profit (on KES 383,000)", "Total Acquisition Cost",
                "CAC-to-Margin Ratio", "Status"],
    "rows": [
        ["15%", "KES 57,450", "KES 34,470", "0.60", ("Caution", "red")],
        ["20%", "KES 76,600", "KES 34,470", "0.45", ("Caution", "red")],
        ["25%", "KES 95,750", "KES 34,470", "0.36", ("Needs Attention", "yellow")],
        ["30%", "KES 114,900", "KES 34,470", "0.30", ("Needs Attention (edge)", "yellow")],
        ["35%", "KES 134,050", "KES 34,470", "0.26", ("Healthy", "green")],
    ],
}

SENS_ADS = {
    "caption": "Google Ads (CAC = KES 12,914 total spend)",
    "headers": ["Gross Margin %", "Gross Profit (on KES 517,000)", "Ad Spend",
                "CAC-to-Margin Ratio", "Status"],
    "rows": [
        ["15%", "KES 77,550", "KES 12,914", "0.17", ("Healthy", "green")],
        ["20%", "KES 103,400", "KES 12,914", "0.12", ("Healthy", "green")],
        ["25%", "KES 129,250", "KES 12,914", "0.10", ("Healthy", "green")],
        ["30%", "KES 155,100", "KES 12,914", "0.08", ("Healthy", "green")],
        ["35%", "KES 180,950", "KES 12,914", "0.07", ("Healthy", "green")],
    ],
}

SENSITIVITY_TAKEAWAYS = [
    ("The referral program's safety is entirely margin-dependent.",
     "Below roughly 27–30% margin, Tier 1 tips into caution territory. Below roughly "
     "33–35%, Tier 2 does too. If G&P's real margins sit in the low-to-mid 20s, which "
     "is common for hardware-heavy installation businesses, the referral program is "
     "very likely already in the red zone, not just “needs attention.”"),
    ("Google Ads stays healthy across the entire realistic margin range.",
     "Even at a pessimistic 15% margin, ads sit at 0.17, comfortably under the 0.30 "
     "threshold. This is the strongest evidence in the whole document that ads are "
     "structurally safer, it holds up regardless of which margin assumption turns out "
     "to be true."),
    ("The single most urgent number to get from Peter is the real margin.",
     "Everything else in this document is secondary to that one figure, it's the swing "
     "variable that determines whether the referral program is fine or actively "
     "losing money."),
]

STATUS_TABLE = {
    "headers": ["Status", "CAC-to-Margin Ratio", "ROAS", "What It Means"],
    "rows": [
        [("Healthy", "green"), "Below 0.30", "Above 20x",
         "Channel is efficient, safe to scale spend or volume with confidence"],
        [("Needs Attention", "yellow"), "0.30–0.40", "10x–20x",
         "Still profitable, but margin is getting consumed faster than ideal, monitor "
         "closely, avoid expanding terms further, look for ways to tighten costs or "
         "renegotiate"],
        [("Caution", "red"), "Above 0.40", "Below 10x",
         "Channel is consuming too much profit relative to what it returns, pause "
         "scaling, revisit structure or spend allocation before committing more "
         "resources"],
    ],
}

STATUS_CURRENT = [
    ("Referral Program", "yellow", "Needs Attention.",
     "CAC-to-margin ratio of 0.35 (at the 25% margin assumption) sits right in the "
     "middle of the caution band, profitable, but with limited room before it tips "
     "into unsafe territory. This is exactly why the personal-install request and "
     "elevated discount for Murage deserve scrutiny before agreeing, they'd push this "
     "ratio higher, not lower."),
    ("Google Ads", "green", "Healthy.",
     "Ad CAC-to-Margin Ratio of 0.10, far below the 0.30 threshold, confirms ads "
     "aren't just outperforming on ROAS (40x), they're also structurally far safer on "
     "margin exposure than the referral program currently is."),
]

BOTTOM_LINE = ("That combination, strong return and low margin risk, is exactly why "
               "Google Ads should carry the scaling weight while the referral program "
               "stays in “monitor and negotiate” mode.")
