import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose, MdDelete } from 'react-icons/md';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi, HOSTNAME } from '../../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';
import { BsPlusCircle } from 'react-icons/bs';
import Symptoms from '../EditAppointment/Symptoms';


const schema = yup.object({

    // consultationFee: yup.string().required('consultation Fee is Required'),
    // communication: yup.string().required('communication  is Required'),
    // allergies: yup
    //     .array()
    //     .of(
    //         yup.object({
    //             name: yup.string().required(),
    //         })
    //     )
    //     .required(),
    // symptoms: yup
    //     .array()
    //     .of(
    //         yup.object({
    //             name: yup.string().required(),
    //         }))
    //     .required(),
    // image: yup.mixed().test('required', 'file is Required', value => { return value && value.length }),
    // video: yup.mixed().test('required', 'file is Required', value => { return value && value.length }),
});

const ConsultationType = ({ control, register, watch, errors, mode, reset, data, setPicturs, setVideos }) => {
    // const [image, setImage] = useState('')
    // const [video, setVideo] = useState('')
    // const {
    //     register,
    //     watch,
    //     reset,
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({ mode: 'onChange', resolver: yupResolver(schema), defaultValues: { allergies: [{ name: "" }], symptoms: [{ name: "" }] } });


    const { fields, append, remove } = useFieldArray({
        control,
        name: "allergies",
    });

    const handleFile = async (e, type) => {
        try {
            if (type === "image") {
                let file = e.target.files[0]
                let formData = new FormData();
                formData.append('pictures', file)
                let res = await callApi('/appointmentrequests/uploadMedicalImages', "post", formData)
                if (res.status === "Success") {
                    toast.success(res.message);
                    setPicturs(res?.data)
                }
                else {
                    toast.error(res.message);

                }
            }
            else {
                let file = e.target.files[0]
                let formData = new FormData();
                formData.append('videos', file)

                let res = await callApi('/appointmentrequests/uploadMedicalVideos', "post", formData)
                if (res.status === "Success") {
                    toast.success(res.message);
                    setVideos(res?.data)
                }
                else {
                    toast.error(res.message);

                }
            }

        } catch (error) {
            toast.error(error);


        }
    }



    const onSubmit = async (values) => {

        let al = []
        let sm = []

        for (let index = 0; index < values.allergies.length; index++) {
            const element = values.allergies[index].name;
            al.push(element)

        }

        for (let index = 0; index < values.symptoms.length; index++) {
            const element = values.symptoms[index].name;
            sm.push(element)

        }



        // let payload = {
        //     allergies: al,
        //     symptoms: sm,
        //     consultationFee: values.consultationFee,
        //     communication: values.communication,
        //     pictures: image,
        //     videos: video
        // }

    };

    // useEffect(() => {
    //     if (data?.communication) {
    //         reset(data)
    //     }
    // }, [reset, data])

    return (
        <div className='bscontainer-fluid'>

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

            <form >
                <div className='row px-10 pb-3'>

                    <h2 className='text-[20px] font-medium'>Consultation Type</h2>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Consultation Fee
                        </label>
                        {
                            mode !== "view" &&

                            <div className='absolute right-5 top-10'>
                                {!errors.consultationFee && watch('consultationFee') ? (
                                    <FcCheckmark />
                                ) : errors.consultationFee ? (
                                    <div className=' text-red-500'>
                                        <MdClose />
                                    </div>
                                ) : null}
                            </div>
                        }
                        {mode === "view" ?
                            (<p>{watch('consultationFee')}</p>)
                            :
                            <input
                                {...register('consultationFee')}
                                autoComplete='off'
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.consultationFee && 'border-red-400'
                                    }`}
                                name='consultationFee'
                                id='name'
                                type='text'
                                placeholder='consultation Fee'
                            />
                        }

                        {errors.consultationFee && (
                            <p className='text-red-500 text-sm'>{errors.consultationFee.message}</p>
                        )}
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Communication
                        </label>
                        {mode === "view" ?
                            (<p>{watch('communication')}</p>)
                            :
                            <select
                                {...register('communication')}
                                className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]   ${errors.communication && 'border-red-400'
                                    }`}>
                                <option value="">Select Communication</option>
                                <option>{watch('communication')}</option>

                            </select>
                        }
                        {errors.communication && (
                            <p className='text-red-500 text-sm'>{errors.communication.message}</p>
                        )}

                    </div>
                    {/* <div className='col-lg-4 mb-4 relative'>
                        <label className='block text-sm font-medium mb-1' htmlFor='name'>
                            Allergies
                        </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.allergies && watch('allergies') ? (
                                <FcCheckmark />
                            ) : errors.allergies ? (
                                <div className=' text-red-500'>
                                    <MdClose />
                                </div>
                            ) : null}
                        </div>
                        <input
                            {...register('allergies')}
                            autoComplete='off'
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.allergies && 'border-red-400'
                                }`}
                            name='allergies'
                            id='name'
                            type='text'
                            placeholder='Allergies'
                        />

                        {errors.allergies && (
                            <p className='text-red-500 text-sm'>{errors.allergies.message}</p>
                        )}
                    </div> */}

                    <div className='col-lg-6 mb-4 '>
                        <label className='block text-sm font-medium mb-1 '>
                            Pictures
                        </label>
                        {mode === "view" ?
                            (
                                data?.pictures ? <img src={`${HOSTNAME}${data?.pictures[0]}`} alt="pic" /> : null
                            )
                            :
                            <div className='relative'>
                                <input
                                    type="file"
                                    onChange={(e) => handleFile(e, 'image')}
                                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full  `}
                                />

                                {/* {errors.image && (
                                <p className='text-red-500 text-sm'>{errors.image.message}</p>
                            )} */}

                            </div>
                        }
                    </div>
                    <div className='col-lg-6 mb-4 '>
                        <label className='block text-sm font-medium mb-1 '>
                            Videos
                        </label>
                        {mode === "view" ?
                            (
                                data?.videos ?
                                    <video controls loop style={{ height: '160px' }}>
                                        <source src={`${HOSTNAME}${data?.videos[0]}`} type="video/mp4" />
                                    </video>
                                    : null
                            )
                            :
                            <div className='relative'>
                                <input
                                    // {...register('')}
                                    type="file"
                                    onChange={(e) => handleFile(e, "video")}
                                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full  `}
                                />

                                {/* {errors.video && (
                                <p className='text-red-500 text-sm'>{errors.video.message}</p>
                            )} */}
                            </div>
                        }
                    </div>

                    <Symptoms {...{ register, watch, errors, control, mode }} />
                    {
                        mode !== "view" &&
                        <div className="flex justify-between">
                            <h2 className='mb-3 font-medium'></h2>
                            <button type="button" onClick={() => append({ name: "" })} className='p-2 mb-3 flex items-center bg-red-500 hover:bg-green-600 text-white'>
                                Add <BsPlusCircle className='ml-2' />
                            </button>
                        </div>
                    }
                    <h2 className='text-[20px] font-medium pb-3'>Allergies</h2>
                    <div className='col-lg-12 mb-4 border mx-2'>
                        <div className='row p-2 '>
                            {
                                fields.map((item, index) => (
                                    <>
                                        <div className='col-lg-4 relative'>
                                            <div className=' mt-2 mb-2'>
                                                <div className="flex items-center">
                                                    {mode === "view" ?
                                                        (<p>{watch(`allergies[${index}].name`)}</p>)
                                                        :
                                                        <>
                                                            <input
                                                                name={`allergies[${index}].name`}
                                                                {...register(`allergies[${index}].name`)}
                                                                autoComplete='off'
                                                                className={`border p-2  focus:outline-blue-500 rounded-sm  ${errors.allergies?.[index]?.name && 'border-red-400'
                                                                    }`}
                                                                id='name'
                                                                placeholder='Allergies'
                                                            />

                                                            <div>
                                                                {index > 0 &&
                                                                    <button onClick={() => remove(index)} className='p-2 ml-2  h-[10] bg-red-500 hover:bg-green-600 text-white'>
                                                                        <MdDelete />
                                                                    </button>
                                                                }


                                                            </div>
                                                        </>
                                                    }
                                                </div>
                                                {/* {
                                                    mode !== "view" &&
                                                    <span
                                                        hidden={watch(`allergies[${index}].name`)}
                                                        className='absolute text-red-400 text-lg font-medium  top-4 left-[95px]'
                                                    >
                                                        *
                                                    </span>
                                                } */}

                                                {errors.allergies?.[index].name && (
                                                    <p className='text-sm text-red-500'>{errors.allergies?.[index].name?.message}</p>
                                                )}

                                            </div>
                                        </div>

                                    </>


                                ))}

                        </div>
                    </div>



                </div>
            </form>
        </div>
    );
};

export default ConsultationType;
