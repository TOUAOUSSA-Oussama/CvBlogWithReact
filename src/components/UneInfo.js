import React, { Component } from 'react';

class UneInfo extends Component {
    render(){
        return (
            <div>
                <h3> Projet : {this.props.name.name}</h3>
                <p>Language : {this.props.name.language}</p>
                <a href={this.props.name.html_url}>Cliquer ici</a>
            </div>
        );
    }
    
};

export default UneInfo;