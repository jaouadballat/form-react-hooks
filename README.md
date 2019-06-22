<h1 align="center">
⚡ useForm
</h1>
<p align="center">
Form hook made blazing fast and easy.
</p>


> The most simple react form hook.

## Installation

```shell
npm i --form-react-hooks
```

## Usage

### Form

check [basic example](https://github.com/jaouadballat/form-react-hooks/blob/master/examples/basic/index.js)

```jsx
import useForm from './hooks/useForm';
import { validate } from './validate';

function Form() {

  let login = () => {
    // submit values
  }

  let {
    handleChange,
    handleSubmit,
    values,
    errors,
  } = useForm(login, validate)

  return (
    <React.Fragment>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input 
            type="text"
            name="email"
            className="form-control"  
            placeholder="Enter email" 
            onChange={handleChange} 
            />
            {errors['email'] && <small className="form-text text-danger">{errors['email']}</small>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
          type="password" 
          name="password" 
          className="form-control" 
          placeholder="Password" 
          onChange={handleChange} 
          />
          {errors['password'] && <small className="form-text text-danger">{errors['password']}</small>}
        </div>
        <input 
            className="btn btn-primary" 
            type="submit" 
            value="Submit" 
            />
      </form>
    </React.Fragment>
  );
}

export default Form;

```

### Validate


```jsx

export const validate = values => {
    let errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = "required"
    } else if (values.password.length < 5) {
        errors.password = "password must be at least 5 characters"
    }

    return errors;
}
```



## License

MIT
