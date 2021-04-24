import Header from "./Header";
import Buscador from "./Buscador";
import Reproductor from "./Reproductor";
import Cards from "./Cards";
import Sidebar from "./Sidebar";



export default function Home(){


    return (<div className="Container">

        <div className="wrapper">
            <Sidebar />
            <div className="home">
                <Buscador/>
                <Header/>
                <Cards/>
            </div>
        </div>
        <Reproductor/>    
        </div>
    )
}