
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need council approval for a granny flat in Victoria?",
    answer:
      "All secondary dwellings must meet local planning and building regulations. At Radevo, we handle the entire approval process to ensure your granny flat is fully compliant from day one.",
  },
  {
    question: "Can I rent out a granny flat legally in Melbourne or Victoria?",
    answer:
      "Yes, you can legally rent out a granny flat in Victoria. The property must comply with all relevant building codes and planning permits before tenants can move in.",
  },
  {
    question: "How much does it cost to build a granny flat?",
    answer:
      "The cost typically ranges from $80,000 to $200,000 depending on size, materials, and site conditions. We provide detailed quotes tailored to your specific requirements.",
  },
  {
    question: "How large can a granny flat be in Victoria?",
    answer:
      "In Victoria, a secondary dwelling (granny flat) can be up to 60 square metres in size. The size may also depend on your block size and local council requirements.",
  },
  {
    question: "What features can be included in a granny flat?",
    answer:
      "A granny flat can include a bedroom, bathroom, kitchen, living area, and outdoor space. Custom features like ensuite bathrooms, built-in robes, and modern appliances are all possible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#D6CFC4] flex flex-col items-center justify-center py-20 px-4">
      {/* Title */}
      <h2 className="text-4xl font-serif text-[#2C2C2C] mb-12 tracking-wide">
        FAQs
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-6xl divide-y divide-[#B8B0A5]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-5">
              {/* Question Row */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-xl font-semibold text-[#2C2C2C] leading-snug">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-[#2C2C2C]"
                >
                  <ChevronDown size={20} strokeWidth={1.5} />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-lg text-[#5C5550] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
