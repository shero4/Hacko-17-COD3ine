import { IonButton, IonButtons, IonRow, IonCol, IonGrid, IonContent, IonImg, IonText, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './PreLogin.css'



const PreLogin: React.FC = () => {

  const mainLogoSource: string = './assets/main-logo-with-tagline.png';

  return (
    <IonPage >
      <IonContent id="background-image-section" >
        <IonImg id="main-logo-styling" src={mainLogoSource} />
      </IonContent>
      <IonContent id="buttons-section" >
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton class="explore-more-button" shape='round' routerLink="/register">Sign Up</IonButton>
            </IonCol>
            <IonCol>
              <IonButton class="explore-more-button" shape='round' routerLink="/login">Log In</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
};

export default PreLogin;
