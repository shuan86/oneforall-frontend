
import { platformABI, platformAddr, simpleABI, simpleAddr } from "./smartcontractData";
import Web3 from 'web3';
const Tx = require('ethereumjs-tx').Transaction

//import Tx from "ethereumjs-tx";
const web3 = new Web3('http://localhost:7545');//web3.currentProvider
const abi = platformABI
const address = platformAddr
const contract = new web3.eth.Contract(abi, address)

const account1 = '0x5C07b65f48037371Ae4548396651b5618094f4F9' // Your account address 1
const account2 = '0x6Fbb55C83380E2a4D2a12A2f838497Fe3f7727a1' // Your account address 2

const privateKey1 = Buffer.from('9ce262d82d5340b62b21164c5412d5ffae2d461c4487dbbc0a93daedcd483b57', 'hex')
const privateKey2 = Buffer.from('59a26c2dde6ff726f96518d9f9907762f7ddfd82d1f82afc312ae5e9468acd21', 'hex')


const test = async () => {
    console.log("web3.version:", web3.version);


    // contract = new web3.eth.Contract(abi, address)
    const vistors = await contract.methods.getVistors().call()
    console.log('vistors:', vistors);
    const ownerR = await contract.methods.getOwnerAddr().call();
    console.log('owner:', ownerR);
    const lastSender = await contract.methods.getLastSender().call();
    console.log('lastSender:', lastSender);

    //const contract = new web3.eth.contract(abi, address)
}

const transactionPeopole = (sender, receiver, prikey) => {
    web3.eth.getTransactionCount(sender, (err, txCount) => {
        // Build the transaction
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            to: receiver,
            value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
            gasLimit: web3.utils.toHex(21000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        // Sign the transaction
        const tx = new Tx(txObject)
        tx.sign(prikey)

        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')

        // Broadcast the transaction
        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
            console.log('txHash:', txHash)
            // Now go check etherscan to see the transaction!
        })



    })
}

const transactionContract = async (sender, contractAddress, contractData, prikey) => {
    web3.eth.getTransactionCount(sender, (err, txCount) => {

        const txObject = {
            nonce: web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
            gasPrice: web3.utils.toHex(web3.utils.toWei('0', 'gwei')),
            to: contractAddress,
            data: contractData
        }

        const tx = new Tx(txObject)
        tx.sign(prikey)

        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')

        web3.eth.sendSignedTransaction(raw, (err, txHash) => {
            console.log('err:', err, 'transactionContract txHash:', txHash)
            // Use this txHash to find the contract on Etherscan!
        })
    })
}
//transactionPeopole(account1, account2, privateKey1)
test();
transactionContract(account1, address, contract.methods.enrollVistor(10, '0xDA5171250d171562559ee4Bde245DB86cb13AE34', true).encodeABI(), privateKey1)
//transactionContract(account1, address, contract.methods.getVistors().encodeABI(), privateKey1)


//let contract = null;
export { contract }
