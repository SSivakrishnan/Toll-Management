import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddNewToll from '../components/Popup/AddNewToll'
import AddVehicleEntry from '../components/Popup/AddVehicleEntry'
import Table from '../components/Table'

function AllTolls() {
    const [searchVehicle,setSearchVehicle] = useState()
    const [addVehiclePopup,setAddVehiclePopup] = useState(false)
    const [addNewTollPopup,setAddNewTollPopup] = useState(false)

  return (
    <section>
        <div className='header header_alltolls'>
             <h2>Tollgate List </h2> 
            
             <div className='search_bar'>
             <i className="fa fa-search" aria-hidden="true"></i>
             <input type='text' placeholder='Search a toll' onChange={(e)=>setSearchVehicle(e.target.value)}/>
             </div>
             <div className='button_container'>
                <button onClick={()=>setAddVehiclePopup(true)}>
                    Add Vehicle entry
                </button>
                <button onClick={()=>setAddNewTollPopup(true)}>
                    Add new toll
                </button>
                <Link to='/'>
                <button>
                    Back to vehicle logs
                </button>
                </Link>
               
             </div>
        </div>
        <Table/>

        <AddVehicleEntry addVehiclePopup={addVehiclePopup} setAddVehiclePopup={setAddVehiclePopup}/>
        <AddNewToll addNewTollPopup={addNewTollPopup} setAddNewTollPopup={setAddNewTollPopup}/>
       
    </section>
  )
}

export default AllTolls