import React from 'react'
import Card from '../../components/ui/Card'
import { useAuth } from '../../context/AuthContext'
import { mockAssignments } from '../../data/mockAssignments'

const DocenteDashboard = () => {
  const { user } = useAuth()

  const myAssignments = mockAssignments.filter(a =>
    a.teacherEmail?.toLowerCase() === user?.email.toLowerCase()
  )

  const proximas = myAssignments.slice(0, 4)

  return (
    <div className="grid grid-2">
      <Card
        title="Resumen docente"
        subtitle="Carga académica simulada"
        accent
      >
        <ul className="simple-list">
          <li><strong>Asignaturas asignadas:</strong> {myAssignments.length}</li>
          <li><strong>Próximas clases (mock):</strong> {proximas.length}</li>
        </ul>
      </Card>
      <Card title="Próximas sesiones">
        {proximas.length === 0 ? (
          <p>No se encontraron clases asignadas a este correo en los datos mock.</p>
        ) : (
          <ul className="simple-list">
            {proximas.map(a => (
              <li key={a.id}>
                <strong>{a.subjectName}</strong> · Grupo {a.group} · {a.schedule}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

export default DocenteDashboard
