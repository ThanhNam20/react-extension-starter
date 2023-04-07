import React from 'react';
import CarouselComponent from '../../components/Carousel';
import TrendingStore from '../../components/TrendingStore';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getExtensionConfig } from '../../services/api/api';
import { REACT_QUERY_KEY } from '../../constants/const';

const Home = () => {
  const getExtensionConfigData = useQuery({
    queryKey: [REACT_QUERY_KEY.EXTENSION_CONFIG],
    queryFn: getExtensionConfig,
  });
  return (
    <>
      <CarouselComponent />
      <TrendingStore redirect={'home'} listBrands={[]} />
    </>
  );
};

export default Home;
