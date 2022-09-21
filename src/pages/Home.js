import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import AddNewToll from '../components/Popup/AddNewToll';
import AddVehicleEntry from '../components/Popup/AddVehicleEntry';
import Table from './../components/Table';

function Home() {
    const [searchVehicle,setSearchVehicle] = useState()
    const [addVehiclePopup,setAddVehiclePopup] = useState(false)
    const [addNewTollPopup,setAddNewTollPopup] = useState(false)

    const table_head=[
        'vehicle Type',
        'vehicle Number',
        'Date/Time',
        'Toll Name',
        'Tarief',
    ]
    const table_data=[
        {
            vehicle_type:'car',
            vehicle_number:'TN97H88',
            date_time:'93/32/32 23:23:33',
            toll_name:'super',
            tarief:'60',
        },
        {
            vehicle_type:'car',
            vehicle_number:'TN97H88',
            date_time:'93/32/32 23:23:33',
            toll_name:'super',
            tarief:'60',
        },
        {
            vehicle_type:'car',
            vehicle_number:'TN97H88',
            date_time:'93/32/32 23:23:33',
            toll_name:'super',
            tarief:'630',
        },
        
    ]
  return (
    <section>
        <div className='header'>
             <h2>Toll entries / Vehicle entries</h2> 
             <div className='filter_icon'>
             <i className="fa fa-filter"></i>
             </div>
             <div className='search_bar'>
             <i className="fa fa-search" aria-hidden="true"></i>
             <input type='text' placeholder='Search Vehicle' onChange={(e)=>setSearchVehicle(e.target.value)}/>
             </div>
             <div className='button_container'>
                <button onClick={()=>setAddVehiclePopup(true)}>
                    Add Vehicle entry
                </button>
                <button onClick={()=>setAddNewTollPopup(true)}>
                    Add new toll
                </button>
                <Link to='/all-tolls'>
                <button>
                    View all tolls
                </button>
                </Link>
               
             </div>
        </div>
        <Table head={table_head} datas={table_data}/>

        <AddVehicleEntry addVehiclePopup={addVehiclePopup} setAddVehiclePopup={setAddVehiclePopup}/>
        <AddNewToll addNewTollPopup={addNewTollPopup} setAddNewTollPopup={setAddNewTollPopup}/>
       
    </section>
  )
}

export default Home