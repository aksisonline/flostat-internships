'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/utils/animations'

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div {...slideIn}>
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/imgs/logo_flostat.png" alt="FloStat Logo" width={40} height={40} className="rounded" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              FloStat Internships
            </span>
            </Link>
        </motion.div>
        <motion.nav 
          className="hidden md:flex items-center gap-6"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          {['Home', 'Programs', 'Timeline', 'Syllabus'].map((item, i) => (
            <motion.div key={item} variants={fadeIn}>
              <Link
                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                className="text-sm font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  )
}

