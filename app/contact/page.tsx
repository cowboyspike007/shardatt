import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { address } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Sharda T.T. College"
        text="For admission, academic and administrative enquiries, contact the college office or visit the campus at Chomu, Jaipur."
        image="/assets/img/Contact.jpg"
      />
      <section className="section">
        <div className="section-inner split">
          <div className="iframe-wrap">
            <iframe
              title="Map to Sharda T.T. College"
              loading="lazy"
              src="https://www.google.com/maps?q=Sharda%20T.T.%20College%20Udaipuria%20Mode%20Lohrwada%20Road%20Chomu%20Jaipur&z=11&output=embed"
            />
          </div>
          <div className="contact-list">
            <p><Phone size={22} /> <a href="tel:+919887089584">+91 9887089584</a></p>
            <p><Mail size={22} /> <a href="mailto:shardattcollege123@gmail.com">shardattcollege123@gmail.com</a></p>
            <p><MapPin size={22} /> <span>{address}</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
