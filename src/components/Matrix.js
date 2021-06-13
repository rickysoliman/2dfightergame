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
        this.fall = this.fall.bind(this);
        this.findChar = this.findChar.bind(this);
    }

    componentDidMount() {
        let matrix = new Array(5);
        for (let i = 0; i < matrix.length; i++) {
            if (i < matrix.length - 2) {
                matrix[i] = new Array(7).fill(0);
            } else if (i === matrix.length - 2) {
                let row = new Array(7).fill(0);
                row[1] = 1;
                matrix[i] = row;
            } else {
                matrix[i] = new Array(7).fill(2);
            }
        }
        this.setState({ matrix });
    }

    moveCharacter(newPosition, prevPosition) {
        let newMatrix = [...this.state.matrix];
        let { x, y } = newPosition;
        let { i, j } = prevPosition;
        newMatrix[x][y] = 1;
        newMatrix[i][j] = 0;
        this.setState({ matrix: newMatrix });
    }

    findChar() {
        let matrix = [...this.state.matrix];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    return { x: i, y: j };
                }
            }
        }
    }

    fall() {
        let newMatrix = [...this.state.matrix];
        let prevPosition = this.findChar(),
            { x, y } = prevPosition,
            newPosition = { x: prevPosition + 1, y: prevPosition.y };
        newMatrix[x][y] = 0;
        newMatrix[newPosition.x][newPosition.y] = 1;
        console.log({ prevPosition, newPosition });
        this.setState({ matrix: newMatrix });
    }

    render() {
        let { matrix } = this.state;

        return (
            <>
                <div style={{ width: 1366}}>
                    {matrix.map((row, i) => (
                        <div key={i}>
                            {row.map((col, j) => col === 1 ? <Character position={{ x: i, y: j }} move={this.moveCharacter} fall={this.fall} id={col} key={j} /> : <Square id={col} key={j} />)}
                        </div>
                    ))}
                </div>
            </>
        );
    }
}