'use client';

import { Blockquote } from 'flowbite-react';
import Future from './Future';
import Stats from './Stats';
import ContactForm from './ContactForm';

const About = () => {
  return (
    <>
      <Future />
      <Stats />
      <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
        &quot;E-Lit Emporium is just awesome. It contains tons of predesigned
        components and pages starting from login screen to complex dashboard.
        Perfect choice for your next SaaS application.&quot;
      </Blockquote>

      <ContactForm />
    </>
  );
};
export default About;
