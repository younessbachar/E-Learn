import React from 'react'
import FooterImg from "../../assets/footer.jpg"
import { MdComputer } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'



const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"bottom center",
}
const Footer = () => {
  return (
    <div style={FooterBg} className='rounded-t-3xl'>
      <div className='bg-primary/5'>
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
          {/* brand info section */}
          <div className='py-8 px-4 space-y-4'>
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary text-4xl" />
                <p>E-Tutor</p>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo odit sed recusandae fugiat fuga exercitationem maxime at tempore voluptatum.
              </p>
              <div className='flex justify-start items-center gap-5 !mt-6'>
                <a href="#" className='hover:text-secondary duration-200'>
                  <HiLocationMarker className='text-3xl'/>
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
          </div>
          {/* Footer Links */}
           <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
            <div className='py-8 px-4 flex flex-col'>
            <h1 className='sm:text-xl md:text-2xl font-bold sm:text-left text-justify mb-5'>
              Importabr Links
            </h1>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Home</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>About</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Services</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Login</a>
              </li>
            </ul>
            </div>
            <div className='py-8 px-4 flex flex-col'>
            <h1 className='sm:text-xl md:text-2xl font-bold sm:text-left text-justify mb-5'>
            Resourcess
            </h1>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Home</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>About</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Services</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Login</a>
              </li>
            </ul>
            </div>
            <div className='py-8 px-4 flex flex-col'>
            <h1 className='sm:text-xl md:text-2xl font-bold sm:text-left text-justify mb-5'>
            Company Links
            </h1>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Our Servies</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Contact</a>
              </li>
              <li>
                <a href="#" className='text-xl hover:text-secondary duration-200'>Privacy Policy</a>
              </li>
            </ul>
            </div>
           </div>
        </div>
        {/* copyright section */}
        <div className='mt-8'>
            <div className='text-center py-6 border-t-2 border-gray-800/10'>
            <span className='text-black/60'>
            {""}
            @copyright 2024 The Coding Journey</span>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Footer