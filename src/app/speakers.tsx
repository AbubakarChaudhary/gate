"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  StarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

// Helper function to get initials from name
function getInitials(name: string): string {
  const parts = name
    .replace(/^Dr\.\s*/, "")
    .trim()
    .split(" ");
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  const firstInitial = parts[0]?.charAt(0) || "";
  const lastInitial = parts[parts.length - 1]?.charAt(0) || "";
  return (firstInitial + lastInitial).toUpperCase();
}

// Avatar component with fallback to initials
function AvatarWithFallback({
  src,
  alt,
  size,
  className,
}: {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg" | "xl" | "xxl"  ;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(alt);

  // Size mappings for the fallback div
const sizeClasses = {
  sm: "w-12 h-12 text-base",
  md: "w-16 h-16 text-lg",
  lg: "w-20 h-29 text-xl",
  xl: "w-32 h-32 text-3xl",
  xxl: "w-40 h-40 text-4xl",
};


  if (imageError) {
    return (
      <div
        className={`${
          sizeClasses[size]
        } rounded-full bg-light-blue-100 flex items-center justify-center text-light-blue-600 font-bold ${
          className || ""
        }`}
      >
        {initials}
      </div>
    );
  }

  return (
    <Avatar
      src={src}
      alt={alt}
      size={size}
      className={`bg-light-blue-100 bg-blend-multiply ${className || ""}`}
      onError={() => setImageError(true)}
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
}

// Leadership and Committee Data
const DIRECTOR = {
  name: "Dr. Abdulrahman Alfadda",
  title: "Conference Director",
  institution: "King Faisal Specialist Hospital & Research Centre",
  country: "Riyadh, Saudi Arabia",
  countryCode: "SA",
  specialization: "Advanced Endoscopy & Third Space Procedures",
  image: "/doctors/Abdulrahman Alfadda.jpeg",
  bio: "",
  profile: "https://sa.linkedin.com/in/abdulrahman-alfadda-35958925",
};

const CO_DIRECTORS = [
  {
    name: "Dr. Shaimaa Elkholy",
    title: "Co-Director",
    institution: "Cairo University (Qasr El Eyni, Cairo, Egypt)",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Third Space Endoscopy",
    image: "/doctors/Shaimaa Elkholy.jpeg",
    bio: "",
  },
  {
    name: "Dr. Mohammad El Sherbiny",
    title: "Co-Director",
    institution: "Cairo University (Qasr El Eyni, Cairo, Egypt)",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Mohamad Elsherbiny.jpeg",
    bio: "",
  },
];

const ORGANIZING_COMMITTEE = {
  head: {
    name: "Dr. Bader Alajlan",
    title: "Head of Organizing Committee",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    image: "/doctors/Bader Alajlan.jpeg",
  },
  members: [
    {
      name: "Dr. Abdullah Al-Mousa",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Abdullah Al-Mousa.jpeg",
    },
    {
      name: "Dr. Abdullh Ahmad Altawili",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Abdullah Altawili.jpeg",
      imageCenter: "down",
    },
    {
      name: "Dr. Adeeb Elghalayini",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Adeeb Elghalayini.jpeg",
    },
    {
      name: "Dr. Adnan Mahrouq",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Adnan Almahrouq.jpeg",
    },
    {
      name: "Dr. Barbara Czplata",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Barbara Czapla.jpeg",
      imageCenter: "down",
    },
    {
      name: "Dr. Mouath Alnajmi",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Muath Najmi.jpeg",
    },
    {
      name: "Dr. Nawaf Almutairi",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Nawaf Almutairi.jpeg",
      imageCenter: "down",
    },
  ],
};

const SCIENTIFIC_COMMITTEE = {
  head: {
    name: "Dr. Motib Alabdulwahhab",
    title: "Head of Scientific Committee",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    image: "/doctors/Meteb Abdulwahab.jpeg",
  },
  members: [
    {
      name: "Dr. Abdullah Alshahrani",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Abdullah Alshahrani.jpeg",
    },
    {
      name: "Dr. Eyad Gadour",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Eyad Gadour.jpeg",
    },
      {
      name: "Dr. Ghias Un Nabi Tayyab",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Pakistan",
      countryCode: "PK",
      image: "/doctors/Ghias un Nabi Tayyab.jpeg",
    },
    {
      name: "Dr. Hesham Awadh Aljohany",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Hesham Aljohany.jpeg",
    },
    {
      name: "Dr. Hussein Okasha",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Egypt",
      countryCode: "EG",
      image: "/doctors/Hussein Okasha.jpeg",
    },

    {
      name: "Dr. Ibrahim Alhafid",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Ibrahim Alhafid.jpeg",
    },
    {
      name: "Dr. Ihab Bufarhaneh",
      title: "Committee Member",
      institution: "King Faisal Specialist Hospital & Research Centre",
      country: "Saudi Arabia",
      countryCode: "SA",
      image: "/doctors/Ehab Abufahaneh.jpeg",
      imageCenter: "down",
    },
  ],
};

// International Faculty
const INTERNATIONAL_FACULTY = [
  {
    name: "Dr. Ali Abdulatif AlAli",
    title: "Consultant, Gastroenterology",
    institution: "Thunayan Alghanim Center, Amiri Hospital, Kuwait",
    country: "Kuwait",
    countryCode: "KW",
    specialization: "Gastroenterology",
    image: "/doctors/Ali Alali.jpeg",
    bio: "",
  },
  {
    name: "Dr. Benedetto Mangiavillano",
    title: "Chief of Gastrointestinal Endoscopy",
    institution: "Humanitas Mater Domini, Castellanza (VA), Italy",
    country: "Italy",
    countryCode: "IT",
    specialization: "Gastrointestinal Endoscopy",
    image: "/doctors/Benedetto Mangiavillano.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Fatih Aslan",
    title: "Consultant, Gastroenterology & Hepatology",
    institution: "Koç University Hospital, Turkey",
    country: "Turkey",
    countryCode: "TR",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Fatih Aslan.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Ghias Un Nabi Tayyab",
    title: "Consultant, Gastroenterology & Hepatology",
    institution: "Bahria Orchard Hospital, Pakistan",
    country: "Pakistan",
    countryCode: "PK",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Ghias un Nabi Tayyab.jpeg",
    bio: "",
  },
  {
    name: "Dr. Hisham Aldhahab",
    title: "Senior Consultant, Gastroenterology",
    institution: "Royal Hospital, Oman",
    country: "Oman",
    countryCode: "OM",
    specialization: "Gastroenterology",
    image: "/doctors/Hisham Abdullah Mohammed Al Dhahab.jpeg",
    bio: "",
  },
  {
    name: "Dr. Hazem Hammad",
    title: "Consultant, Gastroenterology & Endoscopy",
    institution: "King Hussein Cancer Center, Jordan",
    country: "Jordan",
    countryCode: "JO",
    specialization: "Gastroenterology & Endoscopy",
    image: "/doctors/Hazem Hammad.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Hussein Okasha",
    title: "Emeritus Professor, Internal Medicine & Gastroenterology",
    institution: "Kasr Al-Aini Hospitals, Egypt",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Internal Medicine & Gastroenterology",
    image: "/doctors/Hussein Okasha.jpeg",
    bio: "",
  },
  {
    name: "Prof. Mostafa Ibrahim",
    title: "Professor, Gastroenterology & Hepatology",
    institution: "Theodor Bilharz Research Institute, Egypt",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Mostafa Ibrahim.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Mohamed Othman",
    title: "Professor, Gastroenterology & Hepatology",
    institution: "Baylor College of Medicine, USA",
    country: "USA",
    countryCode: "US",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Mohamed Othman Ali Othman.jpeg",
    bio: "",
  },
  {
    name: "Prof. Mashiko Setshedi",
    title: "Chair & Head, Department of Medicine",
    institution: "University of Cape Town, South Africa",
    country: "South Africa",
    countryCode: "ZA",
    specialization: "Department of Medicine",
    image: "/doctors/Mashiko Setshedi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Nadeem Tehami",
    title: "Consultant, Hepatology & Pancreaticobiliary Medicine",
    institution: "University Hospital Southampton NHS Foundation Trust, UK",
    country: "UK",
    countryCode: "GB",
    specialization: "Hepatology & Pancreaticobiliary Medicine",
    image: "/doctors/Nadeem Tehami.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Sami Boudabbous",
    title:
      "Consultant, Gastroenterology, Hepatology, Proctology & Digestive Endoscopy",
    institution: "Tunisia",
    country: "Tunisia",
    countryCode: "TN",
    specialization:
      "Gastroenterology, Hepatology, Proctology & Digestive Endoscopy",
    image: "/doctors/SAMI BOUDABBOUS.jpeg",
    bio: "",
    imageCenter: "down",
  },
 /*  {
    name: "Dr. Wadha Aljaser",
    title: "Consultant, Gastroenterology & Hepatology",
    institution: "Al-Amiri Hospital, Kuwait",
    country: "Kuwait",
    countryCode: "KW",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Wadha Al-Jaser.jpeg",
    bio: "",
  }, */
  {
    name: "Dr. Piyush Somani",
    title: "Consultant, Gastroenterology",
    institution: "Prime Hospital, UAE",
    country: "UAE",
    countryCode: "AE",
    specialization: "Gastroenterology",
    image: "/doctors/Piyush Somani.jpeg",
    bio: "",
  },
  {
    name: "Mohamed Abdelhafez",
    title: "Medical Professional",
    institution: "UAE",
    country: "UAE",
    countryCode: "AE",
    specialization: "Gastroenterology",
    image: "/doctors/Mohamed Abdelhafez.jpeg",
    bio: "",
  },
  {
    name: "Dr. Hiwa Abubakr Hussein",
    title: "Consultant, Gastroenterology & Hepatology",
    institution: "Sulaimani Teaching Hospital",
    country: "Iraq",
    countryCode: "IQ",
    specialization: "Gastroenterology & Hepatology",
    image: "/doctors/Hiwa Abubakr Hussein.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abeer Awad Abdelhady Abdellatef",
    title:
      "Associate Professor of Internal Medicine Hepatology and Gastroenterology",
    institution:
      "Internal Medicine Department (Hepatogastroenterology Unit), Faculty of Medicine, Cairo University",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Internal Medicine, Hepatology & Gastroenterology",
    image: "/doctors/Abeer Awad Abdelhady Abdellatef.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Abdullah Burwais",
    title: "Consultant",
    institution: "Libya",
    country: "Libya",
    countryCode: "LY",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Burwais.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Khaled Mohamed Ragab",
    title: "Consultant and Lecturer of Hepatogastroenterology and Endoscopy",
    institution:
      "Department of Internal Medicine, Theodor Bilharz Research Institute (TBRI)",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Hepatogastroenterology & Endoscopy",
    image: "/doctors/Khaled  Mohamed Ragab.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Mohamed Alboraie",
    title: "Associate Professor of Medicine and Gastroenterology",
    institution: "Al-Azhar University, Egypt",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Medicine & Gastroenterology",
    image: "/doctors/Mohamed Alboraie.jpeg",
    bio: "",
  },
  {
    name: "Prof. Mohamed El-Kassas",
    title: "Professor and Head of Endemic Medicine and Hepatology Department",
    institution: "Faculty of Medicine, Helwan University, Cairo, Egypt",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Endemic Medicine & Hepatology",
    image: "/doctors/Mohamed El-Kassas.jpeg",
    bio: "",
  },
  {
    name: "Prof. Mohamed Tahiri",
    title:
      "Professor of Gastroenterology, Vice Dean of Hassan 2 Faculty of Medicine",
    institution: "Casablanca Faculty of Medicine, Morocco",
    country: "Morocco",
    countryCode: "MA",
    specialization: "Gastroenterology & Interventional Endoscopy",
    image: "/doctors/Mohamed Tahiri.jpeg",
    bio: "",
  },
  {
    name: "Dr. Mohamad Elsherbiny",
    title:
      "Associate Professor of Internal Medicine Hepatogastroenterology and Endoscopy",
    institution:
      "Internal Medicine Department (Hepatogastroenterology Unit), Faculty of Medicine, Cairo University",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Internal Medicine, Hepatogastroenterology & Endoscopy",
    image: "/doctors/Mohamad Elsherbiny.jpeg",
    bio: "",
  },
  {
    name: "Dr. Mohammad Salah",
    title: "Consultant of Gastroenterology, Hepatology and Endoscopy",
    institution: "",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Gastroenterology, Hepatology & Endoscopy",
    image: "/doctors/Mohammad Salah.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Shaimaa Elkholy",
    title: "Associate Professor of Internal Medicine, Gastroenterology",
    institution:
      "Internal Medicine Department, Faculty of Medicine, Cairo University, Egypt",
    country: "Egypt",
    countryCode: "EG",
    specialization: "Internal Medicine & Gastroenterology",
    image: "/doctors/Shaimaa Elkholy.jpeg",
    bio: "",
  },
];

// National Faculty (Saudi Arabia)
const NATIONAL_FACULTY = [
  {
    name: "Dr. Eyad Gadour",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Eyad Gadour.jpeg",
    bio: "",
  },
  {
    name: "Dr. Fahad Alsohaibani",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Fahad Alsohaibani.jpeg",
    bio: "",
  },
  {
    name: "Dr. Faisal Aladwani",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Faisal-aladwani.jpg",
    bio: "",
  },
  {
    name: "Dr. Yousef Qari",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Yousef-Qari.jpg",
    bio: "",
  },
  {
    name: "Dr. Nawaf Alotaibi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Nawaf Alotaibi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Shagran Binkhamis",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Shagran Binkhamis.jpeg",
    bio: "",
  },
  {
    name: "Dr. Hesham Awadh Aljohany",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Hesham Awadh Aljohany.jpeg",
    bio: "",
  },
  {
    name: "Dr. Ibrahim Alhafid",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Ibrahim Alhafid.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Abdullah Altheyabi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Altheyabi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abdullh Ahmad Altawili",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Altawili.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Abdullah Mohamed Albishi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Mohamed Albishi.jpeg",
    bio: "",
    imageCenter: "down",
  },
  // Bodour Mohammedraheem
  {
    name: "Dr. Bodour Mohammedraheem",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Bodour Mohammedraheem.jpeg",
    bio: "",
  },
  // Ahmad Najdat Bazarbashi
  {
    name: "Dr. Ahmad Najdat Bazarbashi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Ahmad Najdat Bazarbashi.jpeg",
    bio: "",
    imageCenter: "down",
  },
  // Ali Albenmousa
  {
    name: "Dr. Ali Albenmousa",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Ali Albenmousa.jpeg",
    bio: "",
    imageCenter: "center",
  },
  {
    name: "Dr. Abdullah Alqaraawi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Alqaraawi.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Emad S. Aljahdli",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Emad S. Aljahdli.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abdulaziz Omar M Almasoud",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdulaziz Omar M Almasoud.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abdullah Almtawa",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Almutawa.jpeg",
    bio: "",
  },
  {
    name: "Dr. Turki Abdullah Alamri",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Turki Abdullah Alamri.jpeg",
    bio: "",
  },
  {
    name: "Dr. Ammar Saud Alotaibi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Ammar Saud Alotaibi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Bader Alajlan",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Bader Alajlan.jpeg",
    bio: "",
  },
  {
    name: "Dr. Majid Alsahafi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Majid Alsahafi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abdulrahman Meshal Alharbi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdulrahman Meshal Alharbi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Resheed Alkhiari",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Resheed Alkhiari.jpeg",
    bio: "",
  },
  {
    name: "Dr. Shakir Ali Bakkari",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Shakir Ali Bakkari.jpeg",
    bio: "",
  },
  {
    name: "Dr. Nawaf Almutairi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Nawaf Almutairi.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Ibrahim Balubaid",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Ibrahim Balubaid.jpeg",
    bio: "",
  },
  {
    name: "Dr. Saad Mohammed Alrajhi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Saad Mohammed Alrajhi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abdulrahman Mohammed Alkhormi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdulrahman Mohammed Alkhormi.jpeg",
    bio: "",
  },
  // Abed Allehibi
  {
    name: "Dr. Abed Allehibi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abed Allehibi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Aymen AlMuhaidb",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Aymen AlMuhaidb.jpeg",
    bio: "",
  },
  {
    name: "Dr. Abdullah Alshahrani",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Alshahrani.jpeg",
    bio: "",
  },
  {
    name: "Dr. Motib Alabdulwahhab",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Meteb Abdulwahab.jpeg",
    bio: "",
  },
  // Mohammad Albeshir
  {
    name: "Dr. Mohammad Albeshir",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Mohammad Albeshir.jpeg",
    bio: "",
  },
  // Mohammed AlSulaimi
  {
    name: "Dr. Mohammed AlSulaimi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Mohammed AlSulaimi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Adeeb Elghalayini",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Adeeb Elghalayini.jpeg",
    bio: "",
  },
  // Salem Thaniah
  {
    name: "Dr. Salem Thaniah",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Salem Thaniah.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Prof. Aayed Alqahtani",
    title: "Professor & Consultant",
    institution: "College of Medicine, King Saud University",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Minimally Invasive & Obesity Surgery",
    image: "/doctors/Aayed Alqahtani.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Abdullah Al-Mousa",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Abdullah Al-Mousa.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Adel Alghamdi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Adel Alghamdi.jpeg",
    bio: "",
  },
  {
    name: "Dr. Muhammad Faisal Al-Mubarak",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Muhammad Faisal Al-Mubarak.jpeg",
    bio: "",
    imageCenter: "down",
  },
  {
    name: "Dr. Majid Almaghrabi",
    title: "Consultant",
    institution: "King Faisal Specialist Hospital & Research Centre",
    country: "Saudi Arabia",
    countryCode: "SA",
    specialization: "Gastroenterology",
    image: "/doctors/Majid Almaghrabi.jpeg",
    bio: "",
    imageCenter: "down",
  },
];

export function Speakers() {
  // Sort faculty alphabetically by last name to ensure fair representation
  const sortedInternationalFaculty = [...INTERNATIONAL_FACULTY].sort((a, b) => {
    // trim down the Dr. prefix
    const lastNameA = a.name
      .replace(/^Dr\.\s*/, "")
      .replace(/^Prof\.\s*/, "")
      .trim();
    const lastNameB = b.name
      .replace(/^Dr\.\s*/, "")
      .replace(/^Prof\.\s*/, "")
      .trim();
    return lastNameA.localeCompare(lastNameB);
  });

  const sortedNationalFaculty = [...NATIONAL_FACULTY].sort((a, b) => {
    const lastNameA = a.name
      .replace(/^Dr\.\s*/, "")
      .replace(/^Dr\.\s*/, "")
      .trim();
    const lastNameB = b.name
      .replace(/^Dr\.\s*/, "")
      .replace(/^Prof\.\s*/, "")
      .trim();
    return lastNameA.localeCompare(lastNameB);
  });

  return (
    <section id="speakers" className="py-20 bg-white">
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
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Conference Leadership
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
            Distinguished Faculty
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
            Learn from the global leaders who are shaping the future of
            endoscopy. Our distinguished faculty brings decades of experience
            and groundbreaking innovations to share their expertise with you.
          </Typography>
        </motion.div>

        {/* Conference Director */}
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
            className="text-center mb-12"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Conference Director
          </Typography>
          <div className="max-w-2xl mx-auto">
            <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              {/* Director badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 z-10">
                <StarIcon className="h-5 w-5" />
                <Typography variant="small" className="font-bold">
                  Director
                </Typography>
              </div>

              <CardBody className="text-center p-8 relative !z-20">
                <div className="mb-6">
                  <AvatarWithFallback
                    src={DIRECTOR.image}
                    alt={DIRECTOR.name}
                    size="xxl"
                    className="mx-auto border-4 border-light-blue-100 shadow-xl"
                  />
                </div>

                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {DIRECTOR.name}
                </Typography>

                <Typography
                  variant="h5"
                  color="light-blue"
                  className="mb-4 font-semibold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {DIRECTOR.title}
                </Typography>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <AcademicCapIcon className="h-4 w-4 text-gray-500" />
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
                    {DIRECTOR.institution}
                  </Typography>
                </div>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <img
                    src={`https://flagsapi.com/${DIRECTOR.countryCode}/flat/32.png`}
                    alt={DIRECTOR.country}
                    className="h-4 w-4"
                  />
                  <Typography
                    variant="small"
                    color="gray"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {DIRECTOR.country}
                  </Typography>
                </div>

                <Typography
                  variant="small"
                  color="gray"
                  className="mb-6 leading-relaxed"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {DIRECTOR.bio}
                </Typography>

                <Button
                  variant="outlined"
                  color="light-blue"
                  size="sm"
                  className="group-hover:bg-light-blue-500 group-hover:text-white transition-colors duration-300"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  onClick={() => {
                    window.open(DIRECTOR.profile, "_blank");
                  }}
                >
                  View Profile
                </Button>
              </CardBody>
            </Card>
          </div>
        </motion.div>

        {/* Co-Directors */}
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
            className="text-center mb-12"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Co-Directors
          </Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CO_DIRECTORS.map((director, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                  {/* Co-Director badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded-full flex items-center gap-1 z-10">
                    <UserIcon className="h-4 w-4" />
                    <Typography variant="small" className="font-bold">
                      Co-Director
                    </Typography>
                  </div>

                  <CardBody className="text-center p-6 relative !z-20">
                    <div className="mb-4">
                      <AvatarWithFallback
                        src={director.image}
                        alt={director.name}
                        size="xxl"
                        className="mx-auto border-4 border-light-blue-100 shadow-lg object-top"
                      />
                    </div>

                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-2 font-bold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {director.name}
                    </Typography>

                    <Typography
                      variant="h6"
                      color="light-blue"
                      className="mb-2 font-semibold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {director.title}
                    </Typography>

                    <div className="flex items-center justify-center gap-2 mb-2">
                      <AcademicCapIcon className="h-4 w-4 text-gray-500" />
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
                        {director.institution}
                      </Typography>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-3">
                      <img
                        src={`https://flagsapi.com/${director.countryCode}/flat/32.png`}
                        alt={director.country}
                        className="h-4 w-4"
                      />
                      <Typography
                        variant="small"
                        color="gray"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {director.country}
                      </Typography>
                    </div>

                    <Typography
                      variant="small"
                      color="gray"
                      className="leading-relaxed"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {director.bio}
                    </Typography>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizing Committee */}
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
            className="text-center mb-2"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Organizing Committee
          </Typography>

           <Typography
              variant="small"
              color="gray"
              className="italic text-center mb-12"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Listed in alphabetical order
            </Typography>

          {/* Committee Head */}
          <div className="max-w-md mx-auto mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardBody className="text-center p-6">
                <AvatarWithFallback
                  src={ORGANIZING_COMMITTEE.head.image}
                  alt={ORGANIZING_COMMITTEE.head.name}
                  size="xxl"
                  className="mx-auto border-4 border-light-blue-100 shadow-lg mb-4"
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {ORGANIZING_COMMITTEE.head.name}
                </Typography>
                <Typography
                  variant="small"
                  color="light-blue"
                  className="mb-2 font-semibold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {ORGANIZING_COMMITTEE.head.title}
                </Typography>

                {/* <Typography
                  variant="small"
                  color="gray"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {ORGANIZING_COMMITTEE.head.institution}
                </Typography> */}
              </CardBody>
            </Card>
          </div>

          {/* Committee Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ORGANIZING_COMMITTEE.members.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardBody className="text-center p-4">
                    <AvatarWithFallback
                      src={member.image}
                      alt={member.name}
                      size="xl"
                      className={`mx-auto border-2 border-light-blue-100 shadow-md mb-3 ${
                        member.imageCenter === "down" ? "object-top" : "object-center"
                      }`}
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-1 font-bold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.name}
                    </Typography>

                    <Typography
                      variant="small"
                      color="light-blue"
                      className="mb-1 font-semibold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.title}
                    </Typography>
                    {/*
                    <Typography
                      variant="small"
                      color="gray"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.institution}
                    </Typography> */}
                    {/* country for all is KSA */}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scientific Committee */}
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
            className="text-center mb-2"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Scientific Committee
          </Typography>
           <Typography
              variant="small"
              color="gray"
              className="italic text-center mb-12"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Listed in alphabetical order
            </Typography>

          {/* Committee Head */}
          <div className="max-w-md mx-auto mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardBody className="text-center p-6">
                <AvatarWithFallback
                  src={SCIENTIFIC_COMMITTEE.head.image}
                  alt={SCIENTIFIC_COMMITTEE.head.name}
                  size="xxl"
                  className="mx-auto border-4 border-light-blue-100 shadow-lg mb-4"
                />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 font-bold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {SCIENTIFIC_COMMITTEE.head.name}
                </Typography>
                <Typography
                  variant="small"
                  color="light-blue"
                  className="mb-2 font-semibold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {SCIENTIFIC_COMMITTEE.head.title}
                </Typography>
                {/* <div className="flex items-center justify-center gap-1 mb-3">
                  <img
                    src={`https://flagsapi.com/SA/flat/32.png`}
                    alt="Saudi Arabia"
                    className="h-4 w-4"
                  />
                  <Typography
                    variant="small"
                    color="gray"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Saudi Arabia
                  </Typography>
                </div> */}
                {/* <Typography
                  variant="small"
                  color="gray"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {SCIENTIFIC_COMMITTEE.head.institution}
                </Typography> */}
              </CardBody>
            </Card>
          </div>

          {/* Committee Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SCIENTIFIC_COMMITTEE.members.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardBody className="text-center p-4">
                    <AvatarWithFallback
                      src={member.image}
                      alt={member.name}
                      size="xl"
                      className={`mx-auto border-2 border-light-blue-100 shadow-md mb-3 ${
                        member.imageCenter === "down" ? "object-top" : "object-center"
                      }`}
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-1 font-bold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="light-blue"
                      className="mb-1 font-semibold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.title}
                    </Typography>
                    {/*
                    <Typography
                      variant="small"
                      color="gray"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {member.institution}
                    </Typography> */}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* International Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              International Faculty
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="italic"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Listed in alphabetical order
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedInternationalFaculty.map((faculty, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardBody className="text-center p-6">
                    <AvatarWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      size="xxl"
                      className={`mx-auto border-4 border-light-blue-100 shadow-xl ${
                        faculty.imageCenter === "down" ? "object-top" : "object-center"
                      }`}
                    />

                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-1 mt-3 font-bold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {faculty.name}
                    </Typography>

                    {/* <Typography
                      variant="small"
                      color="light-blue"
                      className="mb-1 font-semibold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {faculty.title}
                    </Typography>

                    <Typography
                      variant="small"
                      color="gray"
                      className="mb-2"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {faculty.institution}
                    </Typography> */}

                    <div className="flex items-center justify-center gap-1 mb-3">
                      <img
                        src={`https://flagsapi.com/${faculty.countryCode}/flat/32.png`}
                        alt={faculty.country}
                        className="h-4 w-4"
                      />
                      <Typography
                        variant="small"
                        color="gray"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {faculty.country}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* National Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              National Faculty
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="italic"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Listed in alphabetical order
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedNationalFaculty.map((faculty, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardBody className="text-center p-6">
                    <AvatarWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      size="xxl"
                      className={`mx-auto border-4 border-light-blue-100 shadow-xl ${
                        faculty.imageCenter === "down" ? "object-top" : ""
                      }`}
                    />

                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-1 mt-3 font-bold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {faculty.name}
                    </Typography>

                    {/* <Typography
                      variant="small"
                      color="light-blue"
                      className="mb-1 font-semibold"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {faculty.title}
                    </Typography>

                    <Typography
                      variant="small"
                      color="gray"
                      className="mb-2"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {faculty.institution}
                    </Typography> */}

                    <div className="flex items-center justify-center gap-1 mb-3">
                      <img
                        src={`https://flagsapi.com/${faculty.countryCode}/flat/32.png`}
                        alt={faculty.country}
                        className="h-4 w-4"
                      />
                      <Typography
                        variant="small"
                        color="gray"
                        placeholder={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        {faculty.country}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Speakers;
