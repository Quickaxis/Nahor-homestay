# Nahor Homestay – Performance Rules

## 1. Main Goal

The Nahor Homestay website must feel premium, smooth, and fast on both mobile and desktop.

The design will use:

* Full-screen hero video
* Glassmorphism cards
* Rounded images
* Gallery images
* Room cards
* Smooth animations

Because of this, performance must be optimized properly.

The website must not feel laggy, heavy, or slow.

---

# 2. Hero Video Performance Rules

The hero section will use a video background. This video must be optimized properly.

## Hero Video Requirements

Use the hero video only in the first hero section.

The video must be:

```html
<video autoplay muted loop playsinline preload="metadata" poster="assets/images/hero-poster.webp">
  <source src="assets/videos/hero-video.mp4" type="video/mp4" />
</video>
```

## Required Video Attributes

Always use:

* `autoplay`
* `muted`
* `loop`
* `playsinline`
* `preload="metadata"`
* `poster`

Do not use `preload="auto"` because it can slow down the first page load.

## Video Styling

```css
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Video Overlay

Always use a dark overlay above the video to make text readable.

```css
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(16, 26, 20, 0.52),
      rgba(16, 26, 20, 0.35),
      rgba(16, 26, 20, 0.70)
    );
  z-index: 1;
}
```

Hero content must stay above the overlay.

```css
.hero-content {
  position: relative;
  z-index: 2;
}
```

---

# 3. Hero Video File Size Rules

The hero video must be compressed before adding to the website.

## Recommended Video Settings

* Format: `.mp4`
* Codec: H.264
* Resolution desktop: 1920px wide maximum
* Resolution mobile: 720px to 1080px wide
* Duration: 8 to 15 seconds loop
* File size target: under 8MB if possible
* Maximum file size: 12MB
* Audio: remove audio completely
* Frame rate: 24fps or 30fps

Do not use a huge 4K video.

Do not use uncompressed video.

Do not use long videos.

---

# 4. Mobile Hero Video Rule

Mobile users should not be forced to load a very heavy desktop video.

Use either:

* A compressed mobile version of the video, or
* A poster image fallback on mobile if needed

Recommended structure:

```html
<video autoplay muted loop playsinline preload="metadata" poster="assets/images/hero-poster.webp" class="hero-video">
  <source src="assets/videos/hero-video-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
  <source src="assets/videos/hero-video.mp4" type="video/mp4" />
