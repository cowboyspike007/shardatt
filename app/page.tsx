import { ArrowRight, CalendarDays, GraduationCap, Lightbulb, MessageSquareQuote, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { courses, introText, newsLinks } from "@/lib/data";

const quickLinks = [
  { title: "Admission", href: "/courses", image: "/assets/img/classroom03.jpg" },
  { title: "Photos", href: "/gallery", image: "/assets/img/playground01.jpg" },
  { title: "Contact Us", href: "/contact", image: "/assets/img/building01.jpg" }
];

const commitments = [
  {
    title: "Mission",
    icon: Target,
    text:
      "To prepare responsible teachers who combine subject knowledge, classroom skill, empathy and ethical practice so every learner can feel seen, supported and challenged."
  },
  {
    title: "Vision",
    icon: Lightbulb,
    text:
      "To grow as a teacher education institution known for thoughtful pedagogy, inclusive learning, academic discipline and graduates who strengthen schools and communities."
  },
  {
    title: "Message by Management",
    icon: MessageSquareQuote,
    text:
      "To the new batch, welcome to a profession that shapes lives quietly and deeply. Use your years here to ask better questions, build strong habits, respect every learner and become the kind of teacher students remember with gratitude."
  }
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image src="/assets/img/coverimg1.jpg" alt="Sharda T.T. College campus" fill priority sizes="100vw" />
        <div className="home-hero-content">
          <p className="eyebrow">Teacher education in Chomu, Jaipur</p>
          <h1>Sharda T.T. College</h1>
          <p>
            Preparing capable, thoughtful teachers through B.Ed, B.A.-B.Ed and B.Sc.-B.Ed programs.
          </p>
          <Link className="button" href="/courses">
            Explore Courses <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <div className="panel">
            <p className="eyebrow">Welcome</p>
            <h2>Learning spaces built for future teachers</h2>
            <p>{introText}</p>
            <p>
              The campus is situated at Udaipuria Mode, Lohrwada Road, Chomu, Jaipur. Academic work is supported by classrooms, labs, a library, seminar spaces and outdoor facilities.
            </p>
          </div>
          <aside className="panel">
            <CalendarDays size={28} color="#c38b2a" />
            <h3>News and Events</h3>
            <div className="news-list">
              {newsLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Programs"
            title="Courses Offered"
            text="Choose from professional and integrated teacher education pathways."
          />
          <div className="grid grid-3">
            {courses.map((course) => (
              <article className="course-card" key={course.name}>
                <GraduationCap size={32} color="#257061" />
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <div><span>Duration</span><strong>{course.duration}</strong></div>
                  <div><span>Intake</span><strong>{course.intake}</strong></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Purpose"
            title="Mission, Vision and Welcome"
            text="A clear academic direction for students beginning their teacher education journey."
          />
          <div className="grid grid-3">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <article className="commitment-card" key={item.title}>
                  <Icon size={30} color="#257061" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section quick-section">
        <div className="section-inner grid grid-3 quick-grid">
          {quickLinks.map((item) => (
            <Link className="card quick-card" href={item.href} key={item.title}>
              <div className="card-image">
                <Image src={item.image} alt="" fill sizes="(max-width: 920px) 100vw, 33vw" />
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <span>View details <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
