import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faCreditCard,faBackward,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import '../styles/mystyle.css';
import '../styles/style.css';

export default function Sidebar() {
    return (
        <aside>
            <div className='wi-90 display flex-direction align-items'>
                <h4 className='pad-right-20'>Pos Monitoting</h4>
            <li>
                <FontAwesomeIcon icon={faHome} className='fontIcon pad-right-10'/>
                <a href='/home'>Home</a></li>

            <li>     <FontAwesomeIcon icon={faCreditCard} className='fontIcon pad-right-10'/>
                <a href='/home'>Dashboard</a>
                </li>
        
                <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Trasactions</a>
            <FontAwesomeIcon icon={faChevronDown} className='fontIcon pad-right-10' />
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Terminal Health</a>
            <FontAwesomeIcon icon={faChevronDown} className='fontIcon pad-right-10' />
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Settlement</a>
            <FontAwesomeIcon icon={faChevronDown} className='fontIcon pad-right-10' />
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Performance</a>
            <FontAwesomeIcon icon={faChevronDown} className='fontIcon pad-right-10' />
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Banking Statement</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>My Statement</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>My Terminals</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Settings</a>
            <FontAwesomeIcon icon={faChevronDown} className='fontIcon pad-right-10' />
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Message Center</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Reconciliation</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Dispute Managment</a>
            </li>
            <li>
            <FontAwesomeIcon icon={faBackward} className='fontIcon pad-right-10' />
            <a href='/f'>Logout</a>
            </li>
            </div>

        </aside>
    )
}