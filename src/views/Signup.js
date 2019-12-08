import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import {bindActionCreators} from 'redux';
import { createUser } from '../actions/signupAction';


class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            user: { data: {} }
        }
        this.onchangeHandle = this.onchangeHandle.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    onchangeHandle(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    submitHandler(event) {
        event.preventDefault();
        console.log('here');
        
        const { user } = this.props;
        const data = {
            first_name: this.state.fName,
            last_name: this.state.lName,
            email: this.state.email,
            address: this.state.address,
            password: this.state.password
        };
        this.props.createUser(data);
      }
    componentDidUpdate(prevProps) {
        if (this.props.user.data !== prevProps.user.data) {
            const { data } = this.props.user
            if(data.status === 201){
                setTimeout(() => {
                    // this.props.history.push('/login');
                  }, 3000);
                }
            }
        }

    render(){
        return(
            <React.Fragment>
                <section className="user-form users">
                    <div className="form-box box-center">
                        <h1 align="center">Create Account</h1>
                        <form action="" method="post" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="fName">First Name</label>
                                <input type="text" name="fName" id="fName" placeholder="john" onChange={this.onchangeHandle}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lName">Last Name</label>
                                <input type="text" name="lName" id="lName" placeholder="doe" onChange={this.onchangeHandle} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" onChange={this.onchangeHandle} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" id="address" placeholder="Kampala" onChange={this.onchangeHandle} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="userpwd">Password</label>
                                <input type="password" name="password" id="userpwd" placeholder="*****" onChange={this.onchangeHandle} />
                            </div>
                            <div className="form-group center">
                                <button className="btn btn-info" type="submit">
                                Create Account
                                </button>
                                <br />
                                <br />
                                <a  href="signin.html">already have an account</a>
                            </div>
                        </form>
                    </div>
                </section>
                <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                />
            </React.Fragment>
        )
    }
}


  function mapStateToProps(state) {
    return { user: state.signup }
  }

  export { Signup as SignupTest };
  export default connect(mapStateToProps, { createUser })(Signup);