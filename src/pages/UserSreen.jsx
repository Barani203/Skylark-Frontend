import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tophiring from '../components/tophiring/Tophiring'
import Jobportal from '../components/ourclients/Jobportal'
import Clients from '../components/ourclients/Clients'
import Footer from '../components/Footer/Footer'
import HrCompanies from '../components/hrcompanies/HrCompanies'
import Counter from '../components/hrcompanies/Counter'
import Latestjob from '../components/latestjobs/Latestjob'
import Featurecantidate from '../components/featuredjob/featurecantidate'
import Recruiters from '../components/realrecruiters/Recruiters'
import Testimonials from '../components/testimonial/Testimonials'


export default function UserSreen() {
  return (
    <div>
      <Navbar/>
      <Counter/>
      <HrCompanies/>
      <Latestjob/>
      <Featurecantidate/>
      <Recruiters/>
      <Testimonials/>
      <Tophiring/>
      <Jobportal/>
      <Clients/>
      <Footer/>
    </div>
  )
}
