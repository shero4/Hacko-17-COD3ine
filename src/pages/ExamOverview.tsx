import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './ExamOverview.css'
import { filter } from 'ionicons/icons';
import {createCompetition} from '../firebaseConfig'
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const ExamOverview: React.FC = () => {

    const history = useHistory()

    const [cid,setCid] = useState<string>("")

    const callCreateCompetition = async() => {
        const res:string = await createCompetition()
         history.push(`/tab/exam/start/${res}`)
    }



    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                <IonTitle className="ion-title">Prof. XYZ</IonTitle>
                <p className="ion-subscript">Posted 3 days ago!</p>
                <div className="ion-padding">

                    <h1 className="ion-title-2">MATH IA</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit dui, rhoncus vitae nunc eget, mattis cursus tortor. Quisque ut nunc suscipit, efficitur velit nec, interdum lacus. Integer congue ipsum</p>

                    <hr />
                    <p>20 questions<span className="time">(2 hrs)</span></p>
                    <p><span className="topics">3D</span><span className="topics">Matices</span><span className="topics">Algebra</span></p>
                    <div>
                    <IonButton onClick={callCreateCompetition} color="primary" shape="round" size="large" expand="full"  >Start Test</IonButton>

                    </div>

                </div>

            </IonContent>

        </IonPage>


    )
};

export default ExamOverview;