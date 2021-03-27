import { IonButton, IonLoading, IonToast, IonInput, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { registerUser } from '../firebaseConfig'
import { Link, useHistory } from 'react-router-dom';

const Register: React.FC = () => {

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
    if(password !==  cpassword) {
      setMessage("Passwords do not match");
      setBusy(false)
      return setShowToast(true);
    }
    if(password.length < 7) {
      setMessage("Passwords too short");
      setBusy(false)
      return setShowToast(true);
    }
    if(email.trim() === '' || password.trim() === '') {
      setMessage("Email or password is empty");
      setBusy(false)
      return setShowToast(true);
    }
    const res = await registerUser(email, password)
    if(res) {
      setMessage("User registered");
      history.push('/tab/dashboard')
      setBusy(false)
      return setShowToast(true);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading
        message="please wait"
        duration={0}
        isOpen={busy}
      />
      <IonContent className="ion-padding">
        <IonInput 
          placeholder="email" 
          onIonChange={(e:any) => setEmail(e.target.value)} 
        />
        <IonInput 
          placeholder="password" 
          onIonChange={(e:any) => setPassword(e.target.value)} 
        />
        <IonInput 
          placeholder="confirm password" 
          onIonChange={(e:any) => setCPassword(e.target.value)} 
        />
        <IonButton onClick={register}>Register</IonButton>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message = {message}
          duration = {300}
        />
      </IonContent>
    </IonPage>
  );
};

export default Register;
