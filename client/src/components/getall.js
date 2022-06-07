import axios from 'axios'
import React, { useState } from 'react'

export default function GetAll() {
  const [car, setcar] = useState([])
  const [id, setid] = useState()

  const getall = () => {
    axios.get('http://localhost:4000/cars/get/' + id).then((response) => {
      setcar(response.data.data)
    })
  }

  return (
    <div className='container col-4 mt-5'>
      <div className='mb-3'>
        <label for='exampleInputEmail1' className='form-label'>
          User ID
        </label>
        <input
          type='number'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          onChange={(event) => {
            setid(event.target.value)
          }}
        />
        <div>
          <button
            onClick={getall}
            type='submit'
            className='btn btn-primary mt-2'>
            Submit
          </button>
        </div>
      </div>
      <div className='row'>
        {car.map((note) => {
          return (
            <div
              className='card'
              //style='width: 18rem'
             style={{display: 'inline-block'}}
              >
              <div className='card-body'>
                <h5 className='card-title'>Title : {note.title}</h5>
                <p className='card-text'>Content: {note.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
