const { Schema, model } = require("mongoose");

const providerSchema = new Schema(
  {
    providerId: { type: Number },
    fields: []
  }
);

module.exports = {
  providerSchema,
  Provider: model("provider", providerSchema),
};
