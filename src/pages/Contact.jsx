import { Linkedin, Mail, Phone, User } from 'lucide-react'
import { useRef } from 'react'

const Contact = () => {

  const nameref = useRef(null)
  const emailref = useRef(null)
  const phoneref = useRef(null)
  const messageref = useRef(null)

  const contactReport = (e) => {

    e.preventDefault()

    console.log(nameref.current.value)
    console.log(emailref.current.value)
    console.log(phoneref.current.value)
    console.log(messageref.current.value)
  }
  return (
    <>
         <div className="h-screen w-screen flex justify-center items-center bg-[#efebeb]">
            <div className="h-[60%] w-[45%] flex justify-center items-center bg-[#f8f8f8] rounded-md shadow-md">
              <form className='h-[90%] w-[90%] flex flex-row' onSubmit={ contactReport }>
                <div className='h-full w-2/5 bg-[#f8f8f8] '>
                  <h1 className='h-[20%] font-bold text-4xl p-[1.5rem] ml-2'>Connect</h1>
                  <User className='h-[40%] w-[70%] text-2xl flex justify-center mt-[2rem] ml-5 items-center'></User>
                  <div className='h-[20%] w-[90%] mt-[2.5rem] flex flex-row justify-center items-center'>
                    <div className='h-full w-1/3 flex justify-center items-center'><a href="tel:+91 9489858821" className='hover:cursor-pointer'><Phone /></a></div>
                    <div className='h-full w-1/3 flex justify-center items-center'><a href="mailto:vasanthkrish.s2004@gmail.com" className='hover:cursor-pointer'><Mail /></a></div>
                    <div className='h-full w-1/3 flex justify-center items-center'><a href="https://www.linkedin.com/in/vasanthkrish2004/" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer'><Linkedin /></a></div>
                  </div>
                </div>
                <div className='h-full w-3/5 bg-[#343434] flex flow-row justify-center items-center rounded-md shadow-md'>
                    <div className='h-[70%] w-[80%]'>
                      <input type="text" ref={ nameref } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='name' id="" />
                      <input type="text" ref={ emailref } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='email' id="" />
                      <input type="text" ref={ phoneref } className='text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='phone' id="" />
                      <textarea ref={ messageref } className=' resize-none text-gray-400 w-full h-[20%] border-[#f8f8f8] border-b p-3 text-xl focus:outline-none bg-[#343434] focus:placeholder-transparent' placeholder='message' id=""></textarea>
                      <div className=' h-[20%] w-full flex justify-center items-center'>
                        <button className=' h-full w-full bg-[#f8f8f8] mt-[4rem] font-bold text-2xl rounded-md hover:cursor-pointer hover:bg-[#b3afaf] hover:text-[#000000]'>send</button>
                      </div>
                    </div>
                </div>
              </form>
            </div>
         </div>
    </>
  )
}

export default Contact
