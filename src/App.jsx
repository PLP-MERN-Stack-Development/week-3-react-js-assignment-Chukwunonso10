import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/" element={<Navigate to="/dashboard" />}/>
      </Routes>
    </BrowserRouter>
  )
}