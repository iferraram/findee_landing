import { Article } from '@/components/article'
import { useRef, useState } from 'react'
import founderWelcome from '../emails/founderWelcome'
import onboarding1 from '../emails/onboarding1'

import axios from 'axios'

export default function SupportPage({ scrollRef }: { scrollRef: any }) {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [instagram, setInstagram] = useState('')
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  const sendEmail = async (subject: string, emailHtml: any, sender: string) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/send`,
        {
          from: sender,
          to: email,
          subject,
          message: emailHtml,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!formRef.current) return
    setLoading(true)
    fetch(
      'https://script.google.com/macros/s/AKfycbwtHPuEx4CFUterXlvVC4xggGjKhA-Pi0u0fc2kk7Jo4osAHV3oxvAta7PlgjPPW9AVZw/exec',
      {
        method: 'POST',
        body: new FormData(formRef.current),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        sendEmail(
          `¡${name.split(' ')[0] || name}, bienvenido a la prueba beta de Findee!`,
          founderWelcome(name.split(' ')[0] || name),
          '"Isa de Findee" <isa@findee.mx>',
        )
        sendEmail(
          `Beta Findee - Aquí están los próximos pasos`,
          onboarding1(name.split(' ')[0] || name),
          '"Erick de Findee" <ti@findee.mx>',
        )
        setInstagram('')
        setName('')
        setEmail('')
        setSuccess(true)
        setLoading(false)
      })
      .catch((err) => {
        setSuccess(false)
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div ref={scrollRef}>
      <Article title="Join Findee's Exclusive Early Access!">
        <p>Sign up now to join the waitlist for the beta version!</p>

        <form className="space-y-4" ref={formRef}>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="name">
              Name*
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="name"
              name="name"
              type="text"
              value={name}
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Email*
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="email"
              name="email"
              type="email"
              value={email}
            />
          </div>

          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Instagram / TikTok
            </label>
            <input
              onChange={(e) => setInstagram(e.target.value)}
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="instagram"
              name="instagram"
              placeholder="Example: @findee_app"
              value={instagram}
            />
          </div>

          <button
            className={`-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 ${!email || !name ? 'bg-gray-300' : 'bg-gradient-to-r from-secondary-500 to-secondary-400'} px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg`}
            onClick={handleSubmit}
            type="submit"
            disabled={!email || !name || loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>

          {success && (
            <div className="mt-2 text-sm italic text-gray-500">
              Thank you for your interest in Findee! Our team is currently reviewing availability,
              and if a slot is open, you'll receive an email with the next steps within 2 business
              days and you'll gain access to the app on October 4th. We appreciate your patience and
              look forward to having you onboard!{' '}
            </div>
          )}
        </form>
      </Article>
    </div>
  )
}
