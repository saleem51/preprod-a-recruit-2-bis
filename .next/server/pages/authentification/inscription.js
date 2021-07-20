(function() {
var exports = {};
exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 3426:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ inscription; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "reactjs-localstorage"
var external_reactjs_localstorage_ = __webpack_require__(8972);
var external_reactjs_localstorage_default = /*#__PURE__*/__webpack_require__.n(external_reactjs_localstorage_);
;// CONCATENATED MODULE: ./pages/authentification/inscription.js









function inscription({
  dest
}) {
  const router = (0,router_namespaceObject.useRouter)(); //donne la personne qui veut s'inscrire 

  const {
    0: user_name,
    1: setUserName
  } = (0,external_react_.useState)(false);
  const {
    0: user_firstname,
    1: setUserFirstName
  } = (0,external_react_.useState)(false);
  const {
    0: user_email,
    1: setUserEmail
  } = (0,external_react_.useState)(false);
  const {
    0: user_password1,
    1: setUserpassword1
  } = (0,external_react_.useState)(false);
  const {
    0: user_password2,
    1: setUserpassword2
  } = (0,external_react_.useState)(false);
  const {
    0: user_right,
    1: setUserRight
  } = (0,external_react_.useState)(dest);
  const {
    0: alert,
    1: setAlert
  } = (0,external_react_.useState)(false);

  const inscription = e => {
    e.preventDefault();

    if (user_password1 !== user_password2) {
      setAlert("Le mot de pass n'est pas identique");
    } else if (!user_name || !user_firstname || !user_email || !user_password1 || !user_password2) {
      setAlert(" Veuillez remplir tous les champs pour vous inscrire");
    } else {
      external_axios_default().post('http://localhost:3080/signup', {
        user_name: user_name,
        user_firstname: user_firstname,
        user_email: user_email,
        user_password: user_password1,
        user_right: user_right
      }).then(result => {
        console.log(result);

        if (!result.data.err) {
          console.log(result.data);

          if (router.query.dest === "recruteur") {
            external_axios_default().post('http://localhost:3080/createCompany', {
              //creer une centreprise à son nom
              user_id: result.data.user_info.user_id
            });
          } //creer unser_info


          external_axios_default().post('http://localhost:3080/createUserInfo', {
            //creer une centreprise à son nom
            user_id: result.data.user_info.user_id
          });
          external_reactjs_localstorage_default().reactLocalStorage.setObject('jwt', {
            jwt: result.data.jwt
          });
          external_reactjs_localstorage_default().reactLocalStorage.get('jwt', true);
          window.location.href = `../interface/recruteur`;
        } else {
          setAlert("Deja inscrit");
        }
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Inscription a-recruit"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "login_signin_background center orientationV",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "login-root",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "box-root flex-flex flex-direction--column style1",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "box-root flex-flex flex-direction--column style14",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "left"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "formbg-outer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "formbg",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "formbg-inner padding-horizontal--48",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "padding-bottom--15 color-p",
                    children: "Inscription"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "alert",
                    className: "alert",
                    children: alert && alert
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                    id: "stripe-login",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "mb-3 col",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                          className: "form-label color-p",
                          children: "Nom"
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          id: "inputName",
                          type: "text",
                          className: "form-control inputs",
                          name: "nom",
                          placeholder: "Nom",
                          required: true,
                          onChange: e => {
                            setUserName(e.target.value);
                          }
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          id: "dangerAlert",
                          className: "form-text"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "mb-3 col",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                          className: "form-label color-p",
                          children: "Pr\xE9nom"
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "text",
                          className: "form-control inputs",
                          name: "nom",
                          placeholder: "Pr\xE9nom",
                          required: true,
                          onChange: e => {
                            setUserFirstName(e.target.value);
                          }
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "form-text"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "row",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "mb-3 col",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                          className: "form-label color-p",
                          children: "e-mail"
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "email",
                          className: "form-control inputs",
                          name: "email",
                          placeholder: "e-mail",
                          required: true,
                          onChange: e => {
                            setUserEmail(e.target.value);
                          }
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "form-text"
                        })]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "col mb-3",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                          className: "col-form-label color-p",
                          children: "Mot de passe"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "col",
                          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                            type: "password",
                            name: "password",
                            className: "form-control",
                            placeholder: "Mot de passe",
                            onChange: e => {
                              setUserpassword1(e.target.value);
                            }
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "col mb-3",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                          className: "col-form-label color-p",
                          children: "Confirmation"
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "col",
                          children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                            type: "password",
                            name: "passwordConfirm",
                            className: "form-control",
                            placeholder: "Confirmez mot de passe",
                            onChange: e => {
                              setUserpassword2(e.target.value);
                            }
                          })
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "center",
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "btn btn-primary mt-4 mb-4 ",
                        onClick: e => {
                          inscription(e);
                        },
                        children: "Inscription"
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "footer-link padding-top--24",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: ["Vous avez d\xE9ja un compte ?", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: {
                      pathname: "/authentification/connexion",
                      query: {
                        dest: dest
                      }
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: " Se connecter"
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "listing padding-top--24 padding-bottom--24 flex-flex center-center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/inscription",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: " \xA9 A recruite"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/inscription",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: " Contacte"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/inscription",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        children: " Politique de confidentialit\xE9"
                      })
                    })
                  })]
                })]
              })]
            })]
          })
        })
      })
    })]
  });
}
const getServerSideProps = async ({
  query
}) => {
  const dest = query.dest;
  return {
    props: {
      dest
    }
  };
};

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 8972:
/***/ (function(module) {

"use strict";
module.exports = require("reactjs-localstorage");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(3426); });
module.exports = __webpack_exports__;

})();