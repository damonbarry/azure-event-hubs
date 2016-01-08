// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

function EventData(body) {
  body = body || [];
  this._body = new Buffer(body);
}

EventData.prototype.getBytes = function () {
  return this._body;
};

module.exports = EventData;