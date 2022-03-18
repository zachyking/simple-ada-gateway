import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import MiddleEllipsis from 'react-middle-ellipsis'
import { DuplicateIcon } from '@heroicons/react/solid'

const Pay = () => {
    const router = useRouter()
    const { lovelace, address } = router.query

    const lovelaceNum = Number(lovelace)

    const valid = lovelace && address && lovelaceNum != NaN 

    const WalletConnect = dynamic(() => import('../../../components/WalletConnect'), {
        ssr: false,
      });

    return ( 
        <Layout title="Pay with ₳D₳">
            <div className='m-auto text-center max-h-48 max-w-full'>
                {valid ? 
                <>
                    <p>Send {lovelaceNum / 1000000} ₳</p>
                    <div className='mt-6'>
                        <MiddleEllipsis>
                            <span>
                                To {address}
                            </span>
                        </MiddleEllipsis>
                        <button className='' onClick={() => {navigator.clipboard.writeText(address.toString())}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        </button>
                    </div>
                    <div className='w-full'>
                        <div className='w-48 mt-8 mx-auto'>
                        <WalletConnect adaAmount={lovelaceNum / 1000000} sendToAddr={address.toString()} /></div>
                    </div>
                </>
                : <p>Invalid link</p>}
            </div>
        </Layout>
    )
}

export default Pay
