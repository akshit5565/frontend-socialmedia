import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";

export default function Messenger() {
    return (
      <>
        <Topbar />
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                menu
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                box
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                online
            </div>
        </div>
      </>
    )
}