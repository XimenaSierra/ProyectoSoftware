import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import Badge from '../../components/ui/Badge'
import { mockTeachers } from '../../data/mockTeachers'

const DocentesPage = () => {
  return (
    <Card
      title="Gestión de docentes"
      subtitle="Listado de docentes registrados en el prototipo"
    >
      <Table
        columns={[
          { key: 'name', header: 'Nombre' },
          { key: 'email', header: 'Correo' },
          { key: 'department', header: 'Facultad / Área' },
          {
            key: 'status',
            header: 'Estado',
            render: (value) => (
              <Badge variant={value === 'Activo' ? 'success' : 'warning'}>
                {value}
              </Badge>
            )
          }
        ]}
        data={mockTeachers}
      />
    </Card>
  )
}

export default DocentesPage
