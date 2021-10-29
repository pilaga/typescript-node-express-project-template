import express, { Request, Response, NextFunction } from "express";
import exampleRoutes from './routes/exampleRoutes';

const app = express();

app.use('/example', exampleRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(3000);
