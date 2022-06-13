
// import axios from 'axios';
export default function contest() {
  axios({
    method: 'get',
    data: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com"
    }
  })
    .then(respone => { console.log(respone); })
    .catch(error => console.error(error));
}

contest();