import React from 'react'; 
import AuthForm from '../Layout/AuthForm';

class Signup extends React.Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <AuthForm formName= "Sign Up" changeInputs={this.handleChange}/>
                <h6>Login<button onClick={this.props.toggleForm}> here</button> if you have an account</h6>
            </div>
        )
    }
}

export default Signup; 
