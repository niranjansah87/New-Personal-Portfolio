import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import validator from 'validator'
import emailjs from '@emailjs/browser'

import Tilt from 'react-parallax-tilt'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // EmailJS configuration
  const SERVICE_ID = 'service_348e95l'
  const TEMPLATE_ID = 'template_9zrdq9m'
  const PUBLIC_KEY = 'fIVgbP2s9jDysn_sV' // You'll need to get this from EmailJS dashboard

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validEmail || !message) {
      toast.error('Please fill in all required fields correctly!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
      })
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: email,
        from_email: email,
        message: message,
        to_name: 'Niranjan', // Your name
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })

      setIsSuccess(true)
      setEmail('')
      setMessage('')
      setValidEmail(false)
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send email. Please try again!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            setIsSuccess(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Tilt perspective={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Container>
        <h2>Get in touch using the form</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              verifyEmail(e.target.value)
            }}
            required
          />
          <textarea
            required
            placeholder="Send a message to get started."
            id="message"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting || !validEmail || !message}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
        <ToastContainer />
      </Container>
    </Tilt>
  )
}
