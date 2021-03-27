import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './SearchPage.css'
import { filter } from 'ionicons/icons';

const SearchPage: React.FC = () => {
  return (
    <IonPage id="speaker-list">
      <IonHeader className="ion-no-border " translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ion-title">Search</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle className="speaker-title" size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonGrid fixed>

          <IonSearchbar className="ion-searchbar" show-cancel-button="focus" placeholder="Search"></IonSearchbar>
          <div className="ion-icon">
            <IonIcon icon={filter} /><span> Filter</span>
          </div>

          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard className="speaker-card">
                <IonCardHeader>
                  <IonItem button detail={false} lines="none" className="speaker-item" routerLink={"/tab/exam"}>
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
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;