import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function addDay() {
    fetch("http://localhost:3001/days/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ 
        day: days.length + 1,
      }),
    })
    .then( response => {
      if(response.ok) {
        alert("생성이 완료 되었습니다");
        // 추가를 누르면 첫 페이지로 바로 이동
        history.push("/");
      }
    });
  }

  return (
  <div>
    <h3>현재 일수: {days.length}일</h3>
    <button onClick={addDay}>Day 추가</button>
  </div>
  );
}