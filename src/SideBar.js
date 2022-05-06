import { FaClipboard, FaLaptop, FaHouseUser } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

var iconSize = 35;


function Redirect (url)
{
    if(url != null)
    {
        window.location.href = url;
    }
}
const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-[64px] flex flex-col bg-dark-grey2 text-blue1 shadow-lg">
            <SideBarIcon icon={<FaHome size={iconSize}/>} text="Home"/>

            <SideBarIcon icon={<FaGlobe size={iconSize}/>} text="Wiki"/>

            <SideBarIcon icon={<FaClipboard size={iconSize}/>} text="Forums" />

            <SideBarIcon icon={<FaLaptop size={iconSize}/>} text="Games" />

            <SideBarIcon icon={<FaHouseUser size={iconSize}/>} text="About" onClick="/About"/>

        </div>
    )

    
};

const SideBarIcon = ({ icon, text, onClick}) =>(
    <div>
<div className="sidebar-icon group" onClick={() => Redirect(onClick)}>


        {icon}

        <span class="sidebar-tooltip group-hover:scale-100 font-sans">
            {text}
        </span>

        <SideBarChild icon={<FaLaptop size={iconSize}/>}/>
    </div>
    </div>
    
    

    
    );

    const SideBarChild = ({icon,}) =>(
        <div>
    <       div className="sidebar-child group group-hover:scale-100 font-sans">
                {icon}
            </div>
        </div>
        
        
    
        
        );

export default SideBar;