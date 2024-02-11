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
      <p className="text-gray-500 dark:text-gray-400 mt-4">
        Does your user know how to exit out of screens? Can they follow your
        intended user journey and buy something from the site you’ve designed?
        By running a usability test, you’ll be able to see how users will
        interact with your design once it’s live.
      </p>
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
