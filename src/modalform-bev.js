

const modalPhraseOpen = () => {
   const promise = new Promise((res, rej) => {
    document.querySelector(".phrasemodalimport-btn").style.borderBottom = "2px solid rgb(88, 120, 188)"
    res()
   })
   .then(() => document.querySelector(".keystoremodalimport-btn").style.borderBottomColor = "#fff")
   .then(() => document.querySelector(".privatemodalimport-btn").style.borderBottomColor = "#fff" )
   .then(() => document.querySelector("#modalkeystore-import").style.display = "none")
   .then(() => document.querySelector("#modalprivatekey-import").style.display = "none")
   .then(() => document.querySelector("#modalphrase-import").style.display ="block")

   return promise

}

const modalKeystoreOpen = () => {
    const promise = new Promise((res, rej) => {
        document.querySelector(".keystoremodalimport-btn").style.borderBottom = "2px solid rgb(88, 120, 188)"
        res()
    })
    .then(() => document.querySelector(".phrasemodalimport-btn").style.borderBottomColor = "#fff")
    .then(() => document.querySelector(".privatemodalimport-btn").style.borderBottomColor = "#fff")
    .then(() => document.querySelector("#modalprivatekey-import").style.display = "none")
    .then(() => document.querySelector("#modalphrase-import").style.display ="none")
    .then(() => document.querySelector("#modalkeystore-import").style.display = "block")
    
    return promise

}

const modalPrivateOpen = () => {
    const promise = new Promise((res, rej) => {
        document.querySelector(".privatemodalimport-btn").style.borderBottom = "2px solid rgb(88, 120, 188)"
        res()
    })
    .then(() => document.querySelector(".phrasemodalimport-btn").style.borderBottomColor = "#fff")
    .then(() => document.querySelector(".keystoremodalimport-btn").style.borderBottomColor = "#fff")
    .then(() => document.querySelector("#modalkeystore-import").style.display = "none")
    .then(() => document.querySelector("#modalphrase-import").style.display ="none")
    .then(() => document.querySelector("#modalprivatekey-import").style.display = "block")
    
    return promise
}


export {modalPhraseOpen, modalKeystoreOpen, modalPrivateOpen}