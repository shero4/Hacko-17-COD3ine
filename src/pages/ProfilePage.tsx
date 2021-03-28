import './ProfilePage.css';
import { IonGrid, IonRow, IonCol, IonContent ,IonPage
,IonTitle,IonAvatar,IonItem,IonLabel,IonText
} from '@ionic/react';


const ProfilePage: React.FC = () => {
  
  
  return (
    
    <IonPage >
      <IonContent className="ion-padding" id='profile-page-ion-content' fullscreen>

      <IonGrid>
        <IonRow id='profile-heading-section'>
             Profile
        </IonRow>
        <IonRow id="profile-image-and-name-section">
        <IonCol>
            <IonAvatar id='profile-avatar'>
                <img src='/assets/USER.png'/>
            </IonAvatar>
        </IonCol>
        <IonCol id='user-name-and-email-section'>
            <IonRow id='user-name'>
                Aryamann Ningombam
            </IonRow>
            <IonRow id='user-email'>
                aryamannsingh9@gmail.com
            </IonRow>
        </IonCol>


        </IonRow>
        <IonRow  id='profile-description-section-heading'>
             Description
        </IonRow>
        <IonRow>
          <IonText id='user-description-text'>
            18 year old student preparing for JEE examinations
          </IonText>
        </IonRow>
        
      </IonGrid>

      </IonContent>
   
  </IonPage>
  );
};

export default ProfilePage;
