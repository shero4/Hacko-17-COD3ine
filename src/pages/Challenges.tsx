import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './SearchPage.css'
import { filter } from 'ionicons/icons';
import {getCompetitions} from '../firebaseConfig'
import { useEffect, useState } from 'react';

const Challenges: React.FC = () => {

    const [challenges,setChallenges] = useState([])

    useEffect(() => {
        async function getchallenges() {
          let res = await getCompetitions();
          console.log(res)
          setChallenges(res);
        }
        getchallenges()
      }, [])

  return (
    <IonPage id="speaker-list">
      <IonHeader className="ion-no-border " translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ion-title">Challenges</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle className="speaker-title" size="large">Challenges</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonGrid fixed>

          <IonSearchbar className="ion-searchbar" show-cancel-button="focus" placeholder="Search"></IonSearchbar>
          {challenges.map((challenge,index) => (

<IonCol key={index} size="12" size-md="6">
<IonCard className="speaker-card">
  <IonCardHeader>
    <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/tab/exam/start/${challenge['cid']}`}>
      <IonLabel>
        <h2 className="ion-subtitle">Competition ID:</h2>
        <p className="sp-teacher">{challenge['cid']}</p>
      </IonLabel>
    </IonItem>
  </IonCardHeader>

  <IonCardContent>
  </IonCardContent>
</IonCard>
</IonCol>


          ))}

          <IonRow>


          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Challenges;