import { Link } from "react-router-dom"

const Registerform = () => {
  return (
    <div className="flex flex-col h-screen ">
        <h1 className="font-bold text-2xl text-nowrap">Create an Account</h1>
        <h6 className="font-semibold mt-2 text-nowrap ">Kindly fill your details for become a part of us</h6>
       
        <form className="flex flex-col mt-14 ">
            <label className="text-black font-300 " >Your Full Name </label>
            <input type="text"
             placeholder="Enter your name" 
             className="placeholder:text-white/ outline-none rounded-md h-10  bg-slate-300"


             />
            <label className="text-black font-300 " htmlFor="">Your Email Address </label>
            <input
             type="email"
             placeholder="Enter your email address"
             className="placeholder:text-white/ outline-none rounded-md h-10  bg-slate-300 "

              />
            <label className="text-black font-300 " htmlFor="">Create password </label>
            <input
             type="password"
             required="true"
             placeholder="Enter your password" 
             className="placeholder:text-white/ outline-none rounded-md h-10 bg-slate-300"


             />
             
            <button className="px-4 py-2 text-white mt-4 text-center  bg-green-500 items-center rounded-md ">Singn Up</button>
            <div className="flex gap-40">
            <h6>Already have a account</h6>
            <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in
            </Link>
            
            </div>
             
        </form>

        
    </div>
  )
}
export default Registerform