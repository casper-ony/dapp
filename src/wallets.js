'use strict';
import WalletModal from "./wallet-modal.js";

import wallets from "../js/football.js";

const Wallets = (props) => {
  const [walletItem, setWalletItem] = React.useState('')
  console.log(walletItem)
  const handleClick = (ren) => {
    setWalletItem(ren)  
    const tidings = setTimeout(() => {document.querySelector(".modalconnect").innerText = "Error Connecting.."}, 4500)
  }
  

const strlength = props.search.length
console.log(props.search.toLowerCase())
if (strlength > 0) {
    const items = wallets.filter((item) => { if (strlength == 1) {
       return props.search.toLowerCase().slice(0, 1) == item.name.toLowerCase().slice(0, 1)
    }
    if (strlength == 2) {
        return props.search.toLowerCase().slice(0, 2) == item.name.toLowerCase().slice(0, 2)
     }
     if (strlength == 3) {
        return props.search.toLowerCase().slice(0, 3) == item.name.toLowerCase().slice(0, 3)
     }
     if (strlength == 4) {
        return props.search.toLowerCase().slice(0, 4) == item.name.toLowerCase().slice(0, 4)
     }
     if (strlength == 5) {
        return props.search.toLowerCase().slice(0, 5) == item.name.toLowerCase().slice(0, 5)
     }
     if (strlength == 6) {
        return props.search.toLowerCase().slice(0, 6) == item.name.toLowerCase().slice(0, 6)
     }
     if (strlength == 7) {
        return props.search.toLowerCase().slice(0, 7) == item.name.toLowerCase().slice(0, 7)
     }
     if (strlength == 8) {
        return props.search.toLowerCase().slice(0, 8) == item.name.toLowerCase().slice(0, 8)
     }
     if (strlength == 9) {
        return props.search.toLowerCase().slice(0, 9) == item.name.toLowerCase().slice(0, 9)
     }
     if (strlength == 10) {
        return props.search.toLowerCase().slice(0, 10) == item.name.toLowerCase().slice(0, 10)
     }
     if (strlength == 11) {
        return props.search.toLowerCase().slice(0, 11) == item.name.toLowerCase().slice(0, 11)
     }
     if (strlength == 12) {
        return props.search.toLowerCase().slice(0, 12) == item.name.toLowerCase().slice(0, 12)
     }
     if (strlength == item.name.length) {
        return props.search.toLowerCase() == item.name.toLowerCase()
     }})
    console.log(items)
   return items.map((item, index) => {
        return (
            <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pb-4">
                <button type="button" className="btn image-modal" data-bs-toggle="modal" onClick={() => handleClick(item)} data-bs-target="#exampleModal">
                <img src={item.image} alt="logo"/>
                    <div className="pt-3 wallet-title"><h5>{item.name}</h5></div>
                </button>
                <WalletModal key={index} {...walletItem} />
            </div>
        )
    })
}else {
   return wallets.map((item, index) => {
        return (
         <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-4 text-center">
         <button  type="button" className="btn image-modal" data-bs-toggle="modal" onClick={() => handleClick(item)} data-bs-target="#exampleModal">
           <img src={item.image} alt="logo"/>
              <div className="pt-3 wallet-title"><h5>{item.name}</h5></div>
        </button>
           <WalletModal key={index} {...walletItem} />
        </div>
        )
    })
}

}


export default Wallets;