import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

function SignUp(props){

    const navigate=useNavigate();
    const users=props.users;
    const setUsers=props.setUsers;

    const [eusername,setEUsername]=useState("");
    const [epassword,setEPassword]=useState("");

    function handleuserInput(evt){
        setEUsername(evt.target.value)

    }
    function handlepasswordInput(evt){
        setEPassword(evt.target.value)
        
    }
    function handleAdd(){
        setUsers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

return(
    <div>
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 rounded-md">
                <h1 className="text-3xl font-medium ">Hey Hi</h1>
                <p>You can signup here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input 
                    type="text"
                    className="w-52 border border-black rounded-md p-1 bg-transparent"
                    placeholder="username"
                    onChange={handleuserInput}/>

                     <input 
                    type="text"
                    className="w-52 border border-black rounded-md p-1 bg-transparent"
                    placeholder="password"
                    onChange={handlepasswordInput}/>
                     
                     <input 
                    type="text"
                    className="w-52 border border-black rounded-md p-1 bg-transparent"
                    placeholder="confirm password"/>

                   

                    <button onClick={handleAdd} className="bg-[#FCA201] w-24 rounded-md p-1">Sign Up</button>
                    <p>Already have an account?<Link to={"/"} className="underline">login</Link></p>
                    
                </div>
            </div>


        </div>
    </div>

)
}
export default SignUp;