import React from 'react'
import { Link } from "react-router-dom";

export const LogIn = () => {
    return (
        <form class="login-form" action="javascript:void(0);">
        <h1>Login</h1>
        <div class="form-input-material">
          <input type="text" name="username" id="username" placeholder="username" autocomplete="off" class="form-control-material" required />
        </div>
        <div class="form-input-material">
          <input type="password" name="password" id="password" placeholder="password" autocomplete="off" class="form-control-material" required />
        </div>
        <button type="submit" class="btn btn-outline-light">Login</button> <Link to="/Register"><button type="submit" class="btn btn-outline-light">Sign up</button></Link>
      </form>
    );
};
