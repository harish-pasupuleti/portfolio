
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send, MailCheck } from "lucide-react"


export default function ContactSection() {
  const form = useRef()
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    emailjs
      .sendForm(
        "service_rp4gntk",       // your service ID
        "template_q17zyh5",      // your template ID
        form.current,
        "grPSz0lJfdvic-160"        // your public key
      )
      .then(
        (result) => {
          setStatus({ loading: false, success: "Message sent successfully!", error: null })
          form.current.reset()
        },
        (error) => {
          setStatus({ loading: false, success: null, error: "Failed to send. Please try again." })
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground">
            Have a question or want to collaborate? Let’s connect!
          </p>
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <Card className="shadow-sm hover:shadow-md transition">
            <CardContent className="py-6 flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-primary" />
              <p className="text-lg font-semibold">Phone</p>
              <p className="text-muted-foreground">+91 9515789268</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition">
            <CardContent className="py-6 flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-primary" />
              <p className="text-lg font-semibold">Email</p>
              <p className="text-muted-foreground">harishpasupuleti18@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition">
            <CardContent className="py-6 flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="text-lg font-semibold">Location</p>
              <p className="text-muted-foreground">Andhra Pradesh, India</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MailCheck className="w-5 h-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <Input name="from_name" placeholder="Your Name" required className="h-12 text-base" />
                <Input type="email" name="from_email" placeholder="Your Email" required className="h-12 text-base" />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="text-base"
                />
                <Button
                  type="submit"
                  disabled={status.loading}
                  className="flex items-center gap-2 w-full text-base h-12"
                >
                  <Send className="w-4 h-4" />
                  {status.loading ? "Sending..." : "Send"}
                </Button>

                {status.success && <p className="text-green-600 text-sm">{status.success}</p>}
                {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}