WG.CommonMenu.configs.realm = {
  static_links: [
    {
      url: "https://eu.wargaming.net/shop/wotb/",
      color: "ffbe4c",
      id: 100,
      title_text: "realm_link_title_prem_shop"
    },
    {
      url: "https://eu.wargaming.net/support/?utm_content=cm-top",
      color: "ffffff",
      id: 13,
      title_text: "link_title_support"
    },
    {
      url: "https://github.com/wh1to/blitz-web/blob/main/readme.md",
      color: "ddee4c",
      id: 13,
      title_text: "link_title_coe"
    }
  ],
  nav_bar: [
    { type: "link", title: "Главная", href: "/ru/", active: true },
    { type: "link", title: "Магазин", href: "../../resources/wargaming.net/shop/wotb/offers/index", accent: true, icon: "store", target: "_blank" },
    { type: "link", title: "Лента", href: "/ru/news/" },
    /*{ type: "dropdown", title: "Зал славы", children: [
      { title: "Рейтинг", href: "/ru/leaderboard/" },
      { title: "Кланы", href: "/ru/clans-leaderboard/" }
    ]}*/
    //{ type: "link", title: "Турниры", href: "/ru/tournaments/" }
  ],
  leaderboard_wotg_url: "http://wotgenerals.eu/leaderboard/",
  name: "eu",
  third_party_js: "(function(){...})();",
  main_icon: "/media/public/img/4Fy2RVj9RmCO2LlF6KIbEw.svg",
  user_links: [
    {
      url: "http://eu.wargaming.net/personal/?utm_content=personal-link",
      color: "ffffff",
      id: 6,
      title_text: "realm_link_title_personal"
    },
    {
      url: "https://eu.wargaming.net/shop/redeem/?utm_content=bonus-code",
      color: "ffffff",
      id: 11,
      title_text: "link_title_bonus_code"
    }
  ],
  leaderboard_wot_url: "http://worldoftanks.eu/leaderboard/",
  change_pass_url: "http://eu.wargaming.net/personal/",
  bind_2fa_url: "https://wargaming.net/personal/credentials/2fa/otp/confirmation/",
  main_url: "http://eu.wargaming.net/?utm_content=wg-icon"
};