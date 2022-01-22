'use strict';

import WalletModalImport from "./walletmodal-import.js";

var WalletModal = function WalletModal(props) {
    var cleanup = setTimeout(function () {
        document.querySelector(".modalconnect").innerText = "Connecting...";
    });

    if (props) {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { key: props.index, className: "modal fade", id: "exampleModal", tabIndex: "-1", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
                React.createElement(
                    "div",
                    { className: "modal-dialog modal-dialog-centered d-flex" },
                    React.createElement(
                        "div",
                        { className: "modal-content" },
                        React.createElement(
                            "div",
                            { className: "modal-header" },
                            React.createElement(
                                "h5",
                                { className: "modal-title", id: "exampleModalLabel" },
                                "Dappsync"
                            ),
                            React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close", onClick: function onClick() {
                                    return setTimeout(cleanup);
                                } })
                        ),
                        React.createElement(
                            "div",
                            { className: "modal-body" },
                            React.createElement(
                                "div",
                                null,
                                React.createElement(
                                    "div",
                                    { className: "modalbox" },
                                    React.createElement(
                                        "div",
                                        { className: "modalencrypt" },
                                        React.createElement(
                                            "div",
                                            { className: "modalencrypttext" },
                                            React.createElement(
                                                "h6",
                                                { className: "modalconnect" },
                                                "Connecting..."
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "modalsync" },
                                            React.createElement(
                                                "button",
                                                { type: "button", className: "btn btn-connect", "data-bs-toggle": "modal", "data-bs-target": "#secondModal", "data-bs-dismiss": "modal", onClick: function onClick() {
                                                        return setTimeout(cleanup);
                                                    } },
                                                "Connect Manually"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "modalbox2 mt-3" },
                                    React.createElement(
                                        "div",
                                        { className: "modalencrypt" },
                                        React.createElement(
                                            "div",
                                            { className: "modalencrypttext" },
                                            React.createElement(
                                                "h6",
                                                { className: "modalencryptname" },
                                                props.name
                                            ),
                                            React.createElement(
                                                "h6",
                                                { className: "modalencryptsess" },
                                                "This session is encrypted."
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "modalimage" },
                                            React.createElement("img", { src: props.image, alt: "logo" })
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "modal-footer" },
                            React.createElement(
                                "button",
                                { type: "button", className: "btn btn-secondary", "data-bs-dismiss": "modal", onClick: function onClick() {
                                        return setTimeout(cleanup);
                                    } },
                                "Back"
                            )
                        )
                    )
                )
            ),
            React.createElement(WalletModalImport, props)
        );
    } else {
        return React.createElement(
            "div",
            { className: "modal fade", id: "exampleModal", tabIndex: "-1", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
            React.createElement(
                "div",
                { className: "modal-dialog modal-dialog-centered" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "h5",
                            { className: "modal-title", id: "exampleModalLabel" },
                            "Dappsync"
                        ),
                        React.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        "No information."
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-footer" },
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-secondary", "data-bs-dismiss": "modal" },
                            "Close"
                        )
                    )
                )
            )
        );
    }
};

export default WalletModal;