import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
     return (
          <li className='px-3 mr-6 text-[17px] font-semibold rounded-md hover:bg-yellow-500 hover:rounded-md'>
               <a href={route.path}>{route.name}</a>
          </li>
     );
};

Link.propTypes = {
     route: PropTypes.object
}


export default Link;