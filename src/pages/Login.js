import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";





function Login() {

    //var uname = "aaa";
    //console.log(uname);

    // var uname = document.getElementById("email").value;
    // var pwd = document.getElementById("pwd1").value;
    // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2, 4})+$/;

    // else if(pwd=='')

    //     alert("enter the password");

    // else if(!filter.test(uname))

    //     alert("Enter valid email id.");

    // else if(pwd.length < 6 || pwd.length > 6)

    //     alert("Password min and max length is 6.");

    // else
    // {
    //     alert('Thank You for Login & You are Redirecting to Campuslife Website');
    // //Redirecting to other page or webste code or you can set your own html page.
    // window.location = "https://www.campuslife.co.in";

    // }


    // //Reset Inputfield code.
    // function clearFunc()
    // {
    //     document.getElementById("email").value = "";
    // document.getElementById("pwd1").value="";
    // }
    // function checkname(){
    //     if(uname =='aaa')
    //     {
    //         alert("please enter user name.");
    //     }
    //     else{
    //         var uname = document.getElementById("email").value;
    //         console.log(uname);
    //     }
    // }


    return (
        <><head>
            <title>LOGIN</title>
        </head><body>
                
                <div id="main">
                    <div class="h-tag">
                        <h2>Login to your account</h2>
                    </div>

                    <div class="login">
                        <table cellspacing="2" align="center" cellpadding="8" border="0">
                            <tr>
                                <td>Enter User Name :</td>
                                <td><input type="text" placeholder="Enter user name here" id="email" class="tb" /></td>
                            </tr>
                            <tr>
                                <td>Enter Password :</td>
                                <td><input type="password" placeholder="Enter Password here" id="pwd1" class="tb" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link to="/home">
                                        <button> Login </button>
                                    </Link></td>
                            </tr>
                        </table>
                    </div>

                </div>


            </body></>
    );

}


export default Login;