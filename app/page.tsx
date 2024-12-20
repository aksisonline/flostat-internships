'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code2, Database, Layout, Smartphone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, stagger, scaleIn } from '@/utils/animations'

export default function Home() {
  const programs = [
    {
      title: "Web Dev Front End",
      icon: Layout,
      description: "Master modern web development with React, Next.js, and more",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Web Dev Full Stack",
      icon: Code2,
      description: "Learn end-to-end web development including backend technologies",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "App Dev Front End",
      icon: Smartphone,
      description: "Build beautiful mobile applications with React Native",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "App Dev Full Stack",
      icon: Database,
      description: "Complete mobile development including backend integration",
      gradient: "from-pink-600 to-rose-600"
    }
  ]

  const timeline = [
    {
      week: "Week 1-2",
      title: "Fundamentals",
      description: "Basic concepts, development environment setup, and core technologies"
    },
    {
      week: "Week 3-4",
      title: "Building Blocks",
      description: "Components, state management, and API integration"
    },
    {
      week: "Week 5-6",
      title: "Advanced Concepts",
      description: "Authentication, deployment, and best practices"
    },
    {
      week: "Week 7-8",
      title: "Project Phase",
      description: "Build a complete project from scratch"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-12 md:pb-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <motion.div 
          className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div className="text-white space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              variants={fadeIn}
            >
              Launch Your Tech Career
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100"
              variants={fadeIn}
            >
              Join our intensive internship program and learn from industry experts. 
              Build real-world projects and gain hands-on experience.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/apply">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group hover:scale-105 transition-transform"
                >
                  Apply Now 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="hidden lg:block"
            variants={scaleIn}
          >
            <Image
              src="/placeholder.svg"
              alt="Internship Program"
              width={600}
              height={400}
              className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 md:py-32">
        <motion.div 
          className="container mx-auto px-4"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Path
            </h2>
            <p className="text-muted-foreground">
              Select from our specialized programs designed to give you the skills needed in today's tech industry
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
          >
            {programs.map((program) => (
              <motion.div key={program.title} variants={scaleIn}>
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 md:py-32 bg-slate-50">
        <motion.div 
          className="container mx-auto px-4"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program Timeline
            </h2>
            <p className="text-muted-foreground">
              Our 8-week intensive program is designed to take you from basics to professional
            </p>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={stagger}
          >
            {timeline.map((item, index) => (
              <motion.div 
                key={item.week} 
                className="relative pl-8 pb-12 last:pb-0"
                variants={fadeIn}
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-600 to-transparent" />
                <div className="absolute left-[-8px] top-0 size-4 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                <div className="space-y-2 group">
                  <div className="font-medium text-blue-600">{item.week}</div>
                  <div className="font-semibold text-xl group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <motion.div 
          className="container mx-auto px-4 text-center"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">
            A FloStat Company Internship brought to you by Rebel Studios
          </p>
        </motion.div>
      </footer>
    </main>
  )
}

