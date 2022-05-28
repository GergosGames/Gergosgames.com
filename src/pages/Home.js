import '../App.css';
import SideBar from '../SideBar';




function Home() {
  return (
    <html className="dark">
      <head>
        <title>Home</title>
      </head>
      
      <div className="flex">
        <SideBar/>
        
      </div>

      <body>
        <span className="font-Roboto font-bold text-4xl text-light-aqua">HOME</span>
      </body>

    </html>
    
    
  );

  
}

export default Home;


