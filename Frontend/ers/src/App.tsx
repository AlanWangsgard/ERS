import Login from './Pages/Login'
import Register from './Pages/Register'
import ReinbursementViewer from './Pages/ReimbursementViewer'
import CreateReimbursement from './Pages/CreateReimbursement'
import AdminUserView from './Pages/AdminUserView'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reimbursement" element={<ReinbursementViewer/>} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/create" element={<CreateReimbursement/>}/>
                <Route path='/admin' element={<AdminUserView/>}/>
                </Routes>
            </BrowserRouter>
        </>
        )
    }

export default App
