const createError = (errObj) => {
   return Object.assign({
          log: 'Express error handler caught unknown middleware error',
          status: 400,
          message: { err: 'An error occurred' },
    }, errObj);

  
}


const validateFields = (fields, mode) => {
    // Validates the signup/login fields were all given
    const signupRequirements = ['email', 'password', 'firstName', 'lastName', 'schoolName', 'street', 'city', 'postalCode'];
    const loginRequirements = ['email', 'password'];
    return mode === 'signup' ? signupRequirements.every(req => fields[req]) : loginRequirements.every(req => fields[req]);
}

module.exports = { createError, validateFields }