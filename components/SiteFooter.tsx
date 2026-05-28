import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <Image src="/assets/img/logo.png" alt="" width={54} height={54} />
            <strong>Sharda T.T. College</strong>
          </div>
          <p>
            A teacher education institution committed to academic excellence, professional preparation and value-based learning.
          </p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-contact">
          <p><MapPin size={18} /> N.H.-11, Udaipuria Mode, Lohrwada Road, Chomu, Jaipur, Rajasthan 303702</p>
          <p><Phone size={18} /> <a href="tel:+919887089584">+91 9887089584</a></p>
          <p><Mail size={18} /> <a href="mailto:shardattcollege123@gmail.com">shardattcollege123@gmail.com</a></p>
        </div>
      </div>
      <small>Sharda T.T. College © 2026</small>
    </footer>
  );
}
