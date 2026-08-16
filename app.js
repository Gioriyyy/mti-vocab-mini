const appState = {
  currentDay: 1,
  storageKey: "mti-vocab-mini-progress-v2"
};

const planDays = [
  {
    day: 1,
    title: "Day 1 · ethics / honor / appropriate",
    focus: "先建立词根拆词感，不追求一次记全，而是先学会把散词并成词族。",
    bookRange: "《华研专八》1-60 词",
    intake: "新词 60-80，核心词根 4 组",
    roots: ["ethic", "honor", "appropri", "manifest"],
    tasks: [
      "先拆 10 个词，不先看中文，只判断前缀、词根和词性。",
      "把 honor / dishonor / respectable / decency 并成“品格评价”一组。",
      "完成 5 分钟回想、30 分钟回想、晚上回想三轮最小复习。",
      "写 2 句汉译英，主题限定为道德规范和行为得体。"
    ],
    outputs: [
      "A decent public official should act in accordance with ethical principles.",
      "The funds were misappropriated in violation of financial discipline."
    ]
  },
  {
    day: 2,
    title: "Day 2 · assure / define / therapy",
    focus: "把抽象动词和学术词并推进，开始适应正式语体。",
    bookRange: "《华研专八》61-120 词",
    intake: "新词 70-90，核心词根 4 组",
    roots: ["sure", "fin", "therap", "spir"],
    tasks: [
      "区分 assure / reassure / ensure。",
      "整理 definition / definitive / define 的派生路径。",
      "完成 5 分钟回想和 30 分钟回想。",
      "做 3 题中译英，练正式表达。"
    ],
    outputs: [
      "The new policy is intended to reassure investors.",
      "A definitive explanation requires more rigorous evidence."
    ]
  },
  {
    day: 3,
    title: "Day 3 · function / mobil / manifest",
    focus: "把连续词表重组成词族，开始建立真正的扩词速度。",
    bookRange: "《华研专八》121-180 词",
    intake: "新词 70-90，核心词根 4 组",
    roots: ["funct", "mob", "mot", "mani"],
    tasks: [
      "一口气串记 function / malfunction / functional。",
      "区分 mobile / mobilize / demobilize 的方向变化。",
      "围绕 manifest 写 3 个中文概念对应英文表达。",
      "完成当天晚上打乱顺序复习。"
    ],
    outputs: [
      "The reform has begun to manifest its structural impact.",
      "The government mobilized resources to stabilize the market."
    ]
  },
  {
    day: 4,
    title: "Day 4 · aggregate / conflate / syndicate",
    focus: "切入统计、组织、概念辨析类表达，贴近贸大政经文本。",
    bookRange: "《华研专八》900-1000 词附近",
    intake: "新词 80-100，主题推进",
    roots: ["greg", "flate", "sect", "dole"],
    tasks: [
      "把 aggregate / amalgamate / conflate 放在同一张辨析卡上。",
      "分别造句：总量统计、企业联合、概念混淆。",
      "完成 1 天和 2 天节点复习。",
      "口头复述今天最值钱的 15 词。"
    ],
    outputs: [
      "The report aggregates data from multiple regional markets.",
      "We should not conflate short-term volatility with structural decline."
    ]
  },
  {
    day: 5,
    title: "Day 5 · cred / credit / discredit",
    focus: "进入贸大高频的公信力、信誉、认证和抹黑表达。",
    bookRange: "《华研专八》1980-2000 词附近",
    intake: "新词 80-100，cred 主轴",
    roots: ["cred", "eman", "hydr", "macul"],
    tasks: [
      "串记 accredit / credit / credible / credibility / discredit。",
      "围绕公信力、认证、抹黑各造 1 句。",
      "把 impeccable / immaculate 放入写作升级词。",
      "完成 4 天节点回收。"
    ],
    outputs: [
      "Policy credibility depends on transparency and consistent implementation.",
      "The agency was officially accredited by an international body."
    ]
  },
  {
    day: 6,
    title: "Day 6 · decrease / decree / deficit",
    focus: "正式进入政经主轴，形成财政、法令、逆差词网。",
    bookRange: "《华研专八》3980-4005 词附近",
    intake: "新词 90-110，de- 系列与政经词",
    roots: ["cre", "ficit", "leg", "delib"],
    tasks: [
      "区分 decrease / deficit / defect。",
      "围绕 decree / delegate / deliberate / democracy 写主题句。",
      "做一组财政、治理、法令小词包。",
      "完成 7 天前词汇的第一次集中回收。"
    ],
    outputs: [
      "The trade deficit narrowed as exports regained momentum.",
      "The decree was issued after prolonged deliberation."
    ]
  },
  {
    day: 7,
    title: "Day 7 · 周中复盘",
    focus: "这一天不盲冲新词，先把前 6 天压实。",
    bookRange: "复盘 Day 1-6",
    intake: "新词减半，复习翻倍",
    roots: ["cred", "mob", "manifest", "deficit"],
    tasks: [
      "回看错词，重做 20 词中译英。",
      "每个重点词根写出 1 条语义链。",
      "把前 6 天输出句改写成更正式的贸大风格。",
      "做一次 30 分钟限时复盘。"
    ],
    outputs: [
      "Institutional credibility is central to effective governance.",
      "Regional development requires sustained policy coordination."
    ]
  },
  {
    day: 8,
    title: "Day 8 · trade / finance / policy",
    focus: "从词根转入主题调词，贴近商贸和政策文本。",
    bookRange: "政经相关页 + MTI 高频手册 Unit 1",
    intake: "新词 90-110，主题式摄入",
    roots: ["fer", "gress", "tract", "press"],
    tasks: [
      "把技术转移、资本流动、政策推进放在同一输出组。",
      "用 fer / gress / tract 各写 2 个贸大场景表达。",
      "从 MTI 高频词手册补 20-30 个主题词。",
      "完成晚上打乱顺序复习。"
    ],
    outputs: [
      "Technology transfer can enhance industrial competitiveness.",
      "The negotiations made substantial progress on market access."
    ]
  },
  {
    day: 9,
    title: "Day 9 · media / diplomacy / public discourse",
    focus: "补足媒体、国际关系和公共表达语体。",
    bookRange: "公共表达词 + MTI 高频手册 Unit 2",
    intake: "新词 80-100，主题扩展",
    roots: ["voc", "dict", "claim", "mani"],
    tasks: [
      "做声明、表态、呼吁、谴责词包。",
      "区分 claim / proclaim / disclaimer。",
      "把 public discourse 相关词放进一段新闻翻译里。",
      "完成 1 天、2 天、4 天三轮旧词回收。"
    ],
    outputs: [
      "The spokesperson reaffirmed the country's commitment to dialogue.",
      "The statement was widely interpreted as a diplomatic signal."
    ]
  },
  {
    day: 10,
    title: "Day 10 · literature / culture / humanities",
    focus: "保持百科和文化词储备，抬高英汉互译上限。",
    bookRange: "《华研专八》后段 + MTI 高频手册 Unit 3",
    intake: "新词 80-100，文化补充",
    roots: ["bio", "graph", "chron", "figur"],
    tasks: [
      "整理 biography / essay / fiction / figurative language。",
      "区分文学文体与学术说明表达。",
      "写 1 段中译英，主题为文化传播。",
      "完成 7 天节点回收。"
    ],
    outputs: [
      "Figurative language often enriches the texture of literary expression.",
      "The essay offers a chronological account of cultural change."
    ]
  },
  {
    day: 11,
    title: "Day 11 · ecology / geography / biotechnology",
    focus: "把生态文明、区域发展、科技农业装进一个输出框架。",
    bookRange: "science 相关词 + 现有学习单",
    intake: "新词 80-100，科技生态场景",
    roots: ["bio", "geo", "photo", "tech"],
    tasks: [
      "把 biodiversity / biotechnology / geographical 做成输出句。",
      "练 3 句汉译英：生态治理、现代农业、区域发展。",
      "区分 science 文本和政策文本的语气。",
      "完成 15 天前旧词的抽查。"
    ],
    outputs: [
      "Protecting biodiversity is essential to ecological governance.",
      "Geographical conditions shape the pattern of regional development."
    ]
  },
  {
    day: 12,
    title: "Day 12 · governance / law / institution",
    focus: "强化机构运行、法律规则和治理能力表达。",
    bookRange: "institutional vocabulary",
    intake: "新词 90 左右，制度类表达",
    roots: ["jur", "leg", "ministr", "ordin"],
    tasks: [
      "做机构、法规、执行、授权四个小盒子。",
      "把抽象名词转回动词表达。",
      "练制度性约束、依法治理、行政效率三类句子。",
      "做 20 词反向调用。"
    ],
    outputs: [
      "Effective governance requires institutional coordination.",
      "Administrative efficiency must be balanced with legal accountability."
    ]
  },
  {
    day: 13,
    title: "Day 13 · commerce / market / negotiation",
    focus: "把商贸、谈判、市场机制说顺。",
    bookRange: "trade and market vocabulary",
    intake: "新词 90-100，商贸输出",
    roots: ["merc", "port", "cess", "valu"],
    tasks: [
      "做 export / import / portfolio / value 市场词网。",
      "英汉互译各 4 句，主题为外贸与市场准入。",
      "改写 2 句，把普通表达升级成正式书面语。",
      "晚上优先做复习，不够时间可暂缓新词。"
    ],
    outputs: [
      "Broader market access could stimulate export competitiveness.",
      "The two sides resumed negotiations on tariff adjustment."
    ]
  },
  {
    day: 14,
    title: "Day 14 · review sprint",
    focus: "进入 GRE 式滚动回收，不再单线摄入。",
    bookRange: "回看 Day 8-13",
    intake: "新词少量，复习为主",
    roots: ["cred", "gress", "port", "leg"],
    tasks: [
      "只抓错词和低熟词。",
      "把最常忘的 20 词拆成 5 个小族。",
      "限时完成 1 段汉译英。",
      "检查哪些词你能认但不会写。"
    ],
    outputs: [
      "Reform momentum depends on credible policy signals.",
      "Institutional reform should proceed in a prudent and coordinated manner."
    ]
  },
  {
    day: 15,
    title: "Day 15 · simulation day",
    focus: "直接把记词导向笔头表达，模拟考场调词。",
    bookRange: "全书混合抽词",
    intake: "新词 60-80，输出强度最高",
    roots: ["mixed sets"],
    tasks: [
      "做 15 词中译英默写。",
      "做 1 段政经类汉译英。",
      "做 1 段英译汉，标出你从词根猜出的词。",
      "把 5 个普通词替换成更正式词。"
    ],
    outputs: [
      "The initiative has generated broad-based support across sectors.",
      "The proposal aims to enhance regulatory coherence."
    ]
  },
  {
    day: 16,
    title: "Day 16 · final consolidation",
    focus: "把最值钱的词根家族压成可调用语料。",
    bookRange: "全书重点回收",
    intake: "新词 50-60，整理压缩",
    roots: ["cred", "fer", "gress", "tract", "leg"],
    tasks: [
      "做 5 张词族总卡片。",
      "每张卡片包含核心义、前后缀、代表词、场景搭配、输出句。",
      "整理自己的错词地图。",
      "做 30 分钟闭卷反推。"
    ],
    outputs: [
      "Sustained progress requires coordinated institutional support.",
      "The policy was designed to facilitate cross-border cooperation."
    ]
  },
  {
    day: 17,
    title: "Day 17 · 贸大冲刺总复盘",
    focus: "最后一天不是冲新词，而是把词根能力转成考场动作。",
    bookRange: "17 天总回顾",
    intake: "新词最低，输出最高",
    roots: ["all core roots"],
    tasks: [
      "看到中文概念，先想到词根家族，再想到具体词。",
      "完成 10 句汉译英和 10 句英译汉。",
      "按政经、治理、商贸、文化四类输出高频词。",
      "列出下一轮 30 天滚动复习名单。"
    ],
    outputs: [
      "Vocabulary mastery becomes useful only when it can be retrieved under pressure.",
      "Root-based learning should ultimately serve translation output."
    ]
  }
];

