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

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
