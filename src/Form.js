// 'use strict' får en varning att det inte behövs i moduler
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            title: '',
            desc: '',
            year: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, desc, year } = this.state; 

        return (
            <form onSubmit={this.submitForm}>
                <label>Filmtitel</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title"
                    value={title} 
                    onChange={this.handleChange} />
                <label>Beskrivning</label>
                <input 
                    type="text" 
                    name="desc" 
                    id="desc"
                    value={desc} 
                    onChange={this.handleChange} />
                <label>År</label>
                <input 
                    type="text" 
                    name="year" 
                    id="year"
                    value={year} 
                    onChange={this.handleChange} />
                <input type="button" value="Lägg till" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;