import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ]

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Obra", href: "#services" },
    { name: "Contato", href: "#contact" }
  ]

  const collections = [
    { name: "Poemas do Cotidiano", href: "#" },
    { name: "Reflexões Profundas", href: "#" },
    { name: "Amor e Sentimentos", href: "#" },
    { name: "Obra Completa", href: "#" }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 via-secondary-900 to-black/50"></div>
      
      <motion.div
        className="absolute top-10 right-20 text-secondary-700"
        animate={{
          rotate: [0, 360],
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      >
        <BookOpen size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 text-secondary-800"
        animate={{
          y: [0, -10, 0],
          transition: { duration: 4, repeat: Infinity }
        }}
      >
        <Star size={40} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-16 pb-12"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent-500 rounded-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Mario Quintana</span>
              </div>
              
              <p className="text-secondary-300 leading-relaxed">
                Explorando a magia das palavras e a profundidade dos sentimentos através 
                da poesia imortal de um dos maiores poetas do Brasil.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-secondary-800 rounded-lg hover:bg-accent-500 transition-colors duration-300 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-secondary-300 group-hover:text-white" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6">Coleções</h3>
              <ul className="space-y-3">
                {collections.map((collection, index) => (
                  <li key={index}>
                    <motion.a
                      href={collection.href}
                      whileHover={{ x: 5 }}
                      className="text-secondary-300 hover:text-accent-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {collection.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent-500 mt-1 flex-shrink-0" />
                  <span className="text-secondary-300">Brasil</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent-500 mt-1 flex-shrink-0" />
                  <span className="text-secondary-300">contato@marioquintana.com</span>
                </div>
              </div>

              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-accent-500/20 to-secondary-700/30 rounded-2xl border border-accent-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="h-6 w-6 text-accent-400" />
                  <span className="font-semibold text-white">Inspiração Diária</span>
                </div>
                <p className="text-secondary-300 text-sm">
                  Receba citações e reflexões poéticas que tocam a alma.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              &copy; 2023 Mario Quintana. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-secondary-400">
              <motion.a
                href="#"
                whileHover={{ color: "#ffb74d" }}
                className="hover:text-accent-400 transition-colors"
              >
                Política de Privacidade
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#ffb74d" }}
                className="hover:text-accent-400 transition-colors"
              >
                Termos de Uso
              </motion.a>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#ffb74d" }}
                className="hover:text-accent-400 transition-colors"
              >
                Criado com Papum
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-r from-accent-500/20 to-secondary-600/20 rounded-2xl border border-accent-500/30">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 3, repeat: Infinity }
              }}
              className="flex justify-center mb-4"
            >
              <Star className="h-8 w-8 text-accent-400" />
            </motion.div>
            <p className="text-lg font-medium text-white mb-2">
              "As palavras têm o poder de eternizar momentos"
            </p>
            <p className="text-secondary-400 text-sm">— Mario Quintana</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}