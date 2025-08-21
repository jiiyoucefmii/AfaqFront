import React, { useState } from 'react'
import '../../../assets/styles/QuizOverview.css'
import PicSt from '../../../assets/images/teachers/teacher1.png'

const QuizOverview = () => {
  const [sortOrder, setSortOrder] = useState("asc")

  // Exemple d’étudiants (tu peux remplacer par tes données)
const students = [
    { name: 'Wail Kataloni', mark: 13},
    { name: 'Sara Benali', mark: 20 },
    { name: 'Mohamed Ali', mark:9 },
    { name: 'Wail Kataloni', mark: 13},
    { name: 'Sara Benali', mark: 20 },
    { name: 'Mohamed Ali', mark:9 },
    { name: 'Wail Kataloni', mark: 8},
    { name: 'Sara Benali', mark: 20 },
    { name: 'Mohamed Ali', mark:9 },
    { name: 'Wail Kataloni', mark: 13},
    { name: 'Sara Benali', mark: 20 },
    { name: 'Mohamed Ali', mark:7},
  ]

  // Tri en fonction du choix
  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.mark - b.mark
    } else {
      return b.mark - a.mark
    }
  })

  return (
    <div className='quiz-overview'>
      <table className="quiz-table">
        <thead>
          <tr>
            <th>اسم الاختبار</th>
            <th>عدد الأسئلة</th>
            <th>أعلى درجة</th>
            <th>متوسط الدرجة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>التحولات النووية والإشعاعات</td>
            <td>20</td>
            <td>20</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>

      <p className='answ-st'>الطلاب الذين أجابوا</p>

      <div className="std-marks">
        <form>
          <div className="dropdown-group4">
            <label htmlFor="sort">الترتيب :</label>
            <select id="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">تصاعديا</option>
              <option value="desc">تنازليا</option>
            </select>
          </div>
        </form>

        <div className="students-list1">
          {sortedStudents.length === 0 ? (
            <p className="no-students">لا يوجد أي طالب قد أجاب بعد</p>
          ) : (
            sortedStudents.map((student, index) => (
              <div key={index} className="student-item1">
                <img src={PicSt} alt="" />
                <p className='name-st'>{student.name}</p>
                <p className='mark-st'>العلامة: {student.mark}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizOverview
