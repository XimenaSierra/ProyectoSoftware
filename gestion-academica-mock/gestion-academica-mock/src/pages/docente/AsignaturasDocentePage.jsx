import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import { useAuth } from '../../context/AuthContext'
import { mockAssignments } from '../../data/mockAssignments'

const AsignaturasDocentePage = () => {
  const { user } = useAuth()

  const myAssignments = mockAssignments.filter(a =>
    a.teacherEmail?.toLowerCase() === user?.email.toLowerCase()
  )

  const uniqueSubjects = Array.from(
    new Map(myAssignments.map(item => [item.subjectCode, item])).values()
  )

  return (
    <Card
      title="Mis asignaturas"
      subtitle="Asignaturas vinculadas al docente en este prototipo"
    >
      <Table
        columns={[
          { key: 'subjectCode', header: 'Código' },
          { key: 'subjectName', header: 'Asignatura' },
          { key: 'program', header: 'Programa' },
          { key: 'semester', header: 'Semestre' }
        ]}
        data={uniqueSubjects}
        emptyMessage="No hay asignaturas ligadas al correo actual en los datos simulados."
      />
    </Card>
  )
}

export default AsignaturasDocentePage
