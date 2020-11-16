import React from 'react';
import './Sign-form-style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

class SignInForm extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            email:'',
            password:''
        }
    }
    handleChange =(event) =>{
       const {value ,name } = event.target;
       this.setState({[name]:value})
    }
    handldeSubmit =(event)=>{
        event.preventDefault();
    }
    render(){
        return(
            <div className='container signIn'>
                <Logo className='signlogo'></Logo>
                <h2 className="title">Sign in </h2>
    
                <form onSubmit={this.handldeSubmit}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input name='email' type="email" 
                        value={this.state.email}
                        onChange={this.handleChange} className="form-control"  required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input name='password'
                         type="password" 
                         value={this.state.password}
                         onChange={this.handleChange} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-outline-dark">Sign in</button>
                     <button  className="google btn btn-light">
                    Google Sign in
                    </button>
                </form>
            </div>
        )
    }
}

export default SignInForm ;