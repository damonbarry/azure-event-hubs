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
});