'use strict';
import Wallets from "./wallets.js";

const WalletPage = () => {
    const [search, setSearch] = React.useState('')

    return (
        <div className="container">
         <div className="row justify-content-center pb-5">
                <div className="col-lg-6 col-md-8 col-sm-10 col-10">
                <div className="input-group rounded">
                <input type="search" className="form-control rounded search-input" value={search} 
                            onChange={(e) => {e.preventDefault() 
                            return  setSearch(e.target.value)}} placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fa fa-search"></i>
                </span>
                </div>
                </div>
       </div>
       <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 px-5 text-center">
           <Wallets search={search} />
       </div>
        </div>
        
       
    )
}

let domContainer = document.querySelector('#wallet-sync');
ReactDOM.render(<WalletPage />, domContainer);