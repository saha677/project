const path = require("mongoose");

const usersSchema = new path.Schema(
  {
    name: { type: String, required: "" },
    email: { type: String, required: "" },
    password: { type: String, required: "" },
    
  },
  {
    timestamps: true,
  }
);

const UserModel = path.model('users' , usersSchema)

module.exports = UserModel