const rootFamilies = [
  {
    root: "cred",
    meaning: "相信，信任",
    why: "公信力、信誉、认证、抹黑都靠这组。",
    words: ["credit", "credible", "credibility", "accredit", "discredit", "creed"],
    scenario: "政策公信力、国际认证、舆论攻击",
    example: "Policy credibility matters more than short-term rhetoric."
  },
  {
    root: "gress",
    meaning: "走，前进",
    why: "适合写进展、推进、倒退、协商进程。",
    words: ["progress", "regress", "congress", "progressive", "aggression"],
    scenario: "谈判进展、改革推进、社会进步",
    example: "The negotiations made steady progress after several rounds of consultation."
  },
  {
    root: "fer",
    meaning: "带来，转移",
    why: "商贸、技术转移、资本流动都常用。",
    words: ["transfer", "confer", "defer", "infer", "refer"],
    scenario: "技术转移、授予资格、延期处理",
    example: "Technology transfer can enhance industrial upgrading."
  },
  {
    root: "manifest",
    meaning: "显现，表明",
    why: "把普通句写正式时非常好用。",
    words: ["manifest", "manifestation", "demonstrate", "evoke"],
    scenario: "政策成效、社会反应、趋势显现",
    example: "The data clearly manifest a shift in consumer behavior."
  },
  {
    root: "mob / mot",
    meaning: "移动，推动",
    why: "动员、流动、行动能力都能覆盖。",
    words: ["mobile", "mobilize", "demobilize", "motion", "promote"],
    scenario: "资源动员、劳动力流动、政策推动",
    example: "The state mobilized resources to support the recovery."
  },
  {
    root: "leg / legis",
    meaning: "法律，规则",
    why: "治理、法治、法规文本的核心支撑。",
    words: ["legal", "legitimate", "legislation", "legislative"],
    scenario: "依法治理、立法程序、合法性",
    example: "Institutional legitimacy depends on transparent legislation."
  }
];

