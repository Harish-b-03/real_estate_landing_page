import "./Navbar.css"

function Navbar() {
  return (
    <nav className="NavBar">
        <div className="NavBarLeft">
            <div className="NavBarLogo">
                <h4><b>Estatery</b></h4>
            </div>
            <div className="NavBarLinks">
                <button className="NavBarButton active">Rent</button>
                <button className="NavBarButton">Buy</button>
                <button className="NavBarButton">Sell</button>
                <select className="NavBarSelect" name="ManageProperty" id="ManageProperty">
                    <option value="ManageProperty">Manage Property</option>
                </select>
                <select className="NavBarSelect" name="Resources" id="Resources">
                    <option value="Resources">Resources</option>
                </select>
            </div>
        </div>
        <div className="NavBarRight">
            <button className="NavBarRightButton Login">Login</button>
            <button className="NavBarRightButton SignUp">Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar