import React from 'react'
import {FaDev} from "react-icons/fa"

const Navigation = () => {
    return(
       <header className="header">

           <div className="headerContainer">
               <a href ="https://dev.to" className="headerContainer_logo">
               <FaDev size="3.125rem" />
               </a>

               {/* <div className="headerContainer__searchBox">
                   <form>
                       <input type="text" placeholder="Search..." aria-label="search" />
                   </form>
               </div> */}

               <div className="headerContainer_right">
                 {/* <button>
                     Owelahs?
                     </button> */}

                     <i>
                          {/* <BiMessageRoundCheck />  */}
                         
                    </i> 
                    <i>
                         {/* <BRiNotificationLine /> */}
                         
                    </i> 
                    <span>
                        {/* <img  src="https://www.google.com/search?q=owelahs&safe=strict&tbm=isch&source=iu&ictx=1&fir=X6HrKAH1dczBsM%252ChBW4w2BdwFyd1M%252C_&vet=1&usg=AI4_-kRjyeoaFcZ2-HpjiJOECCloZX1m0g&sa=X&ved=2ahUKEwjt9cD-t4jwAhVTKFkFHcptCK8Q9QF6BAgKEAE#imgrc=X6HrKAH1dczBsM" /> */}
                    </span>

               </div>
           </div>



       </header>
    )
}

export default Navigation;