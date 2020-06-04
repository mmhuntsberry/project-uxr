module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1DEj":
/***/ (function(module, exports) {



/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ _app_MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "carbon-components-react"
var external_carbon_components_react_ = __webpack_require__("8bgd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "carbon-components-react/lib/components/UIShell"
var UIShell_ = __webpack_require__("cqSp");

// CONCATENATED MODULE: ./components/GlobalHeader/GlobalHeader.js
var __jsx = external_react_default.a.createElement;
 // import { Link, useLocation } from "react-router-dom";





const GlobalHeader = () => {
  const {
    0: isSideNavExpanded,
    1: setIsNavExpanded
  } = Object(external_react_["useState"])(false);

  const onClickSideNavExpand = () => {
    setIsNavExpanded(!isSideNavExpanded);
  }; // for active tabs
  // const location = useLocation();


  const location = Object(router_["useRouter"])();

  const isCurrent = linkPath => {
    return location.pathname === linkPath ? true : false;
  };

  Object(external_react_["useEffect"])(() => {// const location = useLocation();
  }, [location]);
  return __jsx(external_react_default.a.Fragment, null, __jsx(UIShell_["Header"], {
    "aria-label": "IBM Platform Name"
  }, __jsx(UIShell_["SkipToContent"], null), __jsx(UIShell_["HeaderMenuButton"], {
    "aria-label": "Open menu",
    onClick: onClickSideNavExpand,
    isActive: isSideNavExpanded
  }), __jsx(UIShell_["HeaderName"], {
    href: "/",
    prefix: "IBM"
  }, "User Research"), __jsx(UIShell_["HeaderNavigation"], {
    "aria-label": "IBM User Research",
    isCurrentPage: true
  }, __jsx(UIShell_["HeaderMenuItem"], {
    href: "/",
    isCurrentPage: isCurrent("/")
  }, "About"), __jsx(UIShell_["HeaderMenuItem"], {
    href: "/faq",
    isCurrentPage: isCurrent("/faq")
  }, "FAQ")), __jsx(UIShell_["HeaderGlobalBar"], null, __jsx(UIShell_["HeaderGlobalAction"], {
    "aria-label": "Search",
    onClick: () => {}
  })), __jsx(UIShell_["SideNav"], {
    isChildOfHeader: true,
    "aria-label": "Side navigation",
    expanded: isSideNavExpanded,
    isPersistent: false
  }, __jsx(UIShell_["SideNavItems"], null, __jsx(UIShell_["SideNavLink"], {
    element: external_carbon_components_react_["Link"],
    href: "/",
    isActive: isCurrent("/")
  }, "About"), __jsx(UIShell_["SideNavLink"], {
    element: external_carbon_components_react_["Link"],
    href: "/faq",
    isActive: isCurrent("/faq")
  }, "FAQ")))));
};

/* harmony default export */ var GlobalHeader_GlobalHeader = (GlobalHeader);
// CONCATENATED MODULE: ./components/GlobalHeader/index.js

/* harmony default export */ var components_GlobalHeader = (GlobalHeader_GlobalHeader);
// EXTERNAL MODULE: ./assets/svg/svg-footer-logo-ibm.svg
var svg_footer_logo_ibm = __webpack_require__("fnYN");
var svg_footer_logo_ibm_default = /*#__PURE__*/__webpack_require__.n(svg_footer_logo_ibm);

// CONCATENATED MODULE: ./components/GlobalFooter/GlobalFooter.js
var GlobalFooter_jsx = external_react_default.a.createElement;




const GlobalFooter = () => {
  return GlobalFooter_jsx("footer", {
    className: "bx--row section footer"
  }, GlobalFooter_jsx("div", {
    className: "bx--row footer__list-container",
    role: "group"
  }, GlobalFooter_jsx("div", {
    className: "bx--col-md-1 bx--offset-lg-1 bx--col-lg-1"
  }), GlobalFooter_jsx("ul", {
    className: "bx--col-lg-2 bx--col-md-2 bx--col-sm-8 footer__list"
  }, GlobalFooter_jsx("li", {
    className: "footer__list-item"
  }, GlobalFooter_jsx(external_carbon_components_react_["Link"], {
    className: "footer__link",
    href: "#",
    role: "link"
  }, "Privacy")), GlobalFooter_jsx("li", {
    className: "footer__list-item"
  }, GlobalFooter_jsx(external_carbon_components_react_["Link"], {
    className: "footer__link",
    href: "#",
    role: "link"
  }, "Terms of use")), GlobalFooter_jsx("li", {
    className: "footer__list-item"
  }, GlobalFooter_jsx(external_carbon_components_react_["Link"], {
    className: "footer__link",
    href: "#",
    role: "link"
  }, "ibm.com"))), GlobalFooter_jsx("ul", {
    className: "bx--col-lg-4 bx--col-md-2 bx--col-sm-8 footer__list"
  }, GlobalFooter_jsx("li", {
    className: "footer__list-item"
  }, GlobalFooter_jsx(external_carbon_components_react_["Link"], {
    className: "footer__link",
    href: "#",
    role: "link"
  }, "Update information")), GlobalFooter_jsx("li", {
    className: "footer__list-item"
  }, GlobalFooter_jsx(external_carbon_components_react_["Link"], {
    className: "footer__link",
    href: "#",
    role: "link"
  }, "Opt out"))), GlobalFooter_jsx("div", {
    className: "bx--col-lg-3 bx--col-md-2 bx--col-sm-8 footer__content"
  }, GlobalFooter_jsx("p", {
    className: "footer__content-text"
  }, "Have questions? Please", " ", GlobalFooter_jsx(external_carbon_components_react_["Link"], {
    className: "footer__link footer__link--email",
    href: "#",
    role: "link"
  }, "email us.")), GlobalFooter_jsx("p", {
    className: "footer__content-text"
  }, "Copyright \xA9 2020 IBM"))), GlobalFooter_jsx("img", {
    className: "bx--col-lg-16 footer__logo",
    src: svg_footer_logo_ibm_default.a,
    alt: "IBM 8 bar logo"
  }));
};

/* harmony default export */ var GlobalFooter_GlobalFooter = (GlobalFooter);
// CONCATENATED MODULE: ./components/GlobalFooter/index.js

/* harmony default export */ var components_GlobalFooter = (GlobalFooter_GlobalFooter);
// CONCATENATED MODULE: ./components/Layout/Layout.js
var Layout_jsx = external_react_default.a.createElement;




class Layout_Layout extends external_react_["Component"] {
  render() {
    const {
      children
    } = this.props;
    return Layout_jsx("div", {
      className: "uxr-app"
    }, Layout_jsx(components_GlobalHeader, null), children, Layout_jsx(components_GlobalFooter, null));
  }

}

/* harmony default export */ var components_Layout_Layout = (Layout_Layout);
// EXTERNAL MODULE: ./styles.scss
var styles = __webpack_require__("1DEj");

// EXTERNAL MODULE: ./pages/index.scss
var pages = __webpack_require__("kxKB");

// EXTERNAL MODULE: ./pages/faq/faq.scss
var faq = __webpack_require__("U63M");

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;






class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(components_Layout_Layout, null, _app_jsx(Component, pageProps));
  }

}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8bgd":
/***/ (function(module, exports) {

module.exports = require("carbon-components-react");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "U63M":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cqSp":
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell");

/***/ }),

/***/ "fnYN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iRm9vdGVyLW1vZHVsZS0tbG9nby0tM290Sk0iIHdpZHRoPSI4MSIgaGVpZ2h0PSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNMCAzMmgxNS42ODl2LTIuMDM4SDB6TTAgMjcuNzIxaDE1LjY4OXYtMi4wMzhIMHpNNC40ODMgMjMuNDQyaDYuNzI0di0yLjAzN0g0LjQ4M3pNNC40ODMgMTkuMTY0aDYuNzI0di0yLjAzOEg0LjQ4M3pNNC40ODMgMTQuODg1aDYuNzI0di0yLjAzN0g0LjQ4M3pNNC40ODIgMTAuNjA2aDYuNzI0VjguNTY4SDQuNDgyek0wIDYuMzI3aDE1LjY4OVY0LjI5SDB6TTAgMi4wNDloMTUuNjg5Vi4wMTFIMHpNMTcuOTMgMjkuOTYzVjMyaDE2LjUwNGE4LjUyMSA4LjUyMSAwIDAgMCA1LjU0LTIuMDM3SDE3Ljkzek0xNy45MyAyNS42ODN2Mi4wMzhoMjMuOTE0YTguNTM1IDguNTM1IDAgMCAwIC44NS0yLjAzOEgxNy45M3pNMjIuNDEyIDIzLjQ0Mmg2LjcyNHYtMi4wMzdoLTYuNzI0ek00MC4xMjQgMTcuMTI2SDIyLjQxMnYyLjAzOEg0MS43N2E4LjYyIDguNjIgMCAwIDAtMS42NDUtMi4wMzhNMjIuNDEzIDEyLjg0OHYyLjAzNmgxNy43ODZhOC42MTIgOC42MTIgMCAwIDAgMS42NDQtMi4wMzdoLTE5LjQzek00Mi42OTMgNi4zMjdhOC40NDcgOC40NDcgMCAwIDAtLjg1LTIuMDM3SDE3LjkzdjIuMDM3aDI0Ljc2M3pNMzkuOTc0IDIuMDQ5YTguNTIxIDguNTIxIDAgMCAwLTUuNTQtMi4wMzdIMTcuOTN2Mi4wMzdoMjIuMDQ0ek0yMi40MTIgMTAuNjA2aDYuNzI0VjguNTY4aC02LjcyNHpNMzUuNDUzIDEwLjYwNmg3LjI5YTguNjAzIDguNjAzIDAgMCAwIC4yNDgtMi4wMzhoLTcuNTM4djIuMDM4ek0zNS40NTMgMjEuNDA1djIuMDM3aDcuNTM4YzAtLjcwMy0uMDktMS4zODQtLjI0OC0yLjAzN2gtNy4yOXpNNTcuNDU3IDBINDQuODI1djIuMDM4aDEzLjM0ek00NC44MjYgMzJoMTEuMjF2LTIuMDM4aC0xMS4yMXpNNDQuODI2IDI3LjcyaDExLjIxdi0yLjAzOGgtMTEuMjF6TTQ5LjMwOSAyMy40MzloNi43Mjd2LTIuMDM4aC02LjcyN3pNNDkuMzA5IDE5LjE1OWg2LjcyN3YtMi4wMzhoLTYuNzI3ek02OS40ODggMzJoMTEuMjF2LTIuMDM4aC0xMS4yMXpNNjkuNDg4IDI3LjcyaDExLjIxdi0yLjAzOGgtMTEuMjF6TTY5LjQ4OCAyMy40MzloNi43MjZ2LTIuMDM4aC02LjcyNnpNNjkuNDg3IDE5LjE1OWg2LjcyNnYtMi4wMzhoLTYuNzI2ek02OS40ODggMTQuODc5aDYuNzI2VjEyLjg0SDYzLjYwNmwtLjcwNyAyLjAzOGg1LjkwM2wuNjg2LTEuOTR6TTYxLjkxNiAxMi44NEg0OS4zMXYyLjAzOWg2LjcyNnYtMS45NGwuNjg2IDEuOTRoNS45MDN6TTc2LjIxMyA4LjU2SDY1LjA5MWwtLjcwNyAyLjAzOGgxMS44M3pNNjguMDYgMGwtLjcwNiAyLjAzOGgxMy4zNDRWMHpNNjIuNzU3IDMybC43Mi0yLjAzOGgtMS40MzJ6TTYxLjI1NCAyNy43MmgzLjAxNWwuNzItMi4wMzhoLTQuNDU1ek01OS43NDMgMjMuNDRoNi4wMzdsLjcyLTIuMDM5aC03LjQ3NnpNNTguMjMyIDE5LjE1OWg5LjA2bC43MTktMi4wMzhoLTEwLjV6TTQ5LjMwOSAxMC41OThoMTEuODNsLS43MDctMi4wMzhINDkuMzA5ek02NS44NjggNi4zMThoMTQuODNWNC4yOEg2Ni41NzZ6TTU4Ljk0NyA0LjI4SDQ0LjgyNnYyLjAzOGgxNC44Mjh6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kxKB":
/***/ (function(module, exports) {



/***/ })

/******/ });