Voca App
=========================================
직관적이고 심플한 영단어 웹 앱입니다. TOEIC 영단어를 외워야 한다면 Voca App을 이용해보세요!

<br/>
![voca_app](https://user-images.githubusercontent.com/86959545/136172566-ed5c404b-2c08-43ca-bbe7-d4d1938bf422.gif)


📝 About The Project
-----------------------------------------
Voca App은 React를 이용해 구현한 영단어 웹 앱입니다. [뜻 보기]/[뜻 숨기기]를 통해 단어의 뜻을 자유롭게 가릴 수 있습니다. 외운 단어는 체크 박스를 통해 별도로 표시할 수 있으며, 완전히 외운 단어는 단어장에서 삭제할 수 있습니다. Day별로 영단어를 담을 수 있고, 단어 추가 기능과 Day 추가 기능도 직관적으로 구성하여 누구나 쉽게 이용할 수 있습니다.


💻 Demo Page
-----------------------------------------
데모 페이지는 [여기](https://vilin0x6.github.io/voca_app)에서 확인할 수 있습니다.

로컬에서 실행할 경우 git, node.js, npm이 필요합니다.

1. git을 이용해 프로젝트를 클론합니다.
2. `npm install` 로 필요한 패키지를 다운 받습니다.
3. `npm start` 로 개발 서버를 실행합니다.
4. `npm install -g json-server` 로 json 서버를 설치합니다.
5. `json-server --watch ./src/db/data.json --port 3001` 로 data.json을 로드합니다. 


💭 Next Version Preview
-----------------------------------------
다음 버전에서는 ngrok을 이용하여 외부에서도 로컬에 접속 가능하도록 구현할 예정입니다.
