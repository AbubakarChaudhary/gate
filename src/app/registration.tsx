"use client";

import { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Select,
  Option,
  Alert,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CreditCardIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { submitRegistration, checkEmailRegistration } from "@/lib/actions";

export function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    country: "",
    profession: "",
    specialization: "",
    dietaryRequirements: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.institution ||
      !formData.country ||
      !formData.profession ||
      !formData.specialization
    ) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Google Sheets using server action
      const result = await submitRegistration(formData);
      
      if (result.success) {
        // Show success modal instead of alert
        setShowSuccessModal(true);
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          institution: "",
          country: "",
          profession: "",
          specialization: "",
          dietaryRequirements: "",
        });
      } else if (result.error === "EMAIL_EXISTS") {
        // Show browser alert for duplicate email
        alert("This email address has already been registered for GATE 2025. Please use a different email address or contact us if you need assistance.");
      } else {
        throw new Error(result.error || "Failed to submit registration");
      }
    } catch (error) {
      console.error('Registration error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section id="registration" className="py-20 bg-white">
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
            Join GATE 2025
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
            Conference Registration
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
            Secure your place at the premier gathering of endoscopy experts.
            Register now to access exclusive content, networking opportunities,
            and CME credits.
          </Typography>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="shadow-2xl" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardBody className="p-8" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-8 text-center"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Registration Form
              </Typography>

              {showError && (
                <Alert
                  color="red"
                  icon={<ExclamationTriangleIcon className="h-6 w-6" />}
                  className="mb-6"
                >
                  Please fill in all required fields and try again.
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-4" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Personal Information
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      icon={<UserIcon className="h-5 w-5" />}
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                    <Input
                      label="Last Name"
                      icon={<UserIcon className="h-5 w-5" />}
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-4" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Contact Information
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      label="Email Address"
                      icon={<EnvelopeIcon className="h-5 w-5" />}
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                    <Input
                      label="Phone Number"
                      icon={<PhoneIcon className="h-5 w-5" />}
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-4" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Professional Information
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      label="Institution/Hospital"
                      icon={<BuildingOfficeIcon className="h-5 w-5" />}
                      value={formData.institution}
                      onChange={(e) =>
                        handleInputChange("institution", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                    <Input
                      label="Country"
                      icon={<GlobeAltIcon className="h-5 w-5" />}
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="Profession"
                      value={formData.profession}
                      onChange={(value) =>
                        handleInputChange("profession", value)
                      }
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <Option value="consultant">Consultant Physician</Option>
                      <Option value="resident">Resident/Fellow</Option>
                      <Option value="nurse">Nurse</Option>
                      <Option value="technician">Technician</Option>
                      <Option value="researcher">Researcher</Option>
                      <Option value="other">Other</Option>
                    </Select>
                    <Input
                      label="Specialization"
                      value={formData.specialization}
                      onChange={(e) =>
                        handleInputChange("specialization", e.target.value)
                      }
                      required
                      crossOrigin={undefined}
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-4" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Additional Information
                  </Typography>
                  <Textarea
                    label="Dietary Requirements or Special Needs"
                    value={formData.dietaryRequirements}
                    onChange={(e) =>
                      handleInputChange("dietaryRequirements", e.target.value)
                    }
                    className="mb-4"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="flex justify-center items-center mx-auto bg-light-blue-500 hover:bg-light-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-light-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                    placeholder={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Register Now"
                    )}
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </motion.div>

        {/* Success Modal */}
        <Dialog
          open={showSuccessModal}
          handler={handleCloseSuccessModal}
          size="sm"
          className="bg-white shadow-2xl"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <DialogHeader
            className="justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="text-center w-full">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>
              <Typography
                variant="h4"
                color="green"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Registration Successful!
              </Typography>
            </div>
          </DialogHeader>
          <DialogBody
            className="text-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              variant="lead"
              className="font-normal text-gray-700"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Thank you for registering for GATE 2025!
            </Typography>
            <Typography
              variant="paragraph"
              className="mt-4 text-gray-600"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              We&apos;ve received your registration and will send you a confirmation email shortly. 
              Looking forward to seeing you at the conference!
            </Typography>
          </DialogBody>
          <DialogFooter
            className="justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Button
              onClick={handleCloseSuccessModal}
              className="bg-green-600 hover:bg-green-700"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </section>
  );
}

export default Registration;