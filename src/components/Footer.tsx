import Link from "next/link";
import { Phone, Mobile, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { navigation, departments } from "@/lib/data";
import { siteConfig } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4 text-gold-400">
              {siteConfig.shortName}
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              Premier Government Controlled Polytechnic under IHRD, Kerala.
              Empowering future engineers since {siteConfig.established}.
            </p>
            <div className="flex gap-3">

{/* Instagram */}

<a
  href="https://www.instagram.com/mptckarunagappally"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
  aria-label="Instagram"
>
  <FaInstagram size={20} />
</a>

{/* Facebook */}

<a
  href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
  aria-label="Facebook"
>
  <FaFacebookF size={20} />
</a>

</div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-200 text-sm hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Departments</h4>
            <ul className="space-y-2">
              {departments.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/departments/${d.slug}`}
                    className="text-primary-200 text-sm hover:text-gold-400 transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gold-400" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="shrink-0 text-gold-400" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="shrink-0 text-gold-400" />
                <span>{siteConfig.mobile}</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Model Polytechnic College Karunagappally. All rights reserved.</p>
          <p className="mt-1 text-xs">IHRD | SBTE Kerala Affiliated | AICTE Approved</p>
        </div>
      </div>
    </footer>
  );
}
