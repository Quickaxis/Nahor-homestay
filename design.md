# Nahor Homestay Design System

## 1. Brand Direction

Nahor Homestay should feel premium, peaceful, homely, and comfortable. The design should look like a modern boutique homestay/hotel website, not a normal low-budget lodge website.

The website should feel:

* Premium
* Clean
* Warm
* Calm
* Family-friendly
* Modern
* Travel-inspired
* Comfortable
* Trustworthy

The design style should be inspired by luxury travel websites with large visuals, soft glass panels, clean spacing, rounded corners, and elegant typography.

## 2. Main Design Style

Use a premium **glassmorphism hotel website style**.

The whole website should use:

* Soft blurred glass cards
* Rounded corners everywhere
* Large video/image sections
* Warm ivory background
* Deep green and gold accents
* Elegant serif headings
* Clean modern body text
* Soft shadows
* Thin borders
* Smooth animations
* Premium mobile experience

Avoid:

* Sharp corners
* Harsh black sections
* Neon colors
* Too many colors
* Flat boring white cards
* Cheap hotel template look
* Overcrowded sections
* Heavy animations
* Huge mobile gaps
* Oversized carousels on mobile

## 3. Hero Section Design

The hero section must use a full-screen video background.

Hero video rules:

* Video must cover the full hero area
* Use `object-fit: cover`
* Video should autoplay, muted, loop, and playsinline
* Add a dark green/black gradient overlay above the video
* Text must be readable on top of the video
* Use a glassmorphism content panel or glass floating elements
* Hero must look cinematic and premium

Hero height:

* Desktop: `100vh`
* Mobile: `90svh`

Hero content style:

* Small uppercase label
* Big elegant heading
* Short description
* Two buttons: primary booking button and secondary view rooms button

Example hero copy:

* Label: `WELCOME TO NAHOR HOMESTAY`
* Heading: `Your Comfortable Stay in Dibrugarh`
* Description: `Spacious 1BHK and 2BHK stays near Mancota Gaon and Banipur Railway Station.`
* Primary button: `Book on WhatsApp`
* Secondary button: `View Rooms`

## 4. Typography System

Use two fonts only.

### Heading Font

Use `Playfair Display` for all headings.

Use it for:

* Hero heading
* Section headings
* Room names
* Premium highlight text
* Large display text

Heading style:

* Elegant
* Premium
* Slightly luxurious
* Clean and readable
* Not too decorative

### Body Font

Use `Inter` for all body text.

Use it for:

* Paragraphs
* Buttons
* Navbar
* Pricing
* Amenities
* Room details
* FAQ
* Footer
* Forms

Body style:

* Clean
* Modern
* Easy to read
* Professional

### Google Font Import

Add this in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');
```

### Font Variables

```css
:root {
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

### Typography Scale

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.05rem;
  --text-lg: 1.18rem;
  --text-xl: 1.4rem;
  --text-2xl: 1.8rem;
  --text-3xl: 2.4rem;
  --text-4xl: 3.4rem;
  --text-5xl: 4.8rem;
}
```

### Heading Rules

```css
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--text-main);
  letter-spacing: -0.03em;
}

h1 {
  font-size: clamp(3rem, 7vw, 5.8rem);
  line-height: 0.95;
  font-weight: 800;
}

h2 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1;
  font-weight: 700;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  line-height: 1.1;
  font-weight: 700;
}
```

### Body Text Rules

```css
body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-main);
}

