import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How to rent a car?",
    answer: "Lorem ipsum dolor sit amet consectetur. Adipiscing molestie ipsum sed orci elementum asdadasd jashd urea",
  },
  {
    id: 2,
    question: "Is there a Minimum Rent?",
    answer: "Lorem ipsum dolor sit amet consectetur. Adipiscing molestie ipsum sed orci elementum asdadasd jashd urea",
  },
  {
    id: 3,
    question: "Are you Insured",
    answer: "Lorem ipsum dolor sit amet consectetur. Adipiscing molestie ipsum sed orci elementum asdadasd jashd urea",
  },
  {
    id: 4,
    question: "How to rent a car?",
    answer: "Lorem ipsum dolor sit amet consectetur. Adipiscing molestie ipsum sed orci elementum asdadasd jashd urea",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="bg-light-green py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-dark-gray mb-4">Frequently asked questions</h2>
            <p className="text-lg text-dark-gray">Cars showcase to you by WeDrive Rentals</p>
          </div>

          {/* Right FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-2 border-primary-green rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-lime-100 transition"
                >
                  <span className="font-semibold text-dark-gray text-left">{faq.question}</span>
                  {openId === faq.id ? (
                    <Minus size={24} className="text-primary-green flex-shrink-0" />
                  ) : (
                    <Plus size={24} className="text-primary-green flex-shrink-0" />
                  )}
                </button>

                {openId === faq.id && (
                  <div className="px-6 py-4 bg-lime-100 border-t-2 border-primary-green">
                    <p className="text-dark-gray">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Squares */}
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-green rounded"></div>
      <div className="absolute bottom-32 left-8 w-8 h-8 bg-primary-green rounded"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-primary-green rounded"></div>
      <div className="absolute top-32 right-8 w-8 h-8 bg-primary-green rounded"></div>
    </section>
  )
}
