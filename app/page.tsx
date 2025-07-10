"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Camera, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DurgaPujaWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">🕉</span>
              </div>
              <h1 className="text-2xl font-bold">श्री दुर्गा पूजा समिति</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#home" className="hover:text-yellow-300 transition-colors">
                होम
              </Link>
              <Link href="#about" className="hover:text-yellow-300 transition-colors">
                पूजा विवरण
              </Link>
              <Link href="#events" className="hover:text-yellow-300 transition-colors">
                कार्यक्रम
              </Link>
              <Link href="#gallery" className="hover:text-yellow-300 transition-colors">
                गैलरी
              </Link>
              <Link href="#contact" className="hover:text-yellow-300 transition-colors">
                संपर्क
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-red-700 mb-6">जय माँ दुर्गे</h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">हमारे गाँव में मनाया जाने वाला भव्य दुर्गा पूजा महोत्सव</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                कार्यक्रम देखें
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 bg-transparent"
              >
                <Camera className="mr-2 h-5 w-5" />
                फोटो गैलरी
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-400/30 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-red-700 mb-4">दुर्गा पूजा के बारे में</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              माँ दुर्गा की शक्ति और आशीर्वाद से हमारा गाँव हर साल भव्य उत्सव मनाता है
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="maa-durga.jpg?height=400&width=600"
                alt="Durga Puja Celebration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">सामुदायिक एकता</h4>
                  <p className="text-gray-600">पूरा गाँव मिलकर इस पवित्र त्योहार को मनाता है और माँ दुर्गा का आशीर्वाद लेता है।</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">पारंपरिक उत्सव</h4>
                  <p className="text-gray-600">पुराने रीति-रिवाजों के साथ आधुनिक कार्यक्रमों का सुंदर मेल।</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">स्थानीय संस्कृति</h4>
                  <p className="text-gray-600">हमारे गाँव की अनूठी परंपराओं और संस्कृति का प्रदर्शन।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-red-700 mb-4">कार्यक्रम सूची</h3>
            <p className="text-gray-600">दुर्गा पूजा के दौरान होने वाले सभी कार्यक्रम</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { day: "षष्ठी", date: "20 अक्टूबर", event: "कलश स्थापना व बोधन", time: "सुबह 6:00 बजे" },
              { day: "सप्तमी", date: "21 अक्टूबर", event: "महासप्तमी पूजा", time: "सुबह 7:00 बजे" },
              { day: "अष्टमी", date: "22 अक्टूबर", event: "महाअष्टमी व संधि पूजा", time: "सुबह 6:30 बजे" },
              { day: "नवमी", date: "23 अक्टूबर", event: "महानवमी पूजा", time: "सुबह 7:00 बजे" },
              { day: "दशमी", date: "24 अक्टूबर", event: "विजयादशमी व विसर्जन", time: "दोपहर 2:00 बजे" },
              { day: "सांस्कृतिक", date: "21-23 अक्टूबर", event: "नृत्य व संगीत कार्यक्रम", time: "शाम 7:00 बजे" },
            ].map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-red-700">{event.day}</h4>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">{event.event}</h5>
                  <p className="text-gray-600 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.time}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-red-700 mb-4">फोटो गैलरी</h3>
            <p className="text-gray-600">पिछले वर्षों के दुर्गा पूजा की यादें</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={`maa-durga.jpg?height=300&width=300`}
                  alt={`Durga Puja ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">दुर्गा पूजा 2023</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Camera className="mr-2 h-4 w-4" />
              और फोटो देखें
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">संपर्क करें</h3>
            <p className="text-red-100">किसी भी जानकारी के लिए हमसे संपर्क करें</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-semibold mb-2">फोन</h4>
                <p className="text-red-100">+91 88252 88228</p>
                <p className="text-red-100">+91 88252 88228</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-semibold mb-2">ईमेल</h4>
                <p className="text-red-100">durgapuja@village.com</p>
                <p className="text-red-100">info@durgapuja.org</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-semibold mb-2">पता</h4>
                <p className="text-red-100">काली स्थान, बगौछा</p>
                <p className="text-red-100">सिवान, बिहार</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment/Donation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-red-700 mb-4">दान/चंदा</h3>
            <p className="text-gray-600">दुर्गा पूजा के आयोजन में अपना योगदान दें</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* QR Code Section */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl shadow-lg">
                  <h4 className="text-2xl font-bold text-red-700 mb-4">QR Code से भुगतान करें</h4>
                  <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-4">
                    <Image
                      src="QR-code.png?height=200&width=200"
                      alt="Payment QR Code"
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                  <p className="text-gray-600 text-sm">अपने Phone Pe, Google Pay, या Paytm से scan करें</p>
                </div>
              </div>

              {/* UPI Details Section */}
              <div className="space-y-6">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">💳</span>
                      UPI ID
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-lg font-mono text-gray-800">durgapuja@kotak</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                        onClick={() => navigator.clipboard.writeText("durgapuja@kotak")}
                      >
                        Copy UPI ID
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        💰
                      </span>
                      Bank Details
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Account Name:</strong> मां काली पूजा समिति
                      </p>
                      <p>
                        <strong>Account No:</strong> 1234567890123456
                      </p>
                      <p>
                        <strong>IFSC Code:</strong> SBIN0001234
                      </p>
                      <p>
                        <strong>Bank:</strong> State Bank of India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Contact */}
                <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-green-100">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                      </div>
                      WhatsApp पर संपर्क करें
                    </h4>
                    <p className="text-gray-700 mb-4">किसी भी सहायता या जानकारी के लिए</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                        onClick={() =>
                          window.open("https://wa.me/918825288228?text=नमस्ते, दुर्गा पूजा के बारे में जानकारी चाहिए", "_blank")
                        }
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        +91 88252 88228
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-500 text-green-600 hover:bg-green-50 flex items-center justify-center bg-transparent"
                        onClick={() =>
                          window.open(
                            "https://wa.me/918825288228?text=नमस्ते, दुर्गा पूजा donation के बारे में जानकारी चाहिए",
                            "_blank",
                          )
                        }
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        +91 88252 88228
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-8 text-center">
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">🙏 महत्वपूर्ण सूचना</h4>
                  <p className="text-yellow-700">
                    आपका हर छोटा-बड़ा योगदान माँ दुर्गा के भव्य आयोजन में सहायक है। दान करने के बाद कृपया WhatsApp पर confirmation
                    message भेजें।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">🕉</span>
              </div>
              <h4 className="text-xl font-bold">मां काली पूजा समिति</h4>
            </div>
            <p className="text-gray-400 mb-4">माँ दुर्गा की कृपा से सभी का कल्याण हो</p>
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-yellow-300 hover:bg-white/10"
                onClick={() => window.open("https://wa.me/918825288228", "_blank")}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-yellow-300 hover:bg-white/10"
                onClick={() => window.open("https://facebook.com/durgapuja", "_blank")}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
            </div>
            <p className="text-sm text-gray-500">© 2025 दुर्गा पूजा समिति। सभी अधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
