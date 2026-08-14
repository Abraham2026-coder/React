import "./styles.css";

/*
<div class="container"> //Homepage

  //FriendList
  <div class="friends">
    <h3>Online</h3>

    // Friend
    <div class="friend">
      <h2>John Doe</h2>
      <div class="status online">Online</div>
    </div>

    <div class="friend">
      <h2>Alex Johnson</h2>
      <div class="status online">Online</div>
    </div>

    <div class="friend">
      <h2>Liam Chen</h2>
      <div class="status online">Online</div>
    </div>
  </div>
  //FriendList

  //FriendList
  <div class="friends">
    <h3>Offline</h3>

    <div class="friend">
      <h2>Jane Smith</h2>
      <div class="status offline">Offline</div>
    </div>

    <div class="friend">
      <h2>Maria Garcia</h2>
      <div class="status offline">Offline</div>
    </div>

    <div class="friend">
      <h2>Sara Khan</h2>
      <div class="status offline">Offline</div>
    </div>
  </div>
  //FriendList

</div>

*/
const friends = [
  { id: 1, name: "John Doe", status: "online" },
  { id: 2, name: "Jane Smith", status: "offline" },
  { id: 3, name: "Alex Johnson", status: "online" },
  { id: 4, name: "Maria Garcia", status: "offline" },
  { id: 5, name: "Liam Chen", status: "online" },
  { id: 6, name: "Sara Khan", status: "offline" },
];

//friends.id

function Friend({ name, status }) {
  const statusLabel = status === "online" ? "Online" : "Offline";
  return (
    <div className="friend">
      <h2>{name}</h2>
      <div className={`status ${status}`}>{statusLabel}</div>
    </div>
  )
}



function FriendList({ title, friends }) {

  return (
    <div className="friends">
      <h3>{title}</h3>
      {friends.map((friend) =>
        <Friend key={friend.id} name={friend.name} status={friend.status} />
      )
      }
    </div>
  )
}



export default function Homepage() {
  const onlineFriends = friends.filter((friend) => friend.status === "online");
  const offlineFriends = friends.filter((friend) => friend.status === "offline");

  return (

    <div className="container">
      <FriendList title="Online" friends={onlineFriends} />
      <FriendList title="Offline" friends={offlineFriends} />
    </div>

  );
}
/*
array = [10, 20, 30]
const newArray = array.map(callback)

map function internally does this:
callback(10)
callback(20)
callback(30)
*/
/*


 <ul className="list">
  {scientists.map((content)=>{
      return(
        <List key={content.id} name = {content.name} profession={content.profession}/>);
    })}
</ul>
       */