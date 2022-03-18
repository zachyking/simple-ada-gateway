const safelySetApi = (api: any) => {
    return typeof window === 'undefined' ? {} : api
}
const walletConfig = {
    'Nami': safelySetApi((window as any).cardano.nami),
    'ccvault': safelySetApi((window as any).cardano.ccvault),
    'Flint': safelySetApi((window as any).cardano.flint),
    'Yoroi': safelySetApi((window as any).cardano.yoroi),
    'CardWallet': safelySetApi((window as any).cardano.cardwallet),
    'GeroWallet': safelySetApi((window as any).cardano.gerowallet)
}
export default walletConfig