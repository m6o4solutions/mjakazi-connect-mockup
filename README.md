# Mjakazi Connect

A subscription-based caregiver discovery platform connecting families with domestic
caregivers through curated profiles, controlled access, and administrative oversight.

---

## Overview

Mjakazi Connect operates as a controlled, trustworthy environment for matching families
with qualified domestic caregivers. The platform balances public visibility of caregiver
profiles with subscription-gated contact information, ensuring quality through active
administrative moderation.

Built on Next.js with TypeScript, the platform prioritizes reliability, structured user
experiences, and trust over experimentation.

---

## Purpose

The goals of this project are to:

- Enable families to discover and evaluate caregivers efficiently
- Provide caregivers with professional visibility and job opportunities
- Maintain platform quality through active moderation and controlled access
- Generate sustainable revenue through subscription-based contact unlocking and job
  postings

---

## Features

- **Curated Caregiver Directory**: Browse profiles with skills, experience, and
  availability
- **Subscription-Based Access**: Unlock contact details through paid subscriptions
- **Job Posting Capabilities**: Families can post positions directly to caregivers
- **Administrative Moderation**: Quality control through profile approval and oversight
- **Role-Based Access Control**: Distinct experiences for families, caregivers, and
  administrators
- **Secure Authentication**: Clerk-based user management with role enforcement

Add or remove features as the project evolves.

---

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables (see `.env.example`)
4. Set up MongoDB and Postgres connections
5. Run development server: `npm run dev`
6. Access the application at `http://localhost:3000`

Refer to deployment documentation for production setup on Contabo VPS infrastructure.

---

## Usage

This platform serves:

- **Families**: Search caregivers, unlock contacts, post job opportunities
- **Caregivers**: Create profiles, showcase skills, receive job notifications
- **Administrators**: Moderate profiles, manage subscriptions, oversee platform quality

---

## Customization

Core areas for configuration:

- Subscription pricing models (PayPal/Stripe integration)
- Caregiver profile fields and validation rules
- Search and filtering logic
- Email templates (Resend integration)
- Role permissions and access tiers

This platform prioritizes controlled functionality over open-ended customization.

---

## Contributing

If this project accepts contributions:

- Maintain the SaaS/Tech positioning and trust-focused UX
- Keep changes aligned with controlled marketplace principles
- Test thoroughly against role-based access requirements
- Document any changes to subscription or moderation logic

All contributions must preserve platform integrity and administrative control.

---

## License

Proprietary / All rights reserved

---

## Notes

This platform operates as a web application with active system-level enforcement, not a
static directory. Success is measured by paying families unlocking contacts and posting
jobs, not by profile volume or casual browsing.

The architecture reflects a hybrid approach: MongoDB for CMS content, Postgres with
pgVector for advanced search, Clerk for authentication, and Docker-based deployment on
self-hosted infrastructure.

Expect gradual feature enhancement focused on trust, clarity, and measurable value
creation.
