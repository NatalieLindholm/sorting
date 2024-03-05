import React from 'react'
import { getData } from './utils/handledb'
import FilterComponent from './components/FilterComponent'

export default async function Filter() {
    const data = await getData()
    const sortedData = data.sort((a:any,b:any)=> a.id - b.id)
    //console.log(sortedData)
    const filtereData = data.filter((e:any)=> e.quote == "From Typescript")
    //console.log(filtereData)
  return (
    <div>
        <FilterComponent data={data} />
    </div>
  )
}