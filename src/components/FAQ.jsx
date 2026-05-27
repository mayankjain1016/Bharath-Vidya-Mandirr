import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

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
  const [open, setOpen] = useState(null)

  return (
    <section className="faq">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className={`faq-item glow-target${open === i ? ' faq-item--open' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <motion.span
                  className="faq-chevron"
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32 }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
