import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const formUrl =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAANVc_l9UNEc3T0EwRE1SV0k1NThVVTBYNlJXRjFLRy4u";

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Career Opportunities"
        text="Sharda T.T. College invites qualified and dedicated professionals to contribute to teacher education and student development."
        image="/assets/img/seminarhall.jpg"
      />
      <section className="section">
        <div className="section-inner split">
          <div className="iframe-wrap">
            <iframe title="Sharda T.T. College job application form" src={`${formUrl}&embed=true`} loading="lazy" />
          </div>
          <div className="panel">
            <h2>Apply for a Position</h2>
            <p>
              Teaching at Sharda T.T. College is a professional responsibility rooted in academic commitment, discipline and service to learners.
            </p>
            <p>
              Applicants with the required qualifications, teaching aptitude, communication skills and commitment to institutional values may submit their details through the application form.
            </p>
            <a className="button" href={formUrl} target="_blank" rel="noreferrer">
              Open Form <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
