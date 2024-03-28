import React from "react";

export default function SignUp() {
    return (
        <section>
            <div className="signup-form">
                <form className="left-content">
                    <div className="form-container">
                        <img src="icon_path" alt="Icon" /> {/* Use img tag for the icon */}
                        <div className="signin-title">
                        <h2>Create an account</h2>
                        <p>Lets get started!</p>
                        </div>
                    
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        
                    </div>
                    <div className="form-group">
                        <label className="form-control-label" htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="" htmlFor="exampleCheck1">Rememeber me</label>
                    </div>
                    <button type="submit" className="signUp-button">Sign Up</button>

                    <div className="additional-options">
                        <div className="Google-login-button">
                            <button className="signUp-button">Continue with Google</button>
                        </div>
                        <div className="login-options">
                         <div className="Login-button">
                              <p>Already have an account?</p>
                               <a href="/Login">Log in</a>
                                </div>
                        </div>
                    </div>
                    </div>
                </form>
                
                <div className="img-signin">
                    
                </div>
            </div>
        </section>
    )
}
