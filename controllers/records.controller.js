import express from "express";
// import { recordModel } from "../models/records.js";
import { RecordService } from "../services/record.service.js";
import { BaseResponseModel } from "../handlers/response";

const router = express.Router();
const recordService = new RecordService();

router.post("/record", async (req, res) => {
  const response = new BaseResponseModel();
  const recordModel = {};
  try {
    // Get records from service
    const records = await recordService.fetchRecords(
      new Date(req.body.startDate),
      new Date(req.body.endDate),
      req.body.minCount,
      req.body.maxCount
    );

    // Set records to response model
    recordModel.records = records.map((x) => ({
      key: x.key,
      createdAt: x.createdAt,
      totalCount: x.totalCount,
    }));
  } catch (e) {
    return response.getErrorResponse(e);
  }
  // Return SUCCESS response with records
  return res.send(response.getSuccessResponse(recordModel));
});

export { router as recordController };
