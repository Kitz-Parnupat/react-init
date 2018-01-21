import React from 'react';
import {Button,Input,FormGroup,Form} from 'reactstrap';
const HomeSearch = ()=>{
    return (
        <Form inline>
            <FormGroup style={{width:'100%'}}>
                <Input type="text" placeholder="Search ..." />
                <Button color="primary">ค้นหา</Button>
            </FormGroup>
        </Form>
    )
}

export default HomeSearch;