import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Reimbursement from './Pages/reimbursement'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reimbursement" element={<Reimbursement />} />
    </Routes>
  </BrowserRouter>
)
