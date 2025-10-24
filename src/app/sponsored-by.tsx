"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  HeartIcon,
  GlobeAltIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const MAIN_SPONSORS = [
  {
    name: "King Faisal Specialist Hospital & Research Centre",
    logo: "/logos/kfsh-logo.svg", // Placeholder - would need actual logo
    type: "Host Institution",
    description: "Leading healthcare institution in Saudi Arabia",
    featured: true,
  },
];

const MEDICAL_PARTNERS = [
  {
    name: "Saudi Society of Gastroenterology",
    logo: "/logos/ssg-logo.svg",
    type: "Medical Society",
  },
  {
    name: "Middle East Association of Gastroenterology",
    logo: "/logos/meag-logo.svg",
    type: "Regional Partner",
  },
  {
    name: "World Endoscopy Organization",
    logo: "/logos/weo-logo.svg",
    type: "International Partner",
  },
];

const INDUSTRY_SPONSORS = [
  // Gold Sponsors
  {
    name: "MediServ",
    logo: "/image/sponsors/gold/MediServ.png",
    type: "Gold Sponsor",
    tier: "gold",
  },
  {
    name: "Pentax",
    logo: "/image/sponsors/gold/Pentax.png",
    type: "Gold Sponsor",
    tier: "gold",
  },
  {
    name: "Steris",
    logo: "/image/sponsors/gold/Steris.png",
    type: "Gold Sponsor",
    tier: "gold",
  },
  // Bronze Sponsors
  {
    name: "Boston Scientific",
    logo: "/image/sponsors/bronze/Boston Scientific.png",
    type: "Bronze Sponsor",
    tier: "bronze",
  },
  {
    name: "Fujifilm",
    logo: "/image/sponsors/bronze/Fujifilm.png",
    type: "Bronze Sponsor",
    tier: "bronze",
  },
  {
    name: "Gulf Medical Company",
    logo: "/image/sponsors/bronze/Gulf medical Co.png",
    type: "Bronze Sponsor",
    tier: "bronze",
  },
  {
    name: "Medoxa",
    logo: "/image/sponsors/bronze/Medoxa.png",
    type: "Bronze Sponsor",
    tier: "bronze",
  },
  {
    name: "Olympus",
    logo: "/image/sponsors/bronze/Olympus.png",
    type: "Bronze Sponsor",
    tier: "bronze",
  },
  // Regular Sponsors
  {
    name: "AOHUD Medical Company",
    logo: "/image/sponsors/regular/AOHUD.png",
    type: "Partner",
    tier: "regular",
  },
  {
    name: "Salehiya Pharmaceutical Company",
    logo: "/image/sponsors/regular/Salehiya.png",
    type: "Partner",
    tier: "regular",
  },
  {
    name: "Tayeb Medical Company",
    logo: "/image/sponsors/regular/Tayeb medical.png",
    type: "Partner",
    tier: "regular",
  },
  {
    name: "Anmar United",
    logo: "/image/sponsors/regular/Anmar.png",
    type: "Partner",
    tier: "regular",
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case "platinum":
      return "border-2 border-gray-400 bg-gradient-to-br from-gray-50 via-white to-gray-50 shadow-xl hover:shadow-2xl";
    case "gold":
      return "border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 via-amber-25 to-yellow-100 shadow-xl hover:shadow-2xl";
    case "silver":
      return "border-2 border-gray-300 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-lg hover:shadow-xl";
    case "bronze":
      return "border-2 border-orange-300 bg-gradient-to-br from-orange-50 via-amber-25 to-orange-100 shadow-lg hover:shadow-xl";
    default:
      return "border-2 border-light-blue-200 bg-gradient-to-br from-light-blue-50 to-white shadow-lg hover:shadow-xl";
  }
};

const getTierIcon = (tier: string) => {
  switch (tier) {
    case "platinum":
      return "💎";
    case "gold":
      return "🥇";
    case "silver":
      return "🥈";
    case "bronze":
      return "🥉";
    default:
      return "⭐";
  }
};

const getTierBadgeColor = (tier: string) => {
  switch (tier) {
    case "platinum":
      return "bg-gradient-to-r from-gray-600 to-gray-800 text-white";
    case "gold":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
    case "silver":
      return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
    case "bronze":
      return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
    default:
      return "bg-gradient-to-r from-light-blue-500 to-blue-600 text-white";
  }
};

