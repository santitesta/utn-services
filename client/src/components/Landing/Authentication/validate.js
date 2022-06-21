export const validate = (input) => {
  let errors = '';

  if(!input.email || !input.password) errors = 'Must provide e-mail, password and institute'

  let pattern = /\S+@\S+\.\S+/
  if(!pattern.test(input.email)) errors = 'Must be a valid e-mail'

  return errors
}