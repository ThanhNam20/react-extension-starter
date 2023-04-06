import React from 'react';
import { HotDeal, HolidayDeal, GoldDeal } from '../../assets';
import { UncontrolledCarousel } from 'reactstrap';

function CarouselComponent() {
  return (
    <>
      <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: `${HotDeal}`,
          },
          {
            key: 2,
            src: `${HolidayDeal}`,
          },
          {
            key: 3,
            src: `${GoldDeal}`,
          },
        ]}
      />
    </>
  );
}

export default CarouselComponent;
