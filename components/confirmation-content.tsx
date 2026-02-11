"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { CheckCircle2, Calendar, Clock, MapPin, Download, Share2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getEvent, formatPrice, formatDate, formatTime } from "@/lib/data"

function ConfirmationInner() {
  const searchParams = useSearchParams()
  const eventId = searchParams.get("event")
  const total = searchParams.get("total")
  const event = eventId ? getEvent(eventId) : null

  if (!event) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
        <h1 className="font-display text-2xl font-bold text-foreground">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">We could not find your booking details.</p>
        <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/">Browse Events</Link>
        </Button>
      </div>
    )
  }

  const confirmationNumber = `EVX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-20">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-10 w-10 text-accent" />
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Booking Confirmed
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Your tickets have been booked successfully. A confirmation email has been sent to your inbox.
        </p>
      </div>

      <Card className="mt-10 border-border overflow-hidden">
        <div className="bg-secondary/50 px-6 py-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Confirmation Number
            </span>
            <span className="font-mono text-sm font-bold text-foreground">
              {confirmationNumber}
            </span>
          </div>
        </div>
        <CardContent className="pt-6">
          <h2 className="font-display text-xl font-bold text-foreground">{event.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{event.subtitle}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-4 w-4 text-accent" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Date
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {formatDate(event.date)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-accent" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Time
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {formatTime(event.time)} - {formatTime(event.endTime)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Venue
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {event.venue}
                </p>
                <p className="text-xs text-muted-foreground">{event.city}</p>
              </div>
            </div>
          </div>

          {total && (
            <>
              <Separator className="my-6" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Total Paid</span>
                <span className="font-display text-2xl font-bold text-foreground">
                  {formatPrice(Number.parseFloat(total))}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          variant="outline"
          className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary"
        >
          <Download className="h-4 w-4" />
          Download Tickets
        </Button>
        <Button
          variant="outline"
          className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary"
        >
          <Share2 className="h-4 w-4" />
          Share Event
        </Button>
      </div>

      <Separator className="my-10" />

      <div className="text-center">
        <h3 className="font-display text-lg font-bold text-foreground">
          Looking for more events?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Discover more amazing experiences happening near you
        </p>
        <Button
          asChild
          className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2"
        >
          <Link href="/">
            Explore Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function ConfirmationContent() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-20 text-center lg:px-8">
          <div className="h-8 w-8 mx-auto animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      }
    >
      <ConfirmationInner />
    </Suspense>
  )
}
