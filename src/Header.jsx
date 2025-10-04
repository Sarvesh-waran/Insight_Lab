import logo from "./assets/Inslabimgf.png"
function Header(){
    return(
        <>
        <div className="head">
            <img src={logo} alt="logo" />
            <h1>Insight Lab</h1>
        </div>
        </>
    )
}
export default Header;