import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import CourseTable from './CourseTable'
import CourseEditor from './CourseEditor'
import CourseService from '../services/CourseService'
import CourseGrid from './CourseGrid'

class WhiteBoard extends React.Component {

    constructor() {
        super();
        this.courseService = new CourseService()
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }

    addCourse = course =>
        this.setState({
            courses: this.courseService.addCourse(course)
        })

    deleteCourse = courseId =>
        this.setState({
            courses: this.courseService.deleteCourse(courseId)
        })

    findCourseById = courseId =>
        this.setState({
            courses: this.courseService.findCourseById(courseId)
        })

    updateCourse = (courseId, course) =>
        this.setState({
            courses: this.courseService.updateCourse(courseId, course)
        })

    render() {
        return (
            <div>

                <Router>
                    <div>

                        <Route path='/' exact
                               render={() =>
                                   <CourseTable courses = {this.state.courses}
                                                addCourse = {this.addCourse}
                                                deleteCourse = {this.deleteCourse}/>
                               }/>

                        <Route path='/table' exact
                               render={() =>
                                   <CourseTable courses = {this.state.courses}
                                                addCourse = {this.addCourse}
                                                deleteCourse = {this.deleteCourse}/>
                               }/>

                        <Route path='/course/:id' exact
                                   component={CourseEditor}/>

                        <Route path='/grid' exact
                               render={() =>
                                   <CourseGrid courses = {this.state.courses}
                                               updateCourse = {this.updateCourse}
                                               deleteCourse = {this.deleteCourse}/>
                               }/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default WhiteBoard;