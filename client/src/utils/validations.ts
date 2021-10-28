import joi from 'joi'

const errorMessages = {
  nameErrors: {
    'string.empty': 'Nome obrigatório'
  },
  usernameErrors: {
    'string.empty': 'Nome de usuário obrigatório',
    'string.pattern.base': 'Nome de usuário inválido'
  },
  emailErrors: {
    'string.empty': 'E-mail obrigatório',
    'string.email': 'Digite um e-mail válido'
  },
  passwordErrors: {
    'string.empty': 'Senha obrigatória',
    'string.only': 'Senhas não batem'
  }
}

const signUpValidations = {
  username: joi
    .string()
    .pattern(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)
    .required()
    .messages(errorMessages.usernameErrors),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages(errorMessages.emailErrors),
  password: joi.string().required().messages(errorMessages.passwordErrors)
}

const profileValidations = {
  name: joi.string().empty('').messages(errorMessages.nameErrors),
  username: joi
    .string()
    .pattern(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)
    .messages(errorMessages.usernameErrors),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .messages(errorMessages.emailErrors),
  oldPassword: joi.string().empty('').messages(errorMessages.passwordErrors),
  password: joi.string().empty('').equal(joi.ref('oldPassword')).messages(errorMessages.passwordErrors)
}

export type TFieldErros = {
  [key: string]: string
}

function getFieldErros(objError: joi.ValidationResult) {
  const errors: TFieldErros = {}

  if (objError.error) {
    objError.error.details?.forEach((error) => {
      errors[error.path.join()] = error.message
    })
  }

  return errors
}

type TSignUpValues = {
  username: string
  email: string
  password: string
}

export function signUpValidate(values: TSignUpValues) {
  const schema = joi.object(signUpValidations)

  return getFieldErros(schema.validate(values, { abortEarly: false }))
}

type TEditProfileValues = {
  name?: string
  username: string
  email: string
  oldPassword?: string
  password?: string
}

export function editProfileValidate(values: TEditProfileValues) {
  const schema = joi.object(profileValidations)

  return getFieldErros(schema.validate(values, { abortEarly: false }))
}
