import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from '../store/slices/userSlice';

export default function Login() {
    const dispatch = useDispatch();
    const [emailId, setEmailId] = useState("santu@gmail.com");
    const [password, setPassword] = useState("Santu@123");

    const handleLoginSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:7777/login", {emailId, password}, {withCredentials: true});
            console.log(response.data)
            const payload = {
              firstName: response.data.data.firstName,
              lastName: response.data.data.lastName,
              emailId: response.data.data.emailId,
              photoUrl: response.data.data.photoUrl,
              about: response.data.data.about,
              skills: response.data.data.skills,
            }
            dispatch(setUser(payload));
        } catch (error) {
            
        }

    }

  return (
    <div className="flex justify-center mt-15">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <label htmlFor="emailId" className="label-text">Email Id</label>
            <input type="text" placeholder="Email Id" className="input" name="emailId" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="label-text">Password</label>
            <input type="text" placeholder="Password" className="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary" onClick={handleLoginSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
