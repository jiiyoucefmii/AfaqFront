import React from 'react'
import '../../assets/styles/Teachers.css'
import FilterTeachers from '../../components/FilterTeachers'
import AfaqTeachers from '../../components/AfaqTeachers'
import AfaqPlusTeachers from '../../components/AfaqPlusTeachers'



const Teachers = () => {
  return (
    <div className='teachers'>
      <div className="first-text">
        <h2 >نخبةٌ اساتذة الجزائر</h2>
        <p>الخبير في كل شيء كان مبتدئًا في يومٍ ما</p>
      </div>
      <FilterTeachers />
      <AfaqTeachers />
      <FilterTeachers type="plus" />
      <AfaqPlusTeachers />


    </div>
  )
}

export default Teachers
