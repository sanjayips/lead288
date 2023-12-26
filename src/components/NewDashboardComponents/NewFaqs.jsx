import React, { useState , useEffect} from 'react'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import { callApi } from '../../utils/CallApi';
const NewFaqs = () => {
    const [activetab, setactivetab] = useState("tab_faqs")
    const [open, setOpen] = useState(0);
    const [allInspires, setallInspires] = useState([])


    useEffect(() => {
            (async () => {
                try {
                    const payload = {
                        "sortproperty": "created_at",
                        "sortorder": -1,
                        "offset": 0,
                        "limit": 50,
                        "query": {
                            "critarion": { "active": true },
                            
                            "addedby": "_id email first_name",
                            
                            "lastModifiedBy": "_id email first_name"
                        }
                        
                    }
                    const response = await callApi("/faqs/getFaqsWithFullDetails", "post", payload)
                    if (response?.status === "Success"
                    ) {
                        setallInspires(response?.data?.faqs)
                    }
                } catch (error) {
                    console.log(error);
                }
            })();

    }, [])


    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[84vh] overflow-y-auto p-5 bg-white rounded-2xl'>
            <ul className="flex flex-wrap mb-4" id="orders-tab" role="tablist">
                <li onClick={() => setactivetab("tab_faqs")} className={` lg:px-4 px-2 `}>
                    <span className={`text-[#707070] font-medium cursor-pointer px-3 p-1 rounded-lg ${activetab === "tab_faqs" ? "!text-white bg-[#42946C] font-semibold" : ""}`}>FAQs</span>
                </li>
                <li onClick={() => setactivetab("tab_tutorials")} className={` lg:px-4 px-2 `}>
                    <span className={`text-[#707070] font-medium cursor-pointer px-3 p-1 rounded-lg ${activetab === "tab_tutorials" ? "!text-white bg-[#42946C] font-semibold" : ""}`}>Tutorials</span>
                </li>
                <li onClick={() => setactivetab("tab_requirements")} className={`lg:px-4 px-2`}>
                    <span className={`text-[#707070] font-medium cursor-pointer px-3 p-1 rounded-lg ${activetab === "tab_requirements" ? "!text-white bg-[#42946C] font-semibold" : ""}`}>Email</span>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div className={`tab-pane fade ${activetab === "tab_faqs" ? "show active" : ""} `} >
               { allInspires.map((item, i) => {
                        return (
                            <div className='mb-3 last:mb-0'>
                                <div className="px-3 bg-[#4DA676]  py-1 rounded-xl text-white">
                                    <button className="flex items-center w-full group" aria-expanded={open} onClick={() => setOpen(i)}  >
                                        {open === i ? <GoArrowSmallUp size={28} className='inline ' /> : <GoArrowSmallDown size={28} className='inline ' />}
                                        <div className="text-sm font-medium">{item?.faquestion} </div>
                                    </button>
                                </div>
                                <div className={`text-xs leading-6 bg-[#4DA676] rounded-b-xl -mt-3 pt-5 opacity-80 text-white px-9 pb-5 ${open !== i && 'hidden'}`}>
                                    <div>{item?.faanswer}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={`tab-pane fade ${activetab === "tab_tutorials" ? "show active" : ""} `} >
                    <div className='row'>
                        {Array(6).fill("").map(() => {
                            return (
                                <div className=' col-lg-3'>
                                    <div className='relative text-white border-4 border-white cursor-pointer group hover:border-[#4DA676]'>
                                        <img alt="ppp" className='w-full cursor-pointer ' src="http://placekitten.com/200/200" />
                                        <FiPlayCircle size={74} className='absolute inline top-[35%] left-[35%]' />
                                        <AiOutlineHeart size={24} className='absolute top-[5%] text-black bg-white rounded-full p-1 inline left-[70%]' />
                                        <AiOutlineStar size={24} className='absolute top-[5%] text-black bg-white rounded-full p-1 inline left-[85%]' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewFaqs
