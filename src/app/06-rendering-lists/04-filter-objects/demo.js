const friends = [
  { id: 1, name: "John Doe", status: "online" },
  { id: 2, name: "Jane Smith", status: "offline" },
  { id: 3, name: "Alex Johnson", status: "online" },
  { id: 4, name: "Maria Garcia", status: "offline" },
  { id: 5, name: "Liam Chen", status: "online" },
  { id: 6, name: "Sara Khan", status: "offline" },
];

const onlineFriends = friends.filter((friend)=> friend.status === "online");

// To create JSX
onlineFriends.map()

console.log(onlineFriends);