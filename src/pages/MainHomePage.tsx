import './MainHomePage.css';
import {IonImg,IonThumbnail,  IonContent, IonHeader, IonPage,
  IonTitle, IonCard, IonToolbar,IonButton,IonText,IonCol} from '@ionic/react';


const TestCompleteScreen: React.FC = () => {
  const mainLogoSource : string = 'assets/icon/main-logo.png';
  
  return (
    
    <IonPage >
      <IonContent id="background-image-section" >
           
           <IonImg id="main-logo-styling" src={mainLogoSource}/>

           
      </IonContent>
      <IonContent id="buttons-section" >
        <IonButton expand='block' id="explore-more-button"  shape='round'>Explore More</IonButton>
        <IonText id='log-in-section'>Have an account?<strong>Log In</strong></IonText>
      </IonContent>
   
  </IonPage>
  );
};

export default TestCompleteScreen;
