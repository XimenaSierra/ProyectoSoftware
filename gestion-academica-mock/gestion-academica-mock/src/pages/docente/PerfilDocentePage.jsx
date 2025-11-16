import React from 'react'
import Card from '../../components/ui/Card'
import { useAuth } from '../../context/AuthContext'
import { mockTeachers } from '../../data/mockTeachers'

const PerfilDocentePage = () => {
  const { user } = useAuth()
  const teacher = mockTeachers.find(
    t => t.email.toLowerCase() === user?.email.toLowerCase()
  )

  return (
    <Card
      title="Mi perfil"
      subtitle="Información básica del docente (mock)"
    >
      <ul className="simple-list">
        <li><strong>Nombre:</strong> {teacher?.name || user?.name}</li>
        <li><strong>Correo:</strong> {user?.email}</li>
        <li><strong>Facultad / área:</strong> {teacher?.department || 'No disponible en mock'}</li>
        <li><strong>Grado académico:</strong> {teacher?.degree || 'No registrado'}</li>
      </ul>
      <p className="muted">
        Este módulo es solo ilustrativo: los cambios en el perfil no se guardan en ningún servidor.
      </p>
    </Card>
  )
}

export default PerfilDocentePage
