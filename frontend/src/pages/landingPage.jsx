import '../App.css';
import {Link, useNavigate} from 'react-router-dom';

function LandingPage() {
        const router = useNavigate();
    return ( 
        
        <div className="landingPageContainer">
            <nav>
                <div className='navHeader'> 
                    <h1>VideoMeet</h1>
                </div>
                <div className='navlist'>
                    <p onClick={()=>{router("/0000")}}>Join as Guest</p>
                    <p onClick={()=>{router("/auth")}}>Register</p>
                    <button onClick={()=>{router("/auth")}}>Login</button>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1> <span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by VideoMeet</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>







        </div>

    );
}

export default LandingPage;