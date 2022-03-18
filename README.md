# Simple ADA payment gateway
This is a really simple "gateway", only allowing to create payment link for any website

## How to use it?

Building project locally:
```bash
npm i
npm run dev
```

Using hosted version from different site (```https://<Domain>/pay/<LovelaceAmount>/<Address>```)
```html
    <button 
        onclick={() => window.open(
            //open a page to pay '2 000 000 lovelace' to Cardano shelley era address 
            "https://simple-ada-gateway.vercel.app/pay/2000000/addr1qx8p9zjyk2us3jcq4a5cn0xf8c2ydrz2cxc5280j977yvc0gtg8vh0c9sp7ce579jhpmynlk758lxhvf52sfs9mrprws3mseux",
            "myWindow",
            'width=400,height=600'
        )}
    >
    Tip 2 ADA
    </button> 
```
