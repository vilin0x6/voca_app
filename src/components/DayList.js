import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

  const days = useFetch("http://localhost:3001/days");
  
  // 느린 인터넷 환경에서 사용하는 경우 loading중임을 화면에 띄움
  if(days.length === 0) {
    return <span>Loading...</span>
  }
  
  return (
    <ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/voca_app/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ) )}
    </ul>
  );
}