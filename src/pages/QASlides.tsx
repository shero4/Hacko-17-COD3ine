import React, { useState,useRef,useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { IonSlides, IonSlide, IonContent, IonPage, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonGrid, IonRow, IonInput, IonButton } from '@ionic/react';
import './QASlides.css';
import { questionBank } from '../qa';
import { addFriendToCompetition,checkAnswer } from '../firebaseConfig';
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


  const slidesRef = useRef<HTMLIonSlidesElement>(null);
const handleNext = () => slidesRef.current?.slideNext();
const handlePrev = () => slidesRef.current?.slidePrev()
 

  const history = useHistory()
 
  const cid = match.params.cid

  const [selected, setSelected] = useState<string>(" ");
  const [quesno, setQuesno] = useState<number>(0);

  const [addEmail,setAddEmail] = useState<string>(' ');


  const handleQuesSubmit = () => {
    checkAnswer(selected,quesno,cid)
    handleNext()

  }

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
      <IonContent className="ion-padding" id="qasec">
        <IonSlides ref={slidesRef} className="io" pager={true} options={slideOpts}>
          {questionBank.map((question, index) => (
            <IonSlide>
              <IonGrid>
                <IonRow>
                  <p >Question {question['q-id']}</p>
                  <IonList>
                    <IonRadioGroup onIonChange={e => {setSelected(e.detail.value)
                    setQuesno(question['q-id'])
                    }}>
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
        {/* <IonButton onClick={handlePrev} color="danger" shape="round" size="small"  >Previous</IonButton> */}
        <IonButton onClick={handleNext} color="danger" shape="round" size="small"  >Next</IonButton>
        <IonItem>
        <IonButton onClick={handleQuesSubmit} color="danger" shape="round" size="small"  >Submit This Question</IonButton>

        </IonItem>

        <IonItemDivider>Add a friend:</IonItemDivider>
        <IonItem>
          <IonInput placeholder="Enter your friend's email" onIonChange={(e : any) => setAddEmail(e.target.value)} clearInput></IonInput>
        </IonItem>
        <IonItem>
          <IonButton onClick={callAddFriendToCompetition} color="primary" shape="round" size="small"  >Add Friend</IonButton>
        </IonItem>
        <IonButton onClick={goToLeaderboard}  color="danger" shape="round" size="small"  >Go to Leaderboard</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default QASlides;