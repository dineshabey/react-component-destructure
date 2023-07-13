import React from 'react';
import DashbordTitle from '../../components/DashbordTitle';
import BrandLogo from '../../components/BrandLogo';
import ThemeList from './leftMenu/ThemeList';
import ComonentsList from './leftMenu/ComonentsList';
import ExtractList from './leftMenu/ExtractList';

export default function LeftMenu() {
    return (
        <div>
            <h2>Left Menu</h2>
            {/* <h2>Left Menu</h2> */}
            {/* <p>Dashbord</p> */}
            
            <BrandLogo/>    
            <DashbordTitle/>
            {/* <p>Theme List</p> */}
            <ThemeList/>
            {/* <p>Components List</p> */}
            <ComonentsList/>
            {/* <p>Extract List</p> */}
            <ExtractList/>
        </div>
    )
}
