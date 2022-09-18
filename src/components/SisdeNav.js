import "./home.png"
const SideNav=()=>{
    return(
        <div className="side-nav">
            <div className="dp">
                <img src={"./home.png"} alt="profile-pic"/>
                <h5>Hemant Sharma</h5>
            </div>

            <div className="menu-list">
                <ul>
                    <li className="menu-item"><img src="\images\home.png" alt=""/> Home</li>
                    <li className="menu-item">Deposits</li>
                    <li className="menu-item">Offers</li>
                    <li className="menu-item">Payments</li>
                    <li className="menu-item">Settings</li>
                </ul>
            </div>
        </div>
    )
}
export default SideNav;
