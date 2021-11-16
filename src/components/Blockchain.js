import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Block from "./Block";
import { getBlockchain } from "../actions.js";

export class Blockchain extends Component {
    constructor() {
        super();
        this.state = {
            bc: {},
            loading: true
        }
    }
    
    componentDidMount() {
        this.setState({ loading: true });
        getBlockchain()
        .then(({ data }) => {
            console.log(data);
            if (data.success) {
                this.setState({ bc: data.blockchain, loading: false });
            }
        })
        .catch(err => {
            console.log(err);
            this.setState({ loading: false })
        })
    }

    renderBlocks() {
        console.log("bc in renderBlocks:", this.state.bc);
        return (
            this.state.bc.map((block, idx) => {
                return <Block key={idx} block={block} idx={idx}/>;       
    })
        )
    }    

    render() {
        const { bc, loading } = this.state;
        console.log(bc);



        return (
            <div>
                    <h3>Current Blockchain:</h3>
                    {loading ? (
                        <p>loading...</p>
                    ) : (
                        <Container fluid>
                            <Row>
                                {this.renderBlocks()}
                            </Row>
                        </Container>
                    )}
            </div>
        )
    }
}

export default Blockchain
