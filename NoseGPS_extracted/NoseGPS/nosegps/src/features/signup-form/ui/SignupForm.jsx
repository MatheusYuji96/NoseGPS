import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import nosepass from '../../../shared/assets/nosepass.png'
import { Button } from '../../../shared/ui/button'
import { saveSignup } from '../lib/storage'
import {
  GENDER_OPTIONS,
  INITIAL_VALUES,
  hasErrors,
  validateField,
  validateForm,
} from '../lib/validation'
import styles from './SignupForm.module.css'

const FIELD_ORDER = ['name', 'email', 'gender', 'age']

function FieldError({ id, message }) {
  if (!message) {
    return null
  }

  return (
    <p className={styles.error} id={id} role="alert">
      <span aria-hidden="true" />
      {message}
    </p>
  )
}

function SuccessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5.5 12.6 4.2 4.2 8.8-9.1"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SignupForm() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')
  const [saved, setSaved] = useState(null)
  const [storageError, setStorageError] = useState('')
  const fieldRefs = useRef({})
  const successHeadingRef = useRef(null)

  useEffect(() => {
    if (status === 'success' && successHeadingRef.current) {
      successHeadingRef.current.focus()
    }
  }, [status])

  function updateValue(name, value) {
    setValues((previous) => ({ ...previous, [name]: value }))

    if (touched[name] || errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value),
      }))
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    updateValue(name, value)
  }

  function handleBlur(event) {
    const { name, value } = event.target
    setTouched((previous) => ({ ...previous, [name]: true }))
    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value),
    }))
  }

  function focusField(name) {
    const node = fieldRefs.current[name]
    if (node) {
      node.focus()
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, gender: true, age: true })
    setStorageError('')

    if (hasErrors(nextErrors)) {
      const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
      focusField(firstInvalid)
      return
    }

    setStatus('submitting')

    try {
      const signup = saveSignup(values)
      setSaved(signup)
      setStatus('success')
    } catch {
      setStatus('idle')
      setStorageError(
        'Não foi possível concluir o cadastro agora. Verifique as permissões do navegador e tente novamente.',
      )
    }
  }

  function handleReset() {
    setValues(INITIAL_VALUES)
    setErrors({})
    setTouched({})
    setSaved(null)
    setStatus('idle')
    setStorageError('')

    requestAnimationFrame(() => focusField('name'))
  }

  if (status === 'success' && saved) {
    return (
      <div className={styles.successCard} role="status" aria-live="polite">
        <span className={styles.successIcon} aria-hidden="true">
          <SuccessIcon />
        </span>
        <h2 className={styles.successTitle} tabIndex={-1} ref={successHeadingRef}>
          Cadastro confirmado!
        </h2>
        <p className={styles.successText}>
          Pronto, <strong>{saved.name}</strong>. Seu cadastro foi armazenado com
          sucesso e os alertas sobre o lançamento do NoseGPS serão enviados para{' '}
          <strong>{saved.email}</strong>.
        </p>
        <div className={styles.successSummary}>
          <span>Gênero: {saved.gender}</span>
          <span>Idade: {saved.age}</span>
        </div>
        <div className={styles.successActions}>
          <Button to="/" size="large">
            Voltar para o início
          </Button>
          <button type="button" className={styles.resetLink} onClick={handleReset}>
            Fazer outro cadastro
          </button>
        </div>
        <img src={nosepass} alt="" className={styles.successMascot} width="180" height="180" />
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formHeader}>
        <span className={styles.formEyebrow}>Lista de lançamento</span>
        <h2 className={styles.formTitle}>Garanta seu lugar na rota</h2>
        <p className={styles.formDescription}>
          Preencha os dados abaixo para receber alertas e novidades sobre o
          NoseGPS. Leva menos de um minuto.
        </p>
      </div>

      {storageError ? (
        <p className={styles.storageError} role="alert">
          {storageError}
        </p>
      ) : null}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Nome <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          ref={(node) => {
            fieldRefs.current.name = node
          }}
          id="name"
          name="name"
          type="text"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Como podemos te chamar?"
          autoComplete="name"
          maxLength={80}
          required
          aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'error-name' : undefined}
        />
        <FieldError id="error-name" message={errors.name} />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          E-mail <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          ref={(node) => {
            fieldRefs.current.email = node
          }}
          id="email"
          name="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="treinador@exemplo.com"
          autoComplete="email"
          inputMode="email"
          maxLength={120}
          required
          aria-required="true"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'error-email' : undefined}
        />
        <FieldError id="error-email" message={errors.email} />
      </div>

      <fieldset
        className={`${styles.field} ${styles.fieldset}`}
        aria-describedby={errors.gender ? 'error-gender' : undefined}
        aria-invalid={errors.gender ? 'true' : undefined}
      >
        <legend className={styles.label}>
          Gênero <span className={styles.required} aria-hidden="true">*</span>
        </legend>
        <div className={styles.radioGroup}>
          {GENDER_OPTIONS.map((option) => (
            <label className={styles.radioOption} key={option.value}>
              <input
                ref={(node) => {
                  if (option.value === GENDER_OPTIONS[0].value) {
                    fieldRefs.current.gender = node
                  }
                }}
                className={styles.radioInput}
                type="radio"
                name="gender"
                value={option.value}
                checked={values.gender === option.value}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              <span className={styles.radioCard}>
                <span className={styles.radioDot} aria-hidden="true" />
                {option.label}
              </span>
            </label>
          ))}
        </div>
        <FieldError id="error-gender" message={errors.gender} />
      </fieldset>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="age">
          Idade <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          ref={(node) => {
            fieldRefs.current.age = node
          }}
          id="age"
          name="age"
          type="text"
          className={`${styles.input} ${styles.inputShort} ${errors.age ? styles.inputError : ''}`}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ex.: 18"
          autoComplete="off"
          inputMode="numeric"
          maxLength={3}
          required
          aria-required="true"
          aria-invalid={errors.age ? 'true' : undefined}
          aria-describedby={errors.age ? 'error-age' : 'hint-age'}
        />
        {errors.age ? null : (
          <p className={styles.hint} id="hint-age">
            Use apenas números inteiros positivos.
          </p>
        )}
        <FieldError id="error-age" message={errors.age} />
      </div>

      <p className={styles.requiredNote}>
        <span aria-hidden="true">*</span> Campos obrigatórios
      </p>

      <Button type="submit" size="large" full disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Quero receber alertas'}
      </Button>

      <p className={styles.privacy}>
        Ao se cadastrar, você concorda em receber comunicações sobre o lançamento
        do NoseGPS. Seus dados não serão compartilhados com terceiros. Leia
        nossa <Link to="/#faq">política de privacidade</Link>.
      </p>
    </form>
  )
}
