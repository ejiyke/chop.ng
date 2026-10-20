# CHOPS Rework — Verification & Walkthrough

> **Brand Ecosystem:** Connect Nigeria (`connectnigeria.com`)  
> **Source Documents:**  
> - [Figma Design: CN-Chop](https://www.figma.com/design/MaecyhoPyWrmrOFETANyUv/CN-Chop?node-id=0-1)  
> - [CHOPS Product Requirements Document](https://docs.google.com/document/d/1CfNH-sDBIiPtJ0ktqsjxp6IQQZMcJFkduSgm_cJNjGI/edit)  
> - [Style Guide: design.md](file:///c:/Users/mbaek/Desktop/Chop.ng/design.md)  
> - [Execution Plan: project_plan.md](file:///c:/Users/mbaek/Desktop/Chop.ng/project_plan.md)  
> **Status:** Phase 1 & Phase 2 Verified & Running on `http://localhost:8080/`

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
   - Countdown timer badges (e.g. `3 Days Left`, `This Weekend Only`, `First 30 Diners`).
   - Copyable promo codes with one-click clipboard copying, tactile visual state change (`Copied! ✓`), and toast alerts.
   - Direct action buttons: **Claim via Chat** (pre-fills the inquiry and initiates direct offline order dialog with merchant) and **Call Merchant** (initiates direct phone dialer).
   - Clickable merchant attribution link navigating directly to the restaurant's full menu and profile.

