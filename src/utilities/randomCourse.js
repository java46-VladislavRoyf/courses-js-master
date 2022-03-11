import { createCourse } from "../models/course";
import { getRandomNumber, getRandomElement, getRandomDate} from "./random"
export function getRandomCourse(courseData) {
    
    const id = getRandomNumber(courseData["minId"], courseData["maxId"]);
    const name = getRandomElement(courseData["courses"]);
    const lecturer = getRandomElement(courseData["lectors"]);
    const hours = Math.round(getRandomNumber(courseData["minHours"], courseData["maxHours"]) / 10) * 100;
    const cost = Math.round(getRandomNumber(courseData["minCost"], courseData["maxCost"]) / 100) * 100;
    const openingDate = getRandomDate(courseData["minYear"], courseData["maxYear"]);
    return createCourse(id, name, lecturer, hours, cost, openingDate);
}
