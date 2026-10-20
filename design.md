# CHOPS Design System & Style Guide (`design.md`)

> **Project:** CHOPS (formerly CN Chop) — Dual-Sided Restaurant Discovery Marketplace  
> **Ecosystem:** Connect Nigeria (`connectnigeria.com`)  
> **Source Figma:** [Figma: CN-Chop](https://www.figma.com/design/MaecyhoPyWrmrOFETANyUv/CN-Chop?node-id=0-1)  
> **PRD Specification:** [CHOPS Product Requirements Document](https://docs.google.com/document/d/1CfNH-sDBIiPtJ0ktqsjxp6IQQZMcJFkduSgm_cJNjGI/edit)  
> **Primary Identity:** `#93C700` (CN Green 500) & `#A6D445` (CN Green Vibrant)  
> **Primary Font Families:** `Roboto`, `'Archivo'`, system sans-serif  
> **Version:** 2.0.0 (Rework: Discovery-First Architecture)

---

## 1. Executive Summary & Brand Identity

### 1.1 The Rework Mission
Following shareholder strategic direction, **CHOPS** has pivoted from an end-to-end in-app payment and logistics model to a high-converting, friction-free **Discovery-First Restaurant Marketplace**:
- **Customer Experience:** Instant restaurant discovery, location-aware searching ("near me"), rich menu browsing with accurate pricing/variations, photo galleries, table availability insights, and direct-to-merchant connection via **Call** or **In-App Chat** for offline ordering.
- **Merchant Experience:** High-visibility listing management, flexible menu categorization, view analytics (profile/menu impressions, visitor trends), customer review moderation, and subscription-based visibility tiers.
- **Removed Complexity:** Elimination of in-app checkout gateways, rider-bidding logistics, delivery distance top-ups, and complex split settlements in favor of direct commerce between diner and restaurateur.

### 1.2 Brand Assets & Identity
- **Logo (`assets/brands/chop-logo.png` & `logo.png`):** Official CHOPS brand mark featuring bold custom typography with the iconic bitten-disc inner motif in Connect Nigeria signature Green (`#93C700`) and warm dark slate (`#0F172A`).
- **Favicon (`assets/brands/chop-favicon.png` & `favicon.png`):** High-impact circular bitten 'C' glyph on clean alpha, optimized for 32x32 / 64x64 browser tabs and home screen bookmarks.
- **Clearspace Rule:** Minimum `16px` padding surrounding brand marks. Header display height: `42px` desktop, `36px` mobile. Footer display height: `38px`.

---

## 2. Color Palette & Design Tokens

### 2.1 CN Green (Core Brand & Action)
The primary action color driving search triggers, primary call-to-actions, active filter states, verified badges, and brand anchors.

| Token Name | Hex Value | RGB | Functional Role |
| :--- | :--- | :--- | :--- |
| `--cn-green-50` | `#F4FBE6` | `rgb(244, 251, 230)` | Subtle card tint, verified badge background, active tab pill fill |
| `--cn-green-100` | `#E8F7CB` | `rgb(232, 247, 203)` | Hover state on light green pills, incoming chat highlight |
| `--cn-green-200` | `#D6F0A3` | `rgb(214, 240, 163)` | Active filter chips border, customer message bubbles |
| `--cn-green-300` | `#BBE770` | `rgb(187, 231, 112)` | Secondary accents, slider progress indicators |
| `--cn-green-400` | `#B8E255` | `rgb(184, 226, 85)` | Bright border highlights, active toggle fill |
| `--cn-green-500` | `#93C700` | `rgb(147, 199, 0)` | **Core Brand Primary**: Call buttons, Search triggers, Main CTAs |
| `--cn-green-500-vibrant` | `#A6D445` | `rgb(166, 212, 69)` | Vibrant interactive states, high-illumination buttons |
| `--cn-green-600` | `#80AD00` | `rgb(128, 173, 0)` | Primary button `:hover` state |
| `--cn-green-700` | `#668A00` | `rgb(102, 138, 0)` | Primary button `:active` / pressed state |
| `--cn-green-800` | `#526F00` | `rgb(82, 111, 0)` | High-contrast borders on light themes, dark mode accent |
| `--cn-green-900` | `#3B5000` | `rgb(59, 80, 0)` | Deep text color on light green badges (`--cn-green-50`) |

### 2.2 CN Amber & Yellow (Promotions, Ratings & Alerts)
Used for star ratings, special offers, promotional tags, and warning indicators.

| Token Name | Hex Value | RGB | Functional Role |
| :--- | :--- | :--- | :--- |
| `--cn-yellow-light` | `#FCF4ED` | `rgb(252, 244, 237)` | Promotional banner background, pending review card |
| `--cn-yellow-light-hover`| `#FBEFE3` | `rgb(251, 239, 227)` | Amber surface hover state |
| `--cn-yellow-light-active`| `#F7DDC6` | `rgb(247, 221, 198)` | Active amber surface state |
| `--cn-yellow-normal` | `#E49146` | `rgb(228, 145, 70)` | **Star Ratings**, Promotional discount tags, Amber badge text |
| `--cn-yellow-normal-hover`| `#CD833F` | `rgb(205, 131, 63)` | Hover on amber interactive elements |
| `--cn-yellow-dark` | `#AB6D35` | `rgb(171, 109, 53)` | High-contrast amber typography |
| `--cn-yellow-darker` | `#503319` | `rgb(80, 51, 25)` | Deep amber text on light yellow backgrounds |

### 2.3 CN Slate & Blue (Foundational Neutrals & Typography)
The authoritative dark slate palette provides crisp hierarchy, dark mode depth, and robust typography contrast.

| Token Name | Hex Value | RGB | Functional Role |
| :--- | :--- | :--- | :--- |
| `--cn-blue-50` | `#E7E8EA` | `rgb(231, 232, 234)` | Surface border subtle, light button fill |
| `--cn-blue-100` | `#B5B7BD` | `rgb(181, 183, 189)` | Standard input borders, card outlines |
| `--cn-blue-200` | `#91949D` | `rgb(145, 148, 157)` | Secondary icons, inactive tab borders |
| `--cn-blue-300` | `#5E6470` | `rgb(94, 100, 112)` | Tertiary text, metadata icons, timestamps |
| `--cn-blue-400` | `#3F4555` | `rgb(63, 69, 85)` | Secondary body text, placeholder labels |
| `--cn-blue-500` | `#0F172A` | `rgb(15, 23, 42)` | Subheaders, dark buttons, modal headlines |
| `--cn-blue-600` | `#0E1526` | `rgb(14, 21, 38)` | Deep slate containers, dark mode navigation |
| `--cn-blue-700` | `#0B101E` | `rgb(11, 16, 30)` | **Primary Text**: Headings, restaurant titles, price tags |
| `--cn-blue-800` | `#080D17` | `rgb(8, 13, 23)` | Deep canvas in dark theme |
| `--cn-blue-900` | `#060A12` | `rgb(6, 10, 18)` | Absolute dark baseline |

### 2.4 CN White & Surface Neutrals

| Token Name | Hex Value | RGB | Functional Role |
| :--- | :--- | :--- | :--- |
| `--cn-white` | `#FFFFFF` | `rgb(255, 255, 255)` | Pure white card surfaces, modals, popovers |
| `--cn-white-50` | `#FDFDFD` | `rgb(253, 253, 253)` | Subtle canvas offset |
| `--cn-white-100` | `#F7F7F7` | `rgb(247, 247, 247)` | Form input background, search pill container |
| `--cn-white-200` | `#F4F4F4` | `rgb(244, 244, 244)` | Disabled state fill, tag background |
| `--cn-white-300` | `#EEEEEE` | `rgb(238, 238, 238)` | Card separator dividers |
| `--cn-white-500` | `#E6E6E6` | `rgb(230, 230, 230)` | Standard hairline borders |

### 2.5 Semantic Feedback Colors
- **Success (`#16A34A` / bg `#F0FDF4` / border `#BBF7D0`):** "Open Now" badges, verified merchants, confirmed profile saves.
- **Danger / Error (`#DC2626` / bg `#FEF2F2` / border `#FECACA`):** "Closed" status, deletion confirmations, validation alerts.
- **Warning (`#E28A2A` / bg `#FFFBEE` / border `#FCEDBB`):** Low inventory notices, pending business approvals.
- **Info (`#2563EB` / bg `#EFF6FF` / border `#BFDBFE`):** Table reservation viewing details, platform updates.

---

## 3. Typography Architecture

Directly extracted from Figma Style Guide Node `2558:209`:
- **Primary Font:** `'Roboto'`, `'Archivo'`, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Line Height Standard:** `1.5` baseline
- **Font Variation:** `wdth 100`

### 3.1 Typographic Scale

| Style Name | Font Size | Line Height | Weight | Typical UI Application |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | `61px` | `1.5` (~`92px`) | Regular `400` | Landing page hero statements ("What do you crave?") |
| **H1 Bold** | `61px` | `1.5` (~`92px`) | Bold `700` | Major promotional hero headlines |
| **H2** | `49px` | `1.5` (~`74px`) | Regular `400` | Restaurant profile title banner, major section heads |
| **H2 Bold** | `49px` | `1.5` (~`74px`) | Bold `700` | Emphasized restaurant profile brand headline |
| **H3** | `39px` | `1.5` (~`59px`) | Regular `400` | Discovery section titles ("Popular Near You", "Featured") |
| **H3 Bold** | `39px` | `1.5` (~`59px`) | Bold `700` | Emphasized discovery category titles |
| **H4** | `31px` | `1.5` (~`47px`) | Regular `400` | Menu category headlines ("Mains", "Grills & Suya") |
| **H4 Bold** | `31px` | `1.5` (~`47px`) | Bold `700` | Modal header titles, Business Dashboard section titles |
| **H5** | `25px` | `1.5` (~`38px`) | Regular `400` | Dish titles, merchant card headlines |
| **H5 Bold** | `25px` | `1.5` (~`38px`) | Bold `700` | Restaurant Card title, Dashboard metric numbers |
| **Title 1** | `20px` | `1.5` (`30px`) | Regular `400` | Menu dish pricing, prominent badge labels |
| **Title 3 Bold** | `20px` | `1.5` (`30px`) | Bold `700` | Dish price highlights, key action buttons |
| **Title 2** | `16px` | `1.5` (`24px`) | Regular `400` | Tab labels, standard button text, form inputs |
| **Title 4 Bold** | `16px` | `1.5` (`24px`) | Bold `700` | Active tab labels, filter chips, callout titles |
| **Body** | `13px` | `1.5` (~`20px`) | Regular `400` | Dish descriptions, opening hours, review comments |
| **Body Bold** | `13px` | `1.5` (~`20px`) | Bold `700` | Metadata labels ("Estimated Time:", "Cuisine:") |
| **Caption** | `10px` | `1.5` (`15px`) | Regular `400` | Distance tags, secondary timestamps, small chips |
| **Caption Bold**| `10px` | `1.5` (`15px`) | Bold `700` | "Open Now" badge, "Verified Merchant" pill text |

---

## 4. Spacing Scale, Radius & Elevation

### 4.1 Base-4 Spacing Scale

```css
--space-2xs: 4px;   /* Micro spacing, badge internal padding */
--space-xs:  8px;   /* Tag gaps, inline icon margins */
--space-sm:  12px;  /* Card inner content gap, button padding */
--space-md:  16px;  /* Standard input & button padding */
--space-lg:  20px;  /* Card padding, section gaps */
--space-xl:  24px;  /* Modal padding, container margins */
--space-2xl: 32px;  /* Grid gutters, dashboard widgets */
--space-3xl: 40px;  /* Section separation */
--space-4xl: 48px;  /* Hero padding */
--space-5xl: 64px;  /* Major page section spacing */
--space-6xl: 80px;  /* Desktop viewport outer margin */
```

### 4.2 Border Radius Standards
- **`radius-xs` (2px):** Subtle outline indicators.
- **`radius-sm` (4px):** Checkboxes, form helper badges.
- **`radius-md` (8px):** Standard buttons, inputs, dropdown selectors.
- **`radius-lg` (12px):** Dish cards, restaurant cards, modals (Figma standard `rounded-[12px]`).
- **`radius-xl` (16px):** Hero banners, floating chat panels.
- **`radius-full` (9999px):** Pills, search bars, category icon circles, avatar rings.

### 4.3 Elevation & Shadows

```css
--elevation-none: none;
--elevation-xs:   0px 1px 3px 0px rgba(0, 0, 0, 0.08);
--elevation-sm:   0px 2px 8px -2px rgba(0, 0, 0, 0.06);
--elevation-md:   0px 4px 12px -2px rgba(0, 0, 0, 0.10);
--elevation-lg:   0px 8px 24px -4px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.04);
--elevation-xl:   0px 12px 32px -4px rgba(0, 0, 0, 0.16);
```

---

## 5. Key UI Component Specifications

### 5.1 Top Navigation Bar (Header)
- **Dimensions:** Height `72px`–`76px`, sticky fixed with `backdrop-filter: blur(12px)`.
- **Elements:**
  - Left: Connect Nigeria CHOPS Brand Logo (`135px × 38px`).
  - Center: Main discovery links (`Explore`, `Categories`, `Popular`, `Offers`).
  - Right: Quick Search input, Location selector pill (`Lagos, NG`), Favourites icon with counter badge, User Account Avatar / Auth trigger.

### 5.2 Hero Discovery & Search Bar
- **Dimensions:** Max-width `768px`, height `72px` (desktop), `rounded-full`, `--elevation-lg`.
- **Structure:**
  - Segment 1: Search query input with search icon (`"Search for dishes or restaurants..."`).
  - Divider: Vertical hairline separator (`#E2E8F0`).
  - Segment 2: Interactive Address Input Bar (`#hero-location-input`) with location pin icon and Nigerian neighborhood autocomplete datalist.
  - Segment 3: Primary CTA button (`"Find Food"`, `--cn-green-500`, hover `--cn-green-600`, text `#10151F` bold).

### 5.3 Restaurant Listing Card (Figma Node `84:12511`)
- **Container:** `rounded-[12px]`, border `1px solid var(--cn-white-500)`, background `#FFFFFF`, hover lift `--elevation-md`.
- **Image Banner:** `16:9` ratio, rounded top corners, overlay badges for `Open Now` (Green) or `Closed` (Slate/Red), and `4.8 ★ (120+)`.
- **Card Body:**
  - Title: `H5 Bold` (`20px–22px`, `--cn-blue-700`).
  - Verified Pill: "Confirmed Merchant" badge with checkmark shield.
  - Cuisine & Price Level: `Body` (`13px`, `--cn-blue-400`, e.g., "Nigerian • Suya & Grills • ₦₦").
  - Location & Distance: Geo pin + `Caption Bold` ("Allen Ave, Ikeja • 2.4 km").
- **Action Footers:**
  - Button 1 (Primary): **Call Merchant** (Direct `tel:` action with phone icon).
  - Button 2 (Secondary): **Chat** (Opens direct in-app messaging modal).
  - Tertiary: View Full Menu & Restaurant Details link.

### 5.4 Restaurant Profile Detail Page
- **Hero Cover Photo (Figma Node `84:12459`):** Height `360px–400px` with radial-gradient dark overlay.
- **Identity Overlay:** Restaurant Name in `H1 Bold` (`49px–61px`), Confirmed Merchant badge, cuisine tags, open status pill.
- **Direct Action Bar:**
  - **"Call Merchant"** (Large `--cn-green-500` CTA with phone icon).
  - **"Chat to Order"** (Secondary bordered pill with speech bubble).
  - **"Save to Favourites"** (Heart toggle icon button).
  - **"Get Directions"** (Map marker link).
- **Sticky Tab Navigation Bar (`top: 74px`):**
  - **Behavior:** Fixed underneath the primary navbar with glassmorphism blur (`backdrop-filter: blur(16px)`). As the user scrolls vertically down through the restaurant page, the tab bar automatically scrolls horizontally to the right (`scrollLeft`), bringing upcoming tabs into view.
  - **ScrollSpy:** Seamlessly activates and highlights tabs as their corresponding sections enter the viewport:
    - `Menu & Pricing`: Interactive categorized menu with dish photos, ingredients, variations, and add-on pricing.
    - `Ratings & Reviews`: Authentic community reviews, verified badge, score breakdown (Food Quality, Speed, Hospitality), and "Write Review" button.
    - `Photo Gallery`: High-resolution gallery of dishes, seating ambience, and kitchen.
    - `About & Hours`: Full address, opening hours schedule, social handles, phone numbers, and merchant backstory.
    - `Table Availability`: Informational viewing of table seating capacities, indoor/outdoor sections, and reservation contact instructions.
  - **Direct Section Jumps:** Clicking any tab smoothly scrolls the page directly to that section with full header offset compensation (`scroll-margin-top: 136px`).

### 5.5 Menu Item Card (Figma Node `84:12511` & `84:12551`)
- **Dimensions:** Horizontal card (`388px × 166px`) on desktop, stacked on mobile.
- **Thumbnail:** `128px × 128px` rounded dish image.
- **Content:**
  - Dish Name (`H3` / `Title 1 Bold`).
  - Short Description (`Body`, 2 lines max).
  - Price Tag (`Title 3 Bold`, e.g., `₦3,500`).
  - Action Button: **"Contact to Order"** or **"Inquire via Chat"** (pre-fills the chat message with the dish details and price!).

### 5.6 In-App Direct Chat Widget (Customer ↔ Restaurant)
- **Role:** The primary in-app conduit for placing and clarifying offline orders.
- **Components:**
  - Header: Restaurant name, active status dot ("Active now"), phone call shortcut.
  - Message Thread: Time-stamped bubbles (Customer: `--cn-green-200` fill with dark text; Restaurant: `#FFFFFF` fill with border).
  - Quick Inquiry Chips: *"Is this dish available today?"*, *"Can I place an order for pickup?"*, *"Do you offer direct delivery?"*
  - Message Input: Text field, photo attachment button, Enter to send.

### 5.7 Business Dashboard (Merchant Portal)
- **Dashboard Home:**
  - Key Performance Indicators: Total Profile Views, Menu Impressions, Favourites Saved, Customer Rating Average.
  - Weekly Views Chart: Line/bar visualization of daily customer discovery traffic.
  - Daily Insights & Quick Actions: "Store Open/Closed" switch, "Add New Dish", "Update Opening Hours".
- **Menu Manager:**
  - Category manager (drag-to-reorder, toggle active/inactive).
  - Dish editor modal (Name, Category, Price, Photos, Variations e.g. Spicy/Mild, Add-ons e.g. Extra Plantain, Availability toggle).
- **Reviews & Feedback:**
  - List of customer reviews with star rating, customer name, date.
  - Public reply mechanism allowing merchants to respond directly to customer reviews.
- **Subscription & Visibility:**
  - Active Plan indicator (Monthly/Yearly Visibility Plan).
  - Renewal reminders & payment details for platform listing maintenance.

---

## 6. Accessibility & Motion Guidelines

- **Contrast Ratios:** All text tokens meet WCAG 2.1 AA (minimum 4.5:1 for body, 3:1 for large display titles). `--cn-green-500` used with dark text (`#0B101E`) ensures optimal readability.
- **Focus Rings:** Distinctive 2px focus ring (`box-shadow: 0 0 0 3px var(--color-brand-ring)`) on all interactive buttons, search inputs, and tabs.
- **Micro-Interactions:** Smooth transitions (`150ms–250ms cubic-bezier(0.4, 0, 0.2, 1)`) on card hovers, modal overlays, and button presses.
- **Responsive Fluidity:** 100% mobile-friendly responsive layout down to `360px` screens.

---

## 7. Iconography & Vector System (IconScout Unicons)

To ensure consistent, premium visual aesthetics and eliminate cross-device emoji discrepancies, all emojis across the application are replaced with **IconScout Unicons** vector glyphs (`uil`):

| Context / Role | IconScout Unicons Class | Purpose / Location |
| :--- | :--- | :--- |
| **Location Pin** | `uil uil-map-marker` | Restaurant cards, Profile meta header, Merchant status, Address blocks |
| **Star Rating** | `uil uil-star` | Review summaries, Featured badges, Merchant KPI rating card |
| **Verified Merchant** | `uil uil-shield-check` | Confirmed merchant tags & filter pills |
| **All Cuisines** | `uil uil-utensils-alt` | Category navigation bar |
| **Nigerian Traditional** | `uil uil-crockery` | Category navigation bar |
| **Suya & Grills** | `uil uil-fire` | Category navigation bar |
| **Continental & Bistro** | `uil uil-pizza-slice` | Category navigation bar |
| **Soups & Swallows** | `uil uil-crockery` | Category navigation bar |
| **Fast Food & Bakery** | `uil uil-coffee` | Category navigation bar |
| **Fresh Seafood** | `uil uil-water` | Category navigation bar |
| **Drinks & Smoothies** | `uil uil-glass-martini-alt` | Category navigation bar |
| **Distance & Time** | `uil uil-clock` | Delivery/walk distance tags |
| **Telephone** | `uil uil-phone` | Direct call buttons & contact card |
| **WhatsApp / Inquiries** | `uil uil-whatsapp` | WhatsApp contact links & chat inquiry |
| **Close / Dismiss** | `uil uil-times` | Chat popover & Modal header close triggers |
| **Discovery Badge** | `uil uil-bolt` | Hero announcement pill badge |

