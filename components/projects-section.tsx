"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ShoppingCart, Activity } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Web Application",
    description:
      "Full-stack eCommerce website with user authentication, protected routes, and responsive layouts using Next.js App Router.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/richardrod93/LearnNextJS",
    link: null,
    highlights: [
      "Secure account creation/login flows",
      "Dynamic routing and middleware-based access control",
      "Scalable folder organization for client reuse",
    ],
    icon: ShoppingCart,
  },
  {
    title: "IoT Medical Device Dashboard",
    description:
      "Virtual EKG web interface displaying live sensor data from a custom IoT medical device for patient monitoring.",
    tech: ["React", "IoT", "Real-time Data", "Medical Devices"],
    link: "https://www.fau.edu/engineering/senior-design/projects/summer2024/smart-suction-pleur-evac-device/",
    highlights: [
      "Live sensor data transmission",
      "Accurate real-time readings processing",
      "FAU Senior Design Project",
    ],
    icon: Activity,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="p-6 rounded-2xl bg-card border border-border h-full flex flex-col transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  >
                    <project.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-pretty">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
