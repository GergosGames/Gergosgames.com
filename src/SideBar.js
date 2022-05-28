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
            <SideBarIcon icon={<FaHome size={iconSize}/>} text="Home" onClick="/Home"/>

            <SideBarIcon icon={<FaLaptop size={iconSize}/>} text="Games" onClick="/Games" />

            <SideBarIcon icon={<FaGlobe size={iconSize}/>} text="Wiki"/>

            <SideBarIcon icon={<FaClipboard size={iconSize}/>} text="Forums" />

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
    </div>
    </div>
    
    

    
    );

export default SideBar;