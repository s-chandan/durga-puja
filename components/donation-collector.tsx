"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Download,
  Trash2,
  Edit2,
  Save,
  PlusCircle,
  ArrowLeft,
  MessageCircle,
  ListIcon,
  UserPlus,
  Search,
} from "lucide-react"

type Entry = {
  id: string
  name: string
  address: string
  mobile: string
  pledged: number
  paid: number
  due: number
  createdAt: string
}

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  isAdmin: boolean
  samitiName?: string
}

const STORAGE_KEY = "donation-entries-v1"

export default function DonationCollector({ open, onOpenChange, isAdmin, samitiName = "माँ काली पूजा समिति" }: Props) {
  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)

  // Tabs: "add" | "list"
  const [tab, setTab] = useState<"add" | "list">("add")

  // Form state
  const [editingId, setEditingId] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [mobile, setMobile] = useState("")
  const [pledged, setPledged] = useState<number | "">("")
  const [paid, setPaid] = useState<number | "">("")
  const [justSaved, setJustSaved] = useState(false)

  // Search
  const [search, setSearch] = useState("")

  const due = useMemo(() => {
    const p = Number(pledged || 0)
    const pa = Number(paid || 0)
    return Math.max(p - pa, 0)
  }, [pledged, paid])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setEntries(JSON.parse(raw))
    } catch (e) {
      console.error("Failed to load entries", e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    }
  }, [entries, loading])

  useEffect(() => {
    if (!open) {
      // reset UI state when modal closes
      setTab("add")
      setJustSaved(false)
      resetForm()
    }
  }, [open])

  const resetForm = () => {
    setEditingId(null)
    setName("")
    setAddress("")
    setMobile("")
    setPledged("")
    setPaid("")
  }

  const composeWhatsAppMessage = (toName: string, paidAmt: number, dueAmt: number) => {
    const lines = [
      `Namaste ${toName} ji,`,
      `${samitiName} ki taraf se aapka dhanvaad.`,
      `Aapne ₹${paidAmt.toLocaleString("en-IN")} jama kiya hai.`,
      dueAmt > 0 ? `Baki rakam: ₹${dueAmt.toLocaleString("en-IN")}.` : `Koi baki rashi nahi hai.`,
      `- ${samitiName}`,
    ]
    return lines.join("\n")
  }

  const sendWhatsApp = (mobileNum: string, personName: string, paidAmt: number, dueAmt: number) => {
    const cleaned = (mobileNum || "").replace(/[^\d]/g, "")
    const to = cleaned.startsWith("91") ? cleaned : `91${cleaned}`
    const text = composeWhatsAppMessage(personName, paidAmt, dueAmt)
    const url = `https://wa.me/${to}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const addOrUpdate = () => {
    if (!name || !mobile) {
      alert("कृपया नाम और मोबाइल नंबर भरें")
      return
    }

    const item: Entry = {
      id: editingId ?? crypto.randomUUID(),
      name,
      address,
      mobile,
      pledged: Number(pledged || 0),
      paid: Number(paid || 0),
      due: Number(due),
      createdAt: new Date().toISOString(),
    }

    setEntries((prev) => {
      if (editingId) {
        return prev.map((e) => (e.id === editingId ? item : e))
      }
      return [item, ...prev]
    })

    // No WhatsApp popup here; you can share from the list later
    setJustSaved(true)
    setTimeout(() => setJustSaved(false), 1500)

    resetForm()
    // Switch to list so you can see/share immediately after adding (better on mobile)
    setTab("list")
  }

  const onEdit = (id: string) => {
    alert(id)
    const e = entries.find((x) => x.id === id)
    if (!e) return
    setEditingId(e.id)
    setName(e.name)
    setAddress(e.address)
    setMobile(e.mobile)
    setPledged(e.pledged)
    setPaid(e.paid)
    setTab("add")
  }

  const onDelete = (id: string) => {
    if (!confirm("क्या आप इस रिकॉर्ड को हटाना चाहते हैं?")) return
    setEntries((prev) => prev.filter((e) => e.id !== id))
    if (editingId === id) resetForm()
  }

  const clearAll = () => {
    if (!confirm("सभी रिकॉर्ड्स हट जाएँगे. जारी रखें?")) return
    setEntries([])
    resetForm()
  }

  const totals = useMemo(() => {
    const list = entries
    const people = list.length
    const totalPledged = list.reduce((sum, e) => sum + (e.pledged || 0), 0)
    const totalPaid = list.reduce((sum, e) => sum + (e.paid || 0), 0)
    const totalDue = list.reduce((sum, e) => sum + (e.due || 0), 0)
    return { people, totalPledged, totalPaid, totalDue }
  }, [entries])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return entries
    return entries.filter((e) => e.name.toLowerCase().includes(q))
  }, [entries, search])

  const exportCSV = () => {
    const header = ["ID", "Name", "Address", "Mobile", "Pledged", "Paid", "Due", "Created At"]
    const rows = entries.map((e) => [
      e.id,
      e.name.replaceAll(",", " "),
      e.address.replaceAll(",", " "),
      e.mobile,
      e.pledged.toString(),
      e.paid.toString(),
      e.due.toString(),
      new Date(e.createdAt).toLocaleString(),
    ])
    const csv = [header, ...rows].map((r) => r.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "donation-entries.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) resetForm()
        onOpenChange(v)
      }}
    >
      {/* Full-screen on mobile */}
      <DialogContent className="h-[100dvh] sm:h-auto max-w-6xl w-[100vw] sm:w-[95vw] p-0 overflow-hidden">
        <DialogHeader className="px-3 sm:px-6 pt-3 sm:pt-6">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent"
              onClick={() => onOpenChange(false)}
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              पीछे
            </Button>
            <DialogTitle className="text-lg sm:text-2xl font-bold">दान/चंदा कलेक्टर</DialogTitle>
          </div>
        </DialogHeader>

        {!isAdmin ? (
          <div className="px-6 pb-6">
            <div className="rounded-lg border bg-white p-6 text-center">
              <p className="text-red-600 font-semibold">अनुमति नहीं</p>
              <p className="text-sm text-gray-600 mt-2">कृपया एडमिन के रूप में लॉगिन करें।</p>
              <div className="mt-4">
                <Button onClick={() => onOpenChange(false)}>बंद करें</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100dvh-88px)] sm:h-auto">
            {/* Stats */}
            <div className="px-3 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="rounded-lg border bg-white p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-gray-500">कुल व्यक्ति</p>
                  <p className="text-xl sm:text-2xl font-bold">{totals.people}</p>
                </div>
                <div className="rounded-lg border bg-white p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-gray-500">कुल निर्धारित राशि</p>
                  <p className="text-xl sm:text-2xl font-bold">₹ {totals.totalPledged.toLocaleString("en-IN")}</p>
                </div>
                <div className="rounded-lg border bg-white p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-gray-500">कुल जमा</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-700">
                    ₹ {totals.totalPaid.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-gray-500">कुल बकाया</p>
                  <p className="text-xl sm:text-2xl font-bold text-red-600">
                    ₹ {totals.totalDue.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="px-3 sm:px-6 mb-2 sm:mb-3">
              <div className="inline-flex rounded-md border overflow-hidden">
                <button
                  className={`px-3 sm:px-4 py-2 text-sm flex items-center gap-2 ${
                    tab === "add" ? "bg-red-600 text-white" : "bg-white text-gray-700"
                  }`}
                  onClick={() => setTab("add")}
                >
                  <UserPlus className="w-4 h-4" />
                  जोड़ें
                </button>
                <button
                  className={`px-3 sm:px-4 py-2 text-sm flex items-center gap-2 border-l ${
                    tab === "list" ? "bg-red-600 text-white" : "bg-white text-gray-700"
                  }`}
                  onClick={() => setTab("list")}
                >
                  <ListIcon className="w-4 h-4" />
                  सूची
                </button>
              </div>
            </div>

            {/* Content scroll area */}
            <div className="px-3 sm:px-6 pb-3 sm:pb-6 overflow-y-auto flex-1">
              {tab === "add" ? (
                <div className="rounded-lg border bg-white p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    {editingId ? "रिकॉर्ड संपादित करें" : "नया रिकॉर्ड जोड़ें"}
                  </h3>

                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div className="grid gap-1.5 sm:gap-2">
                      <Label htmlFor="name">नाम</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="पूरा नाम" />
                    </div>

                    <div className="grid gap-1.5 sm:gap-2">
                      <Label htmlFor="address">पता</Label>
                      <Input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="पूरा पता"
                      />
                    </div>

                    <div className="grid gap-1.5 sm:gap-2">
                      <Label htmlFor="mobile">मोबाइल नंबर</Label>
                      <Input
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value.replace(/[^\d+]/g, ""))}
                        placeholder="+91XXXXXXXXXX"
                        inputMode="tel"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="pledged">निर्धारित</Label>
                        <Input
                          id="pledged"
                          type="number"
                          value={pledged}
                          onChange={(e) => setPledged(e.target.value === "" ? "" : Number(e.target.value))}
                          placeholder="₹"
                          min={0}
                        />
                      </div>
                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="paid">जमा</Label>
                        <Input
                          id="paid"
                          type="number"
                          value={paid}
                          onChange={(e) => setPaid(e.target.value === "" ? "" : Number(e.target.value))}
                          placeholder="₹"
                          min={0}
                        />
                      </div>
                      <div className="grid gap-1.5 sm:gap-2">
                        <Label htmlFor="due">बकाया (Auto)</Label>
                        <Input id="due" value={due} readOnly />
                      </div>
                    </div>
                  </div>

                  {/* Submit bar */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-2">
                    <Button onClick={addOrUpdate} className="gap-2 flex-1">
                      {editingId ? (
                        <>
                          <Save className="w-4 h-4" /> सेव करें
                        </>
                      ) : (
                        <>
                          <PlusCircle className="w-4 h-4" /> सबमिट
                        </>
                      )}
                    </Button>
                    {editingId ? (
                      <Button variant="outline" className="bg-transparent" onClick={resetForm}>
                        रद्द करें
                      </Button>
                    ) : null}
                  </div>

                  {justSaved && <p className="text-xs text-green-700 mt-2">सेव हो गया। आप सूची से शेयर कर सकते हैं।</p>}
                </div>
              ) : (
                <div className="rounded-lg border bg-white p-3 sm:p-4">
                  {/* Search + actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="नाम से खोजें"
                        className="pl-8"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="bg-transparent" onClick={exportCSV}>
                        <Download className="w-4 h-4 mr-2" />
                        CSV
                      </Button>
                      <Button variant="destructive" onClick={clearAll}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        सभी हटाएँ
                      </Button>
                    </div>
                  </div>

                  {/* Mobile: Card list; Desktop: Table */}
                  <div className="md:hidden space-y-3">
                    {filtered.length === 0 ? (
                      <p className="text-center text-sm text-gray-500 py-6">कोई रिकॉर्ड नहीं मिला।</p>
                    ) : (
                      filtered.map((e) => (
                        <div key={e.id} className="border rounded-md p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="font-semibold">{e.name}</div>
                              <div className="text-xs text-gray-500">{e.address}</div>
                              <div className="text-xs text-gray-600 mt-1">{e.mobile}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-500">तारीख</div>
                              <div className="text-xs">{new Date(e.createdAt).toLocaleDateString()}</div>
                            </div>
                          </div>
                          <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-gray-50 rounded p-2">
                              <div className="text-gray-500">निर्धारित</div>
                              <div className="font-semibold">₹ {e.pledged.toLocaleString("en-IN")}</div>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <div className="text-gray-500">जमा</div>
                              <div className="font-semibold text-green-700">₹ {e.paid.toLocaleString("en-IN")}</div>
                            </div>
                            <div className="bg-gray-50 rounded p-2">
                              <div className="text-gray-500">बकाया</div>
                              <div className="font-semibold text-red-600">₹ {e.due.toLocaleString("en-IN")}</div>
                            </div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-transparent h-8"
                              onClick={() => onEdit(e.id)}
                            >
                              <Edit2 className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive" className="h-8" onClick={() => onDelete(e.id)}>
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                            <Button
                              size="sm"
                              className="h-8"
                              onClick={() => sendWhatsApp(e.mobile, e.name, e.paid, e.due)}
                            >
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="hidden md:block overflow-auto max-h-[50vh]">
                    <table className="w-full text-sm">
                      <thead className="sticky top-0 bg-gray-50">
                        <tr className="[&>th]:px-3 [&>th]:py-2 text-left">
                          <th>नाम</th>
                          <th>मोबाइल</th>
                          <th>निर्धारित</th>
                          <th>जमा</th>
                          <th>बकाया</th>
                          <th>तारीख</th>
                          <th>क्रिया</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.length === 0 ? (
                          <tr>
                            <td className="px-3 py-6 text-center text-gray-500" colSpan={7}>
                              कोई रिकॉर्ड नहीं मिला।
                            </td>
                          </tr>
                        ) : (
                          filtered.map((e) => (
                            <tr key={e.id} className="border-t">
                              <td className="px-3 py-2">
                                <div className="font-medium">{e.name}</div>
                                <div className="text-xs text-gray-500">{e.address}</div>
                              </td>
                              <td className="px-3 py-2">{e.mobile}</td>
                              <td className="px-3 py-2">₹ {e.pledged.toLocaleString("en-IN")}</td>
                              <td className="px-3 py-2 text-green-700">₹ {e.paid.toLocaleString("en-IN")}</td>
                              <td className="px-3 py-2 text-red-600">₹ {e.due.toLocaleString("en-IN")}</td>
                              <td className="px-3 py-2">{new Date(e.createdAt).toLocaleDateString()}</td>
                              <td className="px-3 py-2">
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-8 px-2 bg-transparent"
                                    onClick={() => onEdit(e.id)}
                                    aria-label="Edit"
                                  >
                                    <Edit2 className="w-4 h-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    className="h-8 px-2"
                                    onClick={() => onDelete(e.id)}
                                    aria-label="Delete"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="h-8 px-2 gap-1.5"
                                    onClick={() => sendWhatsApp(e.mobile, e.name, e.paid, e.due)}
                                    aria-label="Send WhatsApp"
                                  >
                                    <MessageCircle className="w-4 h-4" /> WA
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
