import Word from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Day() {

  // 링크 속 day 넘버에 맞춰서 "Day 넘버"를 띄움
  const { day } = useParams();
  
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};