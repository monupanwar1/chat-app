import Loginform from "./RegisterForm";

const Registerpage = () => {
  return (
    <div className="h-screen w-full flex p-4 overflow-hidden">
      <div className="w-1/2 flex justify-center items-center mt-60 ">
     
        <Loginform />
       
      </div>
      <div className="w-1/2">
        <img 
          className="h-full w-full object-cover rounded-md"
          src="/loginpng.png" 
          alt="right image" 
        />
      </div>
    </div>
  );
}

export default Registerpage;
