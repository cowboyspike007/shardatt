import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { introText, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Sharda T.T. College"
        text="Sharda T.T. College provides a purposeful academic environment for teacher education, professional preparation and character formation."
        image="/assets/img/coverimg2.jpg"
      />
      <section className="section about-intro-section">
        <div className="section-inner about-intro">
          <div>
            <p className="eyebrow">About Us</p>
            <h2>Preparing teachers with knowledge, skill and values</h2>
          </div>
          <div>
            <p>
              The Sharda T.T. College is situated at N.H.-11, Udaipuria Mode, Lohrwada Road, Chomu, Jaipur, Rajasthan.
            </p>
            <p>{introText}</p>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="section-inner">
          <SectionHeader title="Our Values" text="The college encourages integrity, equity, creativity and excellence in every aspect of academic life." />
          <div className="grid grid-3">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <Image src={value.image} alt="" width={120} height={120} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
