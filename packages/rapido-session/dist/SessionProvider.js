'use strict';
/**
 * Copyright (c) 2019-present Max Parelius
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importStar(require('react'));
var Session_1 = __importDefault(require('./Session'));
var SessionContext_1 = require('./SessionContext');
var SessionProvider = /** @class */ (function(_super) {
  __extends(SessionProvider, _super);
  function SessionProvider(props) {
    var _this = _super.call(this, props) || this;
    if (props.session) {
      _this.session = props.session;
    } else {
      _this.session = new Session_1.default();
    }
    return _this;
  }
  SessionProvider.prototype.render = function() {
    return react_1.default.createElement(
      SessionContext_1.Provider,
      { value: this.session },
      this.props.children
    );
  };
  return SessionProvider;
})(react_1.Component);
exports.default = SessionProvider;
