import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "Who can join the UNIMA Education Society?",
    answer:
      "Membership is open to all students enrolled in education-related programmes at the University of Malawi.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Members gain access to academic workshops, leadership opportunities, networking, and updates on educational events.",
  },
  {
    question: "How can I participate in events?",
    answer:
      "All official announcements and event links are shared on our website and via the newsletter section.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No, membership is free for all eligible students. Certain special events may have a nominal participation fee.",
  },
]

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      id="faqs"
      className="bg-gray-50 px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl text-centre font-bold text-primary mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl w-full flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-100 transition"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUpIcon className="w-6 h-6 text-gray-700" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-700" />
                )}
              </button>

              {isOpen && (
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
