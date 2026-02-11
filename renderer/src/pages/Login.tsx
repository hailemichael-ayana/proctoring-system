import logo from '../assets/images/image.png'
import grid from '../assets/images/grid.png'
const Login = () => {
  return (
    <div className='relative flex justify-center w-full overflow-hidden bg-[#57ADF6] text-white h-screen'>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square rounded-full bg-[#57ADF6] " />
        <div className="absolute top-0 right-0  translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-[#3F98E6]" />
        <div className="absolute top-0 right-0  translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-[#1F7FCC]" />
        <div className="absolute top-0 right-0  translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-[#0b5fa877] shadow-[0px_4px_38.9px_256px_rgba(11,94,168,0.56)]
" />
        <div className="w-1/2 relative flex flex-col justify-center">
            <div className="flex items-center gap-2 absolute top-0 left-0 p-3 ">
                <img className='w-12 h-12' src={logo} alt="logo" />
                <p className='text-xl' >Bahir Dar University </p>
            </div>
            <div className="relative pt-20 pl-20">
            <h1 className='text-[110px] font-thin'>Exit Exam</h1>
            <p className='text-lg font-light w-[75%]'>This is an exam for masters degree students, so provide your credentials and continue with the exam. <span className='block'>Good Luck</span></p>
            <img src={grid} alt="grid" className='absolute w-92.5 h-80 top-0 left-0'/>
            </div>
        </div>
        <div className="relative w-1/2 bg-[#ffffff0d] backdrop-blur-xs flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-2">
                <h1 className='font-bold text-5xl'>Login</h1>
                <p className='font-extralight'>Use your id as your username</p>
            </div>
            
            <form className='flex flex-col w-[40%] gap-5 relative'>
                <div className="relative">
                <input
                    id="username"
                    type="text"
                    placeholder=" "
                    className="peer w-full border border-[#BDBDBD] outline-none rounded-[10px] py-3 px-3 bg-transparent"
                    required
                />
                <label
                    htmlFor="username"
                    className="absolute left-3 top-3 text-gray-300 transition-all 
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-[#ffffff70]
                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-300
                                px-1 rounded peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-[#ffffff70] peer-not-placeholder-shown:text-sm
                                "
                >
                    Username
                </label>
                </div>
                <div className="relative my-2">
                <input
                    id="password"
                    type="password"
                    placeholder=" "
                    className="peer w-full border border-[#BDBDBD] outline-none rounded-[10px] py-3 px-3 bg-transparent"
                    required
                />
                <label
                    htmlFor="password"
                    className="absolute left-3 top-3 text-gray-300 transition-all 
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-sm peer-focus:text-[#ffffff70]
                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-300
                                px-1 rounded peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-[#ffffff70] peer-not-placeholder-shown:text-sm"
                >
                    Password
                </label>
                </div>

                <p className='hover:text-[#ffffff75] cursor-pointer' >Forget Password ?</p>
                <input className='bg-[#1F7FCC] rounded-[5px] p-2 hover:bg-[#2393ee] cursor-pointer' type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login


