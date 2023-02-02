import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    <iframe width="560" height="315" src="https://privacy.clymio.com/embedded?id=73dc8b64e2b94619ad27a1cemof9vgtq.66b67e50-772a-463a-8684-5deec98a1a10-zssxy4gt&amp;pid=5bdbf463b2ff460081bb1bcdaltswpwt&amp;c=eyJ0IjoiSSIsInUiOiJodHRwczovL2NoaXBwZXItZ2luZ2Vyc25hcC0yYTFmMmIubmV0bGlmeS5hcHAiLCJmdCI6IldlIG5lZWQgeW91ciBjb25zZW50IHRvIGxvYWQgdGhpcyBjb250ZW50IiwiZmQiOiJXZSB1c2UgJHBhcnRuZXIgdG8gbWFuYWdlIGV4dGVybmFsIGNvbnRlbnQgdGhhdCBjYW4gc2V0IGNvb2tpZXMgb24geW91ciBkZXZpY2UgYW5kIGNvbGxlY3QgZGF0YSBhYm91dCB5b3VyIGFjdGl2aXR5LiBQbGVhc2UgcmV2aWV3IHRoZWlyIGRldGFpbHMgYW5kIGFjY2VwdCB0byB0aGVtIHRvIGxvYWQgdGhlIGNvbnRlbnQuIiwiZmIiOiJBQ0NFUFQgQ09PS0lFUyJ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" allowtransparency="true"></iframe>        <Header title="Welcome to my app!" />

    <script src="https://privacy.clymio.com/blocking.js"></script> <script> (function(d,s,i,w,o){ var js,cjs=d.getElementsByTagName(s)[0]; if(d.getElementById(i))return; js=d.createElement('script'); js.id=i; js.src="https://privacy.clymio.com/clym.js"; js.onload=function(){Clym&&Clym.load(i,w,o);}; cjs.parentNode.insertBefore(js, cjs); }(document,'script','clym-privacy','5bdbf463b2ff460081bb1bcdaltswpwt',{})); </script>
      </Head>

      <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
