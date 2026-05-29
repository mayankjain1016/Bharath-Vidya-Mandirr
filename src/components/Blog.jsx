import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  ArrowLeft, Calendar, User, Clock, ArrowRight, BookOpen,
  TrendingUp, Mail, Send, Tag, Eye, Heart, Share2, Search
} from 'lucide-react'
import './Blog.css'

const featuredPost = {
  id: 1,
  title: 'The Future of Education: Integrating Technology with Traditional Learning',
  excerpt: 'Discover how Bharath Vidya Mandir is revolutionizing education by seamlessly blending cutting-edge technology with time-tested teaching methodologies to create an unparalleled learning experience.',
  author: 'Dr. Rajesh Kumar',
  date: 'March 20, 2024',
  readTime: '8 min read',
  category: 'Education',
  views: '2.5K',
}

const blogPosts = [
  {
    id: 2,
    title: 'Student Success Story: From BVM to IIT Bombay',
    excerpt: 'Meet Arjun Kumar, who secured AIR 156 in JEE Advanced. Learn about his journey and how integrated coaching helped him achieve his dreams.',
    author: 'Priya Sharma',
    date: 'March 18, 2024',
    readTime: '6 min read',
    category: 'Success Stories',
    views: '1.8K',
  },
  {
    id: 3,
    title: 'Holistic Development: Beyond Academic Excellence',
    excerpt: 'Explore how our comprehensive approach nurtures not just academic skills but also emotional intelligence, creativity, and leadership qualities.',
    author: 'Mrs. Lakshmi Iyer',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Education',
    views: '1.5K',
  },
  {
    id: 4,
    title: 'Annual Sports Day 2024: Celebrating Athletic Excellence',
    excerpt: 'Relive the excitement of our Annual Sports Day where students showcased their athletic prowess and team spirit.',
    author: 'Mr. Arun Patel',
    date: 'March 12, 2024',
    readTime: '4 min read',
    category: 'Events',
    views: '2.1K',
  },
  {
    id: 5,
    title: 'Parent Testimonial: Why We Chose BVM',
    excerpt: 'Hear from parents about their experience with BVM and how it has positively impacted their child\'s educational journey.',
    author: 'Parent Community',
    date: 'March 10, 2024',
    readTime: '5 min read',
    category: 'Testimonials',
    views: '1.2K',
  },
  {
    id: 6,
    title: 'NEET 2024: Preparation Strategies That Work',
    excerpt: 'Expert tips and proven strategies from our faculty to help students excel in NEET examinations.',
    author: 'Dr. Rajesh Kumar',
    date: 'March 8, 2024',
    readTime: '7 min read',
    category: 'Academy Updates',
    views: '3.2K',
  },
  {
    id: 7,
    title: 'Cultural Fest 2024: A Celebration of Diversity',
    excerpt: 'Students from all grades came together to celebrate India\'s rich cultural heritage through music, dance, and art.',
    author: 'Mrs. Priya Sharma',
    date: 'March 5, 2024',
    readTime: '4 min read',
    category: 'Events',
    views: '1.9K',
  },
  {
    id: 8,
    title: 'The Importance of Early Childhood Education',
    excerpt: 'Understanding how quality early education shapes a child\'s future and why choosing the right school matters.',
    author: 'Mrs. Lakshmi Iyer',
    date: 'March 3, 2024',
    readTime: '6 min read',
    category: 'Education',
    views: '1.4K',
  },
  {
    id: 9,
    title: 'Board Exam Results 2024: Record-Breaking Performance',
    excerpt: 'BVM students achieve 98% success rate in board examinations with 25+ state-level toppers.',
    author: 'Admin',
    date: 'March 1, 2024',
    readTime: '3 min read',
    category: 'Academy Updates',
    views: '4.5K',
  },
]

const categories = [
  { name: 'All', count: 9 },
  { name: 'Education', count: 3 },
  { name: 'Success Stories', count: 1 },
  { name: 'Events', count: 2 },
  { name: 'Testimonials', count: 1 },
  { name: 'Academy Updates', count: 2 },
]

