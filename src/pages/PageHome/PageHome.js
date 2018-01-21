import React, { Component } from 'react'
import {Button} from 'reactstrap'
import HomeList from './HomeList'
import HomeSearch from './HomeSearch'
import HomeForm from './HomeForm'
const style = {
    header:{
        fontWeight: 'normal',
        marginBottom: 0
    },
    button:{
        margin: '0.5rem 0'
    }
}
class PageHome extends Component {
    constructor(){
        super()
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.refs.form.toggle()
    }
    render() {
        return (
            <div>
                <h3 style={style.header}>Home</h3>
                <div style={style.button}>
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <Button color="primary" onClick={this.toggle}>เพิ่มบทความ</Button>
                            <HomeForm ref="form"/>
                        </div>
                        <div className="col-4">
                            <HomeSearch/>
                        </div>
                    </div>   
                </div>
                <HomeList/>
            </div>
        )
    }
    toPage(){
        // window.location.href = './about'
    } 
}
export default PageHome;