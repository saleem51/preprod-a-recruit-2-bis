exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 5494:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ recrutor; }
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
// EXTERNAL MODULE: ./components/header/header.js
var header = __webpack_require__(9541);
// EXTERNAL MODULE: ./components/footer/footer.js
var footer = __webpack_require__(3246);
;// CONCATENATED MODULE: ./components/layouts/show_hide_layout.js



function show_hide_layout(props) {
  const {
    0: show_todo,
    1: set_show_todo
  } = (0,external_react_.useState)(false); // console.log(  show_todo+" and "+props.show_hide )

  (0,external_react_.useEffect)(() => {
    if (props.show_hide === true) {
      set_show_todo(true);
    } else {
      set_show_todo(false);
    }
  }, [props.show_hide]);

  const show_or_hide = () => {
    set_show_todo(!show_todo);

    if (props.show_hide && props.callback) {
      props.callback(!show_todo);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "show_hide_layout orientationV center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "head w100 orientationH spaceBetween center",
        onClick: () => show_or_hide(),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "demandes_head text center",
          children: props.title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "direction_arrow_z orientationH fromRight center",
          children: [props.statut && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "button sh_button" + (props.statut === "A TERMINER" ? " unfinished " : " finished ") + (!show_todo ? " " : " bottom5"),
            children: props.statut
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "direction_arrow" + (!show_todo ? " down" : " up")
              })
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("form", {
        encType: "multipart/form-data",
        children: (show_todo || props.show_hide) && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w100",
          children: props.children
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/dist/client/link.js
var client_link = __webpack_require__(6071);
;// CONCATENATED MODULE: ./components/layouts/wrap_list_layout.js




function wrap_list_layout(props) {
  /*
      @props : les paramêtres passés au composant
      @props.title : le titre à passer au composant comme proprité
      @props.linkForMore : lien de redirection vers une liste plus complête
       pour l'implémentation voir showçhide_layout dans components layouts
  */
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "show_hide_layout orientationV spaceBetween",
    children: [props.title && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "demandes_head",
      children: props.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "demande_list w100 orientationH  wrap",
      children: props.children
    }), props.linkForMore && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w100 orientationH fromRight",
      children: /*#__PURE__*/jsx_runtime_.jsx(client_link.default, {
        href: props.linkForMore,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "voir plus \xBB"
        })
      })
    })]
  });
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/others/agenda.js



