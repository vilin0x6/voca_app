import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  
  useEffect( () => {
      // API 비동기 통신을 위해 fetch 호출
      fetch(url) 
      .then(response => {
        // http 응답인 response를 json으로 변환
        return response.json()
      })
      .then(data => {
        setData(data);
      });
  }, [url] );

  return data;
  
}