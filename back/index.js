
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());

const { Schema } = mongoose;

const MerySchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
});

const Blog = mongoose.model('Blog', MerySchema);

app.get("/meryem", async (req, res) => {
    const getAll = await Blog.find();
    res.send(getAll);
  });
  app.get("/meryem/:id", async (req, res) => {
    const { id } = req.params;
    const getbyId = await Blog.findById(id);
    res.send(getbyId);
  });
  app.post("/meryem", async (req, res) => {
    const obj = req.body;
    const add = new Blog(obj);
    await add.save();
    res.send(add);
  });
  app.put("/meryem/:id", async (req, res) => {
    const { id } = req.params;
    const obj = req.body;
    const updatebyid = await Blog.findByIdAndUpdate(id, obj);
  
    res.send("put func");
  });
  app.delete("/meryem/:id", async (req, res) => {
    const { id } = req.params;
    const deletebyId = await Blog.findByIdAndDelete(id);
    res.send(deletebyId);
  });
      
  mongoose
  .connect(
    "mongodb+srv://meryemosmanova24:meryemosmanova24@codem.0uejvk1.mongodb.net/"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.listen(3000)