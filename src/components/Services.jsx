import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Sparkles, Quote, Users, Award, Clock } from 'lucide-react'

export default function Services() {
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

  const collections = [
    {
      title: "Poemas do Cotidiano",
      description: "Versos que transformam momentos simples em experiências extraordinárias, revelando a beleza escondida no dia a dia.",
      icon: Heart,
      features: ["50+ poemas selecionados", "Reflexões sobre a vida", "Linguagem acessível", "Emoções universais"],
      gradient: "from-rose-500 to-pink-600",
      delay: 0
    },
    {
      title: "Reflexões Profundas",
      description: "Uma jornada através dos pensamentos mais introspectivos do poeta, explorando temas existenciais e filosóficos.",
      icon: Star,
      features: ["Pensamentos filosóficos", "Questionamentos existenciais", "Sabedoria poética", "Insights únicos"],
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.2
    },
    {
      title: "Amor e Sentimentos",
      description: "Explore as mais belas expressões sobre amor, paixão e sentimentos humanos através da sensibilidade única do poeta.",
      icon: Sparkles,
      features: ["Poemas românticos", "Expressões de sentimento", "Metáforas tocantes", "Linguagem do coração"],
      gradient: "from-purple-500 to-violet-600",
      delay: 0.4
    }
  ]

  const benefits = [
    {
      icon: Quote,
      title: "Inspiração Diária",
      description: "Encontre motivação e inspiração para enfrentar os desafios do dia a dia"
    },
    {
      icon: Users,
      title: "Conexão Humana",
      description: "Conecte-se com sentimentos universais que unem toda a humanidade"
    },
    {
      icon: Award,
      title: "Qualidade Literária",
      description: "Desfrute da mais alta qualidade poética da literatura brasileira"
    },
    {
      icon: Clock,
      title: "Legado Atemporal",
      description: "Acesse um tesouro literário que permanece relevante através dos tempos"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-100/30 to-secondary-100/30"></div>
      
      <motion.div
        className="absolute top-32 left-16 text-accent-200"
        animate={{
          rotate: [0, 360],
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      >
        <BookOpen size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 text-secondary-200"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 4, repeat: Infinity }
        }}
      >
        <Quote size={80} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-accent-500/20 text-accent-700 rounded-full text-sm font-semibold mb-4">
              📖 Obra Literária
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary-800">Descubra a Obra de</span>
              <br />
              <span className="gradient-text">Mario Quintana</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Uma coleção extraordinária de poemas e reflexões que tocaram milhões de corações. 
              Mergulhe em um universo de palavras que transformam, inspiram e eternizam momentos.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {collections.map((collection, index) => {
            const IconComponent = collection.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover-lift group"
              >
                <div className={`h-32 bg-gradient-to-r ${collection.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 rounded-full p-2"
                    animate={{
                      rotate: [0, 360],
                      transition: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <Star className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary-800 mb-4 group-hover:text-accent-600 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {collection.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {collection.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: collection.delay + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${collection.gradient}`}></div>
                        <span className="text-secondary-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${collection.gradient} hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                  >
                    Explorar Coleção
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
              Por que Escolher a Obra de Mario Quintana?
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Descubra os benefícios únicos que apenas a sensibilidade poética de Mario Quintana pode oferecer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-accent-500 to-secondary-600 rounded-xl mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary-800 mb-3">{benefit.title}</h4>
                  <p className="text-secondary-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary-600 via-accent-600 to-secondary-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 3, repeat: Infinity }
                }}
                className="inline-block p-4 bg-white/20 rounded-full mb-6"
              >
                <BookOpen className="h-16 w-16" />
              </motion.div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Comece Sua Jornada Poética Hoje
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Não perca a oportunidade de se conectar com uma das vozes mais importantes 
                da literatura brasileira. Mergulhe no universo único de Mario Quintana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-secondary-800 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  Descubra Sua Obra Completa
                  <BookOpen className="ml-2 h-5 w-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-secondary-800 transition-all duration-300"
                >
                  Saiba Mais
                </motion.button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-75">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  <span>Qualidade Garantida</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  <span>Emoção Verdadeira</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  <span>Legado Reconhecido</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute top-10 right-10 text-white/20"
            animate={{
              rotate: [0, 360],
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          >
            <Quote size={120} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-secondary-800 mb-4">Perguntas Frequentes</h4>
            <div className="space-y-4 text-left">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                  <span className="font-semibold text-secondary-800">Como posso acessar a obra completa?</span>
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="p-4 text-secondary-600">
                  Toda a obra de Mario Quintana está disponível através de nossos canais oficiais, garantindo autenticidade e qualidade na experiência de leitura.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                  <span className="font-semibold text-secondary-800">Qual a melhor forma de começar a leitura?</span>
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="p-4 text-secondary-600">
                  Recomendamos começar pelos "Poemas do Cotidiano", que oferecem uma introdução perfeita ao estilo único e acessível do poeta.
                </div>
              </details>
              
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                  <span className="font-semibold text-secondary-800">A obra é adequada para todas as idades?</span>
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="p-4 text-secondary-600">
                  Sim! A poesia de Mario Quintana transcende barreiras etárias, sendo apreciada tanto por jovens quanto por adultos de todas as idades.
                </div>
              </details>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}