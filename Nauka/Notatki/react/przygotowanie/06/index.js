
const Header = ()=>{return(
    <header>
    <nav className="nav">
    <img src="./images.png" className="imageReact"/>
    <ul className="nav-items">
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
</ul>
    </nav>
    </header>
    )
}
const MainContent= ()=>{return(
    <div className="main__div">
<h1>Why I m excited to learn React</h1>
<ol>
    <li>it 's faster than writing in js</li>
    <li>it s something new</li>
    <li>it's valuable in searching job as Front end dev</li>
</ol>
</div>
    )
}

const Footer = ()=>{return(
    <footer className="footer">
    Dudzinski production. All rights reserved TM
</footer>
    )
}


function Page()  {return (
<div className="wrapper">
 <Header />
 <MainContent />
 <Footer />
</div>)
}
ReactDOM.render(<Page />, document.getElementById("root") )
