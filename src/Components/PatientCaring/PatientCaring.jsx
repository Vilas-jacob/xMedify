import React from 'react';
import Banner from '../../assets/Banner.png';
import Blue_Tick from '../../assets/Blue-tick.png';

function PatientCaring() {
  return (
    <>
         <div className="px-24 py-24 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={Banner} alt="Patient Caring" className="w-128" />
          </div>

          <div>
            <h2 className="font-semibold text-sky-400">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </h2>
            <h1 className="text-4xl mb-4 text-blue-900 font-bold">
              Patient{" "}
              <span className="text-sky-400">Caring</span>
            </h1>
            <p className="text-gray-400 leading-8 pb-4">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </p>

            <ul className="text-base md:text-lg">
              <li className="flex items-center mb-4">
                <img src={Blue_Tick} alt="Tick" className="h-5 w-5 mr-2" />
                <span className="font-medium text-blue-900">
                  Stay Updated About Your Health
                </span>
              </li>
              <li className="flex items-center mb-4">
                <img src={Blue_Tick} alt="Tick" className="h-5 w-5 mr-2" />
                <span className="font-medium text-blue-900">
                  Check Your Results Online
                </span>
              </li>
              <li className="flex items-center mb-4">
                <img src={Blue_Tick} alt="Tick" className="h-5 w-5 mr-2" />
                <span className="font-medium text-blue-900">
                  Manage Your Appointments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PatientCaring