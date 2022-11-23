import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    
      </Head>

      <main>
    <iframe width="560" height="315" src="https://privacy.clymio.com/embedded?id=73dc8b64e2b94619ad27a1cemof9vgtq.15eb3b8c-b164-44b3-8153-7c0212447366-hgpq2jcx&amp;pid=5bdbf463b2ff460081bb1bcdaltswpwt&amp;c=eyJ0IjoiSSIsInUiOiJodHRwczovL25ldGxpZnkuYXBwIiwiZnQiOiJXZSBuZWVkIHlvdXIgY29uc2VudCB0byBsb2FkIHRoaXMgY29udGVudCIsImZkIjoiV2UgdXNlICRwYXJ0bmVyIHRvIG1hbmFnZSBleHRlcm5hbCBjb250ZW50IHRoYXQgY2FuIHNldCBjb29raWVzIG9uIHlvdXIgZGV2aWNlIGFuZCBjb2xsZWN0IGRhdGEgYWJvdXQgeW91ciBhY3Rpdml0eS4gUGxlYXNlIHJldmlldyB0aGVpciBkZXRhaWxzIGFuZCBhY2NlcHQgdG8gdGhlbSB0byBsb2FkIHRoZSBjb250ZW50LiIsImZiIjoiQUNDRVBUIENPT0tJRVMifQ%3D%3D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" allowtransparency="true"></iframe>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
