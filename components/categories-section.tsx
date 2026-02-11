"use client"

import React from "react"

import { Music, Film, Presentation, Drama, PartyPopper, Mic, Trophy } from "lucide-react"
import { categories } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  music: Music,
  film: Film,
  presentation: Presentation,
  drama: Drama,
  party: PartyPopper,
  mic: Mic,
  trophy: Trophy,
}

export function CategoriesSection() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
      <div className="mb-10">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Browse by Category
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Find events that match your interests
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon]
          return (
            <button
              key={cat.id}
              type="button"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-accent/10">
                {Icon && <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />}
              </div>
              <span className="text-sm font-medium text-foreground">{cat.label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
