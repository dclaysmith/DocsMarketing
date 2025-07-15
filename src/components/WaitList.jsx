import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, we offer a 3-month free trial so you can really get to know OyDocs before you subscribe.',
    },
    {
      question: 'What if I go over my storage limit?',
      answer:
        'We will let you know when it happens. You will have one billing cycle to reduce your storage or upgrade to a larger tier.',
    },
    {
      question: 'What is an "active" user?',
      answer:
        'An active user is someone who has logged in at least once in the last 30 days. This helps us ensure that you are only paying for users who are actively using the service.',
    },
  ],
  [
    {
      question: 'Is e-signature legally binding?',
      answer:
        'Yes, for many types of documents. e-signatures are generally accepted in most jurisdictions, but it is always best to check local laws or consult a legal expert if you have concerns.',
    },
    {
      question: 'Can I make my own forms?',
      answer:
        'Yes, you can create custom forms using our form builder. You can add fields, set validation rules, and customize the appearance of your forms to suit your needs.',
    },
  ],
  [
    {
      question: 'What is the difference betwee administrator and a user?',
      answer:
        'Administrators can upload general documents and manage companies, vendors, and employees. Employees can only upload or sign documents requested of them.',
    },
  ],
]

export function WaitList() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Join the waitlist
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          We are onboarding customers slowly to ensure a great experience.
          Please fill out the form below for priority access.
        </p>
      </div>
      <Container className="mx-auto md:text-center">
        <div className="mx-auto lg:mx-0">
          <iframe
            width="540"
            height="500"
            src="https://a1736f98.sibforms.com/serve/MUIFAFIdlInX-6XtIAI7SaZ0sfOvXsgOEjpohxEpsQzzeGzD44TtAVcXFDQgamsRPLrqVcoFNKnLsiVEC9uMa4UxRE8I1thQzXMOlVLg3gjRzy34lIveAYacfEyGoXNnvAZ4HizIudWa_WYA8NB7DtdRyLT6VM0qo1vn9TgmWJTkmbG6EP3PoielelDP_15n08saj_y22IGKY__1"
            frameborder="0"
            allowfullscreen
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
            }}
          ></iframe>
        </div>
      </Container>
    </section>
  )
}
