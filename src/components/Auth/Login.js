import React from 'react'; 
import AuthForm from '../Layout/AuthForm';

class Login extends React.Component {
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <AuthForm formName="Login" changeInputs={this.handleChange}/>
                <h6><button onClick={this.props.toggleForm}>Register here</button> if you don't have an account</h6>
            </div>
        )
    }
}

export default Login; 
