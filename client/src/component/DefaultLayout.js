import React from "react";
import '../resources/layout.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DefaultLayout({ children }) {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = React.useState(false);
    const { user } = useSelector(state => state.users)
    const userMenu = [
        {
            name: 'Home',
            icon: 'ri-home-line',
            path: '/'
        }, {
            name: 'Booking',
            icon: 'ri-file-list-line',
            path: 'bookings'
        }, {
            name: 'Profile',
            icon: 'ri-user-line',
            path: '/profile'
        },
        {
            name: 'Logout',
            icon: 'ri-logout-box-line',
            path: '/logout'
        }
    ]
    const adminMenu = [
        {
            name: "Home",
            path: '/admin',
            icon: 'ri-home-line',
        },
        {
            name: 'Buses',
            path: '/admin/buses',
            icon: 'ri-bus-fill',
        },
        {
            name: 'Users',
            path: '/admin/users',
            icon: 'ri-user-line',
        },
        {
            name: 'Bookings',
            path: '/admin/bookings',
            icon: 'ri-file-list-line',
        },
        {
            name: 'Logout',
            path: '/logout',
            icon: 'ri-logout-box-line',
        }
    ]
    const menuToBeRender = user?.isAdmin ? adminMenu : userMenu;
    const activeRoute = window.location.pathname;
    return (
        <div className="layout-parent" >
            <div className="sidebar">
                <div className="sidebar-header-logo">
                    <div className="logo-menu">
                        {/* This is Sidebar layout responsivnes */}
                        {collapsed ? (

                            <i class="ri-menu-2-fill" onClick={() => setCollapsed(!collapsed)}></i>
                        ) : (
                            <i class="ri-close-line" onClick={() => setCollapsed(!collapsed)}></i>)}
                    </div>
                    <h1 className='logo'>EB</h1>
                    <h1 className='role'>{user?.isAdmin ? 'Admin' : 'User'} :<br />{user?.name}</h1>
                </div>
                <div className="d-flex flex-column gap-3 justify-coontent-start menu">
                    {menuToBeRender.map((item, index) => {
                        return (
                            <div className={`${activeRoute === item.path && "active-menu-item"} menu-item`}>
                                <i className={item.icon}></i>
                                {!collapsed && <span onClick={() => {
                                    if (item.path == '/logout') {
                                        localStorage.removeItem('token');
                                        navigate('/login');
                                    } else {
                                        navigate(item.path);
                                    }
                                }}>{item.name}</span>}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="body">
                <div className="header">
                    {user && <h1>Welcome Back {user?.name} !</h1>}
                 
                    {/* {collapsed ? (
                        <i class="ri-menu-2-fill" onClick={() => setCollapsed(!collapsed)}></i>
                    ) : (
                        <i class="ri-close-line" onClick={() => setCollapsed(!collapsed)}></i>)} */}

                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;