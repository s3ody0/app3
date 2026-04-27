import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/images/freshcart-logo.svg'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-200 mt-auto border-t border-gray-800 dark:border-gray-600 transition-colors">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src={Logo} alt="FreshCart Logo" className="h-10 w-auto dark:brightness-0 dark:invert dark:contrast-200 transition-all" />
            </Link>
            <p className="text-sm leading-relaxed dark:text-gray-300">
              Your trusted online grocery store. Fresh products delivered to your doorstep with the best quality and service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors" aria-label="Facebook">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors" aria-label="Twitter">
                <i className="fa-brands fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors" aria-label="TikTok">
                <i className="fa-brands fa-tiktok text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-green-400 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Products" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/Categories" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/Brands" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/Cart" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white dark:text-green-400 font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/orders" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  My Orders
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors text-sm">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white dark:text-green-400 font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-green-500 dark:text-green-400 mt-1"></i>
                <span className="dark:text-gray-300">123 Shopping Street, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-green-500 dark:text-green-400"></i>
                <a href="tel:+201234567890" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-green-500 dark:text-green-400"></i>
                <a href="mailto:support@freshcart.com" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors">
                  support@freshcart.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 dark:border-gray-600 pt-8 mb-8">
          <h3 className="text-white dark:text-green-400 font-semibold text-lg mb-4 text-center lg:text-left">We Accept</h3>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
            <div className="bg-white p-2 rounded">
              <Image 
                src="/images/paypal.png" 
                alt="PayPal" 
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded">
              <Image 
                src="/images/mastercard.webp" 
                alt="Mastercard" 
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded">
              <Image 
                src="/images/American-Express-Color.png" 
                alt="American Express" 
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
            <div className="bg-white p-2 rounded">
              <Image 
                src="/images/amazon-pay.png" 
                alt="Amazon Pay" 
                width={60} 
                height={40} 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-center md:text-left dark:text-gray-300">
              © {new Date().getFullYear()} FreshCart. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-green-500 dark:hover:text-green-300 dark:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
