# Nahor Homestay – Website Structure

## Important Rule

Before building the website, always read:

* `/docs/design.md`
* `/docs/content.md`
* `/docs/assets.md`
* `/docs/seo.md`
* `/docs/performance.md`
* `/docs/build-rules.md`
* `/docs/site-structure.md`

Do not change the order of sections unless instructed.

---

# 1. Floating Glass Navbar

## Purpose

Help users quickly move around the website and book the homestay.

## Design

Follow `design.md`.

Navbar must be:

* Fixed at top
* Floating glassmorphism style
* Rounded pill shape
* Logo/name on left
* Navigation links in center or right
* Book button visible
* Compact on mobile

## Navbar Links

* Home
* About
* Rooms
* Pricing
* Amenities
* Rules
* Location
* Contact

## Navbar CTA

Button text: `Book Now`

Button action:

* Open WhatsApp booking link using contact number from `content.md`

---

# 2. Hero Video Section

## Purpose

Create a premium first impression with a full-screen video background.

## Content Source

Use hero text from `content.md`.

## Must Include

* Full-screen video background
* Dark gradient overlay
* Glassmorphism text panel
* Small label
* Main heading
* Short description
* Primary CTA button: `Book on WhatsApp`
* Secondary CTA button: `View Rooms`
* Quick highlight badges

## Hero Badges

Use these:

* 1BHK & 2BHK Units
* Free Wi-Fi
* Parking Available
* Private Balcony
* 24x7 Power Backup

## Missing Asset Rule

If hero video is not added yet, write:

`TODO: Add hero video`

Do not use random stock video.

---

# 3. Quick Booking Strip

## Purpose

Give users fast access to booking, call, location, and pricing.

## Design

Use a horizontal glass card on desktop.
Use stacked cards on mobile.

## Items

* Call Now
* WhatsApp Booking
* View Pricing
* Open Google Maps

## Actions

* Call button uses contact number from `content.md`
* WhatsApp button uses contact number from `content.md`
* Map button uses Google Maps link from `content.md`

---

# 4. About Nahor Homestay

## Purpose

Explain what Nahor Homestay is and why guests should stay here.

## Content Source

Use about section from `content.md`.

## Layout

Desktop:

* Left side: image/video or glass content card
* Right side: about text and highlights

Mobile:

* Single column
* Image first or content first, whichever looks better

## Must Include

* Section label: `ABOUT NAHOR HOMESTAY`
* Heading: `A Peaceful Homestay Near Banipur Railway Station`
* Short paragraph
* Highlights

## Highlights

* Located near Mancota Gaon
* Near Banipur Railway Station
* 1BHK and 2BHK stays
* Family-friendly property
* Free Wi-Fi and parking

---

# 5. Stay Options / Rooms Section

## Purpose

Show all available room/unit options clearly.

## Content Source

Use room details from `content.md`.

## Section Title

`Choose Your Stay`

## Section Description

`Explore spacious 1BHK and 2BHK units designed for families, travellers, and groups visiting Dibrugarh.`

## Room Cards

Create cards for:

1. `1BHK Non-AC Ground Floor`
2. `1BHK AC 3rd Floor`
3. `2BHK Non-AC Unit`
4. `2BHK AC / Premium Unit`

## Each Room Card Must Include

* Room image placeholder
* Room title
* AC or Non-AC badge
* Floor/unit detail
* Weekday price
* Saturday/Sunday price
* Key amenities
* Book button

## Room Image Rule

If room image is missing, write:

`TODO: Add room image`

Do not use random images.

---

# 6. Pricing Section

## Purpose

Show prices clearly so guests do not get confused.

## Content Source

Use pricing only from `content.md`.

## Section Title

`Simple & Clear Pricing`

## Pricing Cards

Create pricing cards for:

### 1BHK Non-AC Ground Floor

* Weekdays: ₹1300
* Saturday/Sunday: ₹1400

### 1BHK AC 3rd Floor

* Weekdays: ₹1500
* Saturday/Sunday: ₹1700

### 2BHK Non-AC Unit

* Weekdays: ₹2500
* Saturday/Sunday: ₹2800

### 2BHK AC / Premium Unit

* Weekdays: ₹2800
* Saturday/Sunday: ₹3000

