import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route} from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import LIstProduct from '../../Components/ListProduct/LIstProduct'


const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<LIstProduct/>}/>
        
      </Routes>
    </div>
  )
}

export default Admin
