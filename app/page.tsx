"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Camera, MapPin, Phone, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import DonationCollector from "@/components/donation-collector"
import AdminLogin from "@/components/admin-login"

// Admin credentials
const ADMIN_EMAIL = "chandanreally07@gmail.com"
const ADMIN_PASSCODE = "Chandan#1437"

export default function DurgaPujaWebsite() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAllEvents, setShowAllEvents] = useState(false)

  // Admin + Collector
  const [collectorOpen, setCollectorOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("admin-session")
      if (raw) setIsAdmin(true)
    } catch {}
  }, [])

 const galleryImages = [
    { src: "durga-mata-0.webp", title: "माँ दुर्गा की भव्य मूर्ति", year: "2023" },
    { src: "durga-mata-1.jpg", title: "कलश स्थापना समारोह", year: "2023" },
    { src: "durga-mata-2.jpg", title: "संध्या आरती", year: "2023" },
    { src: "durga-mata-3.jpg", title: "सांस्कृतिक कार्यक्रम", year: "2023" },
    { src: "durga-mata-4.jpg", title: "प्रसाद वितरण", year: "2023" },
    { src: "durga-mata-5.jpg", title: "विसर्जन यात्रा", year: "2023" },
    { src: "durga-mata-6.jpg", title: "भक्तों की भीड़", year: "2022" },
    { src: "durga-mata-7.jpg", title: "सुसज्जित पंडाल", year: "2022" },
    { src: "8.jpg", title: "पारंपरिक नृत्य", year: "2022" },
    { src: "0.jpg", title: "दीप प्रज्वलन", year: "2022" },
    { src: "1.jpg", title: "भजन संध्या", year: "2021" },
    { src: "2.jpg", title: "अन्नदान सेवा", year: "2021" },
    { src: "3.jpg", title: "बच्चों का कार्यक्रम", year: "2021" },
    { src: "4.jpg", title: "महिला संगीत समूह", year: "2021" },
    { src: "5.jpg", title: "पूजा करते पुजारी जी", year: "2020" },
    { src: "6.jpg", title: "मंदिर की सजावट", year: "2020" },
  ]


  const openWhatsApp = (number: string, message: string) => {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const copyUPI = () => {
    navigator.clipboard.writeText("8825288228@kotak")
    alert("UPI ID copied! 📋")
  }

  const nextImage = () => setSelectedImage((p) => (p + 1) % galleryImages.length)
  const prevImage = () => setSelectedImage((p) => (p - 1 + galleryImages.length) % galleryImages.length)

  // IMPORTANT: Make donation button open login/collector, not scroll
  const handleDonationClick = () => {
    if (isAdmin) setCollectorOpen(true)
    else setLoginOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Login Modal */}
      <AdminLogin
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onSuccess={() => {
          setIsAdmin(true)
          setCollectorOpen(true)
        }}
        adminEmail={ADMIN_EMAIL}
        adminPasscode={ADMIN_PASSCODE}
      />

      {/* Donation Collector Modal */}
      <DonationCollector
        open={collectorOpen}
        onOpenChange={setCollectorOpen}
        isAdmin={isAdmin}
        samitiName="माँ काली पूजा समिति"
      />

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">🕉</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold">माँ काली पूजा समिति</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer"
              >
                होम
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer"
              >
                पूजा विवरण
              </button>
              <button
                onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer"
              >
                कार्यक्रम
              </button>
              <button
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer"
              >
                गैलरी
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer"
              >
                संपर्क
              </button>
              {/* Donation Button - now opens admin/login */}
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleDonationClick}
                aria-label="Open Donation Collector"
              >
                💰 दान/चंदा
              </Button>
            </div>

            {/* Mobile - header donation button */}
            <div className="md:hidden flex items-center">
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-3 py-2 rounded-full shadow-lg text-xs"
                onClick={handleDonationClick}
                aria-label="Open Donation Collector"
              >
                💰 दान
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Floating Donate FAB */}
      {/* <div className="md:hidden fixed bottom-4 right-4 z-[60]">
        <Button
          onClick={handleDonationClick}
          className="rounded-full shadow-xl bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-4 py-2"
          aria-label="Open Donation Collector"
        >
          💰 दान/चंदा
        </Button>
      </div> */}

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="durga-mata-2.jpg"
            alt="Maa Durga Background"
            fill
            className="object-cover object-center"
            priority
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = "none"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">जय माँ दुर्गे</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
              हमारे गाँव में मनाया जाने वाला भव्य दुर्गा पूजा महोत्सव
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600/90 hover:bg-red-700 text-white px-8 py-3 backdrop-blur-sm border border-white/20"
                onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                कार्यक्रम देखें
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white/20 px-8 py-3 bg-white/10 backdrop-blur-sm"
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Camera className="mr-2 h-5 w-5" />
                फोटो गैलरी
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-pulse backdrop-blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-400/30 rounded-full animate-pulse delay-1000 backdrop-blur-sm"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">🙏 पूजा विवरण</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              हमारे गाँव में प्रतिवर्ष धूमधाम से मनाया जाने वाला दुर्गा पूजा महोत्सव
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">पारंपरिक पूजा</h3>
                <p className="text-gray-600">वैदिक रीति-रिवाज के अनुसार संपन्न होने वाली पूजा</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">सांस्कृतिक कार्यक्रम</h3>
                <p className="text-gray-600">नृत्य, संगीत और नाटक के मनोरम कार्यक्रम</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">प्रसाद वितरण</h3>
                <p className="text-gray-600">सभी भक्तों के लिए निःशुल्क प्रसाद की व्यवस्था</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4"> कार्यक्रम सूची</h2>
            <p className="text-xl text-gray-600">दस दिनों का भव्य आयोजन</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { day: "प्रतिपदा", date: "22 अक्टूबर", event: "घटस्थापना, शैलपुत्री पूजा", time: "सुबह 7:00 बजे", emoji: "🕕" },
              { day: "द्वितीया", date: "23 अक्टूबर", event: "चंद्र दर्शन, ब्रह्मचारिणी पूजा", time: "सुबह 7:00 बजे", emoji: "🕖" },
              { day: "तृतीया", date: "24 अक्टूबर", event: "सिन्दूर तृतीया, चंद्रघंटा पूजा", time: "सुबह 7:00 बजे", emoji: "🕕" },
              { day: "चतुर्थी", date: "25 अक्टूबर", event: "विनायक चतुर्थी", time: "सुबह 7:00 बजे", emoji: "🕑" },
              { day: "पंचमी", date: "26 अक्टूबर", event: "कुष्मांडा पूजा, उपंग ललिता व्रत", time: "सुबह 7:00 बजे", emoji: "🕖" },
              { day: "षष्ठी", date: "27 अक्टूबर", event: "स्कंदमाता पूजा", time: "शाम 5:00 बजे", emoji: "🕑" },
              { day: "सप्तमी", date: "28 अक्टूबर", event: "कात्यायनी पूजा", time: "सुबह 7:00 बजे", emoji: "🕑" },
              { day: "अष्टमी", date: "29 अक्टूबर", event: "सरस्वती आवाहन, कालरात्रि पूजा", time: "सुबह 7:00 बजे", emoji: "🕑" },
              { day: "नवमी", date: "30 अक्टूबर", event: "सरस्वती पूजा, दुर्गा अष्टमी, महागौरी पूजा, संधि पूजा", time: "सुबह 7:00 बजे", emoji: "🕑" },
              { day: "दशमी", date: "01 अक्टूबर", event: "महानवमी, आयुध पूजा, नवमी होम", time: "सुबह 7:00 बजे", emoji: "🕑" },
              { day: "विजयादशमी", date: "02 अक्टूबर", event: "नवरात्रि पारण, दुर्गा विसर्जन", time: "सुबह 7:00 बजे", emoji: "🕑" },
            ]
              .slice(0, showAllEvents ? undefined : 3)
              .map((event, index) => (
                <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-red-700 mb-2">
                          {event.emoji} {event.day}
                        </h4>
                        <h5 className="text-xl font-semibold text-gray-800 mb-2">{event.event}</h5>
                        <p className="text-gray-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.time}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{event.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {!showAllEvents && (
              <div className="text-center mt-2">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
                  onClick={() => setShowAllEvents(true)}
                >
                  📅 और कार्यक्रम देखें
                </Button>
              </div>
            )}
            {showAllEvents && (
              <div className="text-center mt-2">
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 bg-transparent"
                  onClick={() => setShowAllEvents(false)}
                >
                  📅 कम दिखाएं
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">📸 फोटो गैलरी</h2>
            <p className="text-xl text-gray-600">पिछले वर्षों की यादें</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedImage(index)
                  setIsGalleryOpen(true)
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(image.title)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs text-gray-300">{image.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsGalleryOpen(true)}>
              <Camera className="mr-2 h-4 w-4" />
              और फोटो देखें
            </Button>
          </div>
        </div>
      </section>

      {/* Full Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <button onClick={prevImage} className="absolute left-4 text-white hover:text-gray-300 z-10">
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button onClick={nextImage} className="absolute right-4 text-white hover:text-gray-300 z-10">
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-4xl max-h-full flex flex-col items-center">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].title}
                width={800}
                height={600}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(
                      galleryImages[selectedImage].title,
                    )}`
                }}
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryImages[selectedImage].year}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-white" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src =
                        `/placeholder.svg?height=64&width=64&query=${encodeURIComponent(image.title.slice(0, 3))}`
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Donation Section (Public info remains; header button no longer scrolls here) */}
      <section id="donation" className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">💰 दान/चंदा</h2>
            <p className="text-xl text-gray-600">आपका योगदान हमारे लिए अमूल्य है</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4">📱 QR Code Scan करें</h3>
                <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-4 border-2 border-dashed border-gray-300">
                  <Image
                    src="qr-code.jpg"
                    alt="Payment QR Code"
                    width={192}
                    height={192}
                    className="w-48 h-48 object-contain rounded-lg"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                      const fallback = (e.target as HTMLImageElement).nextElementSibling as HTMLDivElement
                      if (fallback) fallback.style.display = "flex"
                    }}
                  />
                  <div className="w-48 h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg items-center justify-center hidden">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm text-gray-600">QR Code यहाँ होगा</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">📲 PhonePe, Google Pay, Paytm से scan करें</p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-lg">
                      💳
                    </span>
                    UPI ID
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                    <span className="font-mono text-gray-800 text-lg">8825288228@kotak</span>
                    <Button size="sm" onClick={copyUPI} className="bg-red-600 hover:bg-red-700">
                      📋 Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-lg">
                      🏦
                    </span>
                    Bank Details
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Account Name:</span>
                        <span className="font-semibold text-gray-800">माँ काली पूजा समिति</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Account No:</span>
                        <span className="font-mono text-gray-800">2846354484</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">IFSC Code:</span>
                        <span className="font-mono text-gray-800">KKBK0005663</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Bank:</span>
                        <span className="font-semibold text-gray-800">Kotak Mahindra Bank</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4ल font-bold text-red-700 mb-4">📞 संपर्क करें</h2>
            <p className="text-xl text-gray-600">किसी भी जानकारी के लिए संपर्क करें</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-4">📱 फोन नंबर</h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => window.open("tel:+918825288228")}
                  >
                    📞 +91 73708 91302
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => window.open("tel:+918825288228")}
                  >
                    📞 +91 88252 88228
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-4">💬 WhatsApp</h3>
                <Button
                  className="w-full bg-green-500 hover:bg-green-600"
                  onClick={() => openWhatsApp("918825288228", "नमस्ते, दुर्गा पूजा के बारे में जानकारी चाहिए")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />📱 Message करें
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-700 mb-4">📍 पता</h3>
                <p className="text-gray-700">
                  🏛️ कालीस्थान
                  <br />
                  🏘️ बगौछा, सीवान
                  <br />
                  🗺️ बिहार, 841244
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">🕉</span>
            </div>
            <h3 className="text-xl font-bold">माँ काली पूजा समिति</h3>
          </div>
          <p className="text-red-100 mb-4">जय माँ दुर्गे 🙏</p>
          <p className="text-sm text-red-200">© 2025 माँ काली पूजा समिति। सभी अधिकार सुरक्षित।</p>
        </div>
      </footer>
    </div>
  )
}
