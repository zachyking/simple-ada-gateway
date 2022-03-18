import React, { useState, useContext } from 'react'
import { Buffer } from 'buffer'
import useCardanoWallet from '../cardano/useCardanoWallet'
import { Address } from '@emurgo/cardano-serialization-lib-browser'
import { useProtocolParametersQuery } from '../cardano/query-api'
import { ConfigContext } from '../cardano/config'
import { Recipient } from '../cardano/types'
import { WalletDropdown } from './WalletDropdown'

const _Buffer = Buffer

export default function WalletConnect({ sendToAddr, adaAmount } : { sendToAddr: string, adaAmount: number }) {
    let [address, setAddress] = useState('')
    let [connected, setConnected] = useState(false)
    const [config, _] = useContext(ConfigContext)
    let pParams = useProtocolParametersQuery(config);
    let cardanoWallet = useCardanoWallet()

    const setAddressBech32 = async () => {
        if(cardanoWallet && cardanoWallet.wallet) {
            const address = (await cardanoWallet.wallet.getUsedAddresses())[0]
            if(address) {
                const addReadable = Address.from_bytes(_Buffer.from(address.toString(), 'hex')).to_bech32()
                console.log(addReadable)
                setAddress(addReadable)
            }
        }
    }

    const makeTx = async () => {
        if(!cardanoWallet) return
        if(pParams.type !== 'ok') return

        let utxos = await cardanoWallet.wallet?.getUtxos();
        const myAddress = await cardanoWallet.getAddress();
        let netId = await cardanoWallet.getNetworkId();

        // const date = new Date()
        // const policy = await cardanoWallet.createLockingPolicyScript(myAddressHex, new Date(date.getTime() + 100*60000), pParams.data)
        // if(!policy) return
        let recipients: Recipient[] = [
            {address: sendToAddr, amount: adaAmount.toString()}, 
            // {address: `${myAddress}`,  amount: "0", mintedAssets: [{
            //     assetName: 'TestDZ', policyId: policy.id, policyScript: policy.script, quantity: '1'
            // }]}
        ]

        const t = await cardanoWallet.transaction({
            ProtocolParameters: pParams.data,
            PaymentAddress: myAddress,
            utxosRaw: utxos,
            recipients: recipients,
            addMetadata: false,
            multiSig: false,
            networkId: netId.id,
            ttl: 36000,
            metadata: null,
            delegation: null,
            metadataHash: null
        })
        console.table(t)
        try {
            if(t){
                const signature = await cardanoWallet.signTx(Buffer.from(t.to_bytes()).toString('hex'), false)
                if(signature) {
                    cardanoWallet.wallet?.submitTx(signature)
                }
            }
        }
        catch(err){
            console.log(err)
        }
        
    }

    const enableCardano = async (wallet = 'nami') => {
        if(!(window as any).cardano) return
      
        if(await cardanoWallet?.enable(wallet)) {
            setConnected(true)
            setAddressBech32()
        }
    }

    return (
        <>  
            {connected ? 
                <button onClick={() => makeTx()} className="btn w-48">
                <h2>
                    Pay
                </h2>
                </button> 
                :
                <WalletDropdown enableWallet={enableCardano} address={address}/>
            }
        </>
    )
}
