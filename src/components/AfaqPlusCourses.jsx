import React, { useState } from 'react';
import '../assets/styles/AfaqPlusCourses.css';
import CoursesAfaqP from '../data/CoursesAfaqP';
import starOutlined from '../assets/images/Star.svg';
import starFilled from '../assets/images/Star-colored.svg';

const AfaqPlusCourses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(CoursesAfaqP.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPagination = () => {
        if (totalPages <= 5) {
            return [...Array(totalPages).keys()].map(n => n + 1);
        }

        if (currentPage <= 3) return [1, 2, 3, '...', totalPages];
        if (currentPage >= totalPages - 2) return [1, '...', totalPages - 2, totalPages - 1, totalPages];
        return [1, '...', currentPage, '...', totalPages];
    };

    const indexStart = (currentPage - 1) * itemsPerPage;
    const displayedCourses = CoursesAfaqP.slice(indexStart, indexStart + itemsPerPage);

    //liked courses
    const [likedCourses, setLikedCourses] = useState([]);


    return (
        <div className='afaqpluscourses'>
            <div className='courses'>
                {displayedCourses.map(course => (
                    <div className='one-card' key={course.id}>
                        <div className="image-wraper">
                            <img src={course.image} alt="course" className="original-img" />
                            <div className="blur-back"></div>
                            <div className="course-title">
                                <p>{course.title}</p>
                            </div>
                            <button
                                onClick={() => {
                                    setLikedCourses(prev =>
                                        prev.includes(course.id)
                                            ? prev.filter(id => id !== course.id)
                                            : [...prev, course.id]
                                    );
                                }}
                                className="like-button" >
                                <img
                                    src={likedCourses.includes(course.id) ? starFilled : starOutlined}
                                    alt="like"
                                    className="star-icon"
                                />
                            </button>

                        </div>

                        <div className="chapters">
                            <img src="src/assets/images/Table of Content.svg" alt="" />
                            <p>{course.chapters} Chapters</p>
                        </div>
                        <div className="price">
                            <img src="src/assets/images/Us Dollar Circled.svg" alt="" />
                            <p>{course.price}</p>
                        </div>
                        <div className="Play-now-btn-wrapper">
                            <button className="Play-now-btn">
                                <img src="src/assets/images/Circled Play Button.svg" alt="" />
                                <p>ابدأ الآن</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>{'<'}</button>
                {getPagination().map((page, index) => (
                    <button
                        key={index}
                        className={page === currentPage ? 'active' : ''}
                        onClick={() => typeof page === 'number' && handlePageChange(page)}
                        disabled={page === '...'}
                    >
                        {page}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>{'>'}</button>
            </div>

        </div>
    );
};

export default AfaqPlusCourses;
