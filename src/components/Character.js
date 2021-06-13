import { React, Component } from 'react';
import styled from 'styled-components';
import charSprites from '../charSprites';

const Char = styled.span`
    display: inline-block;
    width: 128px;
    height: 128px;
    background: url(${p => p.img}) no-repeat center;
    background-size: contain;
`

export default class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position
        };

        this.move = this.move.bind(this);
        this.jump = this.jump.bind(this);
        this.fall = this.fall.bind(this);
        this.keyHandling = this.keyHandling.bind(this);
    }

    keyHandling(e) {
        let { keyCode } = e;
        // console.log(e.keyCode);
        // right: 39
        if (keyCode === 39) {
            this.move('right');
        // left: 37
        } else if (keyCode === 37) {
            this.move('left');
        }
        // up: 38
        if (keyCode === 38) {
            e.preventDefault();
            let newPosition = this.jump();
            setTimeout(() => this.fall(newPosition), 500);
        }
        // down: 40
        if (keyCode === 40) {
            e.preventDefault();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyHandling);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyHandling);
    }

    jump() {
        let newPosition = {...this.state.position},
            prev = { i: this.state.position.x, j: this.state.position.y };

        newPosition.x--;
        this.props.move(newPosition, prev);
        this.setState({ position: newPosition });
        return newPosition;
    }

    fall(position) {
        // let newPosition = { ...position },
        //     prev = { i: position.x, j: position.y };

        // newPosition.x++;
        // this.props.move(newPosition, prev);
        // this.setState({ position: newPosition });
        this.props.fall();
    }

    move(dir) {
        let newPosition = {...this.state.position},
            prev = {i: this.state.position.x, j: this.state.position.y };
        if (dir === 'left') {
            if (newPosition.y === 0) return null;
            newPosition.y--;
        } else {
            if (newPosition.y === 6) return null;
            newPosition.y++;
        }
        this.props.move(newPosition, prev);
        this.setState({ position: newPosition });
    }

    render() {
        return (
            <Char img={charSprites.ken}/>
        );
    }
}