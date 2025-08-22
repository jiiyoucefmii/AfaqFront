import React, { useState } from 'react'
import '../../../assets/styles/QuizT.css'
import { Link } from 'react-router-dom'
import pluscircle from '../../../assets/images/pluscircle.svg'
import Onequiz from '../../../components/ui/Onequiz'
import Pagination from '../../../components/Pagination';

const QuizT = ()  => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  
  const totalItems = 50; 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexStart = (currentPage - 1) * itemsPerPage;
  const displayedQuizzes = Array.from({ length: itemsPerPage }, (_, i) => indexStart + i + 1)
    .filter((id) => id <= totalItems);
 
    
  return (
    <div className='quizt'>
      <div className="top1">
        <p className='big-quiz'>Quiz</p>
        <Link to="/profile-teacher/quiz-teacher/add-quiz" className='add-quiz'>
          <img src={pluscircle} alt="" />
          <p>Add quiz</p>
        </Link>
      </div>

      <hr className='hr-quiz' />

      <div className="all-my-quizes">
        {displayedQuizzes.length > 0 ? (
          displayedQuizzes.map((quizId) => (
            <Link to="/profile-teacher/quiz-teacher/quiz-info">
            <Onequiz
              key={quizId}
              name="الحركة المستقيمة المنتظمة والمتغيرة"
              numQst={12}
              numStudents={38}
              moy={11.8}
            />
            </Link>
            
          ))
        ) : (
          <p className="no-quizzes">لا توجد اختبارات</p>
        )}
      </div>

      {/* ✅ la pagination n’apparaît que si plus d’une page */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}

export default QuizT
