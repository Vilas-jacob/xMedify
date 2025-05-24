import React from 'react';
import Families_Banner from '../../assets/families_banner.png';

function Families() {
  return (
    <>
    <div className="pt-12 bg-gradient-to-b from-blue-50 to-blue-100 px-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-lg font-bold text-sky-400 pb-2">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </h2>
            <h1 className="text-4xl font-bold text-blue-900 pb-5">Our Families</h1>
            <p className="text-gray-400 text-md leading-8">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>

          <div>
            <img src={Families_Banner} alt="Our Families Banner" className="w-128 h-auto" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Families