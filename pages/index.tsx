import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Example">
    <div className='max-w-full m-auto'>
      <h1 className='my-2' >Hello 👋</h1>
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
    </div>
  </Layout>
)

export default IndexPage
