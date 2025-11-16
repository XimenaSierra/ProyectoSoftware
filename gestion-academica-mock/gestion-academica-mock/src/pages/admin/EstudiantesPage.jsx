import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import { mockStudents } from '../../data/mockStudents'

const EstudiantesPage = () => {
  return (
    <Card
      title="Gestión de estudiantes"
      subtitle="Explora estudiantes por programa y semestre"
    >
      <Table
        columns={[
          { key: 'name', header: 'Nombre' },
          { key: 'code', header: 'Código' },
          { key: 'program', header: 'Programa' },
          { key: 'semester', header: 'Semestre' },
          { key: 'group', header: 'Grupo' }
        ]}
        data={mockStudents}
      />
    </Card>
  )
}

export default EstudiantesPage
