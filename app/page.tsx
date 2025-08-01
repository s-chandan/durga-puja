"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Camera, MapPin, Phone, MessageCircle, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function DurgaPujaWebsite() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAllEvents, setShowAllEvents] = useState(false)

  // Gallery images data
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
    navigator.clipboard.writeText("durgapuja@paytm")
    alert("UPI ID copied! 📋")
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                className="hover:text-yellow-300 transition-colors cursor-pointer text-shadow"
              >
                होम
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer text-shadow"
              >
                पूजा विवरण
              </button>
              <button
                onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer text-shadow"
              >
                कार्यक्रम
              </button>
              <button
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer text-shadow"
              >
                गैलरी
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-yellow-300 transition-colors cursor-pointer text-shadow"
              >
                संपर्क
              </button>
              {/* Donation Button - Desktop */}
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById("donation")?.scrollIntoView({ behavior: "smooth" })}
              >
                💰 दान/चंदा
              </Button>
            </div>

            {/* Mobile Navigation - Remove hamburger menu, keep only donation button */}
            <div className="md:hidden flex items-center">
              {/* Donation Button - Mobile */}
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-3 py-2 rounded-full shadow-lg text-xs"
                onClick={() => document.getElementById("donation")?.scrollIntoView({ behavior: "smooth" })}
              >
                💰 दान
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="durga-mata-2.jpg"
            alt="Maa Durga Background"
            fill
            className="object-cover object-center"
            priority
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              e.currentTarget.style.display = "none"
            }}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30"></div>
        </div>

        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>

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

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-pulse backdrop-blur-sm"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-400/30 rounded-full animate-pulse delay-1000 backdrop-blur-sm"></div>

        {/* Floating Particles Effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-300/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-300/60 rounded-full animate-bounce delay-1000"></div>
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
            <h2 className="text-4xl font-bold text-red-700 mb-4">📅 कार्यक्रम सूची</h2>
            <p className="text-xl text-gray-600">पांच दिनों का भव्य आयोजन</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { day: "षष्ठी", date: "20 अक्टूबर", event: "कलश स्थापना व बोधन", time: "सुबह 6:00 बजे", emoji: "🕕" },
              { day: "सप्तमी", date: "21 अक्टूबर", event: "महासप्तमी पूजा", time: "सुबह 7:00 बजे", emoji: "🕖" },
              { day: "अष्टमी", date: "22 अक्टूबर", event: "महाअष्टमी व संधि पूजा", time: "सुबह 6:30 बजे", emoji: "🕕" },
              { day: "नवमी", date: "23 अक्टूबर", event: "महानवमी पूजा", time: "सुबह 7:00 बजे", emoji: "🕖" },
              { day: "दशमी", date: "24 अक्टूबर", event: "विजयादशमी व विसर्जन", time: "दोपहर 2:00 बजे", emoji: "🕑" },
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
              <div className="text-center mt-8">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
                  onClick={() => setShowAllEvents(true)}
                >
                  📅 और कार्यक्रम देखें
                </Button>
              </div>
            )}

            {showAllEvents && (
              <div className="text-center mt-8">
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
                    e.currentTarget.src = `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(image.title)}`
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
                  e.currentTarget.src = `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(galleryImages[selectedImage].title)}`
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
                      e.currentTarget.src = `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(image.title.slice(0, 3))}`
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Donation Section */}
      <section id="donation" className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">💰 दान/चंदा</h2>
            <p className="text-xl text-gray-600">आपका योगदान हमारे लिए अमूल्य है</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* QR Code */}
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4">📱 QR Code Scan करें</h3>
                <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-4 border-2 border-dashed border-gray-300">
                  <Image
                    src="qr-code.png"
                    alt="Payment QR Code"
                    width={192}
                    height={192}
                    className="w-48 h-48 object-contain rounded-lg"
                    onError={(e) => {
                      // Fallback to placeholder if QR code image fails to load
                      e.currentTarget.style.display = "none"
                      // e.currentTarget.nextElementSibling.style.display = "flex"
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="w-48 h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm text-gray-600">QR Code यहाँ होगा</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">📲 Phone Pe, Google Pay, Paytm से scan करें</p>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <div className="space-y-6">
              {/* UPI Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 text-lg">
                      💳
                    </span>
                    UPI ID
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                    <span className="font-mono text-gray-800 text-lg">durgapuja@paytm</span>
                    <Button size="sm" onClick={copyUPI} className="bg-red-600 hover:bg-red-700">
                      📋 Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bank Details */}
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
                        <span className="font-mono text-gray-800">1234567890123456</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">IFSC Code:</span>
                        <span className="font-mono text-gray-800">SBIN0001234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Bank:</span>
                        <span className="font-semibold text-gray-800">State Bank of India</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bank Details */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">📞 संपर्क करें</h2>
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
                    📞 +91 88252 88228
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
                  🗺️ बिहार 841244
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
