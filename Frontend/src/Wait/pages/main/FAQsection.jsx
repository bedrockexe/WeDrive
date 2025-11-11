import FaqItem from "../../components/FAQitems"

export default function FaqSection() {
  const faqs = [
    {
      question: "How to rent a car?",
      answer: "Lorem ipsum dolor sit amet consectetur. Aliquet molestie id amet odio vitae donec sed turpis elementum.",
      defaultOpen: false,
    },
    {
      question: "How to rent a car?",
      answer: "Lorem ipsum dolor sit amet consectetur. Aliquet molestie id amet odio vitae donec sed turpis elementum.",
      defaultOpen: true,
    },
    {
      question: "How to rent a car?",
      answer: "Lorem ipsum dolor sit amet consectetur. Aliquet molestie id amet odio vitae donec sed turpis elementum.",
      defaultOpen: false,
    },
    {
      question: "How to rent a car?",
      answer: "Lorem ipsum dolor sit amet consectetur. Aliquet molestie id amet odio vitae donec sed turpis elementum.",
      defaultOpen: false,
    },
  ]

  return (
    <section className="bg-[#2C5F5F] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h2 className="text-6xl font-bold mb-6 leading-tight">Frequently asked questions</h2>
            <p className="text-xl text-[#B8D4D4]">Cars showcase to you by WeDrive Rentals</p>
          </div>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} defaultOpen={faq.defaultOpen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
