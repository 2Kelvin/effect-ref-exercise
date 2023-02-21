"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// MyInput Component
function MyInput(_ref) {
  var shouldFocus = _ref.shouldFocus,
    value = _ref.value,
    onChange = _ref.onChange;
  var myInputRef = React.useRef(null);
  React.useEffect(function () {
    shouldFocus && myInputRef.current.focus();
  }, [shouldFocus]);
  return /*#__PURE__*/React.createElement("input", {
    ref: myInputRef,
    value: value,
    onChange: onChange,
    className: "px-2 border border-slate-400 rounded"
  });
}

// Form Component
function Form() {
  var _React$useState = React.useState("Rick"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    firstName = _React$useState2[0],
    setFirstName = _React$useState2[1];
  var _React$useState3 = React.useState("Grimes"),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    lastName = _React$useState4[0],
    setLastName = _React$useState4[1];
  var shouldFocus = false;
  function onFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function onLastNameChange(e) {
    setLastName(e.target.value);
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block my-2 font-medium"
  }, "Enter your first name:", " ", /*#__PURE__*/React.createElement(MyInput, {
    value: firstName,
    onChange: onFirstNameChange,
    shouldFocus: "true"
  })), /*#__PURE__*/React.createElement("label", {
    className: "block my-2"
  }, "Enter your last name:", " ", /*#__PURE__*/React.createElement(MyInput, {
    value: lastName,
    onChange: onLastNameChange,
    shouldFocus: shouldFocus
  })), /*#__PURE__*/React.createElement("p", null, "Hello,", " ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-700 font-mono font-bold"
  }, firstName, " ", lastName)));
}
function App() {
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    show = _React$useState6[0],
    setShow = _React$useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "p-3 font-mono w-fit"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShow(!show);
    },
    className: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
  }, show ? "Hide" : "Show", " form"), /*#__PURE__*/React.createElement("hr", null), show && /*#__PURE__*/React.createElement(Form, null));
}
var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render( /*#__PURE__*/React.createElement(App, null));