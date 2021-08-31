import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Steps, Step } from "react-step-builder"
import './index.css';
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"
import FinalStep from "./FinalStep"
import theme from "../theme/custom_style"
import { ThemeProvider } from '@material-ui/core/styles';

class App extends Component {


    render() {


        return (
            <ThemeProvider theme={theme}>
            <div className="App">
                <Steps>
                    <Step component={Step1} />
                    <Step component={Step2} />
                    <Step component={Step3} />
                    <Step component={Step4} />
                    <Step component={Step5} />
                    <Step component={Step6} />
                    <Step component={Step7}/>

                    <Step component={FinalStep} />
                </Steps>

            </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

