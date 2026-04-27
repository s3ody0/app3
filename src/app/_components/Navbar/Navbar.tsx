'use client'
import React, { useContext, useState } from "react";
import Logo from "../../../../public/images/freshcart-logo.svg"
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { cartContext } from "@/context/cart.context";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
export default function Navbar() {
  const context = useContext(cartContext)
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  async function handleLogout(){
    await signOut()
    router.push('/login')

  }
  const {data} = useSession()
  return (
    <>
      <nav className="bg-gray-200 dark:bg-gray-800 py-4 border-b border-gray-300 dark:border-gray-700 transition-colors">
       <div className="container flex justify-between items-center px-4">
 <div className="left">
          <ul className="flex gap-2 md:gap-4 items-center">
            <li><Link href={"/"}><Image src={Logo} alt="Logo" className="h-8 w-auto dark:brightness-0 dark:invert dark:contrast-200 transition-all"/></Link></li>
            <li className="hidden md:block"><Link href={"/"} className="hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300">Home</Link></li>
            <li className="hidden md:block"><Link href={"/Products"} className="hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300">Products</Link></li>
          </ul>
        </div>
        <div className="right">
          <ul className="hidden md:flex gap-2 lg:gap-4 items-center">
            {/* Theme Toggle */}
            <li>
              <ThemeToggle />
            </li>
            {data ? <li className="relative"><Link href={"/Cart"} className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"><ShoppingCart/></Link>
            
            <h5 className=" text-white bg-green-500 dark:bg-green-600 rounded-full w-6 h-6 flex justify-center items-center absolute top-[-15px] end-[-15px] text-xs">{context?.numOfCartItems}</h5>
            
            </li> : ''}
            <li className="hidden lg:block"><i className="fa-brands fa-facebook hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i></li>
            <li className="hidden lg:block"><i className="fa-brands fa-instagram hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i></li>
            <li className="hidden lg:block"><i className="fa-brands fa-twitter hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i></li>
            <li className="hidden lg:block"><i className="fa-brands fa-linkedin hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i></li>
            <li className="hidden lg:block"><i className="fa-brands fa-tiktok hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i></li>
            {data ? <>
            <li onClick={handleLogout} className="cursor-pointer hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300"><Link href=''>Logout</Link></li> 
            <li className="text-sm lg:text-base text-gray-700 dark:text-gray-300">Hi {data.user?.name}</li>
            </>
            :
            <>
            <li><Link href={'/register'} className="hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300">Register</Link></li>
            <li><Link href={'/login'} className="hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300">Login</Link></li>
            </> }
          </ul>
          
          {/* Mobile Theme Toggle */}
          <div className="md:hidden mr-2">
            <ThemeToggle />
          </div>
          
          {/* Mobile Cart Icon */}
          {data && (
            <div className="md:hidden relative mr-4">
              <Link href={"/Cart"} className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"><ShoppingCart/></Link>
              <h5 className="text-white bg-green-500 dark:bg-green-600 rounded-full w-5 h-5 flex justify-center items-center absolute top-[-12px] end-[-12px] text-xs">{context?.numOfCartItems}</h5>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
       </div>
       
       {/* Mobile Menu */}
       {isMobileMenuOpen && (
         <div className="md:hidden border-t border-gray-300 dark:border-gray-700 mt-4 pt-4 bg-gray-200 dark:bg-gray-800">
           <div className="container px-4 space-y-4">
             <Link href={"/"} className="block hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
             <Link href={"/Products"} className="block hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
             <div className="flex gap-4 pt-2">
               <i className="fa-brands fa-facebook hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i>
               <i className="fa-brands fa-instagram hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i>
               <i className="fa-brands fa-twitter hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i>
               <i className="fa-brands fa-linkedin hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i>
               <i className="fa-brands fa-tiktok hover:text-green-500 dark:hover:text-green-400 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"></i>
             </div>
             {data ? (
               <div className="space-y-2 pt-2 border-t border-gray-300 dark:border-gray-700">
                 <p className="text-sm text-gray-700 dark:text-gray-300">Hi {data.user?.name}</p>
                 <button onClick={() => {handleLogout(); setIsMobileMenuOpen(false)}} className="block w-full text-left hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300">Logout</button>
               </div>
             ) : (
               <div className="space-y-2 pt-2 border-t border-gray-300 dark:border-gray-700">
                 <Link href={'/register'} className="block hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
                 <Link href={'/login'} className="block hover:text-green-500 dark:hover:text-green-400 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
               </div>
             )}
           </div>
         </div>
       )}
      </nav>
    </>
  );
}
