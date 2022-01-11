import React, { Component } from 'react';
import UneInfo from './UneInfo';

class GitHub extends Component {
    constructor(){
        super();
        this.state = {
            loading: true,
            gitData: null
        }
    };

    async componentDidMount(){
        const url = "https://api.github.com/users/TOUAOUSSA-Oussama/repos";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            gitdata: data
        });
        console.log(this.state.gitdata.length)
    }


    render() {
        // const infos = !this.state.loading? this.state.gitData.map( (info) => <UneInfo name={info.name} />): (<li>No data</li>;

        return (
            <div>
                {this.state.loading? <span>Laoding...</span>:
                <span>
                        {this.state.gitdata.length !== 0? this.state.gitdata.map( (info) => <UneInfo name={info} />): <span>blabla</span>} 
                </span>}
            </div>
        );
    }
    
};

export default GitHub;