/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var FETCH_ADMINS = exports.FETCH_ADMINS = 'FETCH_ADMINS';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/generate');

                        case 2:
                            res = _context.sent;

                            res = { data: res.data.map(function (user) {
                                    return user.name;
                                }) };
                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/admins');

                        case 2:
                            res = _context3.sent;

                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Routes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(22);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _UsersPage = __webpack_require__(23);

var _UsersPage2 = _interopRequireDefault(_UsersPage);

var _NotFoundPage = __webpack_require__(24);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsPage = __webpack_require__(25);

var _AdminsPage2 = _interopRequireDefault(_AdminsPage);

var _ReportPage = __webpack_require__(27);

var _ReportPage2 = _interopRequireDefault(_ReportPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = exports.Routes = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _UsersPage2.default, {
        path: '/users'
    }), _extends({}, _AdminsPage2.default, {
        path: '/admins'
    }), _extends({}, _ReportPage2.default, {
        path: '/report'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(11);

var _compression2 = _interopRequireDefault(_compression);

var _morgan = __webpack_require__(12);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(13);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _serveFavicon = __webpack_require__(14);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _path = __webpack_require__(15);

var _path2 = _interopRequireDefault(_path);

var _renderer = __webpack_require__(16);

var _createStore = __webpack_require__(28);

var _Routes = __webpack_require__(6);

var _reactRouterConfig = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PORT = process.env.PORT || 3000;
var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _serveFavicon2.default)(_path2.default.join('src', 'favicon', 'favicon.ico')));
app.use(_express2.default.static('public'));

app.get('*', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var store, promises, context, content;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        store = (0, _createStore.storeCreator)(req);
                        promises = (0, _reactRouterConfig.matchRoutes)(_Routes.Routes, req.url).map(function (_ref2) {
                            var route = _ref2.route;

                            return route.loadData ? route.loadData(store) : null;
                        }).map(function (promise) {
                            if (promise) {
                                return new Promise(function (resolve, reject) {
                                    promise.then(resolve).catch(resolve);
                                });
                            }
                        });
                        _context.next = 4;
                        return Promise.all(promises);

                    case 4:
                        context = {};
                        content = (0, _renderer.render)(req, store, context);

                        if (!context.url) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt('return', res.redirect(301, context.url));

                    case 8:
                        if (context.notFound) {
                            res.status(404);
                        }

                        res.send(content);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT + '.');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = render;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(17);

var ReactDOMServer = _interopRequireWildcard(_server);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(4);

var _Routes = __webpack_require__(6);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(5);

var _reactHelmet = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(req, store, context) {
    var content = ReactDOMServer.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { context: context, location: req.url },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes.Routes)
            )
        )
    ));

    var helmet = _reactHelmet.Helmet.renderStatic();

    return '\n        <!DOCTYPE html>\n        <html>\n            <head>\n              ' + helmet.title.toString() + '\n              ' + helmet.meta.toString() + '\n              ' + helmet.link.toString() + '\n              ' + helmet.script.toString() + '\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script >\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script async src=\'bundle.js\'></script>\n            </body>\n        </html>\n    ';
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(20);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

var _Footer = __webpack_require__(21);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        { className: 'application' },
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'styles/main.css' }),
            _react2.default.createElement('script', { async: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js' }),
            _react2.default.createElement('script', { async: true, src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit-icons.min.js' }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-icon-57x57.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: 'favicon/apple-icon-60x60.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: 'favicon/apple-icon-76x76.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: 'favicon/apple-icon-120x120.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-icon-144x144.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon/apple-icon-152x152.png' }),
            _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-icon-180x180.png' }),
            _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'favicon/android-icon-192x192.png' }),
            _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' }),
            _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'favicon/favicon-96x96.png' }),
            _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' }),
            _react2.default.createElement('link', { rel: 'manifest', href: 'favicon/manifest.json' }),
            _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
            _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }),
            _react2.default.createElement('meta', { name: 'theme-color', content: '#ffffff' })
        ),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'div',
            { className: 'content' },
            (0, _reactRouterConfig.renderRoutes)(route.routes)
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;

    var adminsRoute = function adminsRoute() {
        return auth ? _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/admins' },
                'Admins'
            )
        ) : null;
    };

    return _react2.default.createElement(
        'nav',
        { className: 'uk-navbar-container header uk-navbar', 'data-uk-navbar': true },
        _react2.default.createElement(
            'div',
            { className: 'uk-navbar-left' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'uk-navbar-item uk-logo', to: '/' },
                'AR'
            ),
            _react2.default.createElement(
                'ul',
                { className: 'uk-navbar-nav' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/report' },
                        'New report'
                    )
                ),
                adminsRoute()
            )
        )
    );
};

