import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {


    render() {


        return (
            <div className="App">
                <h1 >Hello reactjs from phoenix</h1>

            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

