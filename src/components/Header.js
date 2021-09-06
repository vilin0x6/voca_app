import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/voca_app">TOEIC Voca (Advanced)</Link>
      </h1>
      <div className="menu">
        <Link to="/voca_app/create_word" className="link">
            단어 추가
        </Link>
        <Link to="/voca_app/create_day" className="link">
            Day 추가
        </Link>
      </div>
    </div>
  );
}