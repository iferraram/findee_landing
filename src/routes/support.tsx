import { Article } from '@/components/article'
import { useRef, useState } from 'react'

export default function SupportPage({ scrollRef }: { scrollRef: any }) {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [instagram, setInstagram] = useState('')

  const formRef = useRef(null)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!formRef.current) return
    fetch(
      'https://script.google.com/macros/s/AKfycbwtHPuEx4CFUterXlvVC4xggGjKhA-Pi0u0fc2kk7Jo4osAHV3oxvAta7PlgjPPW9AVZw/exec',
      {
        method: 'POST',
        body: new FormData(formRef.current),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setInstagram('')
        setName('')
        setEmail('')
        setSuccess(true)
      })
      .catch((err) => {
        setSuccess(false)
        console.log(err)
      })
  }

  return (
    <div ref={scrollRef}>
      <Article title="Join Findee's Exclusive Early Access!">
        <p>Sign up now to start exploring the beta version!</p>

        <form className="space-y-4" ref={formRef}>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="name">
              Name
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
              Email
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
              value={instagram}
            />
          </div>

          <button
            className={`-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 ${!email || !name ? 'bg-gray-300' : 'bg-gradient-to-r from-secondary-500 to-secondary-400'} px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg`}
            onClick={handleSubmit}
            type="submit"
            disabled={!email || !name}
          >
            Submit
          </button>

          {success && (
            <div className="mt-2 text-xs italic text-gray-500">
              🎉 Congrats! You'll receive an email from us with your access key to the Findee app
            </div>
          )}
        </form>
      </Article>
    </div>
  )
}
