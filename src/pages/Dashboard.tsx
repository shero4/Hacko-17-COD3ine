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
} from "@ionic/react";

import styled from "styled-components";

// import "./Dashboard.css";
import { Bar } from "react-chartjs-2";

import { useState } from "react";

const Dashboard: React.FC = (props) => {
  const [busy, setBusy] = useState<boolean>(false);

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

  const viewAll = () => {}; // Loading and viewing more cards from firebase.

  const MyPage = styled(IonPage)`
    margin-top: 1.5rem;
  `;

  const MyContent1 = styled(IonContent)`
    display: flex;
    justify-content: space-between;
  `;

  const MyButton = styled(IonButton)`
    display: flex;
    max-width: 15%;
    justify-content: flex-end;
  `;

  const MyTitle = styled(IonTitle)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    font-size: 2.5rem;
  `;
  const MyTitle1 = styled(IonTitle)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  `;

  const MyBar = styled(Bar)`
    width: 50%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  `;

  const MyCard = styled(IonCard)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <MyPage>
      <IonHeader>
        <MyTitle className="title">DashBoard</MyTitle>
        <MyTitle1 className="secondary">Test Results</MyTitle1>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem>
            <MyBar
              data={barChartData}
              options={{ maintainAspectRatio: true }}
            />
          </IonItem>
        </IonList>
      </IonContent>
      <MyContent1>
        <IonTitle>To Do:</IonTitle>
        <MyButton onClick={viewAll}>View All</MyButton>
      </MyContent1>

      <IonContent>
        <MyCard>
          <IonCardHeader>
            <IonCardTitle>Math Card</IonCardTitle>
            <IonCardSubtitle>Prof A,B,C</IonCardSubtitle>
            <IonCardContent>This is Content.</IonCardContent>
          </IonCardHeader>
        </MyCard>
      </IonContent>
      <IonLoading message="please wait" duration={0} isOpen={busy} />
    </MyPage>
  );
};

export default Dashboard;
