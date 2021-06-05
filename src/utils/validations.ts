import joi from 'joi';

const errorMessages = {
  usernameErrors: {
    'string.empty': 'Nome de usuário obrigatório',
    'string.pattern.base': 'Nome de usuário inválido'
  },
  emailErrors: {
    'string.empty': 'E-mail obrigatório',
    'string.email': 'Digite um e-mail válido'
  },
  passwordErrors: {
    'string.empty': 'Senha obrigatória'
  }
};

const fieldsValidations = {
  username: joi
    .string()
    .pattern(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)
    .required()
    .messages({ ...errorMessages.usernameErrors }),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({ ...errorMessages.emailErrors }),
  password: joi
    .string()
    .required()
    .messages({ ...errorMessages.passwordErrors })
};

export type FieldErros = {
  [key: string]: string;
};

function getFieldErros(objError: joi.ValidationResult) {
  const errors: FieldErros = {};

  console.log('Erros: ', objError);
  if (objError.error) {
    objError.error.details?.forEach((error) => {
      errors[error.path.join()] = error.message;
    });
  }

  return errors;
}

type SignUpValues = {
  username: string;
  email: string;
  password: string;
};

export function signUpValidate(values: SignUpValues) {
  const schema = joi.object(fieldsValidations);

  return getFieldErros(schema.validate(values, { abortEarly: false }));
}
