import React from "react"
import HP from "./HPService"
import MapView from "./MapView"
import SideBar from "./SideBar"
import './App.scss';

class App extends React.Component {

    componentDidMount() {
        if (window.dashboardConfig.clusterFound)
            HP.nodeManager.start();
    }

    render() {
        return (
            (!window.dashboardConfig.hidden) ? <>
                <div className="wrapper d-flex flex-column flex-md-row">
                    <MapView />
                    <SideBar />
                </div>
                <div className="title-container p-3">
                    <h3>{window.document.title}</h3>
                    <div className="subtitle p-1 d-none d-lg-block">This Hot Pocket contract hosts the EVM (Ethereum Virtual Machine)
                    so you can deploy and call compiled Solidity bytecode. This demo emulates an Ethereum accounts
                    database therefore some real-world Solidity contracts may not be compatible yet.<br/>
                    [ <a href="https://github.com/HotPocketDev/evm-contract">code</a> | <a href="https://twitter.com/EvernodeXRPL">@EvernodeXRPL</a> ]
                    </div>
                </div>
            </> :
                <div className="text-center mt-5">
                    <h3>Hot Pocket demo cluster is going through some changes.</h3>
                    <p style={{ fontSize: "120%" }}>Could be a while until we're back! We'll let you know.</p>
                    <p className="lead bg-light text-dark m-5 p-2">
                        <a href="https://evernode.wordpress.com">evernode.wordpress.com</a>
                        <br />
                        <a href="https://twitter.com/EvernodeXRPL">@EvernodeXRPL</a>
                    </p>
                </div>
        )
    }
}

export default App;
