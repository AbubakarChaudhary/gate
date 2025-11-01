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
    sessionBlocks: [
      {
        type: "registration",
        sessions: [
          {
            time: "7:30 – 8:00",
            title: "Registration",
            type: "registration",
            speaker: "",
          },
        ],
      },
      {
        type: "ceremony",
        sessions: [
          {
            time: "8:00 – 8:15",
            title: "Welcome and Opening Remarks",
            type: "ceremony",
            speaker: "Dr. Abdulrahman Alfadda",
          },
        ],
      },
      {
        type: "session-header",
        sessionTitle: "Session 1: Pancreaticobiliary Endoscopy",
        chairpersons: "Chairpersons: Fahad Alsohaibani, Mohamed Othman, Mustafa Ibrahim, Yousef Qari",
        sessions: [
          {
            time: "8:15 – 8:35",
            title: "Artificial Intelligence in Pancreaticobiliary Diseases",
            type: "lecture",
            speaker: "Dr. Ali Alali",
          },
          {
            time: "8:35 – 8:55",
            title: "Advances in Biliary Stenting and Drainage Techniques",
            type: "lecture",
            speaker: "Dr. Nawaf Alotaibi",
          },
          {
            time: "8:55 – 9:15",
            title: "Pancreatic Cystic Lesions: What the Gastroenterologist Needs to Know?",
            type: "lecture",
            speaker: "Dr. Hisham Aldhahab",
          },
          {
            time: "9:15 – 9:35",
            title: "A Sparker Debate: Who is the winner? EUS or MRCP in Idiopathic Acute Pancreatitis",
            type: "debate",
            speaker: "Dr. Hussein Okasha and Dr. Carlos Blazques",
          },
          {
            time: "9:35 – 9:50",
            title: "Panel Discussion",
            type: "panel",
            speaker: "Session Panel",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "9:50 – 10:05",
            title: "Coffee Break",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "lecture-block",
        chairpersons: "Chairpersons:  Eyad Gadour, Ghias un Nabi Tayyab, Hisham Aljohani, Ibrahim Alhafiz, Mohammed Salah",
        sessions: [
          {
            time: "10:05 – 10:25",
            title: "Are We Doing Better by Performing the Single Use Endoscopic Procedures?",
            type: "lecture",
            speaker: "Dr. Benedetto Mangiavillano",
          },
          {
            time: "10:25 – 12:00",
            title: "Live Endoscopy 1",
            type: "live-demo",
            speaker: "",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "12:00 – 1:00",
            title: "Lunch and Prayer",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "session-header",
        sessionTitle: "Session 2: Interventional Upper GI Endoscopy",
        chairpersons: "Chairpersons: Abdullah Althiabi, Adel Alghamdi, Bodour Raheem, Ibrahim Balbaid",
        sessions: [
          {
            time: "1:00 – 1:20",
            title: "Barrett's Esophagus Management in 2025",
            type: "lecture",
            speaker: "Dr. Abdullah Alqarawi",
          },
          {
            time: "1:20 – 1:40",
            title: "Endoscopic Management of Upper GI Strictures",
            type: "lecture",
            speaker: "Dr. Rasheed Alkhiari",
          },
          {
            time: "1:40 – 2:00",
            title: "An Update in Endoscopic Management of GERD",
            type: "lecture",
            speaker: "Dr. Emad Aljahdali",
          },
          {
            time: "2:00 – 2:10",
            title: "Panel Discussion",
            type: "panel",
            speaker: "Session Panel",
          },
        ],
      },
      {
        type: "live-demo-block",
        chairpersons: "Chairpersons: Abdulaziz Almasoud, Abdullah Almutawa, Ammar Alotaibi, Mohamed Alboraie, Mohammed Albisher",
        sessions: [
          {
            time: "2:10 – 3:40",
            title: "Live Endoscopy 2",
            type: "live-demo",
            speaker: "",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "3:40 – 3:55",
            title: "Coffee Break",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "session-header",
        sessionTitle: "Session 3: Tissue Resection and Closure",
        chairpersons: "Chairpersons: Abdulrahman Alfadda, Bader Alajlan, Majid Alsahafi, Mohamed Abdelhafez",
        sessions: [
          {
            time: "3:55 – 4:15",
            title: "Training and Competency in ESD: Building Expertise in Complex Procedures",
            type: "lecture",
            speaker: "Dr. Mohamed Othman",
          },
          {
            time: "4:15 – 4:35",
            title: "Underwater ESD: A Novel Approach to Challenging Lesions",
            type: "lecture",
            speaker: "Dr. Shaimaa Elkholy",
          },
          {
            time: "4:35 – 4:55",
            title: "New Advances in Endoscopic Closure Techniques",
            type: "lecture",
            speaker: "Dr. Fatih Aslan",
          },
          {
            time: "4:55 – 5:10",
            title: "Panel Discussion",
            type: "panel",
            speaker: "Session Panel",
          },
        ],
      },
      {
        type: "ceremony",
        sessions: [
          {
            time: "5:10 – 5:30",
            title: "Legacy Awards for Outstanding Contribution in Endoscopy",
            type: "ceremony",
            speaker: "Dr. Abdulrahman Alfadda",
          },
          {
            time: "5:30 – 5:50",
            title: "The GATE Challenge Quiz",
            type: "quiz",
            speaker: "Dr. Abdulrahman Alharbi",
          },
          {
            time: "5:50 – 6:00",
            title: "Day 1 Closing Remarks and Pictures",
            type: "ceremony",
            speaker: "Conference Committee",
          },
        ],
      },
      {
        type: "social",
        sessions: [
          {
            time: "8:00 – 10:00",
            title: "Gala Dinner",
            type: "social",
            speaker: "",
          },
        ],
      },
    ],
  },
  {
    id: "day2",
    label: "Day 2",
    date: "November 14, 2025",
    theme: "Third Space Endoscopy & Bariatric Procedures",
    sessionBlocks: [
      {
        type: "lecture-block",
        chairpersons: "Chairpersons: Abdullah Alshahrani, Abdullah Burwaiss, Faisal Aladwani, Shakir Bakkari, Turki Alamri",
        sessions: [
          {
            time: "8:30 – 8:50",
            title: "Eosinophilic Esophagitis Management: How the Future Can Be Shaped",
            type: "lecture",
            speaker: "Dr. Mashinko Setshedi",
          },
          {
            time: "8:50 – 10:20",
            title: "Live Endoscopy 3",
            type: "live-demo",
            speaker: "",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "10:20 – 10:30",
            title: "Coffee Break",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "session-header",
        sessionTitle: "Session 4: Third Space Endoscopy",
        chairpersons: "Chairpersons: Abeer Abdellatef, Abid Allehaibi, Mohammed Tahiri, Mohammed Alsaleemi, Saad Alrajhi",
        sessions: [
          {
            time: "10:30 – 10:50",
            title: "A Sparker Debate: Is G-POEM in Gastroparesis Really Effective?",
            type: "debate",
            speaker: "Dr. Hazem Hammad vs Dr. Hiwa Hussein",
          },
          {
            time: "10:50 – 11:10",
            title: "Saudi Arabia's POEM Journey: Insights from the Largest Experience",
            type: "lecture",
            speaker: "Dr. Abdulrahman Alfadda",
          },
          {
            time: "11:10 – 11:30",
            title: "Endoscopic Zenker's Diverticulectomy: Refining Techniques and Improving Outcomes",
            type: "lecture",
            speaker: "Dr. Nawaf Almutairi",
          },
          {
            time: "11:30 – 11:50",
            title: "Submucosal Tunneling and Removal for GI Tumors",
            type: "lecture",
            speaker: "Dr. Mohamad Elshebiny",
          },
          {
            time: "11:50 – 12:05",
            title: "Panel Discussion",
            type: "panel",
            speaker: "Session Panel",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "12:05 – 1:30",
            title: "Lunch and Prayer",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "live-demo-block",
        chairpersons: "Chairpersons: Abdulrahman Alkhurmi, Ali Bin Mousa, Khaled Ragab, Mohammed Al-Kassas, Mohammed Almubarak",
        sessions: [
          {
            time: "1:30 – 3:00",
            title: "Live Endoscopy 4",
            type: "live-demo",
            speaker: "",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "3:00 – 3:15",
            title: "Coffee Break",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "session-header",
        sessionTitle: "Session 5: Bariatric and Endohepatology",
        chairpersons: "Chairpersons: Abdullah Altawili, Adeeb Elghalayini, Ahmed Bazerbashi, Meteb Alabdulwahab",
        sessions: [
          {
            time: "3:15 – 3:35",
            title: "Long Term Outcomes of Endoscopic Sleeve Gastroplasty: What Have We Learned?",
            type: "lecture",
            speaker: "Prof. Aayed Alqahtani",
          },
          {
            time: "3:35 – 3:55",
            title: "Endoscopic Treatment of Weight Regain after Sleeve Gastrectomy",
            type: "lecture",
            speaker: "Dr. Abdullah Almusa",
          },
          {
            time: "3:55 – 4:15",
            title: "The Role of EUS as a Non-invasive Tool for Portal Hypertension Assessment",
            type: "lecture",
            speaker: "Dr. Nadeem Tehami",
          },
          {
            time: "4:15 – 4:35",
            title: "Endohepatology Now and Beyond: Current and Future Innovations",
            type: "lecture",
            speaker: "Dr. Piyush Somani",
          },
          {
            time: "4:35 – 4:55",
            title: "Panel Discussion",
            type: "panel",
            speaker: "Session Panel",
          },
        ],
      },
      {
        type: "ceremony",
        sessions: [
          {
            time: "4:55 – 5:15",
            title: "Closure and Pictures",
            type: "ceremony",
            speaker: "",
          },
        ],
      },
    ],
  },
  {
    id: "day3",
    label: "Day 3",
    date: "November 15, 2025",
    theme: "Masterclasses & Hands-on Training",
    sessionBlocks: [
      {
        type: "workshop",
        sessions: [
          {
            time: "8:30 – 10:30",
            title: "Advanced Endoscopy Masterclasses",
            type: "workshop-header",
            speaker: "",
          },
          {
            time: "8:30 – 10:30",
            title: "1-ERCP",
            type: "workshop",
            speaker: "Dr. Ali Alali",
          },
          {
            time: "8:30 – 10:30",
            title: "2-EUS",
            type: "workshop",
            speaker: "Prof. Hussein Okasha",
          },
          {
            time: "8:30 – 10:30",
            title: "3-Bariatric Endoscopy",
            type: "workshop",
            speaker: "Prof. Aayed Alqahtani",
          },
          {
            time: "8:30 – 10:30",
            title: "4-Third Space Endoscopy",
            type: "workshop",
            speaker: "Dr. Shaimaa Elkholy",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "10:30 – 10:45",
            title: "Coffee Break",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "workshop",
        sessions: [
          {
            time: "10:45 – 12:15",
            title: "Hands-on Session I",
            type: "workshop-header",
            speaker: "",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 1: ESG Procedure",
            type: "workshop",
            speaker: "Dr. Adeeb Elghalayini",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 2: ESD Techniques",
            type: "workshop",
            speaker: "Dr. Hiwa Abubakr Hussain",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 3: EUS Cyst Drainage",
            type: "workshop",
            speaker: "Dr. Piyush Somani",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 4: ERCP Stone Management",
            type: "workshop",
            speaker: "Dr. Nawaf Almutairi",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 5: EUS Variceal Coiling",
            type: "workshop",
            speaker: "Dr. Ahmad Bazerbashi",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 6: Perforation Closure",
            type: "workshop",
            speaker: "Dr. Fatih Aslan",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 7: EUS FNB",
            type: "workshop",
            speaker: "Dr. Mohammed Albisher",
          },
          {
            time: "10:45 – 12:15",
            title: "Station 8: Hemostasis Procedures",
            type: "workshop",
            speaker: "Dr. Abdullah Altawili",
          },
        ],
      },
      {
        type: "break",
        sessions: [
          {
            time: "12:15 – 1:15",
            title: "Prayer and Lunch",
            type: "break",
            speaker: "",
          },
        ],
      },
      {
        type: "workshop",
        sessions: [
          {
            time: "1:15 – 3:15",
            title: "Hands-on Session II",
            type: "workshop-header",
            speaker: "",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 1: ESG Procedure",
            type: "workshop",
            speaker: "Dr. Abdullah Almusa",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 2: ESD Techniques",
            type: "workshop",
            speaker: "Dr. Mohammed Elsherbiny",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 3: EUS Cyst Drainage",
            type: "workshop",
            speaker: "Dr. Hisham Aljohani",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 4: ERCP Stone Management",
            type: "workshop",
            speaker: "Dr. Mohammed Almubarak",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 5: EUS Variceal Coiling",
            type: "workshop",
            speaker: "Dr. Piyush Somani",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 6: Perforation Closure",
            type: "workshop",
            speaker: "Dr. Mohamed Abdelhafez",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 7: EUS FNB",
            type: "workshop",
            speaker: "Dr. Majed Almagrabi",
          },
          {
            time: "1:15 – 3:15",
            title: "Station 8: Hemostasis Procedures",
            type: "workshop",
            speaker: "Dr. Meteb Alabdulwahab",
          },
        ],
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
    case "workshop-header":
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
    case "workshop-header":
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
          <Tabs value="day1" className="max-w-[900px] mx-auto">
            <TabsHeader
              className="flex-wrap md:flex-nowrap bg-light-blue-200 p-2"
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
                  className="font-semibold py-4 px-4"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <div className="flex  items-center gap-2">
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

                  <div className="space-y-6">
                    {day.sessionBlocks.map((block, blockIdx) => (
                      <motion.div
                        key={blockIdx}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: blockIdx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          className={`hover:shadow-xl transition-all duration-300 rounded-xl ${
                            block.type === "session-header" || block.type === "lecture-block" || block.type === "live-demo-block"
                              ? "border-2 border-light-blue-300 bg-light-blue-50/30"
                              : ""
                          }`}
                          placeholder={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          <CardBody
                            className="p-6 bg-blue-50 rounded-xl"
                            placeholder={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          >
                            {/* Session Title Header */}
                            {block.sessionTitle && (
                              <div className="mb-4 pb-0 border-b-2 border-slate-300 ">
                                <Typography
                                  variant="h5"
                                  className="font-bold text-slate-700 mb-2 text-red-300"
                                  placeholder={undefined}
                                  onResize={undefined}
                                  onResizeCapture={undefined}
                                  onPointerEnterCapture={undefined}
                                  onPointerLeaveCapture={undefined}
                                >
                                  {block.sessionTitle}
                                </Typography>
                              </div>
                            )}

                            {/* Chairpersons Block */}
                            {block.chairpersons && (
                              <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                                <Typography
                                  variant="small"
                                  className="font-bold text-green-700 flex items-center gap-2"
                                  placeholder={undefined}
                                  onResize={undefined}
                                  onResizeCapture={undefined}
                                  onPointerEnterCapture={undefined}
                                  onPointerLeaveCapture={undefined}
                                >
                                  <UserGroupIcon className="h-5 w-5" />
                                  {block.chairpersons}
                                </Typography>
                              </div>
                            )}

                            {/* Sessions within the block */}
                            <div className="space-y-3">
                              {block.sessions.map((session, idx) => {
                                const IconComponent = getSessionIcon(session.type);
                                const colorClass = getSessionColor(session.type);

                                return (
                                <div
                                    key={idx}
                                    className={`p-4 rounded-lg transition-all duration-200 ${
                                      session.type === "live-demo"
                                        ? "bg-red-50 border-l-4 border-red-500"
                                        : session.type === "debate"
                                        ? "bg-orange-50 border-l-4 border-orange-500"
                                        : session.type === "break"
                                        ? "bg-gray-100"
                                        : session.type === "workshop-header"
                                        ? "bg-green-50 border-l-4 border-green-500"
                                        : session.title === "Legacy Awards for Outstanding Contribution in Endoscopy"
                                        ? "bg-yellow-50 border-l-4 border-yellow-500"
                                        : session.title === "The GATE Challenge Quiz"
                                        ? "bg-yellow-50 border-l-4 border-yellow-500"
                                        : "bg-white border-l-4 border-gray-200 hover:border-light-blue-400"
                                    }`}
                                  >
                                    <div className="flex items-start gap-4">
                                      {(session.type === "live-demo" ||
                                        session.type === "debate" ||
                                        session.type === "quiz" ||
                                        session.type === "workshop-header") && (
                                        <div className={`${colorClass} p-3 rounded-lg flex-shrink-0`}>
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
                                          {session.type !== "session-header" && session.type !== "workshop-header" && (
                                            <Chip
                                              size="sm"
                                              value={session.type.replace("-", " ").toUpperCase()}
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
                                            className="font-semibold"
                                            placeholder={undefined}
                                            onResize={undefined}
                                            onResizeCapture={undefined}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                          >
                                            {session.speaker}
                                          </Typography>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>
                    ))}
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