import { Check } from 'lucide-react'
import { Plus } from 'lucide-react'
import { AlertCircle } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addProject } from '../service/api'
import { Toaster, toast } from 'sonner'
const AddCardComponent = ({ fetchProject }) => {

    const titleref = useRef(null)
    const toolsref = useRef(null)
    const durationref = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const projectData = {
            title: titleref.current.value,
            tools: toolsref.current.value,
            duration: durationref.current.value
        }
        try {
            const response = await addProject(projectData)
            console.log(response.status)
            if(response.status == 200) {
                console.log("Added")
                toast('Project added !', {
                    className: 'bg-gradient-to-r from-green-500 to-lime-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                    icon: <Check />,
                });
                fetchProject()
            }
        } catch (error) {
            console.error(error)
            toast('Error', {
                className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
                icon: <AlertCircle />,
            });
        }
        setVisible(false)
    }


    const [visible, setVisible] = useState(false)
    return (
    <>
        <button onClick = {() => setVisible( true ) } className='h-3rem w-5rem flex justify-center text-[#efebeb] p-3 items-center bg-[#343434] text-xl rounded-md fixed z-10 bottom-[3rem] right-[3rem] hover:border-2 border-[#343434] hover:bg-[#efebeb] font-bold hover:text-[#343434]'>
            Add Project
            < Plus className='ml-2' />
        </button>
        {
            visible && (
                <>
                    <div className="h-full w-full absolute mt-[50%] z-50 flex justify-center items-center bg-[#efebeb]/50">
                        <div className="h-[50%] w-[35%] flex justify-center items-center bg-[#f8f8f8] rounded-md shadow-md">
                            <form className='h-[90%] w-[80%] flex flex-row' onSubmit={ handleSubmit }>
                            <div className='h-full w-full bg-[#343434] flex flow-row justify-center items-center rounded-md shadow-md'>
                                <div className='h-[70%] w-[80%]'>
                                    <input type="text" ref={ titleref } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='title' id="" />
                                    <input type="text" ref={ toolsref } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='tools' id="" />
                                    <input type="text" ref={ durationref } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='duration' id="" />
                                    <div className=' h-[20%] w-full flex justify-center items-center'>
                                        <button type='submit' className=' h-full w-1/2 bg-[#f8f8f8] mt-[7rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-[#b3afaf] hover:text-[#000000]'>add</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </>
            )
        }
        <Toaster richColors />
    </>
  )
}

export default AddCardComponent
