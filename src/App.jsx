import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Phone, MapPin, GraduationCap, Globe, Briefcase, Code2, ExternalLink, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
    >
      {title}
    </motion.h2>
    {children}
  </section>
)

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">{children}</span>
)

const Anchor = ({ href, children }) => (
  <a href={href} className="inline-flex items-center gap-1 underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
    {children} <ExternalLink className="h-4 w-4" />
  </a>
)

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Jooahn (Malcolm) Park</a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:opacity-80">About</a>
        <a href="#education" className="hover:opacity-80">Education</a>
        <a href="#skills" className="hover:opacity-80">Skills</a>
        <a href="#experience" className="hover:opacity-80">Experience</a>
        <a href="#projects" className="hover:opacity-80">Projects</a>
        <a href="#contact" className="hover:opacity-80">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <a href="mailto:jop015@ucsd.edu" title="Email">
          <Button variant="outline" className="h-9 px-3"><Mail className="h-4 w-4" /></Button>
        </a>
        <a href="tel:+16196667036" title="Call">
          <Button variant="outline" className="h-9 px-3"><Phone className="h-4 w-4" /></Button>
        </a>
        <a href="https://github.com/MalcolmJAPark" target="_blank" rel="noreferrer" title="GitHub">
          <Button variant="outline" className="h-9 px-3"><Github className="h-4 w-4" /></Button>
        </a>
      </div>
    </div>
  </header>
)

const Hero = () => (
  <section id="home" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-5">
        <Globe className="h-3.5 w-3.5" /> UC San Diego · La Jolla, CA
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
        Jooahn (Malcolm) Park
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
        <Pill>knowledgeable in</Pill>
      </div>
    </motion.div>
  </section>
)

const Education = () => (
  <Section id="education" title="Education">
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><GraduationCap className="h-5 w-5" /> University of California, San Diego</span>
            <span className="text-sm font-normal text-muted-foreground">Sep 2025 · La Jolla, CA</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="font-medium">B.S. in Mathematics (Computer Science focus) · Data Science minor</div>
          <div>GPA: 3.002 (one class remaining)</div>
          <div className="text-sm text-muted-foreground">Relevant: Algorithms, Probability/Stats, ML, Data Engineering, Econometrics.</div>
        </CardContent>
      </Card>
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Taejon Christian International School (TCIS)</span>
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
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Briefcase className="h-5 w-5" /> Beflex Inc — Intern / Research Assistant</span>
            <span className="text-sm font-normal text-muted-foreground">Oct 2019 – Mar 2020</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>
            Contributed to wearable technology R&D by reviewing products and writing performance reports. Collaborated with bio & mechanical engineers to analyze GAIT characteristics to improve distance, speed, step-count, incline/decline, and caloric estimation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built analysis pipelines to evaluate device accuracy across activities.</li>
            <li>Translated findings into actionable recommendations for firmware teams.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Briefcase className="h-5 w-5" /> COVID Translate — Team Member</span>
            <span className="text-sm font-normal text-muted-foreground"><Anchor href="https://covidtranslate.org/">covidtranslate.org</Anchor></span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>
            Participated in translating official Korean CDC documents into English, Russian, French, and Spanish to broaden access to critical public health information during COVID-19.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Helped program the main homepage and publish translated documents.</li>
            <li>Coordinated with a distributed team to ensure quality and speed.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2"><Briefcase className="h-5 w-5" /> current ai — News Aggregator (Project Member)</span>
            <span className="text-sm font-normal text-muted-foreground">YC outreach & initial funding</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>
            Built a news aggregator leveraging AI to summarize articles from outlets with diverse political leanings; combined multiple viewpoints to reduce bias and present balanced coverage.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Automated scraper scripts to collect and normalize article data.</li>
            <li>Designed summarization pipelines and bias-aware ranking heuristics.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </Section>
)

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="rounded-2xl h-full">
        <CardHeader>
          <CardTitle>Dynamic Claims Modeling with HMMs for Reserving</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <p>
            <Anchor href="https://github.com/MalcolmJAPark/Dynamic-Claims-Modeling-with-Hidden-Markov-Models-for-Enhanced-Reserving-Accuracy">GitHub Repository</Anchor>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identified latent risk states from insurance claims using HMMs with state-dependent Poisson (frequency) and lognormal (severity).</li>
            <li>Processed FEMA NFIP claims (&gt;2M records) with SQL and Python for policy-level quarterly aggregation and outlier handling.</li>
            <li>Trained via EM to maximize log-likelihood; forecasted future counts/losses with Monte Carlo simulations.</li>
            <li>Estimated IBNR reserves using simulated reporting delays; compared against chain-ladder reserving.</li>
            <li>Delivered predictive reserve distributions (means, percentiles) and visual analytics to quantify uncertainty.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            <Pill>Python</Pill>
            <Pill>numpy/pandas</Pill>
            <Pill>scipy</Pill>
            <Pill>matplotlib</Pill>
            <Pill>hmmlearn</Pill>
            <Pill>SQL</Pill>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl h-full">
        <CardHeader>
          <CardTitle>current ai — Multi-view News Summarizer</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <ul className="list-disc pl-5 space-y-1">
            <li>Web scrapers + summarizers to present balanced, non-partisan digests.</li>
            <li>Bias-aware blending of viewpoints; clean UI for fast scanning.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            <Pill>Python</Pill>
            <Pill>BeautifulSoup/Requests</Pill>
            <Pill>NLP</Pill>
            <Pill>React</Pill>
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
)

