import React,{memo} from 'react'
import Modal from '../Modal'

function AddNewToll({addNewTollPopup,setAddNewTollPopup}) {
  return (
    
    <Modal open={addNewTollPopup} onClose={()=>setAddNewTollPopup(false)} width={750}>
    <h2>Add New Toll</h2>
    <div className='form_field'>
        <label>Toll Name*</label>
        <input type='text' placeholder='Enter toll name'/>
    </div>
    <label>Vehicle fare Details*</label>
    <div className='form_field form_field_row'>
        
        <select>
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy vehicle</option>
        </select>
        <input type='text' placeholder='Single Journey'/>
        <input type='text' placeholder='Return Journey'/>
    </div>
    <div className='form_field form_field_row'>
        <select>
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy vehicle</option>
        </select>
        <input type='text' placeholder='Single Journey'/>
        <input type='text' placeholder='Return Journey'/>
    </div>
    <div className='form_field form_field_row'>
        <select>
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy vehicle</option>
        </select>
        <input type='text' placeholder='Single Journey'/>
        <input type='text' placeholder='Return Journey'/>
    </div>
    <div className='form_field form_field_row'>
        <select>
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy vehicle</option>
        </select>
        <input type='text' placeholder='Single Journey'/>
        <input type='text' placeholder='Return Journey'/>
    </div>
  
    <button>Add Details</button>
</Modal>
  )
}

export default AddNewToll