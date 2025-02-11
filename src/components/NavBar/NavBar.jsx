import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          { id: 1, path: "/", name: "Home" },
          { id: 2, path: "/about", name: "About" },
          { id: 3, path: "/services", name: "Services" },
          { id: 4, path: "/contact", name: "Contact" },
          { id: 5, path: "/blog", name: "Blog" }
     ];


     return (
          <nav>
               <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                    {
                         open === true ?
                              <AiOutlineClose />
                              : <RiMenu2Fill />
                    }
               </div>
               <ul className='md:flex'>
                    {
                         routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
               </ul>
          </nav>
     );
};

export default NavBar;