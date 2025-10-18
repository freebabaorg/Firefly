import type { FriendLink } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链配置
export const friendsConfig: FriendLink[] = [
  {
    title: "Shadowrocket",
    imgurl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f6/d9/61/f6d961a1-1204-2152-693b-f621d02df3ff/AppIcon-0-0-1x_U007euniversal-0-1-85-220.png/230x0w.webp",
    desc: "苹果手机最好用的翻墙梯子！",
    siteurl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
    tags: ["app"],
    weight: 10, // 权重，数字越大排序越靠前
    enabled: true, // 是否启用
  },
  {
    title: "Clash Verge",
    imgurl: "https://raw.githubusercontent.com/clash-verge-rev/clash-verge-rev/dev/src-tauri/icons/icon.png",
    desc: "PC电脑最好用的翻墙梯子工具",
    siteurl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    tags: ["app"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Clash Meta for Android",
    imgurl: "https://clashmetaforandroid.com/wp-content/uploads/2024/09/logo-150x150.png",
    desc: "安卓手机最好用的翻墙梯子工具",
    siteurl: "https://github.com/MetaCubeX/ClashMetaForAndroid",
    tags: ["app"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Shadowsocks",
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shadowsocks_logo.png/250px-Shadowsocks_logo.png",
    desc: "Shadowsocks（简称SS）是一种基于Socks5代理方式的加密传输协议，也可以指实现这个协议的各种开发包。",
    siteurl: "https://github.com/shadowsocks",
    tags: ["协议"],
    weight: 8,
    enabled: true,
  },
];

// 获取启用的友链并按权重排序
export const getEnabledFriends = (): FriendLink[] => {
  return friendsConfig
    .filter((friend) => friend.enabled)
    .sort((a, b) => b.weight - a.weight); // 按权重降序排序
};
