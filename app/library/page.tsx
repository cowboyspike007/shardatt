import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { libraryStats } from "@/lib/data";

export default function LibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Academic resources for study and discovery"
        text="A quiet, supportive library with books, journals and reference material for teacher education students."
        image="/assets/img/Library.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Library Collection"
            text="Resources are organized to support coursework, research, lesson preparation and independent reading."
          />
          <div className="grid grid-3">
            {libraryStats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <Image src={stat.image} alt="" width={48} height={48} />
                <div>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