const uibeFocus = [
  {
    title: "政经政策",
    detail: "重点储备 policy, governance, regulation, fiscal, deficit, coordination 这类正式抽象词。",
    action: "每天至少写 2 句政策类汉译英。"
  },
  {
    title: "国际商贸",
    detail: "围绕 trade, market access, competitiveness, export, import, negotiation 建立主题词网。",
    action: "把词根族转成商贸段落表达，而不只是认单词。"
  },
  {
    title: "机构治理",
    detail: "贸大答案很看重机构、法律、执行、授权这类冷静正式语体。",
    action: "遇到 administration, authority, decree, delegate 一类词要会写会替换。"
  },
  {
    title: "媒体外交",
    detail: "新闻翻译和公共表达要求你会说表态、谴责、回应、重申、呼吁。",
    action: "按声明类动词单独建卡。"
  },
  {
    title: "百科文化",
    detail: "文学文化、宗教人文词不能全丢，它们能抬高英汉互译上限。",
    action: "每周给文史文化留出 1 天补充。"
  },
  {
    title: "MTI 高频速背手册的用法",
    detail: "这本手册适合补充高频主题词，不适合完全替代词根主线。",
    action: "每天从对应 Unit 补 20-30 词，用来做主题输出，而不是脱离场景单背。"
  }
];

const cycleRules = [
  { name: "第 1 轮", time: "5 分钟", task: "背完 1 组 10 词立刻回想，遮住中文先想意思。", priority: "最高" },
  { name: "第 2 轮", time: "30 分钟", task: "背完 6 组约 60 词，从头整体回想一遍。", priority: "最高" },
  { name: "第 3 轮", time: "12 小时", task: "当天晚上复习当天新词，顺序打乱，克服前摄后摄。", priority: "最高" },
  { name: "第 4 轮", time: "1 天", task: "第二天优先复习昨天的新词。", priority: "高" },
  { name: "第 5 轮", time: "2 天", task: "隔两天回收一遍，重点抓已模糊词。", priority: "高" },
  { name: "第 6 轮", time: "4 天", task: "隔四天做一次较完整复盘。", priority: "中高" },
  { name: "第 7 轮", time: "7 天", task: "每周回收，顺带转入中译英输出。", priority: "中高" },
  { name: "第 8 轮", time: "15 天", task: "半个月后再查，确认是否真正进入长期记忆。", priority: "中" }
];

const fastRules = [
  "铁律 1：复习优先于背新词。时间不够时，宁可少背，也要完成当天复习。",
  "铁律 2：复习必须先回忆，不能只是重读。必须遮住中文，先想再看。",
  "第一遍只抓三样：词形外观、中文义、记忆法。拼写和英文释义不放在第一轮硬啃。",
  "晚上复习要打乱顺序，不要按白天原顺序机械重放。",
  "MTI 版本要比 GRE 原版多一步：每晚至少做 2 句汉译英，把词从认识拉到输出。"
];

