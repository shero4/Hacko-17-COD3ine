import React from 'react';
import { IonSlides, IonSlide, IonContent, IonPage } from '@ionic/react';
import './QASlides.css';
import {questionBank} from '../qa';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const qBank = questionBank 
const QASlides: React.FC = () => (
    <IonPage>
        

<IonContent id="qasec">
    <IonSlides pager={true} options={slideOpts}>
        {questionBank.map((question,index) => (
            <IonSlide>
            <h1>Slide 1</h1>
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

export default QASlides;