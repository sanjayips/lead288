import React from 'react'
export const JoinUsBanner = () => {
    return (
        // <div className='lg:h-[650px] h-auto banner'>
        //     <div className='row h-full g-0'>
        //         <div className='col-lg-12 relative'>
        //             <div className={`joinus_banner bg-joinus-background md:mt-[5rem] md:h-[400px] lg:h-full bg-bottom bg-no-repeat bg-cover w-full`}>
        //             </div>
        //                 <h2 className=' joinus_heading absolute bottom-0 top-[50%] text-[35px] font-semibold left-0 right-0 text-center text-white'>Join us on our journey</h2>
        //         </div>
        //     </div>
        // </div>
        <div className='lg:h-[650px] h-auto'>
            <div className='row h-full g-0'>
                <div className='col-lg-12 relative'>
                    <div className={`resume_image bg-joinus-background lg:h-full bg-bottom bg-no-repeat bg-cover w-full`}>
                    </div>
                    <h2 className=' joinus_heading absolute bottom-0 top-[50%] text-[35px] font-semibold left-0 right-0 text-center text-white'>Join us on our journey</h2>
                </div>
            </div>
        </div>
    )
}

export const ResumeBanner = () => {
    return (
        <div className='lg:h-[650px] h-auto'>
            <div className='row h-full g-0'>
                <div className='col-lg-12 relative'>
                    <div className={`resume_image bg-resume-background lg:h-full bg-bottom bg-no-repeat bg-cover w-full`}>
                    </div>
                </div>
            </div>
        </div>
    )
}


