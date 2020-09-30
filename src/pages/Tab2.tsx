import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonThumbnail } from '@ionic/react';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const Tab2: React.FC = () => {
  
  const lst: Number[] = [];
  for (let index = 1; index < 21; index++) {
    lst.push(index);
  }
  const [year, setYear] = useState(new Date().getSeconds());
  
  function calculateTimeLeft(){
    return new Date().getSeconds();
  }

  



  useEffect(() => {
    setTimeout(() => {
      setYear(calculateTimeLeft());
    }, 5000);
  });
  


  setInterval(setYear, 1000)



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
          
          {
            lst.map( n => (


            <IonCol size="4">
            <IonCard>


                <IonItem>
                  <IonThumbnail slot="start">
                    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                  </IonThumbnail>
                  <IonLabel>{n}</IonLabel>
                </IonItem>
            <IonCardContent>

            <IonCardTitle>{year}.jpg</IonCardTitle>
            <IonCardSubtitle>5.2 MB</IonCardSubtitle>
            <IonCardSubtitle>Created: 08/{n}/2020</IonCardSubtitle>
            </IonCardContent>
            </IonCard>
            </IonCol>
            ))
            


          }


        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2