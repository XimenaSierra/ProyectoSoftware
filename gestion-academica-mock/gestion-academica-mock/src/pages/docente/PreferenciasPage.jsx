import React, { useState } from 'react'
import Card from '../../components/ui/Card'

const PreferenciasPage = () => {
  const [horarioPreferido, setHorarioPreferido] = useState('Mañana')
  const [modalidad, setModalidad] = useState('Presencial')
  const [cargaMaxima, setCargaMaxima] = useState(16)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Preferencias guardadas solo en memoria (mock).')
  }

  return (
    <Card
      title="Preferencias académicas"
      subtitle="Configuración simulada, ideal para conectar a un backend real en el futuro"
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="form-label">
          Horario preferido
          <select
            className="input"
            value={horarioPreferido}
            onChange={e => setHorarioPreferido(e.target.value)}
          >
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Indiferente</option>
          </select>
        </label>

        <label className="form-label">
          Modalidad preferida
          <select
            className="input"
            value={modalidad}
            onChange={e => setModalidad(e.target.value)}
          >
            <option>Presencial</option>
            <option>Virtual</option>
            <option>Híbrida</option>
          </select>
        </label>

        <label className="form-label">
          Carga máxima sugerida (créditos)
          <input
            type="number"
            className="input"
            value={cargaMaxima}
            onChange={e => setCargaMaxima(Number(e.target.value))}
            min={4}
            max={24}
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Guardar preferencias mock
          </button>
        </div>
      </form>
    </Card>
  )
}

export default PreferenciasPage