const mtiUnits = [
  {
    title: "MTI 高频手册怎么配",
    detail: "从你提供的手册抽样看，按 Unit 密集排词，适合做主题补词和快速回忆。",
    action: "白天主线仍然按词根走，晚上从手册补 20-30 个相关高频词做打靶式强化。"
  },
  {
    title: "最适合补的场景",
    detail: "政经、法律、文化、抽象评价词最值得从手册里补。",
    action: "一旦当天主题是治理、商贸、文化，就去对应 Unit 补词，而不是随机翻。"
  },
  {
    title: "和华研专八的分工",
    detail: "华研专八负责大词量底盘，MTI 手册负责高频主题压缩。",
    action: "前者供词，后者提纯，最终都回到你的输出句和翻译小段。"
  }
];

const tem8Banks = [
  {
    title: "专八首批 · 品格与治理",
    source: "《华研专八》前段抽样",
    use: "适合 Day 1-3，用来建立词根拆词感和正式语体。",
    words: [
      "appropriate", "misappropriate", "honor", "dishonor", "respectable", "ethic",
      "ethical", "virtue", "behave", "conduct", "principle", "orthodox",
      "decent", "decency", "gracious", "doom", "fate", "fatal"
    ]
  },
  {
    title: "专八首批 · 学术与抽象表达",
    source: "《华研专八》前段抽样",
    use: "适合 Day 2-3，配 define / therapy / manifest 一线推进。",
    words: [
      "acute", "severe", "solemn", "rigorous", "assure", "reassure",
      "definition", "definitive", "dispense", "dose", "dosage",
      "remedy", "therapy", "aroma", "physiotherapy", "psychotherapy",
      "insane", "spiritual", "dentist"
    ]
  },
  {
    title: "专八首批 · 动员、显现、组织",
    source: "《华研专八》前段抽样",
    use: "适合 Day 3-4，特别适合政经和组织行为场景。",
    words: [
      "authority", "administration", "maladministration", "municipal",
      "function", "malfunction", "mobile", "mobilize", "demobilize",
      "motion", "evoke", "demonstrate", "manifest", "manifestation",
      "claim", "warrant", "warranty"
    ]
  },
  {
    title: "专八进阶 · 统计、联合、概念辨析",
    source: "《华研专八》约 981-1000 词抽样",
    use: "适合 Day 4 和周复盘，做大词量辨析升级。",
    words: [
      "defunct", "dilapidated", "threadbare", "frivolous", "flippant",
      "flaunt", "sparingly", "dissociate", "disunite", "bisect",
      "dole", "muster", "syndicate", "aggregate", "conflate",
      "amalgamate", "ensemble", "ostentatious", "pedantic"
    ]
  },
  {
    title: "专八高值 · 公信力与逆差",
    source: "《华研专八》约 1981-2000 / 3981-4000 抽样",
    use: "适合 Day 5-6，直接贴近贸大翻译场景。",
    words: [
      "impeccable", "immaculate", "matrix", "emanate", "accredit", "discredit",
      "crime", "crucial", "cultivate", "curiosity", "curriculum", "decrease",
      "decree", "defect", "defendant", "defiance", "defiant", "deficit",
      "defy", "delegate", "deliberate", "delicate", "democracy"
    ]
  },
  {
    title: "专八补高 · 文化与百科",
    source: "《华研专八》约 4981-5000 抽样",
    use: "适合 Day 10 以及英汉互译补底。",
    words: [
      "bloc", "resurgence", "existentialist", "sculpture", "cohabitation",
      "premier", "poetry", "novel", "biography", "essay", "fiction",
      "intrigue", "appreciation", "pervasive", "blockbuster",
      "figurative language", "device", "simile", "personification",
      "chronological sequence"
    ]
  }
];

const handbookBanks = [
  {
    title: "MTI 手册 Unit 1 抽样",
    source: "手册第 1 单元抽样",
    use: "适合做高频补词和快速回忆卡。",
    words: [
      "requisite", "initiative", "inherent", "vegetate", "enact",
      "insularity", "laud", "hilarity", "nomination", "imbecile",
      "feint", "exemption", "hummock", "incommunicative", "numerology",
      "interlace", "entreaty", "libation", "juxtaposition", "juxtapose",
      "tenable", "outrage", "heckler", "flawless", "paltry", "jerk",
      "inexplicable", "sagacious"
    ]
  },
  {
    title: "MTI 手册 Unit 2 抽样",
    source: "手册第 2 单元抽样",
    use: "适合抽象评价词、法律词、叙述词补充。",
    words: [
      "reagent", "lampooner", "funk", "gory", "lacklustre", "indict",
      "gobble", "quiescent", "matador", "immensity", "quintessence",
      "inquietude", "utilize", "innuendo", "jade", "lair", "wavy",
      "censure", "yokel", "injunction", "ramification", "nonskid",
      "abode", "inconstant", "inclined", "fringe", "pantheon", "immolate"
    ]
  },
  {
    title: "MTI 手册 Unit 3 抽样",
    source: "手册第 3 单元抽样",
    use: "适合文化、法律、抽象评价和风格词补底。",
    words: [
      "grille", "glide", "mediocrity", "palette", "farrow", "defendant",
      "acclamation", "abject", "iniquity", "fig", "ethos", "fop",
      "emendation", "hostage", "matrix", "indiscreet", "whimper",
      "redolent", "catalysis", "jilt", "flux", "canyon", "forestall",
      "impregnable", "mien", "gaucherie"
    ]
  }
];

