
import { Schema, model, Types } from "mongoose";

// interface IMovie {
//   title: string;
//   rating: number;
//   directors: string[];
// }

interface IMovie {
  award: {
    nominations: number,
    text: string,
    wins: number
  };
  cast: [string];
  contries:[string];
  countries:[string];
  title: { type: string; required: true };
  rating: { type: number; required: true };
  directors: { type: [string]; required: true };
  genre:[string];
  imdb:{
    rating:number,
    votes:number,
    id:number
  };
  languages:[string];
  lastupdated: any;
  num_mflix_comments:number;
  plot:string;
  rated:string;
  released:any;
  runtime:number;
  theaterId:number;
  tomatoes:{
    lastUpdated:any,
    production:string,
    viewer:{
      rating:number,
      numReviews:number,
      meter:number
    },
  };
  type:string;
  writers:[string];
  year:number;
  _id:"any"
}

const movieSchema = new Schema<IMovie>({});

const Movie = model<IMovie>("movies", movieSchema);

export default Movie;