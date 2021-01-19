import React from 'react';
import './css/common.css';
import './css/NavBar.css';


const NavBar = () => (
    <div className={'navBar'}>
        <div className="container">
            <div className="navContent">
                <div className={'navLeft'}>
                    <div className={'logo'}>
                        <img className={'logoImg'} src="Logo.png" alt="logoImg" width={'158px'} />
                    </div>
                </div>
                <div className={'leftRight'}>
                    <div className={'navFeature'}>
                        <input className={'searchBar'} type="text" value={'搜尋'} />

                        <button className={'signupButton'}>註冊</button>

                        <button className={'signinButton'}>登入</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default NavBar;
