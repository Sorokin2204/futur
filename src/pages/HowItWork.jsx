import React from 'react';
import clsx from 'clsx';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import Feedback from '../components/common/Feedback/Feedback';
import Steps from '../components/howToWork/Steps/Steps';
import Wrapper from '../Wrapper';
const HowItWorkPage = () => {
  return (
    <>
      <Steps />
      <Feedback />
    </>
  );
};

export default HowItWorkPage;
