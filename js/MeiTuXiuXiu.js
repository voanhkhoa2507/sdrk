var body = $response.body;
var url = $request.url;

try {
    var obj = JSON.parse(body);
    
    // Check if the response contains 'data' object
    if (obj && obj.data) {
        // Unlock VIP flags
        obj.data.is_vip = true;
        obj.data.is_valid_user = 1;
        obj.data.vip_type = 1660450527; // Custom large timestamp/id
        obj.data.sub_type = 1;
        obj.data.old_vip_type = 4;
        obj.data.expire_days = 999999;
        obj.data.expire_time = "2099-12-31 23:59:59";
        obj.data.invalid_time = 4102444799; // 2099
        obj.data.exchange_vip = 0;
        obj.data.is_expire = 0;
        obj.data.in_trial_period = 1;
        obj.data.vip_sub_info = obj.data.vip_sub_info || {};
        obj.data.vip_sub_info.is_expire = 0;
        obj.data.vip_sub_info.is_valid_user = 1;
    }
    
    body = JSON.stringify(obj);
} catch (e) {
    // If body is not JSON (e.g. image download, binary file), safely ignore
    // This prevents "Network Error" when downloading Pro materials!
}

$done({body: body});
