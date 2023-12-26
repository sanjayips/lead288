import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../utils/CallApi';

const schema = yup.object({
    faquestion: yup.string().required(),
    faanswer: yup.string().required(),
});
const CreateFaq = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            let payload = {
                "faquestion": data.faquestion,
                "faanswer": data.faanswer,
            }
            let response = await callApi('/faqs/createFaq', 'post', payload);
            if (response.status === "Success") {
                reset()
                toast.success(response.message);

            }
            else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bscontainer-fluid'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-11'>
                    <div className='col-12 mb-6'>
                        <div className='mb-3'>
                            <ul className="inline-flex flex-wrap text-sm font-medium">
                                <li className="flex items-center">
                                    <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/faq" className="text-slate-500 hover:text-indigo-500" >FAQS </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/faq/create-faq" className="text-slate-500 hover:text-indigo-500" href="#0">Create faqs</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new FAQ</h2>
                        </header>
                    </div>

                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Question </label>
                        <textarea rows={4}{...register('faquestion')} className={`border p-2 focus:outline-blue-500 w-full rounded-sm    ${errors.faquestion ? "border-red-400" : "border-gray-400"} `} />
                        {errors.faquestion && (
                            <p className='text-red-500 text-sm'>{errors.faquestion.message}</p>
                        )}
                    </div>
                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Answer </label>
                        <textarea rows={4}{...register('faanswer')} className={`border p-2 focus:outline-blue-500 w-full rounded-sm   ${errors.faanswer ? "border-red-400" : "border-gray-400"} `} />

                        {errors.faanswer && (
                            <p className='text-red-500 text-sm'>{errors.faanswer.message}</p>
                        )}
                    </div>



                    <div className='col-lg-12'>
                        <button className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateFaq