
import { useState } from 'react'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Electrical Engineering',
    description:
      'Reliable electrical design, engineering solutions, and technical support for modern projects.',
    icon: '⚡',
  },
  {
    number: '02',
    title: 'Solar PV Solutions',
    description:
      'Smart solar energy systems designed to improve efficiency and reduce energy costs.',
    icon: '☀️',
  },
  {
    number: '03',
    title: 'Battery Energy Storage',
    description:
      'Energy storage solutions that help improve reliability and manage power demand.',
    icon: '🔋',
  },
  {
    number: '04',
    title: 'EV Charging',
    description:
      'Practical electric vehicle charging solutions for homes, businesses, and facilities.',
    icon: '🚘',
  },
  {
    number: '05',
    title: 'Architecture & Building Design',
    description:
      'Thoughtful building layouts and coordinated design for functional spaces.',
    icon: '🏢',
  },
  {
    number: '06',
    title: 'Civil & Structural Engineering',
    description:
      'Engineering support for safe, durable, and well-planned structures.',
    icon: '🏗️',
  },
]

function App() {
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Save the form reference before awaiting the API request.
    const form = event.currentTarget
    const formData = new FormData(form)

    const service = formData.get('service')

    const inquiryType =
      service === 'Technical Training'
        ? 'training'
        : service === 'Other Inquiry'
          ? 'general'
          : 'service'

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: service || 'Website inquiry',
      message: formData.get('message'),
      inquiryType,
    }

    setIsSubmitting(true)
    setFormStatus('')
    setIsSuccess(false)

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to submit your inquiry. Please try again.'
        )
      }

      setFormStatus(
        'Thank you! Your inquiry was submitted successfully.'
      )
      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error('Contact form error:', error)

      setFormStatus(
        error.message ||
          'Unable to connect to the server. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            <span className="brand-mark">ME</span>
            <span className="brand-name">
              ME Technologies
              <small>Engineering the Future</small>
            </span>
          </a>

          <nav className="navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#ev-charging">EV Charging</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Get a Quote ↗
          </a>
        </div>
      </header>

      <main>
        {/* Home */}
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                ENGINEERING · ENERGY · INNOVATION
              </span>

              <h1>
                Building a smarter future through{' '}
                <span>engineering.</span>
              </h1>

              <p className="hero-description">
                We deliver practical engineering, renewable energy, EV
                charging, and technical training solutions for a changing
                world.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#services">
                  Explore Our Services <span>↗</span>
                </a>

                <a className="button button-secondary" href="#about">
                  Discover ME Technologies
                </a>
              </div>

              <div className="hero-note">
                <span className="status-dot"></span>
                Engineering solutions for tomorrow&apos;s challenges
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-topline">
                <span>INNOVATION IN ACTION</span>
                <span>01 / 04</span>
              </div>

              <div className="visual-art">
                <div className="sun"></div>
                <div className="solar-panel panel-one"></div>
                <div className="solar-panel panel-two"></div>
                <div className="tower tower-one">
                  <span></span>
                </div>
                <div className="tower tower-two">
                  <span></span>
                </div>
                <div className="energy-line line-one"></div>
                <div className="energy-line line-two"></div>

                <div className="energy-label">
                  <span>✳</span>
                  Clean energy. Better tomorrow.
                </div>
              </div>

              <div className="visual-bottomline">
                <span>ENGINEERED FOR PROGRESS</span>
                <span>ME TECHNOLOGIES</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>OUR EXPERTISE</span>
              <span>Electrical Engineering</span>
              <span>Renewable Energy</span>
              <span>EV Infrastructure</span>
              <span>Technical Training</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about-section section-padding" id="about">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">WHO WE ARE</span>
              <h2>
                Engineering ideas into <span>real solutions.</span>
              </h2>
            </div>

            <div className="about-content">
              <p>
                ME Technologies focuses on engineering services, modern
                energy solutions, and practical technical education. Our goal
                is to help clients explore better ways to design, build, and
                power their projects.
              </p>

              <a className="text-link" href="#contact">
                Let&apos;s work together <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          className="services-section section-padding"
          id="services"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">WHAT WE DO</span>
                <h2>
                  Our engineering <span>services.</span>
                </h2>
              </div>

              <p>
                Practical expertise across engineering, building design, and
                sustainable energy.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a
                    href="#contact"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Discuss this service <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EV Charging */}
        <section className="ev-section section-padding" id="ev-charging">
          <div className="container ev-grid">
            <div className="ev-visual">
              <div className="ev-orbit orbit-one"></div>
              <div className="ev-orbit orbit-two"></div>

              <div className="ev-center">
                <span>⚡</span>
                <strong>EV</strong>
                <small>CHARGING</small>
              </div>

              <span className="ev-tag tag-top">SMART MOBILITY</span>
              <span className="ev-tag tag-bottom">
                POWERING PROGRESS
              </span>
            </div>

            <div className="ev-copy">
              <span className="eyebrow">THE FUTURE IS ELECTRIC</span>

              <h2>
                Powering the next generation of <span>mobility.</span>
              </h2>

              <p>
                Explore charging infrastructure and electrical solutions
                that support the transition toward more sustainable
                transportation.
              </p>

              <a className="button button-primary" href="#contact">
                Discuss an EV Project <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Training */}
        <section
          className="training-section section-padding"
          id="training"
        >
          <div className="container training-grid">
            <div>
              <span className="eyebrow">LEARN. PRACTICE. GROW.</span>

              <h2>
                Build skills for a <span>brighter future.</span>
              </h2>

              <p>
                Our training section is designed to showcase technical
                learning opportunities and help aspiring professionals
                develop practical engineering skills.
              </p>

              <a className="button button-light" href="#contact">
                Ask About Training <span>↗</span>
              </a>
            </div>

            <div className="training-card">
              <span className="training-symbol">
                ME<span>+</span>
              </span>

              <div>
                <span className="training-label">YOUR NEXT STEP</span>
                <h3>Turn knowledge into practical skills.</h3>
                <p>
                  Technical learning. Practical thinking. Professional
                  growth.
                </p>
              </div>

              <span className="training-arrow">↗</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-section section-padding" id="contact">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">LET&apos;S CONNECT</span>

              <h2>
                Have a project in <span>mind?</span>
              </h2>

              <p>
                Tell us about your engineering, energy, or training needs.
                We&apos;d be happy to hear from you.
              </p>

              <div className="contact-detail">
                <span className="contact-detail-icon">✉</span>

                <div>
                  <small>EMAIL</small>
                  <p>Contact ME Technologies for inquiries</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="03001234567"
                required
              />

              <label htmlFor="service">What can we help with?</label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Electrical Engineering</option>
                <option>Solar PV Solutions</option>
                <option>Battery Energy Storage</option>
                <option>EV Charging</option>
                <option>Architecture & Building Design</option>
                <option>Civil & Structural Engineering</option>
                <option>Technical Training</option>
                <option>Other Inquiry</option>
              </select>

              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us a little about your project..."
                required
              ></textarea>

              <button
                className="button button-primary form-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}{' '}
                <span>↗</span>
              </button>

              {formStatus && (
                <p
                  className="form-note"
                  role="status"
                  aria-live="polite"
                  style={{
                    color: isSuccess ? 'green' : 'crimson',
                  }}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">ME</span>
            <span className="brand-name">
              ME Technologies
              <small>Engineering the Future</small>
            </span>
          </a>

          <p>Engineering better possibilities for tomorrow.</p>
          <a href="#home">Back to top ↑</a>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} ME Technologies</span>
          <span>Engineering · Energy · Innovation</span>
        </div>
      </footer>
    </>
  )
}

export default App
