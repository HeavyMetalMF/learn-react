import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "yes", likeCounts: "13"},
    {id: 2, message: "Hello", likeCounts: "14"},
    {id: 3, message: "My first post", likeCounts: "16"},
    {id: 4, message: "i am walk", likeCounts: "20"},
]
let dialogs = [
    {id: 1, name: "Roman"},
    {id: 2, name: "Nasty"},
    {id: 3, name: "Artur"},
    {id: 4, name: "Max"},
    {id: 5, name: "TurumPumPum"},
]
let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "I am pes"},
    {id: 3, message: "You lucky boiiiiiiiiiiiiiii"},
    {id: 4, message: "Ahahahahah"},
    {id: 5, message: "You suck"},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} messages={messages} dialogs={dialogs}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
