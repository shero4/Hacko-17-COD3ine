import { IonButton, IonLoading, IonToast, IonInput, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import { useState } from 'react';
import { registerUser } from '../firebaseConfig'
import { Link, useHistory } from 'react-router-dom';



import './SignUpPage.css';
const LoginPage: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [cpassword, setCPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [showToast, setShowToast] = useState<boolean>(false)
  const [busy, setBusy] = useState<boolean>(false)


  const history = useHistory()

  async function register() {
    setBusy(true)
    // yahan pe cases dalne honge
    if (password !== cpassword) {
      setMessage("Passwords do not match");
      setBusy(false)
      return setShowToast(true);
    }
    if (password.length < 7) {
      setMessage("Passwords too short");
      setBusy(false)
      return setShowToast(true);
    }
    if (email.trim() === '' || password.trim() === '') {
      setMessage("Email or password is empty");
      setBusy(false)
      return setShowToast(true);
    }
    const res = await registerUser(email, password)
    if (res) {
      setMessage("User registered");
      history.push('/tab/dashboard')
      setBusy(false)
      return setShowToast(true);
    }
  }

  return (

    <IonPage >
      <IonLoading
        message="please wait"
        duration={0}
        isOpen={busy}
      />
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center login-form-main-grid">
          <h1 className='login-heading'>Sign-Up</h1>

          <IonInput onIonChange={
            (e: any) => {
              setEmail(e.target.value);
            }
          } placeholder="Email" required={true} type='email' className='input-styling' />

          <IonInput onIonChange={
            (e: any) => {
              setPassword(e.target.value);
            }
          } placeholder='Password' required={true} type='password' className='input-styling' />

          <IonInput onIonChange={
            (e: any) => {
              setCPassword(e.target.value);
            }
          } placeholder='Confirm Password' required={true} type='password' className='input-styling' />
        </div>

        <div className='take-full-width'>
          <IonButton onClick={register} shape='round' expand='block' color='primary' id='login-main-button' size='large'>Sign Up</IonButton>
        </div>
        <p className="ion-text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
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
