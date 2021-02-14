import React, { useEffect, useState } from 'react';
import { contract } from "../../modules/smartcontract";

const SmartContractPage = () => {
    const [accounts, setAccounts] = useState('initialState')
    useEffect(() => {


        //  setAccounts(web3.eth.accounts)
    }, [])
    return (
        <div>
            <div>
                <h2>accounts:</h2>
                {accounts}
            </div>

        </div>

    )

}
export default SmartContractPage;