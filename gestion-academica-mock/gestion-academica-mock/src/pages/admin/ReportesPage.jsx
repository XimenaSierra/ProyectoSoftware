import React from 'react'
import Card from '../../components/ui/Card'
import { mockTeachers } from '../../data/mockTeachers'
import { mockStudents } from '../../data/mockStudents'
import { mockSubjects } from '../../data/mockSubjects'
import { mockAssignments } from '../../data/mockAssignments'

const ReportesPage = () => {
  const byProgram = mockStudents.reduce((acc, student) => {
    acc[student.program] = (acc[student.program] || 0) + 1
    return acc
  }, {})

  const byFaculty = mockSubjects.reduce((acc, subject) => {
    acc[subject.faculty] = (acc[subject.faculty] || 0) + 1
    return acc
  }, {})

  return (
    <div className="grid grid-2">
      <Card title="Indicadores globales">
        <ul className="simple-list">
          <li><strong>Docentes:</strong> {mockTeachers.length}</li>
          <li><strong>Estudiantes:</strong> {mockStudents.length}</li>
          <li><strong>Asignaturas:</strong> {mockSubjects.length}</li>
          <li><strong>Asignaciones activas:</strong> {mockAssignments.length}</li>
        </ul>
      </Card>
      <Card title="Distribución por programa">
        <ul className="simple-list">
          {Object.entries(byProgram).map(([program, count]) => (
            <li key={program}>
              <strong>{program}:</strong> {count} estudiantes
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Distribución por facultad">
        <ul className="simple-list">
          {Object.entries(byFaculty).map(([faculty, count]) => (
            <li key={faculty}>
              <strong>{faculty}:</strong> {count} asignaturas
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default ReportesPage
