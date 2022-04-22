import React from 'react';
import AboutWhy from '../components/about/Why/Why';
import Feedback from '../components/common/Feedback/Feedback';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import OurWorks from '../components/common/OurWorks/OurWorks';
import HomeAbout from '../components/home/About/About';
import Wrapper from '../Wrapper';
const AboutPage = () => {
  return (
    <>
      <HomeAbout aboutPage />
      <AboutWhy />
      <OurWorks aboutPage />
      <Feedback />
    </>
  );
};

export default AboutPage;
