import React, { useMemo } from 'react'

function Table({head,datas,search,searchfield}) {
   
    console.log('searchfield',)

    const filteredValue=useMemo(()=>{
        return datas.filter((data)=>{
            return search?data[searchfield].toLowerCase().includes(search.toLowerCase()):true
        })
    },[search,searchfield])

  return (
    <table className='table_container'>
        <thead>
            <tr>
                {
                  head.map((head,i)=>(
                    <td key={i}>{head}</td>
                  ))  
                }
                
            </tr>
        </thead>
        <tbody>
            {
                filteredValue.length>0?filteredValue.map((data,i)=>(
                    <tr key={i}>
                        {
                            Object.keys(datas[0]).map(key=>(
                                <td>{data[key]}</td>
                            ))
                        }
                    </tr>
                )):(
                    <tr>
                         <td style={{textAlign:'center'}} colSpan={Object.keys(datas[0]).length}>Toll not found</td> 
                                           </tr>
                )
            }
        </tbody>
    </table>
  )
}

export default Table