const greBridgeSets = [
  {
    title: "GRE 式大词量推进包",
    idea: "这些词适合按 10 词一组推进，先抓词形和中文义，再走 8 个周期。",
    words: [
      "rigorous", "solemn", "aggregate", "conflate", "accredit",
      "discredit", "deficit", "delegate", "deliberate", "democracy"
    ]
  },
  {
    title: "GRE 式抽象学术包",
    idea: "这些词既能扩词量，又能抬高正式语体。",
    words: [
      "definitive", "manifestation", "quintessence", "ramification", "inherent",
      "initiative", "inexplicable", "sagacious", "ostentatious", "pedantic"
    ]
  },
  {
    title: "GRE 式文化百科包",
    idea: "这组更适合 B 类和 C 类词，先混脸熟，再滚动升级。",
    words: [
      "existentialist", "figurative", "personification", "chronological",
      "pantheon", "redolent", "mediocrity", "gaucherie", "ethos", "palette"
    ]
  }
];

const libraryGroups = [
  {
    title: "核心入口",
    detail: "先看这组，足够支撑日常学习和执行。",
    files: [
      { label: "最终使用说明-今天就能开始", href: "../../outputs/最终使用说明-今天就能开始.md" },
      { label: "GRE17天八周期-MTI融合执行法", href: "../../outputs/GRE17天八周期-MTI融合执行法.md" },
      { label: "对外经贸大学-GRE17天词根词缀方案", href: "../../outputs/对外经贸大学-GRE17天词根词缀方案.md" },
      { label: "超大词汇量升级路线图", href: "../../outputs/超大词汇量升级路线图.md" },
      { label: "手册+专八+GRE融合词库首批补充版", href: "../../outputs/手册+专八+GRE融合词库首批补充版.md" }
    ]
  },
  {
    title: "计划与导航",
    detail: "用来确定学习顺序、阶段安排和路线图。",
    files: [
      { label: "词根词缀学习总导航", href: "../../outputs/词根词缀学习总导航.md" },
      { label: "词根词缀学习总控台", href: "../../outputs/词根词缀学习总控台.md" },
      { label: "翻译硕士词根词缀30天打卡计划", href: "../../outputs/翻译硕士词根词缀30天打卡计划.md" },
      { label: "30天总复盘与二轮扩展路线图", href: "../../outputs/30天总复盘与二轮扩展路线图.md" },
      { label: "二轮扩展每周执行模板", href: "../../outputs/二轮扩展每周执行模板.md" },
      { label: "词根词缀1000词扩展路线图", href: "../../outputs/词根词缀1000词扩展路线图.md" },
      { label: "词根词缀首周启动执行包", href: "../../outputs/词根词缀首周启动执行包.md" },
      { label: "词根词缀7天训练营", href: "../../outputs/词根词缀7天训练营.md" }
    ]
  },
  {
    title: "方法与输出",
    detail: "用来理解怎么从背词走向翻译输出。",
    files: [
      { label: "翻译硕士词根词缀质变输出方法论", href: "../../outputs/翻译硕士词根词缀质变输出方法论.md" },
      { label: "翻译硕士词根词缀高阶方法论", href: "../../outputs/翻译硕士词根词缀高阶方法论.md" },
      { label: "翻译硕士词根词缀输出训练模板", href: "../../outputs/翻译硕士词根词缀输出训练模板.md" },
      { label: "翻译硕士词根词缀中英互译练习册", href: "../../outputs/翻译硕士词根词缀中英互译练习册.md" },
      { label: "中文概念反向调用词族表", href: "../../outputs/中文概念反向调用词族表.md" },
      { label: "中文概念汉译英反向自测卷", href: "../../outputs/中文概念汉译英反向自测卷.md" },
      { label: "词根词缀高频输出句库100句", href: "../../outputs/词根词缀高频输出句库100句.md" },
      { label: "翻译硕士高频政经词族表", href: "../../outputs/翻译硕士高频政经词族表.md" },
      { label: "翻译硕士高频长难词拆解清单", href: "../../outputs/翻译硕士高频长难词拆解清单.md" }
    ]
  },
  {
    title: "词表与速查",
    detail: "用来扩词、冲刺、辨析和日常查阅。",
    files: [
      { label: "高频词根词缀扩词总表", href: "../../outputs/高频词根词缀扩词总表.md" },
      { label: "高频同根词簇速记表", href: "../../outputs/高频同根词簇速记表.md" },
      { label: "高频后缀派生词速记清单", href: "../../outputs/高频后缀派生词速记清单.md" },
      { label: "词根词缀核心扩词120词表", href: "../../outputs/词根词缀核心扩词120词表.md" },
      { label: "词根词缀第二轮扩词150词表", href: "../../outputs/词根词缀第二轮扩词150词表.md" },
      { label: "词根词缀第三轮扩词180词表", href: "../../outputs/词根词缀第三轮扩词180词表.md" },
      { label: "词根词缀高频记忆卡片", href: "../../outputs/词根词缀高频记忆卡片.md" },
      { label: "词根词缀高频搭配速记表", href: "../../outputs/词根词缀高频搭配速记表.md" },
      { label: "词根词缀高频易混词辨析表", href: "../../outputs/词根词缀高频易混词辨析表.md" },
      { label: "词根词缀冲刺速查清单", href: "../../outputs/词根词缀冲刺速查清单.md" }
    ]
  },
  {
    title: "执行表与复盘",
    detail: "用来每天打卡、每周复盘、追踪掌握度。",
    files: [
      { label: "词根词缀每日执行清单模板", href: "../../outputs/词根词缀每日执行清单模板.md" },
      { label: "词根词缀每日输出任务速用卡", href: "../../outputs/词根词缀每日输出任务速用卡.md" },
      { label: "词根词缀每日打卡清单-极简打印版", href: "../../outputs/词根词缀每日打卡清单-极简打印版.md" },
      { label: "词根词缀每周复盘记录表", href: "../../outputs/词根词缀每周复盘记录表.md" },
      { label: "词根词缀错词复盘模板", href: "../../outputs/词根词缀错词复盘模板.md" },
      { label: "词根词缀阶段自测清单", href: "../../outputs/词根词缀阶段自测清单.md" },
      { label: "词根词缀长难词专项测试", href: "../../outputs/词根词缀长难词专项测试.md" },
      { label: "词根词缀450词30天任务单", href: "../../outputs/词根词缀450词30天任务单.md" },
      { label: "词根词缀450词四周周测卷", href: "../../outputs/词根词缀450词四周周测卷.md" }
    ]
  },
  {
    title: "CSV 与 Anki",
    detail: "用来导入、打印、追踪和批量复习。",
    files: [
      { label: "Anki导入说明", href: "../../outputs/Anki导入说明.md" },
      { label: "词根词缀Anki导入版", href: "../../outputs/词根词缀Anki导入版.tsv" },
      { label: "词根词缀高频扩词词库", href: "../../outputs/词根词缀高频扩词词库.csv" },
      { label: "词根词缀30天打卡记录表", href: "../../outputs/词根词缀30天打卡记录表.csv" },
      { label: "词根词缀30天日历式安排表", href: "../../outputs/词根词缀30天日历式安排表.csv" },
      { label: "词根词缀掌握进度追踪表", href: "../../outputs/词根词缀掌握进度追踪表.csv" },
      { label: "阅读取词记录表", href: "../../outputs/阅读取词记录表.csv" },
      { label: "450词中译英默写表", href: "../../outputs/450词中译英默写表.csv" }
    ]
  },
  {
    title: "学习单与示范版",
    detail: "用来按日执行和参考填写方式。",
    files: [
      { label: "2026-08-05词根词缀学习单", href: "../../outputs/2026-08-05词根词缀学习单.md" },
      { label: "2026-08-06词根词缀学习单", href: "../../outputs/2026-08-06词根词缀学习单.md" },
      { label: "2026-08-07词根词缀学习单", href: "../../outputs/2026-08-07词根词缀学习单.md" },
      { label: "2026-08-08词根词缀学习单", href: "../../outputs/2026-08-08词根词缀学习单.md" },
      { label: "2026-08-09词根词缀学习单", href: "../../outputs/2026-08-09词根词缀学习单.md" },
      { label: "2026-08-10词根词缀学习单", href: "../../outputs/2026-08-10词根词缀学习单.md" },
      { label: "2026-08-11词根词缀学习单", href: "../../outputs/2026-08-11词根词缀学习单.md" },
      { label: "2026-08-12词根词缀学习单", href: "../../outputs/2026-08-12词根词缀学习单.md" },
      { label: "2026-08-13词根词缀学习单", href: "../../outputs/2026-08-13词根词缀学习单.md" },
      { label: "2026-08-14词根词缀学习单", href: "../../outputs/2026-08-14词根词缀学习单.md" },
      { label: "2026-08-15词根词缀学习单", href: "../../outputs/2026-08-15词根词缀学习单.md" },
      { label: "2026-08-16词根词缀学习单", href: "../../outputs/2026-08-16词根词缀学习单.md" },
      { label: "首周每日打卡填写示范版", href: "../../outputs/首周每日打卡填写示范版.md" },
      { label: "首周周测填写示范版", href: "../../outputs/首周周测填写示范版.md" },
      { label: "第二周每日打卡填写示范版", href: "../../outputs/第二周每日打卡填写示范版.md" },
      { label: "第二周周测填写示范版", href: "../../outputs/第二周周测填写示范版.md" },
      { label: "第三周每日打卡填写示范版", href: "../../outputs/第三周每日打卡填写示范版.md" },
      { label: "第三周周测填写示范版", href: "../../outputs/第三周周测填写示范版.md" },
      { label: "第四周每日打卡填写示范版", href: "../../outputs/第四周每日打卡填写示范版.md" },
      { label: "第四周周测填写示范版", href: "../../outputs/第四周周测填写示范版.md" }
    ]
  },
  {
    title: "源资料 PDF",
    detail: "原始词书和参考资料入口。",
    files: [
      { label: "华研专八(1).pdf", href: "file:///D:/xwechat_files/wxid_3lqqgtjqkygs22_4000/msg/file/2026-08/%E5%8D%8E%E7%A0%94%E4%B8%93%E5%85%AB(1).pdf" },
      { label: "翻译硕士MTI高频词汇速背手册精缩版（赠） 1.pdf", href: "file:///D:/xwechat_files/wxid_3lqqgtjqkygs22_4000/msg/file/2026-08/%E7%BF%BB%E8%AF%91%E7%A1%95%E5%A3%ABMTI%E9%AB%98%E9%A2%91%E8%AF%8D%E6%B1%87%E9%80%9F%E8%83%8C%E6%89%8B%E5%86%8C%E7%B2%BE%E7%BC%A9%E7%89%88%EF%BC%88%E8%B5%A0%EF%BC%89%201.pdf" },
      { label: "《17天搞定GRE单词》", href: "file:///C:/Users/HP/Downloads/%E3%80%8A17%E5%A4%A9%E6%90%9E%E5%AE%9AGRE%E5%8D%95%E8%AF%8D%E3%80%8B%E5%85%B3%E6%B3%A8%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E3%80%90%E8%9C%9C%E9%A2%98%E7%BF%BB%E7%A1%95MTI%E3%80%91%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99%20(1).pdf" }
    ]
  }
];

