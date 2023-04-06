import Movie from "../model/movie.model";
import { Request, Response } from "express";


const create = (req: Request, res: Response) => {
  res.json({ status: true });
};

// const getAll = (req: Request, res: Response) => {
//   res.json({ status: true });
// };

// const getOne = async (req: Request, res:Response) => {
//   const { _id } = req.params;
//   try {
//     const result = await Movie.findById({ _id });
//     res.json({ status: true, result });
//   } catch (err) {
//     res.json({ status: false, message: err });
//   }
// };

const getAll = async (req: Request, res:Response) => {
  try {
    const result = await Movie.find({}).limit(50);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};


export { create, getAll };