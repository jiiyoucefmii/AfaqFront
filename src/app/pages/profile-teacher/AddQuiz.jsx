import React, { useState } from 'react'
import '../../../assets/styles/AddQuiz.css'
import FilterTeachers from '../../../components/FilterTeachers'

const AddQuiz = () => {
    const [course, setCourse] = useState("");
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([""]);

    const handleAddOption = () => {
        setOptions([...options, ""]);
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const quizData = { course, title, question, options };
        console.log("Quiz Submitted:", quizData);
        alert("Quiz submitted ✅ (check console)");
        setCourse("");
        setTitle("");
        setQuestion("");
        setOptions([""]);
    };

    return (
        <div className='addquiz'>
            <div className="top1">
                <p className='big-quiz'>Quiz</p>
                {/* Keep first form visually but prevent submit */}
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="dropdown-group3">
                        <label htmlFor="course"> المادة :</label>
                        <select
                            id="course"
                            name="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            required
                        >
                            <option value="">اختر المادة</option>
                            <option value="motion">الحركة المستقيمة المنتظمة والمتغيرة</option>
                            <option value="forces">القوى والحركة</option>
                            <option value="energy">الطاقة والشغل</option>
                        </select>
                    </div>
                </form>
            </div>

            <hr className='hr-quiz' />

            {/* New Quiz Form */}
            <div className="new-quiz">
                <form onSubmit={handleSubmit}>
                    {/* Quiz Title */}
                    <div className="form-group-title">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="اكتب العنوان ..."
                            required
                        />
                    </div>

                    {/* Question */}
                    <div className="form-group question">
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="اكتب السؤال ..."
                            required
                        />
                    </div>

                    {/* Options */}
                    <div className="form-group">
                        {options.map((option, index) => (
                            <input
                                key={index}
                                type="text"
                                value={option}
                                className='option-input'
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                placeholder={` ${index + 1}    اكتب الإجابة ...  `}
                                required
                            />
                        ))}
                    </div>

                    {/* Submit */}
                    <div className="form-actions">
                        <button type="button" className="btn-q add-option" onClick={handleAddOption}>
                    إضافة اقتراح
                        </button>
                        <button type="submit" className="btn-q submit-btn">
                            حفظ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddQuiz
