import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { galleryGroups } from "@/lib/data";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photos"
        title="Campus gallery"
        text="Classrooms, labs, library, seminar hall and open spaces from the college campus."
        image="/assets/img/shutterstock_366653684.jpg"
      />
      <section className="section">
        <div className="section-inner">
          {galleryGroups.map((group) => (
            <section className="gallery-section" key={group.title}>
              <h2>{group.title}</h2>
              <div className="gallery-grid">
                {group.images.map((image) => (
                  <div className="gallery-tile" key={image}>
                    <Image src={image} alt={`${group.title} photo`} fill sizes="(max-width: 920px) 50vw, 33vw" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
