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
        this.keyHandling = this.keyHandling.bind(this);
    }

    keyHandling(e) {
        console.log(e.keyCode);
        // right: 39
        if (e.keyCode === 39) {
            this.move('right');
        // left: 37
        } else if (e.keyCode === 37) {
            this.move('left');
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyHandling);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyHandling);
    }

    move(dir) {
        let newPosition = {...this.state.position},
            prev = {
                i: this.state.position.x,
                j: this.state.position.y
            };
        if (dir === 'left') {
            if (newPosition.y === 0) return null;
            newPosition.y--;
        } else {
            if (newPosition.y === 20) return null;
            newPosition.y++;
        }
        this.props.move(newPosition, prev);
        this.setState({ position: newPosition });
    }

    render() {
        return (
            <Char/>
        );
    }
}