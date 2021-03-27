import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import { useSelector } from 'react-redux';
import './Tab1.css';
import { logoutUser, createCompetition, getCompetitions, addFriendToCompetition, checkAnswer, getLeaderboard } from '../firebaseConfig'
import { useHistory } from 'react-router';
import { useState } from 'react';

const Tab1: React.FC = () => {

  const useremail = useSelector((state: any) => state.user.email)

  const history = useHistory()

  const [busy, setBusy] = useState<boolean>(false)

  async function logout() {
    setBusy(true)
    await logoutUser()
    setBusy(false)
    history.replace('/')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLoading message="Please wait.." duration={0} isOpen={busy} />
          <p>hello {useremail}</p>
          <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
