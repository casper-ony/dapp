'use strict';

import wallets from "../js/walletdata.js"

const Wallets = (props) => {
const strlength = props.search.length
if (strlength > 0) {
    const items = wallets.filter((item) => props.search.toLowerCase() == item.name.toLowerCase())
   return items.map((item, index) => {
        return (
            <div key={index}  className="col-lg-3 col-md-4 col-sm-6 pb-4">
                <button type="button" className="btn image-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src={item.image} alt="logo"/>
                    <div className="pt-3 wallet-title"><h5>{item.name}</h5></div>
                </button>
            </div>
        )
    })
}else {
   return wallets.map((item, index) => {
        return (
         <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-4">
         <button  type="button" className="btn image-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
           <img src={item.image} alt="logo"/>
              <div className="pt-3 wallet-title"><h5>{item.name}</h5></div>
        </button>
        </div>
        )
    })
}

}


export default Wallets;