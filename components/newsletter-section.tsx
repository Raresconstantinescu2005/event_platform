"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-background md:text-4xl text-balance">
            Never miss an event
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/60">
            Subscribe to get notified about upcoming events, exclusive presales, and special offers delivered straight to your inbox.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 border-background/20 bg-background/10 text-background placeholder:text-background/40 focus-visible:ring-accent sm:w-80"
              required
            />
            <Button
              type="submit"
              className="h-12 bg-accent px-6 text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-4 text-xs text-background/40">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
