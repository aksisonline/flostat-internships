'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { motion } from 'framer-motion'
import { fadeIn, stagger, scaleIn } from '@/utils/animations'
import { useState } from 'react'

export default function ApplyPage() {
  const [selectedProgram, setSelectedProgram] = useState('')

  const programs = [
    {
      id: "web-frontend",
      title: "Web Dev Front End",
      price: "$499",
      duration: "8 weeks",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "web-fullstack",
      title: "Web Dev Full Stack",
      price: "$699",
      duration: "8 weeks",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: "app-frontend",
      title: "App Dev Front End",
      price: "$549",
      duration: "8 weeks",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: "app-fullstack",
      title: "App Dev Full Stack",
      price: "$749",
      duration: "8 weeks",
      gradient: "from-pink-600 to-rose-600"
    }
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      
      <motion.div 
        className="container mx-auto px-4 pt-32 pb-12"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            variants={fadeIn}
          >
            Apply for Internship
          </motion.h1>
          
          {/* Program Selection */}
          <motion.div 
            className="mb-12"
            variants={fadeIn}
          >
            <h2 className="text-xl font-semibold mb-6">Select Your Program</h2>
            <RadioGroup value={selectedProgram} onValueChange={setSelectedProgram}>
              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                variants={stagger}
              >
                {programs.map((program) => (
                  <motion.div key={program.id} variants={scaleIn}>
                    <Card 
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedProgram === program.id 
                          ? 'ring-2 ring-blue-600 shadow-lg' 
                          : 'hover:scale-105'
                      }`}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <RadioGroupItem
                            value={program.id}
                            id={program.id}
                          />
                          <label htmlFor={program.id}>{program.title}</label>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`inline-block px-4 py-1 rounded-full text-white bg-gradient-to-r ${program.gradient} mb-2`}>
                          {program.price}
                        </div>
                        <p className="text-muted-foreground">{program.duration}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </RadioGroup>
          </motion.div>

          {/* Application Form */}
          <motion.form 
            className="space-y-8 bg-white p-8 rounded-lg shadow-lg"
            variants={fadeIn}
          >
            <motion.div 
              className="grid gap-6"
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  required 
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
              
              <motion.div variants={fadeIn} className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
              
              <motion.div variants={fadeIn} className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  required 
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={stagger}
            >
              <motion.h3 
                className="text-lg font-semibold"
                variants={fadeIn}
              >
                Education Details
              </motion.h3>
              
              <motion.div variants={fadeIn} className="grid gap-2">
                <Label htmlFor="university">University/College</Label>
                <Input 
                  id="university" 
                  required 
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
              
              <motion.div variants={fadeIn} className="grid gap-2">
                <Label htmlFor="degree">Degree</Label>
                <Input 
                  id="degree" 
                  required 
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
              
              <motion.div variants={fadeIn} className="grid gap-2">
                <Label htmlFor="specialization">Specialization (Optional)</Label>
                <Input 
                  id="specialization" 
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Button 
                type="submit" 
                className="w-full group hover:scale-105 transition-transform"
              >
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </main>
  )
}

