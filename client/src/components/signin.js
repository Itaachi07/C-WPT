import { useState } from 'react'
import { useNavigate } from 'react-router'

import React from 'react'
import axios from 'axios'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function signin() {
    if (email.length === 0) alert('Please Enter Email')
    else if (password.length === 0) alert('Please Enter Password')
    else {
      axios
        .post('http://localhost:4000/user/signin', { email, password })
        .then((response) => {
          const result = response.data
          if (result['status'] === 'Not Match') {
            alert('Invalid Email ID OR Password')
            navigate('/signup')
          } else {
            alert('Welcome')
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
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          onChange={(event) => {
            setEmail(event.target.value)
          }}
        />
        <div id='emailHelp' className='form-text'>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className='mb-3'>
        <label for='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <button onClick={signin} type='submit' className='btn btn-primary'>
        Submit
      </button>
    </div>
  )
}
