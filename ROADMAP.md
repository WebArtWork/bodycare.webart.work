# BodyCare Roadmap

Status: APPROVED. Scope: static investor-facing demo only. Nothing beyond
this is planned yet.

Current repo state: fresh `ngx-prime-default` Angular template. Auth /
dashboard / profile / settings pages from the template are used as-is —
no changes there.

Goal: make the product vision navigable and demoable for investors. No
backend, no persistence beyond local/static state — but content must be
real and realistic, not dummy/lorem-ipsum. All static content lives as JSON
files under `src/data/` (following the existing `src/data/company` pattern),
one dataset per entity type, loaded by services/components — not hardcoded
in components.

## Decide: which of these go in the demo?

### Entities (static JSON data, realistic content)

- [x] `user` — client, specialist, and venue-rep roles on one entity
      (folds the old real-estate `property`/subject role into the client)
- [x] `service` — bookable offers (haircut, manicure, personal training,
      massage, etc.) tied to a specialist and a venue
- [x] `record` — client history entries (haircut, coloring, workout
      session, massage, skin treatment, measurement check-in, etc.), with
      before/after/progress photo attachments — this is the "digital
      passport" differentiator
- [x] `venue` — a few venues (gym, salon, spa, barbershop, studio)
- [x] `specialist` — a few specialists (trainer, stylist, nail master,
      massage therapist), linked to venues
- [x] `request` — a few client requests (book a service, find a
      specialist, consultation, membership)
- [x] `comment` — comments/reviews on a few entities

### Components per entity (`*-view`, `*-short`, `*-icon`, `*-form`)

- [x] user: view, short, icon, form
- [x] service: view, short, icon, form
- [x] record: view, short, form (no icon per README)
- [x] venue: view, short, icon, form
- [x] specialist: view, short, icon, form
- [x] request: view, short, icon, form
- [x] comment: comments-view, comment-short, comment-form

### Pages

- [x] Feed — scrollable feed, swipe left/right (favourite/ignore)
      against local static state
- [x] Explore — search/filter UI against the static dataset
- [x] Map — pins for venues, static coordinates in fixtures
- [x] Editor — forms render and validate, no persistence
- [x] service — dedicated detail page
- [x] records — dedicated detail page
- [x] venue — dedicated detail page
- [x] specialist — dedicated detail page
- [x] client — dedicated detail page (public profile of a `user`, replaces
      the generic user-facing Entity view; also covers the former
      `property` subject role, now folded into `user`)

Removed: Sign, Workspace (already covered by existing template pages),
Investment (not needed yet). Workspace's role is replaced by Explore.
Entity (generic) is replaced by one dedicated page per entity type.
Also removed: `property`, `complex`, and `developer` as standalone
entities/pages — real estate concepts with no equivalent in the body-care
model. `agency`/`agent`/`listing` were renamed to `venue`/`specialist`/
`service`.

Note: `request` and `comment` entities have no dedicated page — they only
appear embedded inside other pages/entities (e.g. comments on an entity
page, requests inside Feed/Explore). `user`'s dedicated page is named
`client` to avoid confusion with the auth/account user.

### Explicitly out of scope for this demo

- Real backend/database/API
- Real CRUD / persistence
- Business-profile claiming
- Enforced visibility/permission logic (can show badges without enforcing)
- Verification, moderation, monetization
