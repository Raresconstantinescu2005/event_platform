import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EventDetailHero } from "@/components/event-detail-hero"
import { EventDetailContent } from "@/components/event-detail-content"
import { events, getEvent } from "@/lib/data"

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = getEvent(id)
  if (!event) return { title: "Event Not Found" }
  return {
    title: `${event.title} - Eventix`,
    description: event.description,
  }
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = getEvent(id)
  if (!event) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <EventDetailHero event={event} />
        <EventDetailContent event={event} />
      </main>
      <SiteFooter />
    </div>
  )
}
