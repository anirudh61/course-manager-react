import React from 'react'

const LessonTabItem = ({lessons, createLesson, deleteLesson}) => {

    if (lessons)

        return (

            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li key={lesson.id} className="nav-item">
                            <a className="nav-link active">{lesson.title}</a>

                            <button onClick={deleteLesson}
                                    className="fa fa-times" style={{fontSize: '20px', alignItems: 'center'}}/>
                        </li>
                    )
                }

                <button onClick={createLesson}>
                    <i className="fa fa-plus" style={{fontSize: '20px'}}/>
                </button>
            </ul>
        )

    else {
        return (
            <ul>
                <button onClick={createLesson}>
                    <i className="fa fa-plus" style={{fontSize: '20px'}}/>
                </button>
            </ul>
        )
    }
}


export default LessonTabItem