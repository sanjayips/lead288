import React from 'react'

import appleDown from '../../images/downloadFrom.svg'
import androidDown from '../../images/downloadFrom1.svg'
import ssl1 from '../../images/ssl1.svg'
import ssl2 from '../../images/ssl2.svg'
import ssl3 from '../../images/ssl3.svg'
import ssl4 from '../../images/ssl4.svg'
import ssl5 from '../../images/ssl5.svg'
import ssl6 from '../../images/ssl6.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper";


const downAppImgs = [appleDown, androidDown]
const sslImgs = [ssl1, ssl2, ssl3, ssl4, ssl5, ssl6]

function SSL() {
    return (
        <div>
            <div className='row mt-5'>
                <div className='col-lg-6'>
                    <div className='flex apple_images_container'>
                        {
                            downAppImgs.map((apple) => (
                                <img src={apple} alt="apple" className='mr-4 appl_image' />
                            ))
                        }

                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='flex justify-end items-center'>
                        <Swiper
                            slidesPerView={3}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper "
                        >
                            {
                                sslImgs.map((ssl, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='ssl_images'>
                                            <img src={ssl} alt="apple" className='mr-2' />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    {/* <div className='flex justify-end items-center'>
                        {
                            sslImgs.map((ssl) => (
                                <img src={ssl} alt="apple" className='mr-4' />
                            ))
                        }
                    </div> */}
                </div>
            </div>

        </div >
    )
}

export default SSL