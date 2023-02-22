let resData = {
    "data": {
        "acts": [
            {
                "act_desc": "消费满99元自动抹去零头",
                "act_id": 806206707,
                "act_name": "消费抹零",
                "act_type": 6,
                "activity_cycle_time": 0,
                "activity_cycle_type": 0,
                "benefit_top_limit": 0,
                "discount": 0
            },

            {
                "act_desc": "随机优惠0.01-10.00元",
                "act_id": 806206699,
                "act_name": "消费随机立减",
                "act_type": 7,
                "activity_cycle_time": 0,
                "activity_cycle_type": 0,
                "benefit_top_limit": 0,
                "discount": 0
            },
            {
                "act_desc": "订单金额享8折，最高23元",
                "act_id": 806206694,
                "act_name": "会员8折活动",
                "act_type": 0,
                "activity_cycle_time": 0,
                "activity_cycle_type": 0,
                "benefit_top_limit": 2300,
                "discount": 80
            },
            {
                "act_desc": "累计消费满26元可领取好的柠檬",
                "act_id": 806205819,
                "act_name": "消费满额送礼",
                "act_type": 1,
                "activity_cycle_time": 0,
                "activity_cycle_type": 0,
                "award_info": {
                    "acc_amount": 1400,
                    "award_name": "好的柠檬",
                    "award_need_amount": 100,
                    "award_photo": "https://wxpaylogo.qpic.cn/wxpaylogo/PiajxSqBRaELcSRqecBN21jkBo36v9tl8XdQBicvUQTP8GLYf95h3dJw/0",
                    "award_redeem_count": 0,
                    "award_value": 1500,
                    "fav_id": "0"
                },
                "benefit_top_limit": 0,
                "discount": 0
            },
            {
                "act_desc": "累计消费满10元可领取满10减1优惠券",
                "act_id": 806206942,
                "act_name": "消费满额送礼",
                "act_type": 1,
                "activity_cycle_time": 0,
                "activity_cycle_type": 0,
                "award_info": {
                    "acc_amount": 1000,
                    "award_name": "满10减1优惠券",
                    "award_need_amount": 1000,
                    "award_photo": "https://wxpaylogo.qpic.cn/wxpaylogo/PiajxSqBRaELcSRqecBN21q6Zg0gpRgDZnVUllG6Aaic7DBOvgFygaPQ/0",
                    "award_redeem_count": 1,
                    "award_value": 100,
                    "coupon_threshold": 1000,
                    "coupon_value": 100,
                    "fav_id": "0"
                },
                "benefit_top_limit": 0,
                "discount": 0
            },
            {
                "act_desc": "总价值为11元的2张优惠券",
                "act_id": 659908,
                "act_name": "满减优惠券",
                "act_type": 5,
                "coupon_pack": {
                    "coupon_get_url": "get_coupon_param=060000849e342bcaa753da6f35e879dae0e77a",
                    "expired_time": 1628063020,
                    "stocks": [
                        {
                            "discount": 1000,
                            "status": 0,
                            "stock_id": 8634358,
                            "threshold": 5000
                        },
                        {
                            "discount": 100,
                            "status": 0,
                            "stock_id": 8634359,
                            "threshold": 6000
                        }
                    ]
                }
            }

        ],
        "is_friend": false,
        "saved_amount": 2200,
        "add_friend_url": "https://ad.qq.com/sdfad",
        "add_friend_time": 1560030023,
        "wechat_number": "wxid_rp1d7y770rzq22",
        "friend_cnt": 85
    },
    "env": "idc",
    "errcode": 0,
    "graphid": 33556544
}
let entrisData = Object.entries(resData)
// entrisData.forEach(item => {

// })
const obj = { a: 1 }
const arr = [0, 1, 2, 4, 56]

function getType(data) {
    return Object.prototype.toString.call(data).match(/(?<=\s)[A-z]+(?=])/g)[0]
}

function translate(data){
    const type=getType(data)
    if(type=="Object"||type==='Array'){
        
    }
}


let res = getType([])
console.log(res)







