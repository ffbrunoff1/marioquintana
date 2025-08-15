import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, MessageCircle, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: '',
          recaptchaToken: token
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      content: "Brasil",
      description: "Nossa obra está presente em todo território nacional"
    },
    {
      icon: MessageCircle,
      title: "Redes Sociais",
      content: "@marioquintana",
      description: "Siga-nos para atualizações e conteúdos exclusivos"
    },
    {
      icon: Clock,
      title: "Disponibilidade",
      content: "24/7",
      description: "Nossa literatura está sempre disponível para você"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/20 to-accent-100/20"></div>
      
      <motion.div
        className="absolute top-20 right-16 text-accent-200"
        animate={{
          rotate: [0, 360],
          transition: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        <MessageCircle size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 text-secondary-200"
        animate={{
          y: [0, -15, 0],
          transition: { duration: 4, repeat: Infinity }
        }}
      >
        <Mail size={60} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-700 rounded-full text-sm font-semibold mb-4">
              📞 Entre em Contato
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary-800">Conecte-se com a</span>
              <br />
              <span className="gradient-text">Obra de Mario Quintana</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Tem alguma dúvida sobre a obra do poeta? Quer saber mais sobre nossos conteúdos? 
              Entre em contato conosco e mergulhe ainda mais fundo no universo poético de Mario Quintana.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-secondary-800 mb-8">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10, transition: { duration: 0.3 } }}
                      className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover-lift"
                    >
                      <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent-500 to-secondary-600 rounded-xl">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-secondary-800 mb-2">{info.title}</h4>
                        <p className="text-lg font-semibold text-accent-600 mb-1">{info.content}</p>
                        <p className="text-secondary-600">{info.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-accent-500 to-secondary-600 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h4 className="text-2xl font-bold mb-4">Por que Entrar em Contato?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Tire dúvidas sobre a obra do poeta</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Receba recomendações personalizadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Saiba sobre novos conteúdos e edições</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Conecte-se com outros admiradores</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                Envie sua Mensagem
              </h3>
              <p className="text-secondary-600">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800">Mensagem enviada com sucesso!</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-800">Erro ao enviar mensagem. Tente novamente.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary-800 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary-800 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white/80"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary-800 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 bg-white/80 resize-none"
                  placeholder="Compartilhe suas dúvidas, comentários ou interesse sobre a obra de Mario Quintana..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-gradient-to-r from-accent-500 to-secondary-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
              />
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-secondary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Descobrir Mais?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Não perca tempo! Entre em contato conosco agora e comece sua jornada 
              pelo fascinante mundo poético de Mario Quintana.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary-800 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Fale Conosco Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}