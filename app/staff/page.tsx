import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { faculty, integratedFaculty } from "@/lib/data";

function StaffGrid({ people }: { people: string[][] }) {
  return (
    <div className="grid grid-2">
      {people.map(([name, role, qualification, subject, image]) => (
        <article className="staff-card" key={`${name}-${subject}`}>
          <Image src={image} alt={name} width={82} height={82} />
          <div>
            <h3>{name}</h3>
            <p><strong>{role}</strong> · {subject}</p>
            <p>{qualification}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff"
        title="Teaching and academic support team"
        text="Faculty details are presented in a mobile-friendly format while preserving the original staff information focus."
        image="/assets/img/classroom02.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="B.Ed College Staff" text="Selected teaching staff details from the B.Ed college." />
          <StaffGrid people={faculty} />
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="Integrated College Staff" text="Teaching staff for the B.A.-B.Ed. and B.Sc.-B.Ed. integrated college." />
          <StaffGrid people={integratedFaculty} />
        </div>
      </section>
    </>
  );
}
