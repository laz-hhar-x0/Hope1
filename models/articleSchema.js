const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const articleSchema = new Schema({
  frstName: String,
  lastName: String,
  Email: String,
  Tlf: String,
  MatrecuL: String,
  Choix: String,
  annee: String,
  whatYouKnow: String,
  WhyYouWantJoining: String,
});
 
 
// Create a model based on that schema
const hope = mongoose.model("Article", articleSchema);
 
 
// export the model
module.exports = hope;