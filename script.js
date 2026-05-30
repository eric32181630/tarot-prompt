// 78 Cards Translation Dictionary
const majorArcanaTranslations = {
    "zh-tw": [
        "愚者 (The Fool)", "魔術師 (The Magician)", "女祭司 (The High Priestess)", "皇后 (The Empress)",
        "皇帝 (The Emperor)", "教皇 (The Hierophant)", "戀人 (The Lovers)", "戰車 (The Chariot)",
        "力量 (Strength)", "隱者 (The Hermit)", "命運之輪 (Wheel of Fortune)", "正義 (Justice)",
        "倒吊人 (The Hanged Man)", "死神 (Death)", "節制 (Temperance)", "惡魔 (The Devil)",
        "高塔 (The Tower)", "星星 (The Star)", "月亮 (The Moon)", "太陽 (The Sun)",
        "審判 (Judgement)", "世界 (The World)"
    ],
    "zh-cn": [
        "愚者 (The Fool)", "魔术师 (The Magician)", "女祭司 (The High Priestess)", "皇后 (The Empress)",
        "皇帝 (The Emperor)", "教皇 (The Hierophant)", "恋人 (The Lovers)", "战车 (The Chariot)",
        "力量 (Strength)", "隐者 (The Hermit)", "命运之轮 (Wheel of Fortune)", "正义 (Justice)",
        "倒吊人 (The Hanged Man)", "死神 (Death)", "节制 (Temperance)", "恶魔 (The Devil)",
        "高塔 (The Tower)", "星星 (The Star)", "月亮 (The Moon)", "太阳 (The Sun)",
        "审判 (Judgement)", "世界 (The World)"
    ],
    "en": [
        "The Fool", "The Magician", "The High Priestess", "The Empress",
        "The Emperor", "The Hierophant", "The Lovers", "The Chariot",
        "Strength", "The Hermit", "Wheel of Fortune", "Justice",
        "The Hanged Man", "Death", "Temperance", "The Devil",
        "The Tower", "The Star", "The Moon", "The Sun",
        "Judgement", "The World"
    ]
};

const suitTranslations = {
    "zh-tw": ["權杖 (Wands)", "聖杯 (Cups)", "寶劍 (Swords)", "星幣 (Pentacles)"],
    "zh-cn": ["权杖 (Wands)", "圣杯 (Cups)", "宝剑 (Swords)", "星币 (Pentacles)"],
    "en": ["Wands", "Cups", "Swords", "Pentacles"]
};

const rankTranslations = {
    "zh-tw": [
        "王牌 (Ace)", "二 (2)", "三 (3)", "四 (4)", "五 (5)",
        "六 (6)", "七 (7)", "八 (8)", "九 (9)", "十 (10)",
        "侍者 (Page)", "騎士 (Knight)", "王后 (Queen)", "國王 (King)"
    ],
    "zh-cn": [
        "王牌 (Ace)", "二 (2)", "三 (3)", "四 (4)", "五 (5)",
        "六 (6)", "七 (7)", "八 (8)", "九 (9)", "十 (10)",
        "侍者 (Page)", "骑士 (Knight)", "王后 (Queen)", "国王 (King)"
    ],
    "en": [
        "Ace", "Two (2)", "Three (3)", "Four (4)", "Five (5)",
        "Six (6)", "Seven (7)", "Eight (8)", "Nine (9)", "Ten (10)",
        "Page", "Knight", "Queen", "King"
    ]
};

// Zodiac Translations Dictionary
const zodiacTranslations = {
    "zh-tw": {
        aries: "牡羊座", taurus: "金牛座", gemini: "雙子座", cancer: "巨蟹座",
        leo: "獅子座", virgo: "處女座", libra: "天秤座", scorpio: "天蠍座",
        sagittarius: "射手座", capricorn: "魔羯座", aquarius: "水瓶座", pisces: "雙魚座"
    },
    "zh-cn": {
        aries: "白羊座", taurus: "金牛座", gemini: "双子座", cancer: "巨蟹座",
        leo: "狮子座", virgo: "处女座", libra: "天秤座", scorpio: "天蝎座",
        sagittarius: "射手座", capricorn: "摩羯座", aquarius: "水瓶座", pisces: "双鱼座"
    },
    "en": {
        aries: "Aries", taurus: "Taurus", gemini: "Gemini", cancer: "Cancer",
        leo: "Leo", virgo: "Virgo", libra: "Libra", scorpio: "Scorpio",
        sagittarius: "Sagittarius", capricorn: "Capricorn", aquarius: "Aquarius", pisces: "Pisces"
    }
};

// 12 Signs Localized List
const zodiacList = [
    { key: "aries", "zh-tw": "牡羊座 (Aries)", "zh-cn": "白羊座 (Aries)", "en": "Aries" },
    { key: "taurus", "zh-tw": "金牛座 (Taurus)", "zh-cn": "金牛座 (Taurus)", "en": "Taurus" },
    { key: "gemini", "zh-tw": "雙子座 (Gemini)", "zh-cn": "双子座 (Gemini)", "en": "Gemini" },
    { key: "cancer", "zh-tw": "巨蟹座 (Cancer)", "zh-cn": "巨蟹座 (Cancer)", "en": "Cancer" },
    { key: "leo", "zh-tw": "獅子座 (Leo)", "zh-cn": "狮子座 (Leo)", "en": "Leo" },
    { key: "virgo", "zh-tw": "處女座 (Virgo)", "zh-cn": "处女座 (Virgo)", "en": "Virgo" },
    { key: "libra", "zh-tw": "天秤座 (Libra)", "zh-cn": "天秤座 (Libra)", "en": "Libra" },
    { key: "scorpio", "zh-tw": "天蠍座 (Scorpio)", "zh-cn": "天蝎座 (Scorpio)", "en": "Scorpio" },
    { key: "sagittarius", "zh-tw": "射手座 (Sagittarius)", "zh-cn": "射手座 (Sagittarius)", "en": "Sagittarius" },
    { key: "capricorn", "zh-tw": "魔羯座 (Capricorn)", "zh-cn": "摩羯座 (Capricorn)", "en": "Capricorn" },
    { key: "aquarius", "zh-tw": "水瓶座 (Aquarius)", "zh-cn": "水瓶座 (Aquarius)", "en": "Aquarius" },
    { key: "pisces", "zh-tw": "雙魚座 (Pisces)", "zh-cn": "双鱼座 (Pisces)", "en": "Pisces" }
];

