// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

function EventData(body) {
  body = body || [];
  if (typeof body === 'object' &&
      !Array.isArray(body) &&
      !Buffer.isBuffer(body)) {
      // Buffer only accepts a number, buffer, array, or string argument, so
      // serialize objects to JSON.
      body = JSON.stringify(body);
  }
  this._body = new Buffer(body);
}

EventData.prototype.getBytes = function () {
  return this._body;
};

module.exports = EventData;