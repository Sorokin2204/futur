import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Feedback from '../components/common/Feedback/Feedback';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import OurWorks from '../components/common/OurWorks/OurWorks';
import HomeAbout from '../components/home/About/About';
import HomeBanner from '../components/home/Banner/Banner';
import HomeConstructor from '../components/home/Constructor/Constructor';
import HomeReviews from '../components/home/Reviews/Reviews';
import { postFeedback } from '../redux/slices/feedbackSlice';
import Wrapper from '../Wrapper';
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(
    //   postFeedback({
    //     name: 'FirstName',
    //     phone: 12345,
    //     writeInSocial: true,
    //   }),
    // );
  }, []);

  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeConstructor />
      <OurWorks />
      <HomeReviews />
      <Feedback />
    </>
  );
};

export default HomePage;
