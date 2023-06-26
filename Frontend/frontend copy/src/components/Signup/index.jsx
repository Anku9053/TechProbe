import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Signup/signup.css";
// Frontend\frontend\src\components\Signup\signup.css
const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [isSignedup, setisSignedup] = useState(false);

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			setTimeout(() => {
				navigate("/login");
			}, 500);
			
			setisSignedup(true);
			
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className='signup_container'>
			<div className='signup_form_container'>
				<div className='left'>
					<h1>Welcome Back</h1>
					<Link to="/login">
					<button type="button" className='whitebtn'> Sign in
</button>
						
					</Link>
				</div>
				<div className='right'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className='inputt'
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className='inputt'
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='inputt'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='inputt'
						/>
						{error && <div className='error_msg'>{error}</div>}
						
<button type="submit" className='gbtn'>Sign Up</button>
					</form>
				</div>
			</div>
			{isSignedup && (
        <div className="notification">
          <p>Signup Successful</p>
        </div>
      )}
		</div>
	);
};

export default Signup;
