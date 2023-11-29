import React from "react";

import {GoogleLogout} from 'react-google-login'
const clientId="799235060590-685jtqilr7lqaloii5k58iuijuaig3am.apps.googleusercontent.com";

function Logout(){

    function onSuccess(){
        console.log('logged out')
    }
    return(
        <div id='SignOutButton'>
        <GoogleLogout
        clientId={clientId}
        buttonText='logout'
        onLogoutSuccess={onSuccess}

        />
        
        </div>
    )
}
export default Logout