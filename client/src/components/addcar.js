import axios from 'axios'
import React, { useState } from 'react'

export default function Addnote() {
  const [id, setid] = useState()
  const [name, setname] = useState()
  const [model, setmodel] = useState()

  const addnote = () => {
    if (id === 0 || setname === 0 || setmodel === 0)
      alert('Please Enter All The Fields')
    else {
      axios
        .post('http://localhost:4000/cars/add', { id, name, model })
        .then((response) => {
          const result = response.data
          if (result['status'] === 'error') alert('Something went wrong')
          else {
            alert('Note Added Sucessfully')
            console.log(result['data'])
          }
        })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
    }
  }

  return (
    <div className='container col-4 mt-5'>
      <div className='mb-3'>
        <label for='exampleInputEmail1' className='form-label'>
         ID
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
      </div>
      <div className='mb-3'>
        <label for='exampleInputPassword1' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleInputPassword1'
          onChange={(event) => {
            setname(event.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label for='exampleInputPassword1' className='form-label'>
          Model
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleInputPassword1'
          onChange={(event) => {
            setmodel(event.target.value)
          }}
        />
      </div>
      <button onClick={addcar} type='submit' className='btn btn-primary'>
        Submit
      </button>
    </div>
  )
}
