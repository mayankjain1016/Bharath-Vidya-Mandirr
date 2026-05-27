import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    title: 'Kindergarten Parent Testimonial - Success Story',
    date: 'March 15, 2024',
    category: 'Testimonials',
    description: 'Hear from our kindergarten parents about their child\'s wonderful learning journey and development at Bharath Vidya Mandir.',
  },
  {
    id: 2,
    title: 'Kindergarten Experience - Parent Feedback',
    date: 'March 10, 2024',
    category: 'Testimonials',
    description: 'Parents share their experience with our kindergarten program and how it has positively impacted their child\'s early education.',
  },
  {
    id: 3,
    title: 'Parents Share Their BVM Experience',
    date: 'March 5, 2024',
    category: 'Testimonials',
    description: 'Listen to parents as they discuss the comprehensive education and holistic development their children receive at our school.',
  },
  {
    id: 4,
    title: 'Shaina Yarden - Student Success Story',
    date: 'February 28, 2024',
    category: 'Success Stories',
    description: 'Meet Shaina Yarden, one of our accomplished students, as she shares her academic journey and achievements at BVM.',
  },
  {
    id: 5,
    title: 'Shri Varshini - Academic Excellence',
    date: 'February 20, 2024',
    category: 'Success Stories',
    description: 'Shri Varshini talks about her experience with integrated coaching and how it helped her excel in competitive exams.',
  },
]

export default function Blog({ onClose }) {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="container">
          <button className="blog-back" onClick={onClose}>
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <motion.div
            className="blog-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>BVM Stories & Testimonials</h1>
            <p>Real experiences from our students and parents</p>
          </motion.div>
        </div>
      </div>

      <div className="container blog-container">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card glow-target"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>

                <div className="blog-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
