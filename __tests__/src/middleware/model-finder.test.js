'use strict';

process.env.STORAGE = 'memory';

jest.setTimeout(30000); 

import modelFinder from '../../../src/middleware/model-finder.js';

// describe('Model Finder Middleware', () => {
//   it('throws an error if a valid model is not present', () => {
//     let req = {params:{}};
//     let res = {};
//     let next = jest.fn();
//     modelFinder(req,res,next);
//     expect(next).toHaveBeenCalledWith('Invalid Model');
//   });
//   it('throws an error if an invalid model is present', () => {
//     let req = {params:{model:'thismodelisnotmocked'}};
//     let res = {};
//     let next = jest.fn();
//     modelFinder(req,res,next);
//     expect(next).toHaveBeenCalledWith('Invalid Model');
//   });
//   it('returns a model object/function when a valid model is requested', () => {
//     let req = {params:{model:'foo'}};
//     let res = {};
//     let next = jest.fn();
//     modelFinder(req,res,next);
//     expect(req.model).toBeDefined();
//     expect(next).toHaveBeenCalledWith();
//   });
// });