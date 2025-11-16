import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const AdminLayout = () => {
  const { user, logout } = useAuth()

  return (
    <div className="layout-root">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="app-title">Gestión Académica</h1>
          <span className="role-badge">Administrador</span>
        </div>
        <nav className="nav">
          <NavLink to="/admin" end className="nav-link">
            Dashboard
          </NavLink>
          <NavLink to="/admin/docentes" className="nav-link">
            Docentes
          </NavLink>
          <NavLink to="/admin/estudiantes" className="nav-link">
            Estudiantes
          </NavLink>
          <NavLink to="/admin/asignaturas" className="nav-link">
            Asignaturas
          </NavLink>
          <NavLink to="/admin/asignaciones" className="nav-link">
            Asignaciones
          </NavLink>
          <NavLink to="/admin/reportes" className="nav-link">
            Reportes
          </NavLink>
          <NavLink to="/admin/notificaciones" className="nav-link">
            Notificaciones
          </NavLink>
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <div>
            <p className="topbar-title">Panel administrativo</p>
            <p className="topbar-subtitle">
              Hola, {user?.name || 'Administrador'} · {user?.email}
            </p>
          </div>
          <button className="btn btn-outline" onClick={logout}>
            Cerrar sesión
          </button>
        </header>
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default AdminLayout
