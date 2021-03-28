import React,{useState} from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonGrid, IonRow, IonInput, IonButton } from '@ionic/react';
import './QASlides.css';
import {questionBank} from '../qa';
import {addFriendToCompetition} from '../firebaseConfig';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const qBank = questionBank 
const QASlides: React.FC = () => {

    const [selected, setSelected] = useState<string>('');
    // const callAddFriendToCompetition = async() => {
    //     const res = await addFriendToCompetition();
    //     console.log(res)
    // } 

return (

    <IonPage>
        

<IonContent id="qasec">
    <IonSlides className="io" pager={true} options={slideOpts}>
        {questionBank.map((question,index) =>(

            <IonSlide>
                <IonGrid>
                    <IonRow>
                    <p >Question {question['q-id']}</p>
                    <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel className="ion-subtitle">{question.question}</IonLabel>
            </IonListHeader>
            {question.options.map((option,index) => (
                <IonItem>
                <p>{option}</p>
                <IonRadio slot="start" value={option} />
              </IonItem>
            ))}

            
          </IonRadioGroup>
        </IonList>
                    </IonRow>
                </IonGrid>
           
            

          </IonSlide>
        ))}
        </IonSlides>
        <IonItemDivider>Add a friend:</IonItemDivider>
          <IonItem>
            <IonInput placeholder="Enter your friend's email"  clearInput></IonInput>
          </IonItem>
          <IonItem>
          <IonButton onClick={callAddFriendToCompetition} color="primary" shape="round" size="small"  >Add Friend</IonButton>
              
          </IonItem>

        </IonContent>
      


    </IonPage>
  
);
        };

export default QASlides;