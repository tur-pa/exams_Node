const mongoose = require("mongoose");

const advertSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Ad should has a title."],
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      immutable: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: [true, "Ad should has a category."],
    },
    tags: {
      type: [String],
      default: ["general"],
      trim: true,
    },
    cost: {
      type: Number,
      trim: true,
      required: [true, "Ad should has cost and it must be a number."],
    },
    currency: {
      type: String,
      trim: true,
      enum: ["PLN", "USD", "EUR"],
      required: [
        true,
        `You must enter one of following currency: PLN, USD, EUR.`,
      ],
    },
    phoneNumber: {
      type: Number,
      trim: true,
      required: [true, `You must enter contact number.`],
      min: [10000000, "Must be at least 8 numbers."],
      max: [999999999, "Must be max 9 numbers."],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// SHOW ONLY DATE WITHOUT TIME
advertSchema.virtual("Created").get(function () {
  return this.createdAt.toISOString().split("T")[0];
});

// DELETED FROM RESPONSE DUE TO "VIRTUAL" SHOWING FOR USER
advertSchema.methods.toJSON = function () {
  let advertObject = this.toObject();
  delete advertObject.createdAt;
  return advertObject;
};

const Advert = mongoose.model("Advert", advertSchema, "adverts");
module.exports = Advert;