// Planet Selector Definitions
const planetSelects = [
    { id: 'astro-sun', labelId: 'label-sun', symbol: '☉', key: 'sun', labelTW: '太陽', labelCN: '太阳', labelEN: 'Sun' },
    { id: 'astro-moon', labelId: 'label-moon', symbol: '☽', key: 'moon', labelTW: '月亮', labelCN: '月亮', labelEN: 'Moon' },
    { id: 'astro-asc', labelId: 'label-asc', symbol: 'Asc', key: 'asc', labelTW: '上升', labelCN: '上升', labelEN: 'Ascendant' },
    { id: 'astro-mercury', labelId: 'label-mercury', symbol: '☿', key: 'mercury', labelTW: '水星', labelCN: '水星', labelEN: 'Mercury' },
    { id: 'astro-venus', labelId: 'label-venus', symbol: '♀', key: 'venus', labelTW: '金星', labelCN: '金星', labelEN: 'Venus' },
    { id: 'astro-mars', labelId: 'label-mars', symbol: '♂', key: 'mars', labelTW: '火星', labelCN: '火星', labelEN: 'Mars' },
    { id: 'astro-jupiter', labelId: 'label-jupiter', symbol: '♃', key: 'jupiter', labelTW: '木星', labelCN: '木星', labelEN: 'Jupiter' },
    { id: 'astro-saturn', labelId: 'label-saturn', symbol: '♄', key: 'saturn', labelTW: '土星', labelCN: '土星', labelEN: 'Saturn' },
    { id: 'astro-uranus', labelId: 'label-uranus', symbol: '♅', key: 'uranus', labelTW: '天王星', labelCN: '天王星', labelEN: 'Uranus' },
    { id: 'astro-neptune', labelId: 'label-neptune', symbol: '♆', key: 'neptune', labelTW: '海王星', labelCN: '海王星', labelEN: 'Neptune' },
    { id: 'astro-pluto', labelId: 'label-pluto', symbol: '♇', key: 'pluto', labelTW: '冥王星', labelCN: '冥王星', labelEN: 'Pluto' },
    { id: 'astro-mc', labelId: 'label-mc', symbol: 'MC', key: 'mc', labelTW: '天頂', labelCN: '天顶', labelEN: 'Midheaven' }
];

// UI Translations
const uiTranslations = {
    "zh-tw": {
        title: "星辰塔羅牌",
        subtitle: "讓星空指引你的迷惘，探索靈魂的深處。",
        questionLabel: "你心中的問題是？ (選填)",
        questionPlaceholder: "例如：我該換工作嗎？或是未來的感情發展？",
        spreadLabel: "選擇占卜牌陣：",
        drawBtn: "開始抽牌",
        drawingBtn: "星辰占卜中...",
        redrawBtn: "重新抽牌",
        resultsTitle: "命運的指引",
        copyBtn: "✨ 一鍵複製結果供 AI 分析",
        copyFeedback: "已複製到剪貼簿！",
        upright: "正位",
        reversed: "逆位",
        fullStatusUpright: "正位 (Upright)",
        fullStatusReversed: "逆位 (Reversed)",
        copyFailed: "複製失敗，請手動全選結果並複製。",
        promptHeader: "我的問題是：",
        promptBody: "我做了一個【{spread}】塔羅抽牌占卜，想請你幫我詳細分析。\n\n抽牌結果如下：\n",
        promptFooter: "\n請根據每個位置的代表意義，以及正逆位的象徵，幫我進行整體與深入的解讀。謝謝！",
        
        // Journal Items
        journalBtn: "📖 占卜日誌",
        modalTitle: "📖 占卜日誌",
        clearHistoryBtn: "🗑️ 清除所有紀錄",
        emptyHistory: "尚無占卜紀錄。讓命運指引你的第一步。",
        historyRestore: "🔮 載入此占卜",
        historyCopy: "✨ 複製 AI 提示詞",
        confirmClear: "確定要刪除所有占卜紀錄嗎？",

        // Astro Items
        astroHeaderTitle: "✨ 注入星盤能量 (選填)",
        tabBirthLabel: "📅 生辰定位",
        tabDetailLabel: "🪐 星盤參數",
        tabUploadLabel: "📷 星盤圖片",
        labelBirthDate: "出生日期",
        labelBirthTime: "出生時間",
        labelBirthLocation: "出生地點",
        placeholderBirthLocation: "例如：東京",
        astroManualInstruction: "請選擇各星體落入的星座：",
        uploadInstructionText: "點擊或拖曳星盤截圖至此處上傳",
        selectEmpty: "- 選擇 -"
    },
    "zh-cn": {
        title: "星辰塔罗牌",
        subtitle: "让星空指引你的迷惘，探索灵魂的深处。",
        questionLabel: "你心中的问题是？ (选填)",
        questionPlaceholder: "例如：我该换工作吗？或是未来的感情发展？",
        spreadLabel: "选择占卜牌阵：",
        drawBtn: "开始抽牌",
        drawingBtn: "星辰占卜中...",
        redrawBtn: "重新抽牌",
        resultsTitle: "命运的指引",
        copyBtn: "✨ 一键复制结果供 AI 分析",
        copyFeedback: "已复制到剪贴板！",
        upright: "正位",
        reversed: "逆位",
        fullStatusUpright: "正位 (Upright)",
        fullStatusReversed: "逆位 (Reversed)",
        copyFailed: "复制失败，请手动全选结果并复制。",
        promptHeader: "我的问题是：",
        promptBody: "我做了一个【{spread}】塔罗抽牌占卜，想请你帮我详细分析。\n\n抽牌结果如下：\n",
        promptFooter: "\n请根据每个位置的代表意义，以及正逆位的象征，帮我进行整体与深入的解读。谢谢！",
        
        // Journal Items
        journalBtn: "📖 占卜日志",
        modalTitle: "📖 占卜日志",
        clearHistoryBtn: "🗑️ 清除所有记录",
        emptyHistory: "尚无占卜记录。让命运指引你的第一步。",
        historyRestore: "🔮 载入此占卜",
        historyCopy: "✨ 复制 AI 提示词",
        confirmClear: "确定要删除所有占卜记录吗？",

        // Astro Items
        astroHeaderTitle: "✨ 注入星盘能量 (选填)",
        tabBirthLabel: "📅 生辰定位",
        tabDetailLabel: "🪐 星盘参数",
        tabUploadLabel: "📷 星盘图片",
        labelBirthDate: "出生日期",
        labelBirthTime: "出生时间",
        labelBirthLocation: "出生地点",
        placeholderBirthLocation: "例如：北京市",
        astroManualInstruction: "请选择各星体落入的星座：",
        uploadInstructionText: "点击或拖曳星盘截图至此处上传",
        selectEmpty: "- 选择 -"
    },
    "en": {
        title: "Celestial Tarot",
        subtitle: "Let the stars guide your confusion and explore the depths of your soul.",
        questionLabel: "What is the question in your heart? (Optional)",
        questionPlaceholder: "e.g., Should I change jobs? Or how will my relationship develop?",
        spreadLabel: "Choose Card Spread:",
        drawBtn: "Draw Cards",
        drawingBtn: "Consulting Stars...",
        redrawBtn: "Draw Again",
        resultsTitle: "Guidance of Fate",
        copyBtn: "✨ Copy Results for AI Analysis",
        copyFeedback: "Copied to clipboard!",
        upright: "Upright",
        reversed: "Reversed",
        fullStatusUpright: "Upright",
        fullStatusReversed: "Reversed",
        copyFailed: "Failed to copy, please select and copy manually.",
        promptHeader: "My question is: ",
        promptBody: "I performed a [{spread}] Tarot reading and would like you to analyze it in detail.\n\nHere are the drawn cards:\n",
        promptFooter: "\nPlease provide a comprehensive and deep interpretation based on the meaning of each position and the symbolism of upright/reversed cards. Thank you!",
        
        // Journal Items
        journalBtn: "📖 Journal",
        modalTitle: "📖 Oracle's Journal",
        clearHistoryBtn: "🗑️ Clear All Records",
        emptyHistory: "No records yet. Let fate guide your first step.",
        historyRestore: "🔮 Load Reading",
        historyCopy: "✨ Copy Prompt",
        confirmClear: "Are you sure you want to clear all reading history?",

        // Astro Items
        astroHeaderTitle: "✨ Add Natal Chart Info (Optional)",
        tabBirthLabel: "📅 Birth Details",
        tabDetailLabel: "🪐 Planet Positions",
        tabUploadLabel: "📷 Upload Chart",
        labelBirthDate: "Birth Date",
        labelBirthTime: "Birth Time",
        labelBirthLocation: "Birth Location",
        placeholderBirthLocation: "e.g. London, UK",
        astroManualInstruction: "Select zodiac signs for each planet:",
        uploadInstructionText: "Click or drag natal chart image here to upload",
        selectEmpty: "- Select -"
    }
};

// Localized Spread Configurations
const spreadsTranslations = {
    "zh-tw": {
        single: {
            name: "單張牌陣",
            option: "🔮 單張牌陣 (適合尋求單一建議、每日運勢)",
            positions: ["整體建議或提醒"]
        },
        triangle: {
            name: "聖三角牌陣",
            option: "✨ 聖三角牌陣 (探討過去、現在、未來的發展)",
            positions: ["過去的狀況", "現在的狀況", "未來的發展"]
        },
        elements: {
            name: "四要素牌陣",
            option: "🌿 四要素牌陣 (分析現狀、挑戰、建議、結果)",
            positions: ["目前的現狀", "面臨的挑戰", "針對此狀況的建議", "最終的結果"]
        },
        celtic: {
            name: "塞爾特十字牌陣",
            option: "✝️ 塞爾特十字牌陣 (深入剖析問題的各個層面)",
            positions: [
                "現狀 (發問者當前狀態)",
                "障礙 (面臨的問題或輔助)",
                "潛在目標/外顯現況",
                "基礎 (過去已發生的根基)",
                "過去 (剛結束的事件)",
                "未來 (即將發生的事)",
                "自我 (發問者的態度)",
                "環境 (周遭人事物影響)",
                "希望與恐懼 (內心想法)",
                "最終結果"
            ]
        }
    },
    "zh-cn": {
        single: {
            name: "单张牌阵",
            option: "🔮 单张牌阵 (适合寻求单一建议、每日运势)",
            positions: ["整体建议或提醒"]
        },
        triangle: {
            name: "圣三角牌阵",
            option: "✨ 圣三角牌阵 (探讨过去、现在、未来的发展)",
            positions: ["过去的状况", "现在的状况", "未来的发展"]
        },
        elements: {
            name: "四要素牌阵",
            option: "🌿 四要素牌阵 (分析现状、挑战、建议、结果)",
            positions: ["目前的现状", "面临的挑战", "针对此状况的建议", "最终的结果"]
        },
        celtic: {
            name: "塞尔特十字牌阵",
            option: "✝️ 塞尔特十字牌阵 (深入剖析问题的各个层面)",
            positions: [
                "现状 (发问者当前状态)",
                "障碍 (面临的问题或辅助)",
                "潜在目标/外显现况",
                "基础 (过去已发生的根基)",
                "过去 (刚结束的事件)",
                "未来 (即将发生的事)",
                "自我 (发问者的态度)",
                "环境 (周边人事物影響)",
                "希望与恐惧 (内心想法)",
                "最终结果"
            ]
        }
    },
    "en": {
        single: {
            name: "Single Card Spread",
            option: "🔮 Single Card (Best for quick advice or daily energy)",
            positions: ["Overall Advice or Reminder"]
        },
        triangle: {
            name: "Three-Card Spread",
            option: "✨ Past, Present, Future (Explore timeline of the situation)",
            positions: ["Past Situation", "Present State", "Future Development"]
        },
        elements: {
            name: "Four Elements Spread",
            option: "🌿 Four Elements (Analyze situation, challenge, advice, outcome)",
            positions: ["Current Reality", "Faced Challenge", "Advice for the Situation", "Final Outcome"]
        },
        celtic: {
            name: "Celtic Cross Spread",
            option: "✝️ Celtic Cross (In-depth analysis of all facets)",
            positions: [
                "The Present (Your current situation)",
                "The Challenge (Immediate obstacles)",
                "Conscious Goal (What you focus on)",
                "The Foundation (Past roots of the issue)",
                "Recent Past (Events just ending)",
                "Near Future (What lies ahead)",
                "Self Attitude (Your perspective)",
                "Environment (External influences)",
                "Hopes & Fears (Inner feelings)",
                "Final Outcome (Ultimate resolution)"
            ]
        }
    }
};

// 78 Cards Data Generation (Dynamic Objects)
const deck = [];

// Build Major Arcana
for (let i = 0; i < 22; i++) {
    deck.push({ type: 'major', id: i, icon: "✨" });
}

// Build Minor Arcana
const suitIcons = ["🔥", "🌊", "⚔️", "💎"];
for (let s = 0; s < 4; s++) {
    for (let r = 0; r < 14; r++) {
        deck.push({ type: 'minor', suit: s, rank: r, icon: suitIcons[s] });
    }
}

// DOM Elements
const drawBtn = document.getElementById('draw-btn');
const spreadSelect = document.getElementById('spread-select');
const questionInput = document.getElementById('question-input');
const resultsContainer = document.getElementById('results-container');
const cardsDisplay = document.getElementById('cards-display');
const copyBtn = document.getElementById('copy-btn');
const copyFeedback = document.getElementById('copy-feedback');

const appTitle = document.getElementById('app-title');
const appSubtitle = document.getElementById('app-subtitle');
const labelQuestion = document.getElementById('label-question');
const labelSpread = document.getElementById('label-spread');
const resultsTitle = document.getElementById('results-title');
const langBtns = document.querySelectorAll('.lang-btn');

// Journal (History) DOM Elements
const journalBtn = document.getElementById('journal-btn');
const journalModal = document.getElementById('journal-modal');
const closeJournalBtn = document.getElementById('close-journal-btn');
const journalList = document.getElementById('journal-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const modalTitle = document.getElementById('modal-title');

// Astro (Natal Chart) DOM Elements
const astroHeader = document.getElementById('astro-header');
const astroContent = document.querySelector('.astro-accordion-content');
const astroTabBtns = document.querySelectorAll('.astro-tab-btn');
const astroTabContents = document.querySelectorAll('.astro-tab-content');

// State Variables
let currentLang = 'en';
let lastDrawnCards = [];
let currentSpreadKey = 'single';
let activeAstroTab = 'birth';

// Helper: Determine Sun Zodiac Sign from Date
function getZodiacSign(month, day) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "pisces";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "capricorn";
    return "";
}

// Helper: Translate Card Names Dynamically
function getCardName(card, lang) {
    if (card.type === 'major') {
        return majorArcanaTranslations[lang][card.id];
    } else {
        const suitStr = suitTranslations[lang][card.suit];
        const rankStr = rankTranslations[lang][card.rank];
        if (lang === 'en') {
            return `${rankStr} of ${suitStr}`;
        }
        return `${suitStr} - ${rankStr}`;
    }
}

// Populate Astro Planets Dropdowns
function populatePlanetSelects(lang) {
    planetSelects.forEach(planet => {
        const select = document.getElementById(planet.id);
        const label = document.getElementById(planet.labelId);
        
        const currentVal = select.value;
        
        let localizedLabel = planet.labelTW;
        if (lang === 'zh-cn') localizedLabel = planet.labelCN;
        if (lang === 'en') localizedLabel = planet.labelEN;
        label.textContent = `${planet.symbol} ${localizedLabel}`;

        select.innerHTML = "";
        
        const emptyOpt = document.createElement('option');
        emptyOpt.value = "";
        emptyOpt.textContent = uiTranslations[lang].selectEmpty;
        select.appendChild(emptyOpt);

        zodiacList.forEach(z => {
            const opt = document.createElement('option');
            opt.value = z.key;
            opt.textContent = z[lang];
            select.appendChild(opt);
        });

        select.value = currentVal;
    });
}

// Render Card HTML Elements
function renderCards(lang, instantlyRevealed = false) {
    cardsDisplay.innerHTML = "";
    const spreadConfig = spreadsTranslations[lang][currentSpreadKey];

    lastDrawnCards.forEach((item, i) => {
        const card = item.card;
        const isReversed = item.isReversed;
        const positionText = spreadConfig.positions[i];
        
        const cardName = getCardName(card, lang);
        const fullStatusStr = isReversed ? uiTranslations[lang].fullStatusReversed : uiTranslations[lang].fullStatusUpright;

        // Render Card Wrapper
        const wrapper = document.createElement('div');
        wrapper.className = "card-wrapper";
        wrapper.style.animationDelay = instantlyRevealed ? "0s" : `${i * 0.25}s`;

        const posDiv = document.createElement('div');
        posDiv.className = "card-position";
        posDiv.textContent = `${i + 1}. ${positionText}`;

        // Create the card container
        const cardContainer = document.createElement('div');
        cardContainer.className = `tarot-card-container ${isReversed ? 'reversed' : ''} ${instantlyRevealed ? 'revealed' : ''}`;

        const cardInner = document.createElement('div');
        cardInner.className = "tarot-card-inner";

        // Card Back design (golden borders & celestial ornaments)
        const cardBack = document.createElement('div');
        cardBack.className = "tarot-card-back";
        cardBack.innerHTML = `
            <div class="card-back-design">
                <svg viewBox="0 0 100 180" class="card-back-svg">
                    <rect x="5" y="5" width="90" height="170" rx="6" fill="none" stroke="var(--gold-dark)" stroke-width="1.2"/>
                    <rect x="8" y="8" width="84" height="164" rx="4" fill="none" stroke="var(--gold-dark)" stroke-dasharray="2 3" stroke-width="0.8"/>
                    <circle cx="50" cy="90" r="18" fill="none" stroke="var(--gold-dark)" stroke-width="0.8"/>
                    <path d="M 50,68 L 50,112 M 28,90 L 72,90" stroke="var(--gold-dark)" stroke-width="0.6"/>
                    <path d="M 50,78 Q 50,90 62,90 Q 50,90 50,102 Q 50,90 38,90 Q 50,90 50,78 Z" fill="var(--gold)"/>
                    <circle cx="50" cy="90" r="4" fill="var(--bg-color-dark)"/>
                    <!-- Star symbols -->
                    <path d="M 20,20 L 22,22 L 20,24 L 18,22 Z" fill="var(--gold)"/>
                    <path d="M 80,20 L 82,22 L 80,24 L 78,22 Z" fill="var(--gold)"/>
                    <path d="M 20,160 L 22,162 L 20,164 L 18,162 Z" fill="var(--gold)"/>
                    <path d="M 80,160 L 82,162 L 80,164 L 78,162 Z" fill="var(--gold)"/>
                    <!-- Small circles -->
                    <circle cx="50" cy="25" r="1.5" fill="var(--gold)"/>
                    <circle cx="50" cy="155" r="1.5" fill="var(--gold)"/>
                </svg>
            </div>
        `;

        // Card Front design (gold margins & localizations)
        const cardFront = document.createElement('div');
        cardFront.className = "tarot-card-front";
        cardFront.innerHTML = `
            <svg viewBox="0 0 100 180" class="card-front-border">
                <rect x="5" y="5" width="90" height="170" rx="6" fill="none" stroke="var(--gold-dark)" stroke-width="1.2"/>
                <rect x="8" y="8" width="84" height="164" rx="4" fill="none" stroke="var(--gold-dark)" stroke-dasharray="1 3" stroke-width="0.8"/>
                <path d="M 5,20 L 15,20 L 15,5" fill="none" stroke="var(--gold-dark)" stroke-width="0.8"/>
                <path d="M 95,20 L 85,20 L 85,5" fill="none" stroke="var(--gold-dark)" stroke-width="0.8"/>
                <path d="M 5,160 L 15,160 L 15,175" fill="none" stroke="var(--gold-dark)" stroke-width="0.8"/>
                <path d="M 95,160 L 85,160 L 85,175" fill="none" stroke="var(--gold-dark)" stroke-width="0.8"/>
            </svg>
            <div class="card-pattern">${card.icon}</div>
            <div class="card-name">${cardName}</div>
        `;

        cardInner.appendChild(cardBack);
        cardInner.appendChild(cardFront);
        cardContainer.appendChild(cardInner);

        const textContainer = document.createElement('div');
        textContainer.className = "card-text-container";

        const nameLabel = document.createElement('div');
        nameLabel.className = "card-name-label";
        nameLabel.textContent = cardName;

        const statusLabel = document.createElement('div');
        statusLabel.className = "card-status-label";
        statusLabel.textContent = fullStatusStr;

        textContainer.appendChild(nameLabel);
        textContainer.appendChild(statusLabel);

        wrapper.appendChild(posDiv);
        wrapper.appendChild(cardContainer);
        wrapper.appendChild(textContainer);

        cardsDisplay.appendChild(wrapper);

        // Staggered flip animation trigger
        if (!instantlyRevealed) {
            setTimeout(() => {
                cardContainer.classList.add('revealed');
            }, (i * 250) + 800);
        }
    });
}

// Draw Cards Logic
drawBtn.addEventListener('click', () => {
    resultsContainer.classList.add('hidden');

    // Shuffle state text
    drawBtn.textContent = uiTranslations[currentLang].drawingBtn;
    drawBtn.disabled = true;
    drawBtn.classList.remove('pulse-glow');

    setTimeout(() => {
        performDraw();
        drawBtn.textContent = uiTranslations[currentLang].redrawBtn;
        drawBtn.disabled = false;
        resultsContainer.classList.remove('hidden');
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1500);
});

function performDraw() {
    currentSpreadKey = spreadSelect.value;
    const spreadConfig = spreadsTranslations[currentLang][currentSpreadKey];
    const numCards = spreadConfig.positions.length;

    // Shuffle deck
    let tempDeck = [...deck];
    for (let i = 0; i < tempDeck.length; i++) {
        const j = Math.floor(Math.random() * tempDeck.length);
        [tempDeck[i], tempDeck[j]] = [tempDeck[j], tempDeck[i]];
    }

    lastDrawnCards = [];
    for (let i = 0; i < numCards; i++) {
        const card = tempDeck[i];
        const isReversed = Math.random() < 0.5;
        lastDrawnCards.push({ card, isReversed });
    }

    renderCards(currentLang, false);
    
    // Save to localStorage history (including Astrological data states)
    saveReadingToHistory(questionInput.value.trim(), currentSpreadKey, lastDrawnCards);
}

// Save reading record to localStorage
function saveReadingToHistory(question, spreadKey, cards) {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('tarot_history')) || [];
    } catch (e) {
        history = [];
    }

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day} ${hours}:${minutes}`;

    const newRecord = {
        id: Date.now(),
        timestamp: Date.now(),
        dateStr: dateStr,
        question: question,
        spreadKey: spreadKey,
        cards: cards,
        
        // Astrological Info
        astroTab: activeAstroTab,
        birthInfo: {
            date: document.getElementById('birth-date').value,
            time: document.getElementById('birth-time').value,
            location: document.getElementById('birth-location').value.trim()
        },
        planetDetails: planetSelects.reduce((acc, p) => {
            acc[p.key] = document.getElementById(p.id).value;
            return acc;
        }, {})
    };

    history.unshift(newRecord);
    localStorage.setItem('tarot_history', JSON.stringify(history));
}

// Restore a historical record into active state
function restoreReading(record) {
    lastDrawnCards = record.cards;
    currentSpreadKey = record.spreadKey;

    // Update form elements
    spreadSelect.value = currentSpreadKey;
    questionInput.value = record.question;

    // Restore Astrological Info if present in the record
    if (record.astroTab) {
        activeAstroTab = record.astroTab;
        
        // Toggle active button class
        astroTabBtns.forEach(b => {
            if (b.getAttribute('data-tab') === activeAstroTab) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        // Toggle active content class
        astroTabContents.forEach(content => {
            if (content.id === `tab-${activeAstroTab}`) {
                content.classList.remove('hidden');
                content.classList.add('active');
            } else {
                content.classList.add('hidden');
                content.classList.remove('active');
            }
        });

        // Restore Birth Info
        if (record.birthInfo) {
            document.getElementById('birth-date').value = record.birthInfo.date || "";
            document.getElementById('birth-time').value = record.birthInfo.time || "";
            document.getElementById('birth-location').value = record.birthInfo.location || "";
        }

        // Restore Planet Details
        if (record.planetDetails) {
            planetSelects.forEach(p => {
                document.getElementById(p.id).value = record.planetDetails[p.key] || "";
            });
        }

        // No uploaded image to restore

        // Expand accordion
        astroHeader.classList.add('expanded');
        astroContent.classList.remove('hidden');
    }

    // Render cards immediately (face up)
    renderCards(currentLang, true);

    // Hide Modal Overlay
    journalModal.classList.add('hidden');

    // Reveal main results
    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Set redraw button text
    drawBtn.textContent = uiTranslations[currentLang].redrawBtn;
}

// Compile Astrological Data to include in Prompt
function compileAstroPrompt(lang) {
    let astroText = "";
    
    // 1. Birth Info
    const birthDate = document.getElementById('birth-date').value;
    const birthTime = document.getElementById('birth-time').value;
    const birthLoc = document.getElementById('birth-location').value.trim();

    if (birthDate) {
        const dateObj = new Date(birthDate);
        const m = dateObj.getMonth() + 1;
        const d = dateObj.getDate();
        const signKey = getZodiacSign(m, d);
        const sunSignName = signKey ? zodiacTranslations[lang][signKey] : "";

        if (lang === 'en') {
            astroText += `\n[Querent's Birth Astrological Info]\n`;
            astroText += `- Birth Date: ${birthDate}\n`;
            if (birthTime) astroText += `- Birth Time: ${birthTime}\n`;
            if (birthLoc) astroText += `- Birth Place: ${birthLoc}\n`;
            if (sunSignName) astroText += `- Calculated Sun Sign: ${sunSignName}\n`;
        } else if (lang === 'zh-cn') {
            astroText += `\n【发问者星盘生辰资讯】\n`;
            astroText += `- 出生日期：${birthDate}\n`;
            if (birthTime) astroText += `- 出生时间：${birthTime}\n`;
            if (birthLoc) astroText += `- 出生地点：${birthLoc}\n`;
            if (sunSignName) astroText += `- 系统计算太阳星座：${sunSignName}\n`;
        } else {
            astroText += `\n【發問者星盤生辰資訊】\n`;
            astroText += `- 出生日期：${birthDate}\n`;
            if (birthTime) astroText += `- 出生時間：${birthTime}\n`;
            if (birthLoc) astroText += `- 出生地點：${birthLoc}\n`;
            if (sunSignName) astroText += `- 系統計算太陽星座：${sunSignName}\n`;
        }
    }

    // 2. Planet Positions
    let planetDetails = [];
    planetSelects.forEach(planet => {
        const selectVal = document.getElementById(planet.id).value;
        if (selectVal) {
            const localizedZodiac = zodiacList.find(z => z.key === selectVal)[lang];
            let localizedPlanet = planet.labelTW;
            if (lang === 'zh-cn') localizedPlanet = planet.labelCN;
            if (lang === 'en') localizedPlanet = planet.labelEN;
            planetDetails.push({ name: localizedPlanet, sign: localizedZodiac });
        }
    });

    if (planetDetails.length > 0) {
        if (lang === 'en') {
            astroText += `\n[Querent's Detailed Natal Chart Positions]\n`;
            planetDetails.forEach(p => {
                astroText += `- ${p.name}: ${p.sign}\n`;
            });
        } else if (lang === 'zh-cn') {
            astroText += `\n【发问者星盘详细参数】\n`;
            planetDetails.forEach(p => {
                astroText += `- ${p.name}：${p.sign}\n`;
            });
        } else {
            astroText += `\n【發問者星盤詳細參數】\n`;
            planetDetails.forEach(p => {
                astroText += `- ${p.name}：${p.sign}\n`;
            });
        }
    }

    // Image feature removed

    return astroText;
}

// Compile Astrological Data from History Record
function compileAstroPromptFromRecord(record, lang) {
    let astroText = "";
    
    // 1. Birth Info
    if (record.birthInfo && record.birthInfo.date) {
        const birthDate = record.birthInfo.date;
        const birthTime = record.birthInfo.time;
        const birthLoc = record.birthInfo.location;

        const dateObj = new Date(birthDate);
        const m = dateObj.getMonth() + 1;
        const d = dateObj.getDate();
        const signKey = getZodiacSign(m, d);
        const sunSignName = signKey ? zodiacTranslations[lang][signKey] : "";

        if (lang === 'en') {
            astroText += `\n[Querent's Birth Astrological Info]\n`;
            astroText += `- Birth Date: ${birthDate}\n`;
            if (birthTime) astroText += `- Birth Time: ${birthTime}\n`;
            if (birthLoc) astroText += `- Birth Place: ${birthLoc}\n`;
            if (sunSignName) astroText += `- Calculated Sun Sign: ${sunSignName}\n`;
        } else if (lang === 'zh-cn') {
            astroText += `\n【发问者星盘生辰资讯】\n`;
            astroText += `- 出生日期：${birthDate}\n`;
            if (birthTime) astroText += `- 出生时间：${birthTime}\n`;
            if (birthLoc) astroText += `- 出生地点：${birthLoc}\n`;
            if (sunSignName) astroText += `- 系统计算太阳星座：${sunSignName}\n`;
        } else {
            astroText += `\n【發問者星盤生辰資訊】\n`;
            astroText += `- 出生日期：${birthDate}\n`;
            if (birthTime) astroText += `- 出生時間：${birthTime}\n`;
            if (birthLoc) astroText += `- 出生地點：${birthLoc}\n`;
            if (sunSignName) astroText += `- 系統計算太陽星座：${sunSignName}\n`;
        }
    }

    // 2. Planet Positions
    if (record.planetDetails) {
        let planetDetails = [];
        planetSelects.forEach(planet => {
            const selectVal = record.planetDetails[planet.key];
            if (selectVal) {
                const localizedZodiac = zodiacList.find(z => z.key === selectVal)[lang];
                let localizedPlanet = planet.labelTW;
                if (lang === 'zh-cn') localizedPlanet = planet.labelCN;
                if (lang === 'en') localizedPlanet = planet.labelEN;
                planetDetails.push({ name: localizedPlanet, sign: localizedZodiac });
            }
        });

        if (planetDetails.length > 0) {
            if (lang === 'en') {
                astroText += `\n[Querent's Detailed Natal Chart Positions]\n`;
                planetDetails.forEach(p => {
                    astroText += `- ${p.name}: ${p.sign}\n`;
                });
            } else if (lang === 'zh-cn') {
                astroText += `\n【发问者星盘详细参数】\n`;
                planetDetails.forEach(p => {
                    astroText += `- ${p.name}：${p.sign}\n`;
                });
            } else {
                astroText += `\n【發問者星盤詳細參數】\n`;
                planetDetails.forEach(p => {
                    astroText += `- ${p.name}：${p.sign}\n`;
                });
            }
        }
    }

    // Image feature removed

    return astroText;
}

// Compile and Copy Prompt from History Record
function copyPromptFromRecord(record) {
    let textToCopy = "";
    if (record.question) {
        if (currentLang === 'en') {
            textToCopy += `${uiTranslations[currentLang].promptHeader}"${record.question}"\n`;
        } else {
            textToCopy += `${uiTranslations[currentLang].promptHeader}「${record.question}」\n`;
        }
    }

    // Add Astrological Context from Record
    const astroPrompt = compileAstroPromptFromRecord(record, currentLang);
    if (astroPrompt) {
        textToCopy += astroPrompt + "\n";
    }

    const spreadName = spreadsTranslations[currentLang][record.spreadKey].name;
    const bodyTemplate = uiTranslations[currentLang].promptBody.replace("{spread}", spreadName);
    textToCopy += bodyTemplate;

    const spreadConfig = spreadsTranslations[currentLang][record.spreadKey];
    record.cards.forEach((item, index) => {
        const cardName = getCardName(item.card, currentLang);
        const positionText = spreadConfig.positions[index];
        const statusStr = item.isReversed ? uiTranslations[currentLang].reversed : uiTranslations[currentLang].upright;

        if (currentLang === 'en') {
            textToCopy += `${index + 1}. ${positionText}: [${cardName}] - ${statusStr}\n`;
        } else {
            textToCopy += `${index + 1}. ${positionText}：【${cardName}】 - ${statusStr}\n`;
        }
    });

    textToCopy += uiTranslations[currentLang].promptFooter;

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert(uiTranslations[currentLang].copyFeedback);
    }).catch(err => {
        alert(uiTranslations[currentLang].copyFailed);
        console.error('Failed to copy: ', err);
    });
}

// Delete single history item
function deleteHistoryRecord(id) {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('tarot_history')) || [];
    } catch (e) {
        history = [];
    }
    history = history.filter(item => item.id !== id);
    localStorage.setItem('tarot_history', JSON.stringify(history));
    renderHistory();
}

// Delete all history items
function clearHistory() {
    if (confirm(uiTranslations[currentLang].confirmClear)) {
        localStorage.removeItem('tarot_history');
        renderHistory();
    }
}

// Render History List inside Modal
function renderHistory() {
    journalList.innerHTML = "";
    
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('tarot_history')) || [];
    } catch (e) {
        history = [];
    }

    if (history.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = "empty-history";
        emptyDiv.innerHTML = `
            <div class="empty-history-icon">🌌</div>
            <div>${uiTranslations[currentLang].emptyHistory}</div>
        `;
        journalList.appendChild(emptyDiv);
        return;
    }

    history.forEach(record => {
        const itemDiv = document.createElement('div');
        itemDiv.className = "history-item";

        const headerDiv = document.createElement('div');
        headerDiv.className = "history-header";

        const spreadName = spreadsTranslations[currentLang][record.spreadKey].name;
        const infoSpan = document.createElement('span');
        infoSpan.className = "history-spread-name";
        infoSpan.textContent = spreadName;

        const dateSpan = document.createElement('span');
        dateSpan.className = "history-date";
        dateSpan.textContent = record.dateStr;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-item-btn";
        deleteBtn.innerHTML = "&times;";
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteHistoryRecord(record.id);
        });

        const leftHeader = document.createElement('div');
        leftHeader.style.display = "flex";
        leftHeader.style.flexDirection = "column";
        leftHeader.appendChild(infoSpan);
        leftHeader.appendChild(dateSpan);

        headerDiv.appendChild(leftHeader);
        headerDiv.appendChild(deleteBtn);

        itemDiv.appendChild(headerDiv);

        if (record.question) {
            const questionDiv = document.createElement('div');
            questionDiv.className = "history-question";
            if (currentLang === 'en') {
                questionDiv.textContent = `Q: "${record.question}"`;
            } else {
                questionDiv.textContent = `問：「${record.question}」`;
            }
            itemDiv.appendChild(questionDiv);
        }

        const cardsDiv = document.createElement('div');
        cardsDiv.className = "history-cards-mini";

        record.cards.forEach(cardItem => {
            const miniCard = document.createElement('div');
            miniCard.className = `mini-card ${cardItem.isReversed ? 'reversed' : ''}`;

            const name = getCardName(cardItem.card, currentLang);
            const status = cardItem.isReversed ? uiTranslations[currentLang].reversed : uiTranslations[currentLang].upright;

            miniCard.innerHTML = `
                <span class="mini-card-icon">${cardItem.card.icon}</span>
                <span class="mini-card-name">${name}</span>
                <span class="mini-card-status">(${status})</span>
            `;
            cardsDiv.appendChild(miniCard);
        });
        itemDiv.appendChild(cardsDiv);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = "history-actions";

        const loadBtn = document.createElement('button');
        loadBtn.className = "history-action-btn restore";
        loadBtn.textContent = uiTranslations[currentLang].historyRestore;
        loadBtn.addEventListener('click', () => {
            restoreReading(record);
        });

        const copyPromptBtn = document.createElement('button');
        copyPromptBtn.className = "history-action-btn copy";
        copyPromptBtn.textContent = uiTranslations[currentLang].historyCopy;
        copyPromptBtn.addEventListener('click', () => {
            copyPromptFromRecord(record);
        });

        actionsDiv.appendChild(loadBtn);
        actionsDiv.appendChild(copyPromptBtn);
        itemDiv.appendChild(actionsDiv);

        journalList.appendChild(itemDiv);
    });
}

