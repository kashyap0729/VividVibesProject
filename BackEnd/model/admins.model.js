const mongoose = require("mongoose");
const validator  = require("validator");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        validate:[
            {
                validator: (value) =>{
                 const length = value.length;
                 return length <20 && length>3;
                },
                message: "Name should be between 3 to 10 Characters",
            },
            {
                validator: (value) =>{
                return /^[a-zA-Z\s]*$/.test(value);
                },
                message: "Name should only contain Alphabets",
            },
        ]
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:[
        {
            validator: (value) => {
            return /^\S+@\S+\.\S+$/.test(value);
            },
            message: "Only Northeastern mail id accepted",
        },
       
        ]
    },
    password:{
        type: String,
        required: true,
        validate:[
            // {
            //     validator: (value) => {
            //       return value.length < 10 && value.length > 1;
            //     },
            //     message: "Password should be less than 10 Characters",
            //   },
              {
                validator: (value) => {
                  return /[A-Z]/.test(value);
                },
                message: "Password should contain at least one UpperCase Alphabet",
              },
              {
                validator: (value) => {
                  return /\d/.test(value);
                },
                message: "Password should contain at least one digit",
              },
              {
                validator: (value) => {
                  return /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])/.test(value);
                },
                message: "Password should contain at least one Special Character",
              },
        ]
    }
});

adminSchema.pre("save", function (next) {
    const admin = this;
    if (!admin.isModified("password")) {
      return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(admin.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        admin.password = hash;
        next();
      });
    });
  });
// Method to check the password on sign in
adminSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// Declare the model without initializing it
let Admins;

try {
    Admins = mongoose.model('admin');
} catch (error) {
    // The model doesn't exist, so create it
    Admins = mongoose.model('admin', adminSchema);
}

module.exports = Admins;