var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://us11.api.mailchimp.com/3.0/lists/9b3c490596/members',
  'headers': {
    'Authorization': 'Basic bW90dW1hLmF5YW5hMUBnbWFpbC5jb206MDYyNGM5MDc3MzA1OGMyMDcwMzMzNTUwNGY1NDU0OGItdXMxMQ==',
    'Content-Type': 'application/json',
    'Cookie': 'ak_bmsc=224901580BFF893ADFF1AD4E95B46735~000000000000000000000000000000~YAAQHL0QAljByCuCAQAAcFBLQRCrKtCqa1T6BsAdc635yrtLru3xhFmaldLlK8p/95YFnjRaLBoXYGMzsi/0jQQ+olsBQl1nJkl4E/yqn2W4SPDNo8za+9NsuDD3Uw0gJAqYAlAE5XT8eelRCMvIv9ekUlqF3IJJObMKK87uJJhOQFkv4MSPM3WRdYOqp8rOvUyk3bIEpq43Z1HMI8WAJQgOT7WjoOH6GoCC/8IfPEohULuyzMPJ6xCf+qxKbJeo6Ss/64XjDnqnXI8CH3U2ukfbhAokpW9LyKVnJ7FKRP0O2oA+1NvATeigCo8ECm8NBaoCT78bpH5j+WxjmKKESbuCl2uqRfSk3YJ17f9mQ87AK5h65+qgzVhUcIMqRtZ//ZCy; bm_sv=3F6D86958941A8E0697EB850DA9A70BA~YAAQbb0QAgtPsTuCAQAAWhBoQRAvr7Q9vwy1J0iFKvmEHsuU0efKt85hD1e+miusCHJk4LOCSf1JiXqyd+JAVDNlHHHx5Zva2PkEcfBTP4wlSMzYSovDctE1tk9KluWLxbEuRM0YdkSliVz3QjVM++l3i7K8DWP6dm+4nFS9xODj2sBIA8afuelREmmMFsrZ3NVyPPNfErtJNK4IPgmWq8ic5g6eeuIEZLJzLLOGETdEdT7tLJkvYDsEDEvMCIrlwdxQ4rAd6A==~1'
  },
  body: JSON.stringify({
    "email_address": "mayana1@tempChrist.com",
    "status": "subscribed"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
