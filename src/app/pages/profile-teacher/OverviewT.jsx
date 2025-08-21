import React, { useState } from 'react'
import '../../../assets/styles/OverviewT.css'
import CardOver from '../../../components/ui/CardOver'
import Teachers from '../../../data/TeachersAfaq';
import Pagination from '../../../components/Pagination';

const OverviewT = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(Teachers.length / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedTeachers = Teachers.slice(indexStart, indexStart + itemsPerPage);

  return (
    <div className='overviewt'>
      <p className='big-overview'>Overview</p>
      <hr className='hr-ov' />

      <div className="info-courses">
        <CardOver number={16} text=" الدورات المكتملة" />
        <CardOver number={2} text="إجمالي عدد الطلاب المسجلين" />
        <CardOver number={550} text="مجموع ساعات التدريس" />
        <CardOver number={90} text="عدد الدورات" />
      </div>

      <div className="teacher-courses">
        <p className='my-courses'>الدورات الخاصة بي</p>
        <p className='courses-over'>نظرة شاملة على موادك التعليمية</p>
        <hr className='hr-ov2' />
      </div>

      <div className="my-course">
        <div className="all-teachers1">
          {displayedTeachers.length > 0 ? (
            displayedTeachers.map((teacher) => (
          
              <div className="course-card" key={teacher.id}>
                <div className="course-image">
                  <img src={teacher.image} alt="دورة المراجعة النهائية رياضيات" className="course-img" />
                </div>
                <div className="course-content">
                  <h3 className="course-name">دورة المراجعة النهائية رياضيات</h3>
                  <p className="course-instructor">{teacher.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-courses">لا توجد دورات</p>
          )}
        </div>

        {/* ✅ Pagination seulement si plus d'une page */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  )
}

export default OverviewT
