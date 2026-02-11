"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Minus, Plus, Users, Building2, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { type EventItem, type TicketType, formatPrice } from "@/lib/data"
import { cn } from "@/lib/utils"

function TicketSelector({
  ticket,
  quantity,
  onQuantityChange,
  disabled,
}: {
  ticket: TicketType
  quantity: number
  onQuantityChange: (qty: number) => void
  disabled: boolean
}) {
  const isAvailable = ticket.available > 0 && !disabled

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-border p-5 transition-colors sm:flex-row sm:items-center sm:justify-between",
        quantity > 0 && "border-accent/50 bg-accent/5"
      )}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-foreground">{ticket.name}</h4>
          {!isAvailable && (
            <Badge variant="secondary" className="text-xs">
              Sold Out
            </Badge>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{ticket.description}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-foreground">
            {formatPrice(ticket.price)}
          </span>
          {ticket.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(ticket.originalPrice)}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 shrink-0 bg-transparent"
          disabled={quantity <= 0}
          onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
          aria-label={`Decrease ${ticket.name} quantity`}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-display font-semibold text-foreground" aria-live="polite">
          {quantity}
        </span>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 shrink-0 bg-transparent"
          disabled={!isAvailable || quantity >= ticket.maxPerOrder}
          onClick={() => onQuantityChange(Math.min(ticket.maxPerOrder, quantity + 1))}
          aria-label={`Increase ${ticket.name} quantity`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export function EventDetailContent({ event }: { event: EventItem }) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(event.ticketTypes.map((t) => [t.id, 0]))
  )

  const totalAmount = event.ticketTypes.reduce(
    (sum, t) => sum + t.price * (quantities[t.id] || 0),
    0
  )
  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0)

  const handleQuantityChange = (ticketId: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [ticketId]: qty }))
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
              About This Event
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {event.longDescription}
            </p>
          </div>

          <Separator className="my-8" />

          <div>
            <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
              Select Tickets
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose your ticket type and quantity below
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {event.ticketTypes.map((ticket) => (
                <TicketSelector
                  key={ticket.id}
                  ticket={ticket}
                  quantity={quantities[ticket.id] || 0}
                  onQuantityChange={(qty) => handleQuantityChange(ticket.id, qty)}
                  disabled={event.soldOut}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="overflow-hidden border-border">
              <CardHeader className="bg-secondary/50 pb-4">
                <CardTitle className="font-display text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {totalTickets === 0 ? (
                  <div className="flex flex-col items-center gap-3 py-6 text-center">
                    <Info className="h-8 w-8 text-muted-foreground/40" />
                    <p className="text-sm text-muted-foreground">
                      Select tickets to see your order summary
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {event.ticketTypes
                      .filter((t) => (quantities[t.id] || 0) > 0)
                      .map((t) => (
                        <div key={t.id} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {t.name} x{quantities[t.id]}
                          </span>
                          <span className="font-medium text-foreground">
                            {formatPrice(t.price * quantities[t.id])}
                          </span>
                        </div>
                      ))}
                    <Separator className="my-2" />
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="font-display text-xl font-bold text-foreground">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>
                  </div>
                )}

                <Button
                  asChild={totalTickets > 0}
                  className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12"
                  disabled={totalTickets === 0}
                >
                  {totalTickets > 0 ? (
                    <Link
                      href={`/checkout?event=${event.id}&${event.ticketTypes
                        .filter((t) => (quantities[t.id] || 0) > 0)
                        .map((t) => `${t.id}=${quantities[t.id]}`)
                        .join("&")}`}
                    >
                      Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <>
                      Select Tickets
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-4 border-border">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Event Details</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Organizer</p>
                      <p className="text-muted-foreground">{event.organizer}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Capacity</p>
                      <p className="text-muted-foreground">
                        {event.capacity.toLocaleString()} attendees
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
