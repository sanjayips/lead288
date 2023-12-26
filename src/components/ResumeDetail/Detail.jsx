import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { IoMdMail } from 'react-icons/io'
import { BiShareAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
const Detail = ({jobs}) => {
    console.log("jobs", jobs)
    return (
        <div className='bscontainer'>
            <div className='row  mt-[6rem]'>
                <div className='col-lg-9 col-md-6 md:order-1 order-2 '>
                    <div>
                        <p className='text-sm text-[#DB4446]'>View all open positions</p>
                        <h2 className='text-[#183B56] text-[24px] font-bold'>{jobs?.job_title}</h2>
                        <span className='text-[#6D6E71] text-[14px]'>{jobs?.physicalLocation
?.country}, {jobs?.physicalLocation
    ?.city}</span>
                    </div>
                    <div>
                        <p className='mt-4 text-[13px] text-[#5A7184]'>
                            {jobs?.description}
                        </p>
                    </div>

                    <div>
                        <h2 className='text-[18px] text-[#183B56] font-semibold mt-4'>Who We Are</h2>
                        <p className='mt-2 text-[13px] text-[#5A7184]'>We’re a team of lifelong learners. We’re equal parts left and right brained. And we’re generally likeable. We won’t bore you with more adjectives. See for yourself.</p>
                    </div>
                    <div>
                        <h2 className='text-[18px] text-[#183B56] font-semibold mt-4'>Working with us</h2>
                        <p className='mt-2 text-[13px] text-[#5A7184]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                    </div>

                    <div>
                        <h2 className='text-[18px] text-[#183B56] font-semibold mt-4'>Benefits</h2>
                        <ul className='pt-3'>
                            <li className='flex'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                            <li className='flex mt-2'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                            <li className='flex mt-2'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                            <li className='flex mt-2'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-[18px] text-[#183B56] font-semibold mt-4'>About the role</h2>
                        <ul className='pt-3'>
                            <li className='flex'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                            <li className='flex mt-2'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                            <li className='flex mt-2'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                            <li className='flex mt-2'>
                                <FcCheckmark className='text-[18px] ' />
                                <p className='text-[13px] pl-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 md:order-2 order-1'>

                    <div className='flex justify-center flex-col lg:ml-5  text-center'>
                        <Link to="/recruit" className="flex border justify-center  h-[40px] w-full items-center text-[14px] bg-[#DB4446] rounded-md text-white">
                            <IoMdMail className='mr-3 text-[20px]' />
                            Apply Now
                        </Link>
                        <buton className="flex justify-between border-[#DB4446] border-2 mt-3 pl-4 h-[40px] w-full items-center text-[14px] text-[#DB4446] rounded-md">
                            Share Now
                            <BiShareAlt className='mr-3 text-[20px]' />
                        </buton>

                    </div>
                    <div className='bg-[#FCFCFC] lg:ml-5 mt-4 p-3'>
                        <h2 className='text-[16px] text-[#183B56]'>{moment(jobs
?.created_at).format('ll')}</h2>
                        <div>
                            <h2 className='text-[14px] mt-3 text-[#183B56]'>Location</h2>
                            <p className='text-[#5A7184] text-[10px]'>{jobs?.DetailphysicalLocation
?.country}</p>
                        </div>
                        <div>
                            <h2 className='text-[14px] mt-3 text-[#183B56]'>Work Type</h2>
                            <p className='text-[#5A7184] text-[10px]'>{jobs?.jobtype}</p>
                        </div>
                        <div>
                            <h2 className='text-[14px] mt-3 text-[#183B56]'>Classification</h2>
                            <p className='text-[#5A7184] text-[10px]'>Design & Architecture</p>
                            <p className='text-[#5A7184] text-[10px] mt-2'>Web & Interaction Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail