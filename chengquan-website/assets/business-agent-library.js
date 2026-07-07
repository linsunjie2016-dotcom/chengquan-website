window.BUSINESS_AGENT_LIBRARY = {
  "generatedAt": "2026-07-07T11:26:18.963Z",
  "source": "橙荃 AI 业务进阶智能体入口",
  "categories": [
    "全部",
    "经营复盘",
    "流量与Listing",
    "商机转化",
    "客户运营",
    "组织管理",
    "产品与供应链",
    "贸易公司",
    "模板案例"
  ],
  "routes": [
    {
      "title": "国际站运营体检",
      "desc": "适合想先看清店铺问题，再排优化优先级。",
      "steps": [
        "导出店铺大盘数据",
        "导出关键词指数",
        "抓取TOP引流款",
        "全店Listing健康度扫描",
        "流量-转化断层分析"
      ]
    },
    {
      "title": "询盘转化提效",
      "desc": "适合业务员忙不过来、询盘质量参差不齐的团队。",
      "steps": [
        "监控询盘与商机",
        "客户深度画像报告",
        "国际站询盘AI自动回复",
        "RFQ精准匹配与优先级排序"
      ]
    },
    {
      "title": "老客盘活与复购",
      "desc": "适合客户通里有存量客户，但跟进节奏不稳的团队。",
      "steps": [
        "拉取客户通分级",
        "ACW国际站业务指令合集",
        "客户深度画像报告",
        "订单关怀与推品"
      ]
    },
    {
      "title": "老板组织升级",
      "desc": "适合企业从老板亲自盯业务，走向团队化管理。",
      "steps": [
        "企业战略规划与定位",
        "组织架构规划与优化",
        "人才招聘文案与面试考察",
        "企业培训知识库与导师"
      ]
    },
    {
      "title": "工贸新品闭环",
      "desc": "适合工厂把客户反馈变成新品、卖点和生产任务。",
      "steps": [
        "外贸工厂市场机会分析",
        "客户需求转生产语言",
        "工贸一体企业新品开发闭环",
        "外贸工厂产品资料国际化"
      ]
    },
    {
      "title": "贸易公司报价闭环",
      "desc": "适合贸易公司快速拆客户需求、询供应商、整合报价。",
      "steps": [
        "贸易公司供应商筛选与RFQ自动化",
        "贸易公司多供应商报价整合",
        "客户报价邮件输出"
      ]
    }
  ],
  "packages": [
    {
      "title": "国际站询盘“监控-背调-拟稿”自动化引擎",
      "category": "商机转化",
      "type": "Markdown指令包",
      "schedule": "每20分钟",
      "scenario": "持续扫描国际站新询盘，过滤低价值消息，对高价值买家做站内外背调，并生成专业回复草稿。",
      "fit": "外贸业务团队、询盘转化岗、夜间无人值守场景",
      "inputs": "国际站登录授权、最近询盘/IM消息、公司与产品知识库、客户背调工具。",
      "output": "处理简报、买家背调摘要、回复草稿、去重记录。",
      "usage": "对AI说：请部署国际站询盘AI自动化引擎，并按每20分钟扫描、去重、背调、拟稿的流程执行。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/国际站询盘AI自动回复.md",
      "tags": [
        "询盘",
        "自动回复",
        "背调",
        "去重"
      ]
    },
    {
      "title": "RFQ 精准匹配与优先级排序",
      "category": "商机转化",
      "type": "Markdown指令包",
      "schedule": "每日08:30",
      "scenario": "抓取当日RFQ市场，先过滤不相关机会，再按商机价值和可承接概率排序，输出Top10优先报价清单。",
      "fit": "RFQ抢单官、询盘转化官、业务员",
      "inputs": "RFQ市场数据、店铺主营品类关键词、产品规格与认证能力。",
      "output": "Top10 RFQ报价清单、综合评分、可承接判断、英文报价首句。",
      "usage": "对AI说：调用国际站生意助手抓取今日RFQ，并按品类匹配、价值评分、可承接评分输出报价优先级。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/RFQ精准匹配与优先级排序.md",
      "tags": [
        "RFQ",
        "报价",
        "优先级",
        "抢单"
      ]
    },
    {
      "title": "查P4P广告数据",
      "category": "经营复盘",
      "type": "Markdown指令包",
      "schedule": "每周一10:00",
      "scenario": "抓取直通车和全站推广数据，分析预算利用率、商机成本、付费与自然流量效率。",
      "fit": "P4P推广官、运营负责人、经营复盘官",
      "inputs": "P4P/全站推广报表、广告计划、自然流量对比数据。",
      "output": "广告数据表、付费自然对比、命中式分析与预算动作建议。",
      "usage": "对AI说：请抓取近7天广告数据，只输出表格和命中分析，按商机成本与预算利用率给动作。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/查P4P广告数据.md",
      "tags": [
        "P4P",
        "广告",
        "ROI",
        "预算"
      ]
    },
    {
      "title": "抓取TOP引流款",
      "category": "流量与Listing",
      "type": "Markdown指令包",
      "schedule": "每月1日09:30",
      "scenario": "抓取近90天搜索曝光Top20商品，识别高曝光低点击、有流量无商机和可复制爆品要素。",
      "fit": "Listing优化官、主图设计官、选品洞察官",
      "inputs": "商品效果数据、搜索曝光、CTR、FOB价、30天商机数。",
      "output": "TOP20引流款表、优化优先级Top5、成功要素提炼。",
      "usage": "对AI说：请抓取近90天TOP20引流款，按曝光、CTR和商机数分层并给出优化优先级。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/抓取TOP引流款.md",
      "tags": [
        "TOP商品",
        "CTR",
        "主图",
        "爆品"
      ]
    },
    {
      "title": "导出店铺大盘数据",
      "category": "经营复盘",
      "type": "Markdown指令包",
      "schedule": "每周一08:00",
      "scenario": "导出店铺KPI、转化漏斗、询盘来源和同行对比，作为周复盘和后续分析的数据底座。",
      "fit": "老板、经营复盘官、运营负责人",
      "inputs": "数据参谋/数据纵横权限、店铺核心KPI、转化漏斗、来源分布。",
      "output": "周度大盘快照、KPI表、漏斗表、来源分布、行动项。",
      "usage": "对AI说：请导出上一自然周店铺大盘数据，按固定表格输出，不展开无效总结。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/导出店铺大盘数据.md",
      "tags": [
        "大盘",
        "KPI",
        "漏斗",
        "周报"
      ]
    },
    {
      "title": "监控询盘与商机",
      "category": "商机转化",
      "type": "Markdown指令包",
      "schedule": "高频监控",
      "scenario": "按紧急程度监控待回复询盘与商机，优先处理超时、高意向和高价值客户。",
      "fit": "业务员、询盘转化官、销售主管",
      "inputs": "询盘列表、未回复时长、客户行为轨迹、商机摘要。",
      "output": "红黄白分层清单、待回复优先级、红色条目首句话术。",
      "usage": "对AI说：请监控当前询盘与商机，按超时和价值分层，只给我最需要马上回复的清单。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/监控询盘与商机.md",
      "tags": [
        "询盘",
        "商机",
        "超时",
        "优先级"
      ]
    },
    {
      "title": "拉取客户通分级",
      "category": "客户运营",
      "type": "Markdown指令包",
      "schedule": "每月1日09:00",
      "scenario": "拉取客户通L0-L4+、公海与流失分布，筛出高星买家、可激活公海和流失预警对象。",
      "fit": "大客户开发官、客户背调官、销售主管",
      "inputs": "客户通权限、买家星级、最近活跃、状态、公海与流失数据。",
      "output": "分级总表、高星清单、公海激活清单、流失预警、本月行动Top5。",
      "usage": "对AI说：请拉取客户通买家分级数据，优先列L3/L4+和可激活公海客户。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/拉取客户通分级.md",
      "tags": [
        "客户通",
        "分级",
        "L4",
        "公海"
      ]
    },
    {
      "title": "流量-转化断层分析（沉默黑洞）",
      "category": "流量与Listing",
      "type": "Markdown指令包",
      "schedule": "每月15日09:00",
      "scenario": "跨商品流量和商机数据识别曝光黑洞、点击黑洞、转化黑洞，定位商品维度的漏斗断点。",
      "fit": "经营复盘官、Listing优化官、P4P推广官",
      "inputs": "近30天商品曝光、点击、CTR、商机数、询盘数、发布时间。",
      "output": "黑洞A/B/C清单、多重黑洞、修复行动路径。",
      "usage": "对AI说：请扫描近30天商品数据，识别曝光、点击、转化三类黑洞并给本月修复路径。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/流量转化断层分析.md",
      "tags": [
        "转化",
        "黑洞",
        "CTR",
        "漏斗"
      ]
    },
    {
      "title": "全店 Listing 健康度全量扫描",
      "category": "流量与Listing",
      "type": "Markdown指令包",
      "schedule": "每月1日10:00",
      "scenario": "批量扫描在售商品标题、属性、图片、视频、价格五大维度，找出最该先修的Listing。",
      "fit": "Listing优化官、主图详情设计官、运营主管",
      "inputs": "全部在售商品、标题属性、图片视频、价格与同类目参考。",
      "output": "健康度总览、紧急修复清单、待优化Top10、5条行动建议。",
      "usage": "对AI说：请对全店在售商品做Listing健康度扫描，只展开异常商品并按低分优先排序。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/全店Listing健康度扫描.md",
      "tags": [
        "Listing",
        "健康度",
        "图片",
        "标题"
      ]
    },
    {
      "title": "导出关键词指数",
      "category": "流量与Listing",
      "type": "Markdown指令包",
      "schedule": "按需",
      "scenario": "导出近30天入店关键词，区分已有流量词、高潜未布局词和蓝海机会词。",
      "fit": "关键词研究官、Listing优化官、RFQ商机匹配",
      "inputs": "入店关键词、搜索指数/热度、曝光点击、竞争度、是否已布局。",
      "output": "核心词Top20、蓝海机会词、关键词行动建议。",
      "usage": "对AI说：请导出近30天入店关键词，找出高潜未布局词和最优蓝海词。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/导出关键词指数.md",
      "tags": [
        "关键词",
        "蓝海词",
        "SEO",
        "标题"
      ]
    },
    {
      "title": "ACW 国际站业务指令合集",
      "category": "客户运营",
      "type": "Markdown合集包",
      "schedule": "按场景",
      "scenario": "覆盖客户画像、询盘打标、夜班秒回、沉睡客户唤醒、收货关怀、推品与单证合规等客户运营场景。",
      "fit": "外贸业务团队、客户运营、售后与单证协同",
      "inputs": "客户基础信息、询盘内容、历史沟通、订单状态、市场反馈与单证资料。",
      "output": "客户画像卡、跟进优先级、邮件草稿、推品建议、单证校验清单。",
      "usage": "对AI说：请读取ACW国际站业务指令合集，并按我当前场景选择对应指令执行。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/ACW国际站业务指令合集-橙荃.md",
      "tags": [
        "客户运营",
        "夜班",
        "唤醒",
        "单证"
      ],
      "included": [
        "深度客户画像",
        "新询盘客户自动标记",
        "AI夜班业务员",
        "L3+未成交客户激活",
        "沉睡客户唤醒",
        "收货关怀邀评",
        "市场反馈推品",
        "订单单证合规校验"
      ]
    },
    {
      "title": "国际站客户深度画像与谈判策略卡",
      "category": "模板案例",
      "type": "案例模板",
      "schedule": "按需",
      "scenario": "以真实客户为样例，展示如何把询盘、公开资料和商业情报整理成客户画像与谈判策略。",
      "fit": "客户背调官、业务员、销售主管",
      "inputs": "买家姓名、公司、国家、互动记录、公开网络线索。",
      "output": "基础档案、决策人画像、业务模式、采购实力评级、破冰策略。",
      "usage": "对AI说：请参考这个客户画像报告结构，为我的新买家生成同样格式的谈判策略卡。",
      "install": "下载 Markdown 后可直接作为提示词使用；需要长期复用时，新建技能文件夹并保存为 SKILL.md。",
      "download": "downloads/business-agents/客户深度画像报告_2026-06-25.md",
      "tags": [
        "客户画像",
        "谈判",
        "背调",
        "模板"
      ]
    },
    {
      "title": "企业战略规划与定位智能体",
      "category": "组织管理",
      "type": "独立ZIP技能包",
      "schedule": "季度/年度",
      "scenario": "帮外贸老板判断企业阶段、产品-市场-渠道定位和未来一年必须打透的战略重点。",
      "fit": "老板、合伙人、经营负责人",
      "inputs": "现有产品线、客户结构、渠道数据、利润来源、团队能力。",
      "output": "战略阶段判断、业务取舍、定位建议、年度关键战役。",
      "usage": "对AI说：使用企业战略规划与定位智能体，帮我判断未来一年最该聚焦的业务方向。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/01-企业战略规划与定位智能体.zip",
      "tags": [
        "战略",
        "定位",
        "取舍",
        "老板"
      ]
    },
    {
      "title": "外贸竞品与市场情报分析智能体",
      "category": "组织管理",
      "type": "独立ZIP技能包",
      "schedule": "月度/专项",
      "scenario": "盯直接竞品上新、定价、关键词、买家评价短板，找出90天内可打的差异化机会。",
      "fit": "老板、运营负责人、产品负责人",
      "inputs": "竞品店铺、同品类产品、平台排名、评价、社媒与展会线索。",
      "output": "竞品动作拆解、买家视角差距、差异化打法。",
      "usage": "对AI说：使用外贸竞品与市场情报分析智能体，分析这3个竞品最近在抢什么客户。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/02-外贸竞品与市场情报分析智能体.zip",
      "tags": [
        "竞品",
        "市场情报",
        "差异化",
        "定价"
      ]
    },
    {
      "title": "组织架构规划与优化智能体",
      "category": "组织管理",
      "type": "独立ZIP技能包",
      "schedule": "阶段性",
      "scenario": "为SOHO到集团化阶段的外贸企业设计部门设置、岗位分工、汇报线和组织调整动作。",
      "fit": "老板、人事负责人、外贸团队负责人",
      "inputs": "人员规模、业务模式、岗位现状、痛点、未来12个月目标。",
      "output": "组织阶段分析、架构方案、岗位职责、调整优先级。",
      "usage": "对AI说：使用组织架构规划与优化智能体，帮我设计适合20人外贸团队的组织架构。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/03-组织架构规划与优化智能体.zip",
      "tags": [
        "组织",
        "岗位",
        "汇报线",
        "扩张"
      ]
    },
    {
      "title": "人才招聘文案与面试考察智能体",
      "category": "组织管理",
      "type": "独立ZIP技能包",
      "schedule": "招聘时",
      "scenario": "为外贸企业写精准JD、设计面试题、识别简历水分和业务员真实能力。",
      "fit": "老板、HR、外贸经理",
      "inputs": "岗位目标、薪酬范围、行业品类、候选人简历、面试要求。",
      "output": "招聘文案、胜任力模型、结构化面试题、评分表。",
      "usage": "对AI说：使用人才招聘文案与面试考察智能体，帮我招聘一名阿里国际站运营。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/05-人才招聘文案与面试考察智能体.zip",
      "tags": [
        "招聘",
        "JD",
        "面试",
        "识人"
      ]
    },
    {
      "title": "企业培训知识库与导师智能体",
      "category": "组织管理",
      "type": "独立ZIP技能包",
      "schedule": "持续",
      "scenario": "把老板和销冠的经验、产品知识、异议处理与跟单流程结构化成新人可学习的内部知识库。",
      "fit": "新人培训、销售主管、企业内训负责人",
      "inputs": "产品资料、成交案例、丢单案例、话术、流程文档、历史对话。",
      "output": "新人通关手册、训练题、场景模拟、学习薄弱点反馈。",
      "usage": "对AI说：使用企业培训知识库与导师智能体，把我们的销冠经验整理成新人培训体系。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/06-企业培训知识库与导师智能体.zip",
      "tags": [
        "培训",
        "知识库",
        "新人",
        "销冠复刻"
      ]
    },
    {
      "title": "外贸工厂产品资料国际化",
      "category": "产品与供应链",
      "type": "独立ZIP技能包",
      "schedule": "上新/建站",
      "scenario": "把工厂中文资料、参数、样本和零散卖点转为海外买家能理解的英文标题、详情页和营销内容。",
      "fit": "外贸工厂、B2B上架、独立站内容、社媒内容",
      "inputs": "中文产品资料、参数、卖点、目标市场、应用场景、认证。",
      "output": "英文标题、B2B详情页、卖点、FAQ、开发信、WhatsApp话术、LinkedIn贴文。",
      "usage": "对AI说：使用外贸工厂产品资料国际化，把这份中文产品资料改成适合海外买家的英文详情页。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/外贸工厂产品资料国际化.zip",
      "tags": [
        "英文文案",
        "产品资料",
        "详情页",
        "独立站"
      ]
    },
    {
      "title": "外贸工厂市场机会分析",
      "category": "产品与供应链",
      "type": "独立ZIP技能包",
      "schedule": "选市场/新品前",
      "scenario": "基于工厂产品、规格、现有客户国家和制造优势，反推目标市场、买家画像、竞品定位和关键词。",
      "fit": "生产型外贸企业、产品负责人、市场开发",
      "inputs": "产品名称、规格参数、现有客户国家、产能、价格、认证与工厂优势。",
      "output": "市场优先级、买家画像、竞品定位、价格带、认证门槛、开发话术。",
      "usage": "对AI说：使用外贸工厂市场机会分析，帮我判断这个产品优先开发哪些国家。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/外贸工厂市场机会分析.zip",
      "tags": [
        "市场机会",
        "买家画像",
        "竞品",
        "关键词"
      ]
    },
    {
      "title": "工贸一体企业客户需求转生产语言",
      "category": "产品与供应链",
      "type": "独立ZIP技能包",
      "schedule": "每次复杂询盘",
      "scenario": "把销售端的询盘、邮件和聊天记录，转成工程、采购、生产能直接执行的内部任务单。",
      "fit": "工贸一体企业、销售、工程、采购、生产排期",
      "inputs": "客户询盘、聊天记录、产品规格、目标价格、交期、包装、认证。",
      "output": "内部任务单、规格描述、风险点、各部门待确认问题。",
      "usage": "对AI说：使用客户需求转生产语言智能体，把这段客户聊天记录整理成内部生产任务单。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/工贸一体企业客户需求转生产语言.zip",
      "tags": [
        "生产任务单",
        "销售转工程",
        "规格",
        "风险"
      ]
    },
    {
      "title": "工贸一体企业新品开发闭环",
      "category": "产品与供应链",
      "type": "独立ZIP技能包",
      "schedule": "月度/季度",
      "scenario": "整合询盘、投诉、竞品、评论、售后和展会反馈，提炼新品机会与产品改良建议。",
      "fit": "工贸一体企业、产品规划、研发、销售管理",
      "inputs": "客户反馈、投诉、竞品资料、平台评论、售后问题、展会记录、拜访记录。",
      "output": "新品机会、改良建议、目标客户画像、样品开发优先级、风险与销售话术。",
      "usage": "对AI说：使用新品开发闭环智能体，把这些客户反馈整理成新品开发优先级。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/工贸一体企业新品开发闭环.zip",
      "tags": [
        "新品",
        "产品改良",
        "客户反馈",
        "样品"
      ]
    },
    {
      "title": "贸易公司供应商筛选与 RFQ 自动化",
      "category": "贸易公司",
      "type": "独立ZIP技能包",
      "schedule": "接到采购需求时",
      "scenario": "根据客户采购需求拆解规格，生成中英文RFQ，辅助批量询价和供应商筛选。",
      "fit": "贸易公司、采购、供应商开发、项目型询价",
      "inputs": "客户需求、产品规格、数量、认证、目标价、交期、包装物流要求。",
      "output": "标准RFQ、询价话术、供应商对比表、风险评估、推荐结论。",
      "usage": "对AI说：使用贸易公司供应商筛选与RFQ自动化，帮我把客户需求生成一份英文RFQ。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/贸易公司供应商筛选与 RFQ 自动化 Agent.zip",
      "tags": [
        "供应商",
        "RFQ",
        "采购",
        "询价"
      ]
    },
    {
      "title": "贸易公司多供应商报价整合",
      "category": "贸易公司",
      "type": "独立ZIP技能包",
      "schedule": "报价前",
      "scenario": "把多家供应商口径不一的报价整合成最低价、稳妥交期、高质量、高利润等多套客户方案。",
      "fit": "贸易公司、销售、采购、报价负责人",
      "inputs": "多供应商报价、MOQ、交期、认证、付款条件、目标利润率、客户预算。",
      "output": "供应商对比表、多方案报价、利润测算、风险提示、客户报价邮件。",
      "usage": "对AI说：使用多供应商报价整合智能体，把这几份供应商报价整理成给客户的推荐方案。",
      "install": "下载 ZIP 后解压，将整个技能文件夹放入 ~/.codex/skills/，再刷新 Codex 技能列表。",
      "download": "downloads/business-agents/individual/贸易公司多供应商报价整合.zip",
      "tags": [
        "报价",
        "供应商",
        "利润",
        "客户邮件"
      ]
    }
  ]
};
