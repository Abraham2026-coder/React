import "./styles.css";

/*
<div class="container">
  <h1 class="title">Notable Scientists</h1>
  <ul class="list">

    <li class="list-item">
      <span class="name">Creola Katherine Johnson</span
      ><span class="profession">mathematician</span>
    </li>

    <li class="list-item">
      <span class="name">Mario José Molina-Pasquel Henríquez</span
      ><span class="profession">chemist</span>
    </li>

    <li class="list-item">
      <span class="name">Mohammad Abdus Salam</span
      ><span class="profession">physicist</span>
    </li>

    <li class="list-item">
      <span class="name">Percy Lavon Julian</span
      ><span class="profession">chemist</span>
    </li>

    <li class="list-item">
      <span class="name">Subrahmanyan Chandrasekhar</span
      ><span class="profession">astrophysicist</span>
    </li>

  </ul>
</div>

*/

const scientists = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

function List({name,profession}){
  return(
    <li className="list-item">
      <span className="name">{name}</span>
      <span className="profession">{profession}</span>
    </li>
  );
}

export default function Scientists(){
  return(
    <div className="container">
       <h1 className="title">Notable Scientists</h1>
       <ul className="list">
        {scientists.map((content)=>{
          return(<List key={content.id} name = {content.name} profession={content.profession}/>);
        })}
      
       </ul>
    </div>

  );

}