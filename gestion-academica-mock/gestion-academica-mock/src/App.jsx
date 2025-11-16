import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import AdminLayout from './components/layouts/AdminLayout'
import DocenteLayout from './components/layouts/DocenteLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import DocentesPage from './pages/admin/DocentesPage'
import EstudiantesPage from './pages/admin/EstudiantesPage'
import AsignaturasPage from './pages/admin/AsignaturasPage'
import AsignacionesPage from './pages/admin/AsignacionesPage'
import ReportesPage from './pages/admin/ReportesPage'
import NotificacionesPage from './pages/admin/NotificacionesPage'
import DocenteDashboard from './pages/docente/DocenteDashboard'
import HorarioPage from './pages/docente/HorarioPage'
import AsignaturasDocentePage from './pages/docente/AsignaturasDocentePage'
import PerfilDocentePage from './pages/docente/PerfilDocentePage'
import PreferenciasPage from './pages/docente/PreferenciasPage'
import { useAuth } from './context/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import RoleRoute from './routes/RoleRoute'

const App = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/admin/*"
        element={
          <PrivateRoute>
            <RoleRoute role="admin">
              <AdminLayout />
            </RoleRoute>
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="docentes" element={<DocentesPage />} />
        <Route path="estudiantes" element={<EstudiantesPage />} />
        <Route path="asignaturas" element={<AsignaturasPage />} />
        <Route path="asignaciones" element={<AsignacionesPage />} />
        <Route path="reportes" element={<ReportesPage />} />
        <Route path="notificaciones" element={<NotificacionesPage />} />
      </Route>

      <Route
        path="/docente/*"
        element={
          <PrivateRoute>
            <RoleRoute role="docente">
              <DocenteLayout />
            </RoleRoute>
          </PrivateRoute>
        }
      >
        <Route index element={<DocenteDashboard />} />
        <Route path="horario" element={<HorarioPage />} />
        <Route path="asignaturas" element={<AsignaturasDocentePage />} />
        <Route path="perfil" element={<PerfilDocentePage />} />
        <Route path="preferencias" element={<PreferenciasPage />} />
      </Route>

      <Route
        path="*"
        element={
          user
            ? <Navigate to={user.role === 'admin' ? '/admin' : '/docente'} replace />
            : <Navigate to="/login" replace />
        }
      />
    </Routes>
  )
}

export default App
