import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faBell,faSearch} from '@fortawesome/free-solid-svg-icons';
import image from '../assets/images/image.jpeg';
import '../styles/mystyle.css';
import '../styles/style.css';

function Header(){
    return (
        <header className='display'>

                <div className='headerMiddle  display align-items justify-content' >
                <FontAwesomeIcon icon={faBars} className="f20"/>
                <h1 className='pad-left-10 pad-right-20'>Pavilon</h1>
                </div>
                <div className='searches display justify-content align-items'>
                <label className="input-label-search">
                <FontAwesomeIcon icon={faSearch} className="icon-search" />
                    <input type="search" className='inputDesign pad-left-10' placeholder='Search' />
                </label>
                </div>

         
            <div className='logo-div display align-items justify-flex-end'>
                <FontAwesomeIcon icon={faBell} className="pad-right-20 f30 darkblue ficon"/>
                <div style={{
                    width:"45px",
                    height:"45px",
                    borderRadius:"50px"
                    }}>
                        <img src={image} alt="" style={{
                    width:"100%",
                    height:"100%",
                    borderRadius:"50px"
                    }} /></div>

            </div>


        </header>
    )

}
export default Header;