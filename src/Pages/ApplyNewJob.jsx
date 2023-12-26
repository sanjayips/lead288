import React, { useEffect, useState } from 'react'
import { IoSaveOutline, IoPrintOutline, IoMailOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp, BsFillShareFill, BsHeart, BsListUl } from "react-icons/bs";
import flag from '../assets/images/usflag_logo.png'
// import { MdArrowDropDown } from 'react-icons/md';
import { RiLayoutGridFill } from 'react-icons/ri';
import SortDropdown from '../components/SortDropdown ';
import { RecruitPage } from './RecruitPage';
import JObDetail from '../components/Popups/JobDetail';
import { callApi } from '../utils/CallApi';
import { Truncate } from '../utils/TrucateString';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import SocialIconsShare from '../components/Popups/SocialSharePopup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SpinnerLoader from '../utils/SpinnerLoader';
import { updateSavedJobs } from '../Redux/RecruitAuthSlice/RecruitAuthSlice';
import { Link } from 'react-router-dom';
const ApplyNewJob = () => {
    const [layout, setlayout] = useState("grid")
    const [sidebar, setSetSidebar] = useState(false)
    const [apply, setApply] = useState(false)
    const [jobs, setJobs] = useState([])
    const [saved, setSaved] = useState([])
    const [jobData, setJobData] = useState({})
    const [jobId, setJobId] = useState()
    const [showIconPopup, setShowIconPopup] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sort, setShort] = useState(0)
    // const jobs = ["asdf", "asdfasd", "asdfds", "next", "", "", "", ""]

    const user = useSelector((state) => state.recruitAuth?.userInfo)

    const dispatch = useDispatch()

    console.log("jobs", jobs)

    let sortData = () => {
        let arr = []
        setLoading(true)

        let findMostApplied = jobs.filter((job) => {
            if (job?.applicants.length > 0) {
                arr.push(job)
                setLoading(false)

            }
            return setJobs(arr)
        })

        console.log("findMostApplied", findMostApplied)
    }


    useEffect(() => {
        let payload = {
            "sortproperty": "created_at",
            "sortorder": -1,
            "offset": 0,
            "limit": 50
        }

        let payloads =
        {
            "userid": user._id,
            "savedJobsFields": ""
        }

        let fetchApi = async () => {
            try {
                setLoading(true)
                let res = await callApi('/jobs/listjobs', 'post', payload)
                setJobs(res?.data?.jobs)
                setLoading(false)
                let res2 = await callApi('/jobs/getSavedJobs', 'post', payloads)
                setSaved(res2.data)

            }
            catch (err) { }
        }
        if (sort === 1 || sort === 0) {
            fetchApi()

        }
        else {
            sortData()
        }
    }, [sort])



    const SaveJob = async () => {
        try {
            let payload = {
                "userid": user?._id,
                "jobid": jobData._id
            }

            let res = await callApi('/jobs/saveApplicantJob', 'post', payload)
            if (res.status === "Success") {
                toast.success(res.message);
                let filterJobs = user?.savedJobs.includes(jobData._id)
                console.log("filter", filterJobs)
                if (filterJobs === false) {
                    debugger
                    let newJobsList = [...user?.savedJobs, jobData._id]
                    dispatch(updateSavedJobs(newJobsList))
                }


            }
            else {
                toast.error(res.message);

            }
        }
        catch (err) { }
    }
    return (
        <>

            <div className='bscontainer-fluid p-0 '>

                <div className="lg:hidden ">
                    <JObDetail id="job-modal" data={jobData?._id} modalOpen={sidebar} onClose={() => setSetSidebar(false)} setApply={(value) => setApply(value)} />
                </div>
                <SocialIconsShare id="job-modal" data={jobData?._id} modalOpen={showIconPopup} onClose={() => setShowIconPopup(false)} />

                {
                    apply ?
                        <RecruitPage setApply={setApply} type="applied" id={jobId} />
                        :
                        <div className='row g-0'>
                            <div className={sidebar ? 'col-lg-8' : 'col-lg-12'}>
                                <div className='row g-0 px-4 py-2'>
                                    <div className='col-lg-12'>
                                        <div className='lg:flex md:flex lg:justify-between apply_job'>
                                            <div className='m-3 w-full'>
                                                <h2 className='text-[16px] font-poppine font-semibold'>Here, we found job!</h2>
                                                <span className='text-[14px] font-poppine text-gray-400' >Brand on your preferance</span>
                                            </div>
                                            <div className='flex items-center justify-end px-4 sorting w-full'>
                                                <button onClick={() => { setlayout("grid") }} className={`mr-8 text-[20px] ${layout === "grid" ? "text-[#65A33A]" : ""}`}>
                                                    <RiLayoutGridFill />
                                                </button>
                                                <button onClick={() => { setlayout("list") }} className={`mr-8 text-[20px] ${layout === "list" ? "text-[#65A33A]" : ""}`}>
                                                    <BsListUl />
                                                </button>
                                                <h2 className='text-[16px] text-gray-300'>Sort by : </h2>
                                                <div >
                                                    <SortDropdown setShort={setShort} />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {jobs && jobs.length > 0 ? jobs?.map((item, i) => {
                                        return (
                                            <div key={i} className={`${layout === "grid" ? sidebar ? "col-lg-6 " : "col-lg-4 col-md-6" : "col-lg-12"} mb-5 px-2`} >
                                                <div className=' border-2 border-transparent hover:border-[#65A33A] rounded-md '>
                                                    <div className='bg-white rounded-md cursor-pointer'>
                                                        <div className='row g-0  '>
                                                            <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-3"} ${layout === "grid" ? "h-[250px] " : "h-44"} rounded-md`}>
                                                                <img src={`${item?.job_image_url}`} alt="job_img" className='object-cover h-[100%]  w-full' />
                                                            </div>
                                                            <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-8"} p-2`}>
                                                                <div onClick={() => { return setSetSidebar(true), setJobData(item) }} className={` flex justify-between items-center`}>
                                                                    <h1 className={`${layout !== "grid" && "text-[20px]"} 'text-[#0D1829] hover:text-[#65A33A] text-[20px] font-medium poppine`}>{Truncate(item?.job_title, 20)}</h1>
                                                                    <div>
                                                                        <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                                                            <img src={flag} alt="flag" />
                                                                        </span>
                                                                        <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                                                            <img src={flag} alt="flag" />
                                                                        </span>
                                                                        <span className='w-4 h-4  rounded-full inline-block align-middle'>
                                                                            <img src={flag} alt="flag" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <h1 onClick={() => { return setSetSidebar(true), setJobData(item) }} className={`${layout !== "grid" && "text-[15px] pt-2"} font-poppine text-[#626973] mb-4 text-[16px] mt-2 `}>{Truncate(item?.description, 120)}</h1>
                                                                <div className={`${layout !== "grid" && 'pt-[2rem] flex justify-between items-center '} flex justify-between items-center`}>
                                                                    <div>
                                                                        <button className='text-[14px] transition-all text-white hover:bg-[#E84025] hover:text-white  rounded-sm pl-2 pr-2 p-[6px] bg-[#42946C] mr-1'>{item?.jobtype}</button>
                                                                        <button className='text-[14px] transition-all text-[#42946C]  p-[5px] border-[#42946C] border rounded-sm mr-1'>{item?.jobclass}</button>
                                                                        <BsHeart className='inline mx-1 ' />
                                                                        <BsFillShareFill onClick={() => setShowIconPopup(true)} className='inline' />
                                                                    </div>
                                                                    <div className='text-[14px]'>
                                                                        <span className='font-bold'>{Truncate(item?.salary, 12)}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                        : <div className='flex justify-center items-center mt-20'>
                                            <SpinnerLoader />
                                        </div>


                                    }




                                </div>
                            </div>
                            {sidebar &&
                                <div style={{ boxShadow: "-2px 3px 5px #00000043" }} className='col-lg-4 border bg-white  shadow-lg'>
                                    <div className='p-5'>
                                        <h1 className='text-[#65A33A] text-center text-lg font-medium mb-4'>Detail Job</h1>
                                        <div className='border-2 border-[#65A33A]  rounded-md p-[2px] mb-2'>
                                            {/* <div className='bg-top-background bg-bottom bg-no-repeat bg-cover h-44 rounded-md'></div> */}
                                            <img src={`${jobData?.job_image_url}`} />
                                        </div>
                                        <h1 className='text-[#0D1829] text-center text-[16px] font-medium mb-2'>{jobData?.job_title}</h1>
                                        <div className='flex justify-between items-center mb-4'>
                                            <h1 className='text-[#626973] text-[12px]'> {jobData?.jobtype} at {jobData?.employer}</h1>
                                            <div>
                                                <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                                    <img src={flag} alt="flag" />
                                                </span>
                                                <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                                    <img src={flag} alt="flag" />
                                                </span>
                                                <span className='w-4 h-4  rounded-full inline-block align-middle'>
                                                    <img src={flag} alt="flag" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='mb-4'>
                                            <h1 className='text-[#000]  text-[16px] mb-4'>Qualification :</h1>
                                            <ul className='list-disc pl-4 text-[#0D1829] text-[14px]'>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                            </ul>
                                        </div>
                                        <div className='mb-4'>
                                            <h1 className='text-[#000]  text-[16px] mb-4'>Responsibilities & Duties :</h1>
                                            <ul className='list-disc pl-4 text-[#0D1829] text-[14px]'>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                                <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                            </ul>
                                        </div>
                                        <div className='mb-4 h-8'>
                                            <Link to="/candidateDashboard/inbox" className='border-2 transition-all border-[#65A33A] px-2 py-2 text-[14px] bg-[#65A33A] hover:bg-white text-white hover:text-[#65A33A] rounded-md float-left'>Messages</Link>
                                            <button onClick={() => { return setApply(true), setJobId(jobData?._id) }} className='border-2  transition-all border-[#65A33A] px-2 py-2 text-[14px] bg-[#65A33A] hover:bg-white text-white hover:text-[#65A33A] rounded-md float-right'>Apply Now</button>
                                        </div>
                                        <h1 className='text-[#65A33A]  text-sm mb-1'>Interested in this job?</h1>
                                        <div className='text-[#626973] text-[11px] mb-4'>
                                            <IoSaveOutline className='inline mr-1 text-[14px]' />
                                            {
                                                saved.includes(jobData._id) ?
                                                    <span className='mr-2 text-[14px] cursor-pointer'>Applied</span>
                                                    :
                                                    <span className='mr-2 text-[14px] cursor-pointer' onClick={() => SaveJob()}>Save Job</span>
                                            }
                                            <IoPrintOutline className='inline mr-1 text-[14px]' /><span className='mr-2 text-[14px]'>Print this Job</span>
                                            <IoMailOutline className='inline mr-1 text-[14px]' /><span className='text-[14px]'>Email this Job</span>
                                        </div>

                                        <div className='flex items-center flex-wrap mt-1'>
                                            <div className='border rounded-full p-1 '>
                                                <span className='text-[14px] px-2'>English Transitions</span>
                                            </div>
                                            <div className='border rounded-full p-1 m-2 '>
                                                <span className='text-[14px] px-2'>English</span>
                                            </div>
                                            <div className='border rounded-full p-1 mb-2'>
                                                <span className='text-[14px] px-2'>English Transitions</span>
                                            </div>
                                        </div>
                                        <h1 className='text-[#65A33A]  text-sm mb-1'>Share on Social Media</h1>
                                        <div className='mb-4'>
                                            <FacebookShareButton url={`https://recruit-pages.vercel.app/detail/:${jobData._id}`}>
                                                <div className=' text-center flex justify-center items-center    pt-2 text-[22px]  w-[30px] h-[30px]' >
                                                    <BsFacebook className='inline text-blue-600 mr-2' />
                                                </div>
                                            </FacebookShareButton>
                                            <LinkedinShareButton url={`https://recruit-pages.vercel.app/detail/:${jobData._id}`}>
                                                <div className=' text-center flex justify-center items-center    pt-2 text-[22px]   w-[30px] h-[30px]' >
                                                    <BsLinkedin className='inline text-[#0177B5] mr-2' />
                                                </div>
                                            </LinkedinShareButton>
                                            <TwitterShareButton url={`https://recruit-pages.vercel.app/detail/:${jobData._id}`}>
                                                <div className=' text-center flex justify-center items-center    pt-2 text-[22px]  w-[30px] h-[30px]' >
                                                    <BsTwitter className='inline text-[#33ACE2] mr-2' />
                                                </div>
                                            </TwitterShareButton>
                                            {/* <BsFacebook className='inline text-blue-600 mr-2' />
                                        <BsTwitter className='inline text-[#33ACE2] mr-2' />
                                        <BsLinkedin className='inline text-[#0177B5] mr-2' />
                                        <BsWhatsapp className='inline text-[#26CC64]' /> */}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                }
            </div>
        </>

    )
}

export default ApplyNewJob