import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const useHook = () => {
  const formProps = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
      try {
        // EmailJS configuration - these should be in your .env.local file
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS configuration is missing. Please check your environment variables.");
        }

        // Prepare template parameters matching EmailJS template
        const templateParams = {
          name: values.name,
          email: values.email,
          company: values.company || "Not provided",
          details: values.message,
        };

        // Send email using EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        // Reset form after successful submission
        resetForm();
        setStatus("success");
      } catch (error) {
        console.error("EmailJS error:", error);
        setStatus("error");
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      company: Yup.string(),
      message: Yup.string().required("Project details are required"),
    }),
  });
  return { ...formProps };
};

export default useHook;
