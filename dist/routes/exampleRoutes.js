"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleController_1 = require("../controllers/exampleController");
const router = (0, express_1.Router)();
//operations supported for example
router.post('/', exampleController_1.createExample);
router.get('/', exampleController_1.getExamples);
router.get('/:id', exampleController_1.getExample);
router.patch('/:id', exampleController_1.updateExample);
router.delete('/:id', exampleController_1.deleteExample);
exports.default = router;
