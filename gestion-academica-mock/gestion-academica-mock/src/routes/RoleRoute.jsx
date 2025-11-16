import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RoleRoute = ({ role, children }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />
  if (user.role !== role) {
    const target = user.role === 'admin' ? '/admin' : '/docente'
    return <Navigate to={target} replace />
  }

  return children
}

export default RoleRoute
