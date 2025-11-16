import React, { createContext, useContext, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockTeachers } from '../data/mockTeachers'

const AuthContext = createContext(null)

const ADMIN_EMAILS = ['admin@universidad.edu', 'coordinador@universidad.edu']

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (email) => {
    const trimmed = email.trim().toLowerCase()

    let role = 'docente'
    let displayName = 'Docente Invitado'

    if (ADMIN_EMAILS.includes(trimmed)) {
      role = 'admin'
      displayName = 'Administrador Académico'
    } else {
      const teacher = mockTeachers.find(t => t.email.toLowerCase() === trimmed)
      if (teacher) {
        role = 'docente'
        displayName = teacher.name
      } else {
        role = 'docente'
        displayName = 'Docente Invitado'
      }
    }

    const newUser = { email: trimmed, role, name: displayName }
    setUser(newUser)
    navigate(role === 'admin' ? '/admin' : '/docente', { replace: true })
  }

  const logout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo(() => ({ user, login, logout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
