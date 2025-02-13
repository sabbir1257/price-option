import PropTypes from 'prop-types';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
     const { name, price, features } = option;
     return (
          <div className='flex flex-col p-4 bg-blue-300 rounded-md'>
               <h2 className='font-semibold text-center'>
                    <span className='text-4xl'>{price}</span>
                    <span className='text-2xl'>/mon</span>
               </h2>
               <h4 className='my-2 text-2xl text-center'>{name}</h4>
               <div className='flex-grow pl-8 mt-6'>
                    {
                         features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                    }
               </div>
               <div className='my-4 text-center'>
                    <button className='btn btn-primary'>Buy Now</button>
               </div>
          </div>
     );
};

PriceOption.propTypes = {
     option: PropTypes.object
}

export default PriceOption;