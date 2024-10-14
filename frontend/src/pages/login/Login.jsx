import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from './../../hooks/useLogin';

const Login = () => {
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");

    const {loading,login} = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await login(username,password,role);
    }

  return (
    <div className='flax flex-col items-center justify-center min-w-96 mx-auto bg-slate-700 rounded-lg' >
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3x1 font-semibold text-center text-gray-300 '>Login
            <span className='text-blue-500'>IITResearchNet</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label className='label'>
						<span className='text-base label-text'>Password</span>
					</label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <div className="inputTag">
                <label className='label'>
					<span className='text-base label-text'>Registered as</span>
				</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)} className='w-full input input-bordered h-10' >
                  <option value="">Select Role</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>

                <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</Link>
                <div>
 					<button className='btn btn-block btn-sm mt-2'
                    disabled={loading}>
                        {loading ? (<span className='loading loading-spinner'></span>):("Login")}
                    </button>
 				</div>
            </form>
        </div>
    </div>
  )
}

export default Login
