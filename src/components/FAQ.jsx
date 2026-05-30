import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Mail, Phone } from 'lucide-react'

const faqs = [
  {
    q: 'How can I apply for admission?',
    a: 'Admissions are open throughout the academic year. Parents can visit our campus, meet with the admission counsellor, or contact us via phone or email. We evaluate students based on academic performance, an aptitude assessment, and a brief interaction. The process typically takes 2–3 working days.',
  },
  {
    q: 'Which curriculum does the school follow?',
    a: 'Bharath Vidya Mandir follows the CBSE (Central Board of Secondary Education) curriculum, ensuring students receive a standardised, nationally recognised education supplemented with enrichment programmes and competitive exam preparation.',
  },
  {
    q: 'What is the medium of instruction?',
    a: 'The primary medium of instruction is English. We believe in providing education in English to enhance global exposure while maintaining strong roots in Indian culture and values. Tamil and Sanskrit are offered as language options.',
  },
  {
    q: 'Are digital classrooms or smart learning tools used?',
    a: 'Yes. We have state-of-the-art smart classrooms equipped with interactive digital boards, multimedia content, and e-learning platforms. Our faculty integrates technology seamlessly into the curriculum to enhance engagement and comprehension.',
  },
  {
    q: 'Are meals or refreshments provided in the school?',
    a: 'Yes. We provide nutritious mid-noon meals through our Bharath Bhojanastav programme, prepared hygienically with balanced nutrition. Refreshments are also available. Special dietary requirements can be accommodated upon prior request.',
  },
  {
    q: 'How can I get details about the fee structure?',
    a: 'Detailed fee structures are available on request. You can contact our admission office, visit the school, or request a brochure via email. We offer flexible fee plans to make quality education accessible, and merit-based scholarships are available for deserving students.',
  },
  {
    q: 'What is integrated NEET & JEE coaching?',
    a: 'Integrated coaching is a programme where NEET and JEE preparation is embedded within the regular school curriculum. In partnership with Seekers Institute, Trichy, students receive expert coaching without needing to attend separate coaching centres, saving time and reducing stress.',
  },
  {
    q: 'From which class does integrated coaching begin?',
    a: 'Integrated coaching begins from Class VI (Stage I — Foundation) and continues through Class X, building strong conceptual foundations. Stage II (Classes XI & XII) focuses on intensive NEET, JEE, and CUET preparation with mock tests and performance analytics.',
  },
]

export default function FAQ() {
  // Set the first item (index 0) to be open by default for better UX
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative py-24 lg:py-32 bg-white font-sans overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-16">
          
          {/* ── Left Column: Sticky Header ── */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter leading-[1.1] mb-6">
                Frequently <br className="hidden lg:block" /> Asked Questions.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Everything you need to know about admissions, academics, and campus life at Bharath Vidya Mandir.
              </p>
            </motion.div>
          </div>

          {/* ── Right Column: Accordion List ── */}
          <div className="w-full lg:w-2/3">
            <style>{`
              .faq-scroll::-webkit-scrollbar {
                width: 6px;
              }
              .faq-scroll::-webkit-scrollbar-track {
                background: #f8fafc;
                border-radius: 8px;
              }
              .faq-scroll::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 8px;
              }
              .faq-scroll::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
              }
            `}</style>
            
            <div className="flex flex-col gap-4 max-h-[540px] overflow-y-auto pr-2 md:pr-4 faq-scroll">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`border rounded-3xl overflow-hidden transition-all duration-300 shrink-0 ${
                      isOpen 
                        ? 'bg-slate-50 border-teal-200 shadow-[0_10px_40px_rgba(13,148,136,0.08)]' 
                        : 'bg-white border-slate-200 hover:border-teal-200 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-base md:text-lg font-bold pr-6 transition-colors duration-300 ${
                        isOpen ? 'text-teal-800' : 'text-slate-900'
                      }`}>
                        {faq.q}
                      </span>
                      
                      {/* Animated Chevron Badge */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <ChevronDown 
                          size={20} 
                          strokeWidth={2.5}
                          className={`transition-transform duration-500 ease-[0.16,1,0.3,1] ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 md:px-8 pb-8">
                            <div className="w-full h-px bg-slate-200 mb-6" />
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Helper Contact Card (Bottom CTA) ── */}
        <motion.div 
          className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-500 text-sm md:text-base">Our admissions team is here to help you make the right choice for your child's future.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white border border-teal-100 text-sm font-bold text-teal-700 hover:bg-teal-50 hover:border-teal-200 transition-colors shadow-sm">
              <Phone size={18} />
              Call Admissions
            </a>
            <a href="mailto:admissions@bvm.edu" className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white border border-amber-100 text-sm font-bold text-amber-600 hover:bg-amber-50 hover:border-amber-200 transition-colors shadow-sm">
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}