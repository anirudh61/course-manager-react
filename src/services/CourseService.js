import courses from './courses.json'

class CourseService {
    constructor() {
        this.courses = courses
    }

    addCourse = course => {
        if (course == null) {
            course = {
                id: (new Date()).getTime(),
                title: 'New Course'
            }
        }

        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )

    findAllCourses = () =>
        this.courses;

    deleteCourse = courseId =>
        this.courses = this.courses.filter(
            course => course.id !== courseId
        )

    updateCourse = (courseId, course) => {
        if (courseId === course.id) {
            this.title = course.title
         }
    }
}

export default CourseService