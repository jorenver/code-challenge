import React, {useState} from 'react'
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getReverseText } from '../helpers/getReverseText';

export default function AddTextReverse({setTextList}) {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const text = inputValue.trim();
        if (inputValue.trim().length > 2){
            try{
                const resp = await getReverseText(text);
                const {error:msj_error,text:reverse_text, palindromo}  = await resp.json();
                if(resp.status !== 200){
                    alert(`error message: ${msj_error}`);
                }else{
                    setTextList(list => 
                        [{'text': text, 
                        'reverse_text': reverse_text, 
                        'palindromo': palindromo}
                        , ...list]
                    );
                }
            }catch(e){
                alert('error to add text');
            }
            setinputValue('');
        }else{
            alert('Insert more than 2 letters.');
        }
    }

    return (
    <Navbar bg="light" expand="lg" className="justify-content-md-center">
        <Form inline onSubmit={handleSubmit}>
            <FormControl 
                type="text" 
                placeholder="insert Text" 
                className="mr-sm-2" 
                value={inputValue}
                onChange = {handleInputChange}
            />
            <Button type="submit" variant="outline-primary">Send</Button>
        </Form>
    </Navbar>
    )
}

AddTextReverse.propTypes ={
    setTextList: PropTypes.func.isRequired,
}