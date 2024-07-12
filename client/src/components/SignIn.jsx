import Signinform from "./SigninForm"


const SignIn = () => {
    return (
        <div className="h-screen w-full flex overflow-hidden p-4">
          <div className="w-1/2 flex justify-center items-center ">
          <Signinform/>

           

           
          </div>
          <div className="w-1/2">
            <img 
              className="h-full w-full object-cover rounded-md"
              src="/loginpng.png" 
              alt="right image" 
            />
          </div>
        </div>
    )
}
export default SignIn