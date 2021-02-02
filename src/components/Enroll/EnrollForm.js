import React, { useState } from 'react';
import axios from 'axios'
import configData from "../../config.json";



const EnrollForm = () => {

    const [userId, setUserId] = useState("a");
    const [password, setPassword] = useState("123");
    const [userName, setUserName] = useState("a");
    const [email, setEmail] = useState('da@gmail.com');
    const [publicKey, setPublicKey] = useState('123');

    const onClickPost = async () => {
        //console.log('configData.SERVER_URL:', configData.SERVER_URL);
        const data = {
            id: 0,
            userId: userId,
            password: password,
            userName: userName,
            email: email,
            publicKey: publicKey,
        }
        try {
            const result = await axios.post(configData.SERVER_URL + '/enroll', data)
            console.log('result:', result);
        }
        catch (e) {
            console.log('error:', e);

        }


    }
    return (
        <div>

            <div>
                <label htmlFor="userId">userId: </label>
                <input type="text" name="userId" id="userId" value={userId} onChange={v => setUserId(v.target.value)} />
            </div>
            <div>
                <label htmlFor="password">password: </label>
                <input type="password" name="password" id="password" value={password} onChange={(v) => setPassword(v.target.value)} />
            </div>
            <div>
                <label htmlFor="userName">userName: </label>
                <input type="text" name="userName" id="userName" value={userName} onChange={(v) => setUserName(v.target.value)} />
            </div>
            <div>
                <label htmlFor="email">email: </label>
                <input type="email" name="email" id="email" value={email} onChange={(v) => setEmail(v.target.value)} />
            </div>
            <div>
                <label htmlFor="publicKey">publicKey: </label>
                <input type="text" name="publicKey" id="publicKey" value={publicKey} onChange={(v) => setPublicKey(v.target.value)} />
            </div>

            <button onClick={onClickPost}>submit</button>

        </div>
    )

}
export default EnrollForm;