import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Dalaxshan- Portfolio",
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;