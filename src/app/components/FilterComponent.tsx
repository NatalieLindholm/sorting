'use client'
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'

export default function FilterComponent({data}:{data:any[]}) {
  const router = useRouter()
  const [poke, setPoke] = useState(data)
  const [ascendingOrder, setAscendingOrder] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  
  
  function handleSort() {
    const sortedData = [...poke].sort((a, b) =>{
      const pokeNameA = a.name.toUpperCase();
      const pokeNameB = b.name.toUpperCase(); 
      if (pokeNameA < pokeNameB) {
          return ascendingOrder ? -1 : 1;
      }
      if (pokeNameA > pokeNameB) {
          return ascendingOrder ? 1 : -1;
      }
      return 0;
    })

    setPoke(sortedData);
    setAscendingOrder(!ascendingOrder);
    router.refresh();
  }

  
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearchWord(inputValue);

    const filteredPokes = data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setPoke(filteredPokes);
  }

  return (
    <div className='body'>
      <div>
      <input 
      type="text" 
      placeholder='Type here...'
      value={searchWord}
      onChange={handleSearchChange} 
      />
      <button onClick={handleSort}><b>Alphabetically</b></button>
      </div>
      <div className='box'>
      {poke.map((d)=>(
        <div key={d.id}>
          <h1>{d.name}</h1>
        </div>
      ))}
      </div>
    </div>
  )
}