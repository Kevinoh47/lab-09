![CF](http://i.imgur.com/7v5ASc8.png) LAB - Dynamic API Routing
=================================================
## Passing Travis CI
[![Build Status](https://travis-ci.com/Kevinoh47/lab-08.svg?branch=working08)](https://travis-ci.com/Kevinoh47/lab-08)

Passes tests, but I the only routes that I can get to get run successfully from the console are the GET routes without IDs.

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Overview
Continue working with the REST Server that you created in the previous lab.  We're going to be modifying it in these assignments to add some new functionality.

## Assignment
###### Requirements
* Add a dynamic switch via a setting in the .env file that would serve as a means of switching out the storage engine dynamically based on a configuration
* Implement a new storage module that reads this env variable and loads/returns the correct storage engine.
* Unify the multiple API routes that you have into ONE module (v1.js) that can access ANY model dynamically based on reading the param in the path.
  * i.e. /api/v1/notes would dynamically use the notes model while /api/v1/tasks would use the tasks model.  Use the :param feature in express to do this using route level middleware.

###### Testing
* Test the dynamic model loader to ensure that it properly loads a correct model or errors out on an invalid one
* Update your server tests to assert against the new unified API
* Mock the dynamic loader
* Mock models loaded through the dynamic model loader
* Your API tests need to be asserting that they're calling model methods on the right models (not that the models actually do anything)


##  Documentation
Include your travis badge at the top of your `README.md` file
In your `README.md`, describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to add any additional information in your `README.md` that you would like.

