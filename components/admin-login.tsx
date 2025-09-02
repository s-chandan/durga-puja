"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type AdminLoginProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess: (email: string) => void
  adminEmail: string
  adminPasscode: string
}

export default function AdminLogin({ open, onOpenChange, onSuccess, adminEmail, adminPasscode }: AdminLoginProps) {
  const [email, setEmail] = useState("")
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!open) {
      setEmail("")
      setPasscode("")
      setError(null)
    }
  }, [open])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim().toLowerCase() === adminEmail.toLowerCase() && passcode === adminPasscode) {
      localStorage.setItem("admin-session", JSON.stringify({ email, time: Date.now() }))
      onSuccess(email)
      onOpenChange(false)
    } else {
      setError("गलत ईमेल या पासवर्ड")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">एडमिन लॉगिन</DialogTitle>
          <DialogDescription>कृपया एडमिन के ईमेल और पासवर्ड से लॉगिन करें</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="admin-email">ईमेल</Label>
            <Input
              id="admin-email"
              type="email"
              placeholder="आपका एडमिन ईमेल"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="admin-pass">पासवर्ड</Label>
            <Input
              id="admin-pass"
              type="password"
              placeholder="पासवर्ड"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" className="bg-transparent" onClick={() => onOpenChange(false)}>
              रद्द करें
            </Button>
            <Button type="submit">लॉगिन</Button>
          </div>
          <p className="text-xs text-gray-500">
            नोट: यह साधारण क्लाइंट-साइड लॉगिन है. सुरक्षित सर्वर आधारित लॉगिन चाहिए तो मैं Supabase/NextAuth जोड़ सकता हूँ।
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
