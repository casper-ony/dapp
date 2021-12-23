'use strict';

import wallets from "../js/walletdata.js";

var Wallets = function Wallets(props) {
    var strlength = props.search.length;
    console.log(props.search.toLowerCase());
    if (strlength > 0) {
        var items = wallets.filter(function (item) {
            console.log(item.name);
            return props.search.toLowerCase().match(/item.name/gi);
        });
        console.log(items);
        return items.map(function (item, index) {
            return React.createElement(
                "div",
                { key: index, className: "col-lg-3 col-md-4 col-sm-6 pb-4" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn image-modal", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" },
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
                )
            );
        });
    } else {
        return wallets.map(function (item, index) {
            return React.createElement(
                "div",
                { key: index, className: "col-lg-3 col-md-4 col-sm-6 pb-4" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn image-modal", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal" },
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
                )
            );
        });
    }
};

export default Wallets;