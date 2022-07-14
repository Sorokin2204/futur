import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Feedback from '../components/common/Feedback/Feedback';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';
import HomePackages from '../components/common/HomePackages/HomePackages';
import OurWorks from '../components/common/OurWorks/OurWorks';
import OurWorksUpdate from '../components/common/OurWorksUpdate/OurWorksUpdate';
import HomeAbout from '../components/home/About/About';
import Adv from '../components/home/Adv/Adv';
import HomeBanner from '../components/home/Banner/Banner';
import HomeConstructor from '../components/home/Constructor/Constructor';
import HomeBrands from '../components/home/HomeBrands/HomeBrands';
import HomeIncluded from '../components/home/HomeIncluded/HomeIncluded';
import HomeSteps from '../components/home/HomeSteps/HomeSteps';
import HomeReviews from '../components/home/Reviews/Reviews';
import { postFeedback } from '../redux/slices/feedbackSlice';
import { getPackages, getPackagesList } from '../redux/slices/packageSlice';
import { getWorks } from '../redux/slices/workSlice';
import Wrapper from '../Wrapper';
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorks());
    dispatch(getPackages());
  }, []);

  return (
    <>
      <HomeBanner />
      <OurWorksUpdate />
      <Adv />
      <HomePackages />
      <HomeSteps />
      <HomeIncluded />
      {/* <HomeAbout />
      <HomeConstructor /> */}
      {/* <OurWorks /> */}
      <HomeReviews />
      <Feedback />
      <HomeBrands />
    </>
  );
};

export default HomePage;
