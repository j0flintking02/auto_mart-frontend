import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../actions/signinAction';



class Signin extends React.Component{
    constructor(props){
        super(props);
        this.onchangeHandle = this.onchangeHandle.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    onchangeHandle(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.props)
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(data);
      }
      componentDidUpdate(prevProps) {
        if (this.props.signin.data !== prevProps.signin.data) {
            const { data } = this.props.signin
            if(data.status === 200){
                setTimeout(() => {
                    this.props.history.push('/index');
                  }, 3000);
                }
            }
        }
    render(){
        return(
            <React.Fragment>
                    <section className="user-form users">
                        <div className="form-box box-center">
                            <h1 align="center">Login</h1>
                            <form action="" method="post" onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" onChange={this.onchangeHandle}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userpwd">Password</label>
                                    <input type="password" name="password" id="userpwd" placeholder="*****" onChange={this.onchangeHandle} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info" type="submit">
                                    Signin
                                    </button>
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
    return{ signin: state.signin }
}

export default connect(mapStateToProps, { loginUser })(Signin);