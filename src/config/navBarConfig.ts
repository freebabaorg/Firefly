import type { NavBarConfig, NavBarLink } from "../types/config";
import { LinkPreset } from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    LinkPreset.Home,
    LinkPreset.Archive,
  ];

  // 根据配置决定是否添加追番页面
//  if (siteConfig.pages.anime) {  //
//    links.push(LinkPreset.Anime); //
//  } //

links.push({
  name: "技术分享",  // 菜单文本（支持 i18n，如果配置了多语言）
  url: "/tech-sharing/",  // 链接路径（需确保对应页面存在）
  icon: "material-symbols:share",  // 图标
});

  // 支持自定义导航栏链接,并且支持多级菜单
  links.push({
    name: "链接",
    url: "/links/",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/CuteLeaf/Firefly",
        external: true,
        icon: "fa6-brands:github",
      },
      {
        name: "Bilibili",
        url: "https://space.bilibili.com/38932988",
        external: true,
        icon: "fa6-brands:bilibili",
      },
    ],
  });

  links.push(LinkPreset.Friends);

  // 根据config的页面开关动态生成项目、技能、经历菜单项
  const otherChildren: NavBarLink[] = [];

  if (siteConfig.pages.projects) {
    otherChildren.push({
      name: "我的项目",
      url: "/projects/",
      icon: "material-symbols:work",
    });
  }

  if (siteConfig.pages.skills) {
    otherChildren.push({
      name: "我的技能",
      url: "/skills/",
      icon: "material-symbols:psychology",
    });
  }

  if (siteConfig.pages.timeline) {
    otherChildren.push({
      name: "我的经历",
      url: "/timeline/",
      icon: "material-symbols:timeline",
    });
  }

  links.push({
    name: "关于",
    url: "/content/",
    icon: "material-symbols:info",
    children: [LinkPreset.About, ...otherChildren],
  });
  return { links };
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
