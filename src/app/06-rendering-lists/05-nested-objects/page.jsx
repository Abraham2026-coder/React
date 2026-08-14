import "./styles.css";
/*
<div class="courses">

  <div class="course">
    <h2>JavaScript Basics</h2>
    <p>Alice Brown</p>
    <p>4 weeks</p>
    <ul class="lessons">
      <li>
        Variables - 10 min
      </li>
      <li>
        Functions - 15 min
      </li>
    </ul>
  </div>

  <div class="course">
    <h2>React Fundamentals</h2>
    <p>Bob Lee</p>
    <p>6 weeks</p>
    <ul class="lessons">
      <li>
        Components - 12 min
      </li>
      <li>
        State &amp; Props - 18 min
      </li>
    </ul>
  </div>

  <div class="course">
    <h2>CSS Layouts</h2>
    <p>Clara Singh</p>
    <p>3 weeks</p>
    <ul class="lessons">
      <li>
        Flexbox - 14 min
      </li>
      <li>
        Grid - 20 min
      </li>
    </ul>
  </div>

</div>
*/


const courses = [
  {
    id: 1,
    title: "JavaScript Basics",
    instructor: "Alice Brown",
    duration: "4 weeks",
    lessons: [
      { id: 1, name: "Variables", length: "10 min" },
      { id: 2, name: "Functions", length: "15 min" },
    ],
  },
  {
    id: 2,
    title: "React Fundamentals",
    instructor: "Bob Lee",
    duration: "6 weeks",
    lessons: [
      { id: 3, name: "Components", length: "12 min" },
      { id: 4, name: "State & Props", length: "18 min" },
    ],
  },
  {
    id: 3,
    title: "CSS Layouts",
    instructor: "Clara Singh",
    duration: "3 weeks",
    lessons: [
      { id: 5, name: "Flexbox", length: "14 min" },
      { id: 6, name: "Grid", length: "20 min" },
    ],
  },
];
// courses["lesson"]
function Lesson({ name, length }) {
  return (
    <li>
      {`${name} — ${length} `}
    </li>
  );

}
function Course({ title, instructor, duration , lessons}) {
  return (
  <div className="course">
    <h2>{title}</h2>
    <p>{instructor}</p>
    <p>{duration}</p>
    {<ul className="lessons">
      {lessons.map((lesson) => <Lesson key={lesson.id} name={lesson.name} length={lesson.length} />)}        
    </ul>}
  </div>);
}
/*
 {friends.map((friend) =>
        <Friend key={friend.id} name={friend.name} status={friend.status} />
      )
      }*/

export default function Homepage() {

  return (
    <div className="courses">
      {courses.map((course) => <Course key={course.id} title={course.title}
        instructor={course.instructor} duration={course.duration} lessons={course.lessons}
      />)}

    </div>

  );
}

/*
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
*/