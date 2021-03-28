import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './Leaderboard.css'
import { filter } from 'ionicons/icons';

const Leaderboard: React.FC = () => {
  return (
    <IonPage id="speaker-list">
      <IonHeader className="ion-no-border " translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
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
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Leaderboard;