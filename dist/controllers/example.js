"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExamples = exports.createExample = void 0;
const exampleItem_1 = require("../models/exampleItem");
//only stored in memory here for example's purpose
//should be stored in DB
//added dummy data for debug purposes
const items = [
    { id: 2, text: 'example item 01' },
    { id: 3, text: 'example item 02' },
    { id: 4, text: 'example item 03' }
];
const createExample = (req, res, next) => {
    const text = req.body.text;
    const newExampleItem = new exampleItem_1.ExampleItem(Math.random(), text);
    items.push(newExampleItem);
    res.status(201).json({ message: 'created example item', createdExampleItem: newExampleItem });
};
exports.createExample = createExample;
const getExamples = (req, res, next) => {
    res.status(201).json({ examples: items });
};
exports.getExamples = getExamples;
