import React from 'react'

const Modal = ({ open, title, onClose, children }) => {
  if (!open) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </header>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
