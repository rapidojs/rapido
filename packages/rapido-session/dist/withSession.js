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
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
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
var React = __importStar(require('react'));
var hoist_non_react_statics_1 = __importDefault(
  require('hoist-non-react-statics')
);
var SessionContext_1 = require('./SessionContext');
function withSession(WrappedComponent) {
  var name = WrappedComponent.displayName || WrappedComponent.name;
  var SessionWrapper = /** @class */ (function(_super) {
    __extends(SessionWrapper, _super);
    function SessionWrapper() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;
      _this.onChange = function() {
        // Make sure to update children with new values
        _this.forceUpdate();
      };
      return _this;
    }
    SessionWrapper.prototype.listen = function() {
      this.props.session.addChangeListener(this.onChange);
    };
    SessionWrapper.prototype.unlisten = function(session) {
      (session || this.props.session).removeChangeListener(this.onChange);
    };
    SessionWrapper.prototype.componentDidMount = function() {
      this.listen();
    };
    SessionWrapper.prototype.componentDidUpdate = function(prevProps) {
      if (prevProps.session !== this.props.session) {
        this.unlisten(prevProps.session);
        this.listen();
      }
    };
    SessionWrapper.prototype.componentWillUnmount = function() {
      this.unlisten();
    };
    SessionWrapper.prototype.render = function() {
      var _a = this.props,
        forwardedRef = _a.forwardedRef,
        session = _a.session,
        restProps = __rest(_a, ['forwardedRef', 'session']);
      var allSessionData = session.getAll();
      return React.createElement(
        WrappedComponent,
        __assign({}, restProps, {
          ref: forwardedRef,
          session: session,
          sessionValues: allSessionData,
        })
      );
    };
    SessionWrapper.displayName = 'withSession(' + name + ')';
    SessionWrapper.WrappedComponent = WrappedComponent;
    return SessionWrapper;
  })(React.Component);
  var ForwardedComponent = React.forwardRef(function(props, ref) {
    return React.createElement(SessionContext_1.Consumer, null, function(
      session
    ) {
      return React.createElement(
        SessionWrapper,
        __assign({ session: session }, props, { forwardedRef: ref })
      );
    });
  });
  ForwardedComponent.displayName = SessionWrapper.displayName;
  ForwardedComponent.WrappedComponent = SessionWrapper.WrappedComponent;
  return hoist_non_react_statics_1.default(
    ForwardedComponent,
    WrappedComponent
  );
}
exports.default = withSession;
