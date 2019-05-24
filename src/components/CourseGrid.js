import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CourseCards from './CourseCards'

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>

    <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="collapse navbar-collapse navbar-brand col-sm-1" href="#"
               style={{marginLeft: '1%'}}>
                <i className="fa fa-bars"/>
            </a>

            <a className="collapse navbar-collapse navbar-brand col-sm-2" href="#"
               style={{marginLeft: '1%'}}>
                Course Manager
            </a>

            <div className="container" style={{marginLeft: '1px'}}>

                <input type="text" className="container-fluid" placeholder="New Course Title"
                       style={{fontStyle: 'italic'}}/>

                <button className="btn btn-md btn-secondary"
                        style={{borderBottomLeftRadius:'25px',
                            borderBottomRightRadius:'25px',
                            borderTopLeftRadius:'25px',
                            borderTopRightRadius:'25px',
                            marginLeft: '1%'}}>
                    <i className="fa fa-plus"/>
                </button>

                <button className="btn btn-md btn-secondary"
                        style={{borderBottomLeftRadius:'25px',
                            borderBottomRightRadius:'25px',
                            borderTopLeftRadius:'25px',
                            borderTopRightRadius:'25px',
                            marginLeft: '1%'}}>
                    <i className="fa fa-list"/>
                </button>

            </div>

        </nav>

        <div className="container col-12">

            <div className="card-deck">
                {courses.map(course =>
                    <CourseCards
                        courseId = {course.id}
                        courseName = {course.title}
                        updateCourse = {updateCourse}
                        deleteCourse = {deleteCourse}/>
                )}

            </div>

        </div>



    </div>



export default CourseGrid