import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };



  const navigate = useNavigate();
  var [response, setResponse] = useState();
  // const [role, setRole] = useState("Participant");
  // const handleRoleChange = (event) => {
  //   setRole(event.target.value);
  // }

  const Loginn = () => {
    const url = "https://984r65i5h0.execute-api.eu-north-1.amazonaws.com/dev/hackathon/users/login";


    axios
      .post(url, credentials)
      .then((result) => {
        const json = JSON.stringify(result);
        localStorage.setItem('user', json); //storing at user browser
        const userId = result.data.uId;
        //console.log(userId);
    // const userObj = {

    //   'user': json,

    //   'role': role

    // }
        //console.log(result);
        if(result.data.role === "Participant")
        {
          navigate(`/partside/${userId}`);
        }
        else if(result.data.role === "Judge")
        {
          navigate("/Judgeside");
        }
        else 
        {
          navigate("/panel");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create An Account</h3>

          <div className="text-center">
            Haven't registered yet?{" "}
            <Link to="/signup">
              <span className="link-primary">Sign up</span>
            </Link>
          </div>

          {response && (
            <div className="form-group mt-3">
              <label className="alert alert-danger form-control">
                {response}
              </label>
            </div>
          )}

          <div className="form-group mt-3">
            <label>Email address</label>

            <input
              onChange={handleOnChange}
              value={credentials.email}
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>

            <input
              onChange={handleOnChange}
              value={credentials.password}
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>

          {/* <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      onChange={handlePassword}
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                    />
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Select your Role</option>
                    <option value="1">Participant</option>
                    <option value="2">Team Member</option>
                   <option value="3">Panelist</option>
                   <option value="4">Judge</option>
                   </select>
                  </div> */}

          <div className="d-grid gap-2 mt-3">
            <button onClick={Loginn} type="button" className="btn btn-primary">
              Log in
            </button>
          </div>

          <p className="text-center mt-2">
            Forgot{" "}
            <Link to="/pass">
              <a href="#">password?</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
