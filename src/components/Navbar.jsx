import { XCircle, User2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Resume from '../assets/pdf/Resume.pdf'
import { set } from 'mongoose'

const Navbar = () => {

    const NavLinks = [ 
        {
            title: "Profile",
            url: "/"
        },
        {
            title: "Projects",
            url: "/projects"
        },
        {
            title: "Contact",
            url: "/contact"
        }
    ]

    const emailref = useRef(null)
    const passwordref = useRef(null)

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(emailref.current.value, passwordref.current.value)
    }
    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className="w-full h-[4rem] absolute flex justify-center items-center bg-[#f5f5f5] shadow-xl">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-2xl text-Black'><h1 className='text-3xl hover:cursor-pointer' onClick={() => {setvisible(true)}}>Vasantha Krishnan S</h1></div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-full list-none flex flex-row justify-center gap-6'>
                           {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to = {navdata.url}>
                                        <li className='font-bold text-xl text-black'>{ navdata.title }</li>
                                    </NavLink>
                                ))
                           }
                            {/* <Link to={'/'}>
                            </Link>
                            <Link to={'/projects'}>
                                <li className='font-bold text-xl text-white'>Projects</li>
                            </Link>
                            <Link to={'/contact'}>
                                <li className='font-bold text-xl text-white'>Contact</li>
                            </Link> */}
                        </ul>
                        <User2 className='h-9 w-9 text-black rounded-full border-2 border-black hover:text-white hover:border-white hover:bg-black hover:cursor-pointer'  />
                    </div>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center" onClick={() => {setvisible(!visible)}}>
                            <div className='h-[20%] w-[20%] flex flex-col justify-center items-center shadow-lg'>
                                <div className='w-full h-2/6 bg-[#343434] border-b rounded-md border-black'><XCircle className='flex justify-center items-center ml-auto m-3 hover:cursor-pointer text-[#efebeb]'></XCircle></div>
                                <div className='w-full h-4/6 bg-[#343434] rounded-md flex justify-center items-center'>
                                    <button className='p-3 text-black font-bold text-xl rounded-md hover:bg-[#d5cfcf] flex justify-center items-center border bg-[#f8f8f8] border-white'><a href={Resume} download="Resume">Download CV</a></button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Navbar