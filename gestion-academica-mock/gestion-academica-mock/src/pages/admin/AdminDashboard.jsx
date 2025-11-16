import React from 'react'
import Card from '../../components/ui/Card'
import Table from '../../components/ui/Table'
import Badge from '../../components/ui/Badge'
import { mockTeachers } from '../../data/mockTeachers'
import { mockStudents } from '../../data/mockStudents'
import { mockSubjects } from '../../data/mockSubjects'
import { mockAssignments } from '../../data/mockAssignments'

const AdminDashboard = () => {
  const totalDocentes = mockTeachers.length
  const totalEstudiantes = mockStudents.length
  const totalAsignaturas = mockSubjects.length
  const totalAsignaciones = mockAssignments.length

  const recientes = mockAssignments.slice(0, 5)

  return (
    <div className="grid grid-2">
      <Card title="Resumen general" subtitle="Estado del ecosistema académico" accent>
        <div className="stats-grid">
          <div className="stat">
            <p className="stat-label">Docentes</p>
            <p className="stat-value">{totalDocentes}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Estudiantes</p>
            <p className="stat-value">{totalEstudiantes}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Asignaturas</p>
            <p className="stat-value">{totalAsignaturas}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Asignaciones activas</p>
            <p className="stat-value">{totalAsignaciones}</p>
          </div>
        </div>
      </Card>

      <Card title="Asignaciones recientes" subtitle="Flujo académico simulado">
        <Table
          columns={[
            { key: 'subjectName', header: 'Asignatura' },
            { key: 'teacherName', header: 'Docente' },
            { key: 'group', header: 'Grupo' },
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
          data={recientes}
        />
      </Card>
    </div>
  )
}

export default AdminDashboard
