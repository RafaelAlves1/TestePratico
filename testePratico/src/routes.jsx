import { Route, Router, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Error from './pages/Error'
import Home from './pages/Home'
import UserPost from './pages/Posts'

export default function AppRoutes() {
    return (
        
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/detalhes/:id" element={<Details />} /> 
                <Route  path="/posts/:id" element={<UserPost />} />
                <Route  path="*" element={<Error />} />
            </Routes>
        
    )
}
