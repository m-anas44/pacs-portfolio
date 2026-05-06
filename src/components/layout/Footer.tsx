import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    // Path for Facebook 'f' logo
    svg: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    name: "Instagram",
    href: "#",
    // Path for Instagram square & circle
    svg: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    // Path for X (Twitter) logo
    svg: (
      <path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M13.232 10.768l6.768 -6.768" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 md:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-(--emerald-500) p-2 rounded-lg">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-gray-900 uppercase">
                PACS
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              Punjab Academy of Commerce & Sciences (PACS) is dedicated to
              providing quality education and board exam excellence for Class 8,
              Matric, and ICS students.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group p-2 flex items-center gap-3 text-slate-400 hover:text-emerald-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  {/* Custom SVG Wrapper */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transition-transform group-hover:scale-110"
                  >
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-gray-600 hover:text-primary text-sm transition-colors"
                >
                  Our Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/practicals"
                  className="text-gray-600 hover:text-primary text-sm transition-colors"
                >
                  Practical Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Levels */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6">
              Academic Levels
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-600 text-sm">Class 8</li>
              <li className="text-gray-600 text-sm">Matric (9th & 10th)</li>
              <li className="text-gray-600 text-sm">ICS (11th & 12th)</li>
              <li className="text-gray-600 text-sm">Board Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-gray-600 text-sm">
                  Main Branch, Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600 text-sm">info@pacs.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} Punjab Academy of Commerce & Sciences.
            All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
