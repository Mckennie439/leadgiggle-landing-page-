import re

def sm(text):
    text = re.sub(r'(?<=\d)-(?=\d)', '–', text)
    text = text.replace("'", "’")
    return text

SECTIONS = [
    {
        "num": "1",
        "title": "Who We Are",
        "paras": [
            "G&P Solar Systems designs and installs solar systems for farms and properties across Kenya, based in Ruiru, Nairobi. We work directly with farmers to reduce their reliance on diesel and grid power through reliable, well-installed solar solutions.",
            "We're happy to connect you with 2-3 of our past clients so you can hear about their experience directly, rather than just taking our word for it. Further background on our track record and credentials is something we'd be glad to walk through in person when we meet.",
        ],
    },
    {
        "num": "2",
        "title": "The Partnership Opportunity",
        "paras": [
            "We'd like to propose a referral partnership between G&P Solar Systems and Murage Farms. When a farmer from your community takes up a G&P solar installation through your referral, you earn a commission, and the farmer receives a discount, so it's a genuine benefit on both sides, not just for us.",
            "To be clear on what this is: this isn't an influencer or ambassador arrangement. There's no content requirement, no posting schedule. It's a straightforward referral partnership, and to make it trackable, you'll be given a unique referral code and landing page. Any farmer who comes to us through that page is credited to you.",
        ],
    },
    {
        "num": "3",
        "title": "Exclusivity",
        "paras": [
            "At this stage, we're launching this program with a small number of founding partners, and you'd be one of them. This isn't a program we're opening broadly right now.",
        ],
    },
    {
        "num": "4",
        "title": "Reward Structure",
        "paras": [
            "Commission and discount are tiered by system price range. We'll share the full breakdown once we've agreed on the partnership, so it's tailored to what we finalize together rather than a generic table.",
        ],
    },
    {
        "num": "5",
        "title": "How It Works",
        "ordered": [
            "You share your unique landing page/referral code with farmers in your community.",
            "A farmer visits the page and contacts G&P Solar Systems via WhatsApp, referencing your code and their name.",
            "The referral is logged and attributed to you in our tracking system.",
            "G&P handles the site visit, quotation, and installation.",
            "Once installation is complete, we hold up our end: your commission is paid via M-Pesa within 5 business days.",
        ],
    },
    {
        "num": "6",
        "title": "Staying in the Loop",
        "paras": [
            "You'll receive a direct WhatsApp update as soon as a referral is confirmed on our end, so you can track the date and status yourself, without needing to check in or wonder where things stand.",
        ],
    },
    {
        "num": "7",
        "title": "Referral Validity & Attribution",
        "paras": [
            "A referral is valid for 90 days from the farmer's first contact with us. Installation needs to be completed within that window for the referral to count.",
            "Attribution is straightforward: whichever code the farmer mentions at first contact is the one credited. Our tracking log records the referrer, the referral code, the farmer's details, and the date of first contact, so there's no ambiguity about whose referral it is.",
        ],
    },
    {
        "num": "8",
        "title": "For the Farmer",
        "paras": [
            "The farmer's discount isn't a vague promise, it's applied directly and visibly on their quotation and final invoice, so they see exactly what they're saving before they commit to anything.",
        ],
    },
    {
        "num": "9",
        "title": "Protecting Your Brand",
        "paras": [
            "We know you've built your community over a long time, and it's completely fair to be cautious about any partnership where, if something goes wrong, you're the one who takes the reputational hit, not us. To ensure your brand is shielded and protected, here's what's included as part of the deal:",
        ],
        "bullets": [
            "If an installation isn't up to standard, agreed by the farmer, you, and our team, we do a full reinstallation at no cost to the farmer.",
            "Every referred farmer receives a full year of free system maintenance.",
            "Farmers outside Nairobi receive virtual check-ins every 4 months, and a free site visit if any issue comes up.",
            "You can pause your participation at any time, for any reason, with no restriction.",
            "If a farmer has a problem or question, they have a clear path to reach out directly to the G&P Solar Systems team, so it never becomes something you need to manage yourself.",
            "If you have any concern or dispute regarding the partnership itself, it goes directly to our CEO and our lead technician, Peter Oteki, so it's handled at the right level, not lost in a support queue.",
            "Once terms are agreed, everything is put into a signed agreement. You're welcome to have your own team or a third party review and sign it on your side.",
        ],
    },
    {
        "num": "10",
        "title": "Program Scale & Review",
        "paras": [
            "We're aiming for 10-30 confirmed referral installations in this initial phase to properly gauge how the program performs. There's no upside cap for you, if you bring in 30, 50, or more, that's simply more earned commission on your end. At the 30 confirmed installation mark, we'll pause to evaluate performance and refine the program going forward, in conversation with our founding partners.",
        ],
    },
    {
        "num": "11",
        "title": "What We're Asking of You",
        "paras": [
            "Simply sharing your referral link/code with your community when solar comes up as a relevant solution. No content quotas, no exclusivity requirement beyond what's already outlined above, no operational burden beyond that.",
        ],
    },
    {
        "num": "12",
        "title": "Next Steps",
        "paras": [
            "If this feels aligned with your brand direction, we'd propose a physical meeting to walk through the written agreement, our credentials and track record, and the operational details, like when your code and landing page go live, together.",
        ],
    },
]

for s in SECTIONS:
    if "paras" in s:
        s["paras"] = [sm(p) for p in s["paras"]]
    if "bullets" in s:
        s["bullets"] = [sm(b) for b in s["bullets"]]
    if "ordered" in s:
        s["ordered"] = [sm(o) for o in s["ordered"]]
    s["title"] = sm(s["title"])
