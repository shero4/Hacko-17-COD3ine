import './ProfilePage.css';
import { IonGrid, IonRow, IonCol, IonContent ,IonPage
,IonTitle,IonAvatar,IonItem,IonLabel,IonText
} from '@ionic/react';


const ProfilePage: React.FC = () => {
  
  
  return (
    
    <IonPage >
      <IonContent id='profile-page-ion-content' fullscreen>

      <IonGrid>
        <IonRow id='profile-heading-section'>
             Profile
        </IonRow>
        <IonRow id="profile-image-and-name-section">
        <IonCol>
            <IonAvatar id='profile-avatar'>
                <img src='./assets/icon/USER.png'/>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime architecto exercitationem minima expedita illum dolor est explicabo, quo quidem. Accusamus a natus adipisci deserunt quis porro molestiae labore tenetur nobis.
            Itaque consequuntur nobis nam laboriosam ex at hic quas facere aliquid. Aperiam tempore sit sapiente accusantium earum nihil aspernatur aliquid eveniet, ratione, exercitationem molestiae recusandae facilis harum magni eum officiis.
          </IonText>
        </IonRow>
        
      </IonGrid>

      </IonContent>
   
  </IonPage>
  );
};

export default ProfilePage;
