import { React, Component } from 'react';
import Square from './Square';
import Character from './Character';

export default class Matrix extends Component {
    constructor() {
        super();

        this.state = {
            matrix: []
        };

        this.moveCharacter = this.moveCharacter.bind(this);
    }

    componentDidMount() {
        let matrix = new Array(12);
        for (let i = 0; i < matrix.length; i++) {
            if (i < matrix.length - 2) {
                matrix[i] = new Array(21).fill(0);
            } else if (i === matrix.length - 2) {
                let row = new Array(21).fill(0);
                row[1] = 1;
                matrix[i] = row;
            } else {
                matrix[i] = new Array(21).fill(2);
            }
        }
        this.setState({ matrix });
    }

    moveCharacter(position, prev) {
        let newMatrix = [...this.state.matrix];
        let { x, y } = position;
        let { i, j } = prev;
        newMatrix[x][y] = 1;
        newMatrix[i][j] = 0;
        this.setState({ matrix: newMatrix });
    }

    render() {
        let { matrix } = this.state;

        return (
            <>
                <div style={{ width: 1366}}>
                    {matrix.map((row, i) => (
                        <div key={i}>
                            {row.map((col, j) => col === 1 ? <Character position={{ x: i, y: j }} move={this.moveCharacter} id={col} key={j} /> : <Square id={col} key={j} />)}
                        </div>
                    ))}
                </div>
            </>
        );
    }
}