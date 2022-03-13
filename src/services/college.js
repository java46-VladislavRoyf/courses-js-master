// data processor

export default class College {
    #courseData
    constructor(courses, courseData) {
        this.#courseData = courseData;
        this.#courses = courses;
    }
    addCourse(course) {
        //TODO validation of the course data
        const validationMessage = this.#getValidationMessage(course);
        if(!validationMessage) {
            this.#courseData.add(course);
        }
        return validationMessage;
    }
    #getValidationMessage(course) {
        // validate course
    }
}