function createDayOptions() {
  const select = document.querySelector("#day-select");
  planDays.forEach((item) => {
    const option = document.createElement("option");
    option.value = String(item.day);
    option.textContent = `${item.day}. ${item.title}`;
    select.appendChild(option);
  });
  select.value = String(appState.currentDay);
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(appState.storageKey) || "{}");
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(appState.storageKey, JSON.stringify(progress));
}

function renderToday() {
  const dayData = planDays.find((item) => item.day === appState.currentDay);
  const progress = loadProgress();
  const key = `day-${appState.currentDay}`;
  const checkedItems = progress[key] || [];
  const completed = checkedItems.length;
  const total = dayData.tasks.length;
  const percent = Math.round((completed / total) * 100) || 0;

  document.querySelector("#today-title").textContent = dayData.title;
  document.querySelector("#today-card").innerHTML = `
    <div class="score-banner">
      <strong>今日完成度 ${percent}%</strong>
      <div class="panel-copy">${dayData.bookRange} · ${dayData.intake}</div>
    </div>
    <div class="stat-box">
      <div class="metric-card">
        <strong>${dayData.roots.length}</strong>
        <span class="metric">核心词根组</span>
      </div>
      <div class="metric-card">
        <strong>8</strong>
        <span class="metric">记忆周期</span>
      </div>
    </div>
  `;

  document.querySelector("#tab-mission").innerHTML = `
    <div class="mini-card">
      <p class="micro-title">今天为什么这样学</p>
      <h3 class="section-title">${dayData.focus}</h3>
      <p class="panel-copy">今日核心词根：${dayData.roots.join(" / ")}</p>
    </div>
    <div class="mini-card">
      <p class="micro-title">立即开始</p>
      <div class="quick-grid">
        <div class="quick-step">
          <strong>第 1 步 · 先学新词</strong>
          先用 10-15 分钟看今天的词根组，只抓词形、中文义和记忆法，不在第一遍死抠全部细节。
        </div>
        <div class="quick-step">
          <strong>第 2 步 · 立刻回想</strong>
          学完一小组后遮住中文，马上回想，先想再看，不要只顺着页面重读。
        </div>
        <div class="quick-step">
          <strong>第 3 步 · 晚上输出</strong>
          晚上一定做 2 句汉译英，把今天的词从“认识”推到“能用”。
        </div>
      </div>
    </div>
    <div class="mini-card">
      <p class="micro-title">今日执行清单</p>
      ${dayData.tasks.map((task, index) => `
        <div class="task-row">
          <label class="task-check">
            <input type="checkbox" data-task-index="${index}" ${checkedItems.includes(index) ? "checked" : ""}>
            <span>${task}</span>
          </label>
        </div>
      `).join("")}
    </div>
    <div class="mini-card">
      <p class="micro-title">今日时间切片</p>
      <div class="review-row"><strong>早上 15-25 分钟：</strong>新学 1 组词根词族，完成 5 分钟回想。</div>
      <div class="review-row"><strong>中午 10-15 分钟：</strong>补华研专八或 MTI 手册相关词，完成 30 分钟回想。</div>
      <div class="review-row"><strong>晚上 20-30 分钟：</strong>打乱顺序复习，做 2 句汉译英或 1 段短输出。</div>
    </div>
    <div class="mini-card">
      <p class="micro-title">今日输出句</p>
      ${dayData.outputs.map((item) => `<div class="output-row">${item}</div>`).join("")}
    </div>
  `;

  bindCheckboxes();
}

