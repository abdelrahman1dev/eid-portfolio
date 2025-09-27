"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import { useTranslations } from "next-intl";

import { fetchN8NData } from "../../api/n8n";
import Whatsapp from "../../components/WhatsAppico";

const ContactForm = () => {
  const t = useTranslations();
  // Validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t('contact.validation.nameTooShort'))
      .max(50, t('contact.validation.nameTooLong'))
      .required(t('contact.validation.nameRequired')),
    email: Yup.string()
      .email(t('contact.validation.emailInvalid'))
      .required(t('contact.validation.emailRequired')),
    message: Yup.string()
      .min(10, t('contact.validation.messageTooShort'))
      .required(t('contact.validation.messageRequired')),
  });

  return (
    <div className="max-w-lg mx-auto mt-20 lg:mt-10 p-8
         border border-white/10
              shadow-2xl shadow-black/60
              ring-1 ring-white/2
     bg-gray-950/20 backdrop-blur-md rounded-2xl ">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{t('contact.title')}</h2>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form data:", values);
          toast.success(t('contact.toast.success'))
          resetForm();
          fetchN8NData(values.name, values.email, values.message)
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
              toast.error(t('contact.toast.error'));
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                {t('contact.name')}
              </label>
              <Field
                type="text"
                name="name"
                placeholder={t('contact.namePlaceholder')}
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
                {t('contact.email')}
              </label>
              <Field
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
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
                {t('contact.message')}
              </label>
              <Field
                as="textarea"
                name="message"
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
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
              {isSubmitting ? t('contact.submitting') : t('contact.submit')}
            </button>
          </Form>
        )}
      </Formik>


      <div className="mt-6 text-center text-gray-400 text-sm">
        <h1>{t('contact.or')}</h1>
        <h1>{t('contact.contactWith')}</h1>
        <button className=" mt-2 text-green-500 p-2 rounded-3xl cursor-pointer hover:bg-green-500 hover:text-white transition  border border-green-500" >

          <Whatsapp size="20" text={t('contact.whatsapp')} />



        </button>

      </div>
    </div>
  );
};

export default ContactForm;



