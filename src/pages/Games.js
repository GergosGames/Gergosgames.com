import SideBar from '../SideBar';

function Redirect (url)
{
    if(url != null)
    {
        window.location.href = url;
    }
}
function Games() {
    return (
        <html>
            <head>
            <title>Games</title>
            </head>

            <SideBar/>

            <div className="fixed top-0 left-[64px] h-screen w-[196px] flex flex-col bg-dark-grey1 text-blue1 shadow-lg p-1">
                <div>
                    <span className="font-Roboto font-bold text-4xl text-light-aqua">Games</span>
                    <br/>
                    <span className="font-Roboto font-light text-3xl text-light-aqua">Shapetoss</span>
                </div>

            </div>
        </html>
    )

};



export default Games;