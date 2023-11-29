
import React from "react";

import {GoogleLogin} from 'react-google-login'
const clientId="799235060590-685jtqilr7lqaloii5k58iuijuaig3am.apps.googleusercontent.com";
function Login(){

    const onSuccess=(res)=>{
        console.log("login scuees",res.profileObj)

    }
    const onFailure=(res)=>{
        console.log("login failed",res.profileObj)

    }
    return(

        <div id='SignInButton'>
        <GoogleLogin
        clientId={clientId}
        buttonText='login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        
        
        />
        </div>
    )
}
export default Login

