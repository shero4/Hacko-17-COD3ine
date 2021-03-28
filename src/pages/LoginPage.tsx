import './LoginPage.css';
import { IonToast, IonButton, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLoading, IonText } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../firebaseConfig'
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';




const LoginPage: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [showToast, setShowToast] = useState<boolean>(false)


    const dispatch = useDispatch()
  const history = useHistory()

  async function login() {
    setBusy(true)
    const res: any = await loginUser(email, password);
    console.log(res)
    // yahan pe bhi cases dalne honge 
    if (res) {
      dispatch(setUserState(res.user.email))
      history.push('/tab/dashboard')
      setMessage("Logged in successfully");
      setShowToast(true);
    } else {
      setMessage("Login failed");
      setShowToast(true);
    }
    setBusy(false)
  }


  return (
    
    <IonPage >
        
      <IonLoading
        message="please wait"
        duration={0}
        isOpen={busy}
      />
      <IonContent id="background-image-setter" fullscreen>

          <div className="ion-text-center login-form-main-grid">
  
                <div className='take-full-width'>
                <h1 className='login-heading'>Log-In</h1>
                </div>
                <div className='take-full-width'>

                <IonInput onIonChange={
                    (e:any)=>{
                        setEmail(e.target.value);
                    }
                } placeholder="Email" required={true} type='email' className='input-styling'  />
                </div>
                <div className='take-full-width'>
                <IonInput onIonChange={
                    (e:any)=>{
                        setPassword(e.target.value);
                    }
                } placeholder='Password' required={true} type='password' className='input-styling'  />
                </div>
                <div className='take-full-width'>
                <IonButton onClick={login} shape='round' expand='block' color='primary' id='login-main-button' size='large'>Sign In</IonButton>
                </div>
                <div className="take-full-width">
                    {/* <IonText color='dark' > */}
                        <p id='sign-up-text'>
                        Don't have an account?<Link to="/register">Register</Link>
                        </p>
                        
                        
                        {/* </IonText> */}
                </div>
                  
        
    
                

                
          
          </div>
          <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={message}
          duration={300}
        />


        
       
      </IonContent>
   
  </IonPage>
  );
};

export default LoginPage;
