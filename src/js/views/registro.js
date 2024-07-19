import React from "react";

export const Registro = () => (

    <div className="container">
        <div className="row">
            <div className="col-md-12 py-4">
                <form className="w-50 mx-auto py-4">
                    <h3>Registrate aquí</h3>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <small className="invalid-feedback">Is required!</small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <small className="invalid-feedback">Is required!</small>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <small className="invalid-feedback">Is required!</small>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
);


