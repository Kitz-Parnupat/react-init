import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const style = {
   
    breadcrumb:{
        backgroundColor:'white',
        padding: '0.75rem 0'
    }
}

const HomeRoute = () => {
    var list = [
        {
            path : '#',
            name : 'Home'
        },
        {
            path : '#',
            name : 'Form'
        },
        {
            path : '#',
            name : 'Data'
        }
    ]
    const item = list.map((item)=>{
        return (
            <BreadcrumbItem><a href={item.path}>{item.name}</a></BreadcrumbItem>
        )
    })

    return (
        <Breadcrumb style={style.breadcrumb}>
            {item}
        </Breadcrumb>
    )
}
export default HomeRoute;