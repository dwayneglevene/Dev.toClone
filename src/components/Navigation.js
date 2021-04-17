import react from 'react'
import {FaDev} from "react-icons/fa"

const Navigation = () => {
    return(
       <header className="header">

           <div className="headerContainer">
               <a href ="https://dev.to" className="headerContainer_logo">
               <FaDev size="3.125rem" />
               </a>

               <div className="headerContainer__searchBox">
                   <form>
                       <input type="text" placeholder="Search..." aria-label="search" />
                   </form>
               </div>

               <div className="headerContainer_right">
                 <button>
                     Owelahs?
                     </button>

                     <i>
                         {/* <BiMessageRoundCheck /> */}
                         
                    </i> 
                    <i>
                         {/* <BRiNotificationLine /> */}
                         
                    </i> 
                    <span>
                        <img src="https://picsum.phots" />
                    </span>

               </div>
           </div>



       </header>
    )
}

export default Navigation;