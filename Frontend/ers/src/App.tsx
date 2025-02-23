import Login from './Pages/Login'
import Register from './Pages/Register'
import ReimbursementView from './Pages/ReimbursementView'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reimbursement" element={<ReimbursementView/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
        </>
        )
    }

export default App
