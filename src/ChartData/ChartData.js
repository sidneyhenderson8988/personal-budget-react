import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2'


export default class PieChartComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            labels: ['Eat Out', 'Rent', 'Grocery', 'Gas', 'Baby Sitter', 'Yard Service', 'Car Payment'],
            datasets: [{
                data: [25,375,110,30,40,20,85],
                backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#fd6b19', '#2bcf57', '#db1414', '#8c27cf']
            }]
        }
    }

    render() {
        return (
            <div>
                <h3>Chart.js with React</h3>
                <Pie
                    data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                    
                    />
                    <br/>
            </div>
        )
    }
}
