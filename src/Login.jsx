import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [eusername, setEUsername] = useState("");
  const [epassword, setEPassword] = useState("");
  const [ruser, setRuser] = useState(true);

  const navigate = useNavigate();

  const users = props.users;

  function handleuserInput(evt) {
    setEUsername(evt.target.value);
  }

  function handlepasswordInput(evt) {
    setEPassword(evt.target.value);
  }

  function checkUser() {
    var userfound = false;

    users.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        userfound = true;
        navigate("/landing", {
          state: {
            username: eusername,
          },
        });
      }
    });
    if (userfound === false) {
      console.log("login failed");
      setRuser(false);
    }
  }
  return (
    <div>
      <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 rounded-md">
          <h1 className="text-3xl font-medium ">Hey Hi</h1>

          {ruser ? (
            <p>I help you manage your activity after you login :)</p>
          ) : (
            <p className="bg-red-500">please signup before you login</p>
          )}
          <div className="flex flex-col gap-2 my-2">
            <input
              type="text"
              className="w-52 border border-black rounded-md p-1 bg-transparent"
              placeholder="username"
              onChange={handleuserInput}
            />

            <input
              type="text"
              className="w-52 border border-black rounded-md p-1 bg-transparent"
              placeholder="password"
              onChange={handlepasswordInput}
            />

            <button
              onClick={checkUser}
              className="bg-[#8272DA] w-24 rounded-md p-1"
            >
              Login
            </button>
            <p>
              Don't you have an account?
              <Link to={"/signUp"} className="underline">
                signUp
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
