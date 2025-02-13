import PropTypes from 'prop-types';
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const Feature = ({feature}) => {
     return (
          <div>
               <p className='flex items-center gap-3 text-[18px]'><FaCircleCheck className='text-blue-700' />{feature}</p>
          </div>
     );
};

Feature.propTypes = {
     feature: PropTypes.string
}

export default Feature;