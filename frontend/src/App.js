import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ScheduleForm from './components/ScheduleForm';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path="/schedule" component={ScheduleForm} />
            </Switch>
        </Router>
    );
}

export default App;
