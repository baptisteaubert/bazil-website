# Bazil Facebook Ads — Campaign Strategy

## Campaign Overview

- **Objective:** Traffic (Landing Page Views) — best for new ad accounts with no pixel data
- **Daily Budget:** £10/day GBP
- **Landing Page:** https://www.bazilcooking.com
- **Target Market:** United States, health-conscious adults 18–45

## Why Traffic (Not Conversions)

Bazil is free — there's no purchase event to optimize for yet. Traffic/Landing Page Views gets the most qualified visitors to the site at the lowest cost. Once the Meta Pixel collects enough engagement data (~50+ events), you can switch to a Conversions campaign optimized for a custom event (e.g. "Generated Meal Plan" or "Sent to Instacart").

## Audience Targeting

Use **Advantage+ Audience** with these interest suggestions to guide Meta's algorithm:

**Core interests (add all 5):**
1. Meal prep / Meal planning
2. Healthy eating
3. Physical fitness
4. Weight loss
5. Cooking

**Demographics:**
- Location: United States
- Age: 18–45
- Gender: All
- Language: English

**Why broad:** With a £10/day budget, narrow targeting drives up CPM. Let Meta's algorithm find the right people within a broad health-conscious audience. The interests act as directional signals, not hard filters.

## Campaign Structure

One campaign, one ad set, 3–4 ads (to test different angles). Facebook will auto-allocate budget to the best performer.

```
Campaign: Bazil — Meal Planning Traffic
  └── Ad Set: US Health-Conscious 18-45
        ├── Ad 1: "Pain Point" angle (hero-food.jpg)
        ├── Ad 2: "Convenience" angle (food-bowl.jpg)
        ├── Ad 3: "Instacart" angle (food-healthy.jpg)
        └── Ad 4: "Inclusive" angle (food-variety.jpg)
```

## Performance Goal

- **Optimization:** Landing page views (not link clicks — filters out accidental taps)
- **Placements:** Advantage+ (let Meta optimize across Facebook feed, Instagram feed, Stories, Reels)

## KPIs to Watch

| Metric | Good Benchmark | Action if Below |
|--------|---------------|-----------------|
| CPC (cost per click) | Under £0.30 | Swap creative/copy |
| CTR (click-through rate) | Above 1.5% | Improve hook or image |
| Landing page views | 30+/day at £10 budget | Check audience or ad relevance |
| CPM (cost per 1,000 impressions) | Under £8 | Audience too narrow — broaden |

## Timeline

- **Days 1–3:** Learning phase — don't touch anything. Meta is calibrating.
- **Day 4–7:** Review metrics. Kill any ad with CTR below 0.8%. Double down on best performer.
- **Week 2+:** If a clear winner emerges, pause losers and scale budget to £15–20/day on the winner.

## Next Steps After This Campaign

1. Install Meta Pixel on bazilcooking.com (add the base pixel code to `<head>`)
2. Fire a custom event when users generate a meal plan or click "Send to Instacart"
3. Once you have 50+ events, create a Conversions campaign optimized for that event
4. Build a Lookalike Audience from site visitors for a second ad set
