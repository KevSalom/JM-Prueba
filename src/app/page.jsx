"use client";
import { Provider } from 'react-redux';
import store from './redux/store';
import ListOfVideos from './Components/ListOfVideos';

export default function Page() {
  return (
    <Provider store={store}>
      <ListOfVideos/>
    </Provider>
  );
}