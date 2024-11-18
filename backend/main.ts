// @deno-types="npm:@types/express@4"
import express, { NextFunction, Request, Response }from "npm:express@4.18.2";
import json from "npm:body-parser";
import cors from "npm:cors";

const app = express();
app.use(json());
app.use(cors());
const port = Number(Deno.env.get('PORT')) || 3000;

interface Symptom {
  id: number;
  symptom: string;
  description: string;
  severity: number;
  date: number;
}

const symptoms: Symptom[] = [];

// Middleware
app.get("/", (_req: Request, res: Response): void => {
  res.send("Welcome to the Dinosaur API!");
});

app.post("/patient", (req: Request, res: Response): void => {
  const {symptom, description, severity} = req.body;
  const newSymptom: Symptom = {
    id: symptoms.length + 1,
    symptom: symptom,
    description: description,
    severity: severity,
    date: Date.now(),
  };
  symptoms.push(newSymptom);
  res.status(201).json(newSymptom);
})

app.get("/doctor", (_req: Request, res: Response): void => {
  console.log(symptoms)
  res.json(symptoms);
})


app.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});
