import React from "react";
import '../resources/layout.css';
function DefaultLayout({ children }) {

    const userMenu=[]
    const adminMenu=[
        {
            name:"Home",
            path: '/admin',
            icon:'ri-home-line',
        },
        {
            name:'Buses',
            path:'/admin/buses',
            icon:'ri-bus-fill',
        },
        {
            name:'Users',
            path:'/admin/users',
            icon:'ri-user-line',
        },
        {
            name:'Bookings',
            path:'/admin/bookings',
            icon:'ri-file-list-line',
        },
        {
            name:'Logout',
            path:'/logout',
            icon:'ri-logout-box-line',
        }
    ]
    const menuToBeRender=adminMenu
    return (
        <div className="layout-parent" >
            <div className="sidebar">
                {menuToBeRender.map((iten,index)=>{
                    return <div></div>;
                })}
            </div>
            <div className="body">
                <div className="header">
                    header
                </div>
                <div className="content">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default DefaultLayout;