const STORAGE_KEY = 'nosegps:signups'

function readSignups() {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return []
  }

  const parsed = JSON.parse(raw)
  return Array.isArray(parsed) ? parsed : []
}

export function saveSignup(values) {
  const signup = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: values.name.trim(),
    email: values.email.trim().toLowerCase(),
    gender: values.gender,
    age: Number(values.age),
    createdAt: new Date().toISOString(),
  }

  const signups = readSignups()
  signups.push(signup)
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(signups))

  const stored = readSignups().some((item) => item.id === signup.id)

  if (!stored) {
    throw new Error('Não foi possível confirmar o armazenamento do cadastro.')
  }

  return signup
}
