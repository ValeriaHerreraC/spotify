import React from 'react'

export const Albums=(props)=>(
  
  props.data.map((song) =>{
  return (
    <div key={song.id} className="card">
        <img src={song.artwork["150x150"]} className="card-img-top imagen" alt={song.title}/>
        <div className="card-body">
            <h2 className="card-text titulosong">{song.title}</h2>
            <p className='cantante'>{song.user.name}</p>
        </div>
    </div>
  )
  })
  )
