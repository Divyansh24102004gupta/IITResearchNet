import React, { useState } from 'react'
import GenderCheckbox from "./GenderCheckbox";
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';


const SignUp = () => {
	const [inputs,setInputs] = useState({
		fullName:'',
		username:'',
		password:'',
		confirmPassword:'',
		gender:'',
		role:'',
		college:'',
	})

	const {signup,loading} = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({...inputs,gender})
	}

	const handleSubmit = async(e) => {
		e.preventDefault();
		await signup(inputs)
		
	}

	return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto  bg-slate-700 rounded-lg'>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					Sign Up <span className='text-blue-500'>IITResearchNet</span>
 				</h1>

 				<form onSubmit={handleSubmit}>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text'>Full Name</span>
 						<input type='text' placeholder='Enter your name' className='w-full input input-bordered  h-10'  value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName:e.target.value})}/>
 						</label>
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => setInputs({...inputs, username:e.target.value})}/>
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Enter Password'
 							className='w-full input input-bordered h-10'
							value={inputs.password} onChange={(e) => setInputs({...inputs, password:e.target.value})}
 						/>
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text'>Confirm Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Confirm Password'
 							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
 						/>
 					</div>

					 <div className="inputTag">
                		<label className='label'>
							<span className='text-base label-text'>College</span>
						</label>
              			<div>
                			<select value={inputs.college} onChange={(e) => setInputs({...inputs,college:e.target.value})} className='w-full input input-bordered h-10' >
                  				<option value="">College</option>
                 	 			<option value="IIT Patna">IIT Patna</option>
                  				<option value="IIT Bombay">IIT Bombay</option>
                 	 			<option value="IIT Dehli">IIT Dehli</option>
                  				<option value="IIT Madras">IIT Madras</option>
                 	 			<option value="IIT Kanpur">IIT Kanpur</option>
                  				<option value="IIT Kharagpur">IIT Kharagpur</option>
                 	 			<option value="IIT Roorkee">IIT Roorkee</option>
                  				<option value="IIT BHU">IIT BHU</option>
								<option value="IIT Hyderabad">IIT Hyderabad</option>
                  				<option value="IIT Guwahati">IIT Guwahati</option>
                 	 			<option value="IIT Bhubaneswar">IIT Bhubaneswar</option>
                  				<option value="IIT Gandhinagar">IIT Gandhinagar</option>
                 	 			<option value="IIT Jodhpur ">IIT Jodhpur </option>
                  				<option value="IIT Ropar">IIT Ropar</option>
                 	 			<option value="IIT Indore">IIT Indore</option>
                  				<option value="IIT Mandi">IIT Mandi</option>
								<option value="IIT Palakkad">IIT Palakkad</option>
                  				<option value="IIT Tirupati">IIT Tirupati</option>
                 	 			<option value="IIT Dhanbad">IIT Dhanbad</option>
                  				<option value="IIT Jammu">IIT Jammu</option>
                			</select>
              			</div>
            		</div>


					 <div className="inputTag">
                		<label className='label'>
							<span className='text-base label-text'>Registered as</span>
						</label>
              			<div>
                			<select value={inputs.role} onChange={(e) => setInputs({...inputs,role:e.target.value})} className='w-full input input-bordered h-10' >
                  				<option value="">Select Role</option>
                 	 			<option value="Faculty">Faculty</option>
                  				<option value="Student">Student</option>
                			</select>
              			</div>
            		</div>


 					<GenderCheckbox  onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

 					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to='/login'>
 						Already have an account?
 					</Link>

 					<div>
 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'
						disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
 					</div>
 				</form>
 			</div>
 		</div>
  )
}

export default SignUp
