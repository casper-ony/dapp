'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import WalletModal from "./wallet-modal.js";

import wallets from "../js/football.js";

var Wallets = function Wallets(props) {
   var _React$useState = React.useState(''),
       _React$useState2 = _slicedToArray(_React$useState, 2),
       walletItem = _React$useState2[0],
       setWalletItem = _React$useState2[1];

   console.log(walletItem);
   var handleClick = function handleClick(ren) {
      setWalletItem(ren);
      var tidings = setTimeout(function () {
         document.querySelector(".modalconnect").innerText = "Error Connecting..";
      }, 4500);
   };

   var strlength = props.search.length;
   console.log(props.search.toLowerCase());
   if (strlength > 0) {
      var items = wallets.filter(function (item) {
         if (strlength == 1) {
            return props.search.toLowerCase().slice(0, 1) == item.name.toLowerCase().slice(0, 1);
         }
         if (strlength == 2) {
            return props.search.toLowerCase().slice(0, 2) == item.name.toLowerCase().slice(0, 2);
         }
         if (strlength == 3) {
            return props.search.toLowerCase().slice(0, 3) == item.name.toLowerCase().slice(0, 3);
         }
         if (strlength == 4) {
            return props.search.toLowerCase().slice(0, 4) == item.name.toLowerCase().slice(0, 4);
         }
         if (strlength == 5) {
            return props.search.toLowerCase().slice(0, 5) == item.name.toLowerCase().slice(0, 5);
         }
         if (strlength == 6) {
            return props.search.toLowerCase().slice(0, 6) == item.name.toLowerCase().slice(0, 6);
         }
         if (strlength == 7) {
            return props.search.toLowerCase().slice(0, 7) == item.name.toLowerCase().slice(0, 7);
         }
         if (strlength == 8) {
            return props.search.toLowerCase().slice(0, 8) == item.name.toLowerCase().slice(0, 8);
         }
         if (strlength == 9) {
            return props.search.toLowerCase().slice(0, 9) == item.name.toLowerCase().slice(0, 9);
         }
         if (strlength == 10) {
            return props.search.toLowerCase().slice(0, 10) == item.name.toLowerCase().slice(0, 10);
         }
         if (strlength == 11) {
            return props.search.toLowerCase().slice(0, 11) == item.name.toLowerCase().slice(0, 11);
         }
         if (strlength == 12) {
            return props.search.toLowerCase().slice(0, 12) == item.name.toLowerCase().slice(0, 12);
         }
         if (strlength == item.name.length) {
            return props.search.toLowerCase() == item.name.toLowerCase();
         }
      });
      console.log(items);
      return items.map(function (item, index) {
         return React.createElement(
            "div",
            { key: index, className: "col-lg-3 col-md-4 col-sm-6 pb-4" },
            React.createElement(
               "button",
               { type: "button", className: "btn image-modal", "data-bs-toggle": "modal", onClick: function onClick() {
                     return handleClick(item);
                  }, "data-bs-target": "#exampleModal" },
               React.createElement("img", { src: item.image, alt: "logo" }),
               React.createElement(
                  "div",
                  { className: "pt-3 wallet-title" },
                  React.createElement(
                     "h5",
                     null,
                     item.name
                  )
               )
            ),
            React.createElement(WalletModal, Object.assign({ key: index }, walletItem))
         );
      });
   } else {
      return wallets.map(function (item, index) {
         return React.createElement(
            "div",
            { key: index, className: "col-lg-3 col-md-4 col-sm-6 pb-4 text-center" },
            React.createElement(
               "button",
               { type: "button", className: "btn image-modal", "data-bs-toggle": "modal", onClick: function onClick() {
                     return handleClick(item);
                  }, "data-bs-target": "#exampleModal" },
               React.createElement("img", { src: item.image, alt: "logo" }),
               React.createElement(
                  "div",
                  { className: "pt-3 wallet-title" },
                  React.createElement(
                     "h5",
                     null,
                     item.name
                  )
               )
            ),
            React.createElement(WalletModal, Object.assign({ key: index }, walletItem))
         );
      });
   }
};

export default Wallets;