import React from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCreative, Autoplay } from 'swiper/modules';
// import 'swiper/css/navigation';
const project = [
    {
        id: 1,
        name: "React Quiz",
        img: './p4.png',
        details: "This is a small quiz app. we can practice react question. 15 question solve in 7:30 min. all mcq type question.",
        backColor: 'bg-sky-700',
        link: 'https://comfy-vacherin-07f820.netlify.app'
    },

    {
        id: 2,
        name: "split Your Bill",
        img: './p3.png',
        details: "in this webpage you can split your bill with your friends. you can add frind in your friend list.",
        backColor: 'bg-indigo-600',
        link: 'https://google.com'
    },
    {
        id: 3,
        name: "Country data",
        img: './p2.png',
        details: "You can fatch your country data. here 250 country data fatch from api.",
        backColor: 'bg-green-700',
        link: 'https://country-data2.netlify.app'
    },
    {
        id: 4,
        name: "Beauty porlar",
        img: './p1.png',
        details: "This a Poster type webpage . we can showing your beauty porlar work ,location , contact, beautishine.",
        backColor: 'bg-blue-800',
        link: 'https://pramanik1234.github.io/beautyparlour/'
    },
    {
        id: 5,
        name: "Shoe Store",
        img: './p5.png',
        details: "I made Modern looking shoe Shoe Store using some on latest and on demand technology like next js and tailwind css .",
        backColor: 'bg-orange-600',
        link: 'https://shoe-store-frontend-cyan.vercel.app'
    },
    {
        id: 6,
        name: "Youtube App",
        img: './p6.png',
        details: "I have developed an innovative YouTube application utilizing React, Tailwind, and the YouTube API from Rapid API.",
        backColor: 'bg-black',
        link: 'https://nxtgenyoutubeapp.netlify.app'
    },
    {
        id: 7,
        name: "Food Recipe App",
        img: './p7.png',
        details: "Discover Forkify Your ultimate food recipe app! Explore mouthwatering recipes, personalized collections, and hassle-free shopping lists. Elevate your cooking game today!",
        backColor: 'bg-amber-600',
        link: 'https://forkifyofpalash.netlify.app'
    },
    {
        id: 8,
        name: "Real Estate",
        img: './p8.png',
        details: "This exemplary real estate website showcases professionalism, simplicity, setting industry standards .",
        backColor: 'bg-slate-700',
        link: 'https://forkifyofpalash.netlify.app'
    },
]
const ProjectList = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                modules={[Pagination, EffectCreative, Autoplay, Navigation]}
                className="mySwiper"
            >
                {project.map((item) => <SwiperSlide key={item.id} className={` text-white bg-indigo-900 rounded-md`}>
                    <img src={item.img} alt="" className='rounded-t-md' />
                    <div className='flex items-center justify-between p-2'>
                        <h3 className=' text-xl capitalize text-black font-bold'>{item.name}</h3>
                        <a href={item.link} target="_blank" className=' cursor-pointer'><img src="/live.webp" alt="live image" className='w-[60px]' /></a>
                    </div>
                    <p className='p-2 mt-5'>{item.details}</p>
                </SwiperSlide>
                )}
                <div className='flex items-center justify-between  mt-2 lg:mt-5 w-[90%] m-auto '>
                    <span className=' swiper-button-next text-lg cursor-pointer border-2 border-indigo-600 px-2 rounded-md flex items-center'>&larr;</span>
                    <span className=' swiper-button-prev text-lg cursor-pointer border-2 border-indigo-600 px-2 rounded-md flex items-center'>&rarr;</span>
                </div>
            </Swiper>
        </>
    );
}

export default ProjectList