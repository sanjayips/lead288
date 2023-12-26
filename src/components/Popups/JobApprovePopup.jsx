import React, { useEffect, useRef, useState } from 'react'
import Transition from '../../utils/Transition';
// import moment from "moment"
import { toast } from 'react-toastify';
import { callApi } from '../../utils/CallApi';
// import DeletePopup from '../../components/deletePopups/DeletePopups';
import ApproveDisApprove from '../../components/Popups/ApproveDisapprove';
// import { Truncate } from '../../utils/TrucateString';
import { FiCheck } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import moment from 'moment';

const JobApproved = ({ id, modalOpen, onClose, data, jobId }) => {
  const modalContent = useRef(null);
  const [actionId, setActionId] = useState();
  const [action, setAction] = useState('');
  // const [delId, setDelId] = useState('')
  // const [delPopup, setDelPopup] = useState(false)
  const [approvePopup, setApprovePopup] = useState(false);
  const [alljobs, setalljobs] = useState([])





  // console.log("dta", data )

  // const deletePopToggle = async (id) => {
  //     setDelId(id)
  //     setDelPopup(true)
  // }

  // const deleteInspire = async () => {
  //     let value = {
  //         id: delId
  //     }
  //     try {
  //         const res = await callApi("/jobs/deletejob", "post", value)
  //         if (res.status === "Success") {
  //             toast.success(res.message);
  //             setDelPopup(false)
  //             let oldinspires = alljobs
  //             const updatedInspires = oldinspires.filter((inspire) => inspire._id !== res.data._id)
  //             setalljobs(updatedInspires)
  //         }
  //         else {
  //             toast.error(res.message);

  //         }
  //     } catch (error) {

  //     }
  // }


  const ApprovePopup = (data) => {
    setAction(data.status)
    setActionId(data.id)
    setApprovePopup(true)
  }

  // const handleApproved = async () => {
  //     let value = {
  //         "jobid": jobId,
  //         "userid": user.userid
  //     }
  //     try {
  //         const res = await callApi('/jobs/addApprovedApplicants', 'post', value);
  //         if (res.status === 'Success') {
  //             toast.success(res.message);
  //             // let oldUsers = alljobs;
  //             // const updateUsers = oldUsers.map((user) => {
  //             //     if (user._id === res.data._id) {
  //             //         user.approved = action;
  //             //     }
  //             //     return user;
  //             // });
  //             // setalljobs(updateUsers);
  //         } else {
  //             toast.error(res.message);
  //         }
  //     } catch (error) { }
  // };






  // useEffect(() => {
  //   let fetch = async () => {
  //     let value = {
  //       "jobid": jobId,
  //     }
  //     try {
  //       const res = await callApi('/jobs/getApprovedApplicants', 'post', value);
  //       if (res.status === 'Success') {
  //         setalljobs(res?.data?.approvedApplicants);
  //       } else {
  //         toast.error(res.message);
  //       }
  //     } catch (error) { }
  //   }
  //   fetch()
  // }, [modalOpen])



  return (
    <>

      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-2/3">
          {/* Modal header */}
          <div className="px-5 py-3 border-b border-slate-200">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-slate-800">Approved Applicants</div>
              <button className="text-slate-400 hover:text-slate-500" onClick={onClose}>
                <div className="sr-only">Close</div>
                <svg className="w-4 h-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                </svg>
              </button>
            </div>
          </div>
          <div className='bscontainer'>

            <div>
              <div className='overflow-x-auto'>
                <table className='table-auto w-full'>
                  <thead className='text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200'>
                    <tr>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>ID</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Name</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Email</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>
                          Phone Number
                        </div>
                      </th>
                     
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>
                          Registered Date
                        </div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Status</div>
                      </th>
                      {/* 
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Actions</div>
                      </th> */}
                    </tr>
                  </thead>
                  <tbody className='text-sm divide-y divide-slate-200'>
                    {alljobs?.map((user) => {
                      return (
                    <tr key={user._id}>
                      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='text-left'>{user._id}</div>
                      </td>
                      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='text-left'>{user.first_name}</div>
                      </td>
                      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='text-left'>{user.email}</div>
                      </td>
                      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='text-left'>{user.phoneNumber}</div>
                      </td>
                     
                      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='text-left'>{ moment(user.created_at).format('ll')}</div>
                      </td>
                      <td>
                        <div className='flex justify-center items-center'>
                          <div className=' text-white cursor-pointer rounded-full w-full  p-1  bg-green-300  flex justify-center'>
                            Approved
                          </div>

                        </div>
                      </td>



                    </tr>
                     );
                    })} 
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </Transition>
    </>
  )
}

export default JobApproved