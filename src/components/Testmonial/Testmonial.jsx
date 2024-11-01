import { div } from 'framer-motion/client'
import React from 'react'
import Slider from 'react-slick'

const TestmonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum commodi eius nesciunt vel ipsam, tempora aliquam magni alias saepe!",
        img: "https://picsum.photos/101/101",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Steve Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum commodi eius nesciunt vel ipsam, tempora aliquam magni alias saepe!",
        img: "https://picsum.photos/102/102",
        delay: 0.2,
    },
    {
        id: 3,
        name: "Kristen",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum commodi eius nesciunt vel ipsam, tempora aliquam magni alias saepe!",
        img: "https://picsum.photos/104/104",
        delay: 0.2,
    },
    {
        id: 4,
        name: "Adam roger",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum commodi eius nesciunt vel ipsam, tempora aliquam magni alias saepe!",
        img: "https://picsum.photos/103/103",
        delay: 0.2,
    },

]
const Testmonial = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    }
  return (
    <div className='py-14 mb-10'>
        <div className="container">
            {/* header section */}
            <div className='space-y-4 text-center max-w-[600px] mx-auto mb-6'>
                <h1 className='uppercase text-xl font-semibold text-orange-600'>OUR TESTMONIALS</h1>
                <p className='font-semibold text-4xl'>What Our Students Say About Us</p>
            </div>
            {/* Testmonial cards section */}
            <div className='md:w-[1450px]'>
                <Slider {...setting}>
                    {
                       TestmonialsData.map((item)=>{
                        return(
                            <div key={item.id}>
                              <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10'>
                                {/*upper section*/}
                                <div className='flex justify-start items-center gap-5 '>
                                    <img src={item.img} alt="" className='w-16 h-16 rounded-full'/>
                                <div>
                                    <p className='text-2xl font-bold text-black/80'>{item.name}</p>
                                    <p>{item.name}</p>
                                </div>
                                </div>
                                {/*buttom section*/}
                                <div className='py-6 space-y-4'>
                                    <p className='text-x text-gray-500'>{item.text}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                              </div>
                            </div>
                        )
                       }) 
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testmonial