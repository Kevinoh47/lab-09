'use strict';

process.env.STORAGE = 'memory';

// Mock  ... we don't care to test the actual thing, we need to see that we can load it dynamically and that we call it right.

jest.setTimeout(30000); 

const {server} = require('../../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/api/v1/notes/12')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond properly on a GET request to /api/v1/foo', () => {
    
    return mockRequest
      .get('/api/v1/foo')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });
  });

  it('should respond properly on a GET request for a specific id to /api/v1/foo/:id', () => {

    return mockRequest
      .get('/api/v1/foo/4747')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });
  });

  // it('should be able to POST to /api/v1/foo', () => {

  //   let obj = {title:'test',text:'foo'};

  //   return mockRequest
  //     .post('/api/v1/foo')
  //     .send(obj)
  //     .then(results => {
  //       expect(results.status).toBe(200);
  //       expect(results.body.title).toEqual(obj.title);
  //     })
  //     .catch(err => {
  //       expect(err).not.toBeDefined();
  //     });
  // });

  // it('should be able to PUT to /api/v1/foo/:id', () => {

  //   let obj = {title:'test',text:'foo',_id:4747};

  //   return mockRequest
  //     .put('/api/v1/foo/4747')
  //     .send(obj)
  //     .then(results => {
  //       expect(results.status).toBe(200);
  //       expect(results.body.title).toEqual(obj.title);
  //     })
  //     .catch(err => {
  //       expect(err).not.toBeDefined();
  //     });
  // });

  // it('should be able to PATCH to /api/v1/foo/:id', () => {

  //   let obj = {title:'test',text:'foo',_id:4747};

  //   return mockRequest
  //     .patch('/api/v1/foo/47')
  //     .send(obj)
  //     .then(results => {
  //       expect(results.status).toBe(200);
  //       expect(results.body.title).toEqual(obj.title);
  //     })
  //     .catch(err => {
  //       expect(err).not.toBeDefined();
  //     });
  // });

});

