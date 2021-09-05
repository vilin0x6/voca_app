import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    // 저장 버튼 누를 때 새로고침 되지 않도록 구현
    e.preventDefault();

    // 단어 추가에서 저장 버튼을 여러 번 클릭해도 한 번만 저장됨
    if(!isLoading) {
      setIsLoading(true);
      fetch("http://localhost:3001/words/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ 
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
      })
      .then( response => {
        if(response.ok) {
          alert("생성이 완료 되었습니다");
          // 저장을 누르면 해당 day 페이지로 바로 이동
          history.push(`/day/${dayRef.current.value}`)
          setIsLoading(false);
        }
      });
    }
  }

  // input창에 적힌 값을 얻기 위해 useRef 이용
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="abandon" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="버리다" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      {/* 느린 인터넷 환경에서 사용하는 경우 저장되는 동안 "Saving..."을 띄움 */}
      <button
        style={{
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}</button>
    </form>
  );
}