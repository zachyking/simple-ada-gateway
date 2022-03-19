import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Example">
    <div className='max-w-full m-auto'>
      <h1>Hello 👋</h1>
      <br/>
      
      <button 
        className='btn'
        onClick={() => window.open(
          //open a page to pay '2 000 000 lovelace' to Cardano shelley era address 'addr1qx8p9zjyk2us3jcq4a5cn0xf8c2ydrz2cxc5280j977yvc0gtg8vh0c9sp7ce579jhpmynlk758lxhvf52sfs9mrprws3mseux'
          "/pay/2000000/addr1qx8p9zjyk2us3jcq4a5cn0xf8c2ydrz2cxc5280j977yvc0gtg8vh0c9sp7ce579jhpmynlk758lxhvf52sfs9mrprws3mseux",
          "myWindow",
          'width=400,height=600'
        )}
      >
        Tip 2 ADA
      </button> 

      <br/>
      <h2 className="mt-10">To use it on external sites, add a button and run this code on a click </h2>
      <div className="mt-2 mockup-code">
        <pre>
        <code className='block whitespace-pre-wrap'>
          const paymentUrl = 'https://simple-ada-gateway.vercel.app/pay/&lt;LovelaceAmount&gt;/&lt;CardanoAddress&gt;'
          <br/>
          const windowName = 'myWindow'
          <br/>
          const size = 'width=400,height=600'
          <br/>
          window.open(paymentUrl,
            windowName,
            size)
        </code></pre>
      </div>
    </div>
  </Layout>
)

export default IndexPage
