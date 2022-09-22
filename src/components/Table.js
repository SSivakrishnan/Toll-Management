import React, { useMemo } from 'react'

function Table({head,datas,search,searchfield,deleteList,deleteRow,filter,filterfield}) {
   
  
    const filteredValue=useMemo(()=>{
        if(!datas){
            return []
        }
        return datas
        .filter((data)=>{
            return filter?(data[filterfield] === filter):true 
        })
        .filter((data)=>{
            return search?data[searchfield].toLowerCase().includes(search.toLowerCase()):true
        })
    },[datas,search,searchfield,filter,filterfield])

  
  return (
    <table className='table_container'>
        <thead>
            <tr>
                {
                  head.map((head,i)=>(
                    <td key={i}>{head}</td>
                  ))  
                }
                 {
                        deleteList&&(
                                <td></td>
                            )
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
                        {
                            deleteList&&(
                                <td onClick={()=>deleteRow(data)} style={{cursor:'pointer'}}><i class="fa fa-trash" aria-hidden="true">    </i></td>
                            )
                        }
                    </tr>
                )):(
                    <tr>
                         <td style={{textAlign:'center'}} colSpan={head?.length}>Data Not Found</td> 
                                           </tr>
                )
            }
        </tbody>
    </table>
  )
}

export default Table