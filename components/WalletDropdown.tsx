import { ChevronDownIcon } from '@heroicons/react/solid';
import walletConfig from '../cardano/wallet-config';

export function WalletDropdown({ enableWallet, address }: { enableWallet: any; address: string; }) {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
                <div className='flex flex-row'>
                    <h2>{address === '' ? 'Connect a wallet' : address}</h2>
                    <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-blue-200 hover:text-blue-100"
                        aria-hidden="true" />
                </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {Object.keys(walletConfig).map((wallet) => (
                    <li onClick={() => enableWallet(wallet)}>
                        <button>
                        {wallet}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
