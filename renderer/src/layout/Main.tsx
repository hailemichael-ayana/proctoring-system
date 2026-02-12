import { Outlet } from 'react-router-dom'
import logo from '../assets/images/image.png'
const Main = () => {
  return (
        <div className='relative flex justify-center w-full overflow-hidden bg-[#57ADF6] text-white h-screen'>
            <main className=' relative z-10 w-full h-full flex items-center justify-center'>
        <Outlet/>
        </main>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square rounded-full bg-[#57ADF6] " />
        <div className="absolute top-0 right-0  translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-[#3F98E6]" />
        <div className="absolute top-0 right-0  translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-[#1F7FCC]" />
        <div className="absolute top-0 right-0  translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-[#0b5fa877] ]
" />
            <div className="flex items-center gap-2 absolute top-0 left-0 p-3 ">
                <img className='w-12 h-12' src={logo} alt="logo" />
                <p className='text-xl' >Bahir Dar University </p>
            </div>
        
                
    </div>
  )
}

export default Main