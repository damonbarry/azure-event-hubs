// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

var chai = require('chai');
chai.should();

var EventData = require('../lib/event_data.js');

describe('EventData', function () {
  describe('#constructor', function () {
    it('creates a new EventData object', function () {
      (new EventData()).should.be.an.instanceof(EventData);
    });
  });
  
  describe('getBytes()', function () {
    it('returns an empty Buffer if the object has no body', function () {
      var data = new EventData;
      data.getBytes().should.be.empty;
    });
    
    it('returns a Buffer representing the input string', function () {
      var body = 'hello';
      var buffer = (new EventData(body)).getBytes();
      buffer.toString().should.equal(body);
    });
    
    it('returns the same Buffer every time it is called', function () {
      var body = 'hello';
      var data = new EventData(body);
      data.getBytes().should.equal(data.getBytes());
    });
  });
});