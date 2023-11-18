import react from 'react';
import GoogleButton from 'react-google-button'
import './login.css';
import loginimg from './loginimg.png';
import bot from './botlogo.png';
import background from './background.png'
import bg from './bg.png'
import { useState } from 'react';

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleSignup = () => {
    setShowSignup(!showSignup);
  };

  if (showLogin) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  if (showSignup) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
    return (
      
        <div className='container'>
            <div className='card'>
                <div className='left-side'>
                    <h2>WELCOME BACK</h2>
                    
                       
                   
                    <GoogleButton className='google-button'
                        type="light"
                        onClick={() => { console.log('Google button clicked') }}    
                    />
                    
                   <div>
                    <p className='text'> <span>--------OR Login With Email--------</span></p>
                     </div>

                    
                    <input className='input' type='text' placeholder='Your Email'></input>
                    
                    <div>
                    <input className='input' type='text' placeholder='Your Password'></input>
                    </div>
                    

                    <div className='check-password'>
                    <input className='check' type="checkbox"></input>
                    <label className='label'for="">Remember me</label>
                    <p class="underline-text">Forgot password</p>
                    </div>

                    <button className='Login-bt'>Login</button>

                    <hr className='line'></hr>

                    <p className='last-line'>Don't have an account yet?<span className='word' onClick={handleSignup}>Sign up</span></p>
                    
                    


                </div>

                <div className='right-side'>
                
                
                <img className='imgg'src={background}></img>
                
                
                <div className="centerr">GENDER DEI-BOT</div>
                <p className='right-text'><strong>"Empowering Conversations and Fostering Inclusion"</strong></p>
                </div>

                


           </div>  
        </div>
        
        

        
        
       
    );
}

