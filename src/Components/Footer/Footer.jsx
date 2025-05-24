import React from 'react'
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import Pinterest from '../../assets/pinterest.png';
import Arrow from '../../assets/arrow.png';

function Footer() {
  return (
    <>
    <div className="bg-blue-900 pb-3 pt-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-start">
            <img src={Logo} alt="Medify" className="h-9 mb-15" />
            <div className="flex space-x-2">
              <img src={Facebook} alt="Facebook" className="h-9" />
              <img src={Twitter} alt="Twitter" className="h-9" />
              <img src={Youtube} alt="YouTube" className="h-9" />
              <img src={Pinterest} alt="Pinterest" className="h-9" />
            </div>
          </div>

          <div>
           
            <ul className="space-y-2">
              <Link>About Us</Link>
              <Link>Our Pricing</Link>
              <Link>Our Gallery</Link>
              <Link>Appointment</Link>
              <Link>Privacy Policy</Link>
            </ul>
          </div>

          <div>
          
            <ul className="space-y-2">
              <Link>Orthology</Link>
              <Link>Neurology</Link>
              <Link>Dental Care</Link>
              <Link>Ophthalmology</Link>
              <Link>Cardiology</Link>
            </ul>
          </div>

          <div>
          
            <ul className="space-y-2">
              <Link>About Us</Link>
              <Link>Our Pricing</Link>
              <Link>Our Gallery</Link>
              <Link>Appointment</Link>
              <Link>Privacy Policy</Link>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 border-opacity-10 mt-5 pt-3 mb-3">
          <p className="text-white text-sm text-left">
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

function Link({ children }) {
    return (
      <li>
        <a href="#" className="text-white text-sm flex items-center">
          <img src={Arrow} className='mr-2' />
          {children}
        </a>
      </li>
    );
  }

export default Footer