import { React, Component } from 'react';

export default class Matrix extends Component {
    constructor() {
        super();

        this.state = {
            matrix: []
        };
    }

    componentDidMount() {
        let matrix = new Array(10);
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = new Array(10).fill(0);
        }
        this.setState({ matrix });
    }

    render() {
        let { matrix } = this.state;

        return (
            <div>
                {matrix.map((row, i) => (
                    <div key={i}>
                         {row.map((col, j) => (
                             <span key={j}>{col}</span>
                         ))}
                    </div>
                ))}
            </div>
        );
    }
}