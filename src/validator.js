const validate = (data) => {
    const errors = {};


    if (!data.name) {
        errors.name = 'Name is required';
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(data.name)) {
        errors.name = 'Name can only contain letters';
    } 

    if (!data.birthDate) {
        errors.birthDate = 'Birth date is required';
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (!/^(?=.*[a-zA-Z0-9]).{8,}$/.test(data.password)) {
        errors.password = 'Password must contain at least 8 characters';
    } else if (!/.*[A-Z].*/.test(data.password)) {
        errors.password = 'Password must contain at least one uppercase letter';
    }

    if (!data.rePassword) {
        errors.rePassword = 'Password repeat is required';
    } else if (data.password && data.rePassword !== data.password) {
        errors.rePassword = 'Passwords do not match';
    }

    if (!data.phone) {
        errors.phone = 'Phone is required';
    } else if (!/^\d{11}$/.test(data.phone)) {
        errors.phone = 'Phone must be 11 digits';
    } else if (!/^09\d{9}$/.test(data.phone)) {
        errors.phone = 'Phone must start with 09';
    }

    return errors;
}

export default validate;