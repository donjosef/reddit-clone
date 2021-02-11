import React, { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import Subreddits from './components/Subreddits'
import Subreddit from './components/Subreddit'
import { useSelector, useDispatch } from 'react-redux'
import { authSuccess, logout } from './store/actions/auth'
import { setSubreddits } from './store/actions/subreddits'

import { Switch, Route } from 'react-router'
import firebase from './firebase'
import db from './db'

import 'bootswatch/dist/journal/bootstrap.min.css'
import './App.css';

function App() {
  const user = useSelector(state => state.auth.user)
  const subreddits = useSelector(state => state.subreddits)

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => { //event listener when authentication state changes(after clicking on login button)
      if (user) {
        const createdUser = {
          id: user.uid,
          name: user.displayName,
          image: user.photoURL,
          created_at: firebase.firestore.FieldValue.serverTimestamp()
        }

        await db.collection('users').doc(createdUser.id).set(createdUser)
        dispatch(authSuccess(createdUser))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  useEffect(() => { //non so se è l soluzione migliore, perchè gestire subreddits qui invece che nel suo component è un po' strano... però funziona. Il problema è legato alle implicazioni che firebase comporta. INfatti se non mi collego al db, non ottengo la collezione. Ma la connessione al db veniva effettuata nel mount, e nello stato precedente Subreddits component giustamente non venendo montato, non aveva modo di connettersi al db, quindi subreddits rimaneva vuoto: [], quindi la logica dentro Subreddit component si interrompeva (essendo subreddits array vuoto, il find ritornava undefined... da approfondire!!!)
    const unsubsrcibe = db
      .collection('subreddits')
      .onSnapshot(snapshot => {
        console.log('inside event snapshot, invoked!')
        const subreddits = []
        snapshot.forEach(doc => {
          subreddits.push(doc.data())
        })

        dispatch(setSubreddits(subreddits))
      })

    return () => {
      unsubsrcibe()
    }
  }, [])

  return (
    <div className="App">
      <Layout user={user}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/subreddits" render={() => <Subreddits subreddits={subreddits}/> } />
          <Route path="/r/:name">
            <Subreddit user={user} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
