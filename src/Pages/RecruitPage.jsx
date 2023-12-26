import axios from 'axios'
import React, { useState } from 'react'
import CompanyForm from '../components/FormStep/CompanyForm'
import InfoForm from '../components/FormStep/InfoForm'
import ResumeForm from '../components/FormStep/ResumeForm'
import SubmitForm from '../components/FormStep/SubmitForm'
import rightImge from '../images/recruitBIgPic.png'
import { useSelector } from 'react-redux'
import { callApi, callPublicApi } from '../utils/CallApi'
import { ToastContainer, toast } from 'react-toastify'
export const RecruitPage = ({ setApply, type, id }) => {

    const listName = ["Company/Job Info", "Resume", "Submit"]
    const [active, setActive] = useState(0)
    const [activeIndex, setActiveIndex] = useState({
        one: false,
        two: false,
        three: false
    })



    const data = useSelector((state) => state.recruitAuth.userInfo)
    const {token} = useSelector((state) => state.recruitAuth.loginInfo)

    const [formdata, setformdata] = useState(data)


    const handleNext = async (data) => {
        let activeIndexs = active + 1
        setActive(activeIndexs)
        if (activeIndexs === 1) {
            setActiveIndex((perv) => ({
                ...perv,
                one: true
            }))
            setformdata((prevdata) => ({
                ...prevdata,
                ...data

            }))
        }
        else if (activeIndexs === 2) {
            setActiveIndex((perv) => ({
                ...perv,
                two: true
            }))
            setformdata((prevdata) => ({
                ...prevdata,
                ...data

            }))
        }
        else if (activeIndexs === 3) {
            setActiveIndex((perv) => ({
                ...perv,
                three: true
            }))
            setformdata((prevdata) => ({
                ...prevdata,
                ...data

            }))
        }
        else if (activeIndexs === 4) {
            if (token === null) {
                try {
                    let paylaod = {
                        "sirName": formdata?.surname ,
                         "first_name": formdata?.first_name,
                         "first_family_name": formdata?.firstFname,
                         "second_family_name": formdata?.secondFname,
                         "third_family_name": "Jamshaid Sabir",
                         "email": formdata?.email,    
                         "phoneNumber": formdata?.phoneNumber,
                         "country": formdata?.country,
                         "state":formdata?.state,
                         "city": formdata?.city,
                         "currentIndustry": formdata?.industry,
                         "positionOfInterest": formdata?.positionOfInterest,
                         "dob": formdata?.expiryDate,
                         "cvFile": formdata?.file,
                         "profile_picture_url": "/uploads/dps/defualt.png",
                         "jobsCategories": formdata?.job,
                         "active": true    
                     }
                    //   let checkToken = token ? '/jobs/applyForJob' : 
                    const response = await callPublicApi("/talentPoolPublic/createTalentPoolPublic", "post", paylaod)
                    if (response.status === "Success") {
                        toast.success(response.message)
                        setActiveIndex((perv) => ({
                            ...perv,
                            one: true
                        }))
                        setApply(false)
                    }
                    else {
                        toast.error(response.message)
                    }
                }
                catch (err) {
                    toast.error(err)

                }
            }
            else {

                try {
                    let paylaod = {
                        "jobid": id,
                        "userid": formdata?._id
                    }
                    const response = await callApi("/jobs/applyForJob", "post", paylaod)
                    if (response.status === "Success") {
                        toast.success(response.message)
                        setApply(false)
                    }
                    else {
                        toast.error(response.message)
                    }
                }
                catch (err) {
                    toast.error(err)

                }

                
            }
        }
    }

    const handleBack = () => {
        let activeIndexs = active - 1
        setActive(activeIndexs)


    }
    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='bscontainer-fluid'>

                <div className={`${type === "applied" && 'md:px-5 px-5 lg:px-0'} row h-full`}>
                    <div className={` ${type === "applied" ? ' col-lg-12' : 'col-lg-7'} order-2 lg:order-1 flex items-center full_form`}>
                        <div className={`w-full ${active === 0 && 'lg:pt-[50px]' || active === 2 && 'lg:mt-[60px]'}`}>
                            <h1 className='text-center font-semibold lg:text-[35px] text-[20px] lg:my-0 md:my-0 my-6'>
                                {type !== "applied" ? "Recruit" : "Apply"}
                            </h1>
                            <div>
                                <div className='flex flex-wrap justify-center items-center lg:px-14 pr-3 lg:mb-12 mb-5'>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={` rounded-full border bg-[#DB4446] text-white pt-2 text-sm  w-[40px] h-[40px] `}>01</div>
                                        <span className={`absolute ${!type === "applied" && 'bg-white'} hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans`}>Personal Information</span>
                                    </div>
                                    <div className={`${activeIndex.one === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[28%] w-[22.6%]`}></div>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex.one === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>02</div>
                                        <span className={`
                                    absolute ${!type === "applied" && 'bg-white'} hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans`}>Company / Info</span>
                                    </div>
                                    <div className={`${activeIndex.two === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[28%] w-[22.6%]`}></div>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex.two === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>03</div>
                                        <span className={`
                                    absolute ${!type === "applied" && 'bg-white'} hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans`}>Resume</span>
                                    </div>
                                    <div className={`${activeIndex.three === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5  h-2 lg:w-[28%] w-[22.6%]`}></div>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex.three === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>04</div>
                                        <span className={`
                                    absolute ${!type === "applied" && 'bg-white'} hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans`}>Submit</span>
                                    </div>


                                    <div className='w-full text-[#464A53] lg:hidden text-center font-sans text-lg font-semibold mt-2'>
                                        {active === 0 && "Personal Information"}
                                        {
                                            listName.map((list, index) => (
                                                active === index + 1 && list
                                            ))
                                        }

                                    </div>

                                </div>


                                <div className='lg:ml-10 lg:mr-24'>

                                    {active === 0 && <InfoForm formdata={formdata} handleNext={handleNext} handleBack={handleBack} />}
                                    {active === 1 && <CompanyForm handleNext={handleNext} handleBack={handleBack} />}
                                    {active === 2 && <ResumeForm handleNext={handleNext} handleBack={handleBack} />}
                                    {active === 3 && <SubmitForm handleNext={handleNext} handleBack={handleBack} />}


                                </div>

                            </div>
                        </div>
                    </div>
                    {
                        type !== "applied" &&

                        <div className={`recrit_form_img col-lg-5 order-1 lg:order-2 h-full  `}>
                            <img src={rightImge} className='h-[999px] object-cover' alt="right_imag" />
                        </div>
                    }

                </div>
            </div>
        </>

    )
}
