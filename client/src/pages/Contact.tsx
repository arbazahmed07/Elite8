import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/layout/Footer'
import PageTransition from '../components/layout/PageTransition'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface SubmitStatus {
  success: boolean
  message: string
}

const Contact: React.FC = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    success: false,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: '' })

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData)
      if (response.data.success) {
        setSubmitStatus({ success: true, message: 'Your message has been sent successfully!' })
        setFormData({ name: '', email: '', subject: '', message: '' })
        toast({ title: 'Success', description: 'Message sent successfully', variant: 'default' })
      } else {
        setSubmitStatus({ success: false, message: response.data.message || 'Something went wrong. Please try again.' })
        toast({ title: 'Error', description: submitStatus.message, variant: 'destructive' })
      }
    } catch {
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again later.' })
      toast({ title: 'Error', description: 'Failed to send message. Please try again later.', variant: 'destructive' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h1 className="text-balance mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get In Touch</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                    <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can I help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                    <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Your message..." />
                  </div>
                  <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-md">
                    {isSubmitting ? <span className="flex items-center justify-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Sending...</span> : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-secondary rounded-2xl p-8">
                <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                    <div><h3 className="font-medium mb-1">Email</h3><a href="mailto:hello@example.com" className="animated-link text-muted-foreground">hello@example.com</a><p className="text-sm text-muted-foreground mt-1">I'll respond within 24-48 hours</p></div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                    <div><h3 className="font-medium mb-1">Location</h3><p className="text-muted-foreground">San Francisco, California</p><p className="text-sm text-muted-foreground mt-1">Available for remote work globally</p></div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
                    <div><h3 className="font-medium mb-1">Social Media</h3><div className="space-y-1"><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="animated-link block text-muted-foreground">LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer" className="animated-link block text-muted-foreground">GitHub</a><a href="https://twitter.com" target="_blank" rel="noreferrer" className="animated-link block text-muted-foreground">Twitter</a></div></div>
                  </div>
                </div>
                <div className="mt-10"><h3 className="font-medium mb-4">Availability</h3><div className="bg-muted rounded-lg p-4"><p className="text-muted-foreground text-sm">Currently available for freelance projects, part-time positions, and consulting opportunities. Let's talk about how I can help with your project!</p></div></div>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}

export default Contact

