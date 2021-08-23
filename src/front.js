import 'bootstrap/dist/css/bootstrap.min.css';
import './front.scss';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineArrowRight,AiFillHeart } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';
import Sidebar from './Components/Sidebar/sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar />



      <div className="navbar">

        <div className="home"><BiHomeAlt />HOME</div>
        <div className="right">

          <div>ABOUT</div>
          <div>CONTACT</div>
          <div>PRICING</div>
          <div>ACCOUNT <RiAccountCircleFill size={30} /></div>



        </div>


      </div>





      <div className="pattern">

        <div className="content">
          <div className="img">



          </div>

          <div className="text">

            Got a long road trip planned but don't know how <br></br>to organise?<br></br><br></br>
            Leave the planning to us while you focus on the trip


          </div>

          <button type="button" class="new btn btn-primary btn-lg round">Try for free <AiOutlineArrowRight /></button>






        </div>
    </div>





      <div className="svg">

        <div className="happy">---our happiness---</div>
        
        <div className="cards">
          <div className="card">




            <div className="image">

              <div className="img"></div>
            </div>
            <span>TOM CRUISE</span>
            <p>This was a wonderful experience for all of us in our family.</p>





          </div>
          <div className="card">



            <div className="image">

              <div className="img"></div>
            </div>

            <span>TOM CRUISE</span>



            <p>This was a wonderful experience for all of us in our family.</p>

          </div>
          <div className="card">



            <div className="image">

              <div className="img"></div>
            </div>

            <span>TOM CRUISE</span>
            <p>This was a wonderful experience for all of us in our family.</p>
          </div>





        </div>
        <div className="line"></div>
        <div className="name">Made with <AiFillHeart /> by Shourya</div>

      </div>
    </div>


  );
}

export default App;
