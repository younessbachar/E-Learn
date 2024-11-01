import React from 'react'
import { color, delay, motion } from 'framer-motion'
import { FaComputer } from 'react-icons/fa6'
import { FaBook } from 'react-icons/fa'
import { div } from 'framer-motion/client'

const SubjectList = [
    {
        id: 1,
        name: "Engineering",
        icon: <FaBook />,
        color: "#0063ff",
        delay: 0.2,
    },
    {
        id: 2,
        name: "English",
        icon: <FaBook />,
        color: "#00c986",
        delay: 0.3,
    },
    {
        id: 3,
        name: "Programming",
        icon: <FaBook />,
        color: "#922aee",
        delay: 0.4,
    },
    {
        id: 4,
        name: "Science",
        icon: <FaBook />,
        color: "#ea7516",
        delay: 0.5,
    },
    {
        id: 5,
        name: "History",
        icon: <FaBook />,
        color: "#075267",
        delay: 0.6,
    },
    {
        id: 6,
        name: "Psychology",
        icon: <FaBook />,
        color: "#986d1d",
        delay: 0.7,
    },
    {
        id: 7,
        name: "Web design",
        icon: <FaBook />,
        color: "#b93838",
        delay: 0.8,
    },
    {
        id: 8,
        name: "See all",
        icon: <FaBook />,
        color: "#464646",
        delay: 0.9,
    },
]

const SubjectCard = () => {
  return (
    <div>
        <div className="container py-14 md:py-24">
            <div>
                {/* header section */}
                <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
                    <h1 className='uppercase text-xl font-semibold text-orange-500'>Our tutor subject</h1>
                    <p className='font-semibold text-4xl'>Find online Tutor in Any</p>
                </div>
                {/* card section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                  {
                    SubjectList.map((subject)=>{
                        return(
                            <motion.div 
                            key={subject.id}
                            initial={{ opacity: 0, x: -200}}
                            whileInView={{ opacity:1, x:0}}
                            transition={{type: "spring", stiffness: 100, delay: subject.delay}}
                            className='border rounded-lg border-secondary/20 p-4 flex justify-center items-center gap-4 hover:scale-105 hover:!shadow-xl duration-200 cursor-pointer'>
                                <div style={{backgroundColor: subject.color  + "40"}} className='w-12 h-12 rounded-md flex justify-center items-center '>{subject.icon}</div>
                                  <p>{subject.name}</p>
                            </motion.div>
                        )
                    })
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubjectCard