import { React, Component } from 'react';
import styled from 'styled-components';

const Char = styled.span`
    display: inline-block;
    width: 64px;
    height: 64px;
    background-color: red;
`

export default class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position
        };

        this.move = this.move.bind(this);
    }

    move(dir) {
        let newPosition = {...this.state.position},
            prev = {
                i: this.state.position.x,
                j: this.state.position.y
            };
        if (dir === 'left') {
            newPosition.y--;
        } else {
            newPosition.y++;
        }
        this.props.move(newPosition, prev);
        this.setState({ position: newPosition });
    }

    render() {
        return (
            <>
                <Char id={1}/>
                <button onClick={() => this.move('left')}>{'<'}</button>
                <button onClick={() => this.move('right')}>{'>'}</button>
            </>
        );
    }
}