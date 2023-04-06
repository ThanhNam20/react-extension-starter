import React from 'react';
import { Brand } from '../../types/brand';

type BrandItem = Omit<Brand, 'domain' | 'is_premium'>;

const StoreItem = ({ images, cashback_value }: BrandItem) => {
  return (
    <>
      <div className="stores-item">
        <div className="box-store">
          <a href="#" target="_blank" className="text-decoration-none">
            <div className="store-image-container">
              <img
                src="https://tomthumbs.s3-us-west-1.amazonaws.com/d873a616c6cf0c369b5cd9ce02159379/c408a9c539d0e82cf7ba41c85fc6358c-t.png"
                alt="Store icon"
              />{' '}
            </div>
            <p>Up to ${cashback_value} Cash Back</p>
          </a>{' '}
        </div>
      </div>
    </>
  );
};

export default StoreItem;
