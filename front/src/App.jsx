import {  HelmetProvider } from 'react-helmet-async';
import './App.css'
import Home from './pages/Home';
import Mainlayout from './layout/Mainlayout';
import Detail from './pages/Detail';
import AdminLayout from './layout/AdminLayout';
import AdminAdd from './pages/AdminAdd';
import AdminUpdate from './pages/AdminUpdate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './pages/AdminHome';
function App() {


  return (
    <>
       <HelmetProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/" element={<AdminHome />} />
            <Route path="/admin/adminadd" element={<AdminAdd/>} />
            <Route path="/admin/adminupdate" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
       </HelmetProvider>
    </>
  )
}

export default App