const About = () => (
  <Section id="about" title="About">
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <p className="text-base leading-relaxed">
          I'm a recent UC San Diego graduate (B.S. Mathematics with a focus in Computer Science, Data Science minor) passionate about building data-intensive systems that are both rigorous and usable. I enjoy probabilistic modeling, interpretable ML, and shipping polished web tools. I speak English and Korean fluently. Outside of work, I am an avid reader and enjoy jogging. I am also pursuing SOA examination certifications to further my actuary studies.
        </p>
      </div>
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Quick Facts</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Diego, CA</div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> jop015@ucsd.edu · parkjamalcolm@icloud.com</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (619) 666-7036</div>
          <div className="flex items-center gap-2"><Github className="h-4 w-4" /> <Anchor href="https://github.com/MalcolmJAPark">github.com/MalcolmJAPark</Anchor></div>
        </CardContent>
      </Card>
    </div>
  </Section>
)

const Contact = () => (
  <Section id="contact" title="Contact">
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Let’s connect</h3>
            <p className="text-sm text-muted-foreground">
              The fastest way to reach me is by email. I’m open to roles in data/ML engineering, software engineering, and quant-ish analytics.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="mailto:jop015@ucsd.edu"><Button className="rounded-2xl"><Mail className="h-4 w-4 mr-2"/>Email</Button></a>
              <a href="tel:+16196667036"><Button variant="outline" className="rounded-2xl"><Phone className="h-4 w-4 mr-2"/>Call</Button></a>
              <a href="https://github.com/MalcolmJAPark" target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Github className="h-4 w-4 mr-2"/>GitHub</Button></a>
            </div>
          </div>
          <form action={`mailto:jop015@ucsd.edu`} method="post" encType="text/plain" className="space-y-3">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input id="name" name="name" className="border rounded-xl px-3 py-2" placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="border rounded-xl px-3 py-2" placeholder="you@example.com" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="border rounded-xl px-3 py-2 min-h-[120px]" placeholder="Hello!" required />
            </div>
            <Button type="submit" className="rounded-2xl">Send</Button>
            <p className="text-xs text-muted-foreground">Submitting opens your mail client via <code>mailto:</code> for privacy-friendly, serverless messaging.</p>
          </form>
        </div>
      </CardContent>
    </Card>
  </Section>
)

const Footer = () => (
  <footer className="border-t mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4" /> UC San Diego · La Jolla, CA
      </div>
      <div className="text-muted-foreground">© {new Date().getFullYear()} Jooahn (Malcolm) Park. All rights reserved.</div>
    </div>
  </footer>
)

const PrintBar = () => (
  <div className="hidden print:block text-sm text-center py-2">
    Printable resume generated from site — for latest, visit <span className="underline">github.com/MalcolmJAPark</span>
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <PrintBar />
    </div>
  )
}
