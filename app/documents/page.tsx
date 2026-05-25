import { Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { documents } from "@/lib/data";

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Official college documents"
        text="Registration, NOC, affiliation, staff, financial and infrastructure documents in one responsive directory."
        image="/assets/img/building01.jpg"
      />
      <section className="section">
        <div className="section-inner">
          <SectionHeader title="Document Downloads" text="Open each document in a new tab from the official Drive links." />
          <div className="grid grid-3">
            {documents.map((doc) => (
              <article className="document-card" key={doc.title}>
                <Download size={30} color="#257061" />
                <h3>{doc.title}</h3>
                <ul>
                  {doc.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noreferrer">{label}</a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