function bindCheckboxes() {
  const progress = loadProgress();
  const key = `day-${appState.currentDay}`;
  document.querySelectorAll("[data-task-index]").forEach((box) => {
    box.addEventListener("change", (event) => {
      const current = new Set(progress[key] || []);
      const index = Number(event.target.dataset.taskIndex);
      if (event.target.checked) {
        current.add(index);
      } else {
        current.delete(index);
      }
      progress[key] = Array.from(current).sort((a, b) => a - b);
      saveProgress(progress);
      renderToday();
    });
  });
}

function renderRoots() {
  document.querySelector("#tab-roots").innerHTML = `
    <div class="root-grid">
      ${rootFamilies.map((item) => `
        <article class="mini-card">
          <div class="family-title">
            <strong>${item.root}</strong>
            <span>${item.meaning}</span>
          </div>
          <p class="panel-copy">${item.why}</p>
          <div class="word-row"><strong>代表词：</strong>${item.words.join(" / ")}</div>
          <div class="word-row"><strong>贸大场景：</strong>${item.scenario}</div>
          <div class="example">${item.example}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderUIBE() {
  document.querySelector("#tab-uibe").innerHTML = `
    <div class="uibe-grid">
      ${uibeFocus.map((item) => `
        <article class="mini-card">
          <p class="micro-title">贸大考向</p>
          <h3 class="section-title">${item.title}</h3>
          <p class="panel-copy">${item.detail}</p>
          <div class="example">${item.action}</div>
        </article>
      `).join("")}
      ${mtiUnits.map((item) => `
        <article class="mini-card">
          <p class="micro-title">MTI 手册接法</p>
          <h3 class="section-title">${item.title}</h3>
          <p class="panel-copy">${item.detail}</p>
          <div class="example">${item.action}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderReview() {
  document.querySelector("#tab-review").innerHTML = `
    <div class="mini-card">
      <p class="micro-title">8 个记忆周期</p>
      ${cycleRules.map((item) => `
        <div class="review-row"><strong>${item.name} · ${item.time}</strong>：${item.task} <span class="chip">${item.priority}</span></div>
      `).join("")}
    </div>
    <div class="mini-card">
      <p class="micro-title">两条铁律</p>
      ${fastRules.map((item) => `<div class="review-row">${item}</div>`).join("")}
    </div>
    <div class="mini-card">
      <p class="micro-title">怎么判断今天合格</p>
      <div class="review-row">完成 5 分钟回想、30 分钟回想和晚上 12 小时回想。</div>
      <div class="review-row">至少复习 2 组旧词族，而不是只背新词。</div>
      <div class="review-row">至少完成 2 句汉译英，确保词汇能输出。</div>
      <div class="review-row">如果时间不够，优先复习，不强行加新词。</div>
    </div>
    <div class="mini-card">
      <p class="micro-title">A / B / C 三层掌握</p>
      <div class="review-row"><strong>A 类：</strong>政经、治理、商贸、媒体外交词。要求会写、会用、会汉译英。</div>
      <div class="review-row"><strong>B 类：</strong>抽象学术词、专八高阶词、文化百科词。要求能认、能猜、能逐步转入输出。</div>
      <div class="review-row"><strong>C 类：</strong>低频冷词和暂时不常用词。先混脸熟，先滚动见面，不急着一次吃透。</div>
      <div class="review-row"><strong>大词量标准：</strong>不是所有词都同一深度，而是核心词能打仗，大量高阶词有识别力。</div>
    </div>
    <div class="mini-card">
      <p class="micro-title">17 天之后怎么继续</p>
      <div class="review-row"><strong>2026 年 8 月 15 日之后的主线理解：</strong>前 17 天是主摄入期，不是总结束日。</div>
      <div class="review-row"><strong>第 18-47 天：</strong>继续二轮扩词，把华研专八往后推，把 A 类词做深，把 B 类词做广。</div>
      <div class="review-row"><strong>第 48 天以后：</strong>阅读取词、错词回收、翻译反向调词，保持词汇网继续膨胀。</div>
    </div>
  `;
}

function renderBank() {
  document.querySelector("#tab-bank").innerHTML = `
    <div class="mini-card">
      <p class="micro-title">说明</p>
      <h3 class="section-title">首批真实补词已经并进来了</h3>
      <p class="panel-copy">这里先放我已经从《华研专八》和 MTI 手册里抽出来的高价值词。它不是“全书全部录入”，但已经足够让你按 GRE 式周期开始滚动扩词。</p>
    </div>
    <div class="mini-card">
      <p class="micro-title">怎么用这栏</p>
      <div class="review-row">先学“今日任务”里的主线，不要一上来全看完。</div>
      <div class="review-row">当天学完后，再来这栏补 10-30 个同主题词。</div>
      <div class="review-row">A 类词优先会写会用，B 类词先认得，C 类词先混脸熟。</div>
      <div class="review-row">补词后照样走 5 分钟、30 分钟、晚上 12 小时回想。</div>
    </div>
    <div class="bank-grid">
      ${tem8Banks.map((item) => `
        <article class="mini-card">
          <p class="micro-title">${item.source}</p>
          <h3 class="section-title">${item.title}</h3>
          <p class="panel-copy">${item.use}</p>
          <div class="word-row">${item.words.join(" / ")}</div>
        </article>
      `).join("")}
      ${handbookBanks.map((item) => `
        <article class="mini-card">
          <p class="micro-title">${item.source}</p>
          <h3 class="section-title">${item.title}</h3>
          <p class="panel-copy">${item.use}</p>
          <div class="word-row">${item.words.join(" / ")}</div>
        </article>
      `).join("")}
      ${greBridgeSets.map((item) => `
        <article class="mini-card">
          <p class="micro-title">GRE 桥接包</p>
          <h3 class="section-title">${item.title}</h3>
          <p class="panel-copy">${item.idea}</p>
          <div class="word-row">${item.words.join(" / ")}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderLibrary() {
  document.querySelector("#tab-library").innerHTML = `
    <div class="mini-card">
      <p class="micro-title">资料总库</p>
      <h3 class="section-title">尽量都塞进一个入口了</h3>
      <p class="panel-copy">这里把你现有的核心资料、执行表、词库、训练册、每日学习单和源 PDF 收到一起。日常直接用“今日任务”，需要展开时来这里找对应材料。</p>
    </div>
    <div class="library-grid">
      ${libraryGroups.map((group) => `
        <article class="mini-card">
          <p class="micro-title">资料分组</p>
          <h3 class="section-title">${group.title}</h3>
          <p class="panel-copy">${group.detail}</p>
          <div class="resource-list">
            ${group.files.map((file) => `
              <a class="resource-link" href="${file.href}" target="_blank" rel="noopener noreferrer">${file.label}</a>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function bindTabs() {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`#tab-${button.dataset.tab}`).classList.add("active");
    });
  });
}

function bindActions() {
  document.querySelector("#day-select").addEventListener("change", (event) => {
    appState.currentDay = Number(event.target.value);
    renderToday();
  });

  document.querySelector("#reset-progress").addEventListener("click", () => {
    const progress = loadProgress();
    delete progress[`day-${appState.currentDay}`];
    saveProgress(progress);
    renderToday();
  });
}

function init() {
  createDayOptions();
  renderToday();
  renderRoots();
  renderUIBE();
  renderReview();
  renderBank();
  renderLibrary();
  bindTabs();
  bindActions();

  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

init();
