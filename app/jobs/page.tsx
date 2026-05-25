import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const formUrl =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAANVc_l9UNEc3T0EwRE1SV0k1NThVVTBYNlJXRjFLRy4u";

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Apply for teaching opportunities"
        text="Join a college committed to spreading the light of knowledge through responsible, student-centered teaching."
        image="/assets/img/seminarhall.jpg"
      />
      <section className="section">
        <div className="section-inner split">
          <div className="iframe-wrap">
            <iframe title="Sharda T.T. College job application form" src={`${formUrl}&embed=true`} loading="lazy" />
          </div>
          <div className="panel">
            <h2>Apply For Job</h2>
            <p>
              At Sharda T.T. College, teaching is a responsibility and an achievement. Teachers work on diverse academic platforms where strong academic minds meet student potential.
            </p>
            <p>
              The college invites teachers with first-rate credentials, experience, communication skills and required professional qualifications.
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
