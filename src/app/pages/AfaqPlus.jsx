import React from 'react'
import '../../assets/styles/AfaqPlus.css'
import SearchButton from '../../components/SearchButton'
import AfaqPlusCourses from '../../components/AfaqPlusCourses'
import FilterCoursesAfaqP from '../../components/FilterCoursesAfaqP'

const AfaqPlus = () => {
  return (
    <div  className="afaqplus">
      <div className="first-text">

        <h1 className='first text'>ارتقِ بمهاراتك مع دورات        <span className="gradient-text">+AFAQ</span >      المميزة  </h1>
      
      </div>
      <SearchButton/>
      <FilterCoursesAfaqP/>
      <AfaqPlusCourses/>
          
    </div>
  )
}

export default AfaqPlus
