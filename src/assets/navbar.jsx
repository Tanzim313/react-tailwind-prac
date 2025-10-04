import React, { useState } from "react";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import Link from "./link";


const navigationData = [
    {
    id: 1,
    name: "Home",
    url: "/home",
    description: "Go to the homepage"
  },
  {
    id: 2,
    name: "About",
    url: "/about",
    description: "Learn more about us"
  },
  {
    id: 3,
    name: "Blog",
    url: "/blog",
    description: "Read our latest posts"
  },
  {
    id: 4,
    name: "Services",
    url: "/services",
    description: "Explore the services we offer"
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
    description: "Get in touch with us"
  }
];



const Navbar = () => {
        
        const [open,setOpen] = useState(true);
        const links = navigationData.map(route => <Link key={route.id} route={route} ></Link>)


        return(
            <div className="flex justify-between m-10">
                
                <span 
                    className="flex gap-4"
                    onClick={()=>setOpen(!open)}
                >

                    {  open ?  
                        <X className="md:hidden"> </X> : 
                        <Menu className="md:hidden"></Menu> 
                        
                        }


                    <ul className={`md:hidden absolute mt-5 ml-1 duration-1000  ${open? 'top-12': '-top-60'} `}>
                    {
                        links
                    }
                </ul>
                    

                    <h3>my Navbar</h3>
                </span>


                <ul className="hidden md:flex ">
                    {
                        links
                    }
                </ul>

               <button>Sign In</button>

            </div>

        );


}

export default Navbar;