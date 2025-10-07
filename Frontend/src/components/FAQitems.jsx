import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FaqItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-[#D9E4C7] rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#CED9BC] transition-colors"
      >
        <h3 className="text-2xl font-bold text-black">{question}</h3>
        {isOpen ? (
          <Minus className="w-8 h-8 text-[#6B8E4E] flex-shrink-0" />
        ) : (
          <Plus className="w-8 h-8 text-[#6B8E4E] flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="px-8 pb-6">
          <p className="text-lg text-black leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
