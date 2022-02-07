import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import HeroSection from './HeroSection/HeroSection';
import MidSection from './MidSection/MidSection';
import MidSectionCard from './MidSection/MidSectionCard';
import JoinUsCard from './JoinUsCard/JoinUsCard';

const HomeScreen = () => {
  return (
    <Fragment>
      <HeroSection />
      <MidSection />
      <MidSectionCard />
      <JoinUsCard />
    </Fragment>
  );
};

export default HomeScreen;
