import Link from "next/link";
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { email, password };
   // console.log(item);return false;
    axios
      .post("http://localhost/hotel/api/login", item)
      .then((res) => console.log(res));
  };
  return (
    <form className="row y-gap-20"  onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/others-pages/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" required  value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {error && <p>{error}</p>}
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
