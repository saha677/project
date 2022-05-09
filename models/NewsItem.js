const path = require("mongoose");

const newsItemSchema = new path.Schema(
  {
    title: { type: String, required: "" },
    description: { type: String, required: "" },
    content: { type: String, required: "" },
    postedBy: { type: Object, required: "" },
  },
  {
    timestamps: true,
  }
);

const NewsItemModel = path.model('newsitems' , newsItemSchema)

module.exports = NewsItemModel
