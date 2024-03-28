import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = () => {

    

    const onSuccess = (response) =>{
        console.log("Login Success! Current user:", response)
    }

    const onFailure = (response) => {
        console.log("Login Failed.")
    }

  return (
    <GoogleLogin
      clientId="846496467882-l0bdmohn5bo09pnv7b02bfu1l8983ogd.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
};

export default GoogleSignIn;