export function SponsoredBy() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Host Institution */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center mb-8"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Host Institution
          </Typography>
          <div className="max-w-2xl mx-auto">
            <div className="relative border-4 border-light-blue-500 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-xl overflow-hidden">
              {/* Background Image */}
              <Image
                src="/host university.jpeg"
                alt="King Faisal Specialist Hospital & Research Centre"
                fill
                className="object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-4 font-bold mt-8"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  King Faisal Specialist Hospital & Research Centre
                </Typography>

                <Typography
                  variant="lead"
                  color="white"
                  className="mb-6 opacity-90"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Leading healthcare institution in Saudi Arabia, renowned for
                  clinical excellence, research innovation, and medical
                  education. KFSH&RC is committed to advancing healthcare
                  through cutting-edge technology and world-class medical
                  expertise.
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Typography
                      variant="h6"
                      color="white"
                      className="font-bold mb-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Excellence
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
                      JCI Accredited
                    </Typography>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Typography
                      variant="h6"
                      color="white"
                      className="font-bold mb-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Innovation
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
                      Research Leader
                    </Typography>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Typography
                      variant="h6"
                      color="white"
                      className="font-bold mb-1"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Education
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
                      Training Center
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12" id="sponsors">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-4"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Industry Partners
            </Typography>
            <div className="w-24 h-1 bg-gradient-to-r from-light-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-yellow-300"></div>
              <div className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full">
                <Typography
                  variant="h6"
                  className="text-white font-bold flex items-center gap-2"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Gold Sponsors
                </Typography>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-yellow-300"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {INDUSTRY_SPONSORS.filter((s) => s.tier === "gold").map(
                (sponsor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    className="relative"
                  >
                    <Card
                      className={`${getTierColor(
                        sponsor.tier
                      )} hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {/* Gold Badge */}
                      {/* <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-lg">🥇</span>
                      </div> */}

                      {/* Subtle Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-100/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                      <CardBody
                        className="p-8 text-center relative z-10"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <div className="w-54 h-36 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-yellow-100 group-hover:border-yellow-200 transition-colors duration-300 p-3">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            width={90}
                            height={90}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                      {/*   <div
                          className={`inline-block px-3 py-1 rounded-full ${getTierBadgeColor(
                            sponsor.tier
                          )} mb-2`}
                        >
                          <Typography
                            variant="small"
                            className="font-semibold"
                            placeholder={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {sponsor.type}
                          </Typography>
                        </div> */}
                      </CardBody>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-300"></div>
              <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full">
                <Typography
                  variant="h6"
                  className="text-white font-bold flex items-center gap-2"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {/* <span className="text-xl">🥉</span> */}
                  Bronze Sponsors
                </Typography>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-300"></div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {INDUSTRY_SPONSORS.filter((s) => s.tier === "bronze").map(
                  (sponsor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <Card
                        className={`${getTierColor(
                          sponsor.tier
                        )} hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group h-full`}
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {/* Tier Badge */}
                        {/* <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-sm">🥉</span>
                        </div> */}

                        {/* Subtle Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                        <CardBody
                          className="p-4 text-center relative z-10 flex flex-col items-center justify-center h-full"
                          placeholder={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <div className="w-36 h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm border border-orange-100 group-hover:border-orange-200 transition-colors duration-300 p-2">
                            <Image
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              width={60}
                              height={60}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Partner Sponsors */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-light-blue-300"></div>
              <div className="px-6 py-2 bg-gradient-to-r from-light-blue-500 to-blue-600 rounded-full">
                <Typography
                  variant="h6"
                  className="text-white font-bold flex items-center gap-2"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {/* <span className="text-xl">⭐</span> */}
                  Regular Sponsors
                </Typography>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-light-blue-300"></div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
                {INDUSTRY_SPONSORS.filter((s) => s.tier === "regular").map(
                  (sponsor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="relative w-48"
                    >
                      <Card
                        className={`${getTierColor(
                          sponsor.tier
                        )} hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group h-full`}
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {/* Tier Badge */}
                        {/* <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-light-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-sm">⭐</span>
                        </div> */}

                        {/* Subtle Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                        <CardBody
                          className="p-4 text-center relative z-10 flex flex-col items-center justify-center h-full"
                          placeholder={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <div className="w-36 h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm border border-light-blue-100 group-hover:border-light-blue-200 transition-colors duration-300 p-2">
                            <Image
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              width={60}
                              height={60}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SponsoredBy;
