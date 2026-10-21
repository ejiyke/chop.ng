# CHOPS Rework — Verification & Walkthrough

> **Brand Ecosystem:** Connect Nigeria (`connectnigeria.com`)  
> **Source Documents:**  
> - [Figma Design: CN-Chop](https://www.figma.com/design/MaecyhoPyWrmrOFETANyUv/CN-Chop?node-id=0-1)  
> - [CHOPS Product Requirements Document](https://docs.google.com/document/d/1CfNH-sDBIiPtJ0ktqsjxp6IQQZMcJFkduSgm_cJNjGI/edit)  
> - [Style Guide: design.md](file:///c:/Users/mbaek/Desktop/Chop.ng/design.md)  
> - [Execution Plan: project_plan.md](file:///c:/Users/mbaek/Desktop/Chop.ng/project_plan.md)  
> **Status:** Full Customer & Merchant Suite Verified & Running on `http://localhost:8080/`

---

## 1. Overview of the Strategic Pivot

Following shareholder directives and the updated PRD, **CHOPS** has transitioned from an in-app transaction/logistics engine to a **Discovery-First Restaurant Marketplace**:
* **Removed Overhead:** Elimination of in-app payment checkouts, card gateway failure handling, rider dispatching, distance fee algorithms, and delivery dispute arbitration.
* **Streamlined Commerce:** All customer food ordering and table reservations now happen **offline directly with the restaurant** via **Phone Call** or **In-App Live Chat**.
* **Merchant Control:** Restaurateurs manage their digital menus, view live discovery impressions, toggle their store status, respond to customer reviews, and maintain active visibility subscriptions.

---

## 2. Key Interfaces Implemented

1. **Customer Discovery Marketplace (`index.html#explore`):**
   - **Dual-Input Hero Search Bar:** Combines dish/cuisine keyword search with an interactive **Address / Location Input Bar** (allowing users to type their street, area, or city, with Nigerian hub autocomplete suggestions).
   - Category chips (Nigerian, Suya & Grills, Continental, Soups & Swallows, Fast Food, Seafood, Drinks).
   - Quick filters (`Open Now`, `Top Rated 4.8+`, `Verified Merchants`).
   - Verified restaurant listing cards with cuisine, distance, price level, phone dialer, and menu viewing.
   - Trending dishes grid with direct chat/call inquiry triggers and clickable restaurant names that navigate directly to their full profiles and menus.

2. **Restaurant Detail & Menu Experience:**
   - Full cover hero banner with verified merchant badge and opening hours.
   - **Sticky Navigation Tab Bar (`top: 74px`):** Positioned with glassmorphism blur and subtle elevation, staying pinned beneath the main header as the user scrolls down the page.
   - **Auto-Scroll to the Right:** As the user scrolls vertically down the page, the tab bar automatically scrolls horizontally to the right (`scrollLeft`), smoothly bringing subsequent tabs into view.
   - **Integrated ScrollSpy:** Dynamically activates and centers each tab (**Menu & Pricing**, **Ratings & Reviews**, **Photo Gallery**, **About & Hours**, **Table Availability**) as its corresponding section scrolls into view.
   - **Direct Jump Support:** Clicking any tab smoothly scrolls the page directly to that section with full header offset compensation (`scroll-margin-top: 136px`).
   - Direct action triggers: **"Call Merchant"** and **"Chat to Order"**.

3. **Merchant Portal (Business Mode):**
   - Real-time store open/closed status toggle switch.
   - 4 KPI cards: Profile Views, Menu Impressions, Favourites Saved, Customer Rating Average.
   - Customer Discovery Traffic weekly bar chart.
   - Menu Manager with dish availability toggling, dish deletion, and "+ Add New Dish" modal form.
   - Customer feedback & review reply mechanism.
   - Platform visibility subscription tier overview.

4. **Dedicated Direct Restaurant Chat Interface (`#chat-view`):**
   - **No Modals / Popovers:** Completely replaced popup modals with a dedicated full-screen workspace (`<main id="chat-view">`).
   - **Navbar Access:** Clicking the chat icon `#nav-chat-btn` in the navbar switches seamlessly to the Chat Interface with active state highlighting.
   - **3-Column Workspace Layout:**
     - **Left Sidebar:** Conversation directory with real-time online status indicators, search filter, and message previews for verified restaurants.
     - **Center Panel:** Active conversation stream with restaurant header, direct phone call button, menu jump link, seamless quick-inquiry chips, message bubbles, and live typing indicator.
     - **Right Sidebar:** Restaurant quick-info card featuring location, hours, WhatsApp hotline, direct offline ordering guarantee, and popular dishes with instant "Inquire" buttons.
   - **Navigation:** Includes "Back to Explore" and brand logo routing to return to the marketplace view at any time.

5. **Design System & Theme Engine:**
   - Complete `tokens.css` with CN Green (`#93C700`), CN Amber, and Slate palettes.
   - Light & Dark theme toggle with `localStorage` persistence.
   - Keyboard shortcut `Ctrl+K` for instant search focus.

6. **IconScout Vector Icon System:**
   - Integrated official IconScout Unicons library (`uil`) via CDN and design tokens.
   - Replaced all raw location pushpin emojis (`📍`) with crisp `<i class="uil uil-map-marker"></i>` vector icons.
   - Replaced all category emojis, star ratings, modal close icons, phone, whatsapp, and clock emojis with native IconScout vector icons.
   - 100% elimination of OS-dependent emoji rendering across both customer and merchant views.

7. **Exclusive Restaurant Offers & Deals (Landing Page):**
   - Positioned directly below **Trending Dishes This Week** on the marketplace discovery landing page.
   - Distinctive promotion badges (`20% OFF`, `FREE DRINK COMBO`, `SAVE ₦3,500`, `15% GROUP OFF`, `BUY 1 GET 50% OFF`).
   - Direct action buttons: **Claim via Chat** (pre-fills the inquiry and initiates direct offline order dialog with merchant) and **Call Merchant** (initiates direct phone dialer).
   - Clickable merchant attribution link navigating directly to the restaurant's full menu and profile.

8. **Authentic Nigerian Food Photography:**
   - Replaced mismatched generic stock photos with high-definition, photorealistic culinary photography representing each dish:
     - **Signature Smoky Jollof Rice Special**: Vibrant party jollof with fried sweet plantain (dodo), crunchy coleslaw, and grilled quarter chicken.
     - **Ofada Rice Royal Fiesta (in Banana Leaf)**: Unpolished fragrant Ofada rice served in fresh banana leaves with Ayamase designer stew, boiled eggs, and assorted meats.
     - **Pounded Yam & Rich Melon Egusi**: Silky smooth white pounded yam mound with bubbling melon seed soup, stockfish flakes, and slow-cooked beef.
     - **Fisherman Soup (Rivers State Native Pot)**: Rich Niger Delta seafood broth loaded with ocean tiger prawns, whole catfish steak, and scent leaves.
     - **Spicy Peppered Asun Bites**: Sizzling charred goat meat sauteed with scotch bonnet relish and sweet red onions.
     - **Charcoal Beef Suya Platter**: Thin sirloin steak skewers dusted with Kano yaji kuli-kuli spice, charred over open wood coals with sliced onions and tomatoes.
     - **Crispy Lagos Small Chops Party Platter**: Golden round puff-puff balls, crispy beef samosas, spring rolls, and peppered chicken gizzard skewers.
   - Assets are stored directly in `assets/dishes/` for fast, resilient, and offline-compatible rendering.

---

## 9. Merchant's Flow Implementation (PRD Specification)

Following the PRD documentation (`https://docs.google.com/document/d/1CfNH-sDBIiPtJ0ktqsjxp6IQQZMcJFkduSgm_cJNjGI/edit?usp=sharing`) and design guidelines from `/frontend-design`, `/ui-ux-pro-max`, and `/web-design-guidelines`, the Merchant experience has been elevated into a full operational suite:

### 1. Multi-Step Business Onboarding Wizard
- **Step 1: Business Profile & Verification:**
  - Registered business legal name and entity type (LLC, Registered Business Name, Independent Caterer).
  - CAC registration number verification and Tax Identification Number (TIN).
  - Physical restaurant location in Nigeria with Lagos zones autocomplete.
  - Document dropzones for CAC Certificate of Incorporation and Food Safety / Hygiene Permits with verified badges.
- **Step 2: Restaurant Setup:**
  - Customer-facing brand name, cuisine styles, and tagline.
  - Authentic culinary bio / kitchen story.
  - Direct telephone, WhatsApp contact hotline, and Instagram handle.
- **Step 3: Delivery Setup:**
  - Active coverage zones (Lekki Phase 1 & 2, Victoria Island, Ikoyi, Oniru, Ikeja GRA).
  - Average preparation time (15–45 minutes) and standard base delivery fee (₦).
  - Connect Nigeria Sonic Rider toggle for automatic dispatch.
- **Step 4: Automated Midnight Bank Settlements:**
  - Commercial bank dropdown (GTBank, Zenith, Access, First Bank, Kuda, Moniepoint, etc.).
  - 10-digit NUBAN account number with instant simulated NIBSS NIP name resolution.
  - Agreement to 0% commission terms with automated daily 00:00 WAT bank payouts.

### 2. Comprehensive 8-Module Merchant Dashboard
1. **Home Overview & Daily Insights:**
   - Real-time command bar with store open/closed toggle and "Simulate Order" tester.
   - Dynamic KPIs: Today's Estimated Revenue, Active Orders Count, Profile Views (7d), and Overall Diner Rating.
   - Peak ordering rush analysis (1:00 PM – 3:30 PM), top-selling dish stats, and diner retention rate.
   - Weekly customer discovery traffic and orders bar chart.
2. **Live Orders & Fulfillment Pipeline:**
   - Sequential status pipeline: `Received` &rarr; `In Preparation` &rarr; `Ready for Pickup` &rarr; `Sonic In-Transit` &rarr; `Delivered`.
   - Pipeline filter pills with real-time order count badges.
   - Dynamic Sonic Rider dispatch card showing assigned courier (name, phone, motorcycle license plate, and delivery ETA).
   - "New Test Order" simulation button to test end-to-end fulfillment.
3. **Menu & Category Controls:**
   - Category filtering chips bar with dynamic item count badges.
   - "+ Add Category" modal to organize menu sections.
   - Dishes table with instant stock availability toggle ("Available" vs. "Sold Out") and deletion.
   - "+ Add New Dish" modal with pricing, description, category, and direct file upload dropzone with live preview (URL input removed, enforcing authentic photo uploads).
4. **Promotions & Special Deals Manager:**
   - Promotion campaign creation modal with discount percentages, minimum spend thresholds, promo tags, and validity dates.
   - Real-time performance metrics (redemptions count and gross revenue generated).
   - Instant activation / pause toggles for active promotional campaigns.
5. **Analytics & Diner Retention:**
   - Gross revenue 30-day tracking, Average Order Value (AOV), unique diner counts, and 100% midnight settled amounts.
   - Top Loyal Diners Leaderboard ranking frequent customers by total orders and lifetime spend.
6. **Customer Feedback & Verified Merchant Replies:**
   - Community review stream with diner ratings and feedback.
   - Verified Merchant Reply modal featuring one-click professional quick suggestions and official response publication.
   - Verified merchant responses automatically sync to public diner view.
7. **Store Settings & Midnight Bank Settlements (Integrated Profile Suite):**
   - Transformed Edit Business Profile into a full 4-section settings page:
     - **Business & Legal Profile:** CAC registration, TIN, entity type, kitchen address, and verified document badges.
     - **Restaurant & Marketplace:** Live ordering operational toggle switch, customer brand name, cuisine styles, bio, phone, WhatsApp, and hours.
     - **Delivery & Sonic Logistics:** Interactive Lagos delivery zones selection, kitchen prep times, base delivery fees, and auto-dispatch toggles.
     - **Midnight Bank Settlements:** Receiving commercial bank selector, 10-digit NUBAN account input with instant NIP verification, and zero-commission guarantees.
   - Cleaned top banner by removing clutter buttons, adding a sleek exit button in the sidebar nav.
8. **Subscription & Visibility Plan:**
   - Verified Merchant Plan status display (Monthly ₦15,000/mo vs. Annual ₦150,000/yr with 2 months free).
   - Complete marketplace search ranking, unlimited menu items, and Sonic Rider dispatch benefits.

---

## 10. Verification & Quality Checklist

| Feature | Status | Notes |
|---|---|---|
| Multi-Step Onboarding Wizard (Steps 1–4) | PASS | Verified with CAC docs, Lagos zones, and NUBAN bank verification |
| Sequential Order Fulfillment Pipeline | PASS | `Received` &rarr; `Preparing` &rarr; `Ready` &rarr; `Sonic In-Transit` &rarr; `Delivered` |
| Sonic Rider Dispatch | PASS | Auto-assigns nearest courier with ETA, phone, and vehicle plate |
| Live Order Simulation | PASS | Instant order generation with toast alert & badge updates |
| Menu & Category Manager | PASS | Category creation, dish stock toggle, and delete actions verified |
| Promotions & Deals Manager | PASS | Promo creation modal, active status toggles, and metrics |
| Customer Reviews & Verified Merchant Reply | PASS | Modal with quick suggestions; verified reply badge rendered |
| Midnight Bank Settlements Config | PASS | NUBAN input, NIP verification badge, and midnight payout terms |
| Role Switching (Customer &harr; Merchant) | PASS | Seamless view toggling via header command button |
| Clean Console & Responsiveness | PASS | 0 runtime console errors on `http://localhost:8080/` |
