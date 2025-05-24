import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroMain from '../HeroMain/HeroMain'
import Search from '../Search/Search'
import Services from '../Services/Services'
import Offers from '../Offers/Offers'
import Specialisation from '../Specialisation/Specialisation'
import Specialist from '../Specialist/Specialist'
import PatientCaring from '../PatientCaring/PatientCaring'
import Blog from '../Blog/Blog'
import Families from '../Families/Families'
import Faq from '../Faq/Faq'
import MedifyApp from '../MedifyApp/MedifyApp'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>  
        <div >
            <NavBar />
            
            <HeroMain />
            <div className='flex justify-center  py-30 mb-10'>
                <div className='absolute sm:top-170 md:top-105 lg:top-110 xl:top-120 w-3/4  bg-white rounded-xl mx-auto shadow-lg'>
                    <Search />
                    <Services />
                </div>  
            </div>
         

            <Offers />
            <Specialisation />
            <Specialist />
            <PatientCaring />
            <Blog />
            <Families />
            <Faq />
            <MedifyApp />
            <Footer />
            
        </div>
       

        
        
    </>
  )
}

export default Home