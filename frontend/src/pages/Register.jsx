import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import "./form.css";

const Register = () => {
  const [gender, setGender] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Submit form data to the server
    // Example: fetch('/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //     gender,
    //   }),
    // });
    // Reset form state
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setGender("");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "gender":
        setGender(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-main">
      <div className="register-form">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="user-input">
            <FormControl component="fieldset">
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="user-input">
            <TextField
              id="user-name"
              label="Name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="user-input">
            <TextField
              id="user-email"
              label="Email"
              value={email}
              onChange={handleInputChange}
              type="email"
              required
            />
          </div>
          <div className="user-input">
            <TextField
              id="user-password"
              label="Password"
              value={password}
              onChange={handleInputChange}
              type="password"
              required
            />
          </div>
          <div className="user-input">
            <TextField
              id="user-confirm-password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={handleInputChange}
              type="password"
              required
            />
          </div>

          <div className="submit-btn">
            <Button variant="contained" type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
      <div className="login-img">
        <img src="img/login.jpg" alt="login" />
      </div>
    </div>
  );

  //   return (
  //     <div>
  //       <div className="login-main">
  //         <div className="login-container">
  //           <form className="login-form">
  //             <h1>Welcome!</h1>
  //             <p>Please sign up to access your account.</p>
  //             <div className="user-input">
  //               <FormControl>
  //                 <FormLabel id="demo-row-radio-buttons-group-label">
  //                   Gender
  //                 </FormLabel>
  //                 <RadioGroup
  //                   row
  //                   aria-labelledby="demo-row-radio-buttons-group-label"
  //                   name="row-radio-buttons-group"
  //                 >
  //                   <FormControlLabel
  //                     value="female"
  //                     control={<Radio />}
  //                     label="Female"
  //                   />
  //                   <FormControlLabel
  //                     value="male"
  //                     control={<Radio />}
  //                     label="Male"
  //                   />
  //                   <FormControlLabel
  //                     value="other"
  //                     control={<Radio />}
  //                     label="Other"
  //                   />
  //                 </RadioGroup>
  //               </FormControl>
  //             </div>
  //             <div className="user-input">
  //               <TextField
  //                 id="user-email"
  //                 label="User email"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className="user-input">
  //               <TextField id="user-name" label="User Name" variant="outlined" onChange={}/>
  //             </div>
  //             <div className="user-input">
  //               <TextField id="password" label="Password" variant="outlined" />
  //             </div>
  //             <div className="user-input">
  //               <TextField
  //                 id="user-contact"
  //                 label="Contact No."
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className="btn">
  //               <Button variant="contained">Sign Up</Button>
  //             </div>
  //           </form>
  //         </div>
  //         <div className="login-img">
  //           <img src="img/login.jpg" alt="login" />
  //         </div>
  //       </div>RegiRegister you yourr
  //     </div>
  //   );
};

export default Register;
