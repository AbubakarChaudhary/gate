import Image from "next/image";
import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  { name: "About GATE", href: "#about" },
  { name: "Speakers", href: "#speakers" },
  { name: "Program", href: "#program" },
  { name: "Registration", href: "#registration" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Typography
            variant="h2"
            className="text-center mb-10 font-bold text-blue-gray-800"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Contact Us
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-gray-700">
                    Email
                  </h3>
                  <a
                    href="mailto:info@ksagate.org"
                    className="text-blue-600 hover:underline text-lg"
                  >
                    info@ksagate.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.072 3.214a1 1 0 01-.272 1.02l-1.52 1.52a16.001 16.001 0 006.364 6.364l1.52-1.52a1 1 0 011.02-.272l3.214 1.072A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 3V2a2 2 0 012-2h1z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-gray-700">
                    Phone
                  </h3>
                  <a
                    href="tel:+966114424729"
                    className="text-blue-600 hover:underline text-lg"
                  >
                    +966 11 442 4729
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-gray-700">
                    Location
                  </h3>
                  <p className="text-blue-gray-600 text-lg">
                    Crowne Plaza Riyadh Rdc Hotel, Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6528076428967!2d46.6352857!3d24.7387971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee28fa598b927%3A0xec1ae00b761951cf!2sCrowne%20Plaza%20Riyadh%20Rdc%20Hotel%20%26%20Convention%20by%20IHG!5e0!3m2!1sen!2s!4v1761941265314!5m2!1sen!2s"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="container flex flex-col mx-auto pt-12">
        <div className="flex flex-col md:flex-row items-center !justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/image/logo.png"
              alt="GATE 2025 Logo"
              width={80}
              height={40}
              className="h-12 w-auto"
            />
            <div>
              <Typography variant="h6" className="text-gray-900 font-bold">
                GATE 2025
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Global Summit of Advanced & Third Space Endoscopy
              </Typography>
            </div>
          </div>

          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-6">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal !text-gray-700 hover:!text-light-blue-600 transition-colors cursor-pointer"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="flex w-fit justify-center gap-3">
            <IconButton
              size="sm"
              color="light-blue"
              variant="text"
              className="hover:bg-light-blue-50"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </IconButton>
            <IconButton
              size="sm"
              color="light-blue"
              variant="text"
              className="hover:bg-light-blue-50"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </IconButton>
            <IconButton
              size="sm"
              color="light-blue"
              variant="text"
              className="hover:bg-light-blue-50"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </IconButton>
            <IconButton
              size="sm"
              color="light-blue"
              variant="text"
              className="hover:bg-light-blue-50"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Typography
              color="blue-gray"
              className="text-center md:text-left font-normal !text-gray-600"
            >
              &copy; {CURRENT_YEAR} GATE 2025 - Global Summit of Advanced &
              Third Space Endoscopy.
            </Typography>
            <div className="flex items-center gap-6">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="!text-gray-600 hover:!text-light-blue-600 transition-colors cursor-pointer"
              >
                Privacy Policy
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="!text-gray-600 hover:!text-light-blue-600 transition-colors cursor-pointer"
              >
                Terms of Service
              </Typography>
            </div>
          </div>
          {/* <Typography
            variant="small"
            className="text-center mt-4 !text-gray-500"
          >
            Hosted by King Faisal Specialist Hospital & Research Centre, Riyadh,
            Saudi Arabia
          </Typography> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
