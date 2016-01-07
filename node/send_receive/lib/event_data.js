// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

function EventData(body) {
  this._body = !body ? [] : body;
}

EventData.prototype.getBytes = function () {
  return new Buffer(this._body);
};

module.exports = EventData;