// Modal Toggle Handlers
journalBtn.addEventListener('click', () => {
    renderHistory();
    journalModal.classList.remove('hidden');
});

closeJournalBtn.addEventListener('click', () => {
    journalModal.classList.add('hidden');
});

journalModal.addEventListener('click', (e) => {
    if (e.target === journalModal) {
        journalModal.classList.add('hidden');
    }
});

clearHistoryBtn.addEventListener('click', () => {
    clearHistory();
});

// Astro Accordion Toggler
astroHeader.addEventListener('click', () => {
    const isExpanded = astroHeader.classList.toggle('expanded');
    if (isExpanded) {
        astroContent.classList.remove('hidden');
    } else {
        astroContent.classList.add('hidden');
    }
});

// Astro Tab Switchers
astroTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        activeAstroTab = targetTab;

        astroTabBtns.forEach(b => {
            if (b === btn) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        astroTabContents.forEach(content => {
            if (content.id === `tab-${targetTab}`) {
                content.classList.remove('hidden');
                content.classList.add('active');
            } else {
                content.classList.add('hidden');
                content.classList.remove('active');
            }
        });
    });
});

// Upload handlers removed

// Set Active Language State
function setLanguage(lang) {
    currentLang = lang;

    // Update Language Buttons CSS Class
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Translate UI Text Content
    appTitle.textContent = uiTranslations[lang].title;
    appSubtitle.textContent = uiTranslations[lang].subtitle;
    labelQuestion.textContent = uiTranslations[lang].questionLabel;
    questionInput.placeholder = uiTranslations[lang].questionPlaceholder;
    labelSpread.textContent = uiTranslations[lang].spreadLabel;

    // Translate Draw Button
    if (drawBtn.disabled) {
        drawBtn.textContent = uiTranslations[lang].drawingBtn;
    } else {
        const hasResult = lastDrawnCards.length > 0;
        drawBtn.textContent = hasResult ? uiTranslations[lang].redrawBtn : uiTranslations[lang].drawBtn;
    }

    // Translate Result Sections
    resultsTitle.textContent = uiTranslations[lang].resultsTitle;
    copyBtn.textContent = uiTranslations[lang].copyBtn;
    copyFeedback.textContent = uiTranslations[lang].copyFeedback;

    // Translate Journal elements
    journalBtn.textContent = uiTranslations[lang].journalBtn;
    modalTitle.textContent = uiTranslations[lang].modalTitle;
    clearHistoryBtn.textContent = uiTranslations[lang].clearHistoryBtn;

    // Translate Astro Accordion elements
    document.getElementById('astro-header-title').textContent = uiTranslations[lang].astroHeaderTitle;
    document.getElementById('tab-birth-label').textContent = uiTranslations[lang].tabBirthLabel;
    document.getElementById('tab-detail-label').textContent = uiTranslations[lang].tabDetailLabel;
    
    document.getElementById('label-birth-date').textContent = uiTranslations[lang].labelBirthDate;
    document.getElementById('label-birth-time').textContent = uiTranslations[lang].labelBirthTime;
    document.getElementById('label-birth-location').textContent = uiTranslations[lang].labelBirthLocation;
    document.getElementById('birth-location').placeholder = uiTranslations[lang].placeholderBirthLocation;
    
    document.getElementById('astro-manual-instruction').textContent = uiTranslations[lang].astroManualInstruction;

    // Populates Planet Option dropdowns dynamically
    populatePlanetSelects(lang);

    // Repopulate Spread Options dynamically while preserving active selection
    const previousSelection = spreadSelect.value || 'single';
    spreadSelect.innerHTML = "";
    Object.keys(spreadsTranslations[lang]).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = spreadsTranslations[lang][key].option;
        spreadSelect.appendChild(opt);
    });
    spreadSelect.value = previousSelection;

    // If cards are drawn, render them dynamically in the new language immediately
    if (lastDrawnCards.length > 0) {
        renderCards(lang, true);
    }
    
    // If the journal is currently open, refresh the list in the new language
    if (!journalModal.classList.contains('hidden')) {
        renderHistory();
    }
}

// Language Selector Buttons Event Listeners
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang === currentLang) return;
        setLanguage(selectedLang);
    });
});

// Copy Results to Clipboard (Formatted by Language)
copyBtn.addEventListener('click', () => {
    if (lastDrawnCards.length === 0) return;

    let textToCopy = "";
    const question = questionInput.value.trim();
    if (question) {
        if (currentLang === 'en') {
            textToCopy += `${uiTranslations[currentLang].promptHeader}"${question}"\n`;
        } else {
            textToCopy += `${uiTranslations[currentLang].promptHeader}「${question}」\n`;
        }
    }

    // Add Astrological Context
    const astroPrompt = compileAstroPrompt(currentLang);
    if (astroPrompt) {
        textToCopy += astroPrompt + "\n";
    }

    const spreadName = spreadsTranslations[currentLang][currentSpreadKey].name;
    const bodyTemplate = uiTranslations[currentLang].promptBody.replace("{spread}", spreadName);
    textToCopy += bodyTemplate;

    const spreadConfig = spreadsTranslations[currentLang][currentSpreadKey];
    lastDrawnCards.forEach((item, index) => {
        const cardName = getCardName(item.card, currentLang);
        const positionText = spreadConfig.positions[index];
        const statusStr = item.isReversed ? uiTranslations[currentLang].reversed : uiTranslations[currentLang].upright;

        if (currentLang === 'en') {
            textToCopy += `${index + 1}. ${positionText}: [${cardName}] - ${statusStr}\n`;
        } else {
            textToCopy += `${index + 1}. ${positionText}：【${cardName}】 - ${statusStr}\n`;
        }
    });

    textToCopy += uiTranslations[currentLang].promptFooter;

    navigator.clipboard.writeText(textToCopy).then(() => {
        copyFeedback.classList.add('show');
        setTimeout(() => {
            copyFeedback.classList.remove('show');
        }, 2000);
    }).catch(err => {
        alert(uiTranslations[currentLang].copyFailed);
        console.error('Failed to copy: ', err);
    });
});

// Initialize UI to English
setLanguage('en');
