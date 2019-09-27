import React from "react";

const LoginPage = () => {
  return (
    <div className="container">
      <h4 style={{marginTop: '40px', textAlign: 'center'}}>Login</h4>
      <div className="row justify-content-md-center">
        <form>
          <fieldset>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
