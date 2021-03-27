import { IonToast, IonButton, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../firebaseConfig'
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {

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
      history.replace('/tab1')
      setMessage("Logged in successfully");
      setShowToast(true);
    } else {
      setMessage("Login failed");
      setShowToast(true);
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          placeholder="password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={login}>Login</IonButton>
        <p>New here? <Link to="/register">Register</Link></p>
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

export default Login;
