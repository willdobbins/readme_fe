import React from 'react';
import ReactDOM from 'react-dom';
import {Book} from './Book';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<table>
        <Book isbn={1234} quantity={1}  authors={["Some Guy"]} categories={["Fiction"]} publishDate={"2019-10-10"}
              publisher={"Some Publisher"} title={"Some book"}
              thumbnail={"https://via.placeholder.com/128x192.png?text=Book%20Cover"}/>
    </table>, div);
    ReactDOM.unmountComponentAtNode(div);
});