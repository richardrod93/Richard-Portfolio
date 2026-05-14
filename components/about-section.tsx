"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const experiences = [
  {
    title: "Software Developer & IT Intern",
    company: "QXC Communications, Inc",
    location: "Boca Raton, FL",
    period: "Dec 2022 – Dec 2023",
    description:
      "Built customer intake flows, updated PostgreSQL schemas, and collaborated with engineers to troubleshoot IoT-connected radio tower data.",
  },
]

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Florida Atlantic University",
  location: "Boca Raton, FL",
  graduation: "December 2024",
  gpa: "3.5, Cum Laude",
}

const certifications = [
  "Next.js App Development (Official Next.js Course, 2025)",
  "Data Analytics (FAU)",
  "AWS Cloud Practitioner (in progress)",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A passionate developer bridging performance, aesthetics, and functionality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">01</span>
                  </span>
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  I&apos;m a recent Computer Science graduate from Florida Atlantic University with hands-on
                  experience building full-stack web applications. I bring strong foundations in data
                  analytics, backend systems, and cloud architecture. Beyond coding, I enjoy mountain
                  biking and capturing moments through photography.
                </p>
              </div>

              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <div>
                  <h4 className="font-medium text-foreground">{education.degree}</h4>
                  <p className="text-muted-foreground">{education.school}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {education.graduation} • GPA: {education.gpa}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Experience & Certifications */}
            <div className="space-y-6">
              {/* Experience */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Experience
                </h3>
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-foreground">{exp.title}</h4>
                    <p className="text-primary text-sm">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Certifications */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