</video>
```

If mobile video causes lag, use poster image fallback on mobile.

```css
@media (max-width: 768px) {
  .hero-video {
    object-fit: cover;
  }
}
```

---

# 5. Poster Image Rule

Hero video must always have a poster image.

Poster image:

* Should be a still frame from the hero video
* Format: `.webp`
* Size: around 1600px wide for desktop
* Mobile version: around 900px wide
* Should look premium even before video loads

Required files:

```txt
assets/images/hero-poster.webp
assets/images/hero-poster-mobile.webp
```

If poster image is missing, add:

`TODO: Add hero poster image`

Do not use random stock image.

---

# 6. Image Optimization Rules

All website images must be optimized.

## Image Format

Use:

* `.webp` for photos
* `.svg` for icons if available
* `.png` only for transparent logos if required

Avoid:

* Heavy `.jpg` files
* Huge `.png` photos
* Uncompressed images

## Image Size Rules

Recommended sizes:

```txt
Hero poster desktop: 1600px wide
Hero poster mobile: 900px wide
Room images: 900px wide
Gallery images: 1000px wide
Thumbnail images: 500px wide
Logo: 200px wide maximum
```

## Image Loading

Images below the hero section must use lazy loading.

```html
<img src="..." alt="..." loading="lazy" decoding="async">
```

Hero image/poster should not use lazy loading.

---

# 7. Prevent Layout Shift

Always define width, height, or aspect ratio for images and videos.

Use aspect ratio wrappers.

```css
.room-image {
  aspect-ratio: 16 / 11;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.gallery-image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-lg);
}
```

Mobile:

```css
@media (max-width: 768px) {
  .room-image,
  .gallery-image {
    aspect-ratio: 4 / 3;
  }
}
```

No image should jump while loading.

---

# 8. Glassmorphism Performance Rules

Glassmorphism looks premium but can become heavy if overused.

Use blur carefully.

## Recommended Blur

Use:

```css
backdrop-filter: blur(18px);
-webkit-backdrop-filter: blur(18px);
```

Maximum blur:

```css
backdrop-filter: blur(26px);
-webkit-backdrop-filter: blur(26px);
```

Do not use blur above `30px`.

## Avoid

* Too many nested glass cards
* Multiple heavy blur layers on top of video
* Blur on large full-screen sections except navbar/hero card
* Excessive box shadows

Glass cards should look premium but not make the page lag.

---

# 9. Animation Performance Rules

Animations must be smooth and light.

Allowed animations:

* Fade up
* Soft translate
* Button hover lift
* Image hover zoom
* Navbar reveal

Avoid:

* Heavy parallax
* Scroll-jacking
* Random bouncing
* Too many elements animating together
* Large blur animations
* Animating width/height/top/left

Use transform and opacity only.

Good:

```css
.card {
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.card:hover {
  transform: translateY(-6px);
}
```

Avoid:

```css
.card:hover {
  width: 110%;
  height: 110%;
}
```

---

# 10. JavaScript Rules

Keep JavaScript minimal.

Use JavaScript only for:

* Mobile menu
* Smooth scroll
* FAQ accordion
* Gallery lightbox if needed
* Room carousel if really needed

Avoid:

* Heavy animation libraries
* Large carousel libraries
* Unnecessary plugins
* Too many event listeners
* Auto-playing multiple videos
* Complex scroll effects

The website should work even if JavaScript is minimal.

---

# 11. Carousel Rules

Avoid heavy carousels.

For the Nahor Homestay website:

* Do not make every section a carousel
* Do not use large carousel libraries unless necessary
* Room cards should be simple and readable
* Gallery should preferably be a clean grid
* On mobile, avoid very tall carousel sections

If carousel is needed:

* Use lightweight custom JavaScript
* Lazy load images
* Keep controls simple
* Keep carousel height fixed
* Do not autoplay multiple carousels

---

# 12. CSS Rules

CSS must be clean and reusable.

Use variables from `design.md`.

Do not repeat the same styles everywhere.

Use reusable classes like:

```txt
.container
.glass
.glass-dark
.btn-primary
.btn-glass
.section-heading
.card
.room-card
.pricing-card
.amenity-card
```

Avoid:

* Inline styles
* Repeated CSS
* Unused CSS
* Too many different shadows
* Too many different colors

---

# 13. Font Performance Rules

Use only the fonts defined in `design.md`.

Fonts:

* Playfair Display for headings
* Inter for body text

Use Google Fonts with `display=swap`.

Do not use more than two font families.

Do not load too many font weights.

Recommended weights:

```txt
Inter: 400, 500, 600, 700, 800
Playfair Display: 600, 700, 800
```

---

# 14. Mobile Performance Rules

Mobile performance is very important.

Mobile rules:

* Keep hero video compressed
* Avoid heavy animations
* Avoid big fixed background effects
* Avoid oversized images
* Avoid huge gaps
* Keep cards compact
* Use single-column layouts where needed
* Use full-width buttons where useful
* Reduce blur if mobile feels laggy

Mobile glass can be slightly lighter:

```css
@media (max-width: 768px) {
  .glass,
  .glass-dark {
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
}
```

---

# 15. Loading Priority

Load the page in this priority:

1. Basic HTML content
2. Critical CSS
3. Hero poster image
4. Hero video metadata
5. Main fonts
6. Below-fold images with lazy loading
7. Optional JavaScript

The website should show useful content quickly even before all images load.

---

# 16. Accessibility Performance

Performance should not harm usability.

Rules:

* Text must be readable over video
* Buttons must be easy to tap
* Use proper alt text for images
* Use semantic HTML
* Do not rely only on animations
* Respect reduced motion settings

Add reduced motion support:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }

  .hero-video {
    display: none;
  }
}
```

If video is hidden for reduced motion, poster image must still show.

---

# 17. SEO Performance Rules

Performance also affects SEO.

Rules:

* Use proper page title
* Use meta description from `seo.md`
* Use image alt text
* Use fast-loading images
* Avoid layout shift
* Keep HTML semantic
* Use heading order properly
* Do not hide important text inside images

---

# 18. Final Performance Checklist

Before final delivery, check:

* Hero video is compressed
* Hero video has poster image
* Video uses `preload="metadata"`
* Video is muted, looped, playsinline
* Images are optimized
* Images below fold use lazy loading
* Mobile layout is smooth
* No oversized carousel
* No heavy JavaScript
* No random external libraries
* No layout shift
* Buttons work properly
* Glassmorphism does not lag
* Website looks premium and loads fast

---

# 19. Anti-Hallucination Rule

Do not add performance-heavy features that were not requested.

Do not add:

* Heavy parallax
* 3D animations
* Full-page scroll effects
* Multiple background videos
* Random animation libraries
* Heavy booking systems
* Fake review widgets
* Unnecessary plugins

If a feature is not required, keep it simple.

---

# Final Rule

The Nahor Homestay website must feel premium but lightweight.

The hero video should improve the first impression, not make the website slow.

Always follow:

* `design.md` for visual style
* `content.md` for real content
* `assets.md` for media
* `site-structure.md` for layout
* `seo.md` for search optimization
* `build-rules.md` for development restrictions
* `performance.md` for speed and smoothness
