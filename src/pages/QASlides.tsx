import React,{useState} from 'react';
import { IonSlides, IonSlide, IonContent, IonPage, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonGrid, IonRow } from '@ionic/react';
import './QASlides.css';
import {questionBank} from '../qa';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const qBank = questionBank 
const QASlides: React.FC = () => {

    const [selected, setSelected] = useState<string>('');

return (

    <IonPage>
        

<IonContent id="qasec">
    <IonSlides className="ion-carousel" pager={true} options={slideOpts}>
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
                <IonLabel>{option}</IonLabel>
                <IonRadio slot="start" value={option} />
              </IonItem>
            ))}

            
          </IonRadioGroup>
        </IonList>
                    </IonRow>
                </IonGrid>
           
            

          </IonSlide>
        ))}
      
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>


    </IonPage>
  
);
        };

export default QASlides;