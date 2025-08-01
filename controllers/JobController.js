import Job from "../models/JobModels.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customError.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  // Sample data — normally you get from req.body
  const job = await Job.create({
    company: "OpenAI",
    position: "Prompt Engineer",
    jobLocation: "San Francisco",
  });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id); // FIXED
  if (!job) throw new NotFoundError(`No job found with id ${id}`);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updateJob) throw new NotFoundError(`No job found with id ${id}`);

  res.status(StatusCodes.OK).json({ msg: "job modified", job: updateJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  if (!removedJob) throw new NotFoundError(`No job found with id ${id}`);

  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};
