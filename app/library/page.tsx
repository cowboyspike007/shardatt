import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { libraryStats } from "@/lib/data";

export default function LibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Library"
        title="Library and Learning Resources"
        text="The college library supports teaching, learning and research through books, journals and reference material for teacher education."
        image="/assets/img/Library.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader
            title="Library Collection"
            text="The collection is maintained to support coursework, lesson planning, research orientation and independent study."
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
