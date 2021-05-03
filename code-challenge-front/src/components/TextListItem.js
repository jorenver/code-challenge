import React from 'react'
import {Row, Col} from 'react-bootstrap';

export default function TextListItem({text, reverse_text, palindromo}) {
    return (
        <Row className='justify-content-md-center'>
            <Col md='4' className='text-left'>
                <strong>text:</strong> 
                {text}
            </Col>
            <Col md='4' className='text-left'>
                <strong>reverse:</strong> 
                {reverse_text}
            </Col>
            <Col md='4' className='text-left'>
                <strong>palindromo:</strong> 
                {palindromo? 'yes': 'no'}
            </Col>
        </Row>
    )
}