function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        "div",
        { className: "uk-background-secondary uk-light uk-padding uk-panel footer" },
        _react2.default.createElement(
            "p",
            { className: "uk-h4" },
            "Secondary"
        )
    );
};

exports.default = Footer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                'title',
                null,
                'AR'
            ),
            _react2.default.createElement('meta', { property: 'og:title', content: 'React SSR' })
        ),
        _react2.default.createElement(
            'h2',
            null,
            'Welcome!'
        )
    );
};

exports.default = {
    component: HomePage
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersPage = function (_React$Component) {
    _inherits(UsersPage, _React$Component);

    function UsersPage(props) {
        _classCallCheck(this, UsersPage);

        return _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).call(this, props));
    }

    _createClass(UsersPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Users'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Users' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head()
            );
        }
    }]);

    return UsersPage;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        users: state.users
    };
};

var usersListSorted = function usersListSorted(users) {
    return function (dispatch) {
        dispatch({
            type: 'USERS_LIST_SORTED',
            payload: { users: users }
        });
    };
};

var loadData = function loadData(store) {
    return store.dispatch((0, _index.fetchUsers)());
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { usersListSorted: usersListSorted, fetchUsers: _index.fetchUsers })(UsersPage)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                "title",
                null,
                "Page not found"
            )
        ),
        _react2.default.createElement(
            "h1",
            null,
            "404"
        ),
        _react2.default.createElement(
            "p",
            null,
            "Page not found!"
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(1);

var _requireAuth = __webpack_require__(26);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsPage = function (_React$Component) {
    _inherits(AdminsPage, _React$Component);

    function AdminsPage() {
        _classCallCheck(this, AdminsPage);

        return _possibleConstructorReturn(this, (AdminsPage.__proto__ || Object.getPrototypeOf(AdminsPage)).apply(this, arguments));
    }

    _createClass(AdminsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchAdmins();
        }
    }, {
        key: 'renderAdmins',
        value: function renderAdmins() {
            return this.props.admins.map(function (admin) {
                return _react2.default.createElement(
                    'li',
                    { key: admin.id },
                    admin.name
                );
            });
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Admins'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Admins' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            'List of Admins'
                        )
                    ),
                    this.renderAdmins()
                )
            );
        }
    }]);

    return AdminsPage;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        admins: state.admins
    };
}

