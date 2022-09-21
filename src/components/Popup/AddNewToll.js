import React,{memo, useState} from 'react'
import useForm from '../../hooks/useForm'
import Modal from '../Modal'

function AddNewToll({addNewTollPopup,setAddNewTollPopup}) {
    const tollEntries={   
    }
    const [values,errors,onChange,onSubmit] = useForm(dataAdded,tollEntries,validate)
    
    const [vehicleTypes,setVehicleTypes] = useState([
        'Car/Jeep/Van',
        'LCV',
        'Truck/Bus',
        'Heavy vehicle',
    ])
    const [selectedVehicle,setSelectedVehicle]=useState([])

    function dataAdded(){
        setAddNewTollPopup(false)
        localStorage.setItem('toll_list',JSON.stringify([...(JSON.parse(localStorage.getItem('toll_list'))??[]),values]))
        console.log('vall success')
    }
    function validate(){
        let errors={}
        if(!values?.['toll_name']?.trim()?.length>0){
            errors['toll_name']="Enter Toll name"
        }
        for(let i=1;i<5;i++){
            let vehicleType =values?.[`vehicle_type_${i}`]?.trim()
            let singleJourney = values?.[`single_journey_${i}`]?.trim()
            let returnJourney=values?.[`return_journey_${i}`]?.trim()
            if(!vehicleType?.length>0){
                errors[`vehicle_type_${i}`]=`Enter Vehicle Type ${i}`
            }             
            if(isNaN(+singleJourney)){
              errors[`single_journey_${i}`]=`Enter Number Only`
            } 
            if(!singleJourney?.length>0){
                errors[`single_journey_${i}`]=`Enter Single Journey ${i}`
            } 
            if(isNaN(returnJourney)){
              errors[`return_journey_${i}`]=`Enter Number Only`
             } 
            if(!returnJourney?.length>0){
                errors[`return_journey_${i}`]=`Enter Return Journey ${i}`
            } 
            
        }
        let compare_12 = values?.[`vehicle_type_1`] === values?.[`vehicle_type_2`]
        let compare_23 = values?.[`vehicle_type_2`] === values?.[`vehicle_type_3`]
        let compare_34 = values?.[`vehicle_type_3`] === values?.[`vehicle_type_4`]
        let compare_41 = values?.[`vehicle_type_4`] === values?.[`vehicle_type_1`]
        if(compare_12 || compare_23 || compare_34 || compare_41){
          errors[`compare_vehicle`]=`Vehicle must be Unique`
        }

        return errors
    }
    console.log("vall",values,errors)

    // function removeVehicle(e){
    //     // vehicleTypes.splice(1,1)
    //     // setVehicleTypes(vehicleTypes)
    //     const selected_vehicle=selectedVehicle
    //     selected_vehicle.push(e.target.value)
    //     setSelectedVehicle(selected_vehicle)
    //     selected_vehicle.forEach((vehicle)=>{
    //         document.querySelector(`#vehicle_type_${+e.target.id.split('_')[2]+1} .vehicle${e.target.value}`).style.display='none'
    //     })
    //     console.log('called',`#vehicle_type_${+e.target.id.split('_')[2]+1} .vehicle${e.target.value}`,selectedVehicle)
       
    //     // if(e.target.name==='vehicle1'){

    //     // }
    // }
  return (
    
    <Modal open={addNewTollPopup} onClose={()=>setAddNewTollPopup(false)} width={750}>
    <h2>Add New Toll</h2>
    <div className='form_field'>
        <label>Toll Name*</label>
        <input type='text' placeholder='Enter toll name' name='toll_name' onChange={onChange}/>
        <p className='err_msg'>{errors['toll_name']}</p>
    </div>
    <label>Vehicle fare Details*</label>

    {
        [...Array(4)].map((num,i)=>(
            <div className='form_field form_field_row'>
            <div>
            <select id={'vehicle_type_'+(i+1)} name={'vehicle_type_'+(i+1)} onChange={onChange}>
              {
                vehicleTypes.map((vehicle,i)=>(
                    <option className={'vehicle'+i} key={i} value={vehicle}>{vehicle}</option>
                ))            
              }
            </select>
            <p className='err_msg'>{errors['vehicle_type_'+(i+1)]}</p>
            </div>
           <div>
           <input type='text' placeholder='Single Journey' name={'single_journey_'+(i+1)} onChange={onChange}/>
            <p className='err_msg'>{errors['single_journey_'+(i+1)]}</p>
           </div>
           <div>
           <input type='text' placeholder='Return Journey' name={'return_journey_'+(i+1)} onChange={onChange}/>
            <p className='err_msg'>{errors['return_journey_'+(i+1)]}</p>
           </div>           
            
        </div>
            ))
    }
      <p className='err_msg' style={{position:'relative',bottom:'0'}}>{errors['compare_vehicle']}</p>
  
    {/* <div className='form_field form_field_row'>
    <select id='vehicle_type_2' name='vehicle_type_2' onChange={onChange}>
          {
            vehicleTypes.map((vehicle,i)=>(
                <option className={'vehicle'+i} key={i} value={i}>{vehicle}</option>
            ))            
          }
        </select>
        <input type='text' placeholder='Single Journey' name='single_journey_2' onChange={onChange}/>
        <input type='text' placeholder='Return Journey' name='return_journey_2' onChange={onChange}/>
    </div>
    <div className='form_field form_field_row'>
    <select id='vehicle_type_3' name='vehicle_type_3' onChange={onChange}>
          {
            vehicleTypes.map((vehicle,i)=>(
                <option className={'vehicle'+i} key={i} value={i}>{vehicle}</option>
            ))            
          }
        </select>
        <input type='text' placeholder='Single Journey' name='single_journey_3' onChange={onChange}/>
        <input type='text' placeholder='Return Journey' name='return_journey_3' onChange={onChange}/>
    </div>
    <div className='form_field form_field_row'>
    <select id='vehicle_type_4' name='vehicle_type_4' onChange={onChange}>
          {
            vehicleTypes.map((vehicle,i)=>(
                <option className={'vehicle'+i} key={i} value={i}>{vehicle}</option>
            ))            
          }
        </select>
        <input type='text' placeholder='Single Journey' name='single_journey_4' onChange={onChange}/>
        <input type='text' placeholder='Return Journey' name='return_journey_4' onChange={onChange}/>
    </div> */}
  
    <button onClick={onSubmit}>Add Details</button>
</Modal>
  )
}

export default AddNewToll