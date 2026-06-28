# Nahor Homestay – Build Rules

## 1. Source of Truth

Before writing or editing any website code, always read these files first:

* `/docs/design.md`
* `/docs/content.md`
* `/docs/site-structure.md`
* `/docs/performance.md`
* `/docs/assets.md`
* `/docs/seo.md`
* `/docs/build-rules.md`

Use each file for its own purpose:

* `design.md` controls visual style
* `content.md` controls real content, prices, amenities, rules, contact, and location
* `site-structure.md` controls section order
* `performance.md` controls speed and optimization
* `assets.md` controls images, videos, logo, and media placement
* `seo.md` controls meta title, description, keywords, and SEO content
* `build-rules.md` controls development restrictions and anti-hallucination rules

Do not ignore these files.

---

## 2. Do Not Hallucinate

Do not invent or assume anything.

Do not invent:

* Room prices
* Room types
* Room count
* Amenities
* Address
* Contact numbers
* Booking policies
* Guest capacity
* Reviews
* Ratings
* Awards
* Fake testimonials
* Fake hotel facilities
* Restaurant
* Swimming pool
* Breakfast
* Room service
* Spa
* Luxury claims not provided by the user

If something is missing, write:

`TODO: Add missing detail`

---

## 3. Real Nahor Homestay Data

Use these details only if they match `content.md`.

## Contact

Phone / WhatsApp: `+91 94017 09323`

## Instagram

`@nahorhomestay`

## Google Maps

`https://maps.app.goo.gl/Vk3cj9z2UcWE7DzCA`

## Location

Near Mancota Gaon, Banipur Railway Station, Dibrugarh, Assam

---

## 4. Pricing Rules

Use only the confirmed pricing.

## 1BHK Non-AC Ground Floor

Weekdays: ₹1300
Saturday/Sunday: ₹1400

## 1BHK AC 3rd Floor

Weekdays: ₹1500
Saturday/Sunday: ₹1700

## 2BHK Non-AC Unit

Weekdays: ₹2500
Saturday/Sunday: ₹2800

## 2BHK AC / Premium Unit

Weekdays: ₹2800
Saturday/Sunday: ₹3000

## Lounge

₹500 extra

## Party Rate

Party rate starts from ₹2500 onwards.

Show it as:

`Party Rate Starting From ₹2500`

Do not write a fixed final party price unless the user provides it.

---

## 5. AC / Non-AC Option Rule

Where a room has AC and Non-AC choices, keep a clear option/toggle system.

Use labels like:

* AC
* Non-AC

The AC/Non-AC option must be easy to understand.

Do not confuse the user by mixing prices.

For each room card, show:

* Room name
* AC or Non-AC label
* Weekday price
* Saturday/Sunday price
* Book button

For 2BHK cards:

* 2BHK Non-AC Unit
* 2BHK AC / Premium Unit

For 1BHK cards:

* 1BHK Non-AC Ground Floor
* 1BHK AC 3rd Floor

Do not create fake AC/Non-AC options where they are not confirmed.

---

## 6. Carousel Rules

Carousels must be built carefully.

The previous carousel examples had issues where images were not fitting properly. Do not repeat that mistake.

## Important Carousel Rules

* Do not create oversized carousels
* Do not create carousels that crop important parts of the room
* Do not stretch photos
* Do not leave black bars
* Do not make carousel height too large on mobile
* Do not make carousel controls cover important parts of the photo
* Do not make the carousel break on mobile
* Do not make only the first image visible on mobile
* Do not hide other carousel images on mobile
* Do not make huge gaps because of carousel height

## Preferred Carousel Style

Use clean image cards with fixed aspect ratio.

Use:

```css
.room-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.room-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

For wider desktop room sections:

```css
@media (min-width: 900px) {
  .room-media {
    aspect-ratio: 16 / 11;
  }
}
```

For mobile:

```css
@media (max-width: 768px) {
  .room-media {
    aspect-ratio: 4 / 3;
    max-height: 420px;
  }
}
```

## Object Position Rule

If a photo is cutting important parts, use object position per image.

Examples:

```css
.object-center {
  object-position: center;
}

.object-top {
  object-position: top;
}

