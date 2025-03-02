import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import styled from "styled-components";

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Contactcard = styled.div`
    background: linear-gradient(145deg, #1a1a2e, #16213e);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    width: 500px;
    z-index: 1;
    height: 80%;
    align-self: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      padding: 20px;
    }

    &:hover {
        background: linear-gradient(145deg, #16213e, #1a1a2e);
        transform: translateY(-5px);
    }
`;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Section>
      <div className={`xl:mt-12 flex flex-col md:flex-row gap-10 overflow-hidden`}>
        <div className="w-full md:w-1/2 flex items-center justify-center min-h-[600px] h-screen p-4">
          <Contactcard>
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className='w-full h-full'
            >
              <p className={`${styles.sectionSubText} font-bold text-[18px] 
                bg-gradient-to-r from-purple-500 to-cyan-500 inline-block text-transparent bg-clip-text
                hover:from-cyan-500 hover:to-purple-500 transition-all duration-300
                text-center md:text-left`}
              >
                Get in touch
              </p>
              <h3 className={`${styles.sectionHeadText} text-center md:text-left`}>Contact.</h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-6 flex flex-col gap-6'
              >
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-2'>Your Name</span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-2'>Your email</span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col flex-grow'>
                  <span className='text-white font-medium mb-2'>Your Message</span>
                  <textarea
                    rows={4}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='What would you like to say?'
                    className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none h-[120px]'
                  />
                </label>

                <button
                  type='submit'
                  className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mx-auto md:mx-0'
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </motion.div>
          </Contactcard>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center min-h-[350px] md:min-h-[600px]">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='w-full h-[350px] md:h-[550px]'
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default SectionWrapper(Contact, "contact");