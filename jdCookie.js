/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  // 'pt_key=AAJf984RAECzwZKMzVn8dGcIDS6qKirEYEkIrm4K_HChABQulnJ9CK6sPz1NOflOF4S4TOtntgLpLBd8dTo0c-UplwRNNJtQ;pt_pin=%E8%A2%AB%E6%8A%98%E5%8F%A0%E7%9A%84%E8%AE%B0%E5%BF%8633;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  // 'pt_key=AAJf98v-ADD8aNomR4VVWb3lJOyf--E8ih-TDF-RTUBSfzc2TFd6lb0arnuhJhkT-74y5NQkLcA;pt_pin=jd_6cd93e613b0e5;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  // `pt_key=AAJf3InLADD8WK3k6m4BQa5uPY0xCNO_77KW1ExAMw9sZwORL-RmR8x-4WSGIS01JdPAaHxn3aw;pt_pin=jd_45a6b5953b15b;`,
  ` pt_key=AAJgELyQADB3AN3Ex86jcMplOolllMaeoZs8T2kp-jE1GeNF0QwwiEvkM5Yg2eInI0fVgnQ0fBE; pt_pin=vonxingb;   __jda=122270672.1608019445517549061181.1608019446.1611891862.1611904582.23; __jdb=122270672.1.1608019445517549061181|23.1611904582; __jdv=122270672%7Ckong%7Ct_2010693212_%7Cjingfen%7C61685f2bfe4a4e5887ea0cd08d10fa93%7C1611904582499; mba_sid=16119045825019013685412751352.1`,
  // `pt_key=AAJgBQHiADCNVqltl25a1ecyf-5SPCQk81TRYARl_fq_YlKWjNS14cJf6SY-ZTruSDj9J2tEYN4; pt_pin=jeran;`,
  //   `pt_key=AAJf9m4HADBhVVgIQw1SQLyjsfETeeGa4RFZryFkPWP8vMkk-oI7bCWOmTb_o3CNyldcKGmFj00;pt_pin=14542702-703743;`,
  //   `pt_key=AAJf5zunADBzbaV7S0F-DFyRFCyHYlKw4IH3lLIe6I4VJE9wZobxD9erVzaRmaSEJnZQZrRFnKc;pt_pin=jd_5b54a8d20c8ba;`,
  //   `pt_key=AAJf4yjNADCyJmWZW9Z_tCkKfE0OjISu9WTOFSuyHzNAhGqS3QqR8kEBZY9XNGXg6o_K3axMVqw;pt_pin=ojdo9527;`
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
