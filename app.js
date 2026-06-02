const categories = [
  "软件", "硬件", "互联网", "芯片", "人工智能", "云计算",
  "移动设备", "数据库", "社交媒体", "电子商务", "游戏科技", "企业服务"
];

const tabs = ["所有宝贝", "天猫", "淘宝", "店铺", "企业购"];
const filters = ["综合", "销量", "价格", "区间", "520告白季 8.5折起", "国家补贴", "新品", "百亿补贴", "淘宝秒杀", "淘金币抵钱", "包邮", "次日达", "开票服务", "分期免息", "全球购", "天猫国际", "天猫超市", "筛选"];

const promos = [
  { title: "美国科技公司发展史｜从大型机到人工智能", subtitle: "一页看懂信息技术产业百年变化", tab: "所有宝贝", filter: "综合" },
  { title: "软件产品专区", subtitle: "Microsoft · Windows 3.1 · Mouse", tab: "淘宝", filter: "综合" },
  { title: "硬件与芯片专区", subtitle: "Intel · MacBook Air · Intel 4004", tab: "所有宝贝", filter: "综合" },
  { title: "项目导览专区", subtitle: "Intro · DQ · Personal Computer Adoption", tab: "所有宝贝", filter: "综合" },
  { title: "AI时代新品上架", subtitle: "Cloud · Chips · Data · Automation", tab: "所有宝贝", filter: "新品" }
];

