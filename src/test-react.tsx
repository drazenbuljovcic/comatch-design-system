import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <div>App</div>;
}

export default () => {
    ReactDOM.render(<App />, document.querySelector('#root'));
};
