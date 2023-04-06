import React, { useState } from 'react';
import { Brand } from '../../types/brand';
import StoreItem from '../StoreItem';

type ListBrands = Omit<Brand, 'domain' | 'is_premium'>[];

const TrendingStore = () => {
  const initialStores: ListBrands = [
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
    {
      images: '123',
      cashback_value: '50%',
    },
  ];

  const [listStores, setListStores] = useState<ListBrands>(initialStores);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-1">
        <h3 className="title1 my-3">Trending Stores</h3>
        <a
          href="https://rebates.com/"
          target="_blank"
          className="text-decoration-none"
          rel="noreferrer"
        >
          <button
            type="button"
            className="btn btn-sm py-1 bg-color-first text-white d-block w-100 "
          >
            View All
          </button>
        </a>
      </div>
      <div className="list-stores mb-2">
        {listStores.map((item) => (
          <StoreItem
            cashback_value={item.cashback_value}
            images={item.images}
          />
        ))}
      </div>
    </>
  );
};

export default TrendingStore;