function loadData(store) {
    return store.dispatch((0, _index.fetchAdmins)());
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _index.fetchAdmins })((0, _requireAuth2.default)(AdminsPage))
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_React$Component) {
        _inherits(RequireAuth, _React$Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                    case null:
                        return _react2.default.createElement(
                            'div',
                            null,
                            'Loading...'
                        );
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react2.default.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var frequencies = [100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150];

var RTInput = function RTInput(f) {
    return _react2.default.createElement(
        "div",
        { key: f, className: "uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom" },
        _react2.default.createElement(
            "label",
            { className: "uk-form-label" },
            _react2.default.createElement("input", { className: "uk-input uk-form-width-small uk-form-small", type: "number", step: "0.01", min: "0" }),
            _react2.default.createElement(
                "span",
                { className: "uk-margin-small-left" },
                f
            )
        )
    );
};

var ReportPage = function (_React$Component) {
    _inherits(ReportPage, _React$Component);

    function ReportPage() {
        _classCallCheck(this, ReportPage);

        return _possibleConstructorReturn(this, (ReportPage.__proto__ || Object.getPrototypeOf(ReportPage)).apply(this, arguments));
    }

    _createClass(ReportPage, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "form",
                { className: "uk-padding-small", "data-uk-grid": true },
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        "title",
                        null,
                        "AR: New report"
                    )
                ),
                _react2.default.createElement(
                    "fieldset",
                    { className: "uk-fieldset" },
                    _react2.default.createElement(
                        "legend",
                        { className: "uk-legend" },
                        "Reverberation time, Hz"
                    ),
                    _react2.default.createElement(
                        "div",
                        { "data-uk-grid": true },
                        _react2.default.createElement(
                            "div",
                            null,
                            frequencies.slice(0, 8).map(function (f) {
                                return RTInput(f);
                            })
                        ),
                        _react2.default.createElement(
                            "div",
                            null,
                            frequencies.slice(8).map(function (f) {
                                return RTInput(f);
                            })
                        )
                    )
                ),
                _react2.default.createElement(
                    "fieldset",
                    { className: "uk-fieldset" },
                    _react2.default.createElement(
                        "legend",
                        { className: "uk-legend" },
                        "Parameters"
                    ),
                    _react2.default.createElement(
                        "div",
                        {
                            className: "uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom" },
                        _react2.default.createElement(
                            "label",
                            { className: "uk-form-label" },
                            _react2.default.createElement("input", { className: "uk-checkbox", type: "checkbox" }),
                            _react2.default.createElement(
                                "span",
                                { className: "uk-margin-small-left" },
                                "Air mode"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        {
                            className: "uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom" },
                        _react2.default.createElement(
                            "label",
                            { className: "uk-form-label" },
                            _react2.default.createElement("input", { className: "uk-input uk-form-width-small uk-form-small", type: "number", step: "0.1",
                                min: "0" }),
                            _react2.default.createElement(
                                "span",
                                { className: "uk-margin-small-left" },
                                "Volume"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        {
                            className: "uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom" },
                        _react2.default.createElement(
                            "label",
                            { className: "uk-form-label" },
                            _react2.default.createElement("input", { className: "uk-input uk-form-width-small uk-form-small", type: "number", step: "0.1",
                                min: "0" }),
                            _react2.default.createElement(
                                "span",
                                { className: "uk-margin-small-left" },
                                "Square"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        {
                            className: "uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom" },
                        _react2.default.createElement(
                            "label",
                            { className: "uk-form-label" },
                            _react2.default.createElement(
                                "div",
                                { "data-uk-form-custom": "target: true" },
                                _react2.default.createElement("input", { type: "file" }),
                                _react2.default.createElement("input", { className: "uk-input uk-form-small uk-form-width-small", type: "text",
                                    placeholder: "Select file", disabled: true }),
                                _react2.default.createElement(
                                    "span",
                                    { className: "uk-margin-small-left" },
                                    "Data source"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ReportPage;
}(_react2.default.Component);

exports.default = {
    component: ReportPage
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storeCreator = storeCreator;

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(30);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function storeCreator(req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    });

    return (0, _redux.createStore)(_reducers.combinedReducers, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combinedReducers = undefined;

var _redux = __webpack_require__(7);

var _users = __webpack_require__(32);

var _auth = __webpack_require__(33);

var _admins = __webpack_require__(34);

var combinedReducers = exports.combinedReducers = (0, _redux.combineReducers)({
    users: _users.users,
    auth: _auth.auth,
    admins: _admins.admins
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.users = users;

var _actions = __webpack_require__(1);

function users() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    // console.log(action);
    switch (action.type) {
        case _actions.FETCH_USERS:
            return action.payload.data;
        case 'USERS_LIST_SORTED':
            return action.payload.users;
        default:
            return state;
    }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auth = auth;

var _actions = __webpack_require__(1);

function auth() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.admins = admins;

var _actions = __webpack_require__(1);

function admins() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map