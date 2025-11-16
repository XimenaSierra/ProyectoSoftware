import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import { useAuth } from '../../context/AuthContext'
import { mockAssignments } from '../../data/mockAssignments'

const HorarioPage = () => {
  const { user } = useAuth()

  const myAssignments = mockAssignments.filter(a =>
    a.teacherEmail?.toLowerCase() === user?.email.toLowerCase()
  )

  return (
    <Card
      title="Mi horario"
      subtitle="Vista semanal generada a partir de asignaciones mock"
    >
      <Table
        columns={[
          { key: 'subjectName', header: 'Asignatura' },
          { key: 'group', header: 'Grupo' },
          { key: 'schedule', header: 'Horario' },
          { key: 'room', header: 'Aula' }
        ]}
        data={myAssignments}
        emptyMessage="Aún no tienes asignaciones asociadas al correo actual en los datos de ejemplo."
      />
    </Card>
  )
}

export default HorarioPage
