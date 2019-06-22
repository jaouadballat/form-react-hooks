import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import useForm from 'form-react-hooks';
import { validate } from './validate';

function Form() {

    let login = () => {
        console.log(values)
    }

    let {
        handleChange,
        handleSubmit,
        values,
        errors,
    } = useForm(login, validate)

    return (
        <React.Fragment>
            <form className="container mt-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter email" onChange={handleChange} />
                    {errors['email'] && <small className="form-text text-danger">{errors['email']}</small>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} />
                    {errors['password'] && <small className="form-text text-danger">{errors['password']}</small>}
                </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="first_name" className="form-control" placeholder="First name" onChange={handleChange} />
                    {errors['first_name'] && <small className="form-text text-danger">{errors['first_name']}</small>}
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="last_name" className="form-control" placeholder="Last name" onChange={handleChange} />
                    {errors['last_name'] && <small className="form-text text-danger">{errors['last_name']}</small>}
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
}

export default Form;


render(<Form />, document.getElementById('app'))