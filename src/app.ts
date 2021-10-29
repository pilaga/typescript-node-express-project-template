import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import exampleRoutes from './routes/exampleRoutes';

const app = express();

app.use(json());
app.use('/examples', exampleRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(3000);
