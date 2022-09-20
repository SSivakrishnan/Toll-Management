import React,{memo} from 'react'
import Modal from '../Modal'

function AddVehicleEntry(props) {
  return (
    <Modal open={props.addNewTollPopup} onClose={()=>props.setAddNewTollPopup(false)}>
    <h2>Add New Entry</h2>
    <div className='form_field'>
        <label>Select toll name*</label>
        <select>
            <option>siva</option>
            <option>siva</option>
        </select>
    </div>
    <div className='form_field'>
        <label>Select Vehicle Type*</label>
        <select>
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy vehicle</option>
        </select>
    </div>
    <div className='form_field'>
        <label>Vehicle Number*</label>
        <input type='text' placeholder='Enter Your login id'/>
    </div>
    <div className='form_field'>
        <label>Tariff*</label>
        <input type='text' placeholder='Tariff amount'/>
    </div>
    <button>Add Entry</button>
</Modal>
  )
}

export default AddVehicleEntry