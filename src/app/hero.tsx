"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconButton, Button, Typography } from "@material-tailwind/react";
import {
  PlayIcon,
  CalendarDaysIcon,
  MapPinIcon,
  UserGroupIcon,
  UsersIcon,
  PlayCircleIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Enhanced Smooth Counter Component
function SmoothCounter({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  suffix = "",
  className = "",
}: {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);

  // Calculate spring configuration based on duration
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
    restDelta: 0.001,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Initialize display value
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = `${from}${suffix}`;
    }
  }, [from, suffix]);

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, motionValue, to, delay]);

  // Update display on spring value changes with smooth interpolation
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Use Math.floor for smoother visual progression on the way up
        const displayValue =
  latest >= to - 0.01 ? to : Math.round(latest);
ref.current.textContent = `${displayValue}${suffix}`;

      }
    });

    return () => unsubscribe();
  }, [springValue, suffix, to]);

  return <span className={className} ref={ref} />;
}

// Countdown Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const eventDate = new Date("2025-11-13T09:00:00").getTime(); // November 13, 2025 at 9 AM

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
        const days = Math.floor(
          (difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
        setShowCountdown(true);
      } else {
        // Event has started or passed - hide the countdown
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowCountdown(false);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    {
      label: "Months",
      value: timeLeft.months,
      color: "from-light-blue-400 to-cyan-400",
    },
    {
      label: "Days",
      value: timeLeft.days,
      color: "from-green-400 to-teal-400",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      color: "from-blue-400 to-purple-400",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      color: "from-cyan-400 to-teal-400",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      color: "from-orange-400 to-red-400",
    },
  ];

  // Don't render the countdown if the event has started or passed
  if (!showCountdown) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className=" mb-8"
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <ClockIcon className="h-6 w-6 text-light-blue-200" />
        <Typography
          variant="h6"
          color="white"
          className="font-semibold"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Time Until Event
        </Typography>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            className="group relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${unit.color} rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
            ></div>
            <div className="relative bg-white/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg">
              <Typography
                variant="h3"
                color="white"
                className="font-bold text-2xl md:text-3xl mb-1"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {unit.value.toString().padStart(2, "0")}
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="opacity-90 font-medium text-xs md:text-sm"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {unit.label}
              </Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <div className="pt-36 pb-12 relative min-h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/hero.jpg"
          alt="Medical Endoscopy Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Blue overlay to maintain theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-blue-900/85 via-light-blue-800/80 to-blue-900/85"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-light-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      {/* Medical pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative pt-24 pb-12 md:pt-0 md:pb-0 z-10 grid min-h-screen px-8">
        <div className="container relative my-auto mx-auto grid place-items-center text-center">
          {/* Date and location */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <CalendarDaysIcon className="h-5 w-5 text-light-blue-200" />
              <Typography
                variant="h6"
                color="white"
                className="font-semibold"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                13th-15th NOVEMBER 2025
              </Typography>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <MapPinIcon className="h-5 w-5 text-light-blue-200" />
              <Typography
                variant="h6"
                color="white"
                className="font-semibold"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Crowne Plaza Riyadh Rdc Hotel, Riyadh, Saudi Arabia
              </Typography>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Typography
              variant="h1"
              color="white"
              className="lg:max-w-5xl mb-4 text-4xl lg:text-6xl font-bold leading-tight"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              GLOBAL SUMMIT OF ADVANCED AND THIRD SPACE ENDOSCOPY (GATE)
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="lead"
              color="white"
              className="mt-4 mb-8 w-full md:max-w-full lg:max-w-4xl text-lg lg:text-xl font-normal opacity-90"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Join world-renowned experts for three days of cutting-edge
              presentations, live demonstrations, master classes, and hands-on
              experiences in advanced endoscopic techniques.
              <span className="text-light-blue-200 font-semibold block mt-2">
                24 hours CME Accredited
              </span>
            </Typography>
          </motion.div>

          {/* Countdown Timer */}
          <CountdownTimer />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button
              size="lg"
              className="bg-light-blue-500 hover:bg-light-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-light-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("registration")?.offsetTop,
                  behavior: "smooth",
                });
              }}
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Register Now
            </Button>
            <Button
              variant="outlined"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-light-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("program")?.offsetTop,
                  behavior: "smooth",
                });
              }}
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              View Program
            </Button>
          </motion.div>

          {/* Conference highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl"
          >
            {/* International Speakers Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-light-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-light-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <Typography
                  variant="h2"
                  color="white"
                  className="font-bold mb-2 text-4xl"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <SmoothCounter
                      to={26}
                      suffix=""
                      duration={2.5}
                      delay={0.2}
                    />
                  </motion.div>
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  className="opacity-90 font-medium"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  International Experts
                </Typography>
                <div className="mt-3 w-12 h-1 bg-gradient-to-r from-light-blue-400 to-cyan-400 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* National Experts Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <UsersIcon className="h-8 w-8 text-white" />
                </div>
                <Typography
                  variant="h2"
                  color="white"
                  className="font-bold mb-2 text-4xl"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <SmoothCounter
                      to={42}
                      suffix=""
                      duration={2.5}
                      delay={0.2}
                    />
                  </motion.div>
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  className="opacity-90 font-medium"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  National Experts
                </Typography>
                <div className="mt-3 w-12 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Live Demonstrations Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <PlayCircleIcon className="h-8 w-8 text-white" />
                </div>
                <Typography
                  variant="h2"
                  color="white"
                  className="font-bold mb-2 text-4xl"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    <SmoothCounter
                      to={22}
                      suffix=""
                      duration={2.2}
                      delay={0.4}
                    />
                  </motion.div>
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  className="opacity-90 font-medium"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Live Demonstrations
                </Typography>
                <div className="mt-3 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Days of Excellence Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300 shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CalendarIcon className="h-8 w-8 text-white" />
                </div>
                <Typography
                  variant="h2"
                  color="white"
                  className="font-bold mb-2 text-4xl"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <SmoothCounter to={3} duration={1.8} delay={0.6} />
                  </motion.div>
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  className="opacity-90 font-medium"
                  placeholder={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Days of Excellence
                </Typography>
                <div className="mt-3 w-12 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
