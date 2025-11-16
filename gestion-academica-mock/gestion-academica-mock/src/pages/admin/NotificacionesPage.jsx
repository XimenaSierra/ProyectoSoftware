import React from 'react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'

const mockNotifications = [
  {
    id: 1,
    title: 'Ajuste de horario',
    message: 'Se actualizó el horario del grupo 301 de Programación I.',
    type: 'Horario',
    date: '2025-11-10'
  },
  {
    id: 2,
    title: 'Nueva asignación',
    message: 'Se asignó la materia Bases de Datos II al docente Ana Rodríguez.',
    type: 'Asignación',
    date: '2025-11-12'
  },
  {
    id: 3,
    title: 'Recordatorio de cierre',
    message: 'Recuerda revisar la carga académica antes del cierre del semestre.',
    type: 'Aviso',
    date: '2025-11-15'
  }
]

const NotificacionesPage = () => {
  return (
    <Card
      title="Notificaciones"
      subtitle="Mensajes simulados hacia la comunidad docente"
    >
      <ul className="notifications-list">
        {mockNotifications.map(n => (
          <li key={n.id} className="notification-item">
            <div>
              <h3>{n.title}</h3>
              <p>{n.message}</p>
              <small>{n.date}</small>
            </div>
            <Badge variant="info">{n.type}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default NotificacionesPage
