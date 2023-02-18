import React, { FC, useReducer, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './component/main/homeScreen';
import BookmarkScreen from './component/main/bookmarkScreen';
import { BookmarkType } from './types';
import { bookmarkReducer } from './bookmark/bookmarkReducer';

export const BookmarkContext = createContext({} as BookmarkType);

const App: FC = () => {
  const [state, dispatch] = useReducer(bookmarkReducer, {
    bookmarkArticles: [],
  });

  return (
    // <HomeScreen />

    <BookmarkContext.Provider value={{ bookmarkState: state, bookmarkDispatch: dispatch }}>
    <BrowserRouter>
    <Switch>
        <Route exact path='/'>
        <HomeScreen />
        </Route>
        <Route exact path='/bookmark'>
          <BookmarkScreen />
        </Route>
    </Switch>
    </BrowserRouter>
    </BookmarkContext.Provider>
    // <div className="screen">Yeah</div>
  );
};

export default App;
