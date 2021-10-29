"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExample = exports.updateExample = exports.getExample = exports.getExamples = exports.createExample = void 0;
const exampleModel_1 = require("../models/exampleModel");
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
    const newExampleItem = new exampleModel_1.ExampleItem(Math.random(), text);
    items.push(newExampleItem);
    res.status(201).json({ message: 'created example item', createdExampleItem: newExampleItem });
};
exports.createExample = createExample;
const getExamples = (req, res, next) => {
    res.status(201).json({ examples: items });
};
exports.getExamples = getExamples;
const getExample = (req, res, next) => {
    const itemId = req.params.id;
    const itemIndex = items.findIndex(item => item.id == itemId);
    if (itemIndex < 0) {
        throw new Error('could not find item');
    }
    res.status(201).json({ message: 'found item', foundItem: items[itemIndex] });
};
exports.getExample = getExample;
const updateExample = (req, res, next) => {
    const itemId = req.params.id;
    const updatedText = req.body.text;
    const itemIndex = items.findIndex(item => item.id == itemId);
    if (itemIndex < 0) {
        throw new Error('could not find item to update');
    }
    items[itemIndex] = new exampleModel_1.ExampleItem(items[itemIndex].id, updatedText);
    res.status(201).json({ message: 'updated example item', updatedExampleItem: items[itemIndex] });
};
exports.updateExample = updateExample;
const deleteExample = (req, res, next) => {
    const itemId = req.params.id;
    const itemIndex = items.findIndex(item => item.id == itemId);
    if (itemIndex < 0) {
        throw new Error('could not find item to delete');
    }
    items.splice(itemIndex, 1);
    res.status(201).json({ message: 'deleted item' });
};
exports.deleteExample = deleteExample;
