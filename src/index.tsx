import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Book} from "./components/Book/Book";

ReactDOM.render(<table><Book isbn={1234} quantity={1} authors={["Some Guy","Another Guy"]} categories={["Fiction"]}
                             publishDate={"2019-10-10"}
                             publisher={"Some Publisher"} title={"Some book"}
                             thumbnail={"https://via.placeholder.com/128x192.png?text=Book%20Cover"}/>
</table>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
