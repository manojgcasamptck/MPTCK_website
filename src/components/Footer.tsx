import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { navigation, departments } from "@/lib/data";
import { siteConfig } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-5">
              {siteConfig.shortName}
            </h3>
            <p className="text-slate-300 leading-7 text-base mb-6">
              Premier Government Controlled Polytechnic under IHRD, Kerala.
              Empowering future engineers since {siteConfig.established}.
            </p>
            <div className="flex gap-3">

{/* Instagram */}

<a
  href="https://www.instagram.com/mptckarunagappally"
  target="_blank"
  rel="noopener noreferrer"
  className="
w-11
h-11
bg-slate-800
rounded-xl
flex
items-center
justify-center
hover:bg-pink-600
hover:scale-110
transition
"
  aria-label="Instagram"
>
  <FaInstagram size={20} />
</a>

{/* Facebook */}

<a
  href="https://www.facebook.com/people/Model-Polytechnic-College-Karunagappally/100063456789012/"
  target="_blank"
  rel="noopener noreferrer"
  className="
w-11
h-11
bg-slate-800
rounded-xl
flex
items-center
justify-center
hover:bg-blue-600
hover:scale-110
transition
"
  aria-label="Facebook"
>
  <FaFacebookF size={20} />
</a>

</div>
          </div>

          <div>
          <h4 className="text-white text-xl font-bold mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="
                        text-slate-300
                        hover:text-yellow-400
                        transition
                        text-base 
                        ">
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
                    className="
                      text-slate-300
                      hover:text-yellow-400
                      transition
                      text-base
                      "
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-base text-slate-300">
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

        <div
            className="
            border-t
            border-slate-700
            mt-14
            pt-8
            text-center
            text-slate-400
            text-sm
            "
            >
          <p>&copy; {new Date().getFullYear()} Model Polytechnic College Karunagappally. All rights reserved.</p>
          <p className="mt-2 text-slate-500 text-sm">IHRD | SBTE Kerala Affiliated | AICTE Approved</p>
        </div>
      </div>
    </footer>
  );
}
