import React, { useEffect, useState } from 'react'
import { FiDivideCircle } from 'react-icons/fi'
import { GiMilkCarton, GiSpookyHouse, GiHealthCapsule } from 'react-icons/gi'
import { IoShirt } from 'react-icons/io5'
import { MdOutlineCleanHands } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import Slider from "react-slick";
import { Card } from 'react-bootstrap'
import { CustomCardContainer } from './StyleCategory'
import star from "../../../../assets/landingImages/icons/star.png";
import dp_img from "../../../../assets/landingImages/ViewToday.png";
import { RiShoppingCartLine } from 'react-icons/ri'
import { callPublicApi } from '../../../../utils/CallApi'

const Category = () => {
    const [category, setCategory] = useState([])
    let categoryList = ["Clothing", "Animals", "Personal Electronics & Electric Mobility", "Beverages"]
    useEffect(() => {
        let fetchLists = async () => {
            let option = {

                "sortproperty": "createdAt",
                "sortorder": -1,
                "offset": 0,
                "limit": 100,
                "query": {
                    "critarion": { "active": true },

                    "addedby": "_id email first_name",

                    "lastModifiedBy": "_id email first_name"
                }
            }
            try {

                let res = await callPublicApi('/productsOfStore/getProductsWithFullDetailsPublic', 'post', option)
                if (res.status === "Success") {
                    setCategory(res?.data?.productsOfProductsOfStores)
                    // let arr  
                    // let pr = category.filter((f , i) => {
                    //     if()
                    // } )
                }
            }
            catch (err) {
                console.log("err", err)
            }
        }
        fetchLists()
    }, [])

    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };




    function add3Dots(string, limit) {
        var dots = "...";
        if (string?.length > limit) {
            // you can also use substr instead of substring
            string = string.substring(0, limit) + dots;
        }

        return string;
    }



    return (
        <>
            <div className='bscontainer mb-2 mt-6'>
                <div className="tranding-heading relative">
                    <h1 className=" font-medium text-[20px]">Shop by Category</h1>
                    <hr className="mt-2 " />
                    <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[17%]" />
                </div>
            </div>
            <div className='bscontainer-fluid'>
                <div className='row mt-6 '>
                    <div className='col-lg-3'>
                        <ul className='border-r'>
                            <li className='cursor-pointer bg-[#149F76] text-white p-3 border-b'>
                                <div className='flex items-center '>
                                    <FiDivideCircle className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">Todays best offer</h2>
                                </div>

                            </li>
                            <li className='cursor-pointer  text-white p-3 border-b'>
                                <div className='flex items-center text-[#707070] '>
                                    <GiMilkCarton className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">Organic Nutration</h2>
                                </div>

                            </li>
                            <li className='cursor-pointer  text-white p-3 border-b'>
                                <div className='flex items-center text-[#707070] '>
                                    <IoShirt className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">
                                        Clothing</h2>
                                </div>

                            </li>
                            <li className='cursor-pointer  text-white p-3 border-b'>
                                <div className='flex items-center text-[#707070] '>
                                    <MdOutlineCleanHands className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">Cultivate & Grow </h2>
                                </div>

                            </li>
                            <li className='cursor-pointer  text-white p-3 border-b'>
                                <div className='flex items-center text-[#707070] '>
                                    <GiSpookyHouse className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">House & Decor</h2>
                                </div>

                            </li>
                            <li className='cursor-pointer  text-white p-3 border-b'>
                                <div className='flex items-center text-[#707070] '>
                                    <GiHealthCapsule className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">Health & Beauty</h2>
                                </div>

                            </li>
                            <li className='cursor-pointer  text-white p-3 border-b'>
                                <div className='flex items-center text-[#707070] '>
                                    <BsThreeDots className="text-[23px]" />
                                    <h2 className="mx-2 text-[16px]">All Category</h2>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-9'>
                        <Slider {...settings} className="trendingNow-slick">
                            {
                                category?.map((item, index) => (
                                    <div className='' key={index}>
                                        <CustomCardContainer>
                                            <Card className="customCard " >
                                                <div className="customCard-body ">
                                                    <div className="image-section relative">
                                                        <img
                                                            // onClick={() => setModalShow(true)}
                                                            className="main-img"
                                                            src={item?.pictureLink1}
                                                            alt="Trending-Now"
                                                        />
                                                        <img
                                                            // onClick={() => setModalShow(true)}
                                                            className="main-img img_hover"
                                                            src={item?.pictureLink1}
                                                            alt="Trending-Now"
                                                        />
                                                    </div>
                                                    <div className="content relative">
                                                        <div className="text-[14px] font-medium">
                                                            <h1>{add3Dots(item.nameofProduct, 30)}</h1>

                                                        </div>
                                                        <div className="flex justify-between">
                                                            <div className="rating ">
                                                                <div className="stars">
                                                                    <img src={star} />
                                                                    <img src={star} />
                                                                    <img src={star} />
                                                                    <img src={star} />
                                                                    <img src={star} />
                                                                </div>
                                                                <div className="review">(43 Reviews)</div>
                                                            </div>
                                                            <span>${item.price}</span>
                                                        </div>

                                                        <div className="absolute w-full left-0 shop_show">
                                                            <button className="add-to-cart !w-[100%] !bg-[#27D6A5]  ">
                                                                <RiShoppingCartLine className="text-[20px]" /> Add to Cart <span className="cart"></span>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </Card>
                                        </CustomCardContainer>
                                    </div>
                                ))}

                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category