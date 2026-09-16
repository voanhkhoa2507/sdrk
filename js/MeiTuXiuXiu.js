var body = $response.body;
var url = $request.url;

try {
    // Only process specific endpoints related to user profile and VIP status
    if (url.indexOf("/user/") !== -1 || url.indexOf("/vip/") !== -1 || url.indexOf("/h5/vip/") !== -1) {
        var obj = JSON.parse(body);
        
        if (obj && obj.data) {
            obj.data.is_vip = true;
            obj.data.is_valid_user = 1;
            obj.data.vip_type = 1; 
            obj.data.sub_type = 1;
            obj.data.old_vip_type = 4;
            obj.data.expire_days = 999999;
            obj.data.expire_time = "2099-12-31 23:59:59";
            obj.data.invalid_time = 4102444799; 
            obj.data.exchange_vip = 0;
            obj.data.is_expire = 0;
            obj.data.in_trial_period = 1;
            
            if (obj.data.vip_sub_info) {
                obj.data.vip_sub_info.is_expire = 0;
                obj.data.vip_sub_info.is_valid_user = 1;
            }
            
            // Return the modified body
            $done({body: JSON.stringify(obj)});
        } else {
            // Not the expected format, return unmodified
            $done({});
        }
    } else {
        // Not a VIP/User endpoint, return unmodified
        $done({});
    }
} catch (e) {
    // Error parsing JSON, return unmodified
    $done({});
}
