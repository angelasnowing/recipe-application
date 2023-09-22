import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  items: [],
  subscribers: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }]
})

courseSchema.methods.getInfo = function() {
  return `Title: ${this.title}, Description: ${this.description}, items: ${items.toString()}`
}

const Course = mongoose.model("Course", courseSchema)

export default {
  Course
}