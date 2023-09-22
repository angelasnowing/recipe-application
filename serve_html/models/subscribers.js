import mongoose from "mongoose"

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
})

subscriberSchema.methods.getInfo = function() {
  return `Name: ${this.name}, Email: ${this.email}`
}

subscriberSchema.methods.findSubscriber = function() {
  return this.model("Subscriber")
  .find({name: this.name})
  .exec();
}

const Subscriber = new mongoose.model("Subscriber", subscriberSchema)

export default {
  Subscriber
}




