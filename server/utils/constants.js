const createError = (errObj) => {
  return Object.assign(
    {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    },
    errObj
  );
};

const validateFields = (fields, mode, update) => {
  // Validates the signup/login fields were all given

  const validators = {
    signup: [
      'email',
      'password',
      'firstName',
      'lastName',
      'schoolName',
      'street',
      'city',
      'postalCode',
      'state',
      'phoneNumber',
    ],
    login: ['email', 'password'],
    story: ['title', 'description'],
    listItem: ['title', 'description'],
  };

  return update
    ? validators[mode].some((req) => fields[req])
    : validators[mode].every((req) => fields[req]);
};

module.exports = { createError, validateFields };
