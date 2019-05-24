import React, {Component} from 'react'

const CourseCards = ({courseId, courseName, updateCourse, deleteCourse}) =>

    <div>

        <div className="card" styles={{width: '18rem'}}>


            <img className="card-img-top" src="https://picsum.photos/300/200"/>

            <div className="card-body">

                <label clame="card-title">{courseName}</label>
                &nbsp;
                <button className="btn btn-success">
                    Edit
                </button>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteCourse(courseId)}>
                    Delete
                </button>
            </div>

        </div>

    </div>

export default CourseCards;