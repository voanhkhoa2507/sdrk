# 🚀 Shadowrocket Premium Config

Unlock premium features cho 3 ứng dụng:

| App | Tính năng |
|-----|-----------|
| 🎬 **YouTube** | No ads, Background play, PiP, Download |
| 🎵 **Spotify** | Unlimited skip, On-demand play, No audio ads |
| 📸 **Locket** | Gold features, Video dài, Full-res photos |

## 📥 Cách sử dụng

1. Copy link sau:
```
https://raw.githubusercontent.com/voanhkhoa2507/sdrk/main/3apps_premium.conf
```

2. Mở **Shadowrocket** → **Config** → **Import...**
3. Dán link → Import
4. Chọn config vừa import (tick ✓)
5. Vào **Settings** → **HTTPS Decryption** → **Generate New CA Certificate** → **Install** → **Trust**
6. Bật Shadowrocket → Mở app để test

## ⚠️ Lưu ý

- Cần **generate MITM certificate riêng** trên thiết bị của bạn
- Spotify chỉ unlock **một phần** (không có Very High quality, không download offline)
- Cần có **proxy/VPN node** để các Rule PROXY hoạt động (hoặc đổi PROXY thành DIRECT nếu không cần)

## 📁 Cấu trúc

```
├── 3apps_premium.conf    # File config chính
├── js/
│   ├── youtube.response.js   # YouTube Premium script
│   ├── spotify-json.js       # Spotify request modifier
│   ├── spotify-proto.js      # Spotify protobuf modifier
│   ├── Locket.js             # Locket Gold (RevenueCat spoof)
│   └── deleteHeader.js       # Cache header remover
└── README.md
```
