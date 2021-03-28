import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { IonSlides, IonSlide, IonContent, IonPage, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonGrid, IonRow, IonInput, IonButton } from '@ionic/react';
import './QASlides.css';
import { questionBank } from '../qa';
import { addFriendToCompetition } from '../firebaseConfig';
import { RouteComponentProps } from 'react-router';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const qBank = questionBank

interface QASlidesProps extends RouteComponentProps<{
  cid: string;
}> {}

const QASlides: React.FC<QASlidesProps> = ({match}) => {

  const history = useHistory()
 
  const cid = match.params.cid

  const [selected, setSelected] = useState<string>('');
  const [addEmail,setAddEmail] = useState<string>(' ');

  const callAddFriendToCompetition = async() => {
      const res = await addFriendToCompetition(cid, addEmail);
      // add toast
      console.log(res)
  } 

  const goToLeaderboard = () => {
    history.push(`/tab/exam/leaderboard/${cid}`)
  }

  return (

    <IonPage>
      <IonContent id="qasec">
        <IonSlides className="io" pager={true} options={slideOpts}>
          {questionBank.map((question, index) => (
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <p >Question {question['q-id']}</p>
                  <IonList>
                    <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                      <IonListHeader>
                        <IonLabel className="ion-subtitle">{question.question}</IonLabel>
                      </IonListHeader>
                      {question.options.map((option, index) => (
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
          <IonInput placeholder="Enter your friend's email" onIonChange={(e : any) => setAddEmail(e.target.value)} clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonButton onClick={callAddFriendToCompetition} color="primary" shape="round" size="small"  >Add Friend</IonButton>
        </IonItem>
        <IonButton onClick={goToLeaderboard} color="danger" shape="round" size="small"  >Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default QASlides;