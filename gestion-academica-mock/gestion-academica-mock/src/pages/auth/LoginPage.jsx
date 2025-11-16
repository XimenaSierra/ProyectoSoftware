import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const LoginPage = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('admin@universidad.edu')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    login(email)
  }

  return (
    <div className="login-root">
      <div className="login-card">
        <h1 className="login-title">Gestión Académica</h1>
        <p className="login-subtitle">
          Prototipo navegable · Datos simulados · Roles Admin / Docente
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <label className="form-label">
            Correo institucional
            <input
              type="email"
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="tudocente@universidad.edu"
              required
            />
          </label>
          <p className="login-hint">
            Usa <strong>admin@universidad.edu</strong> para rol Administrador o un correo de la lista de docentes mock.
          </p>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
