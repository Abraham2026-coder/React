import "./styles.css";
/*
<div class="friends">
  <div class="friend">
    <h2>John Doe</h2>
    <div class="status online">Online</div>
  </div>
  <div class="friend">
    <h2>Jane Smith</h2>
    <div class="status offline">Offline</div>
  </div>
</div>

*/

// Good practice 1: separate variables for separate purposes
// Good practice 2: Ternary operator for simple conditions

function Friend({ name, status }) {
    // Alternative:
    // let statusLabel;
    // if (status === "online") {
    //     statusLabel = "Online";
    // } else {
    //     statusLabel = "Offline";
    // }

    let statusLabel = status === "online" ? "Online" : "Offline";
    let statusCssClass = status === "online" ? "online" : "offline";
    return (
        <div className="friend">
            <h2>{name}</h2>
            <div className={`status ${statusCssClass}`} >{statusLabel}</div>
        </div>

    );
}

export default function FriendList() {
    return (
        <div className="friends">
            <Friend name="John Doe" status="online" />
            <Friend name="Jane Smith" status="offline" />
        </div>
    );
}