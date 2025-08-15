import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Award, Heart, Users, PenTool, Globe } from 'lucide-react'

export default function About() {
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

  const achievements = [
    {
      icon: BookOpen,
      title: "Poeta Renomado",
      description: "Reconhecido como um dos maiores poetas do Brasil, com uma obra rica e diversificada que toca corações há décadas."
    },
    {
      icon: Award,
      title: "Legado Literário",
      description: "Suas obras continuam inspirando gerações, sendo estudadas em escolas e universidades por todo o país."
    },
    {
      icon: Heart,
      title: "Sensibilidade Única",
      description: "Capacidade ímpar de transformar sentimentos em versos, criando conexões profundas com seus leitores."
    },
    {
      icon: Users,
      title: "Impacto Social",
      description: "Suas palavras transcendem barreiras sociais, chegando a pessoas de todas as idades e classes sociais."
    },
    {
      icon: PenTool,
      title: "Estilo Inconfundível",
      description: "Desenvolveu uma linguagem poética única, misturando simplicidade e profundidade de forma magistral."
    },
    {
      icon: Globe,
      title: "Reconhecimento Nacional",
      description: "Celebrado em todo o Brasil, suas obras são traduzidas e apreciadas além das fronteiras nacionais."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/20 to-accent-100/20"></div>
      
      <motion.div
        className="absolute top-20 right-10 text-accent-200"
        animate={{
          rotate: [0, 360],
          transition: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        <PenTool size={80} />
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
              📚 Sobre o Poeta
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary-800">Mario Quintana:</span>
              <br />
              <span className="gradient-text">Um Legado Eterno</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Descubra a trajetória extraordinária de um dos poetas mais queridos do Brasil. 
              Uma vida dedicada à arte de transformar palavras em emoções e sentimentos em versos inesquecíveis.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <h3 className="text-3xl font-bold text-secondary-800 mb-6">A Essência de um Poeta</h3>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                Mario Quintana foi muito mais que um poeta; foi um observador sensível da vida, 
                capaz de encontrar beleza nos detalhes mais simples do cotidiano. Sua obra reflete 
                uma profunda compreensão da natureza humana e uma habilidade única de expressar 
                sentimentos universais através de palavras cuidadosamente escolhidas.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                Com uma carreira que se estendeu por mais de sete décadas, ele nos deixou um 
                tesouro literário que continua a inspirar e emocionar leitores de todas as idades. 
                Seus versos são uma ponte entre gerações, conectando corações através do tempo.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-accent-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-secondary-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-accent-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-secondary-600 font-medium">
                  Admirado por milhões de leitores
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent-500 to-secondary-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                  className="inline-block p-4 bg-white/20 rounded-full mb-4"
                >
                  <BookOpen className="h-12 w-12" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-4">Números que Inspiram</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    100+
                  </motion.div>
                  <div className="text-sm opacity-90">Poemas Publicados</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    70+
                  </motion.div>
                  <div className="text-sm opacity-90">Anos de Carreira</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm opacity-90">Livros Publicados</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    ∞
                  </motion.div>
                  <div className="text-sm opacity-90">Impacto Emocional</div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
                transition: { duration: 4, repeat: Infinity }
              }}
            >
              <Heart className="h-8 w-8 text-accent-500" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover-lift group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-block p-4 bg-gradient-to-br from-accent-500 to-secondary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-800 mb-3">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p className="text-secondary-600 leading-relaxed flex-grow">
                    {achievement.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-secondary-200">
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-accent-500 to-secondary-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Mergulhar na Poesia?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Descubra como as palavras de Mario Quintana podem transformar sua perspectiva 
              e tocar sua alma de maneiras inesperadas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary-800 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore a Obra Completa
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}