### Lounge

* ₹500 extra

## Design

* Use glass pricing cards
* Show price in large text
* Keep weekday and weekend price separate
* Add Book Now button on each card

---

# 7. Amenities Section

## Purpose

Show all facilities available at Nahor Homestay.

## Content Source

Use amenities only from `content.md`.

## Section Title

`Everything You Need for a Comfortable Stay`

## Amenities To Show

* Free Wi-Fi
* Parking for 5 cars
* Geyser
* RO drinking water
* Separate kitchen
* 24x7 power backup
* Private balcony
* Balcony in both 2BHK units
* Lounge available
* Couple & Family-Friendly Rooms
* Spacious 1BHK and 2BHK units

## Design

* Use icon-style glass cards
* 3 columns on desktop
* 2 columns on tablet
* 1 column or 2 compact columns on mobile
* Keep cards small and clean

---

# 8. House Rules Section

## Purpose

Clearly show guest rules before booking.

## Content Source

Use house rules from `content.md`.

## Section Title

`House Rules`

## Rules To Show

* No Smoking
* Quiet Hours
* TV Volume
* No Visitors
* Save Energy
* No Bedroom Dining
* Cleanliness
* Furniture
* Damage Policy

## Important Rule Highlight

Show this clearly:

`No loud music after 10:00 PM.`

## Design

* Use clean glass rule cards
* Add small icons
* Keep text short and readable
* Do not make this section too dark or scary

---

# 9. Gallery Section

## Purpose

Show property, room, balcony, and exterior photos.

## Content Source

Use only assets listed in `assets.md`.

## Section Title

`Gallery`

## Gallery Categories

* Exterior
* Rooms
* Balcony
* Kitchen
* Lounge
* Common Areas

## Missing Image Rule

If images are missing, write:

`TODO: Add gallery images`

Do not use random stock images.

## Design

* Premium rounded image grid
* No huge carousels on mobile
* Mobile should show clean stacked images
* Images must not stretch
* Use object-fit cover

---

# 10. Location Section

## Purpose

Help guests find the homestay easily.

## Content Source

Use location and map link from `content.md`.

## Section Title

`Easy to Reach Location in Dibrugarh`

## Must Include

* Location text
* Google Maps button
* Embedded map or map preview
* Address

## Address

Near Mancota Gaon, Banipur Railway Station, Dibrugarh, Assam

## Google Maps Link

Use the link from `content.md`.

---

# 11. FAQ Section

## Purpose

Answer common guest questions.

## Content Source

Use FAQs from `content.md`.

## Section Title

`Frequently Asked Questions`

## FAQ Style

Use accordion style if possible.

## FAQ Topics

* Location
* Room options
* Parking
* Wi-Fi
* Balcony
* Power backup
* Loud music rule
* Booking process

---

# 12. Final Booking CTA Section

## Purpose

Push users to book after seeing all details.

## Content Source

Use CTA content from `content.md`.

## Section Title

`Ready to Book Your Stay?`

## Must Include

* Short booking text
* WhatsApp button
* Call button
* Google Maps button

## Design

Use a large premium glass card with deep green/cream background.

---

# 13. Footer

## Purpose

End the website with contact, links, and brand details.

## Content Source

Use footer content from `content.md`.

## Footer Must Include

* Nahor Homestay name
* Short description
* Quick links
* Contact number
* Instagram handle
* Location
* Google Maps link
* Copyright

## Footer Design

* Deep green background
* Soft glass inner cards
* Rounded top corners if suitable
* Clean, premium, simple

---

# Final Section Order

The final website must follow this exact order:

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

---

# Mobile Structure Rules

On mobile:

* Navbar must stay compact
* Hero must be readable
* Buttons should be full width where needed
* Room cards must stack cleanly
* Pricing cards must be easy to read
* Gallery must not become too tall or messy
* No oversized carousel
* No large blank gaps
* Every section should feel premium and compact

---

# Anti-Hallucination Rule

Do not add any section not listed here.

Do not invent:

* Spa
* Pool
* Restaurant
* Breakfast
* Room service
* Fake reviews
* Ratings
* Awards
* Extra room types
* Extra prices
* Extra facilities

If information is missing, write:

`TODO: Add missing detail`