const companies = [
  {
    id: "intro",
    name: "Intro",
    title: "Intro｜项目导览与核心问题说明",
    detailTitle: "Intro | How This Website Answers the Driving Question",
    price: "¥2026.6",
    year: "2026.6",
    yearLabel: "项目时间",
    desc: "导览本网站的核心问题：美国科技产品如何推动个人电脑普及。",
    viewed: "100人学习",
    detailViewed: "100人正在学习",
    location: "课堂",
    detailLocation: "历史课程项目",
    badges: ["项目导览", "必看科技"],
    store: "课程说明馆",
    categories: ["软件", "硬件", "芯片", "企业服务"],
    tab: "所有宝贝",
    initials: "Intro",
    color: "#ff5000",
    short: "This introduction explains the driving question and shows how each product on the website connects to the wider adoption of personal computers.",
    timeline: ["1940s: Large electronic computers proved that automatic calculation could transform research and government work", "1960s-1970s: Integrated circuits and microprocessors made smaller computers technically possible", "1980s-1990s: Software, interfaces, and input devices made PCs easier for ordinary users", "2000s: Portable laptops made personal computing part of everyday mobility", "2026.6: This project studies that historical process through product-style learning pages"],
    impact: "The Intro section frames the website's argument: personal computers spread because U.S. technology products made computing smaller, cheaper, easier to operate, more portable, and more useful in daily life."
  },
  {
    id: "intel",
    name: "Intel",
    title: "Intel 英特尔｜微处理器革命核心商品",
    detailTitle: "Intel 英特尔｜微处理器与个人电脑时代核心",
    price: "¥1968",
    year: "1968",
    desc: "Intel推动微处理器商业化，成为个人电脑时代的重要发动机。",
    viewed: "59人学习",
    detailViewed: "59人正在学习",
    location: "加州",
    detailLocation: "美国 加州 圣克拉拉",
    badges: ["芯片核心", "PC时代"],
    store: "半导体科技馆",
    categories: ["芯片", "硬件", "人工智能"],
    tab: "芯片与AI",
    initials: "Intel",
    color: "#0068b5",
    short: "Intel成立于1968年，由Robert Noyce和Gordon Moore创办。公司以存储芯片和微处理器起家，后来成为个人电脑CPU市场的重要领导者。Intel的发展与摩尔定律、半导体产业和PC时代紧密相关。",
    timeline: ["1968: Intel was founded by Robert Noyce and Gordon Moore", "1971: Intel released the 4004 microprocessor", "1978: The 8086 processor established the foundation of the x86 architecture", "1980s-1990s: Intel processors became central to the PC market", "1991: The Intel Inside campaign made processors visible to consumers", "2000s: Intel continued to dominate desktop and server processors", "2020s: Intel faced new competition in AI chips and advanced manufacturing"],
    impact: "Intel made personal computing scalable by turning processing power into a mass-produced component. Its microprocessors helped make PCs faster, cheaper, and easier for manufacturers and consumers to standardize around."
  },
  {
    id: "microsoft",
    name: "Microsoft",
    title: "Microsoft 微软｜PC软件帝国 Windows Office Azure",
    detailTitle: "Microsoft 微软｜从个人电脑软件到云计算帝国",
    price: "¥1975",
    year: "1975",
    desc: "从BASIC解释器到Windows与Office，微软塑造了个人电脑软件时代。",
    viewed: "73人学习",
    detailViewed: "73人正在学习",
    location: "华盛顿州",
    detailLocation: "美国 华盛顿州 雷德蒙德",
    badges: ["软件巨头", "课堂重点"],
    store: "西雅图软件旗舰店",
    categories: ["软件", "云计算", "游戏科技", "人工智能"],
    tab: "软件巨头",
    initials: "MS",
    color: "#2f7d32",
    short: "Microsoft成立于1975年，由Bill Gates和Paul Allen创办。公司早期通过BASIC解释器进入个人电脑市场，随后凭借MS-DOS、Windows和Office成为全球软件产业的代表企业。进入21世纪后，Microsoft又通过Azure、Xbox、LinkedIn和人工智能服务扩展影响力。",
    timeline: ["1975: Microsoft was founded by Bill Gates and Paul Allen", "1981: MS-DOS became a key operating system for the IBM PC", "1985: Windows 1.0 was released", "1990: Microsoft Office was introduced", "1995: Windows 95 helped bring the PC into mainstream culture", "2001: Xbox moved Microsoft into console gaming", "2010: Azure marked Microsoft's major cloud computing expansion", "2020s: Microsoft expanded rapidly into AI services"],
    impact: "Microsoft turned computer hardware into a familiar software platform. Windows and Office made personal computers useful for writing, calculation, presentations, schoolwork, business routines, and later cloud-connected work."
  },
  {
    id: "apple",
    name: "Apple",
    title: "Apple 苹果｜个人电脑 iPhone 生态系统爆款",
    detailTitle: "Apple 苹果｜从个人电脑到iPhone生态系统",
    price: "¥1976",
    year: "1976",
    desc: "Apple将个人电脑、图形界面、智能手机和数字生态带入大众生活。",
    viewed: "88人学习",
    detailViewed: "88人正在学习",
    location: "加州",
    detailLocation: "美国 加州 库比蒂诺",
    badges: ["设计创新", "改变生活"],
    store: "库比蒂诺创新店",
    categories: ["硬件", "移动设备", "软件"],
    tab: "硬件先锋",
    initials: "Apple",
    color: "#111111",
    short: "Apple成立于1976年，由Steve Jobs、Steve Wozniak和Ronald Wayne创办。公司早期通过Apple I和Apple II进入个人电脑市场，后来用Macintosh推广图形用户界面。2001年iPod发布，2007年iPhone发布，Apple逐渐建立起硬件、软件和服务结合的生态系统。",
    timeline: ["1976: Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne", "1977: The Apple II helped bring personal computers into homes and schools", "1984: The Macintosh popularized graphical user interfaces", "1997: Steve Jobs returned to Apple", "2001: The iPod reshaped digital media habits", "2007: The iPhone redefined the smartphone as a mass consumer device", "2010: The iPad expanded mobile computing", "2020s: Apple continued to develop custom chips, services, and ecosystem integration"],
    impact: "Apple made complex technology feel personal, visual, and desirable. Its computers lowered the psychological barrier to computing, and the iPhone made smartphones central to communication, media, photography, and daily life."
  },
  {
    id: "windows-31",
    name: "Windows 3.1",
    title: "Windows 3.1｜图形界面软件经典款",
    detailTitle: "Windows 3.1 | The Interface That Made PCs Feel Usable",
    price: "¥1992",
    year: "1992",
    desc: "微软图形化操作环境，让普通用户更容易理解和使用个人电脑。",
    viewed: "81人学习",
    detailViewed: "81人正在学习",
    location: "北京",
    detailLocation: "中国 北京",
    badges: ["必看科技", "有历史资料"],
    store: "微软中国",
    categories: ["软件", "企业服务"],
    tab: "软件巨头",
    initials: "Win",
    color: "#0078d4",
    short: "Windows 3.1 was one of the most important software products in the early 1990s PC market. It made the IBM-compatible personal computer feel less like a command-line machine and more like a visual workspace for ordinary users.",
    timeline: ["1992: Microsoft released Windows 3.1", "1992-1993: TrueType fonts improved desktop publishing and document appearance", "Early 1990s: Program Manager and File Manager became familiar entry points for PC users", "Mid-1990s: Windows 3.1 prepared users for Windows 95 and the mainstream GUI PC"],
    impact: "Windows 3.1 contributed to personal computer adoption by lowering the software barrier. It helped users open programs visually, manage files, use fonts, and see the PC as a friendly office and home tool rather than a specialist machine."
  },
  {
    id: "macbook-air",
    name: "MacBook Air",
    title: "MacBook Air｜轻薄笔记本代表商品",
    detailTitle: "MacBook Air | Thin, Portable Personal Computing",
    price: "¥2008",
    year: "2008",
    desc: "苹果轻薄笔记本代表，把个人电脑带向移动化、日常化和设计化。",
    viewed: "68人学习",
    detailViewed: "68人正在学习",
    location: "加州",
    detailLocation: "美国 加州 库比蒂诺",
    badges: ["必看科技", "有历史资料"],
    store: "乔布斯私房菜",
    categories: ["硬件", "移动设备", "软件"],
    tab: "硬件先锋",
    initials: "Air",
    color: "#555555",
    short: "The MacBook Air turned the laptop into a symbol of portable everyday computing. Its historical importance was not only that it was thin, but that it helped redefine what ordinary users expected a personal computer to feel like.",
    timeline: ["2008: Steve Jobs introduced the MacBook Air by pulling it from an envelope", "2010: The redesigned Air helped popularize thin solid-state laptops", "2010s: Ultrabooks and lightweight notebooks followed the design direction", "2020: Apple Silicon renewed the Air as a quiet, efficient mainstream laptop"],
    impact: "MacBook Air contributed to personal computer adoption by making the laptop feel lighter, more mobile, and more integrated into daily life. It helped shift the PC from a desk-bound object to a personal companion for school, work, travel, and media."
  },
  {
    id: "mouse",
    name: "Mouse",
    title: "Mouse｜人机交互指向设备",
    detailTitle: "Mouse | The Small Device That Made Computers Pointable",
    price: "¥1968",
    year: "1968",
    desc: "鼠标让电脑从输入命令变成点击、选择和拖动，降低个人电脑使用门槛。",
    viewed: "72人学习",
    detailViewed: "72人正在学习",
    location: "加州",
    detailLocation: "美国 加州 门洛帕克",
    badges: ["必看科技", "有历史资料"],
    store: "比尔盖茨小发明",
    categories: ["硬件", "软件"],
    tab: "硬件先锋",
    initials: "Mouse",
    color: "#f26b2f",
    short: "The computer mouse changed the meaning of personal computing by turning abstract commands into visible actions. It helped ordinary users point, click, drag, select, and explore a screen without first mastering command syntax.",
    timeline: ["1968: Douglas Engelbart publicly demonstrated the mouse at the Mother of All Demos", "1970s: Xerox PARC connected mouse interaction with graphical user interfaces", "1984: Macintosh brought mouse-based computing to a wider public", "1990s: Windows PCs made the mouse a standard home and office device"],
    impact: "The mouse contributed to personal computer adoption by making interaction physical and intuitive. It allowed graphical interfaces to become practical and helped users experience the PC as a visual workspace rather than a text-only machine."
  },
  {
    id: "intel-4004",
    name: "Intel 4004",
    title: "Intel 4004｜首款商用微处理器",
    detailTitle: "Intel 4004 | The Microprocessor That Pointed Toward Personal Computing",
    price: "¥1971",
    year: "1971",
    desc: "Intel 4004把中央处理能力压缩进单颗芯片，为个人电脑时代奠定芯片基础。",
    viewed: "69人学习",
    detailViewed: "69人正在学习",
    location: "加州",
    detailLocation: "美国 加州 圣克拉拉",
    badges: ["必看科技", "有历史资料"],
    store: "硬特尔",
    categories: ["芯片", "硬件"],
    tab: "芯片与AI",
    initials: "4004",
    color: "#0068b5",
    short: "The Intel 4004 was introduced in 1971 as the first commercially available microprocessor. Although it was created for calculators rather than personal computers, it proved that a programmable central processor could be placed on a single chip.",
    timeline: ["1971: Intel introduced the 4004 microprocessor", "Early 1970s: Single-chip processing changed how engineers imagined small computers", "Late 1970s: More powerful microprocessors enabled hobbyist and personal computer systems", "1980s: Microprocessors became the core of the mass-market PC"],
    impact: "Intel 4004 contributed to personal computer adoption by beginning the shift from large, specialized computing hardware toward compact, programmable chips. It made the future PC technically imaginable by shrinking central processing into a form that could be mass-produced."
  }
];

