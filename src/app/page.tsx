import { resumeData } from "@/data/resume";
import { Mail, MapPin, MoveUpRight, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { ScrambleText } from "@/components/ui/scramble-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { ParticleBackground } from "@/components/ui/particle-background";

export default function Home() {
  return (
    <div className="relative">
      {/* Particle Network Canvas */}
      <ParticleBackground />
      
      {/* Dark Mode Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(42,31,74,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(42,31,74,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_0%,transparent_100%)]"></div>
      
      {/* Purple Glowing Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(168,85,247,0.1)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_20%_70%,rgba(124,58,237,0.09)_0%,transparent_60%)]"></div>

      <main className="min-h-screen p-8 md:p-24 max-w-[1200px] mx-auto space-y-40 relative z-10 overflow-hidden">
        {/* HERO SECTION */}
        <section className="space-y-6 pt-12 md:pt-24 mt-8">
          <FadeIn>
            {/* Developer Badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#c084fc] border border-[#c084fc]/20 bg-[#c084fc]/10 px-3 py-1.5 rounded-full mb-6 tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="animate-pulse text-[8px]">●</span> SYSTEM_ONLINE
            </div>
            
            <h1 className="text-6xl md:text-[8rem] font-bold font-sans tracking-tighter text-foreground selection:bg-accent selection:text-white drop-shadow-lg leading-tight lg:-ml-1">
              <ScrambleText text={resumeData.name} />
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-xl md:text-3xl text-accent font-mono tracking-wide flex items-center gap-4 py-2">
              <span className="w-8 md:w-16 h-[1px] bg-accent"></span>
              {resumeData.title}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="pt-8 w-fit relative z-20">
            <MagneticButton>
              <a href={`mailto:${resumeData.contact.email}`} className="glow-btn">
                GET IN TOUCH <ArrowRight size={16} className="ml-2" />
              </a>
            </MagneticButton>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-8 pt-12 text-foreground/60 relative z-20">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors font-mono text-xs uppercase cursor-none">
                <Mail size={16} /> {resumeData.contact.email}
              </a>
              <div className="flex items-center gap-2 font-mono text-xs uppercase">
                <MapPin size={16} /> {resumeData.contact.location}
              </div>
              <a href={resumeData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent group transition-colors font-mono text-xs uppercase cursor-none">
                <span className="opacity-50">in/</span> {resumeData.contact.linkedin} <MoveUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
              </a>
              <a href={resumeData.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent group transition-colors font-mono text-xs uppercase cursor-none">
                <span className="opacity-50">gh/</span> {resumeData.contact.github} <MoveUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
              </a>
            </div>
          </FadeIn>
        </section>

      {/* EXPERIENCE */}
      <section className="space-y-12 border-t border-[#2a1f4a]/60 pt-16">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
            <span className="font-mono text-xs text-accent tracking-widest">01_WORK</span>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="space-y-16">
            {resumeData.experience.map((exp, i) => (
              <StaggerItem key={i}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
                  <div className="md:col-span-1 font-mono text-xs text-foreground/50 pt-2 uppercase">
                    {exp.date}
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground overflow-hidden">
                        <span className="inline-block relative">
                           {exp.role}
                        </span>
                      </h3>
                      <p className="text-md text-accent font-mono mt-1">{exp.company}</p>
                    </div>
                    <ul className="space-y-3 list-none">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm leading-relaxed text-foreground/70 relative before:content-['>'] before:absolute before:-left-5 before:text-accent/50 text-justify font-sans">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* PROJECTS (GLASSMORPHISM CARDS) */}
      <section className="space-y-12 border-t border-[#2a1f4a]/60 pt-16">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
            <span className="font-mono text-xs text-accent tracking-widest">02_BUILD</span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          {resumeData.projects.map((proj, i) => (
            <StaggerItem key={i} className="h-full">
              {/* @ts-ignore */}
              <a href={proj.link || "#"} target={proj.link ? "_blank" : undefined} rel={proj.link ? "noopener noreferrer" : undefined} className="block h-full group cursor-none">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04]">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{proj.name}</h3>
                      <MoveUpRight className="text-foreground/30 group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                    </div>
                    
                    <ul className="space-y-2 pt-2 list-none flex-grow">
                      {proj.bullets.slice(0, 3).map((bullet, j) => (
                        <li key={j} className="text-sm leading-relaxed text-foreground/70 relative before:content-['-'] before:absolute before:-left-4 before:text-accent/50">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-white/[0.05]">
                     <p className="font-mono text-xs text-accent/80 uppercase tracking-widest leading-relaxed">
                        {proj.tech.split(',').join(' · ')}
                     </p>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SKILLS MARQUEE */}
      <section className="space-y-12 border-t border-[#2a1f4a]/60 pt-16 relative">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
            <span className="font-mono text-xs text-accent tracking-widest">03_STACK</span>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="space-y-8 relative -mx-[100vw] px-[100vw] flex flex-col w-[300vw]">
            {resumeData.skills.map((skillGroup, i) => (
              <StaggerItem key={i}>
                <InfiniteMarquee 
                  items={skillGroup.items} 
                  reverse={i % 2 !== 0} 
                  speed={i % 2 === 0 ? "40s" : "45s"} 
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* LEADERSHIP */}
      <section className="space-y-12 border-t border-[#2a1f4a]/60 pt-24 pb-32">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Leadership</h2>
            <span className="font-mono text-xs text-accent tracking-widest">04_ORG</span>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="space-y-16">
            {resumeData.leadership.map((lead, i) => (
              <StaggerItem key={i}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1 font-mono text-xs text-foreground/50 pt-2 uppercase">
                    {lead.date}
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{lead.role}</h3>
                      <p className="text-md text-accent font-mono mt-1">{lead.organization}</p>
                    </div>
                    <ul className="space-y-3 list-none">
                      {lead.bullets.map((bullet, j) => (
                        <li key={j} className="text-sm leading-relaxed text-foreground/70 relative before:content-['>'] before:absolute before:-left-5 before:text-accent/50 text-justify font-sans">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
    </main>
    </div>
  );
}
