import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import CourseService from '../services/CourseService'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import CourseTable from "./CourseTable"

class CourseEditor extends React.Component {

    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)
        this.state = {
            course: course,
            module: course.modules[0]
        }
    }

    createLesson = () => {
        this.setState(() => {
            this.state.module.lesson = {
                id: (new Date()).getTime(),
                title: 'New Lesson'
            }

            if (this.state.module.lessons === undefined)
                return this.state.module.lesson

            this.state.module.lessons.push(this.state.module.lesson)
            return this.state.module.lessons
        });
    }

    deleteLesson = (lesson) =>
        this.setState(() => {
            this.state.module.lessons.splice(this.state.module.lessons.indexOf(lesson), 1);
            return this.state.module.lessons
        });

    createModule = (module) =>
        this.setState(() => {
            this.state.course.modules.push(module);
            return {course: this.state.course};
        });

    selectModule = module =>
        this.setState({
            module: module
        })

    deleteModule = (module) =>
        this.setState(() => {
            this.state.course.modules.splice(this.state.course.modules.indexOf(module), 1);
            return {course: this.state.course};
        });

    titleChanged = (event) => {
        this.setState(
            {
                module: {title: event.target.value}
            });
    }

    render() {

        return (

            <div className="container">

                <div className="container">

                    <div>

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                            <button className="btn btn-sm btn-secondary">
                                <i className="fa fa-times" style={{fontSize: '20px'}}/>
                            </button>

                            <a className="navbar-brand" style={{marginLeft: '20px'}}>
                                {this.state.course.title}</a>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-item active">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Build</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal active" style={{marginLeft: '40px'}}
                                           href="#">Pages</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Theme
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Store
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">Apps
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link horizontal" style={{marginLeft: '40px'}} href="#">
                                            Settings
                                        </a>
                                    </li>

                                    <li>
                                        <button className="btn btn-sm btn-danger" style={{marginLeft: '40px'}}>
                                            <i className="fa fa-plus" style={{fontSize: '20px'}}/>
                                        </button>
                                    </li>

                                </ul>

                            </div>

                        </nav>

                    </div>

                    <div className="row">

                        <div className="col-3">

                            <ul className="nav flex-column nav-pills red">

                                <a className="nav-link">

                                    <ModuleList
                                        createModule={this.createModule}
                                        titleChanged={this.titleChanged}
                                        selectModule={this.selectModule}
                                        deleteModule={this.deleteModule}
                                        modules={this.state.course.modules}/>

                                </a>

                            </ul>

                        </div>

                        <div className="col-9">

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <LessonTabs
                                        lessons={this.state.module.lessons}
                                        createLesson={this.createLesson}
                                        deleteLesson = {this.deleteLesson}
                                    />
                                </li>
                                {/*<li className="nav-item">*/}
                                    {/*<input type="form-control"/>*/}

                            </ul>

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link vertical active" style={{marginLeft: '30px'}} href="#">
                                        Topic 1</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link vertical" style={{marginLeft: '30px'}} href="#">Topic 2</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link vertical" style={{marginLeft: '30px'}} href="#">Topic 3</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link vertical" style={{marginLeft: '30px'}} href="#">Topic 4</a>
                                </li>

                                <li className="nav-item">
                                    <button style={{marginLeft: '30px'}} className="btn btn-primary">
                                        <i className="fa fa-plus"/>
                                    </button>
                                </li>

                            </ul>

                            <div className="col-12" style={{marginTop: '2%', float: 'left'}}>

                                <div className="btn-group mr-2" style={{float: 'right'}}>
                                    <i className="fa fa-toggle-on fa-2x"/>
                                </div>

                                <div>
                                    <label className="col-sm-2 col-form-label"
                                           style={{float: 'right'}}><b>Preview</b></label>
                                </div>

                                <div>
                                    <button className="btn btn-success" style={{float: 'right'}}>Save</button>
                                </div>

                            </div>

                            <div className="col-12"
                                 style={{marginTop: '2%', border: '1px solid black', float: 'left'}}>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>

                                    <button className="btn btn-sm btn-danger"
                                            style={{float: 'right', marginLeft: '10px'}}>
                                        <i className="fa fa-times" style={{fontSize: '20px'}}/>
                                    </button>

                                    <select style={{marginLeft: '10px', float: 'right'}}>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-down" style={{fontSize: '20px'}}/>
                                    </button>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '25px'}}>
                                        <i className="fa fa-arrow-circle-up" style={{fontSize: '20px'}}/>
                                    </button>

                                    <label style={{fontSize: '25px'}}><b> Heading Widget </b></label>

                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" style={{fontSize: '20px'}}
                                           placeholder="Heading Text"/>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <select className="form-control col-lg-12">
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                        <option>Heading 3</option>
                                        <option>Heading 4</option>
                                    </select>
                                </div>

                                <div style={{marginTop: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" style={{fontSize: '20px'}}
                                           placeholder="Widget text"/>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>
                                    <h3>Preview</h3>
                                </div>

                                <div style={{marginBottom: '2%'}}>
                                    <h1>Heading Text</h1>
                                </div>

                            </div>

                            <div className="col-12" style={{marginTop: '2%', border: '1px solid black', float: 'left'}}>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>

                                    <button className="btn btn-sm btn-danger"
                                            style={{float: 'right', marginLeft: '10px'}}>
                                        <i className="fa fa-times" style={{fontSize: '20px'}}/>
                                    </button>

                                    <select style={{marginLeft: '10px', float: 'right'}}>
                                        <option>List</option>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>Image</option>
                                    </select>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-down" style={{fontSize: '20px'}}/>
                                    </button>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '25px'}}>
                                        <i className="fa fa-arrow-circle-up" style={{fontSize: '20px'}}/>
                                    </button>

                                    <label style={{fontSize: '25px'}}><b> List Widget </b></label>

                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <p type="text" className="col-12" style={{fontSize: '20px'}}>
                                        put each item in a separate row</p>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <select className="form-control col-lg-12">
                                        <option>Unordered List</option>
                                        <option>Ordered List</option>
                                    </select>
                                </div>

                                <div style={{marginTop: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="Widget Name"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>
                                    <h2>Preview</h2>

                                    <ul>
                                        <li><h5>Put each</h5></li>
                                        <li><h5>item in</h5></li>
                                        <li><h5>a separate row</h5></li>
                                    </ul>

                                </div>

                            </div>

                            <div className="col-12" style={{marginTop: '2%', border: '1px solid black', float: 'left'}}>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>

                                    <button className="btn btn-sm btn-danger"
                                            style={{float: 'right', marginLeft: '10px'}}>
                                        <i className="fa fa-times" style={{fontSize: '20px'}}/>
                                    </button>

                                    <select style={{marginLeft: '10px', float: 'right'}}>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-down" style={{fontSize: '20px'}}/>
                                    </button>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-up" style={{fontSize: '20px'}}/>
                                    </button>

                                    <label style={{fontSize: '25px'}}><b> Paragraph Widget </b></label>

                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <p style={{fontSize: '20px'}}>lorem ipsum</p>
                                </div>

                                <div style={{marginTop: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="Widget Name"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>
                                    <h2>Preview</h2>
                                </div>

                                <div style={{marginBottom: '2%'}}>
                                    <h5>Lorem ipsum</h5>
                                </div>

                            </div>

                            <div className="col-12"
                                 style={{marginTop: '2%', marginBottom: '2%',
                                     border: '1px solid black', float: 'left'}}>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>

                                    <button className="btn btn-sm btn-danger"
                                            style={{float: 'right', marginLeft: '10px'}}>
                                        <i className="fa fa-times" style={{fontSize: '20px'}}/>
                                    </button>

                                    <select style={{marginLeft: '10px', float: 'right'}}>
                                        <option>Image</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                        <option>Paragraph</option>
                                        <option>Link</option>
                                    </select>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-down"
                                           style={{fontSize: '20px'}}/>
                                    </button>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-up"
                                           style={{fontSize: '20px'}}/>
                                    </button>

                                    <label style={{fontSize: '25px'}}><b> Image Widget </b></label>

                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="http://lorempixel.com/300/150"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="Widget Name"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%'}}>
                                    <h2>Preview</h2>
                                </div>

                                <div style={{marginBottom: '2%'}}>
                                    <img src="../Image.png" style={{width: '350px', height: '300px'}}/>
                                </div>

                            </div>

                            <div className="col-12"
                                 style={{marginTop: '2%', marginBottom: '2%',
                                     border: '1px solid black', float: 'left'}}>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>

                                    <button className="btn btn-sm btn-danger"
                                            style={{float: 'right', marginLeft: '10px'}}>
                                        <i className="fa fa-times" style={{fontSize: '20px'}}/>
                                    </button>

                                    <select style={{marginLeft: '10px', float: 'right'}}>
                                        <option>Link</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                        <option>Paragraph</option>
                                        <option>Image</option>
                                    </select>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-down"
                                           style={{fontSize: '20px'}}/>
                                    </button>

                                    <button className="btn btn-sm btn-warning"
                                            style={{float: 'right', borderTopLeftRadius: '5px',
                                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                                        <i className="fa fa-arrow-circle-up"
                                           style={{fontSize: '20px'}}/>
                                    </button>

                                    <label style={{fontSize: '25px'}}><b> Link Widget </b></label>

                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="http://youtube.com"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="Link text"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="http://youtube.com"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', border: '1px solid black'}}>
                                    <input type="text" className="col-12" placeholder="Widget Name"
                                           style={{fontSize: '20px'}}/>
                                </div>

                                <div style={{marginTop: '2%', marginBottom: '2%'}}>
                                    <h2>Preview</h2>
                                </div>

                                <div style={{marginBottom: '2%'}}>
                                    <a href="#">Link text</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-12 " style={{marginTop: '1%'}}>

                    <button className="btn btn-sm btn-danger"
                            style={{float: 'right', marginRight: '5%', marginBottom: '2%'}}>
                        <i className="fa fa-plus" style={{fontSize: '20px'}}/>
                    </button>

                </div>
            </div>
        );
    }
}

export default CourseEditor