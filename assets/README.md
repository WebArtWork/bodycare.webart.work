# BodyCare

BodyCare is a body-care services platform built around one core idea:
**every client should carry their own digital passport** — a verifiable
history of treatments, sessions, and results, not just a before photo and a
price. Clients get real transparency about who worked on them and what was
done; specialists and venues get a place to show that their work actually
happened and actually delivered results.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet (see [ROADMAP.md](ROADMAP.md) for what's in and
out of scope for this phase).

## The core entities

- **User** — a person on the platform. A user acting as a client is the
  subject of their own record history (their "digital passport"); a user
  acting as a specialist performs the work behind those records.
- **Record** — a single history entry for a client: a haircut, a manicure,
  a workout session, a massage, a skin treatment, a measurement check-in.
  Each record captures what was done, by whom, when, at what cost, and
  (where relevant) before/after attachments. This is the "digital
  passport" itself — the differentiator of the platform.
- **Service** — a bookable offer tied to a specialist and a venue (e.g.
  "Deep tissue massage, 60 min"), with its own price, duration, and
  category (hair, nails, fitness, skin, massage, etc.).
- **Venue** — the business a specialist works at or through (a gym, salon,
  spa, barbershop).
- **Specialist** — the individual professional (trainer, stylist, nail
  master, massage therapist) who performs the work behind a record and
  offers services.
- **Request** — a client's stated need (e.g. "looking for a personal
  trainer", "want a gel manicure"), for matching against services.
- **Comment** — reviews/feedback on a client, a service, a venue, or a
  specialist.
- **Brand** — a supplier of cosmetics, beauty products, or professional
  supplies that cooperates with specialists and venues already on the
  platform.

## How people use it

- **Feed** — a swipeable stream of services; favourite what's interesting,
  ignore what isn't.
- **Explore** — search and filter services by category, specialist, price,
  and location.
- **Map** — find venues by location, with a summary panel per pin.
- **Editor** — try out the data-entry forms for any entity.
- Every entity also has its own dedicated page showing its full profile,
  history, and related services/comments.
- A client's profile doubles as their digital passport: the full,
  chronological record history of everything done to/for their body across
  every venue and specialist they've used.

## Who's behind a result

Records are never anonymous: each one is linked to the specialist who did
the work and the venue they did it at, plus (where applicable) the service
it was booked under — so a client can see who's responsible for a result
and why, not just admire a before/after photo.

## Status

See [ROADMAP.md](ROADMAP.md) for exactly what's built, what's explicitly
out of scope for this phase (no real backend, no persistence, no
verification/moderation/monetization yet), and why.

For contributor/developer setup and coding conventions, see
[AGENTS.md](AGENTS.md).
