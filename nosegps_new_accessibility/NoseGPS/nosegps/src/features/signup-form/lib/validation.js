export const INITIAL_VALUES = {
  name: '',
  email: '',
  gender: '',
  age: '',
}

export const GENDER_OPTIONS = [
  { value: 'feminino', label: 'Feminino' },
  { value: 'masculino', label: 'Masculino' },
  { value: 'outro', label: 'Outro' },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const INTEGER_PATTERN = /^\d+$/

export function validateField(field, value) {
  const trimmed = typeof value === 'string' ? value.trim() : value

  switch (field) {
    case 'name':
      if (!trimmed) {
        return 'O campo nome deve ser preenchido.'
      }
      return ''

    case 'email':
      if (!trimmed) {
        return 'O campo e-mail deve ser preenchido.'
      }
      if (!EMAIL_PATTERN.test(trimmed)) {
        return 'Digite um endereço de e-mail válido.'
      }
      return ''

    case 'gender':
      if (!trimmed) {
        return 'O campo gênero deve ser preenchido.'
      }
      return ''

    case 'age':
      if (!trimmed) {
        return 'O campo idade deve ser preenchido.'
      }
      if (!INTEGER_PATTERN.test(trimmed) || Number(trimmed) <= 0) {
        return 'Digite uma idade válida usando um número inteiro positivo.'
      }
      return ''

    default:
      return ''
  }
}

export function validateForm(values) {
  return Object.keys(INITIAL_VALUES).reduce((errors, field) => {
    const message = validateField(field, values[field])
    if (message) {
      errors[field] = message
    }
    return errors
  }, {})
}

export function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}
