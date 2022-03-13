import courseData from './config/courseData.json'
import College from './services/college';
import Courses from './services/courses';
import FormHandler from './ui/form_handler';
import { getRandomCourse } from './utilities/randomCourse';
const N_COURSES = 3;
function createCourses() {
    const courses = [];
    for(let i = 0; i < N_COURSES; i++) {
        courses.push(getRandomCourse(courseData));
    }
    return courses;
}

function getCourseItems(courses) {
    return courses.map(i => `<li>${JSON.stringify(i)}<li>`).join('');
}
const ulElem = document.getElementById("courses");
const courses = createCourses();
ulElem.innerHTML = `${getCourseItems(createCourses())}`
const dataProvider = new Courses(courses);
const dataProcessor = new College(dataProvider, courseData);
const formHandler = new FormHandler("courses-form", "alert");
formHandler.addHandler(course => {
    const message = dataProcessor.addCourse(course);
    ulElem.innerHTML += `<li>${JSON.stringify(course)}</li>`
})
