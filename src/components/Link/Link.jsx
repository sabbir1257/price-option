import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
     return (
          <li className='px-3 py-2 mr-6rounded-md hover:bg-yellow-500'>
               <a href={route.path}>{route.name}</a>
          </li>
     );
};

Link.propTypes = {
     route: PropTypes.object
}


export default Link;