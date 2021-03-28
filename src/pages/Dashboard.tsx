import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonSearchbar
} from "@ionic/react";

import styled from "styled-components";
import './Dashboard.css';

// import "./Dashboard.css";
import { Bar } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from "react";
// import { logoutUser } from '../firebaseConfig'

const Dashboard: React.FC = () => {
  const useremail = useSelector((state: any) => state.user.email)

  const history = useHistory()

  // const [busy, setBusy] = useState<boolean>(false)

  // async function logout() {
  //   setBusy(true)
  //   await logoutUser()
  //   setBusy(false)
  //   history.replace('/')
  // }
  const barChartData = {
    labels: ["1st", "2nd", "3rd", "4th", "5th"],
    datasets: [
      {
        label: "Scores",
        backgroundColor: "#949494",
        borderColor: "#000000",
        borderWidth: 1,
        hoverBackgroundColor: "#4AA8FF",
        hoverBorderColor: "#4a4dff",
        data: [65, 59, 80, 81, 56, 55, 40], // Random Scores, we need to connect it to Firebase.
      },
    ],
  };

  const viewAll = () => { }; // Loading and viewing more cards from firebase.

  // const MyPage = styled(IonPage)`
  //     margin-top: 1.5rem;
  //   `;

  // const MyContent1 = styled(IonContent)`
  //     display: flex;
  //     justify-content: space-between;
  //   `;

  // const MyButton = styled(IonButton)`
  //     display: flex;
  //     max-width: 15%;
  //     justify-content: flex-end;
  //   `;

  // const MyTitle = styled(IonTitle)`
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     flex-direction: column;
  //     font-size: 2.5rem;
  //   `;
  // const MyTitle1 = styled(IonTitle)`
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     flex-direction: column;
  //   `;

  const MyBar = styled(Bar)`
      width: 70%;
      height: 100vh;
      margin-left: auto;
      margin-right: auto;
      color:red;
    `;

  // const MyCard = styled(IonCard)`
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     width: 50%;
  //     margin-left: auto;
  //     margin-right: auto;
  //   `;

  return (

    <IonPage id="search-list">
      <IonHeader className="ion-no-border" translucent={true}>
        <IonToolbar>
          <IonTitle className="ion-title"  >Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen={true}>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed>
        <p className="greeting-text">Hello, {useremail.split('@')[0] || ''}!</p>
          <h5 className="ion-subtitle">Test Results</h5>
          
          <IonCard className="ion-card">
            <MyBar
              data={barChartData}
              options={{ maintainAspectRatio: true }}
            />
          </IonCard>
          <h1 className="ion-title-2"> To Do :</h1>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard className="speaker-card">
                <IonCardHeader>
                  <IonItem button detail={false} lines="none" className="speaker-item">
                    <IonLabel>
                      <h2 className="ion-subtitle">MATH IA</h2>
                      <p className="sp-teacher">Prof. XYZ</p>
                    </IonLabel>
                  </IonItem>
                </IonCardHeader>
                <IonCardContent>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-md="6">
              <IonCard className="speaker-card">
                <IonCardHeader>
                  <IonItem button detail={false} lines="none" className="speaker-item">
                    <IonLabel>
                      <h2 className="ion-subtitle">MATH IA</h2>
                      <p className="sp-teacher">Prof. XYZ</p>
                    </IonLabel>
                  </IonItem>
                </IonCardHeader>
                <IonCardContent>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <IonButton onClick={logout}>Logout</IonButton> */}
      </IonContent>
    </IonPage>







    //   <IonPage>
    //       <IonContent className="ion-padding" fullscreen={true} >
    //           <IonHeader collapse="condense" className="ion-no-border">
    //               <IonToolbar>
    //                   <IonTitle size="large">Dashboard</IonTitle>
    //               </IonToolbar>
    //           </IonHeader>

    //           <IonGrid fixed>
    //               <IonRow>
    //               <MyBar
    //             data={barChartData}
    //             options={{ maintainAspectRatio: true }}
    //           />

    //               </IonRow>
    //           </IonGrid>

    //       </IonContent>
    //     <IonHeader className="ion-no-border" translucent={true}>
    //         <IonToolbar>
    //         <IonTitle className="title">DashBoard</IonTitle>
    //       <MyTitle1 className="secondary">Test Results</MyTitle1>
    //         </IonToolbar>

    //     </IonHeader>
    //     <IonContent class="ion-padding" fullscreen={true}>
    //         <IonGrid fixed>
    //         <MyBar
    //             data={barChartData}
    //             options={{ maintainAspectRatio: true }}
    //           />

    //         </IonGrid>
    //       <IonList>
    //         <IonItem>

    //         </IonItem>
    //       </IonList>
    //     </IonContent>
    //     <MyContent1>
    //       <IonTitle>To Do:</IonTitle>
    //       <MyButton onClick={viewAll}>View All</MyButton>
    //     </MyContent1>

    //     <IonContent>
    //       <MyCard>
    //         <IonCardHeader>
    //           <IonCardTitle>Math Card</IonCardTitle>
    //           <IonCardSubtitle>Prof A,B,C</IonCardSubtitle>
    //           <IonCardContent>This is Content.</IonCardContent>
    //         </IonCardHeader>
    //       </MyCard>
    //     </IonContent>
    //     <IonLoading message="please wait" duration={0} isOpen={busy} />
    //   </IonPage>
  );
};

export default Dashboard;