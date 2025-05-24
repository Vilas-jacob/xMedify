import React, { useState } from 'react';
import Faq_Img from '../../assets/faq.jpg';

function Faq() {

    const faqData = [
        {
            question: "Why choose our medical for your family?",
            answer:
              "We prioritize the health and well-being of your family by providing personalized, compassionate care tailored to each individual's needs. Our experienced team of healthcare professionals is dedicated to ensuring that you receive the highest quality of medical services in a comfortable and supportive environment. We believe in building lasting relationships with our patients and their families, fostering trust and open communication to achieve the best health outcomes.",
          },
          {
            question: "Why we are different from others?",
            answer:
              "What sets us apart is our commitment to holistic care that goes beyond just treating symptoms. We take the time to understand your unique health concerns and lifestyle, allowing us to create comprehensive care plans that address both physical and emotional well-being. Our state-of-the-art facilities, combined with a compassionate approach, ensure that you and your family receive the best possible care. We also emphasize preventive measures and education, empowering you to take charge of your health.",
          },
          {
            question: "Trusted & experience senior care & love",
            answer:
              "Our senior care services are designed with the utmost respect and compassion for our elderly patients. We understand the unique challenges that come with aging, and our dedicated team is trained to provide specialized care that promotes dignity, independence, and quality of life. We offer a range of services, from routine check-ups to chronic disease management, ensuring that our seniors receive the attention and support they deserve in a nurturing environment.",
          },
          {
            question: "How to get appointment for emergency cases?",
            answer:
              "In case of an emergency, we encourage you to contact our office immediately or visit our urgent care facility. Our team is available to assist you 24/7, ensuring that you receive prompt medical attention when you need it most. For non-emergency situations, you can schedule an appointment through our website or by calling our office during business hours. We strive to accommodate your needs and provide timely care for all patients.",
          },
    ];

    const [opened,setOpened] = useState("");
    const handleAccordian = (index)=>{
        setOpened(opened === index ? "": index);
    }
  return (
    <>
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-sky-400 font-semibold text-center text-lg">Get Your Answer</h2>
        <h1 className="text-4xl text-center mb-2 text-blue-900 font-bold pb-4">Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src={Faq_Img} alt="FAQs Banner" className="w-full h-auto" />
          </div>

          <div className="max-w-md">
          {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => handleAccordian(index)}
                >
                  <h3 className="text-lg font-bold text-blue-900 pr-2">{item.question}</h3>
                  <span className={`text-sky-400 font-bold text-2xl transform transition-transform ${opened === index ? "rotate-45" : ""}`}>
                    &#43; 
                  </span>
                </div>
                {opened === index && (
                  <div className="p-4">
                    <p className="text-blue-800">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq