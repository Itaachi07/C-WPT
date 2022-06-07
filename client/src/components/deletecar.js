import axios from 'axios'
import React, { useState } from 'react'

export default function Deletecar() {
  const [id, setid] = useState()

  const deletecar = () => {
    if (id === 0) alert('Please Enter All The User ID')
    else {
      axios
        .delete('http://localhost:4000/cars/delete/' + id)
        .then((response) => {
          const result = response.data
          if (result['status'] === 'success') alert('car Successfully Deleted')
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
          car ID
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
      <button onClick={deletecar} type='submit' className='btn btn-primary'>
        Submit
      </button>
    </div>
  )
}
