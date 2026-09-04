var body = $response.body;
try {
  var obj = JSON.parse(body);
  if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_expire_time = 4102444800;
    obj.data.vip_start_time = 1640966400;
  }
  body = JSON.stringify(obj);
} catch (e) {
}
$done({body: body});
