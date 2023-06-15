import './App.css';
import {useState,useEffect,useRef} from 'react';
import home from './img/home.png';
import about from './img/about.png'
import menu from './img/menu.png'
import { Fade } from "react-awesome-reveal";

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [toggle,setToggle] = useState('');
  const [menuIcon,setMenuIcon] = useState('bx-menu');

  const toggleMenu = () => {
    if(menuIcon === 'bx-menu'){
    setToggle('active')
    setMenuIcon('bx-x')
    }else{
    setMenuIcon('bx-menu')
    setToggle('')
    }
  }


  return (
    <div classNameName="App">
    <header>
      <a href="#" className="logo">Chem Chick</a>
      <div className={`bx ${menuIcon} `} id="menu-icon" onClick={toggleMenu} ></div>

      <ul className={`navbar ${toggle}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <!-- Dark Mode --> */}
      </ul>
    </header>
    {/* <!-- Home  Section--> */}
    <Fade delay={200} >
    <section className="home" id="home">
      <div className={`home-text`}>
        <h1>Food Taste</h1>
        <h2>The tasty food of <br /> your choice</h2>
        <a href="#menu" className="btn">View Menu</a>
      </div>
      <div className="home-img">
        <img src={home} alt="home" />
      </div>
    </section>
    </Fade>


    {/* <!-- About --> */}
    <Fade>
    <section className="about" id="about">
      <div className="about-img">
        <img src={about} alt="about" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>We make good and <br /> Tasty food</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo iure rem ducimus tenetur deserunt commodi doloribus, quibusdam vel fuga?</p>
        <a href="#" className="btn">Lear More</a>
      </div>
    </section>
    </Fade>

    {/* <!-- Menu --> */}
    <Fade>
    <section className="menu" id="menu">
      <div className="heading">
        <span>Menu</span>
        <h2>Tasty menu of the week</h2>
      </div>
      <div className="menu-container">
        {/* <!-- Box 1 --> */}
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        {/* <!-- Box 2 --> */}
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        {/* <!-- Box 3 --> */}
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
        <div className="box">
          <div className="box-img">
            <img src={menu} alt="menu1" />
          </div>
          <h2>Burger</h2>
          <h3>Tasty Food</h3>
          <span>₹100</span>
          <i className='bx bx-cart-alt'></i>
        </div>
      </div>
    </section>
    </Fade>

    {/* <!-- Service --> */}
    <Fade>
    <section className="services" id="services">
      <div className="heading">
        <span>Services</span>
        <h2>We provide best food services</h2>
      </div>

      <div className="servives-container">
        {/* <!-- Box 1 --> */}
        <div className="s-box">
          {/* <img src="images/order.png" alt=""> */}
          <img alt="order" />
          <h3>You Order</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
        </div>
        {/* <!-- Box 2 --> */}
        <div className="s-box">
          {/* <img src="images/delivery-truck.png" alt=""> */}
          <img alt="deliverytruck" />
          <h3>Shipping</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
        </div>
        {/* <!-- Box 3 --> */}
        <div className="s-box">
          {/* <img src="images/shipping.png" alt=""> */}
          <img alt="shipping" />
          <h3>Delivered</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
        </div>
      </div>
    </section>
    </Fade>

    {/* <!-- Connect --> */}
    <Fade>
    <section className="connect">
      <div className="connect-text">
        <span>Let's Talk</span>
        <h2>Connect now</h2>
      </div>
      <a href="#" className="btn">Contact Us</a>
    </section>
    </Fade>

    {/* <!-- Contact --> */}
    <Fade>
    <section className="contact" id="contact">
      <div className="contact-box">
        <h3>Food Taste</h3>
        <span>Connect With Us</span>
        <div className="social">
          <a href="#"><i className='bx bxl-facebook' ></i></a>
          <a href="#"><i className='bx bxl-twitter' ></i></a>
          <a href="#"><i className='bx bxl-instagram' ></i></a>
        </div>
      </div>
      <div className="contact-box">
        <h3>Menu Links</h3>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
      <div className="contact-box">
        <h3>Quick Links</h3>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Privacy Policy">Privacy Policy</a></li>
        <li><a href="#Disclaimer">Disclaimer</a></li>
        <li><a href="#Terms Of Use">Terms Of Use</a></li>
      </div>
      <div className="contact-box address">
        <h3>Contact</h3>
        <i className='bx bxs-map' ><span>44 Street New York, USA</span></i>
        <i className='bx bxs-phone' ><span>+1 444 444 4444</span></i>
        <i className='bx bxs-envelope' ><span>Exapmle@email.com</span></i>
      </div>
    </section>
    </Fade>

    {/* <!-- Copyright --> */}
    <div className="copyright">
      <p>&#169; ChemChick All Right Reserved.</p>
      <p>Designed and developed by ~Mirza</p>
    </div>
  </div>
  );
}

export default App;
