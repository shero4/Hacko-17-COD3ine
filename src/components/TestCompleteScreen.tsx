import './TestCompleteScreen.css';
import {IonImg,IonThumbnail,  IonContent, IonHeader, IonPage,
  IonTitle, IonCard, IonToolbar} from '@ionic/react';


const TestCompleteScreen: React.FC = () => {
  const logoSource : string = 'assets/icon/test-complete-celebration.png';
  
  return (
    <IonPage >
    <div id="main-screen">
    <div id="text-screen">
    <div id="bravo-heading">Bravo!</div>
    <div id="main-screen-sub-heading">
      <div>You have completed a test!</div>
      <div>Your score will we evaluated soon.</div>
    </div>

    </div>
    <div id='image-screen'>
  
    <img id="screen-main-logo" src={logoSource}/>
  
    
    </div>

    <div id='main-button-screen'>
<button id="screen-main-button">See My Results</button>
    </div>

    
  </div>

  </IonPage>
  );
};

export default TestCompleteScreen;
