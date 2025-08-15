import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Quote, Heart } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/30 to-accent-100/30"></div>
      
      <motion.div 
        className="absolute top-20 left-10 text-secondary-300"
        {...floatingAnimation}
      >
        <Quote size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 right-16 text-accent-300"
        animate={{
          rotate: [0, 360],
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        <Star size={40} />
      </motion.div>

      <motion.div 
        className="absolute top-1/3 right-20 text-secondary-400"
        {...floatingAnimation}
      >
        <Heart size={35} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-700 rounded-full text-sm font-semibold mb-4">
                ✨ Poeta Brasileiro Imortal
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-secondary-800">Explore a</span>
                <br />
                <span className="gradient-text">Magia das Palavras</span>
                <br />
                <span className="text-secondary-700">de Mario Quintana</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-secondary-600 mb-8 leading-relaxed"
            >
              Mergulhe em um universo literário fascinante e poético. Descubra a obra de um dos maiores poetas do Brasil e deixe-se envolver pela sensibilidade única de suas palavras.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Descubra sua Obra
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Conheça o Poeta
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-800">100+</div>
                <div className="text-sm text-secondary-600">Poemas Publicados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-800">70+</div>
                <div className="text-sm text-secondary-600">Anos de Carreira</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-800">∞</div>
                <div className="text-sm text-secondary-600">Inspiração</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 4, repeat: Infinity }
                }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50"
              >
                <div className="text-center">
                  <Quote className="h-12 w-12 text-accent-500 mx-auto mb-6" />
                  <blockquote className="text-2xl font-serif text-secondary-800 italic leading-relaxed mb-6">
                    "As palavras têm o poder de transformar, emocionar e eternizar momentos. Na poesia, encontramos a essência da alma humana."
                  </blockquote>
                  <cite className="text-lg font-semibold text-secondary-600">— Mario Quintana</cite>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-accent-500 text-white p-4 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                <Star className="h-8 w-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary-500 text-white p-4 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  transition: { duration: 3, repeat: Infinity, delay: 1 }
                }}
              >
                <Heart className="h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="flex flex-col items-center text-secondary-600">
          <span className="text-sm mb-2">Role para descobrir mais</span>
          <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                transition: { duration: 1.5, repeat: Infinity }
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}