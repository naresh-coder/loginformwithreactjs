
import React, { Component } from 'react';
import LoginCss from './login.css'



class Login extends React.Component {

    

  
    OnClickHandler = () =>{
          
        console.log(this.props.firstname);
        console.log(this.props.lastname);


    }

    render() {
        return (
            <div className="LoginCss">

                    <form action ={ ()=>this.OnClickHandler} >
                  
                    <input type="text" name="firstname" value="Narseh"/>
                    <input type="text" name="lastname" value="suresh"/>
                    <input type="submit" value="Submit"/>
                    </form> 
            </div>

        )
    }

}

export default Login;