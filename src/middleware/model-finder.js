'use strict';

let notes = require('../models/notes.js');
let tasks = require('../models/tasks.js'); 
let users = require('../models/users.js');

//console.log("REQUIRED NOTES: ", notes);

// var models = {
//   notes: {default: function Notes(){notes;}},
//   tasks: {default: function Tasks(){tasks;}},
//   users: {default: function Users(){users;}},
// };

var models = {
  notes: {default: notes},
  tasks: {default: tasks},
  users: {default: users},
};

console.log('MODELS AFTER IMPORTING THEM INTO MODEL FINDER', models);

/**
{ 
  notes: { default: [Function: Notes] },
  tasks: { default: [Function: Tasks] },
  users: { default: [Function: Users] } 
}
 **/

export default (req, res, next) => {
  let model = req.params.model;
  console.log('REQ PARAMS: ', req.params);
  console.log('REQ PARAMS MODEL: ', req.params.model);
  console.log('MODELS...', models);
  console.log('MODELS[MODEL]', models[model]);
  console.log('MODELS[MODEL].default', models[model].default);
  console.log('MODEL...', model);
  if( model && models[model] && models[model].default) {
    req.model = models[model].default;
    console.log('YAY WE HAVE A GOOD MODEL. req.model: ', req.model);
    next();
  } 
  else {
    next('InVaLiD MoDeL');
  }
};