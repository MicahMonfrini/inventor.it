import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: [ 100, "Maximum character limit reached. Please try again." ],
    required: true
  },
  author: {
    type: String,
    maxlength: [ 200, "Maximum character limit reached. Please try again." ],
    required: true
  },
  date: {
    type: String,
    maxlength: [ 50, "Maximum character limit reached. Please try again." ],
    required: true
  },
  publisher: {
    type: String,
    maxlength: [ 200, "Maximum character limit reached. Please try again." ],
    required: true
  },
  category: {
    type: String,
    maxlength: [ 128, "Maximum character limit reached. Please try again." ],
    required: true
  }
});

export default mongoose.model("Book", bookSchema);
