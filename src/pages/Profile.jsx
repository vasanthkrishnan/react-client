import profileImg from '../assets/img/vasanth.jpg'

const Profile = () => {
    return (
        <>
            <div className="h-screen w-screen bg-[#efebeb]">
                <div className="h-full w-full flex flex-row justify-center items-center">
                    <div className="h-[95%] w-[55%]">
                        <div className='h-[90%] w-[80%] mx-[6rem] my-[5rem] flex flex-col'>
                            <div className='h-[4rem] w-[15rem] mx-[2rem] my-[.5rem] flex justify-start items-center text-black font-bold text-5xl font-serif'>Hello!</div>
                            <div className='h-[5rem] w-[40rem] mx-[2rem] my-[.5rem] flex flex-wrap   justify-start items-center text-red-700 font-bold text-5xl font-serif '>I'm<span className='text-black font-serif ml-8'>Vasantha Krishnan S</span></div>
                            <div className='h-[22rem] w-[90%] mx-[2rem] my-[5rem] flex justify-center items-start text-center text-black font-bold font-serif text-2xl '>
                            Passionate software developer with expertise in Java, JavaScript, and problem-solving. Skilled in algorithms, web development, and creating efficient, user-friendly applications. Eager to learn and innovate.</div>
                            
                        </div>
                    </div>
                    <div className="h-[90%] w-[45%]">
                        <img src={ profileImg } alt="Image" />
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Profile