p {
  color: var(--text-muted);
  line-height: 1.75;
}
```

### Mobile Typography

```css
@media (max-width: 768px) {
  h1 {
    font-size: clamp(2.4rem, 12vw, 4rem);
    line-height: 0.95;
  }

  h2 {
    font-size: clamp(1.9rem, 9vw, 2.8rem);
    line-height: 1.05;
  }

  h3 {
    font-size: 1.45rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
```

## 5. Color Palette

The color palette must feel warm, premium, natural, and homely.

Use warm ivory backgrounds, deep green accents, sage green softness, white glass panels, and a small amount of gold for premium highlights.

### Main CSS Colors

```css
:root {
  --color-bg: #F8F3EA;
  --color-bg-soft: #FFF9F0;
  --color-cream: #FFF4E2;
  --color-white: #FFFFFF;

  --color-dark: #101A14;
  --color-deep-green: #183C2E;
  --color-green: #2F6B4F;
  --color-sage: #AFC7B4;
  --color-sage-light: #DCE8DD;

  --color-gold: #C8A45D;
  --color-gold-soft: #E6D4A8;
  --color-brown: #6B4A2F;

  --text-main: #132018;
  --text-muted: #657168;
  --text-soft: #8A958D;
  --text-light: rgba(255, 255, 255, 0.88);

  --glass-white: rgba(255, 255, 255, 0.22);
  --glass-light: rgba(255, 255, 255, 0.34);
  --glass-dark: rgba(16, 26, 20, 0.46);

  --border-glass: rgba(255, 255, 255, 0.36);
  --border-soft: rgba(19, 32, 24, 0.1);
}
```

### Color Usage

Use colors like this:

* Main background: `--color-bg`
* Soft section background: `--color-bg-soft`
* Headings: `--text-main`
* Paragraphs: `--text-muted`
* Primary buttons: `--color-deep-green`
* Premium highlights: `--color-gold`
* Cards: `--glass-white`
* Hero glass: `--glass-dark`
* Footer: deep green gradient
* Borders: soft white or soft dark border

Do not use too much pure black. Use deep green-black instead.

## 6. Corner Radius System

Rounded corners are very important for this website.

No sharp corners should be used anywhere.

### Radius Variables

```css
:root {
  --radius-xs: 8px;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 28px;
  --radius-xl: 38px;
  --radius-2xl: 48px;
  --radius-pill: 999px;
}
```

### Radius Usage

Use this system:

* Small badges: `--radius-pill`
* Buttons: `--radius-pill`
* Navbar: `--radius-pill`
* Small cards: `--radius-md`
* Room cards: `--radius-xl`
* Large glass panels: `--radius-2xl`
* Images: `--radius-lg`
* Mobile cards: minimum `24px`

Example:

```css
.card {
  border-radius: var(--radius-xl);
}

.button {
  border-radius: var(--radius-pill);
}

.image-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
}
```

## 7. Glassmorphism System

Glassmorphism must be used throughout the website.

### Light Glass

Use this for normal cards and sections:

```css
.glass {
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.36);
  box-shadow: 0 24px 80px rgba(16, 26, 20, 0.14);
}
```

### Strong Light Glass

Use this when readability is important:

```css
.glass-strong {
  background: rgba(255, 255, 255, 0.38);
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 24px 70px rgba(16, 26, 20, 0.16);
}
```

### Dark Glass

Use this on hero video and dark image backgrounds:

```css
.glass-dark {
  background: rgba(16, 26, 20, 0.46);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.25);
}
```

Glass panels must always have readable text. If the image/video is too bright, increase overlay darkness.

## 8. Shadow System

Use soft premium shadows only.

```css
:root {
  --shadow-soft: 0 18px 50px rgba(16, 26, 20, 0.10);
  --shadow-card: 0 24px 70px rgba(16, 26, 20, 0.14);
  --shadow-strong: 0 34px 100px rgba(16, 26, 20, 0.22);
  --shadow-button: 0 14px 35px rgba(24, 60, 46, 0.28);
}
```

Avoid hard black shadows.

## 9. Button Design

Buttons must be rounded, premium, and simple.

### Primary Button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--color-deep-green);
  color: white;
  border-radius: var(--radius-pill);
  padding: 14px 24px;
  min-height: 50px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.28);
  box-shadow: var(--shadow-button);
  transition: all 0.35s ease;
}
```

### Secondary Glass Button

```css
.btn-glass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.22);
  color: white;
  border-radius: var(--radius-pill);
  padding: 14px 24px;
  min-height: 50px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.42);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  transition: all 0.35s ease;
}
```

### Button Hover

```css
.btn-primary:hover,
.btn-glass:hover {
  transform: translateY(-3px);
}
```

Button text should be short:

* Book Now
* Book on WhatsApp
* Call Now
* View Rooms
* View Prices

## 10. Layout and Spacing

Use clean premium spacing.

### Container

```css
.container {
  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
}
```

### Section Spacing

