'use strict'
import WalletModalImport from "./walletmodal-import.js";

const WalletModal = (props) => {
   const cleanup = setTimeout(() => {document.querySelector(".modalconnect").innerText = "Connecting..."})

    if (props) {
        return (<div>
            <div key={props.index} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div className="modal-dialog modal-dialog-centered d-flex">
                 <div className="modal-content">
                     <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">DappSync</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setTimeout(cleanup)}></button>
                     </div>
                     <div className="modal-body">
                         <div>
                            <div className="modalbox">
                                <div className="modalencrypt">
                                        <div className="modalencrypttext">
                                            <h6 className="modalconnect">Connecting...</h6>
                                        </div>
                                        <div className="modalsync">
                                        <button type="button" className="btn btn-connect" data-bs-toggle="modal" data-bs-target="#secondModal" data-bs-dismiss="modal" onClick={() => setTimeout(cleanup)}>
                                            Connect Manually
                                         </button>
                                        </div>
                                    </div>
                                
                            </div>

                            <div className="modalbox2 mt-3">
                                <div className="modalencrypt">
                                    <div className="modalencrypttext">
                                        <h6 className="modalencryptname">{props.name}</h6>
                                        <h6 className="modalencryptsess">This session is encrypted.</h6>
                                    </div>
                                    <div className="modalimage">
                                        <img src={props.image} alt="logo"/>
                                    </div>
                                </div>

                            </div>
                         </div>
                         
     
                     </div>
                     <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setTimeout(cleanup)}>Back</button>
                     </div>
                     </div>
                     </div>
           </div> 
           <WalletModalImport {...props}/>
           </div>
        )
       }else {
          return <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
              <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">DappSync</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  No information.
              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
              </div>
              </div>
   </div>
       }
   }

export default WalletModal