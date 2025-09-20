"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";
import * as Yup from "yup";

const ContactForm = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <div className="max-w-lg mx-auto mt-20 lg:mt-10 p-8
         border border-white/10
              shadow-2xl shadow-black/60
              ring-1 ring-white/2
     bg-gray-950/20 backdrop-blur-md rounded-2xl ">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Me</h2>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form data:", values);
          toast.success(`form submitted sucssefully` )
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Name
              </label>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-black/95 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-black/95 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-black/95 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-400 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
