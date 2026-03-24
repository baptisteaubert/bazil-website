# Opening Prompt for New Claude Chat

Copy-paste everything below into a new Claude chat:

---

I have an existing meal plan website called Bazil (bazilcooking.com) that sells personalised meal plans via Instacart. I need you to create a new version of this website specifically for Muslim customers.

## What the project is

The bazil-website folder contains the full working website. It's a single-page HTML site with an Express server (`server.js`, `package.json`, `railway.json`). The site lets users select meal plan preferences and then links them to Instacart to buy the ingredients.

## What I need you to do

Create a new project folder called `muslim-mealplan` that is a modified version of bazil-website. Here's what needs to change:

### Branding & Design
- New brand name (suggest something appropriate — could be Arabic-inspired, something that evokes halal, clean eating, and health)
- Update all logos, colors, and visual identity to feel culturally appropriate for Muslim customers
- Keep the same professional quality and layout structure as Bazil
- Update all text/copy to speak to a Muslim audience

### Halal Filtering (CRITICAL)
- ALL meal plans and recipes must use ONLY halal-compliant ingredients
- NO pork, pork derivatives, alcohol, or alcohol-based ingredients
- NO gelatin from non-halal sources
- Meat must be specified as halal-certified
- Filter out any non-halal items from Instacart ingredient lists
- Add a visible "100% Halal" badge/certification indicator on the site
- Consider adding Ramadan-specific meal plans (suhoor and iftar)

### Meal Plan Content
- Recipes should reflect cuisines popular in Muslim communities (Middle Eastern, South Asian, North African, Turkish, Malaysian, etc.)
- Include culturally relevant meals and ingredients
- Consider dietary patterns around Ramadan, Eid celebrations, and Friday gatherings
- Keep the Instacart integration for purchasing ingredients

### Technical
- Same tech stack: HTML + Express + Node.js
- Include `package.json`, `server.js`, `railway.json` (same structure as Bazil)
- Make sure the Instacart links/integration work the same way
- The site should be ready to deploy on Railway

### Files to deliver
- Complete `muslim-mealplan/` folder with all files
- `index.html` — the full single-page website
- `server.js` — Express server (same pattern as Bazil)
- `package.json` — with express dependency
- `railway.json` — Railway deploy config
- `assets/` folder with any images and fonts needed

Please look at the bazil-website folder I've uploaded to understand the exact structure, then create the muslim-mealplan version. Make it production-ready.
