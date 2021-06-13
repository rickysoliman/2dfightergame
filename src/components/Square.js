import { React, Component } from 'react';
import styled from 'styled-components';

const Element = styled.span`
    display: inline-block;
    width: 128px;
    height: 128px;
    background-color: ${p => p.id === 0 ? 'F0FFFF' : 'black'}
`;

// F0FFFF

export default class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let { id } = this.props;
        return (
            <Element id={id}/>
        );
    }
}