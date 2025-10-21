"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

const EVENT_INFO = [
  {
    title: "Advanced Endoscopic Techniques",
    description:
      "Learn the latest innovations in third space endoscopy and advanced therapeutic procedures from world-renowned experts.",
    subTitle: "Expert Sessions",
    icon: BeakerIcon,
    image: "/event-info/Advanced Endoscopic Techniques.png",
  },
  {
    title: "Live Endoscopic Demonstrations",
    description:
      "Witness cutting-edge procedures performed live by master endoscopists, with real-time commentary and Q&A sessions.",
    subTitle: "Live Demos",
    icon: HandRaisedIcon,
    image: "/event-info/Live Endoscopic Demonstrations.png",
  },
  {
    title: "CME Accredited",
    description:
      "Earn continuing medical education credits while advancing your knowledge in this rapidly evolving field.",
    subTitle: "Certification",
    icon: ClipboardDocumentCheckIcon,
    image: "/event-info/CME Accredited.png",
  },
  {
    title: "Global Networking",
    description:
      "Connect with international experts, researchers, and practitioners in the field of advanced endoscopy.",
    subTitle: "Community",
    icon: GlobeAltIcon,
    image: "/event-info/Global Networking.png",
  },
];

export function AboutEvent() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-light-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography
            variant="h6"
            className="text-center mb-2"
            color="light-blue"
            {...({} as any)}
          >
            About GATE 2025
          </Typography>
          <Typography
            variant="h2"
            className="text-center mb-6"
            color="blue-gray"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Global Summit of Advanced & Third Space Endoscopy
          </Typography>
          <Typography
            variant="lead"
            className="lg:max-w-4xl mx-auto mb-8 font-normal !text-gray-600"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Join us in Riyadh for the most comprehensive gathering of endoscopy
            experts worldwide. Hosted by King Faisal Specialist Hospital and
            Research Centre, this three-day summit will showcase breakthrough
            techniques, innovative technologies, and the future of minimally
            invasive procedures.
      </Typography>

          {/* Welcome message from Dr. Alfadda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mb-12"
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Welcome Message
      </Typography>
      <Typography
        variant="lead"
              color="gray"
              className="italic mb-4"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              &quot;It is with great pleasure and honor that we welcome you to
              the Global Summit of Advanced and Third Space Endoscopy (GATE),
              which will be held in Riyadh, Saudi Arabia from November 13-15,
              2025. This summit marks a significant milestone as we gather
              leading experts, innovators, and practitioners from around the
              world to explore the latest advancements and future directions in
              advanced therapeutic and third space endoscopy. Hosted by King
              Faisal Specialist Hospital and Research Centre—a beacon of
              excellence in patient care, education, and research—this
              CME-accredited event will feature high-impact lectures, live
              demonstrations, expert panels, and hands-on experiences that
              reflect the evolving scope of advanced endoscopy.&quot;
            </Typography>

               <div className="mb-6">
                  <img
                    src="/doctors/Abdulrahman Alfadda.jpeg"
                    alt="director"
                    className="mx-auto border-4 border-light-blue-100 shadow-xl w-32 h-32 text-4xl rounded-full"
                  />
                </div>

            <div className="space-y-2">
              <Typography
                variant="h6"
                color="light-blue"
                className="font-semibold"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Dr. Abdulrahman Abdulaziz Alfadda
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-medium"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Conference Director, King Faisal Specialist Hospital and
                Research Centre, Riyadh, Saudi Arabia
              </Typography>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-gray-200">
                <div className="flex-1">
                    <div className="mb-6">
                  <img
                    src="/doctors/Shaimaa Elkholy.jpeg"
                    alt="co-director"
                    className="inline-block relative object-cover !rounded-full w-[110px] h-[110px] rounded-2xl bg-light-blue-100 bg-blend-multiply mx-auto border-4 border-light-blue-100 shadow-lg object-top"
                  />
                </div>
                  <Typography
                    variant="h6"
                    color="light-blue"
                    className="font-semibold text-sm"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Dr. Shaimaa Elkholy
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Co-Director
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Cairo University (Qasr El Eyni, Cairo, Egypt)
                  </Typography>
                </div>
                <div className="flex-1">
                     <div className="mb-6">
                  <img
                    src="/doctors/Mohamad Elsherbiny.jpeg"
                    alt="co-director"
                    className="inline-block relative object-cover !rounded-full w-[110px] h-[110px] rounded-2xl bg-light-blue-100 bg-blend-multiply mx-auto border-4 border-light-blue-100 shadow-lg object-top"
                  />
                </div>
                  <Typography
                    variant="h6"
                    color="light-blue"
                    className="font-semibold text-sm"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Dr. Mohamad Elsherbiny
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Co-Director
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Cairo University (Qasr El Eyni, Cairo, Egypt)
                  </Typography>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center mb-8 font-bold"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Our Mission
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 overflow-hidden h-64"
            >
              <Image
                src="/set-the-benchmark.png"
                alt="Set the Benchmark"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Set the Benchmark
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Showcase innovations that shape best practice.
                </Typography>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 overflow-hidden h-64"
            >
              <Image
                src="/turn-knowledge-into-action.png"
                alt="Turn Knowledge into Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Turn Knowledge into Action
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Bring science to life through live, practical learning.
                </Typography>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 overflow-hidden h-64"
            >
              <Image
                src="/empower-skills.png"
                alt="Empower Skills"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Empower Skills
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Provide training participants can apply immediately.
                </Typography>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 overflow-hidden h-64"
            >
              <Image
                src="/build-connections.png"
                alt="Build Connections"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-3 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Build Connections
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Unite leaders to shape the future of endoscopy together.
                </Typography>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {EVENT_INFO.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 overflow-hidden h-80"
            >
              <Image
                src={info.image}
                alt={info.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <Typography
                  variant="small"
                  color="white"
                  className="font-bold mb-2 uppercase tracking-wider opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {info.subTitle}
                </Typography>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-4 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {info.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="white"
                  className="font-normal opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {info.description}
      </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
