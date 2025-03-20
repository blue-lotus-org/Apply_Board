import type { Metadata } from "next"
import type React from "react"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "JobApps",
  description: "Job applications file management for job seekers.",
    generator: 'lotuschain.org'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'