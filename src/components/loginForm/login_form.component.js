import React from "react";
import { useForm } from "../../customHooks/custom_hooks";
export default function LoginForm(props) {
  const { inputs, handleInputChange } = useForm(
    {
      username: "",
      password: "",
    },
    () => props.handleSubmit()
  );

  console.log(props, 'props')
  return (
    <div>
      <div className="container-fluid vh-100 ">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-10 col-md-6 col-lg-5 col-xl-4">
            <div className="Card login">
              <div className="card-body py-5">
                <form onSubmit= {(e) => props.handleSubmit(e, inputs)}>
                  <div className="container-fluid">
                    <div className="row justify-content-center mb-4">
                      <div className="col-12">
                        <div className="d-flex justify-content-center">
                          Logo
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        {/* TODO: */}
                        <h5> Scanner Darkly </h5>
                        <br></br>
                      </div>
                    </div>
                    <div className="row neue-reg">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>username</label>
                          <input
                            dir="ltr"
                            name="username"
                            required
                            id="username"
                            type="username"
                            className="form-control text-left"
                            value={inputs.username}
                            onChange={handleInputChange}

                            // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@iontel.ly"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            required
                            name="password"
                            value={inputs.password}
                            type="password"
                            className="form-control text-left"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row neue-reg mt-4">
                      <div className="col-12">
                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-outline-primary btn-block"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
