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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_screens_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/screens/home */ \"./src/screens/home.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3000;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_screens_home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Card = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.satelliteInfo.links.mission_patch_small\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission base-font bold-weight\"\n  }, props.satelliteInfo.mission_name, \" # \", props.satelliteInfo.flight_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"base-font bold-weight\"\n  }, \"Mission Ids: \"), props.satelliteInfo.mission_id && props.satelliteInfo.mission_id.length > 0 ? missionId(props.satelliteInfo) : unAvailable()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"base-font bold-weight\"\n  }, \"Launch Year:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"pl-2\"\n  }, !!props.satelliteInfo.launch_year ? props.satelliteInfo.launch_year : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"base-font bold-weight\"\n  }, \"Successful Launch:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"pl-2\"\n  }, props.satelliteInfo.launch_success ? 'True' : 'False')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"base-font bold-weight\"\n  }, \"Successful Landing:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"pl-2\"\n  }, !!props.satelliteInfo.launch_landing ? props.satelliteInfo.launch_landing : '-')));\n};\n\nfunction missionId(info) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, info.mission_id.map(item => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, item);\n  }));\n}\n\nfunction unAvailable() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"unavailable\"\n  }, \"Unavailable\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/components/card.js?");

/***/ }),

/***/ "./src/components/filterCard.js":
/*!**************************************!*\
  !*** ./src/components/filterCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass FilterCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      yearOptions: [],\n      launchOptions: [],\n      landingOptions: []\n    };\n  }\n\n  componentDidMount() {\n    // Initialising config\n    this.setYears();\n    this.setLaunchOptions();\n    this.setLandingOptions();\n  }\n\n  setYears() {\n    this.setState({\n      yearOptions: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]\n    });\n  }\n\n  setLaunchOptions() {\n    this.setState({\n      launchOptions: ['True', 'False']\n    });\n  }\n\n  setLandingOptions() {\n    this.setState({\n      landingOptions: ['True', 'False']\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filterCard p-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"base-font\"\n    }, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"text-center underline mb-2\"\n    }, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row col-lg-12 text-center mx-0\"\n    }, this.state.yearOptions.map(item => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-lg-5 year m-1\",\n        onClick: () => this.props.eventHandler({\n          eventType: 'year',\n          value: item\n        })\n      }, item);\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"text-center underline mb-2\"\n    }, \"Successful Launch\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row col-lg-12 text-center mx-0\"\n    }, this.state.launchOptions.map(item => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-lg-5 year m-1\",\n        onClick: () => this.props.eventHandler({\n          eventType: 'launch',\n          value: item\n        })\n      }, item);\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"text-center underline mb-2\"\n    }, \"Successful Landing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row col-lg-12 text-center mx-0\"\n    }, this.state.landingOptions.map(item => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-lg-5 year m-1\",\n        onClick: () => this.props.eventHandler({\n          eventType: 'landing',\n          value: item\n        })\n      }, item);\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCard);\n\n//# sourceURL=webpack:///./src/components/filterCard.js?");

/***/ }),

/***/ "./src/screens/home.js":
/*!*****************************!*\
  !*** ./src/screens/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_filterCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filterCard */ \"./src/components/filterCard.js\");\n/* harmony import */ var _services_launchService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/launchService */ \"./src/services/launchService.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"filterEvent\", obj => {\n      switch (obj.eventType) {\n        case 'year':\n          this.setState({\n            launch_year: obj.value\n          }, () => {\n            this.loadData();\n          });\n          break;\n\n        case 'launch':\n          this.setState({\n            launch_success: obj.value\n          }, () => {\n            this.loadData();\n          });\n          break;\n\n        case 'landing':\n          this.setState({\n            land_success: obj.value\n          }, () => {\n            this.loadData();\n          });\n          break;\n      }\n    });\n\n    this.state = {\n      launchedSatellites: [],\n      launch_year: null,\n      launch_success: null,\n      land_success: null\n    };\n    this.filterEvent = this.filterEvent.bind(this);\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  async loadData() {\n    var that = this;\n    const queryParams = {};\n\n    if (this.state.launch_year) {\n      queryParams.launch_year = this.state.launch_year;\n    }\n\n    if (this.state.launch_success) {\n      queryParams.launch_success = this.state.launch_success;\n    }\n\n    if (this.state.land_success) {\n      queryParams.land_success = this.state.land_success;\n    }\n\n    await Object(_services_launchService__WEBPACK_IMPORTED_MODULE_3__[\"launchService\"])(queryParams).then(result => {\n      that.setState({\n        launchedSatellites: result\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"app p-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"SpaceX Launch Programs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"mainDiv row d-flex\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-lg-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_filterCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      eventHandler: this.filterEvent\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row col-lg-10\"\n    }, this.state.launchedSatellites.map(item => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"d-flex col-lg-3 mb-3\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        satelliteInfo: item\n      }));\n    })), \"\\xA0\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/screens/home.js?");

/***/ }),

/***/ "./src/services/launchService.js":
/*!***************************************!*\
  !*** ./src/services/launchService.js ***!
  \***************************************/
/*! exports provided: launchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchService\", function() { return launchService; });\n/* harmony import */ var _utils_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/apiHelper */ \"./src/utils/apiHelper.js\");\n\nfunction launchService(params = null) {\n  return Object(_utils_apiHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: 'get',\n    params: params\n  });\n}\n\n//# sourceURL=webpack:///./src/services/launchService.js?");

/***/ }),

/***/ "./src/utils/apiHelper.js":
/*!********************************!*\
  !*** ./src/utils/apiHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';\n\nvar apiHelper = function (config) {\n  var methodType = config.method || 'get';\n  var params = config.params || {};\n  var url = baseUrl;\n  var config = {\n    method: methodType,\n    headers: {\n      \"Content-type\": \"application/json; charset=UTF-8\"\n    }\n  };\n\n  function status(response) {\n    if (response.status == 200) {\n      return Promise.resolve(response);\n    } else {\n      return Promise.reject(new Error(response.statusText));\n    }\n  }\n\n  function json(response) {\n    return response.json();\n  }\n\n  if (methodType == 'get' && !!params && Object.keys(params).length > 0) {\n    var query = Object.keys(params).map(k => k + '=' + params[k]).join('&');\n    url += '&' + query;\n  }\n\n  return fetch(url, config).then(status).then(json);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiHelper);\n\n//# sourceURL=webpack:///./src/utils/apiHelper.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });