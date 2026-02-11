import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ConfirmationContent } from "@/components/confirmation-content"

export const metadata: Metadata = {
  title: "Booking Confirmed - Eventix",
  description: "Your tickets have been booked successfully",
}

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ConfirmationContent />
      </main>
      <SiteFooter />
    </div>
  )
}
