import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { type EventItem, formatPrice, formatShortDate, formatTime } from "@/lib/data"
import { cn } from "@/lib/utils"

interface EventCardProps {
  event: EventItem
  featured?: boolean
}

export function EventCard({ event, featured = false }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`} className="group block">
      <article
        className={cn(
          "overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-lg",
          featured && "lg:grid lg:grid-cols-2"
        )}
      >
        <div className={cn("relative overflow-hidden", featured ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]")}>
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge className="bg-accent text-accent-foreground border-0 text-xs font-medium capitalize">
              {event.category}
            </Badge>
            {event.soldOut && (
              <Badge variant="destructive" className="text-xs font-medium">
                Sold Out
              </Badge>
            )}
          </div>
          {event.originalPrice && (
            <div className="absolute right-3 top-3">
              <Badge className="bg-foreground text-background border-0 text-xs font-semibold">
                Save {Math.round(((event.originalPrice - event.price) / event.originalPrice) * 100)}%
              </Badge>
            </div>
          )}
        </div>

        <div className={cn("flex flex-col gap-3 p-5", featured && "justify-center lg:p-8")}>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatShortDate(event.date)}
            </span>
            <span className="text-border">|</span>
            <span>{formatTime(event.time)}</span>
          </div>

          <h3
            className={cn(
              "font-display font-bold leading-tight text-foreground",
              featured ? "text-2xl lg:text-3xl" : "text-lg"
            )}
          >
            {event.title}
          </h3>

          {featured && (
            <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {event.description}
            </p>
          )}

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{event.venue}, {event.city}</span>
          </div>

          <div className="mt-auto flex items-center justify-between pt-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-bold text-foreground">
                {formatPrice(event.price)}
              </span>
              {event.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(event.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
              {event.soldOut ? "View Details" : "Get Tickets"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
