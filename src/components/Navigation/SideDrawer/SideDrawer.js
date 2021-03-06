import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import HOC from '../../../hocomponents/HOC';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Logo from '../../Logo/Logo';
import './SideDrawer.css';

const SideDrawer = props =>{
    let attachedClasses = ['SideDrawer', 'Close'];
    if(props.open){
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return(
        <HOC>
            <Backdrop show={props.open} clicked={props.closeHandler}/>
            <div className={attachedClasses.join(' ')} onClick={props.closeHandler}>
                <Logo height="10%"/>
                <nav>
                    <NavigationItems isAuth={props.isAuth}/>
                </nav>
            </div>
        </HOC>
    );
};

export default SideDrawer;