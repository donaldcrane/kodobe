const { Schema, model } = require("mongoose");

const dataSchema = new Schema(
  {
    providerId: { type: Number },
    data: Object
  }
);
dataSchema.index({
  "data.name": "text"
});
module.exports = {
  dataSchema,
  Data: model("data", dataSchema),
};
