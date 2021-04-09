import React from 'react'

const Form = () => {
    return (
        <div className="form-width">
            
            <div className="bg-white  lg:p-10 rounded md:p-8 p-8 pb-10 mt-5">
                
            <h1 className="text-center text-4xl">Social Media</h1>
            <form className="text-center mt-6 ">
            <input className="bg-gray-100 w-full p-2" type="text" placeholder="Email" />
            <input className="bg-gray-100  w-full p-2 mt-5" type="password" placeholder="Password" />
                
                <button className="bg-blue-600 text-white w-full p-2 mt-5 hover:bg-blue-500">Sign In</button>
            </form>
            </div>
            <div className="bg-white p-8 mt-5 flex justify-between">
                <p>Don't have an account?</p>
                <a className="text-blue-500" href="#">Sign up</a>
            </div>
        </div>
    )
}

export default Form
