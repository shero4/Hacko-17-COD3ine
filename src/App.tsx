import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, podium, personCircle, search } from 'ionicons/icons';
import PreLogin from './pages/PreLogin'
import Login from './pages/Login'
import Register from './pages/Register'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import { useEffect, useState } from 'react';
import { getCurrentUser } from './firebaseConfig'
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';
import Dashboard from './pages/Dashboard';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import SearchPage from './pages/SearchPage';
import ExamOverview from './pages/ExamOverview';
import QASlides from './pages/QASlides';
import Leaderboard from './pages/Leaderboard';
import ProfilePage from './pages/ProfilePage';
import MainHomePage from './pages/MainHomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';



const MainRouting: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/" component={PreLogin} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/register" component={SignUpPage} exact />
            <Route exact path="/tab/exam">
              <ExamOverview />
            </Route>
            <Route exact path="/tab/exam/start/:cid" component={QASlides}/>
            <Route exact path="/tab/exam/leaderboard/:cid" component={Leaderboard}/>

            <Route exact path="/tab/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/tab/search">
              <SearchPage />
            </Route>
            <Route path="/tab/profile">
              <ProfilePage />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color='primary'>
            <IonTabButton  className='tab-bar-icon-styling' tab="tab1" href="/tab/dashboard">
              <IonIcon  icon={home} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
            <IonTabButton  className='tab-bar-icon-styling' tab="tab2" href="/tab/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton  className='tab-bar-icon-styling' tab="tab3" href="/tab/profile">
              <IonIcon  icon={personCircle} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

const App: React.FC = () => {

  const [busy, setBusy] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      console.log(user)
      if (user) {
        //logged in
        setIsLoggedIn(true)
        dispatch(setUserState(user.email))
        window.history.replaceState({}, '', '/tab/dashboard')
      } else {
        setIsLoggedIn(false)
        window.history.replaceState({}, '', '/')
      }
      setBusy(false)
    })
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        {busy ? <IonSpinner /> : <MainRouting />}
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
