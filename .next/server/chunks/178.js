exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 9541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ header; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8972);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6420);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);








function header(props) {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let data = {};
    data = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_4___default().reactLocalStorage.getObject('jwt'); //decoder

    let decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(JSON.stringify(data));
    setUser(decoded);
  }, []);

  const disconnect = () => {
    reactjs_localstorage__WEBPACK_IMPORTED_MODULE_4___default().reactLocalStorage.remove('jwt');
    window.location.href = `/`;
  }; // console.log(user)


  const nb_notif = 5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-132958613" + " " + "header orientationH spaceBetween",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "jsx-132958613",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/images/A_Recruit.jpg",
            alt: "LOGO",
            className: "jsx-132958613" + " " + "h_logo"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-132958613" + " " + "orientationH ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          onClick: () => {
            props.callback();
          },
          className: "jsx-132958613" + " " + "notification_z",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/images/icon_notification.png",
            alt: "noti_icon",
            className: "jsx-132958613" + " " + "icon"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "jsx-132958613",
            children: nb_notif
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-132958613" + " " + "user orientationV",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-132958613" + " " + "user_name_z"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "jsx-132958613",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: "jsx-132958613",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: "jsx-132958613",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: "/images/icon_def_usr.png",
                  alt: "noti_icon",
                  className: "jsx-132958613" + " " + "icon"
                }), " " + user.user_name + " " + user.user_firstname]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "jsx-132958613",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: "jsx-132958613" + " " + "center-H",
                  children: "Mon profile"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  onClick: () => {
                    disconnect();
                  },
                  className: "jsx-132958613",
                  children: "Se deconnecter"
                })]
              })]
            })
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "132958613",
      children: [".header.jsx-132958613{background-color:var(--color-primary-light);width:100%;height :40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;}", ".icon.jsx-132958613{width:20px;}", ".notification_z.jsx-132958613{padding-right:0.7em;cursor:pointer;}", ".notification_z.jsx-132958613 span.jsx-132958613{position:relative;top:-6px;left:-5px;width:20px;min-width:15px;font-size:0.8em;padding-left :0.3em;padding-right :0.3em;background-color:green;border-radius:15px;}", ".h_logo.jsx-132958613{max-height:40px;}", ".user_name_z.jsx-132958613{padding-right:1em;padding-left:0.5em;}", ".user.jsx-132958613{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:0.5em;}", ".user.jsx-132958613 ul.jsx-132958613{margin:0;padding:0;list-style:none;}", ".user.jsx-132958613 ul.jsx-132958613 li.jsx-132958613 a.jsx-132958613{color :#fff;-webkit-text-decoration:none;text-decoration:none;cursor :pointer;}", ".user.jsx-132958613 li.jsx-132958613 ul.jsx-132958613{display:none;background-color:var(--color-primary-light);z-index:10;}", ".user.jsx-132958613 li.jsx-132958613 ul.jsx-132958613 li.jsx-132958613{min-height:30px;border-top:1px solid #fff;padding :2px;cursor:pointer;}", ".user.jsx-132958613 li.jsx-132958613 ul.jsx-132958613 li.jsx-132958613:nth-child(1){margin-top:0.7em;}", ".user.jsx-132958613 li.jsx-132958613:hover ul.jsx-132958613{display:block;position:absolute;}", ".user.jsx-132958613 li.jsx-132958613:hover li.jsx-132958613{float:none;}", ".user.jsx-132958613 ul.jsx-132958613 li.jsx-132958613 ul.jsx-132958613 li.jsx-132958613{padding-left:1em;padding-right:1em;padding-top:0.5em;padding-bottom:0.5em;}", ".user.jsx-132958613 ul.jsx-132958613 li.jsx-132958613 ul.jsx-132958613 li.jsx-132958613:hover{background:#999;}", ".user.jsx-132958613 li.jsx-132958613:hover li.jsx-132958613 a.jsx-132958613:hover{background:#555;}"]
    })]
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;