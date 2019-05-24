import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

const CourseRow = ({course, courseId, courseName, deleteCourse}) =>

    <div>

        <Link to={`/course/${courseId}`}>

            <div className="col-6" style={{float: 'left', textAlign: 'left'}}>
                <label style={{textAlign: 'center', fontSize: '20px', marginLeft: '2%'}}>
                    {courseName}</label>
            </div>

        </Link>

        <div className="col-2 d-none d-lg-block" style={{float: 'left', textAlign: 'center'}}>
            <label style={{textAlign: 'center', fontSize: '20px'}}>me</label>
        </div>

        <div className="col-2 d-none d-lg-block" style={{float: 'left', textAlign: 'center'}}>
            <label style={{textAlign: 'center', fontSize: '20px'}}>6:45pm</label>
        </div>

        <div className="col-2" style={{float: 'right', textAlign: 'center'}}>
            <button onClick={() => deleteCourse(course.id)}>
                <i className="fa fa-times" style={{fontSize: '15px'}}/>
            </button>
        </div>

    </div>

export default CourseRow

