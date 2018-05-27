import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';

import NavBar from './navigation/NavBar';
import CompetitionItem from './CompetitionItem';
import EventItem from './EventItem';
import EntryList from './EntryList';

import EntryTransformer from './utils/EntryTransformer';
import RoutineMapper from "./utils/RoutineMapper";
import DateUtil from "./utils/DateUtil";
import AgeGroupUtil from "./utils/AgeGroupUtil";
import GenderUtil from "./utils/GenderUtil";


const ORANGE_API = 'https://orange.lefido.co.za/api';
const BLUE_API = 'https://blue.lefido.co.za/api';

const URI_COMPETITIONS = '/competitions';
const URI_EVENTS = '/events';
const URI_ENTRIES = '/entries';
const URI_GYMNASTS = '/gymnasts';


const orangeHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const blueHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            error: null,
            competitions: [],
            events: [],
            entries: [],
            gymnasts: [],
        };
    }

    handleFlavorSelection = (flavor) => {
        this.setState({
            flavor: flavor
        });
    };

    render() {
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
        }

        return (
            <div className="App">
                <NavBar/>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Lefido Orange</h1>
                </header>

                {(this.state.competitions || []).sort((a, b) => Object.compare(a.startDate, b.startDate))
                    .map((competition) =>
                        <CompetitionItem key={competition.id} name={competition.name}>
                            {
                                this.getEvents(competition.id).map((event) => this.createEventItem(event))
                            }
                        </CompetitionItem>
                    )
                }
            </div>
        );
    }

    getEvents(competitionId) {
        return (this.state.events || [])
            .filter((event) => event.competition_id === competitionId);
    }

    createEventItem(event) {
        const applicableEntries = (this.state.entries || [])
            .filter((entry) => entry.event_id === event.id)
            .map((entry) => EntryTransformer.populateEntryWithGymnastData(entry, this.state.gymnasts));
        const gymnastNames = applicableEntries.map((entry) => entry.firstName).join(', ');
        const oldestAge = applicableEntries.map((entry) => entry.dateOfBirth)
            .map((dateOfBirth) => DateUtil.calculateAgeAtTheEndOfThisYear(dateOfBirth))
            .sort((a, b) => b - a).find(() => true);

        const genders = applicableEntries.map((entry) => entry.identificationNumber)
            .map(idNumber => GenderUtil.getGenderLetter(idNumber));

        return (
            <EventItem key={event.id} name={event.id + " (" + gymnastNames + ") [Level " + event.level + "]"}>
                <h4>Oldest age: {oldestAge}</h4>
                <h4>Group: {GenderUtil.getGenderGroup(genders)}</h4>
                <h4>Age Group: {AgeGroupUtil.map(event.level, oldestAge)}</h4>
                <h4>Genders: {genders.join(',')}</h4>
                <h4>Routine: {RoutineMapper.map(event.level)}</h4>
                <h4>Club: </h4>
                <EntryList entries={applicableEntries}/>
            </EventItem>
        )
    }

    componentDidMount() {
        this.setState({isLoading: true});


        fetch(ORANGE_API + URI_COMPETITIONS, {
            method: 'GET',
            headers: orangeHeaders,
            credentials: "same-origin"
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    competitions: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });


        fetch(ORANGE_API + URI_EVENTS, {
            method: 'GET',
            headers: orangeHeaders,
            credentials: "same-origin"
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    events: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });


        fetch(ORANGE_API + URI_ENTRIES, {
            method: 'GET',
            headers: orangeHeaders,
            credentials: "same-origin"
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    entries: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });


        fetch(BLUE_API + URI_GYMNASTS, {
            method: 'GET',
            headers: blueHeaders,
            credentials: "include"
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    gymnasts: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default App;