function agenda(props) {
  (0,external_react_.useEffect)(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "schedule_form",
    style: {
      margin: '0 auto',
      width: '100%'
    },
    children: props.url ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "calendly-inline-widget",
      "data-url": props.url,
      style: {
        marginTop: '1em',
        width: '90%',
        minWidth: '300px',
        height: '40em'
      }
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "VEUILLEZ CHOISIR UN CONSULTANT DANS LA SECTION INFO SUR MON ENTREPRISE"
    })
  });
}
/*
export default class Calendly extends Component {

    state ={
      consultant_calendly:''    
    }

    componentDidMount() {
      

    }

  

    render({}){
      console.log(url)
      return (
          
          
      );
    }
  }*/
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(6420);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);
// EXTERNAL MODULE: external "reactjs-localstorage"
var external_reactjs_localstorage_ = __webpack_require__(8972);
var external_reactjs_localstorage_default = /*#__PURE__*/__webpack_require__.n(external_reactjs_localstorage_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/notification/notification.js





class notification extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1691505827" + " " + "orientationV notification center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1691505827" + " " + "w100 not_text_zone",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-1691505827" + " " + "not_text orientationH",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-1691505827" + " " + "not_icon"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-1691505827",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-1691505827",
                children: this.props.text
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-1691505827",
                children: this.props.date
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "1691505827",
        children: [".not_head.jsx-1691505827{cursor:pointer;width:95%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".notification.jsx-1691505827{cursor:pointer;margin:1em auto;width:100%;border-bottom:1px solid #ccc;min-height:50px;text-align:left;padding-bottom:1em;}", ".not_text_zone.jsx-1691505827{padding:1em;}", ".not_icon.jsx-1691505827{background-image:url('/images/icon_info.png');background-position:top;background-repeat:no-repeat;background-size:10px;padding-left:20px;margin-top:5px;}"]
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/notification/bigSizeScreenNotif.js






function bigSizeScreenNotif(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [props.showHide && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2345940868" + " " + "bigSizeNotif",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2345940868",
        children: [/*#__PURE__*/jsx_runtime_.jsx(notification, {
          text: " Soyez les bienvenue !!! A-RECRUIT vous souhaite la bienvenue dans son vaste r\xE9seau . Nous nous engageons \xE0 faire de votre satisfaction notre pierre angulaire. ",
          date: "Hier \xE0 21:47"
        }), /*#__PURE__*/jsx_runtime_.jsx(notification, {
          text: " Soyez les bienvenue !!! A-RECRUIT vous souhaite la bienvenue dans son vaste r\xE9seau . Nous nous engageons \xE0 faire de votre satisfaction notre pierre angulaire.",
          date: "Hier \xE0 21:47"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2345940868" + " " + "center font-small",
          children: "\xA9 A-RECRUIT"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2345940868",
      children: [".bigSizeNotif.jsx-2345940868{color:#3c4257;width:70vw;max-width:400px;background-color:#fff;box-shadow:rgba(0,0,0,0.35) 0px 5px 15px;border-radius:3px;position:absolute;right:10px;top:30px;}", ".notif_head.jsx-2345940868{padding:2em;padding-bottom:0em;}", ".close.jsx-2345940868{cursor:pointer;}", "@-webkit-keyframes slidein-jsx-2345940868{from{height:10%;}to{height:50vw;}}", "@keyframes slidein-jsx-2345940868{from{height:10%;}to{height:50vw;}}", "@media screen and (max-width:500px){.bigSizeNotif.jsx-2345940868{width:100vw;}@-webkit-keyframes slidein-jsx-2345940868{from{width:0%;}to{width:100vw;}}@keyframes slidein-jsx-2345940868{from{width:0%;}to{width:100vw;}}}"]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/interface/recruteur/recrutor.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function recrutor() {
  let reloade = true;
  let loaded = true;
  /* DONNÉES PRINCIPALES */

  const {
    0: europe_country,
    1: setEuropeCountry
  } = (0,external_react_.useState)([]);
  const {
    0: departments,
    1: setDepartments
  } = (0,external_react_.useState)([]);
  const {
    0: company_info,
    1: setCompanyInfo
  } = (0,external_react_.useState)([]);
  const {
    0: company_fillededJobs,
    1: setCompanyFilledeJobs
  } = (0,external_react_.useState)([]);
  const {
    0: company_unFilledJobs,
    1: setCompanyUnfillededJobs
  } = (0,external_react_.useState)([]);
  const {
    0: consultants,
    1: setConsultant
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const localdata = external_reactjs_localstorage_default().reactLocalStorage.getObject('jwt');
    const loded_user = external_jwt_decode_default()(JSON.stringify(localdata)); ///Chargement des données régionnaux pour les formulaires

    external_axios_default().get("https://restcountries.eu/rest/v2/region/europe?fields=name", {
      europe: europe_country
    }).then(reponse => {
      setEuropeCountry(reponse.data);
    }); //console.log(loded_user.user_id)
    ///Chargement des donnéés concernant l'utilisateur

    external_axios_default().post("http://localhost:3080/getCompanyInfo", {
      user_id: loded_user.user_id
    }).then(reponse => {
      setCompanyInfo(reponse.data);

      if (reponse.data.company_id) {
        external_axios_default().post("http://localhost:3080/getUnFillededJobLimit4", {
          company_id: reponse.data.company_id
        }).then(reponse => {
          setCompanyUnfillededJobs(reponse.data);
        });
        external_axios_default().post("http://localhost:3080/getFillededJobLimit4", {
          company_id: reponse.data.company_id
        }).then(reponse => {
          setCompanyFilledeJobs(reponse.data);
        });
        external_axios_default().post("http://localhost:3080/getConsultantByDepartment", {
          company_department: reponse.data.company_department
        }).then(reponse => {
          setConsultant(reponse.data);
        });
      }
    });
  }, [reloade]); //Recupérer le calendly du consultant de l'entreprise

  const {
    0: url,
    1: setUrl
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    external_axios_default().post("http://localhost:3080/getConsultantCalendly", {
      consultant_id: company_info.consultant_id
    }).then(reponse => {
      setUrl(`https://calendly.com/${reponse.data.user_calendly}/30min`);
    });
  }, [company_info.consultant_id]);

  const loadConsultant = department => {
    external_axios_default().post("http://localhost:3080/getConsultantByDepartment", {
      company_department: department
    }).then(reponse => {
      setConsultant(reponse.data);
    });
  }; //Chargement des départements  et des villes :


  let cities = [];

  const loadDepartment = coutry => {
    if (coutry === "France") {
      external_axios_default().get("https://geo.api.gouv.fr/departements").then(reponse => {
        setDepartments(reponse.data);
      });
    }
  };

  const loadCity = code => {
    external_axios_default().get(`https://geo.api.gouv.fr/departements/${code}/communes`).then(reponse => {
      villes = reponse.data;
    });
    console.log({
      "villes": villes
    });
  };
  /* FIN */

  /* DEBUT : FORMULAIRES */


  const diplomes = ['CAP', 'BEP', 'BAC', 'BTS/DUT', 'Licence', 'Master1', 'Master2', 'Doctorat'];
  const niveauEtudes = ['BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'BAC+6', 'BAC+7', 'BAC+8'];
  const experience = ['débutant', '1 an à 2 ans', '2 ans à 3 ans', '3 ans à 4 ans', '4 ans à 5 ans', '5 ans et plus (Senior)'];
  (0,external_react_.useEffect)(() => {}, [reloade]);
  /* FIN */

  /* DEBUT : Formulair 1 ( TERMINER L'INSCRIPTION) */
  //DECLARATION

  let company_id = company_info.company_id;
  const {
    0: company_name,
    1: setCompanyName
  } = (0,external_react_.useState)(company_info.company_name);
  const {
    0: company_nationality,
    1: setCompanyNationality
  } = (0,external_react_.useState)(company_info.company_nationality);
  const {
    0: company_representative_status,
    1: setCompanyRepresentativeStatus
  } = (0,external_react_.useState)(company_info.company_representative_status);
  const {
    0: company_rcs,
    1: setCompanyRcs
  } = (0,external_react_.useState)(company_info.company_rcs);
  const {
    0: company_headquarters,
    1: setCompanyHeadquarters
  } = (0,external_react_.useState)(company_info.company_headquarters);
  const {
    0: company_zip_code,
    1: setCompanyZipCode
  } = (0,external_react_.useState)(company_info.company_zip_code);
  const {
    0: company_address,
    1: setCompanyAddress
  } = (0,external_react_.useState)(company_info.company_address);
  const {
    0: company_department,
    1: setCompanyDepartment
  } = (0,external_react_.useState)(company_info.company_department);
  const {
    0: company_phone_number,
    1: setCompanyPhoneNumber
  } = (0,external_react_.useState)(company_info.company_phone_number);
  const {
    0: company_city,
    1: setCompanyCity
  } = (0,external_react_.useState)(company_info.company_city);
  const {
    0: company_country,
    1: setCompanyCountry
  } = (0,external_react_.useState)(company_info.company_country);
  const {
    0: is_partner,
    1: setIsPartner
  } = (0,external_react_.useState)(company_info.is_partner);
  const {
    0: partner_type,
    1: setPartnerType
  } = (0,external_react_.useState)(company_info.partner_type);
  const {
    0: consultant_id,
    1: setConsultantId
  } = (0,external_react_.useState)(company_info.consultant_id); //MISE A JOUR AU CHARGEMENT DE LA PAGE

  (0,external_react_.useEffect)(() => {
    if (company_info.company_country === "France") {
      external_axios_default().get("https://geo.api.gouv.fr/departements").then(reponse => {
        setDepartments(reponse.data);
      });
    }

    company_id = company_info.company_id;
    setCompanyName(company_info.company_name);
    setCompanyNationality(company_info.company_nationality);
    setCompanyRepresentativeStatus(company_info.company_representative_status);
    setCompanyRcs(company_info.company_rcs);
    setCompanyHeadquarters(company_info.company_headquarters);
    setCompanyZipCode(company_info.company_zip_code);
    setCompanyAddress(company_info.company_address);
    setCompanyDepartment(company_info.company_department);
    setCompanyPhoneNumber(company_info.company_phone_number);
    setCompanyCity(company_info.company_city);
    setCompanyCountry(company_info.company_country);
    setIsPartner(company_info.is_partner);
    setPartnerType(company_info.partner_type);
    setConsultantId(company_info.consultant_id);
  }, [company_info]); //FONCTION DE MISE A JOUR DES INFOS SUR L'ENTREPRISE

  const finalization = e => {
    e.preventDefault();

    if (true) {
      external_axios_default().post('http://localhost:3080/updateCompanyInfo', {
        company_id: company_id,
        company_name: company_name,
        company_nationality: company_nationality,
        company_representative_status: company_representative_status,
        company_rcs: company_rcs,
        company_address: company_address,
        company_department: company_department,
        company_phone_number: company_phone_number,
        company_headquarters: company_headquarters,
        company_zip_code: company_zip_code,
        company_city: company_city,
        company_country: company_country,
        is_partner: is_partner,
        partner_type: partner_type,
        consultant_id: consultant_id
      }).then(resutlt => {
        if (!resutlt.err) {
          reloade = !reloade;
        } else {
          Alert("Une erreur s'est produite veuillez revérier tout les champs et réessayez");
        }
      });
    }

    setShow_hide1(false);
  }; //Verifier si les infos sur l'entreprise sont tous données


  var register_todo = "A TERMINER";

  if (company_name === "false" || company_nationality === "false" || company_phone_number === "false" || company_headquarters === "false" || company_address === "false" || company_department === "false" || company_city === "false" || company_rcs === "false" || company_zip_code === "false" || company_country === "false" || company_representative_status === "false" || !company_name || !company_nationality || !company_phone_number || !company_headquarters || !company_address || !company_department || !company_city || !company_rcs || !company_zip_code || !company_country | !company_representative_status) {
    register_todo = "A TERMINER";
  } else {
    register_todo = "TERMINÉ";
  }
  /* FIN */

  /*DEBUT : FORMULAIRE 2 AJOUT D'UNE  DEMANDE D'OFFRE D'EMPLOIE */


  const {
    0: job_title,
    1: setJobTitle
  } = (0,external_react_.useState)("JOB");
  const {
    0: job_country,
    1: setJobCountry
  } = (0,external_react_.useState)('RPC');
  const {
    0: job_department,
    1: setJobDepartment
  } = (0,external_react_.useState)('Yunan');
  const {
    0: job_required_grad,
    1: setJobRequiredGrade
  } = (0,external_react_.useState)('Master');
  const {
    0: job_required_experience,
    1: setJobRequiredExperience
  } = (0,external_react_.useState)('25');
  const {
    0: job_required_level,
    1: setJobRequiredLevel
  } = (0,external_react_.useState)('24');
  const {
    0: job_city,
    1: setJobCity
  } = (0,external_react_.useState)("Shanghai");
  const {
    0: job_zip_code,
    1: setJobZipCode
  } = (0,external_react_.useState)("55452");
  const {
    0: job_origin,
    1: setJobOrigin
  } = (0,external_react_.useState)("test");
  const {
    0: job_statut,
    1: setJobStatut
  } = (0,external_react_.useState)("available");
  const {
    0: job_contract_type,
    1: setJobContractType
  } = (0,external_react_.useState)("CDI");
  const {
    0: job_presentation_pdf,
    1: setJobPresentationPDF
  } = (0,external_react_.useState)(null);
  const {
    0: job_presentation_video,
    1: setJobPresentationVideo
  } = (0,external_react_.useState)('video');

  const loaded_file = (e, result) => {
    const file = e.target.files[0];
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        let data = e.target.result;
        resolve({
          fileName: file.name,
          buffer: data
        });
      };

      reader.onerror = err => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  };

  const job_presentation_pdf_info = e => {
    loaded_file(e).then(result => {
      setJobPresentationPDF(_objectSpread(_objectSpread({}, result), {}, {
        id: company_id
      }));
      console.log(_objectSpread(_objectSpread({}, result), {}, {
        id: company_id
      }));
    });
    /* const selectedFile = e.target.files[0]
      const formData = new FormData();
    formData.append('File', selectedFile);
      console.log(formData.values())
      setJobPresentationPDF(formData)*/
  };

  const newJobPosting = e => {
    console.log(job_presentation_pdf);
    e.preventDefault();

    if (!job_title || !job_contract_type || !job_country || !job_department || !job_required_grad || !job_required_level || !job_required_experience || !job_presentation_pdf || !job_presentation_video || !job_city || !job_zip_code || !job_origin || !job_statut) {
      alert('Veuillez remplire tout les champs');
    } else {
      external_axios_default().post('http://localhost:3080/createJob', {
        job_title: job_title,
        job_contract_type: job_contract_type,
        job_country: job_country,
        job_department: job_department,
        job_required_grad: job_required_grad,
        job_required_level: job_required_level,
        job_required_experience: job_required_experience,
        job_presentation_pdf: job_presentation_pdf,
        job_presentation_video: job_presentation_video,
        job_city: job_city,
        job_zip_code: job_zip_code,
        job_creator_id: company_id,
        job_origin: job_origin,
        job_statut: job_statut
      }).then(resutlt => {
        if (!resutlt.err) {
          window.location.href = `../interface/recruteur`;
        } else {
          alert("Merci de remplir tous les champs");
        }
      });
    }
  };
  /* FIN */

  /* MENUS DEROULANTS  */
  //Ancre ( pour ouvir et fermer les formulaires déroulant)


  const {
    0: show_hide1,
    1: setShow_hide1
  } = (0,external_react_.useState)("");
  const {
    0: show_hide2,
    1: setShow_hide2
  } = (0,external_react_.useState)(false);
  const {
    0: show_hide3,
    1: setShow_hide3
  } = (0,external_react_.useState)(false);
  /* FIN MENU DEROULANT */

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "interface-layout",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "A recruit | Recruteur"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
      callback: () => {
        setShow_hide3(!show_hide3);
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "body",
      children: [/*#__PURE__*/jsx_runtime_.jsx(show_hide_layout, {
        title: "TERMINER L'INSCRIPTION DE MON ENTREPRISE",
        statut: register_todo,
        show_hide: show_hide1,
        callback: state => setShow_hide1(""),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "register_todo_container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "underline register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Nom de l'entreprise :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_name ? company_info.company_name : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyName(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Pays :"
              }), /*#__PURE__*/jsx_runtime_.jsx("select", {
                className: "form_select",
                onChange: e => {
                  setCompanyCountry(e.target.value);
                  loadDepartment(e.target.value);
                },
                children: europe_country.map((element, index) => {
                  if (company_info.company_country && element.name === company_info.company_country) {
                    return /*#__PURE__*/jsx_runtime_.jsx("option", {
                      className: "option-selected",
                      selected: true,
                      value: element.name,
                      children: element.name
                    }, index);
                  } else {
                    return /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: element.name,
                      children: element.name
                    }, index);
                  }
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "D\xE9partement :"
              }), departments.length !== 0 || company_info.company_department ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                className: "form_select",
                required: true,
                onChange: e => {
                  setCompanyDepartment(e.target.value);
                  loadConsultant(e.target.value);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                  children: "Selectionnez un departement"
                }), departments.map((element, index) => {
                  if (company_info.company_department && element.nom === company_info.company_department) {
                    return /*#__PURE__*/jsx_runtime_.jsx("option", {
                      className: "option-selected",
                      selected: true,
                      children: element.nom
                    }, index);
                  } else {
                    return /*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: element.nom
                    }, index);
                  }
                })]
              }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_department ? company_info.company_department : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyDepartment(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Adresse :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_address ? company_info.company_address : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyAddress(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Ville :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_city ? company_info.company_city : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyCity(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Code postal :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_zip_code ? company_info.company_zip_code : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyZipCode(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Nationalit\xE9 de l'entreprise :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_nationality ? company_info.company_nationality : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyNationality(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Si\xE8ge social :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_headquarters ? company_info.company_headquarters : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyHeadquarters(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "RCS + Ville :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_rcs ? company_info.company_rcs : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyRcs(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Qualit\xE9 du signataire :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_representative_status ? company_info.company_representative_status : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyRepresentativeStatus(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Tel :"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: company_info.company_phone_number ? company_info.company_phone_number : "...",
                type: "text",
                name: "ent_name",
                onChange: e => {
                  setCompanyPhoneNumber(e.target.value);
                }
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "register_todo w100 orientationH spaceBetween center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "w100 orientationH spaceBetween center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Consultant :"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                className: "form_select",
                required: true,
                onChange: e => {
                  setConsultantId(e.target.value);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                  children: "Choisir mon consultant"
                }), consultants.map((element, index) => {
                  if (company_info.consultant_id && element.user_id === company_info.consultant_id) {
                    return /*#__PURE__*/jsx_runtime_.jsx("option", {
                      className: "option-selected",
                      value: element.user_id,
                      selected: true,
                      children: element.user_name
                    }, index);
                  } else {
                    return /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: element.user_id,
                      children: element.user_name
                    }, index);
                  }
                })]
              })]
            })
          }), register_todo === "A TERMINER" ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "orientationH spaceBetween fromRight ",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "submit",
              value: "VALIDER",
              className: "button full mbem",
              onClick: e => {
                finalization(e);
              }
            })
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "orientationH spaceBetween fromRight ",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "submit",
              value: "MODIFIER",
              className: "button full mbem",
              onClick: e => {
                finalization(e);
              }
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "show_hide_layout orientationH spaceBetween center demandes_link",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w100 orientationH spaceBetween center",
          children: /*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "label",
            children: "FAIRE MA DEMANDE"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "orientationH ",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#new_demande",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              onClick: () => setShow_hide2(true),
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "button full",
                children: "DEMANDE EN LIGNE"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [" ", /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "button full",
                children: "PRENDRE RENDEZ-VOUS AVEC UN CONSEILLER"
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(wrap_list_layout, {
        title: "DEMANDES EN COURS ...............",
        linkForMore: "",
        children: [company_unFilledJobs.length !== 0 ? company_unFilledJobs.map((job, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "demande",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              children: job.job_title
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Cr\xE9e le :"
              }), " ", job.created_at]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Retenue  : "
              }), " " + job.job_hire]
            })]
          }, index);
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "AUCUNE DEMANDE EN COURS"
        }), company_unFilledJobs.length === 4 && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: {
            pathname: "/interface/recruteur/allJobs",
            query: {
              dest: "unfilled",
              company_id: company_info.company_id
            }
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "show_more",
              children: ["voir plus ", ">>"]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(wrap_list_layout, {
        title: "DERNI\xC8RES DEMANDES ",
        linkForMore: "",
        children: [company_fillededJobs.length !== 0 ? company_fillededJobs.map((job, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "demande",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              children: job.job_title
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Cr\xE9e le :"
              }), " ", job.created_at]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Retenue  : "
              }), job.job_hire]
            })]
          }, index);
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "demande more orientationV center",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#new_demande",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "center orientationV",
              onClick: () => setShow_hide2(true),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "more_btn center",
                children: "+"
              }), "Ajouter un poste"]
            })
          })
        }), company_fillededJobs.length === 4 && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: {
            pathname: "/interface/recruteur/allJobs",
            query: {
              dest: "filled",
              company_id: company_info.company_id
            }
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "show_more",
              children: ["voir plus ", ">>"]
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(show_hide_layout, {
        title: "NOUVELLE OFFRE D'EMPLOI",
        show_hide: show_hide2,
        callback: e => setShow_hide2(e),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "new_demande",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "new_demande underline orientationH spaceBetween w100",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form_new_post orientationV",
              children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: " register_todo w100 orientationH spaceBetween center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w100 orientationH spaceBetween center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Intitule du poste :"
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    name: "ent_name",
                    required: true,
                    onChange: e => {
                      setJobTitle(e.target.value);
                    }
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "register_todo w100 orientationH spaceBetween center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w100 orientationH spaceBetween center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Pays :"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form_select",
                    required: true,
                    onChange: e => {
                      setJobCountry(e.target.value);
                      loadDepartment(e.target.value);
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: "--Pays--"
                    }), europe_country.map((element, index) => {
                      return /*#__PURE__*/jsx_runtime_.jsx("option", {
                        value: element.name,
                        children: element.name
                      }, index);
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "register_todo w100 orientationH spaceBetween center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w100 orientationH spaceBetween center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Departement :"
                  }), departments.length !== 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form_select",
                    required: true,
                    onChange: e => {
                      setJobDepartment(e.target.value);
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: "--Departement--"
                    }), departments.map((element, index) => {
                      return /*#__PURE__*/jsx_runtime_.jsx("option", {
                        children: element.nom
                      }, index);
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx("input", {
                    placeholder: company_info.company_department ? company_info.company_department : "...",
                    type: "text",
                    name: "ent_name",
                    onChange: e => {
                      setCompanyDepartment(e.target.value);
                    }
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "register_todo w100 orientationH spaceBetween center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w100 orientationH spaceBetween center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Dipl\xF4me requis :"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form_select",
                    required: true,
                    onChange: e => {
                      setJobRequiredGrade(e.target.value);
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: "--Choix--"
                    }), diplomes.map(diplomes => /*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: diplomes
                    }, diplomes))]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "register_todo w100 orientationH spaceBetween center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w100 orientationH spaceBetween center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Niveau d'\xE9tude requis :"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form_select",
                    required: true,
                    onChange: e => {
                      setJobRequiredLevel(e.target.value);
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: "--Choix--"
                    }), niveauEtudes.map(niveauEtudes => /*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: niveauEtudes
                    }, niveauEtudes))]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "register_todo w100 orientationH spaceBetween center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "w100 orientationH spaceBetween center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    children: "Exp\xE9rience requise :"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "form_select",
                    required: true,
                    onChange: e => {
                      setJobRequiredExperience(e.target.value);
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: "--Choix--"
                    }), experience.map(experience => /*#__PURE__*/jsx_runtime_.jsx("option", {
                      children: experience
                    }, experience))]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "orientationV",
              children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: " files w100 orientationV spaceBetween ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  children: "Fiche de poste :"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "file",
                  name: "avatar",
                  accept: "application/pdf,application/vnd.ms-excel"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: " files w100 orientationV spaceBetween ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  children: "Pr\xE9sentation du poste en pdf:"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "file",
                  name: "avatar",
                  accept: "application/pdf,application/vnd.ms-excel",
                  required: true,
                  onChange: e => {
                    job_presentation_pdf_info(e);
                  }
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: " files w100 orientationV spaceBetween ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  children: "Pr\xE9sentation du poste en video :"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "file",
                  name: "avatar",
                  accept: "video/mp4,video/x-m4v,video/*",
                  onChange: e => {
                    setJobPresentationVideo(e.target.files[0]);
                  }
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: " files w100 orientationV spaceBetween ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  children: "Pr\xE9sentation de l'entreprise en pdf :"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "file",
                  name: "avatar",
                  accept: "application/pdf,application/vnd.ms-excel"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: " files w100 orientationV spaceBetween ",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  children: "Pr\xE9sentation de l'entreprise en video :"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "file",
                  name: "avatar",
                  accept: "video/mp4,video/x-m4v,video/*"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "calendrier orientationV w100",
              children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Merci de choisir un cr\xE9neau de RDV afin de finaliser votre demande"
              }), /*#__PURE__*/jsx_runtime_.jsx(agenda, {
                url: url
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "orientationH spaceBetween fromRight ",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              className: "button full mbem",
              type: "submit",
              value: "VALIDER",
              onClick: e => {
                newJobPosting(e);
              }
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(bigSizeScreenNotif, {
        showHide: show_hide3,
        callback: () => {
          setShow_hide3(!show_hide3);
        }
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
} // export async function getStaticProps() {
//     let europe_country = [];
//     const company_id=2
//     var company_info = []
//     var company_fillededJobs = []
//     var company_unFilledJobs = []
//     ///Chargement des données régionnaux pour les formulaires
//     await Axios.get("https://restcountries.eu/rest/v2/region/europe?fields=name", {europe : europe_country})
//     .then(async (reponse)=>{europe_country = await reponse.data})
//     ///Chargement des donnéés concernant l'utilisateur
//     await Axios.post("http://localhost:3080/getCompanyInfo",{company_id:company_id }).
//     then(async (reponse)=>{company_info= await reponse.data})
//     if(company_info.company_id){
//         await Axios.post("http://localhost:3080/getUnFillededJobLimit4",{company_id:company_id }).
//         then(async (reponse)=>{company_unFilledJobs= await reponse.data})
//         await Axios.post("http://localhost:3080/getFillededJobLimit4",{company_id:company_id }).
//         then(async (reponse)=>{company_fillededJobs= await reponse.data})
//         return {
//             props: {
//                 data:{
//                     company_info:company_info,
//                     company_unFilledJobs:company_unFilledJobs,
//                     company_fillededJobs:company_fillededJobs,
//                     europe_country:europe_country,
//                 }
//             }, // will be passed to the page component as props
//         }
//     }else {
//         return{
//             props: {
//                 data:{
//                     company_info:[],
//                     company_unFilledJobs:[],
//                     company_fillededJobs:[],
//                     europe_country : [],
//                 }
//             }
//         }
//     }
// }

/***/ })

};
;