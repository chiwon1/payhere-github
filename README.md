# Payhere-Github

<code>#Github</code>
<code>#Issues</code>
<code>#모아보기</code>

Github API를 이용하여, Issues를 한 페이지에서 볼 수 있는 웹페이지 입니다. 

<br>

## 🖼 Preview
https://user-images.githubusercontent.com/68883173/141803659-ac147234-42bb-4b08-aa1b-091f8f50a282.mp4

### 메인 페이지 Main Page
<img width="400" alt="스크린샷1" src="https://user-images.githubusercontent.com/68883173/141804000-130b5ce0-74bf-4a2d-a767-119abb19f078.png">

  - Github Repository 주소를 통해, 해당 저장소의 이슈를 검색할 수 있습니다.
  - 북마크한 저장소로 이동할 수 있습니다.
  - 북마크한 저장소들의 이슈를 한 페이지에서 모아 볼 수 있습니다.

<br>

### 북마크 이슈 모아보기 페이지 Bookmark Page
<img width="400" alt="스크린샷2" src="https://user-images.githubusercontent.com/68883173/141804103-9ca2924b-2f5d-42b7-a559-d01d74ba001d.png">

  - 북마크에 저장한 레포지토리들의 이슈가 최근 순으로 정렬되어 나타납니다.

<br>

### 이슈 페이지 Details Page
<img width="400" alt="스크린샷3" src="https://user-images.githubusercontent.com/68883173/141804086-32f9eccb-3323-4324-8b8c-c15fa2d5a264.png">

  - 검색한 레포지토리의 이슈를 볼 수 있습니다.
  - 북마크에 저장/삭제 할 수 있습니다.

<br>

## 🎬 Getting Started

> Github API 의 요청횟수 제한으로 인해, 페이지를 빠르게 이동할 경우 에러가 발생할 수 있습니다.

```
npm install
npm start
```

<br>

## 🖥 Tech Stacks

### Client

- Webpack
- React
- Styled-Component
- Redux (Toolkit)
- Redux-Thunk

### Testing
- Jest
- React Testing Library

<br>

## 요구사항
- [x] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 검색된 Public Repository를 등록할 수 있다.
  - [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
  - [x] 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
- [x] 등록된 Repository를 삭제할 수 있다.
- [x] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
    - [x] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
    - [x] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
    - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

<br>

## 🤝 Comments
이전까지는 CRA나 Parcel을 통해 환경을 구축하고 프로젝트를 진행했습니다.  
그러나 이번에는 직접 환경을 세팅하고, 최적화를 시도 해보고싶은 마음에 웹팩에 도전하게 되었습니다.
시간 관계상 코드 스플릿팅을 시도하지 못한 점이 아쉽게 느껴집니다.

Pagination을 구현하면서, 처음 자료를 fetching 해올 때 스토어에 저장하거나 브라우저에 캐싱하는 방식으로 구현하려고 했으나,
github issue는 자주 업데이트 될 수 있다고 생각하여, 버튼을 누를 때마다 서버를 통해 해당 페이지 자료를 받아오는 방식으로 구현하였습니다.

과제를 통해 많은 것을 생각해볼 수 있는 기회를 주신 페이히어 분들에게 감사의 말씀을 드립니다.
감사합니다.
