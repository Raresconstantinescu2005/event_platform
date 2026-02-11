import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedEvents, formatShortDate, formatTime } from "@/lib/data"

export function HeroSection() {
  const featured = getFeaturedEvents()[0]

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-foreground">
      <Image
        src="/images/hero-concert.jpg"
        alt="Featured event hero background"
        fill
        className="object-cover opacity-50"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-foreground/20" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Featured Event
            </span>
            <span className="text-sm text-background/70">
              {formatShortDate(featured.date)}
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-background md:text-5xl lg:text-7xl">
            <span className="text-balance">{featured.title}</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-background/70 md:text-lg lg:mt-6 lg:max-w-lg">
            {featured.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-background/60 lg:mt-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatShortDate(featured.date)} at {formatTime(featured.time)}
            </span>
            <span className="hidden text-background/30 sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {featured.venue}, {featured.city}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12 text-base"
            >
              <Link href={`/events/${featured.id}`}>
                Get Tickets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/30 bg-transparent text-background hover:bg-background/10 h-12 text-base"
            >
              <Link href="/#events">
                Explore All Events
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-background/10 pt-8 sm:grid-cols-4 lg:mt-16">
          {[
            { label: "Events", value: "200+" },
            { label: "Cities", value: "50+" },
            { label: "Artists", value: "500+" },
            { label: "Happy Fans", value: "1M+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-background lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-background/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
