// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHome, faCreditCard,faBackward} from '@fortawesome/free-solid-svg-icons';
import '../styles/mystyle.css';
import '../styles/style.css';
export default function Main() {
    return (
        <main>
            <div className='main-rowOne display align-start flex-direction'>
                <h1 style={{marginBottom:"0px"}}>Welcome Bank</h1>
                <p style={{marginBottom:"40px"}}>Create and edit users, their location and roles</p>
                <div className='wi-50 display justify-space-between'>
                    <input type="" placeholder='' className=' wi-80 he-40'/>
                <button className='but'>Search</button></div>

            </div>
            <div className='main-rowTwo display align-start flex-direction'>
                <div className='wi-100 display flex-direction' style={{margin:"30px",marginBottom:"0px"}}>
                <button className='but'>Search</button>
                </div>
                <table  style={{margin:"30px",width:"100%"}}>
                    <thead>
                        <tr>
                        <th>S/n</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>Action</th>

                        </tr>

                    </thead>
                    <tbody>
                    <tr>
                    <td>1</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dggdggddgv</td>
                   
                
                    <td>
                        <button onClick={() => { alert("I'm an alert")}} className='button1'>Edit</button>
                        <button onClick={() => { alert("I'm an alert")}} className='button2'>Delete</button>
                    </td>
                    </tr>

                    <tr>
                    <td>1</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dggdggddgv</td>
                
                    <td>
                        <button onClick={() => { alert("I'm an alert")} }className='button1'>Edit</button>
                        <button onClick={() => { alert("I'm an alert")}} className='button2'>Delete</button>
                    </td>
                    </tr>

                    <tr>
                        <td>1</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dfhsfhjhfshfksfskfksdggdggddgv</td>
                    <td>dggdggddgv</td>
                    
                    <td>
                        <button onClick={() => { alert("I'm an alert")}} className='button1'>Edit</button>
                        <button onClick={() => { alert("I'm an alert")}} className='button2'>Delete</button>
                    </td>
                    </tr>

                    <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                        <button onClick={() => { alert("I'm an alert")}} className='button1'>Edit</button>
                        <button onClick={() => { alert("I'm an alert")}} className='button2'>Delete</button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                        <button onClick={() => { alert("I'm an alert")}} className='button1'>Edit</button>
                        <button onClick={() => { alert("I'm an alert")}} className='button2'>Delete</button>
                    </td>
                    </tr>
                    
                    </tbody>
                </table>

            </div>

           

        </main>
    )
}