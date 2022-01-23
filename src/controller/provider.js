/* eslint-disable prefer-destructuring */
const models = require("../models");

module.exports = class ProviderController {
  static async createData(req, res) {
    try {
      const provider = await models.Provider.create(req.body);
      return res.status(200).json({
        status: 200,
        message: "Data created Successfully.",
        result: provider
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: error.message });
    }
  }

  static async LoadProvider(req, res) {
    try {
      const { providerId, data } = req.body;
      const provider = await models.Provider.findOne({ providerId });
      const { fields } = provider;
      if (JSON.stringify(fields) !== JSON.stringify(Object.keys(data[0]))) {
        return res.status(400).json({
          status: 400, message: "Some fields failed validation"
        });
      }
      let array = [];
      array = data.map((info) => {
        return {
          providerId,
          data: info
        };
      });
      await models.Data.insertMany(array);
      return res.status(200).json({
        status: 200,
        message: "Provider loaded Successfully."
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: error.message });
    }
  }

  static async fetchProviders(req, res) {
    try {
      const provider = await models.Data.find();
      return res.status(200).json({
        status: 200,
        message: "Provider datas fetched Successfully.",
        result: provider
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: error.message });
    }
  }

  static async fetchProvidersById(req, res) {
    try {
      const { name, age, timestamp } = req.query;
      let nameCondition = name.split(":");
      let ageCondition = age.split(":");
      let timestampCondition = timestamp.split(":");
      let conditions = {};
      if (nameCondition[0] === "eqc") {
        conditions.providerId = req.params.providerId;
        conditions.$text = { $search: nameCondition[1] };
      }

      switch (ageCondition[0]) {
        case "gt":
          conditions.providerId = req.params.providerId;
          conditions.age = { $gt: Number(ageCondition[1]) };
          break;
        case "lt":
          conditions.providerId = req.params.providerId;
          conditions.age = { $lt: Number(ageCondition[1]) };
          break;
        default:
          conditions.providerId = req.params.providerId;
          conditions.age = Number(ageCondition[1]);
          break;
      }

      switch (timestampCondition[0]) {
        case "gt":
          conditions.providerId = req.params.providerId;
          conditions.timestamp = { $gt: Number(timestampCondition[1]) };
          break;
        case "lt":
          conditions.providerId = req.params.providerId;
          conditions.timestamp = { $lt: Number(timestampCondition[1]) };
          break;
        default:
          conditions.providerId = req.params.providerId;
          conditions.timestamp = Number(timestampCondition[1]);
          break;
      }
      const provider_data = await models.Data.findOne(conditions);
      if (!provider_data) return res.status(404).json({ status: 404, error: "Provider data not found" });
      return res.status(200).json({
        status: 200,
        message: "Provider data fetched Successfully.",
        data: provider_data.data
      });
    } catch (error) {
      return res.status(500).json({ status: 500, error: error.message });
    }
  }
};
