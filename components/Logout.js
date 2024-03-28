import {GoogleLogout} from 'react-google-login';

export default function Logout () {


    const onSuccess =() =>{
        console.log("Log out successfull");

    }
    return (
        <div>
            <GoogleLogout
            
            clientID= "846496467882-l0bdmohn5bo09pnv7b02bfu1l8983ogd.apps.googleusercontent.com"
            buttontEXT={"Logout"}
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
            
            
        </div>
      );

}