import React from 'react';


class Signin extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                    <section className="user-form users">
                        <div className="form-box box-center">
                            <h1 align="center">Login</h1>
                            <form action="" method="post">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userpwd">Password</label>
                                    <input type="password" name="userpwd" id="userpwd" placeholder="*****" />
                                </div>
                                <div className="form-group">
                                    <a href="#" className="btn btn-info offset-by-four columns">login</a>
                                </div>
                            </form>
                        </div>
                    </section>
            </React.Fragment>
        )
    }
}

export default Signin;