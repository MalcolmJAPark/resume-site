import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Phone, MapPin, GraduationCap, Globe, Briefcase, Code2, ExternalLink, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import profileImg from '@/assets/profile.webp'

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
      <span className="inline-block h-2 w-2 rounded-full bg-accent"></span>
      <span>{title}</span>
    </motion.h2>
    {children}
  </section>
)

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-accent text-accent px-3 py-1 text-sm font-medium bg-accent/5">{children}</span>
)

const Anchor = ({ href, children }) => (
  <a href={href} className="inline-flex items-center gap-1 underline-offset-2 hover:underline text-accent" target="_blank" rel="noreferrer">
    {children} <ExternalLink className="h-4 w-4" />
  </a>
)

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#home" className="font-semibold tracking-tight text-accent">Jooahn (Malcolm) Park</a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#education" className="hover:text-accent">Education</a>
        <a href="#skills" className="hover:text-accent">Skills</a>
        <a href="#experience" className="hover:text-accent">Experience</a>
        <a href="#projects" className="hover:text-accent">Projects</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <a href="mailto:jop015@ucsd.edu" title="Email"><Button variant="outline" className="h-9 px-3"><Mail className="h-4 w-4" /></Button></a>
        <a href="tel:+16196667036" title="Call"><Button variant="outline" className="h-9 px-3"><Phone className="h-4 w-4" /></Button></a>
        <a href="https://github.com/MalcolmJAPark" target="_blank" rel="noreferrer" title="GitHub"><Button variant="outline" className="h-9 px-3"><Github className="h-4 w-4" /></Button></a>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <section id="home" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="flex items-start gap-6">
        <img src={profileImg} alt="Profile photo of Jooahn (Malcolm) Park"
          className="w-[160px] h-[200px] md:w-[180px] md:h-[220px] rounded-xl object-cover shadow" decoding="async" loading="eager" />
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-3 py-1 text-xs mb-5">
            <Globe className="h-3.5 w-3.5 text-accent" /> UC San Diego · La Jolla, CA
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent accent-gradient">Jooahn (Malcolm) Park</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            B.S. Mathematics (Computer Science focus) · Data Science minor · UC San Diego (Sep 2025). I build reliable data & ML tools and clean, accessible web experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects"><Button size="lg" className="rounded-2xl">See Projects</Button></a>
            <a href="#contact"><Button size="lg" variant="outline" className="rounded-2xl">Get in touch</Button></a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Pill><Languages className="h-4 w-4 mr-1" /> English · Korean (fluent)</Pill>
            <Pill><Code2 className="h-4 w-4 mr-1" /> Python · Java · SQL · C++ (working) · Web Design</Pill>
            <Pill>Knowledgeable in DataFrames and Pandas</Pill>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

const Education = () => (
  <Section id="education" title="Education">
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="rounded-2xl hover:shadow-accent">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-accent" /> University of California, San Diego</span>
            <span className="text-sm font-normal text-muted-foreground">Sep 2025 · La Jolla, CA</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="font-medium">B.S. in Mathematics (Computer Science focus) · Data Science minor</div>
          <div className="text-sm text-muted-foreground">Relevant: Algorithms, Probability/Stats, ML, Data Engineering, Econometrics.</div>
        </CardContent>
      </Card>
      <Card className="rounded-2xl hover:shadow-accent">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-accent" /> Taejon Christian International School (TCIS)</span>
            <span className="text-sm font-normal text-muted-foreground">May 2021 · Daejeon, South Korea</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="font-medium">International Baccalaureate Diploma</div>
          <div>GPA: 3.79/4.00</div>
          <div className="text-sm">SAT I: Math 800 · Reading & Writing 750</div>
          <div className="text-sm">SAT II: Math Level 2: 800 · Physics: 720</div>
          <div className="text-sm">TOEFL iBT: 114</div>
        </CardContent>
      </Card>
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Programming</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            <li>Python (numpy, pandas, scipy, matplotlib, scikit-learn, hmmlearn)</li>
            <li>Java</li>
            <li>SQL (PostgreSQL, SQLite)</li>
            <li>C++ (working knowledge)</li>
            <li>Web: React, Tailwind, basic backend</li>
            <li>Microsoft Excel</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Data & ML</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            <li>Dataframes, feature engineering, visualization</li>
            <li>Probabilistic modeling, HMMs, EM algorithm</li>
            <li>Time series analysis, Monte Carlo simulation</li>
            <li>Actuarial reserving methods (IBNR, chain ladder)</li>
            <li>Graph theory and optimization for algorithms</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Communication</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="list-disc pl-5 space-y-1">
            <li>Fluent in English & Korean</li>
            <li>Technical writing & documentation</li>
            <li>Cross-functional collaboration with engineers</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </Section>
)

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="grid gap-6">
      <Card className="rounded-2xl">
        <CardHeader>
