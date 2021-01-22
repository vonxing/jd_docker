35 9 * * * node /scripts/jd_crazy_joy.js >> /scripts/logs/jd_crazy_joy.log 2>&1
1 */1 * * * node /scripts/jd_crazy_joy_coin.js >> /scripts/logs/jd_crazy_joy_coin.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0,1 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
10 8,12,21 * * * node /scripts/jd_firecrackers.js >> /scripts/logs/jd_firecrackers.log 2>&1
30 10 * * * node /scripts/jd_immortal.js >> /scripts/logs/jd_immortal.log 2>&1