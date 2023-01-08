import reactLogo from '../assets/react.svg'

export const Navbar = () =>{
    return (
        <nav>
        <div className="imageWrapper">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <p>ReactFacts</p>
        </div>
        <h1>React Course - Project 1</h1>
        </nav>
    )
}