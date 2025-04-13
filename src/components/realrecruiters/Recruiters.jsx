import React from 'react'
import '../realrecruiters/recruiters.css'
import { Container } from 'react-bootstrap'
import image from '../../assets/recruiter.jpeg'
export default function Recruiters() {
  return (
    <Container className='recruiter-section w-auto py-4'>
          <div className='recruiter-content'>
            <h1 className='text-white'>Get <b>Notified</b> by <b>1000s</b> of <b>Real Recruiters</b></h1>
            <button className='bg-white rounded-5 ' style={{color:'#1E88E5'}}> Highlight My Profile</button>
          </div>
          <div className='recruiter-image'>
            <img src={image} alt="recruiter-image" />
          </div>
    </Container>
  )
}