const companyProductOrder = [
  "intro",
  "intel",
  "intel-4004",
  "microsoft",
  "windows-31",
  "mouse",
  "apple",
  "macbook-air"
];

const state = {
  query: "",
  category: "",
  tab: "所有宝贝",
  filter: "综合",
  priceMin: "",
  priceMax: "",
  studyVersion: "Timeline Version",
  qty: 1,
  timeline: JSON.parse(localStorage.getItem("techTimeline") || "[]"),
  saved: JSON.parse(localStorage.getItem("savedCompanies") || "[]")
};

const app = document.querySelector("#app");
const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");
const similarBtn = document.querySelector("#similar-btn");
const defaultSearchText = "那些渗入我们生活的的科技公司";
let pendingScrollSelector = "";
const markdownCache = new Map();

function resizeSearchBox() {
  searchInput.style.height = "0px";
  const nextHeight = Math.min(Math.max(searchInput.scrollHeight, 38), 104);
  searchInput.style.height = `${nextHeight}px`;
}

searchInput.addEventListener("input", resizeSearchBox);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    searchForm.requestSubmit();
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  location.hash = "#/";
  render();
});

similarBtn.addEventListener("click", () => {
  state.query = "人工智能 云计算 芯片";
  searchInput.value = state.query;
  resizeSearchBox();
  location.hash = "#/";
  render();
});

