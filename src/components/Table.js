import React from 'react'

function Table() {
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
    console.log(Object.keys(table_data[0]))
  return (
    <table className='table_container'>
        <thead>
            <tr>
                {
                  table_head.map((head,i)=>(
                    <td key={i}>{head}</td>
                  ))  
                }
                
            </tr>
        </thead>
        <tbody>
            {
                table_data.map((data,i)=>(
                    <tr key={i}>
                        {
                            Object.keys(table_data[0]).map(key=>(
                                <td>{data[key]}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Table