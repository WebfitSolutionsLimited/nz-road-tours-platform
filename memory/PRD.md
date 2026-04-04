# NZ Road Tours Website - PRD

## Problem Statement
Build a website for NZ Road Tours - an Auckland-based private transport and tour service operating across New Zealand. Services include airport transfers, private chauffeur services, long-distance road trips, and customised private tours.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI (port 3000)
- **Backend**: FastAPI + MongoDB (port 8001, /api prefix)
- **Database**: MongoDB (enquiries collection)

## User Personas
- Tourists visiting New Zealand
- Indian and international travellers
- Families and small groups

## Core Requirements
- Premium, trust-building marketing website
- Enquiry/booking form with pickup/drop, date, service type, contact
- WhatsApp/phone fallback contact options
- Responsive design across all devices

## What's Been Implemented (Feb 2026)
- **Home Page**: Hero section, trust stats, services overview, destinations bento grid, why choose us, testimonials marquee, CTA
- **Services Page**: 4 detailed service sections (Airport Transfers, Day Tours, Multi-Day Tours, Chauffeur)
- **Tours Page**: 6 tour cards with imagery, highlights, pricing
- **About Page**: Company story, values, driver/guide section
- **Contact Page**: Full booking/enquiry form + contact info sidebar
- **Navigation**: Sticky glass navbar with transparent-to-glass effect on home page, responsive mobile menu
- **Footer**: Dark themed footer with links, phone, WhatsApp, email
- **Backend API**: POST/GET /api/enquiries for form submissions
- **Design System**: Outfit + DM Sans fonts, earthy palette (#F4F2EE, #2D5A43, #D97746)

## Prioritized Backlog
- P0: (All done - core site complete)
- P1: Admin dashboard for managing enquiries, SEO meta tags
- P2: Google Maps integration, Fleet/Vehicles page, multi-language support
- P3: Live chat widget, blog section, pricing calculator

## Next Tasks
1. Add SEO meta tags and Open Graph data for social sharing
2. Build admin panel for enquiry management
3. Add Fleet/Vehicles showcase page
4. Google Maps embed on Contact page
5. Email notification on new enquiry submission
