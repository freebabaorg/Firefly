import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告", // 公告标题
  content: "FreeBaBa.org 免费巴巴 这是一个翻墙梯子节点免费分享博客，而且每天更新，永久免费！", // 公告内容
  closable: true, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "了解更多", // 链接文本
    url: "/about/", // 链接 URL
    external: false, // 内部链接
  },
};
