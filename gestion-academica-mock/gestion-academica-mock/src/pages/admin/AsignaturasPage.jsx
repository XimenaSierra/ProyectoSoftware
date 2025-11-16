import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import { mockSubjects } from '../../data/mockSubjects'

const AsignaturasPage = () => {
  return (
    <Card
      title="Gestión de asignaturas"
      subtitle="Catálogo de espacios académicos"
    >
      <Table
        columns={[
          { key: 'code', header: 'Código' },
          { key: 'name', header: 'Nombre' },
          { key: 'credits', header: 'Créditos' },
          { key: 'faculty', header: 'Facultad' }
        ]}
        data={mockSubjects}
      />
    </Card>
  )
}

export default AsignaturasPage
