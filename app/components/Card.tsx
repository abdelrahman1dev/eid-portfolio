import { MailIcon } from 'lucide-react'
import Image from 'next/image';
import React from 'react'
import CountUp from 'react-countup';



const CardData = [
    {
        title: "exprience of",
        subTitle:   <CountUp
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
                <Image src="/person.jpg" alt="avatar"
                width={480} height={480}
                    className="w-120 h-fit  rounded-2xl ring-1 ring-white/10" />

            </div>

            <div className='flex flex-col justify-between w-full '>
                <div className='flex flex-col gap-1 px-4 py-8'>
                    <h1 className='text-3xl font-bold'>
                        Mohamed Eid
                    </h1>
                    <h2 className='text-lg font-thin'>
                        Motion & Infographic Specialist
                    </h2>
                    <h2 className='text-md font-thin'>
                        works at <span className='text-teal-400 font-semibold'>Freelance</span>
                    </h2>
                </div>

                <div className='w-full flex items-center gap-2 lg:flex-row flex-col'>



                    {
                        CardData.map((card, index) => (
                            <div className='
                 w-full h-35 
                px-4 py-2 rounded-2xl flex flex-col gap-2
              bg-gray-950/20 backdrop-blur-md
              border border-white/10
              shadow-2xl shadow-black/60
              ring-1 ring-white/2
              overflow-hidden'
                                key={index}>
                                    <h1>{card.title}</h1>
                                    <h2>{card.subTitle} </h2>
                                    <h2>{card.desc}</h2>

                            </div>
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
                <MailIcon className='w-4' />
            </button>


        </div>
    )
}

export default Card
