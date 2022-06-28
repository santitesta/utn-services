export const validate = (input) => {
  let errors = '';

  if(!input.email || !input.password) errors = 'Debe proveer email y contraseña'

  let pattern = /\S+@\S+\.\S+/
  if(!pattern.test(input.email)) errors = 'Debe proveer un email válido'

  return errors
}