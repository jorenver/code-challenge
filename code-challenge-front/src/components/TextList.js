import React from 'react'
import {Container} from 'react-bootstrap';
import TextListItem from './TextListItem';

export default function TextList({textList}) {
    
    return (
        <>
            <h3 className='text-left'>Results:</h3>
            <Container>
                {
                    textList.map((item) =>{
                        return <TextListItem
                                    key={item.text}
                                    {...item}
                                />
                    })
                }
            </Container>
        </>
    )
}
