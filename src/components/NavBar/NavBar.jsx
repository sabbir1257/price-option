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
          <nav className='p-3 bg-yellow-200'>
               <div className='text-2xl md:hidden' onClick={() => setOpen(!open)}>
                    {
                         open === true ?
                              <AiOutlineClose />
                              : <RiMenu2Fill />
                    }
               </div>
               <ul className={`duration-1000 rounded-md absolute md:static p-3 bg-yellow-200 md:flex ${open ? 'top-12' : '-top-60'}`}>
                    {
                         routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
               </ul>
          </nav>
     );
};

export default NavBar;