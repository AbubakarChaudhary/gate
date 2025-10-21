"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const FAQS = [
  {
    title: "How do I register for GATE 2025?",
    desc: "You can register for GATE 2025 through our online registration form on this website. Simply fill out your personal and professional information, and select your registration category.",
  },
  {
    title: "How many CME credits will I receive?",
    desc: "GATE 2025 offers up to 24 CME credits for full attendance. The conference is accredited by relevant medical education authorities, ensuring international recognition of your continuing medical education credits.",
  },
  {
    title: "Are there any prerequisites for attending the workshops?",
    desc: "Most workshops are designed for practicing physicians and medical professionals with basic endoscopy experience. Some advanced workshops may require specific experience levels, which will be clearly indicated in the program. Residents and fellows are welcome to attend all sessions, and specialized tracks will be available for different experience levels.",
  },
  {
    title: "What is the dress code and what should I bring?",
    desc: "The dress code is business professional for all conference sessions. For hands-on workshops, you may need to wear scrubs or lab coats (provided on-site). Please bring your medical license or certification for CME credit verification, business cards for networking, and any specific items mentioned in your pre-conference materials.",
  },
  {
    title: "How do I get to the conference venue?",
    desc: "The conference will be held at Sheraton Hotel in Riyadh, Saudi Arabia. Detailed directions, parking information, and transportation options will be provided in your registration confirmation. We recommend arriving in Riyadh at least one day before the conference begins.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-light-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography
            variant="h6"
            className="text-center mb-2"
            color="light-blue"
          >
            Have Questions?
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-8 lg:w-3/5 !text-gray-600"
          >
            Find answers to common questions about GATE 2025. If you need
            additional information, please don&apos;t hesitate to contact our
            registration team.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto lg:max-w-4xl"
        >
          {FAQS.map(({ title, desc }, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion
                open={open === key + 1}
                onClick={() => handleOpen(key + 1)}
                className="mb-4 rounded-lg border border-light-blue-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <AccordionHeader className="text-left text-blue-gray-900 hover:text-light-blue-600 transition-colors duration-200 px-6 py-4">
                  <Typography variant="h6" className="font-semibold">
                    {title}
                  </Typography>
                </AccordionHeader>
                <AccordionBody className="px-6 pb-4">
                  <Typography
                    color="gray"
                    className="font-normal leading-relaxed"
                  >
                    {desc}
                  </Typography>
                </AccordionBody>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-light-blue-500 to-blue-600 rounded-xl p-8 text-white">
            <Typography variant="h4" className="mb-4">
              Still Have Questions?
            </Typography>
            <Typography variant="lead" className="mb-6 opacity-90">
              Our dedicated support team is here to help you with any inquiries
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <Typography variant="h6" className="mb-2">
                  Email Support
                </Typography>
                <Typography variant="small" className="opacity-90">
                  info@ksagate.org
                </Typography>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Typography variant="h6" className="mb-2">
                  Phone Support
                </Typography>
                <Typography variant="small" className="opacity-90">
                  +966 11 442 0795
                </Typography>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
