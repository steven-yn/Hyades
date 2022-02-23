/* 

https://axios-http.com/kr/docs/instance
https://axios-http.com/kr/docs/req_config
https://axios-http.com/kr/docs/res_schema

추후 인스턴스형으로 교체하겠습니다.
직관적인 데이터연동 흐름을 보기위해 일반적인 메소드형 인터페이스로 구현해뒀습니다.

import axios from "axios";

const Client = axios.create({
  baseURL: "https://yoonocean-zum-board-backend.herokuapp.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});


  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  Client.defaults.baseURL = 'https://external-api-server.com/' 

  // 헤더 설정
  Client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  


export default Client;
*/
