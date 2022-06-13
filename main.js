//`https://kr.api.riotgames.com/lol/status/v4/platform-data?api_key=RGAPI-a2e69655-ff90-4326-b81d-70ad2c3365e6`

// import axios from 'axios';
export default function contest() {
  axios({
    method: 'get',
    url: `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/code%20%ED%96%87%EB%8B%98?api_key=RGAPI-a2e69655-ff90-4326-b81d-70ad2c3365e6`,
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