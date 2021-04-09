import React from 'react'
import loginImage from '../../imgs/login_img.png'
import AppForm from '../layout/Form'
import AppFooter from '../layout/Footer'

const height = {
    "height":'80vh'
}

 const Login= () => {
    return (
        <div>
            <div className="flex flex-wrap justify-around bg-gray-100  p-9  pt-20 pb-20 login-vh">
                
            <img className="login-img rounded" src={loginImage} alt="social media"/>
            <AppForm />
            </div>
           <AppFooter/>
        </div>
    )
}


export default Login