import React from 'react'

function Table() {
   
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