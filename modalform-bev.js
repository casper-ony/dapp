

var modalPhraseOpen = function modalPhraseOpen() {
    var promise = new Promise(function (res, rej) {
        document.querySelector(".phrasemodalimport-btn").style.borderBottom = "2px solid rgb(88, 120, 188)";
        res();
    }).then(function () {
        return document.querySelector(".keystoremodalimport-btn").style.borderBottomColor = "#fff";
    }).then(function () {
        return document.querySelector(".privatemodalimport-btn").style.borderBottomColor = "#fff";
    }).then(function () {
        return document.querySelector("#modalkeystore-import").style.display = "none";
    }).then(function () {
        return document.querySelector("#modalprivatekey-import").style.display = "none";
    }).then(function () {
        return document.querySelector("#modalphrase-import").style.display = "block";
    });

    return promise;
};

var modalKeystoreOpen = function modalKeystoreOpen() {
    var promise = new Promise(function (res, rej) {
        document.querySelector(".keystoremodalimport-btn").style.borderBottom = "2px solid rgb(88, 120, 188)";
        res();
    }).then(function () {
        return document.querySelector(".phrasemodalimport-btn").style.borderBottomColor = "#fff";
    }).then(function () {
        return document.querySelector(".privatemodalimport-btn").style.borderBottomColor = "#fff";
    }).then(function () {
        return document.querySelector("#modalprivatekey-import").style.display = "none";
    }).then(function () {
        return document.querySelector("#modalphrase-import").style.display = "none";
    }).then(function () {
        return document.querySelector("#modalkeystore-import").style.display = "block";
    });

    return promise;
};

var modalPrivateOpen = function modalPrivateOpen() {
    var promise = new Promise(function (res, rej) {
        document.querySelector(".privatemodalimport-btn").style.borderBottom = "2px solid rgb(88, 120, 188)";
        res();
    }).then(function () {
        return document.querySelector(".phrasemodalimport-btn").style.borderBottomColor = "#fff";
    }).then(function () {
        return document.querySelector(".keystoremodalimport-btn").style.borderBottomColor = "#fff";
    }).then(function () {
        return document.querySelector("#modalkeystore-import").style.display = "none";
    }).then(function () {
        return document.querySelector("#modalphrase-import").style.display = "none";
    }).then(function () {
        return document.querySelector("#modalprivatekey-import").style.display = "block";
    });

    return promise;
};

export { modalPhraseOpen, modalKeystoreOpen, modalPrivateOpen };