import { Link } from "react-router-dom"
import Login from "./login"
import { useForm } from "react-hook-form"

function Siginup() {
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
    
          const onSubmit= (data) =>console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
        <div className="a   rounded-md w-[600px]">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    
    <h3 className="font-bold text-lg">Signup!</h3>
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input type="text" placeholder="Enter your Name"
        className="w-80 py-1 px-3 border rounded-md outline:none"
        {...register("text", { required: true })}
        />
        <br/>
        {errors.email && <span className="text-red-500 text-sm">This field is required</span>}

    </div>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter your email"
        className="w-80 py-1 px-3 border rounded-md outline:none"
        {...register("email", { required: true })}
        />
         <br/>
         {errors.email && <span className="text-red-500 text-sm">This field is required</span>}

    </div>
    <div className="mt-4 space-y-2">
        <span>Password</span>
        <br/>
        <input type="password" placeholder="Enter your password"
        className="w-80 py-1 px-3 border rounded-md outline:none"
        {...register("password", { required: true })}
        />
         <br/>
         {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
    </div>

    <div className="flex justify-around mt-4">
        <button className="bg-pink-500 rounded-md text-white px-3 py-1 hover:bg-pink-700 duration 200">
        Signup</button>
        <p>
        Have Account?{" "}
       <button  className="underline text-blue-500 cursor-pointer"
       onClick={()=>{
        document.getElementById("my_modal_3").showModal()
       }}>
        Login</button>
        <Login/></p>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Siginup
