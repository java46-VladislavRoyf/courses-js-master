import courseData from './config/courseData.json'
import { getRandomCourse } from './utilities/randomCourse';
const N_COURSES = 10;
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
ulElem.innerHTML = `${getCourseItems(createCourses())}`
//TODO rendering inside <ul>
