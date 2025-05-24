import React from 'react';
import Mobile1 from '../../assets/phone.jpg';
import Vector from '../../assets/Vector.png';
import Playstore from '../../assets/google_play.png';
import Apple from '../../assets/apple_store.png';

function MedifyApp() {
  return (
    <>
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 pt-10 px-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
          <img src={Mobile1} alt="Mobile App" className='w-128 h-auto' />
            
           
          </div>

          <div className="relative pl-8 md:pl-12 mb-8 md:mb-0">
            <h2 className="text-4xl mb-2 text-blue-900 font-bold pb-4">
              Download the
              <br />
              <span className="text-sky-400"> Medify </span>
              App
            </h2>

            <img
              src={Vector}
              alt="Vector"
              className="absolute w-6 md:w-10 left-0 top-1/4 transform -translate-y-1/2"
            />

            <div className="mb-5">
              <h3 className="text-blue-900 text-lg font-semibold mb-1">Get the link to download the app</h3>
              <form className="flex flex-col md:flex-row gap-2">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="border border-gray-100 bg-white rounded-md p-2 flex-1"
                  required
                />
                <button
                  type="submit"
                  className="bg-sky-400 text-white py-2 px-4 rounded-md"
                >
                  Send SMS
                </button>
              </form>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <a
                href="#"
                className="bg-gray-800 text-white py-2 px-4 rounded-md flex items-center justify-center"
              >
                <img src={Playstore} alt="Google Play" className="h-10" />
                
              </a>
              <a
                href="#"
                className="bg-gray-800 text-white py-2 px-4 rounded-md flex items-center justify-center"
              >
                <img src={Apple} alt="App Store" className="h-10" />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MedifyApp