```css
section {
  padding: 96px 0;
}

@media (max-width: 768px) {
  section {
    padding: 58px 0;
  }
}
```

### Grid Rules

* Desktop: use 2-column and 3-column layouts
* Tablet: use 2 columns if space allows
* Mobile: single-column layout
* Keep equal spacing between cards
* Do not overcrowd sections
* Keep mobile layout compact and premium

## 11. Navbar Design

Navbar should be a floating glass pill navbar.

Navbar style:

* Fixed at top
* Center aligned
* Rounded pill shape
* Glass background
* Soft border
* Logo on left
* Links in middle
* Book button on right

```css
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: min(1120px, calc(100% - 32px));
  z-index: 100;
  border-radius: var(--radius-pill);
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.36);
  box-shadow: var(--shadow-soft);
}
```

Mobile navbar:

* Keep it small
* Logo must be visible
* Book button must be visible
* Do not take too much vertical space
* Use simple menu if required

## 12. Card Design

All cards must look premium.

Basic card style:

```css
.card {
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid rgba(255, 255, 255, 0.38);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
```

Card rules:

* Rounded corners
* Soft shadow
* Glass effect
* Clean inner padding
* Image should be rounded
* Text must be readable
* No crowded content

## 13. Room Card Design

Room cards should clearly show room type, price, amenities, and booking button.

Each room card must include:

* Room image
* Room title
* AC/Non-AC badge
* Balcony badge if available
* Weekday price
* Weekend price
* Amenities
* Book button

Room cards should use:

* Glass card background
* Rounded image
* Large price
* Small supporting text
* Clean badge system

Badge style:

```css
.badge {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-pill);
  padding: 7px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.42);
  color: var(--text-main);
}
```

## 14. Pricing Design

Pricing must be very clear.

Use this pricing:

### 1BHK Non-AC Ground Floor

Weekdays: ₹1300
Saturday/Sunday: ₹1400

### 1BHK AC 3rd Floor

Weekdays: ₹1500
Saturday/Sunday: ₹1700

### 2BHK Non-AC Unit

Weekdays: ₹2500
Saturday/Sunday: ₹2800

### 2BHK AC / Premium Unit

Weekdays: ₹2800
Saturday/Sunday: ₹3000

### Lounge

₹500 extra

Pricing cards should have:

* Big price
* Small label
* Clear weekday and weekend separation
* Rounded glass card
* Book button

## 15. Image and Video Rules

All images and videos must look full and premium.

```css
img,
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Room image ratio:

```css
.room-image {
  aspect-ratio: 16 / 11;
  border-radius: var(--radius-lg);
  overflow: hidden;
}
```

Mobile image ratio:

```css
@media (max-width: 768px) {
  .room-image {
    aspect-ratio: 4 / 3;
  }
}
```

Rules:

* Do not stretch images
* Do not leave black bars
* Avoid cutting important parts
* Use `object-position: center`
* Keep mobile images balanced

## 16. Mobile Design Rules

Mobile design is extremely important.

Mobile must follow:

* Same premium feeling as desktop
* No oversized cards
* No huge carousels
* No unnecessary gaps
* No text overflow
* Buttons must be full width where needed
* Cards must stack cleanly
* Images must fit properly
* Navbar must stay compact
* Hero text must be readable

Mobile button rule:

```css
@media (max-width: 768px) {
  .button-group {
    flex-direction: column;
    width: 100%;
  }

  .button-group a,
  .button-group button {
    width: 100%;
    justify-content: center;
  }
}
```

## 17. Animation Rules

Animations should be smooth and premium.

Allowed:

* Fade up
* Soft hover lift
* Slow image zoom
* Smooth navbar reveal
* Button hover movement

Avoid:

* Bouncing
* Fast movement
* Too many animations
* Heavy effects that cause lag

Use:

```css
transition: all 0.35s ease;
```

Card hover:

```css
.card:hover {
  transform: translateY(-6px);
}
```

## 18. Final Design Rule

Every part of the Nahor Homestay website must follow this design system.

Before creating any section, check this `design.md` file.

The final website should look like a premium glassmorphism homestay website with a video hero, rounded cards, elegant typography, warm colors, and a clean luxury travel feel.

Do not use any design style outside this file.