document.querySelectorAll("[data-nav-action]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    handleNavAction(link.dataset.navAction);
  });
});

window.addEventListener("hashchange", render);
resizeSearchBox();

function saveState() {
  localStorage.setItem("techTimeline", JSON.stringify(state.timeline));
  localStorage.setItem("savedCompanies", JSON.stringify(state.saved));
}

function resetMarketState() {
  state.query = "";
  state.tab = "所有宝贝";
  state.filter = "综合";
  state.priceMin = "";
  state.priceMax = "";
  searchInput.value = defaultSearchText;
  resizeSearchBox();
}

function showMarket(scrollSelector = "") {
  pendingScrollSelector = scrollSelector;
  if (location.hash !== "#/") {
    location.hash = "#/";
  } else {
    renderMarket();
    flushPendingScroll();
  }
}

function handleNavAction(action) {
  if (action === "home") {
    resetMarketState();
    showMarket();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return;
  }

  if (action === "timeline") {
    showMarket("#timeline-panel");
    return;
  }

  if (action === "footer") {
    document.querySelector("#footer").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  resetMarketState();
  showMarket(".product-grid");
}

function flushPendingScroll() {
  if (!pendingScrollSelector) {
    return;
  }
  const selector = pendingScrollSelector;
  pendingScrollSelector = "";
  requestAnimationFrame(() => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function byId(id) {
  return companies.find((company) => company.id === id) || companies[0];
}

function companyScene(company) {
  return `<div class="symbol-scene" style="--scene-color:${company.color}"><b>${company.initials}</b></div>`;
}

const downloadedCoverFiles = {
  intro: "cover.png",
  intel: "downloaded.svg",
  microsoft: "downloaded.svg",
  apple: "downloaded.png",
  "windows-31": "downloaded.png",
  "macbook-air": "downloaded.png",
  mouse: "downloaded.jpg",
  "intel-4004": "downloaded.jpg"
};

const productVideos = {
  "windows-31": "content/ved/windows.mp4",
  "macbook-air": "content/ved/macbookair.mp4"
};

function companyGallery(company) {
  const base = `company-photos/${company.id}`;
  const coverSrc = downloadedCoverFiles[company.id] ? `${base}/${downloadedCoverFiles[company.id]}` : `${base}/cover.svg`;
  const gallery = [
    { label: "Image", title: "Downloaded company image", src: coverSrc }
  ];
  if (productVideos[company.id]) {
    gallery.unshift({
      label: "Video",
      title: "Product video",
      src: productVideos[company.id],
      poster: coverSrc,
      type: "video"
    });
  }
  return gallery;
}

function companyCover(company) {
  const base = `company-photos/${company.id}`;
  return {
    label: "Image",
    title: "Downloaded company image",
    src: downloadedCoverFiles[company.id] ? `${base}/${downloadedCoverFiles[company.id]}` : `${base}/cover.svg`
  };
}

function matchesCompany(company) {
  const q = state.query.toLowerCase();
  const haystack = [
    "美国科技公司历史 美国 科技 公司 历史 信息技术",
    company.name, company.title, company.desc, company.store,
    company.location, company.year, ...company.badges, ...company.categories
  ].join(" ").toLowerCase();
  const queryMatch = !q || q.split(/\s+/).every((part) => haystack.includes(part));
  const tabMatch = tabMatchesCompany(company);
  const filterMatch = filterCompany(company);
  return queryMatch && tabMatch && filterMatch;
}

function tabMatchesCompany(company) {
  const hasAnyCategory = (items) => items.some((item) => company.categories.includes(item));
  switch (state.tab) {
    case "天猫":
      return company.badges.includes("必看科技") || company.badges.includes("课堂重点") || company.badges.includes("设计创新");
    case "淘宝":
      return true;
    case "店铺":
      return Boolean(company.store);
    case "企业购":
      return hasAnyCategory(["企业服务", "数据库"]);
    default:
      return true;
  }
}

function filterCompany(company) {
  switch (state.filter) {
    case "区间":
      return matchesPriceRange(company);
    case "20世纪公司":
      return Number(company.year) < 2000;
    case "21世纪公司":
      return Number(company.year) >= 2000;
    case "创新指数高":
      return ["Intro", "Apple", "Microsoft", "Intel", "Windows 3.1", "MacBook Air", "Mouse", "Intel 4004"].includes(company.name);
    case "影响力最大":
      return ["Intro", "Microsoft", "Apple", "Windows 3.1", "Mouse", "Intel 4004"].includes(company.name);
    case "仍在运营":
      return ["Intro", "Intel", "Microsoft", "Apple", "Windows 3.1", "MacBook Air", "Mouse", "Intel 4004"].includes(company.name);
    case "上市公司":
      return ["Intel", "Microsoft", "Apple", "Windows 3.1", "MacBook Air", "Mouse", "Intel 4004"].includes(company.name);
    case "硅谷企业":
      return company.detailLocation.includes("加州");
    case "全球化企业":
      return Number(company.year) <= 1998;
    case "改变生活":
      return company.badges.includes("改变生活") || ["Intro", "Windows 3.1", "MacBook Air", "Mouse"].includes(company.name);
    case "课堂重点":
      return company.badges.includes("课堂重点") || company.badges.includes("必看科技") || ["Intel", "Microsoft", "Apple"].includes(company.name);
    case "筛选":
      return ["Intel", "Microsoft", "Apple", "Windows 3.1"].includes(company.name);
    default:
      return true;
  }
}

function matchesPriceRange(company) {
  const min = Number(state.priceMin);
  const max = Number(state.priceMax);
  const year = Number(company.year);
  const hasMin = state.priceMin !== "";
  const hasMax = state.priceMax !== "";
  if (!hasMin && !hasMax) {
    return true;
  }
  if (hasMin && year < min) {
    return false;
  }
  if (hasMax && year > max) {
    return false;
  }
  return true;
}

function renderPriceRange() {
  return `
    <form class="price-range-row" id="price-range-form">
      <span>价格区间</span>
      <label>
        <span>¥</span>
        <input id="price-min" type="number" inputmode="numeric" min="1900" max="2100" value="${state.priceMin}" placeholder="最低">
      </label>
      <i>-</i>
      <label>
        <span>¥</span>
        <input id="price-max" type="number" inputmode="numeric" min="1900" max="2100" value="${state.priceMax}" placeholder="最高">
      </label>
      <button type="submit">确定</button>
      <button type="button" id="price-range-clear">清空</button>
    </form>
  `;
}

function priceRangeText() {
  if (state.filter !== "区间" || (!state.priceMin && !state.priceMax)) {
    return "美国科技史";
  }
  return `¥${state.priceMin || "不限"} - ¥${state.priceMax || "不限"}`;
}

function viewedCount(company) {
  const match = company.viewed.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function sortCompanies(items) {
  const sorted = [...items];
  const orderedIndex = (company) => {
    const index = companyProductOrder.indexOf(company.id);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };
  switch (state.filter) {
    case "销量":
      return sorted.sort((a, b) => viewedCount(b) - viewedCount(a));
    case "价格":
      return sorted.sort((a, b) => Number(a.year) - Number(b.year));
    case "综合":
    default:
      return sorted.sort((a, b) => orderedIndex(a) - orderedIndex(b) || companies.indexOf(a) - companies.indexOf(b));
  }
}

function renderMarket() {
  const filtered = sortCompanies(companies.filter(matchesCompany));
  app.innerHTML = `
    <section class="market-shell">
      <section class="market-main">
        <div class="market-anchor" id="company-index"></div>
        <nav class="tabs-row" aria-label="主导航">
          <div class="tabs-left">
            ${tabs.map((tab) => `<button class="tab-btn ${state.tab === tab ? "active" : ""}" data-tab="${tab}">${tab}</button>`).join("")}
          </div>
          <div class="tabs-meta">
            <button type="button">发货地</button>
            <span class="meta-line-break"></span>
            <span class="view-mode active" aria-hidden="true">▦</span>
            <span class="view-mode" aria-hidden="true">☰</span>
            <span class="meta-line-break"></span>
            <strong>1</strong><span>/100</span>
          </div>
        </nav>
        <div class="filter-row">
          ${filters.map((filter) => `<button class="filter-chip ${state.filter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}
        </div>
        ${state.filter === "区间" ? renderPriceRange() : ""}
        <div class="coupon-tip">
          <div class="coupon-left">
            <span class="coupon-icon">¥</span>
            <span>您有</span>
            <strong>2张共260元</strong>
            <span>消费券待使用</span>
            <em>13:03:22</em>
            <span>后失效</span>
          </div>
          <button type="button">筛选商品</button>
        </div>
        ${filtered.length ? `<div class="product-grid">${filtered.map(renderCard).join("")}</div>` : `<div class="empty-state">没有找到匹配公司，试试“云计算”“芯片”或“加州”。</div>`}
        ${renderTimelinePanel()}
      </section>
    </section>
  `;

  app.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      renderMarket();
    });
  });

  app.querySelectorAll("[data-promo-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const promo = promos[Number(button.dataset.promoIndex)];
      state.query = "";
      state.tab = promo.tab;
      state.filter = promo.filter;
      state.priceMin = "";
      state.priceMax = "";
      searchInput.value = defaultSearchText;
      resizeSearchBox();
      renderMarket();
      document.querySelector("#company-index").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  app.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderMarket();
    });
  });

  const priceRangeForm = app.querySelector("#price-range-form");
  if (priceRangeForm) {
    priceRangeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const minInput = app.querySelector("#price-min");
      const maxInput = app.querySelector("#price-max");
      let min = minInput.value.trim();
      let max = maxInput.value.trim();
      if (min && max && Number(min) > Number(max)) {
        [min, max] = [max, min];
      }
      state.priceMin = min;
      state.priceMax = max;
      renderMarket();
    });

    app.querySelector("#price-range-clear").addEventListener("click", () => {
      state.priceMin = "";
      state.priceMax = "";
      renderMarket();
    });
  }

  bindTimelineRemove();
}

function renderCard(company) {
  const cover = companyCover(company);
  return `
    <a class="item-card" href="#/company/${company.id}" data-name="${company.name}">
      <div class="item-media">
        <img class="item-photo" src="${cover.src}" alt="${company.name} ${cover.title}">
        <span class="item-ribbon">${company.badges[0]}</span>
      </div>
      <div class="item-info">
        <h3 class="item-title">${company.title}</h3>
        <div class="price-row">
          <span class="price">${company.price}</span>
          <span class="viewed">${company.viewed}</span>
        </div>
        <p class="item-desc">${company.desc}</p>
        <div class="badge-row">${company.badges.map((badge) => `<span class="badge">${badge}</span>`).join("")}</div>
        <div class="store-row">
          <span class="store-link">${company.store}</span>
          <span>${company.location}</span>
        </div>
      </div>
    </a>
  `;
}

function renderGalleryMain(company, media) {
  if (media.type === "video") {
    return `
      <video id="gallery-main-video" class="gallery-video" poster="${media.poster}" controls playsinline preload="metadata">
        <source src="${media.src}" type="video/mp4">
        ${company.name} video
      </video>
    `;
  }
  return `<img id="gallery-main-image" src="${media.src}" alt="${company.name} ${media.title}">`;
}

function renderGalleryThumb(company, media, index) {
  const thumbSrc = media.poster || media.src;
  return `
    <button
      class="thumb ${media.type === "video" ? "video-thumb" : ""} ${index === 0 ? "active" : ""}"
      type="button"
      data-gallery-type="${media.type || "image"}"
      data-gallery-src="${media.src}"
      data-gallery-poster="${media.poster || ""}"
      data-gallery-alt="${company.name} ${media.title}"
    >
      <img src="${thumbSrc}" alt="">
      ${media.type === "video" ? `<span class="play-badge" aria-hidden="true">▶</span>` : ""}
      <span>${media.label}</span>
    </button>
  `;
}

function renderDetail(id) {
  const company = byId(id);
  const gallery = companyGallery(company);
  const related = companies.filter((item) => item.id !== company.id && item.categories.some((category) => company.categories.includes(category))).slice(0, 3);
  app.innerHTML = `
    <a class="detail-back" href="#/">返回搜索结果</a>
    <section class="detail-shell">
      <article class="detail-main">
        <div class="detail-top">
          <div class="detail-gallery">
            <div class="detail-hero">
              ${renderGalleryMain(company, gallery[0])}
            </div>
            ${gallery.length > 1 ? `<div class="thumb-row">
              ${gallery.map((media, index) => renderGalleryThumb(company, media, index)).join("")}
            </div>` : ""}
          </div>
          <div class="detail-buy">
            <h1>${company.detailTitle}</h1>
            <div class="price-panel">
              <div class="price-line"><span class="label">价格</span><span class="detail-price">${company.price}</span><span>（${company.yearLabel || "创立年份"} ${company.year}）</span></div>
              <div class="meta-line"><span class="label">24人已购</span></div>
              <div class="meta-line"><span class="label">发货地</span><span>${company.detailLocation}</span></div>
            </div>
            <div class="service-badges">
              ${["课堂重点", "历史资料", "创新影响", "适合展示"].map((badge) => `<span class="badge">${badge}</span>`).join("")}
            </div>
            <div class="buy-row">
              <button class="buy-btn buy-now" id="add-timeline">加入购物车</button>
              <button class="buy-btn add-cart" id="learn-now">立即购买</button>
            </div>
          </div>
        </div>
        <section class="detail-section" id="company-details">
          <h2>Details</h2>
          <div class="markdown-detail" id="company-markdown-content">
            <p class="markdown-loading">Loading local Markdown content...</p>
          </div>
        </section>
        <section class="detail-section" id="company-timeline">
          <h2>Development Timeline</h2>
          <ul class="history-timeline">${company.timeline.map(renderTimelineLine).join("")}</ul>
        </section>
        <section class="detail-section" id="company-impact">
          <h2>Historical Impact</h2>
          <p class="history-text">${company.impact}</p>
        </section>
        <section class="detail-section" id="company-related">
          <h2>Related Recommendations</h2>
          <div class="related-grid">${related.map((item) => `
            <a class="related-card" href="#/company/${item.id}" data-related-link>
              <strong>${item.name}</strong>
              <span>${item.price} · ${item.badges.join(" / ")}</span>
            </a>
          `).join("")}</div>
        </section>
        ${renderTimelinePanel()}
      </article>
      <aside class="detail-sidebar">
        <div class="store-box">
          <h2>Store Information</h2>
          <strong>${company.store}</strong>
          <div class="store-ratings">
            <div class="rating-row"><span>Historical Impact</span><strong>4.9 High</strong></div>
            <div class="rating-row"><span>Innovation Index</span><strong>4.8 High</strong></div>
            <div class="rating-row"><span>Source Quality</span><strong>4.9 High</strong></div>
          </div>
          <button class="store-cta" id="store-enter" type="button">Enter Archive</button>
        </div>
      </aside>
    </section>
  `;

  app.querySelector("#add-timeline").addEventListener("click", () => {
    if (!state.timeline.includes(company.id)) {
      state.timeline.push(company.id);
      saveState();
    }
    renderDetail(company.id);
    document.querySelector("#timeline-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  app.querySelector("#learn-now").addEventListener("click", () => {
    const targetByVersion = {
      "Brief Version": "#company-details",
      "Timeline Version": "#company-timeline",
      "Deep Analysis": "#company-impact"
    };
    document.querySelector(targetByVersion[state.studyVersion] || "#company-timeline").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  app.querySelector("#store-enter").addEventListener("click", () => {
    document.querySelector("#company-details").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  app.querySelectorAll("[data-related-link]").forEach((link) => {
    link.addEventListener("click", () => {
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }));
    });
  });

  app.querySelectorAll("[data-gallery-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const detailHero = app.querySelector(".detail-hero");
      const mediaType = button.dataset.galleryType;
      if (mediaType === "video") {
        detailHero.innerHTML = `
          <video id="gallery-main-video" class="gallery-video" poster="${button.dataset.galleryPoster}" controls playsinline autoplay preload="metadata">
            <source src="${button.dataset.gallerySrc}" type="video/mp4">
            ${button.dataset.galleryAlt}
          </video>
        `;
        const video = app.querySelector("#gallery-main-video");
        video.play().catch(() => {});
      } else {
        detailHero.innerHTML = `<img id="gallery-main-image" src="${button.dataset.gallerySrc}" alt="${button.dataset.galleryAlt}">`;
      }
      app.querySelectorAll("[data-gallery-src]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  loadCompanyMarkdown(company);
  bindTimelineRemove();
}

function renderTimelineLine(line) {
  const parts = line.split(/[:：]\s*/);
  return `<li><strong>${parts[0]}</strong><span>${parts.slice(1).join(": ")}</span></li>`;
}

function renderDetailInfo(company) {
  return `
    <p class="history-text">${company.short}</p>
    <div class="detail-info-grid">
      ${(company.detailInfo || []).map((item) => `
        <article class="detail-info-card">
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderInlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function normalizeMarkdownAssetSrc(src) {
  const marker = "/his_proj/";
  const markerIndex = src.indexOf(marker);
  if (markerIndex >= 0) {
    return src.slice(markerIndex + marker.length);
  }
  return src;
}

function renderMarkdownImage(src, alt) {
  const normalizedSrc = normalizeMarkdownAssetSrc(src.trim());
  return `<figure class="markdown-image"><img src="${escapeHtml(normalizedSrc)}" alt="${escapeHtml(alt.trim())}"></figure>`;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }
    html.push(`<p>${renderInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) {
      return;
    }
    html.push(`<ul>${list.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    const markdownImageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (markdownImageMatch) {
      flushParagraph();
      flushList();
      html.push(renderMarkdownImage(markdownImageMatch[2], markdownImageMatch[1]));
      return;
    }

    const listMatch = line.match(/^[-*]\s+(.+)/);
    if (listMatch) {
      flushParagraph();
      list.push(listMatch[1]);
      return;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = Math.min(Math.max(headingMatch[1].length + 1, 3), 5);
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      return;
    }

    flushList();
    paragraph.push(line);
  });

  flushParagraph();
  flushList();
  return html.join("");
}

function setCompanyMarkdown(company, markdown) {
  if (location.hash !== `#/company/${company.id}`) {
    return;
  }

  const target = app.querySelector("#company-markdown-content");
  if (target) {
    target.innerHTML = renderMarkdown(markdown);
  }
}

function loadCompanyMarkdown(company) {
  const path = `content/companies/${company.id}.md`;
  if (location.protocol === "file:") {
    const target = app.querySelector("#company-markdown-content");
    if (target) {
      target.innerHTML = `
        <div class="markdown-warning">
          当前页面是用 file:// 打开的，浏览器会阻止读取本地 Markdown 文件。请使用本地服务器打开页面：<strong>http://localhost:8000</strong>
        </div>
        ${renderDetailInfo(company)}
      `;
    }
    return;
  }

  if (markdownCache.has(path)) {
    const markdown = markdownCache.get(path);
    if (markdown) {
      setCompanyMarkdown(company, markdown);
    }
    return;
  }

  fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Markdown not found: ${path}`);
      }
      return response.text();
    })
    .then((markdown) => {
      markdownCache.set(path, markdown);
      setCompanyMarkdown(company, markdown);
    })
    .catch(() => {
      markdownCache.set(path, "");
      const target = app.querySelector("#company-markdown-content");
      if (target && location.hash === `#/company/${company.id}`) {
        target.innerHTML = renderDetailInfo(company);
      }
    });
}

function renderTimelinePanel() {
  const selected = state.timeline
    .map((id) => companies.find((company) => company.id === id))
    .filter(Boolean)
    .sort((a, b) => Number(a.year) - Number(b.year));
  return `
    <section class="timeline-panel" id="timeline-panel">
      <h3>Learning Timeline Comparison</h3>
      <div class="timeline-list">
        ${selected.length ? selected.map((company) => `
          <span class="timeline-pill">
            <strong>${company.year}</strong>
            <a href="#/company/${company.id}">${company.name}</a>
            <button type="button" aria-label="移除 ${company.name}" data-remove-timeline="${company.id}">×</button>
          </span>
        `).join("") : `<span class="viewed">Use “Add to Timeline” on a detail page to compare companies here.</span>`}
      </div>
    </section>
  `;
}

function bindTimelineRemove() {
  app.querySelectorAll("[data-remove-timeline]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.timeline = state.timeline.filter((id) => id !== button.dataset.removeTimeline);
      saveState();
      render();
    });
  });
}

function render() {
  const match = location.hash.match(/^#\/company\/([a-z0-9-]+)/);
  if (match) {
    renderDetail(match[1]);
    window.scrollTo({ top: 0, left: 0 });
  } else {
    renderMarket();
  }
  flushPendingScroll();
}

render();
