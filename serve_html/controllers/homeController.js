import mongoose from "mongoose";
import subscriberModel from "../models/subscribers.js"
import courseModel from "../models/course.js";

mongoose.connect("mongodb://localhost:27017/recipe_db")

mongoose.Promise = global.Promise

let contact, courses;

subscriberModel.Subscriber.find().then( result => {
  contact = result
})

courseModel.Course.find().then( result => courses = result)

const respondHomePage = (req, res) => {
  res.render("index", {page: 'home'})
}

export const respondContactPage = (req, res) => {
  res.render("index", {page: 'contact', contact})
}

export const respondCoursesPage = (req, res) => {
  res.render("index", {page: 'courses', courses: courses})
}

export default {
  respondHomePage,
  respondContactPage,
  respondCoursesPage
}


// Subscriber.create({
//   name: "Professor Souffle",
//   email: "souffle@recipe.com"
// }).then(subscriber => console.log(subscriber))
// .catch(error => console.log(error.message))

// Course.create({
//   title: "Peaching to the choir",
//   description: "Get fresh peaches from the local farm."
// }).then( course => console.log(course))
// .catch( error => console.log(error.message))