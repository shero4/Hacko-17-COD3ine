import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './Leaderboard.css'
import { getLeaderboard } from '../firebaseConfig'
import { RouteComponentProps } from 'react-router';
import { useEffect, useState } from 'react';

interface LeaderboardProps extends RouteComponentProps<{
  cid: string;
}> { }

const Leaderboard: React.FC<LeaderboardProps> = ({ match }) => {

  const cid = match.params.cid
  console.log(cid)

  const [leaderboard, setLeaderboard] = useState<any>([])

  useEffect(() => {
    async function getlead() {
      let res = await getLeaderboard(cid);
      setLeaderboard(res);
    }
    getlead()
  }, [])

  return (
    <IonPage id="speaker-list">
      <IonHeader className="ion-no-border " translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle className="ion-title">Leaderboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle className="speaker-title" size="large">Leaderboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {leaderboard.map((member:any, index:number) => (
            <IonItem key={index}>
              <IonLabel>{member.score + '  -  ' + member.email}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Leaderboard;