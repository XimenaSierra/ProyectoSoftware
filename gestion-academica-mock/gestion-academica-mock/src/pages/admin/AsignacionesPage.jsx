import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import Badge from '../../components/ui/Badge'
import { mockAssignments } from '../../data/mockAssignments'

const AsignacionesPage = () => {
  return (
    <Card
      title="Asignaciones académicas"
      subtitle="Relación docente - asignatura - grupo"
    >
      <Table
        columns={[
          { key: 'subjectName', header: 'Asignatura' },
          { key: 'teacherName', header: 'Docente' },
          { key: 'group', header: 'Grupo' },
          { key: 'schedule', header: 'Horario' },
          {
            key: 'modality',
            header: 'Modalidad',
            render: (value) => (
              <Badge variant={value === 'Virtual' ? 'info' : 'success'}>
                {value}
              </Badge>
            )
          }
        ]}
        data={mockAssignments}
      />
    </Card>
  )
}

export default AsignacionesPage
