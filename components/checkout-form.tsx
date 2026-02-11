"use client"

import React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, Suspense } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Lock, CreditCard, Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { getEvent, formatPrice, formatDate, formatTime } from "@/lib/data"

function CheckoutFormInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const eventId = searchParams.get("event")
  const event = eventId ? getEvent(eventId) : null

  if (!event) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
        <h1 className="font-display text-2xl font-bold text-foreground">No event selected</h1>
        <p className="mt-2 text-muted-foreground">Please select tickets from an event page first.</p>
        <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/">Browse Events</Link>
        </Button>
      </div>
    )
  }

  const selectedTickets = event.ticketTypes
    .map((t) => ({
      ...t,
      quantity: Number.parseInt(searchParams.get(t.id) || "0", 10),
    }))
    .filter((t) => t.quantity > 0)

  const subtotal = selectedTickets.reduce((sum, t) => sum + t.price * t.quantity, 0)
  const serviceFee = Math.round(subtotal * 0.05 * 100) / 100
  const total = subtotal + serviceFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      router.push(`/confirmation?event=${event.id}&total=${total}`)
    }, 1500)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
      <Button
        asChild
        variant="ghost"
        className="mb-6 text-muted-foreground hover:text-foreground -ml-3"
      >
        <Link href={`/events/${event.id}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Event
        </Link>
      </Button>

      <h1 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Checkout
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Complete your purchase securely</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-accent-foreground">
                    1
                  </span>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      required
                      className="mt-1.5 bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="mt-1.5 bg-background"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="mt-1.5 bg-background"
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Your tickets will be sent to this email
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="mt-1.5 bg-background"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-xs font-bold text-accent-foreground">
                    2
                  </span>
                  Payment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="cardNumber" className="text-sm font-medium text-foreground">
                      Card Number
                    </Label>
                    <div className="relative mt-1.5">
                      <Input
                        id="cardNumber"
                        placeholder="4242 4242 4242 4242"
                        required
                        className="bg-background pr-10"
                      />
                      <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-sm font-medium text-foreground">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM / YY"
                        required
                        className="mt-1.5 bg-background"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc" className="text-sm font-medium text-foreground">
                        CVC
                      </Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
                        className="mt-1.5 bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName" className="text-sm font-medium text-foreground">
                      Name on Card
                    </Label>
                    <Input
                      id="cardName"
                      placeholder="Jane Doe"
                      required
                      className="mt-1.5 bg-background"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 text-base"
              disabled={isProcessing || selectedTickets.length === 0}
            >
              {isProcessing ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Pay {formatPrice(total)}
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              This is a demo checkout. No real payment will be processed.
            </p>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card className="border-border overflow-hidden">
              <CardHeader className="bg-secondary/50 pb-4">
                <CardTitle className="font-display text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-display font-bold text-foreground">{event.title}</h3>
                <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{formatTime(event.time)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{event.venue}, {event.city}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-col gap-3">
                  {selectedTickets.map((t) => (
                    <div key={t.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {t.name} x{t.quantity}
                      </span>
                      <span className="font-medium text-foreground">
                        {formatPrice(t.price * t.quantity)}
                      </span>
                    </div>
                  ))}

                  <Separator className="my-1" />

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="text-foreground">{formatPrice(serviceFee)}</span>
                  </div>

                  <Separator className="my-1" />

                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-display text-xl font-bold text-foreground">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              <span>Secured with 256-bit SSL encryption</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CheckoutForm() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <div className="h-8 w-8 mx-auto animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      }
    >
      <CheckoutFormInner />
    </Suspense>
  )
}
