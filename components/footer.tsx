"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Richard Rodriguez. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            Built with{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">Tailwind CSS</span>, and{" "}
            <span className="text-primary">Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
