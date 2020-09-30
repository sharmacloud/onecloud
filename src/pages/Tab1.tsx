import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const Tab1: React.FC = () => {
  return (
    <IonPage>



      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>


      <IonGrid fixed>
        
      <IonRow>
          
          <IonCol size="12">
        <IonCard>


          <IonButton>
            Yes
          </IonButton>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>

        </IonCard>
        </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1