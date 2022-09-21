import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddNewToll from '../components/Popup/AddNewToll'
import AddVehicleEntry from '../components/Popup/AddVehicleEntry'
import Table from '../components/Table'

function AllTolls() {
    const [searchToll,setSearchToll] = useState()
    const [addVehiclePopup,setAddVehiclePopup] = useState(false)
    const [addNewTollPopup,setAddNewTollPopup] = useState(false)
  
    const [tableData,setTableData] = useState()


    

    useEffect(()=>{
        if(localStorage.getItem('toll_list')){
       let table_data=JSON.parse(localStorage.getItem('toll_list'))
    //    .reduce((result,toll)=>{
    //     console.log('logg',result,toll)
    //         for(let i=1;i<5;i++){
    //             var car_jeep_van;
    //             var lcv;
    //             var truck_bus;
    //             var heavy_vehicle;
                
    //             if(toll['vehicle_type_'+i]==='Car/Jeep/Van'){
    //                 car_jeep_van=`${toll['single_journey_'+i]}/${toll['return_journey_'+i]}`
    //             }
    //             if(toll['vehicle_type_'+i]==='LCV'){
    //                 lcv=`${toll['single_journey_'+i]}/${toll['return_journey_'+i]}`
    //             }
    //             if(toll['vehicle_type_'+i]==='Truck/Bus'){
    //                 truck_bus=`${toll['single_journey_'+i]}/${toll['return_journey_'+i]}`
    //             }
    //             if(toll['vehicle_type_'+i]==='Heavy vehicle'){
    //                 heavy_vehicle=`${toll['single_journey_'+i]}/${toll['return_journey_'+i]}`
    //             }
    //         }
    //         return [...result,{
    //             toll_name:toll.toll_name,
    //             car_jeep_van:car_jeep_van,
    //             lcv:lcv,
    //             truck_bus:truck_bus,
    //             heavy_vehicle:heavy_vehicle,
    //         }]            
    //     },[])
        setTableData(table_data)
        console.log('Toll list changed......',table_data)
    }
    },[localStorage.getItem('toll_list')])

    // useEffect(()=>{
    //     if(searchToll&&tableData){
    //         console.log("filter",searchToll,tableData.filter((data)=>data.toll_name.includes(searchToll)))
    //         setTableData(tableData.filter((data)=>data.toll_name.includes(searchToll)))
    //     }else{
    //         setTableData(tableData)
    //     }
    // },[searchToll])

    const table_head=[
        'TOLL NAME',
        'CAR/JEEP/VAN',
        'LCV',
        'TRUCK/BUS',
        'HEAVY VEHICLE',
    ]
    // const table_data=[
    //     {
    //         toll_name:'car',
    //         car_jeep_van:'TN97H88',
    //         lcv:'93/32/32 23:23:33',
    //         truck_bus:'super',
    //         heavy_vehicle:'60',
    //     },
    // ]
  return (
    <section>
        <div className='header header_alltolls'>
             <h2>Tollgate List </h2> 
            
             <div className='search_bar'>
             <i className="fa fa-search" aria-hidden="true"></i>
             <input type='text' placeholder='Search a toll' onChange={(e)=>setSearchToll(e.target.value)}/>
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
        {
            tableData&&(
                <Table head={table_head} datas={tableData} search={searchToll} searchfield="toll_name" deleteList={true}/>
            )
        }
       

        <AddVehicleEntry addVehiclePopup={addVehiclePopup} setAddVehiclePopup={setAddVehiclePopup}/>
        <AddNewToll addNewTollPopup={addNewTollPopup} setAddNewTollPopup={setAddNewTollPopup}/>
       
    </section>
  )
}

export default AllTolls