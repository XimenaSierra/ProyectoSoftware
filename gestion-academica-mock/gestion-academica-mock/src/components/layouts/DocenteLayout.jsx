import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const DocenteLayout = () => {
  const { user, logout } = useAuth()

  return (
    <div className="layout-root">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="app-title">Gestión Académica</h1>
          <span className="role-badge docente">Docente</span>
        </div>
        <nav className="nav">
          <NavLink to="/docente" end className="nav-link">
            Inicio
          </NavLink>
          <NavLink to="/docente/horario" className="nav-link">
            Horario
          </NavLink>
          <NavLink to="/docente/asignaturas" className="nav-link">
            Mis asignaturas
          </NavLink>
          <NavLink to="/docente/perfil" className="nav-link">
            Perfil
          </NavLink>
          <NavLink to="/docente/preferencias" className="nav-link">
            Preferencias
          </NavLink>
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <div>
            <p className="topbar-title">Panel docente</p>
            <p className="topbar-subtitle">
              Hola, {user?.name || 'Docente'} · {user?.email}
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

export default DocenteLayout
