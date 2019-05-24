import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import CourseRow from './CourseRow'
import CourseService from "../services/CourseService";

const CourseTable = ({courses, addCourse, deleteCourse}) =>

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

                <button onClick={addCourse}
                        className="btn btn-md btn-secondary"
                        style={{borderBottomLeftRadius:'25px',
                            borderBottomRightRadius:'25px',
                            borderTopLeftRadius:'25px',
                            borderTopRightRadius:'25px',
                            marginLeft: '1%'}}>
                    <i className="fa fa-plus"/>
                </button>

            </div>

        </nav>

        <div className="d-none d-lg-block container" style={{marginTop: '2%'}}>

            <div className="container col-6" style={{float: 'left', textAlign: 'left'}}>
                <label style={{textAlign: 'center', fontSize: '20px'}}>Title</label>
            </div>

            <div className="col-2 d-none d-lg-block" style={{float: 'left', textAlign: 'center'}}>
                <select>
                    <option>Owned by</option>
                    <option>me</option>
                    <option>Nobody, it's free</option>
                </select>
            </div>

            <div className="col-2 d-none d-lg-block" style={{float: 'left', textAlign: 'center'}}>
                <label style={{textAlign: 'center', fontSize: '15px'}}>Last modified</label>
            </div>

            <div className="col-2" style={{float: 'right', textAlign: 'center'}}>

                <Link to="/grid">
                    <button>
                        <i className="fa fa-th"/>
                    </button>
                </Link>

            </div>

        </div>

        <div className="container" style={{marginTop: '6%'}}>
            {courses.map(
                course => <CourseRow course={course} courseId={course.id} courseName={course.title}
                                     deleteCourse={deleteCourse}/>
            )}
        </div>

    </div>

export default CourseTable;