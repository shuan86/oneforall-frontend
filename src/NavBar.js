import React from 'react';
import './css/common.css';
import './css/NavBar.css';


const NavBar = () => (
    <div className={'navBar'}>
        <div className={'navLeft'}>

            <img className={'logoImg'} src="Logo.png" alt="logoImg" width={'158px'} />

        </div>
        <div className={'leftRight'}>
            <div className={'navFeature'}>
                <input className={'searchBar'} type="text" value={'搜尋'} />

                {/* <button className={'signupButton'}>註冊</button> */}

                <button className={'memberBtn'}>
                    會員
                </button>


                {/* <button className={'signinButton'}>
                    登入
                </button> */}
            </div>

        </div>
    </div>
);

export default NavBar;
