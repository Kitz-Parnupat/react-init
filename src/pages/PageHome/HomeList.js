import React,{Component} from 'react'
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData} from '../../actions/HomeAction';
import axios from 'axios';
class HomeList extends Component{
    componentDidMount(){ 
        axios.get(window.basedURL+'blog/category')
        .then((res)=>{
            this.props.getData(res.data.data)
        })
        .catch((err)=>{

        })
    }
    render(){
        const border = {
            border : '1px solid #ddd'
        }
        
        const TableList = () => {
            // console.log(this.props.home)
            return this.props.home.map((item,index)=>{
                    return (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.blog_category_name}</td>
                            <td>{item.blog_category_status}</td>
                        </tr>
                    )
            })
        }
        
        const TableHome = () => (
            <Table style={border}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>blog_category_name</th>
                    <th>blog_category_status</th>
                </tr>
                </thead>
                <tbody>
                    <TableList/>
                </tbody>
            </Table>
        )

        return (
            <div>
                <TableHome/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        home:state.home.list
    }
}
function mapDispathToProps(dispatch){
    return bindActionCreators({
        getData:getData
    },dispatch)
}

export default connect(mapStateToProps,mapDispathToProps)(HomeList);