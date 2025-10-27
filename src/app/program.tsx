"use client";

import {
  Typography,
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  ClockIcon,
  BeakerIcon,
  UserGroupIcon,
  PlayIcon,
  DocumentTextIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const PROGRAM_DAYS = [
  {
    id: "day1",
    label: "Day 1",
    date: "November 13, 2025",
    theme: "Pancreaticobiliary & Upper GI Endoscopy",
    sessions: [
      {
        time: "7:30 – 8:00",
        title: "Registration",
        type: "registration",
        speaker: "",
        description: "Conference registration and welcome materials",
      },
      {
        time: "8:00 – 8:15",
        title: "Welcome and Opening Remarks",
        type: "ceremony",
        speaker: "Dr. Abdulrahman Alfadda",
        description:
          "Official conference opening and introduction to GATE 2025",
      },
      {
        time: "",
        title: "Session 1: Pancreaticobiliary Endoscopy",
        type: "session-header",
        speaker: "",
        description: "Pancreaticobiliary Endoscopy Session",
      },
      {
        time: "8:15 – 8:35",
        title:
          "Artificial Intelligence in Pancreaticobiliary Diseases",
        type: "lecture",
        speaker: "Dr. Ali Alali",
        chairpersons: "Chairpersons: Fahad Alsohaibani, Mohamed Othman, Mustafa Ibrahim, Yousef Qari",
        description:
          "Exploring the role of AI in diagnosis and treatment of pancreaticobiliary conditions",
      },
      {
        time: "8:35 – 8:55",
        title: "Advances in Biliary Stenting and Drainage Techniques",
        type: "lecture",
        speaker: "Dr. Nawaf Alotaibi",
        description: "Latest innovations in biliary intervention techniques",
      },
      {
        time: "8:55 – 9:15",
        title:
          "Pancreatic Cystic Lesions: What the Gastroenterologist Needs to Know?",
        type: "lecture",
        speaker: "Dr. Hisham Aldhahab",
        description:
          "Comprehensive approach to pancreatic cystic lesion management",
      },
      {
        time: "9:15 – 9:35",
        title:
          "A Sparker Debate: Who is the winner? EUS or MRCP in Idiopathic Acute Pancreatitis",
        type: "debate",
        speaker: "Dr. Hussein Okasha and Dr. Shagran Binkhamis",
        description: "Interactive debate on optimal imaging modalities",
      },
      {
        time: "9:35 – 9:50",
        title: "Panel Discussion",
        type: "panel",
        speaker: "Session Panel",
        description: "Interactive discussion on pancreaticobiliary topics",
      },
      {
        time: "9:50 – 10:05",
        title: "Coffee Break",
        type: "break",
        speaker: "",
        description: "Networking and exhibition visit",
      },
      {
        time: "10:05 – 10:25",
        title:
          "Are We Doing Better by Performing the Single Use Endoscopic Procedures?",
        type: "lecture",
        speaker: "Dr. Benedetto Mangiavillano",
        chairpersons: "Chairpersons: Ghias un Nabi Tayyab, Eyad Gadour, Hisham Aljohani, Ibrahim Alhafiz, Mohammed Salah",
        description: "Evaluation of single-use endoscopy in clinical practice",
      },
      {
        time: "10:25 – 12:00",
        title: "Live Endoscopy",
        type: "live-demo",
        speaker: "",
        description: "Live demonstration of advanced endoscopic procedures",
      },
      {
        time: "12:00 – 1:00",
        title: "Lunch and Prayer",
        type: "break",
        speaker: "",
        description: "Lunch break and prayer time",
      },
      {
        time: "",
        title: "Session 2: Interventional Upper GI Endoscopy",
        type: "session-header",
        speaker: "",
        description: "Interventional Upper GI Endoscopy Session",
      },
      {
        time: "1:00 – 1:20",
        title:
          "Barrett's Esophagus Management in 2025",
        type: "lecture",
        speaker: "Dr. Abdullah Alqarawi",
        chairpersons: "Chairpersons: Mohammed Alzahrani, Abdullah Althiabi, Adel Alghamdi, Ibrahim Balbaid",
        description: "Current and future approaches to Barrett's esophagus",
      },
      {
        time: "1:20 – 1:40",
        title: "Endoscopic Management of Upper GI Strictures",
        type: "lecture",
        speaker: "Dr. Rasheed Alkhiari",
        description: "Advanced techniques for stricture management",
      },
      {
        time: "1:40 – 2:00",
        title: "An Update in Endoscopic Management of GERD",
        type: "lecture",
        speaker: "Dr. Emad Aljahdali",
        description: "Latest developments in GERD endoscopic treatment",
      },
      {
        time: "2:00 – 2:10",
        title: "Panel Discussion",
        type: "panel",
        speaker: "Session Panel",
        description: "Interactive discussion on upper GI topics",
      },
      {
        time: "2:10 – 3:40",
        title: "Live Endoscopy",
        type: "live-demo",
        speaker: "",
        chairpersons: "Chairpersons: Abdulaziz Almasoud, Abdullah Almutawa, Ammar Alotaibi, Mohamed Alboraie, Turki Alamri",
        description: "Live demonstration of upper GI procedures",
      },
      {
        time: "3:40 – 3:55",
        title: "Coffee Break",
        type: "break",
        speaker: "",
        description: "Afternoon refreshments",
      },
      {
        time: "",
        title: "Session 3: Tissue Resection and Closure",
        type: "session-header",
        speaker: "",
        description: "Tissue Resection and Closure Session",
      },
      {
        time: "3:55 – 4:15",
        title:
          "Training and Competency in ESD: Building Expertise in Complex Procedures",
        type: "lecture",
        speaker: "Dr. Mohamed Othman",
        chairpersons: "Chairpersons: Abdulrahman Alfadda, Bader Alajlan, Majid Alsahafi, Mohamed Abdelhafez",
        description: "Educational pathways for ESD competency development",
      },
      {
        time: "4:15 – 4:35",
        title: "Underwater ESD: A Novel Approach to Challenging Lesions",
        type: "lecture",
        speaker: "Dr. Shaimaa Elkholy",
        description: "Innovative underwater ESD techniques",
      },
      {
        time: "4:35 – 4:55",
        title: "New Advances in Endoscopic Closure Techniques",
        type: "lecture",
        speaker: "Dr. Fatih Aslan",
        description: "Latest developments in endoscopic closure methods",
      },
      {
        time: "4:55 – 5:10",
        title: "Panel Discussion",
        type: "panel",
        speaker: "Session Panel",
        description: "Interactive discussion on tissue resection and closure",
      },
      {
        time: "5:10 – 5:30",
        title: "Legacy Awards for Outstanding Contribution in Endoscopy",
        type: "ceremony",
        speaker: "Dr. Abdulrahman Alfadda",
        description: "Recognition of exceptional contributions to endoscopy",
      },
      {
        time: "5:30 – 5:50",
        title: "The GATE Challenge Quiz",
        type: "quiz",
        speaker: "Dr. Abdulrahman Alharbi",
        description: "Interactive quiz session for participants",
      },
      {
        time: "5:50 – 6:00",
        title: "Day 1 Closing Remarks and Pictures",
        type: "ceremony",
        speaker: "Conference Committee",
        description: "End of day summary and group photos",
      },
      {
        time: "8:00 – 10:00",
        title: "Gala Dinner",
        type: "social",
        speaker: "",
        description: "Evening gala dinner and networking",
      },
    ],
  },
  {
    id: "day2",
    label: "Day 2",
    date: "November 14, 2025",
    theme: "Third Space Endoscopy & Bariatric Procedures",
    sessions: [
      {
        time: "8:30 – 8:50",
        title:
          "Eosinophilic Esophagitis Management: How the Future Can Be Shaped",
        type: "lecture",
        speaker: "Dr. Mashiko Setshedi",
        chairpersons: "Chairpersons: Abdullah Alshahrani, Abdullah Burwaiss, Faisal Aladwani, Mohammed Albisher, Shakir Bakkari",
        description: "Future directions in eosinophilic esophagitis treatment",
      },
      {
        time: "8:50 – 10:20",
        title: "Live Endoscopy",
        type: "live-demo",
        speaker: "",
        description: "Live demonstration of advanced endoscopic procedures",
      },
      {
        time: "10:20 – 10:30",
        title: "Coffee Break",
        type: "break",
        speaker: "",
        description: "Morning refreshments",
      },
      {
        time: "",
        title: "Session 4: Third Space Endoscopy",
        type: "session-header",
        speaker: "",
        description: "Third Space Endoscopy Session",
      },
      {
        time: "10:30 – 10:50",
        title: "A Sparker Debate: Is G-POEM in Gastroparesis Really Effective?",
        type: "debate",
        speaker: "Dr. Hazem Hammad vs Dr. Hiwa Hussein",
        chairpersons: "Chairpersons: Abeer Abdellatef, Abid Allehaibi, Mohammed Tahiri, Mohammed Alsaleemi, Saad Alrajhi",
        description: "Interactive debate on G-POEM efficacy in gastroparesis",
      },
      {
        time: "10:50 – 11:10",
        title:
          "Saudi Arabia's POEM Journey: Insights from the Largest Experience",
        type: "lecture",
        speaker: "Dr. Abdulrahman Alfadda",
        description:
          "Comprehensive overview of POEM experience in Saudi Arabia",
      },
      {
        time: "11:10 – 11:30",
        title:
          "Endoscopic Zenker's Diverticulectomy: Refining Techniques and Improving Outcomes",
        type: "lecture",
        speaker: "Dr. Nawaf Almutairi",
        description: "Advanced techniques for Zenker's diverticulum management",
      },
      {
        time: "11:30 – 11:50",
        title: "Submucosal Tunneling and Removal for GI Tumors",
        type: "lecture",
        speaker: "Dr. Mohamad Elshebiny",
        description: "Innovative approaches to GI tumor removal",
      },
      {
        time: "11:50 – 12:05",
        title: "Panel Discussion",
        type: "panel",
        speaker: "Session Panel",
        description: "Interactive discussion on third space endoscopy",
      },
      {
        time: "12:05 – 1:30",
        title: "Lunch and Prayer",
        type: "break",
        speaker: "",
        description: "Lunch break and prayer time",
      },
      {
        time: "1:30 – 3:00",
        title: "Live Endoscopy",
        type: "live-demo",
        speaker: "",
        chairpersons: "Chairpersons: Abdulrahman Alkhurmi, Ali Bin Mousa, Khaled Ragab, Mohammed Al-Kassas, Mohammed Almubarak",
        description: "Live demonstration of third space procedures",
      },
      {
        time: "3:00 – 3:15",
        title: "Coffee Break",
        type: "break",
        speaker: "",
        description: "Afternoon refreshments",
      },
      {
        time: "",
        title: "Session 5: Bariatric and Endohepatology",
        type: "session-header",
        speaker: "",
        description: "Bariatric and Endohepatology Session",
      },
      {
        time: "3:15 – 3:35",
        title:
          "Long Term Outcomes of Endoscopic Sleeve Gastroplasty: What Have We Learned?",
        type: "lecture",
        speaker: "Prof. Aayed Alqahtani",
        chairpersons: "Chairpersons: Abdullah Altawili, Adeeb Elghalayini, Ahmed Bazerbashi, Meteb Alabdulwahab, Bodour Raheem",
        description: "Comprehensive analysis of ESG long-term results",
      },
      {
        time: "3:35 – 3:55",
        title: "Endoscopic Treatment of Weight Regain after Sleeve Gastrectomy",
        type: "lecture",
        speaker: "Dr. Abdullah Almusa",
        description: "Management strategies for post-sleeve weight regain",
      },
      {
        time: "3:55 – 4:15",
        title:
          "The Role of EUS as a Non-invasive Tool for Portal Hypertension Assessment",
        type: "lecture",
        speaker: "Dr. Nadeem Tehami",
        description: "EUS applications in portal hypertension evaluation",
      },
      {
        time: "4:15 – 4:35",
        title: "Endohepatology Now and Beyond: Current and Future Innovations",
        type: "lecture",
        speaker: "Dr. Piyush Somani",
        description: "Future directions in endohepatology",
      },
      {
        time: "4:35 – 4:55",
        title: "Panel Discussion",
        type: "panel",
        speaker: "Session Panel",
        description:
          "Interactive discussion on bariatric and endohepatology topics",
      },
      {
        time: "4:55 – 5:15",
        title: "Closure and Pictures",
        type: "ceremony",
        speaker: "Conference Committee",
        description: "Day 2 closing remarks and group photos",
      },
    ],
  },
  {
    id: "day3",
    label: "Day 3",
    date: "November 15, 2025",
    theme: "Masterclasses & Hands-on Training",
    sessions: [
      {
        time: "8:30 – 10:30",
        title: "Advanced Endoscopy Masterclasses",
        type: "workshop",
        speaker: "",
        description: "Parallel masterclass sessions in four tracks",
      },
      {
        time: "8:30 – 10:30",
        title: "1-ERCP",
        type: "workshop",
        speaker: "Dr. Ali Alali",
        description: "Masterclass on ERCP techniques and applications",
      },
      {
        time: "8:30 – 10:30",
        title: "2-EUS",
        type: "workshop",
        speaker: "Prof. Hussein Okasha",
        description: "Masterclass on endoscopic ultrasound",
      },
      {
        time: "8:30 – 10:30",
        title: "3-Bariatric Endoscopy",
        type: "workshop",
        speaker: "Prof. Aayed Alqahtani",
        description: "Masterclass on bariatric endoscopy procedures",
      },
      {
        time: "8:30 – 10:30",
        title: "4-Third Space Endoscopy",
        type: "workshop",
        speaker: "Dr. Shaimaa Elkholy",
        description: "Masterclass on third space endoscopy techniques",
      },
      {
        time: "10:30 – 10:45",
        title: "Coffee Break",
        type: "break",
        speaker: "",
        description: "Morning refreshments",
      },
      {
        time: "10:45 – 12:15",
        title: "Hands-on Session I",
        type: "workshop",
        speaker: "",
        description: "8 parallel training stations",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 1: ESG Procedure",
        type: "workshop",
        speaker: "Dr. Adeeb Elghalayini",
        description: "Hands-on training on endoscopic sleeve gastroplasty",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 2: ESD Techniques",
        type: "workshop",
        speaker: "Dr. Hiwa Abubakr Hussain",
        description: "Hands-on training on endoscopic submucosal dissection",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 3: EUS Cyst Drainage",
        type: "workshop",
        speaker: "Dr. Piyush Somani",
        description: "Hands-on training on EUS-guided cyst drainage",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 4: ERCP Stone Management",
        type: "workshop",
        speaker: "Dr. Nawaf Almutairi",
        description: "Hands-on training on ERCP stone extraction",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 5: EUS Variceal Coiling",
        type: "workshop",
        speaker: "Dr. Ahmad Bazerbashi",
        description: "Hands-on training on EUS-guided variceal coiling",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 6: Perforation Closure",
        type: "workshop",
        speaker: "Dr. Fatih Aslan",
        description: "Hands-on training on endoscopic perforation closure",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 7: EUS FNB",
        type: "workshop",
        speaker: "Dr. Mohammed Albisher",
        description: "Hands-on training on EUS fine needle biopsy",
      },
      {
        time: "10:45 – 12:15",
        title: "Station 8: Hemostasis Procedures",
        type: "workshop",
        speaker: "Dr. Abdullah Altawili",
        description: "Hands-on training on endoscopic hemostasis",
      },
      {
        time: "12:15 – 1:15",
        title: "Prayer and Lunch",
        type: "break",
        speaker: "",
        description: "Prayer time and lunch break",
      },
      {
        time: "1:15 – 3:15",
        title: "Hands-on Session II",
        type: "workshop",
        speaker: "",
        description: "8 parallel training stations",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 1: ESG Procedure",
        type: "workshop",
        speaker: "Dr. Abdullah Almusa",
        description: "Hands-on training on endoscopic sleeve gastroplasty",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 2: ESD Techniques",
        type: "workshop",
        speaker: "Dr. Mohammed Elsherbiny",
        description: "Hands-on training on endoscopic submucosal dissection",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 3: EUS Cyst Drainage",
        type: "workshop",
        speaker: "Dr. Hisham Aljohani",
        description: "Hands-on training on EUS-guided cyst drainage",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 4: ERCP Stone Management",
        type: "workshop",
        speaker: "Dr. Mohammed Almubarak",
        description: "Hands-on training on ERCP stone extraction",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 5: EUS Variceal Coiling",
        type: "workshop",
        speaker: "Dr. Piyush Somani",
        description: "Hands-on training on EUS-guided variceal coiling",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 6: Perforation Closure",
        type: "workshop",
        speaker: "Dr. Mohamed Abdelhafez",
        description: "Hands-on training on endoscopic perforation closure",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 7: EUS FNB",
        type: "workshop",
        speaker: "Dr. Majed Almagrabi",
        description: "Hands-on training on EUS fine needle biopsy",
      },
      {
        time: "1:15 – 3:15",
        title: "Station 8: Hemostasis Procedures",
        type: "workshop",
        speaker: "Dr. Meteb Alabdulwahab",
        description: "Hands-on training on endoscopic hemostasis",
      },
    ],
  },
];

const getSessionIcon = (type: string) => {
  switch (type) {
    case "keynote":
      return BeakerIcon;
    case "live-demo":
      return PlayIcon;
    case "workshop":
      return AcademicCapIcon;
    case "panel":
      return UserGroupIcon;
    case "lecture":
      return DocumentTextIcon;
    case "debate":
      return UserGroupIcon;
    case "quiz":
      return BeakerIcon;
    case "ceremony":
      return AcademicCapIcon;
    case "special":
      return BeakerIcon;
    case "session-header":
      return DocumentTextIcon;
    default:
      return ClockIcon;
  }
};

const getSessionColor = (type: string) => {
  switch (type) {
    case "keynote":
      return "bg-gradient-to-r from-purple-500 to-purple-600";
    case "live-demo":
      return "bg-gradient-to-r from-red-500 to-red-600";
    case "workshop":
      return "bg-gradient-to-r from-green-500 to-green-600";
    case "panel":
      return "bg-gradient-to-r from-blue-500 to-blue-600";
    case "lecture":
      return "bg-gradient-to-r from-indigo-500 to-indigo-600";
    case "debate":
      return "bg-gradient-to-r from-orange-500 to-orange-600";
    case "quiz":
      return "bg-gradient-to-r from-fuchsia-500 to-pink-600";
    case "ceremony":
      return "bg-gradient-to-r from-yellow-500 to-orange-500";
    case "special":
      return "bg-gradient-to-r from-teal-500 to-teal-600";
    case "session-header":
      return "bg-gradient-to-r from-slate-600 to-slate-700";
    case "break":
      return "bg-gradient-to-r from-gray-400 to-gray-500";
    case "social":
      return "bg-gradient-to-r from-pink-500 to-rose-500";
    default:
      return "bg-gradient-to-r from-light-blue-500 to-light-blue-600";
  }
};

export function Program() {
  return (
    <section
      id="program"
      className="py-20 bg-gradient-to-br from-gray-50 to-light-blue-50"
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
            variant="h2"
            className="text-center mb-2"
            color="light-blue"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Conference Program
          </Typography>
        </motion.div>

        {/* Program Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Tabs value="day1" className="w-full">
            <TabsHeader
              className="bg-light-blue-50 p-2"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {PROGRAM_DAYS.map((day) => (
                <Tab
                  key={day.id}
                  value={day.id}
                  className="font-semibold"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="h-5 w-5" />
                    <div className="text-left">
                      <div>{day.label}</div>
                      <div className="text-xs opacity-70">
                        {day.date.split(",")[0]}
                      </div>
                    </div>
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody
              className="mt-8"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {PROGRAM_DAYS.map((day) => (
                <TabPanel key={day.id} value={day.id} className="p-0">
                  <div className="mb-8 text-center">
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
                      {day.date}
                    </Typography>
                    <Chip
                      value={day.theme}
                      className="bg-light-blue-500 text-white"
                    />
                  </div>

                  <div className="space-y-4">
                    {day.sessions.map((session, idx) => {
                      const IconComponent = getSessionIcon(session.type);
                      const colorClass = getSessionColor(session.type);

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.02 }}
                          viewport={{ once: true }}
                        >
                          <Card
                            className={`hover:shadow-lg transition-all duration-300 ${
                              session.type === "live-demo"
                                ? "border-l-4 border-red-500 bg-red-50"
                                : session.type === "debate"
                                ? "border-l-4 border-orange-500 bg-orange-50"
                                : session.type === "quiz"
                                ? "border-l-4 border-fuchsia-500"
                                : ""
                            }`}
                            placeholder={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            <CardBody
                              className="p-6"
                              placeholder={undefined}
                              onResize={undefined}
                              onResizeCapture={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}
                            >
                              <div className="flex items-start gap-4">
                                {(session.type === "live-demo" ||
                                  session.type === "debate" ||
                                  session.type === "quiz") && (
                                  <div
                                    className={`${colorClass} p-3 rounded-lg flex-shrink-0`}
                                  >
                                    <IconComponent className="h-6 w-6 text-white" />
                                  </div>
                                )}

                                <div className="flex-grow">
                                  <div className="flex items-start justify-between mb-2">
                                    {session.time && (
                                      <div className="flex items-center gap-2">
                                        <ClockIcon className="h-4 w-4 text-gray-500" />
                                        <Typography
                                          variant="small"
                                          color="gray"
                                          className="font-semibold"
                                          placeholder={undefined}
                                          onResize={undefined}
                                          onResizeCapture={undefined}
                                          onPointerEnterCapture={undefined}
                                          onPointerLeaveCapture={undefined}
                                        >
                                          {session.time}
                                        </Typography>
                                      </div>
                                    )}
                                    {session.type !== "session-header" && (
                                      <Chip
                                        size="sm"
                                        value={session.type
                                          .replace("-", " ")
                                          .toUpperCase()}
                                        className="bg-gray-100 text-gray-700 text-xs"
                                      />
                                    )}
                                  </div>

                                  <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="mb-2 font-bold"
                                    placeholder={undefined}
                                    onResize={undefined}
                                    onResizeCapture={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}
                                  >
                                    {session.title}
                                  </Typography>

                                  {session.speaker && (
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
                                      {session.speaker}
                                    </Typography>
                                  )}

                                  {session.chairpersons && (
                                    <Typography
                                      variant="small"
                                      className="mb-2 font-semibold text-green-600"
                                      placeholder={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                      onPointerEnterCapture={undefined}
                                      onPointerLeaveCapture={undefined}
                                    >
                                      {session.chairpersons}
                                    </Typography>
                                  )}

                                  {/* <Typography variant="small" color="gray" className="leading-relaxed">
                                    {session.description}
                                  </Typography> */}
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default Program;