import { RequestHandler } from "express";
import { ExampleItem } from "../models/exampleModel";

//only stored in memory here for example's purpose
//should be stored in DB
//added dummy data for debug purposes
const items: ExampleItem[] = [ 
    { id: 2, text: 'example item 01'},
    { id: 3, text: 'example item 02'},
    { id: 4, text: 'example item 03'}
];

export const createExample: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newExampleItem = new ExampleItem(Math.random(), text);

    items.push(newExampleItem);

    res.status(201).json({message: 'created example item', createdExampleItem: newExampleItem});
};

export const getExamples: RequestHandler = (req, res, next) => {
    res.status(201).json({examples: items});
}

export const getExample: RequestHandler<{id: number}> = (req, res, next) => {
    const itemId = req.params.id;
    const itemIndex = items.findIndex(item => item.id == itemId);

    if(itemIndex < 0) {
        throw new Error('could not find item');
    }

    res.status(201).json({message: 'found item', foundItem: items[itemIndex]})
}

export const updateExample: RequestHandler<{id: number}> = (req, res, next) => {
    const itemId = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    const itemIndex = items.findIndex(item => item.id == itemId);

    if(itemIndex < 0) {
        throw new Error('could not find item to update');
    }

    items[itemIndex] = new ExampleItem(items[itemIndex].id, updatedText);
    res.status(201).json({message: 'updated example item', updatedExampleItem: items[itemIndex]});
}

export const deleteExample: RequestHandler<{id: number}> = (req, res, next) => {
    const itemId = req.params.id;
    const itemIndex = items.findIndex(item => item.id == itemId);

    if(itemIndex < 0) {
        throw new Error('could not find item to delete');
    }

    items.splice(itemIndex, 1);
    res.status(201).json({message: 'deleted item'});    
}