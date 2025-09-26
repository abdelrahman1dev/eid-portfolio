import { MailIcon } from 'lucide-react'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import TiltedCard from '../../components/TiltedCard';
import Whatsapp from './WhatsAppico';

const CardData = [
    {
        title: "exprience of",
        subTitle: <CountUp
            suffix="+ years"
            scrollSpyDelay={1}
            enableScrollSpy
            scrollSpyOnce
            end={17}
            duration={5}
        />,
        desc: "in motion design and infographic",
    },
    {
        title: "over",
        subTitle: <CountUp
            suffix="+"
            scrollSpyDelay={1}
            enableScrollSpy
            scrollSpyOnce
            end={200}
            duration={2}
        />,
        desc: "projects completed",
    },
    {
        title: "about",
        subTitle: <CountUp
            suffix="+"
            scrollSpyDelay={1}
            enableScrollSpy
            scrollSpyOnce
            end={150}
            duration={3}

        />,
        desc: "happy clients over the years",
    },
]

function Card() {


    return (
        <div className="w-[80%] relative p-6 rounded-2xl flex lg:flex-row flex-col gap-4
              bg-gray-950/20 backdrop-blur-md
              border border-white/10
              shadow-2xl shadow-black/60
              ring-1 ring-white/2
              overflow-hidden">

            <div className="flex items-center">



                <TiltedCard
                    imageSrc="https://scontent.fcai30-1.fna.fbcdn.net/v/t1.6435-9/97496801_10158426161387630_6320740538723074048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=c1vq3eiDq7cQ7kNvwHdIipg&_nc_oc=AdllvfRJUYoMsXf6cCKeduWb21fWPL7DTA2ZT94sjR-Y1q4jpGq0a4HhsKmNttTn3Jg&_nc_zt=23&_nc_ht=scontent.fcai30-1.fna&_nc_gid=t_o2JLlR4tqXFtNbOVCAQA&oh=00_AfYFO1m0y9KZ1YcBFcJw4B7YvxAs6c7SlU830puJxy8miQ&oe=68F6AB47"
                    altText="mohamed eid"
                    captionText="mohamed eid"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    
                />
            </div>

            <div className='flex flex-col justify-between w-full '>
                <div className='flex flex-col gap-1 px-4 py-8'>
                    <motion.h1
                        className='text-3xl lg:text-5xl font-bold'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Mohamed Eid
                    </motion.h1>
                    <motion.h2
                        className='text-lg lg:text-2xl font-thin'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Motion & Infographic Specialist
                    </motion.h2>
                    <motion.h2
                        className='text-md lg:text-lg font-thin'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        works currently at <span className='text-teal-400 font-semibold'>Dabdoob company</span>
                    </motion.h2>
                </div>

                <div className='w-full flex items-center gap-2 lg:flex-row flex-col'>



                    {
                        CardData.map((card, index) => (
                            <motion.div
                                className='
                 w-full h-35
                px-4 py-2 rounded-2xl flex flex-col gap-2
              bg-gray-950/20 backdrop-blur-md
              border border-white/10
              shadow-2xl shadow-black/60
              ring-1 ring-white/2
              overflow-hidden'
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                                >
                                    {card.title}
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                >
                                    {card.subTitle}
                                </motion.h2>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                >
                                    {card.desc}
                                </motion.h2>

                            </motion.div>
                        ))
                    }
                </div>
            </div>


       
            <button
                className='
            absolute
                
                 py-1 px-2 rounded right-5 top-5 
              bg-gray-950/20 backdrop-blur-md
              border border-white/10
              shadow-2xl shadow-black/60
              ring-1 ring-white/2
              overflow-hidden hover:bg-black cursor-pointer transition-all duration-300 ease-in-out hover:opacity-75'
            >
                <Whatsapp size={'20'} />
            </button>
      


        </div>
    )
}

export default Card
