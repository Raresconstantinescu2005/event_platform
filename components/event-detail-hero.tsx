import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type EventItem, formatDate, formatTime } from "@/lib/data"

export function EventDetailHero({ event }: { event: EventItem }) {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <Image
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        fill
        className="object-cover opacity-40"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/30" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 lg:px-8 lg:pb-16 lg:pt-28">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge className="bg-accent text-accent-foreground border-0 text-xs font-medium capitalize">
            {event.category}
          </Badge>
          {event.soldOut && (
            <Badge variant="destructive" className="text-xs font-medium">
              Sold Out
            </Badge>
          )}
          {event.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-background/30 bg-transparent text-background/70 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-background md:text-4xl lg:text-6xl text-balance">
          {event.title}
        </h1>
        <p className="mt-2 font-display text-lg text-background/60 md:text-xl">
          {event.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-background/70">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>
              {formatTime(event.time)} - {formatTime(event.endTime)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
