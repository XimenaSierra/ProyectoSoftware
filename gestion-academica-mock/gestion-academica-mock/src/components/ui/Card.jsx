import React from 'react'

const Card = ({ title, subtitle, children, accent }) => {
  return (
    <div className={`card ${accent ? 'card-accent' : ''}`}>
      {(title || subtitle) && (
        <header className="card-header">
          {title && <h2 className="card-title">{title}</h2>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </header>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card
