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

    if (!values.first_name) {
        errors.first_name = "required"
    } else if (values.first_name.length < 5) {
        errors.first_name = "first name must be at least 5 characters"
    }

    if (!values.last_name) {
        errors.last_name = "required"
    } else if (values.last_name.length < 5) {
        errors.last_name = "last name must be at least 5 characters"
    }

    return errors;
}