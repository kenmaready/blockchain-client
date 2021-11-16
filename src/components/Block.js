import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Block.css";

export class Block extends Component {

    

    calculateSharecoins = () => {
        let sharecoins = 0;
        this.props.block.transactions.forEach(t => {
            sharecoins += t.amount;            
        });
        return sharecoins;
    }

    listTransactions(transactions) {
        const header = (<Row>
            <Col sm={5}>from</Col>
            <Col sm={5}>to</Col>
            <Col sm={2}>amount</Col>
        </Row>);
        const data = transactions.map(t => {
            return (
            <Row>
                <Col sm={5} className="clickable">{t.from}</Col>
                <Col sm={5} className="clickable">{t.to}</Col>
                <Col sm={2}>{t.amount}</Col>
            </Row>
            );
        });
        return [header, ...data];
    }

    handleClick(idx) {
        console.log("Block", idx, "clicked...");
        return <Navigate to="/block/idx" />
    }

    render() {
        const {block, idx} = this.props;

        return (
            // <Col>
                <Card className="block-card" onClick={() => this.handleClick(this.props.idx)}>
                    <Card.Body>
                        <Card.Text as="div">
                            <Row as="div">
                            <p>{idx === 0 ? <h6>The Genesis Block</h6> :
                                <h6>Block No. {idx}</h6>}</p>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    mined at: 
                                </Col>
                                <Col sm={9}>
                                <small>{new Date(block.timestamp).toLocaleString()}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                by: 
                                </Col>
                                <Col sm={9}>
                                    <small className="clickable">{block.minedBy}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    hash: 
                                </Col>
                                <Col sm={9}>
                                    <small>{block.hash}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    nonce: 
                                </Col>
                                <Col sm={9}>
                                    <small>{block.nonce}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    Sharecoins: 
                                </Col>
                                <Col sm={9}>
                                    <small>{this.calculateSharecoins()}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <small>transactions:</small>
                                </Col>
                                <Col sm={9}>
                                    <small>{this.listTransactions(block.transactions)}</small>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>

                </Card>
            // </Col>
        )
    }
}

export default Block
