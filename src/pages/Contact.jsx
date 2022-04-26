import React from 'react';
import clsx from 'clsx';
import Map from '../components/contact/Map/Map';
import Feedback from '../components/common/Feedback/Feedback';
import { useMediaQuery } from 'react-responsive';
const ContactPage = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 800px)',
  });
  return (
    <>
      <Map />
      <Feedback light={!isMobile} />
    </>
  );
};

export default ContactPage;