.object-bottom {
  object-position: bottom;
}
```

Do not crop important beds, balconies, room corners, or exterior building views.

---

## 7. Room Layout Rules

Room sections should be clean and premium.

Use either:

### Option A: Room Cards Grid

Best for simple display.

* Image on top
* Room details below
* Price visible
* AC/Non-AC badge
* Book button

### Option B: Large Featured Room Layout

Use only if images fit properly.

* Image/carousel on left
* Room details on right
* Price and booking CTA visible
* Mobile stacks image first, text second

Do not create a large half-screen carousel unless it is fully responsive and tested.

---

## 8. Mobile Room Rules

Mobile room cards must be compact and clean.

On mobile:

* Room image must fit properly
* No image should become extremely tall
* Text must not overflow
* Buttons must be easy to tap
* AC/Non-AC options must be clear
* Prices must be easy to read
* Carousels must not consume too much space
* Room cards must stack cleanly

Use:

```css
@media (max-width: 768px) {
  .room-card {
    border-radius: 28px;
    overflow: hidden;
  }

  .room-content {
    padding: 22px;
  }

  .room-actions {
    flex-direction: column;
  }

  .room-actions a,
  .room-actions button {
    width: 100%;
  }
}
```

---

## 9. Image Rules

Use only images provided by the user or listed in `assets.md`.

If an image is missing, write:

`TODO: Add image here`

Do not use random hotel photos.

Do not use stock photos unless the user clearly says to use stock photos.

Every image must have:

* Proper alt text
* Correct aspect ratio
* Lazy loading if below hero
* No stretching
* No weird crop
* Rounded corners

Example:

```html
<img 
  src="assets/images/room-1.webp" 
  alt="Nahor Homestay 1BHK room in Dibrugarh" 
  loading="lazy" 
  decoding="async"
/>
```

---

## 10. Hero Video Rules

Hero video must follow `performance.md`.

Do not add more than one background video.

Hero video must have:

* `autoplay`
* `muted`
* `loop`
* `playsinline`
* `preload="metadata"`
* `poster`

If hero video is missing, write:

`TODO: Add hero video`

Do not use random stock video.

---

## 11. Design Rules

Follow `design.md` strictly.

Use:

* Glassmorphism
* Warm ivory background
* Deep green accents
* Sage green
* Soft gold highlights
* Rounded corners
* Premium cards
* Floating glass navbar
* Playfair Display for headings
* Inter for body text

Do not use:

* Harsh black
* Neon colors
* Sharp corners
* Boring plain cards
* Messy layouts
* Too many colors
* Heavy animations

---

## 12. Section Order Rule

Follow `site-structure.md` exactly.

Final section order:

1. Floating Glass Navbar
2. Hero Video Section
3. Quick Booking Strip
4. About Nahor Homestay
5. Stay Options / Rooms Section
6. Pricing Section
7. Amenities Section
8. House Rules Section
9. Gallery Section
10. Location Section
11. FAQ Section
12. Final Booking CTA Section
13. Footer

Do not add extra sections unless instructed.

---

## 13. House Rules Section

Use only confirmed rules.

Rules to include:

* No smoking
* No loud music after 10:00 PM
* Keep TV volume low after 10:00 PM
* No visitors, parties, events, or unregistered guests
* Save energy
* No bedroom dining
* Maintain cleanliness
* Do not rearrange furniture
* Damage policy applies

Important highlight:

`No loud music after 10:00 PM`

---

## 14. Booking Button Rules

Every important CTA must connect to the real number:

`+91 94017 09323`

WhatsApp links should use this format:

```txt
https://wa.me/919401709323
```

Optional prefilled message:

```txt
https://wa.me/919401709323?text=Hello%20Nahor%20Homestay%2C%20I%20want%20to%20book%20a%20room.
```

Call link:

```txt
tel:+919401709323
```

Do not use any other number.

---

## 15. Performance Rules

Follow `performance.md`.

Do not add:

* Heavy animation libraries
* Multiple background videos
* Large uncompressed images
* Heavy carousel libraries
* Scroll-jacking effects
* Full-page parallax
* Random plugins

Website must be lightweight and smooth.

---

## 16. SEO Rules

Follow `seo.md`.

Use keywords naturally.

Do not keyword stuff.

Important SEO phrases:

* Nahor Homestay
* Nahor Homestay Dibrugarh
* Homestay in Dibrugarh
* 1BHK homestay in Dibrugarh
* 2BHK homestay in Dibrugarh
* Homestay near Mancota Gaon
* Homestay near Banipur Railway Station

---

## 17. Final Build Checklist

Before final delivery, check:

* All prices are correct
* Contact number is correct
* Google Maps link is correct
* Instagram handle is correct
* Hero video is optimized
* Room images fit properly
* Carousels work on mobile
* No photo is badly cropped
* No fake amenities are added
* No fake reviews are added
* No wrong room details are added
* AC/Non-AC options are clear
* Party rate says starting from ₹2500 onwards
* House rules are visible
* Mobile layout looks premium
* Website does not lag
* All buttons work

---

# Final Rule

The website must look premium but must not hallucinate content.

If any detail is not provided, leave a TODO.

Do not guess.
