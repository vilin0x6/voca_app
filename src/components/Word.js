import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // 단어 체크 시 새로고침해도 isDone은 유지됨
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone
      }),
    })
    .then( response => {
      if(response.ok) {
        setIsDone(!isDone);
      }
    });
  }
  
  function del() {
    if(window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then( response => {
        if(response.ok) {
          setWord({ id: 0});
        }
      })
    }

  }

  if (word.id === 0) {
    return null;
  }
  
  return (
    <tr className={ isDone ? "off" : "" }>
      <td>
        <input type="checkbox" checked={isDone}
        onChange={toggleDone}></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          { isShow ? "뜻 숨기기" : "\u00A0뜻 보기\u00A0" }
        </button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  );
}