const popularPosts = [
  { id: 1, title: 'Board Exam Results 2024: Record-Breaking Performance', views: '4.5K' },
  { id: 2, title: 'NEET 2024: Preparation Strategies That Work', views: '3.2K' },
  { id: 3, title: 'The Future of Education: Technology Integration', views: '2.5K' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Blog({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />
        <div className="container">
          <motion.div
            className="blog-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="blog-hero-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <BookOpen size={60} color="var(--white)" strokeWidth={1.5} />
            </motion.div>
            <h1>Our Blog</h1>
            <p>
              Insights, stories, and updates from Bharath Vidya Mandir. 
              Explore articles on education, student success, and academy news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="blog-section blog-featured-section">
        <div className="container">
          <motion.div
            className="blog-featured"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="blog-featured-image">
              <div className="blog-featured-placeholder">
                <BookOpen size={80} color="var(--teal)" strokeWidth={1.5} />
              </div>
              <div className="blog-featured-badge">Featured</div>
            </div>
            <div className="blog-featured-content">
              <span className="blog-category">{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="blog-featured-meta">
                <div className="blog-meta-item">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="blog-meta-item">
                  <Calendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="blog-meta-item">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="blog-meta-item">
                  <Eye size={16} />
                  <span>{featuredPost.views} views</span>
                </div>
              </div>
              <button className="btn btn-teal">
                Read Full Article <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-section blog-categories-section">
        <div className="container">
          <motion.div
            className="blog-categories"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`blog-category-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <Tag size={16} />
                {cat.name}
                <span className="category-count">{cat.count}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="blog-section blog-articles-section">
        <div className="container">
          <motion.div
            className="blog-section-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Latest Articles</h2>
            <p>Stay informed with our latest insights and updates</p>
          </motion.div>

          <motion.div
            className="blog-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {filteredPosts.map((post) => (
              <motion.article key={post.id} className="blog-card" variants={item}>
                <div className="blog-card-image">
                  <div className="blog-card-placeholder">
                    <BookOpen size={50} color="var(--teal)" strokeWidth={1.5} />
                  </div>
                  <div className="blog-card-overlay">
                    <button className="blog-card-action">
                      <Heart size={20} />
                    </button>
                    <button className="blog-card-action">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <div className="blog-meta-item">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="blog-meta-item">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="blog-read-more">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="blog-section blog-popular-section">
        <div className="container">
          <motion.div
            className="blog-section-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp size={40} color="var(--gold)" strokeWidth={1.8} />
            <h2>Popular Posts</h2>
            <p>Most viewed articles this month</p>
          </motion.div>

          <motion.div
            className="blog-popular-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {popularPosts.map((post, i) => (
              <motion.div key={post.id} className="blog-popular-card" variants={item}>
                <div className="blog-popular-number">{i + 1}</div>
                <div className="blog-popular-content">
                  <h4>{post.title}</h4>
                  <div className="blog-meta-item">
                    <Eye size={14} />
                    <span>{post.views} views</span>
                  </div>
                </div>
                <button className="blog-popular-arrow">
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-section blog-newsletter">
        <div className="container">
          <motion.div
            className="blog-newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="blog-newsletter-icon">
              <Mail size={50} color="var(--white)" strokeWidth={1.5} />
            </div>
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter and never miss an update. Get the latest articles, 
              news, and insights delivered directly to your inbox.
            </p>
            {subscribed ? (
              <motion.div
                className="blog-newsletter-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Send size={24} color="var(--teal)" />
                <span>Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <form className="blog-newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-white-teal">
                  Subscribe <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <div className="container">
          <motion.div
            className="blog-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>Explore More Content</h2>
            <p>
              Dive deeper into our collection of articles, stories, and insights. 
              There's always something new to discover.
            </p>
            <button className="btn btn-white-teal">
              View All Articles <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
