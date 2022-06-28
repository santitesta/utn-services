export const validateSignUp = (input) => {
  let errors = '';

  if(!input.email || !input.password || !input.institute) errors = 'Debe proveer email, contraseña e instituto'

  let pattern = /\S+@\S+\.\S+/
  if(!pattern.test(input.email)) errors = 'Debe proveer un email válido'

  return errors
}