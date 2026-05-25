import Image from "next/image";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  text: string;
  image: string;
};

export function PageHero({ title, eyebrow, text, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="page-hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
