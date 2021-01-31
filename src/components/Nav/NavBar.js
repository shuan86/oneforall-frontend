import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../public/css/common.css';
import '../../public/css/NavBar.css';
import Logo from '../../Logo.svg';


const NavBar = () => {
    const history = useHistory();
    const onChangeRouter = (router) => {
        history.push(router);
    }
    return (
        <div className={'navBar'}>
            <div className="container">
                <div className="navContent">
                    <div className={'navLeft'}>
                        <div className={'logo'}>
                            <img className={'logoImg'} src={Logo} alt="logoImg" width={'158px'} onClick={() => onChangeRouter('/')} />
                        </div>
                    </div>
                    <div className={'leftRight'}>
                        <div className={'navFeature'}>
                            <input className={'searchBar'} type="text" value={'搜尋'} />

                            <button className={'signupButton'} onClick={() => onChangeRouter('/enroll')}>註冊</button>

                            <button className={'signinButton'} onClick={() => onChangeRouter('/login')}>登入</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>)
};

export default NavBar;
