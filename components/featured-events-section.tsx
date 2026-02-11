import { getFeaturedEvents, events } from "@/lib/data"
import { EventCard } from "@/components/event-card"

export function FeaturedEventsSection() {
  const featured = getFeaturedEvents()
  const upcoming = events.filter((e) => !e.featured).slice(0, 4)

  return (
    <section id="events" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="mb-10">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Featured Events
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Hand-picked experiences you will not want to miss
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {featured.slice(0, 1).map((event) => (
          <EventCard key={event.id} event={event} featured />
        ))}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(1).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            More Events
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Explore all upcoming events in your area
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
