import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-[#bbbbbb] font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">About Tripshalla</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/aboutus" className="hover:text-white transition">About Us</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Policies</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policies</Link></li>
              <li><Link href="/copyright" className="hover:text-white transition">Copyright Policies</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt size={14} className="text-gray-400" />
                <a href="tel:+917454875874" className="hover:text-white transition">+91 7454875874</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope size={14} className="text-gray-400" />
                <a href="mailto:tripshalla@gmail.com" className="hover:text-white transition">tripshalla@gmail.com</a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition pl-7 block">Partner With Tripshalla</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Social</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="flex items-center gap-3 hover:text-white transition"><FaFacebookF size={16} /> Facebook</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-white transition"><FaInstagram size={16} /> Instagram</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-white transition"><FaXTwitter size={16} /> X.com</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-white transition"><FaLinkedinIn size={16} /> Linkedin</a></li>
              <li><a href="#" className="flex items-center gap-3 hover:text-white transition"><FaYoutube size={16} /> Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img src="/assets/Mountains.png" alt="Tripshalla Logo" className="h-10 object-contain brightness-110" />
          </div>
          <p className="text-[13px] text-gray-500">© 2026 Tripshalla.in All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}