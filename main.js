/* -------------------------------------------------------------------------- */
/*                               DATA VARIABLES                               */
/* -------------------------------------------------------------------------- */

/* ---------------------------- WORDS AND PHRASES --------------------------- */

const WORDS = {
    "我": {
        romanisation: "wà",
        meaning: "I, me"
    },

    "汝": {
        romanisation: "lìr",
        meaning: "you (informal, singular)"
    },

    "侬": {
        romanisation: "láng",
        meaning: "person"
    },

    "我侬": {
        romanisation: "wà-láng",
        meaning: "we, us"
    },

    "汝侬": {
        romanisation: "lìr-láng",
        meaning: "you (informal, plural), y'all"
    },

    "是": {
        romanisation: "si",
        meaning: "is, to be"
    },

    "名": {
        romanisation: "mñía",
        meaning: "name"
    },

    "叫": {
        romanisation: "kǐo",
        meaning: "to call, to name"
    },

    "的": {
        romanisation: "é",
        meaning: "of, 's"
    },

    "什么": {
        romanisation: "sìm-mih",
        meaning: "what"
    },

    "蜀": {
        romanisation: "jīt",
        meaning: "one (quantity)"
    },

    "两": {
        romanisation: "nng",
        meaning: "two (quantity)"
    },

    "三": {
        romanisation: "sñā",
        meaning: "three"
    },

    "四": {
        romanisation: "sǐ ",
        meaning: "four"
    },

    "五": {
        romanisation: "gor",
        meaning: "five"
    },

    "六": {
        romanisation: "lāk",
        meaning: "six"
    },

    "七": {
        romanisation: "qit",
        meaning: "seven"
    },

    "八": {
        romanisation: "pueh",
        meaning: "eight"
    },

    "九": {
        romanisation: "kàu",
        meaning: "nine"
    },

    "空": {
        romanisation: "khōng",
        meaning: "zero"
    },

    "十": {
        romanisation: "jāp",
        meaning: "ten"
    },

    "百": {
        romanisation: "pah",
        meaning: "hundred"
    },

    "千": {
        romanisation: "qeng",
        meaning: "thousand"
    },

    "万": {
        romanisation: "ban",
        meaning: "ten thousand"
    },

    "食": {
        romanisation: "jīah",
        meaning: "to eat"
    },

    "饭": {
        romanisation: "png",
        meaning: "rice"
    },

    "面": {
        romanisation: "mi",
        meaning: "noodles"
    },

    "糜": {
        romanisation: "bér",
        meaning: "porridge​/​congee"
    },

    "有": {
        romanisation: "u",
        meaning: "have"
    },

    "鸡": {
        romanisation: "kūe",
        meaning: "chicken"
    },

    "鱼": {
        romanisation: "hír",
        meaning: "fish"
    },

    "猪": {
        romanisation: "tīr",
        meaning: "pig"
    },

    "毋": {
        romanisation: "m",
        meaning: "not"
    },

    "个": {
        romanisation: "é",
        meaning: "counter word"
    },

    "啉": {
        romanisation: "lim",
        meaning: "to drink"
    },

    "水": {
        romanisation: "jùi",
        meaning: "water, drink"
    },

    "咖啡": {
        romanisation: "kō-pī",
        meaning: "coffee"
    },

    "茶": {
        romanisation: "té",
        meaning: "tea"
    },

    "牛奶": {
        romanisation: "gú-nī",
        meaning: "milk, cow's milk"
    },

    "抾": {
        romanisation: "khīoh",
        meaning: "take, pick up"
    },

    "佗落": {
        romanisation: "tò-lōh",
        meaning: "where"
    },

    "佗个": {
        romanisation: "tò-é",
        meaning: "which"
    },

    "按怎": {
        romanisation: "ǎn-jñùa",
        meaning: "how, why"
    },

    "什物": {
        romanisation: "sìm-mīh",
        meaning: "anything, something"
    },

    "妈": {
        romanisation: "má",
        meaning: "mum"
    },

    "老母": {
        romanisation: "lau-bù",
        meaning: "mother"
    },

    "爸": {
        romanisation: "pá",
        meaning: "dad"
    },

    "老爸": {
        romanisation: "lau-pe",
        meaning: "father"
    },

    "爸母": {
        romanisation: "pe-bù",
        meaning: "parents"
    },

    "俺妈": {
        romanisation: "àn-mà",
        meaning: "maternal grandmother"
    },

    "阿妈": {
        romanisation: "ā-mà",
        meaning: "paternal grandmother"
    },

    "俺公": {
        romanisation: "àn-kōng",
        meaning: "maternal grandfather"
    },

    "阿公": {
        romanisation: "ā-kōng",
        meaning: "paternal grandfather"
    },

    "公妈": {
        romanisation: "kōng-mà",
        meaning: "grandparents"
    },

    "大兄": {
        romanisation: "toa-hñīa",
        meaning: "older brother"
    },

    "阿兄": {
        romanisation: "ā-hñīa",
        meaning: "bro (older)"
    },

    "哥哥": {
        romanisation: "kōr-kōr",
        meaning: "bro (older, immature)"
    },

    "小弟": {
        romanisation: "siò-ti",
        meaning: "younger brother"
    },

    "阿弟": {
        romanisation: "ā-ti",
        meaning: "bro (younger)"
    },

    "大姊": {
        romanisation: "tua-jì",
        meaning: "older sister"
    },

    "阿姊": {
        romanisation: "ā-jì",
        meaning: "sis (older)"
    },

    "小妹": {
        romanisation: "sìo-be",
        meaning: "younger sister"
    },

    "阿妹": {
        romanisation: "ā-ber",
        meaning: "sis (younger)"
    },

    "兄弟姊妹": {
        romanisation: "hñīa-ti jì-ber",
        meaning: "siblings"
    },

    "丈夫囝": {
        romanisation: "tā-pōr-kñìa",
        meaning: "son"
    },

    "查某囝": {
        romanisation: "jā-bòr-kñìa",
        meaning: "daughter"
    },

    "囡仔": {
        romanisation: "gìn-à",
        meaning: "child"
    },

    "家庭": {
        romanisation: "kē-téng",
        meaning: "family"
    },

    "哈啰": {
        romanisation: "hā-lo",
        meaning: "hello"
    },

    "喂": {
        romanisation: "ēh",
        meaning: "hey"
    },

    "食饱未": {
        romanisation: "jīah-pà bue",
        meaning: "how are you, have you eaten?"
    },

    "真久无看": {
        romanisation: "jīn-kù bó-khñǔa",
        meaning: "long time no see"
    },

    "做什么": {
        romanisation: "jǒ-sìm-mih",
        meaning: "what are you doing?, why"
    },

    "什么代志": {
        romanisation: "sìm-mih tai-jí",
        meaning: "what's the problem​/matter?"
    },

    "什么讲头": {
        romanisation: "sìm-mih kàng-tháu",
        meaning: "what's going on?, what's up?"
    },

    "好": {
        romanisation: "hò",
        meaning: "good"
    },

    "𠢕早": {
        romanisation: "gáu-jà",
        meaning: "good morning (greeting, formal), good that you are early"
    },

    "汝早": {
        romanisation: "lìr-jà",
        meaning: "good morning (greeting, informal)"
    },

    "早起好": {
        romanisation: "jài-khì-hò",
        meaning: "good morning"
    },

    "下晡好": {
        romanisation: "e-pōr-hò",
        meaning: "good afternoon"
    },

    "暗暝好": {
        romanisation: "ǎm-máe-hò",
        meaning: "good evening"
    },

    "拜拜": {
        romanisation: "bāi bāi",
        meaning: "bye bye"
    },

    "慢慢行": {
        romanisation: "ban-ban kñía",
        meaning: "be safe​/​leave carefully"
    },

    "平安": {
        romanisation: "píng-ān",
        meaning: "peace, be safe"
    },

    "细腻": {
        romanisation: "sǔe-zi",
        meaning: "be safe, careful"
    },

    "顺风": {
        romanisation: "sun-hōrng",
        meaning: "farewell​/​bon-voyage"
    },

    "一": {
        romanisation: "it",
        meaning: "one (counting)"
    },

    "幺": {
        romanisation: "īo",
        meaning: "one (reciting numbers)"
    },

    "二": {
        romanisation: "li",
        meaning: "two (counting, reciting numbers)"
    },

    "号": {
        romanisation: "ho",
        meaning: "number, day of month"
    },

    "号码": {
        romanisation: "ho-bè",
        meaning: "code, number"
    },

    "电话": {
        romanisation: "tien-we",
        meaning: "phone"
    },

    "敲电话": {
        romanisation: "khǎ tien-we",
        meaning: "call (a phone number)"
    },

    "镭": {
        romanisation: "lūi",
        meaning: "money"
    },

    "箍": {
        romanisation: "kōr",
        meaning: "dollar"
    },

    "角": {
        romanisation: "kak",
        meaning: "ten cents"
    },

    "占": {
        romanisation: "jīam",
        meaning: "cent"
    },

    "日¹": {
        romanisation: "zīt",
        meaning: "day (unit), day of month"
    },

    "日²": {
        romanisation: "līt",
        meaning: "day, sun"
    },

    "月¹": {
        romanisation: "gōeh",
        meaning: "month"
    },

    "月²": {
        romanisation: "gērh",
        meaning: "moon"
    },

    "年": {
        romanisation: "ní",
        meaning: "year"
    },

    "礼拜": {
        romanisation: "lè-pǎi",
        meaning: "week, day of week, Sunday"
    },

    "拜一": {
        romanisation: "pǎi-it",
        meaning: "Monday"
    },

    "拜二": {
        romanisation: "pǎi-li",
        meaning: "Tuesday"
    },

    "拜三": {
        romanisation: "pǎi-sñā",
        meaning: "Wednesday"
    },

    "拜四": {
        romanisation: "pǎi-sǐ",
        meaning: "Thursday"
    },

    "拜五": {
        romanisation: "pǎi-gor",
        meaning: "Friday"
    },

    "拜六": {
        romanisation: "pǎi-lāk",
        meaning: "Saturday"
    },

    "拜日": {
        romanisation: "pǎi-līt",
        meaning: "Sunday"
    },

    "今日": {
        romanisation: "kīn-līt",
        meaning: "today"
    },

    "昨日": {
        romanisation: "jā-līt",
        meaning: "yesterday"
    },

    "明日": {
        romanisation: "má-līt",
        meaning: "tomorrow"
    },

    "后日": {
        romanisation: "au-līt",
        meaning: "day after tomorrow"
    },

    "前日": {
        romanisation: "jéng-līt",
        meaning: "day before yesterday"
    },

    "点": {
        romanisation: "tìam",
        meaning: "hour (stating time), dot​/​point"
    },

    "点钟": {
        romanisation: "tìam-jīng",
        meaning: "hour (unit), clock"
    },

    "字": {
        romanisation: "zi",
        meaning: "five minutes"
    },

    "分": {
        romanisation: "hūn",
        meaning: "minute (stating time)"
    },

    "分钟": {
        romanisation: "hūn-jīng",
        meaning: "minute (unit)"
    },

    "早起": {
        romanisation: "jà-khì",
        meaning: "morning"
    },

    "下晡": {
        romanisation: "e-pōr",
        meaning: "afternoon, noon"
    },

    "暗暝": {
        romanisation: "ǎm-máe",
        meaning: "evening"
    },

    "天光": {
        romanisation: "thnī-kn̄g",
        meaning: "sunrise, dawn, early morning"
    },

    "落山": {
        romanisation: "lōh-sñūa",
        meaning: "sunset, dusk"
    },

    "半暝": {
        romanisation: "pnǔa-máe",
        meaning: "late night, midnight"
    },

    "感谢": {
        romanisation: "kàm-sia",
        meaning: "thank you, thanks"
    },

    "好势": {
        romanisation: "hò-sě",
        meaning: "it's ok, good"
    },

    "免啦": {
        romanisation: "mìen lā",
        meaning: "no worries, you are welcome"
    },

    "𣍐要紧": {
        romanisation: "bue-iǎu kìn",
        meaning: "don't worry, don't be in a rush"
    },

    "无什物": {
        romanisation: "bó sìm-mīh",
        meaning: "it's nothing, don't bother"
    },

    "所哩": {
        romanisation: "sòr-lī",
        meaning: "sorry"
    },

    "哈": {
        romanisation: "hā",
        meaning: "huh?"
    },

    "歹势": {
        romanisation: "phài-sě",
        meaning: "excuse me, sorry, I'm embarrassed"
    },

    "敲齪": {
        romanisation: "kháu-jak",
        meaning: "sorry to trouble​/​bother you"
    },

    "哈哈": {
        romanisation: "hā-hā",
        meaning: "ha-ha, laughter"
    },

    "干杯": {
        romanisation: "kān-pōe",
        meaning: "cheers, bottoms up"
    },

    "天时": {
        romanisation: "thnī-sí",
        meaning: "weather"
    },

    "凉": {
        romanisation: "liáng",
        meaning: "cool, breezy"
    },

    "热": {
        romanisation: "zūah",
        meaning: "warm, sweltering"
    },

    "好天": {
        romanisation: "hò-thnī",
        meaning: "sunny, good"
    },

    "乌阴": {
        romanisation: "ōr-im",
        meaning: "cloudy, gloomy"
    },

    "落雨": {
        romanisation: "lōh-hor",
        meaning: "rainy"
    },

    "日头": {
        romanisation: "līt-tháu",
        meaning: "sun"
    },

    "月娘": {
        romanisation: "gērh-níu",
        meaning: "moon"
    },

    "云": {
        romanisation: "hún",
        meaning: "cloud"
    },

    "乌云": {
        romanisation: "ōr-hún",
        meaning: "dark​/​rain cloud"
    },

    "雨": {
        romanisation: "hor",
        meaning: "rain"
    },

    "霆雷": {
        romanisation: "tán-lúi",
        meaning: "thunder, to hear thunder"
    }
};

/* ------------------------------- TOPIC DATA ------------------------------- */

const TOPICS = [
    {
        id: "me-and-you",

        name: "Me And You",
        desc: "A simple and introductory topic to refer to yourself and others",

        words: ["我", "汝", "侬", "我侬", "汝侬", "是"]
    },

    {
        id: "names",

        name: "Names",
        desc: "How to introduce yourself to others",

        words: ["名", "叫", "的", "什么"]
    },

    {
        id: "numbers-1",

        name: "Numbers I",
        desc: "Say basic numbers from 0 to 10, as well as bigger numbers",

        words: ["蜀", "两", "三", "四", "五", "六", "七", "八", "九", "空", "十", "百", "千", "万"]
    },

    {
        id: "food",

        name: "Food",
        desc: "Order simple food and drinks",

        words: ["食", "饭", "面", "糜", "有", "鸡", "鱼", "猪", "毋", "个", "啉", "水", "咖啡", "茶", "牛奶", "抾"]
    },

    {
        id: "questions",

        name: "Questions",
        desc: "Ask questions and how to clarify doubts",

        words: ["佗落", "佗个", "按怎", "什物"]
    },

    {
        id: "family",

        name: "Family",
        desc: "Describe your family members and their relationship with you",

        words: ["妈", "老母", "爸", "老爸", "爸母", "俺妈", "阿妈", "俺公", "阿公", "公妈", "大兄", "阿兄", "哥哥", "小弟", "阿弟", "大姊", "阿姊", "小妹", "阿妹", "兄弟姊妹", "丈夫囝", "查某囝", "囡仔", "家庭"]
    },

    {
        id: "phrases-1",

        name: "Phrases I",
        desc: "Say simple phrases to greet and say goodbye to people",

        words: ["哈啰", "喂", "食饱未", "真久无看", "做什么", "好", "𠢕早", "汝早", "早起好", "下晡好", "暗暝好", "拜拜", "慢慢行", "平安", "细腻", "顺风"]
    },

    {
        id: "numbers-2",

        name: "Numbers II",
        desc: "Call phone numbers and learn how to count items and money",

        words: ["一", "幺", "二", "号", "号码", "电话", "敲电话", "镭", "箍", "角", "占"]
    },

    {
        id: "date-and-time",

        name: "Date and Time",
        desc: "Describe the calendar, dates and the time",

        words: ["日¹", "日²", "月¹", "月²", "年", "礼拜", "拜一", "拜二", "拜三", "拜四", "拜五", "拜六", "拜日", "今日", "昨日", "明日", "后日", "前日", "点", "点钟", "字", "分", "分钟"]
    },

    {
        id: "day-and-night",

        name: "Day and Night",
        desc: "Talk about different times of the day",

        words: ["早起", "下晡", "暗暝", "天光", "落山", "半暝"]
    },

    {
        id: "phrases-2",

        name: "Phrases II",
        desc: "Thank and apologise to others",

        words: ["感谢", "好势", "免啦", "𣍐要紧", "无什物", "所哩", "哈", "歹势", "敲齪", "哈哈", "干杯"]
    },

    {
        id: "weather",

        name: "Weather",
        desc: "Talk about the weather and objects in the sky",

        words: ["天时", "凉", "热", "好天", "乌阴", "落雨", "日头", "月娘", "云", "乌云", "雨", "霆雷"]
    }
];

/* -------------------------------------------------------------------------- */
/*                               STATE VARIABLES                              */
/* -------------------------------------------------------------------------- */

let isHeaderOpen = false;
let hasGameStarted = false;

/** @type {number | null} */
let closedHeaderBtnsIntervalId = null;

/** @type {AbortController | null} */
let footerImgEventAborter = null;

/** @type {number | null} */
let footerImgIntervalId = null;

/** @type {AbortController | null} */
let gameAborter = null;

/** @type {number | null} */
let gameAnswersIntervalId = null;

/** @type {number | null} */
let gameTimeoutTimeoutId = null;

/** @type {number | null} */
let gameTimerIntervalId = null;

let isMotionReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", ({ matches }) => isMotionReduced = matches);

/* -------------------------------------------------------------------------- */
/*                                  ELEMENTS                                  */
/* -------------------------------------------------------------------------- */

const header = document.querySelector("body > header");
const [headerTitleContainer, headerNavContainer, closedHeaderBar] = header.querySelectorAll("& > div"); // "const [] = " destructs an "array-like" object (objects with *[Symbol.iterator]() generator function (functions that start with a "*") which return values in a sequential order each time it is run), which allows you to easily assign multiple variables to each value of the object. "&" means the current element that is queried from

const headerNavSections = headerNavContainer.querySelectorAll("& > section");

const resetSiteBtn = document.getElementById("reset-site-btn");
const toggleFullscreenBtn = document.getElementById("toggle-fullscreen-btn");
const openHeaderBtn = document.getElementById("open-header-btn");

/* --------------------------------- FOOTER --------------------------------- */

const footer = document.querySelector("body > footer");
const footerImg = footer.querySelector("& > img");

/* ------------------------------ MAIN CONTENT ------------------------------ */

const mainElt = document.querySelector("main");
const toTopBtn = document.getElementById("to-top-btn");

/* ------------------------------ SECTION PAGES ----------------------------- */

const pronunciationGuideTables = mainElt.querySelectorAll("& > div[data-page-id=\"pronunciation-guide\"] table");

const listOfTopics = document.getElementById("list-of-topics");

for (const { id, name } of TOPICS) {
    const listItem = document.createElement("li");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.topicId = id;
    btn.textContent = name;

    listItem.appendChild(btn);
    listOfTopics.appendChild(listItem);
}

const listOfTopicsBtns = listOfTopics.querySelectorAll("& button");

const topicCard = document.getElementById("topic-card");
const topicCardSection = topicCard.parentElement;

const topicCardDesc = topicCard.querySelector("& > p");
const topicCardPhrases = topicCard.querySelector("& > div");

/* -------------------------------- MINIGAME -------------------------------- */

const gameBounds = document.getElementById("game-bounds");

const gameTitle = mainElt.querySelector("& > div[data-page-id=\"minigame\"] > h1");
const gameDesc = mainElt.querySelector("& > div[data-page-id=\"minigame\"] > p");

const [gameAnswers, gameQuestions, gameUI] = gameBounds.querySelectorAll("& > div");
const [gameSettingsSection, gameEndSection] = gameBounds.querySelectorAll("& > section");

const gameSettingsForm = gameSettingsSection.querySelector("& > form");
const gameSettingsTopics = gameSettingsForm.querySelector("& > div > fieldset:nth-child(1)");

const gameTimeLimitMinutesOption = document.getElementById("time-minutes");
const gameTimeLimitSecondsOption = document.getElementById("time-seconds");

const gameScore = document.getElementById("game-score");
const gameTimer = document.getElementById("game-timer");

const gameCountdown = document.getElementById("game-countdown");

const gameFinalScore = document.getElementById("game-final-score");
const gameRestartBtn = gameEndSection.querySelector("& > button");

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

/* ------------------------------ WINDOW (MAIN) ----------------------------- */

addEventListener("DOMContentLoaded", () => { // wait for the site to finish loading the HTML content
    requestAnimationFrame(() => { // wait for the browser to render the site once before applying the styles to properly display the transition
        headerTitleContainer.style.left = "0%";

        headerNavSections.item(0).style.left = "0%";
        headerNavSections.item(1).style.right = "0%"

        footerImg.style.rotate = "0deg";
        openHeader();
    });
}, { once: true });

/* --------------------------------- HEADER --------------------------------- */

headerNavContainer.addEventListener("click", ({ target }) => {
    if (!(target instanceof HTMLButtonElement)) return; // if the clicked element is not a button, don't proceed with the callback function

    closeHeader();
    openPage(target.dataset.openPageId);
});

resetSiteBtn.addEventListener("click", () => {
    closePage();
    openHeader();
});

toggleFullscreenBtn.addEventListener("click", () => document.fullscreenElement === document.documentElement ? document.exitFullscreen?.() : document.documentElement.requestFullscreen?.());

openHeaderBtn.addEventListener("click", () => {
    closePage();
    openHeader();
});

/* --------------------------------- FOOTER --------------------------------- */

/* ------------------------------ MAIN CONTENT ------------------------------ */

toTopBtn.addEventListener("click", () => mainElt.scrollTo({
    top: 0,
    behaviour: "smooth"
}));

/* --------------------------- PRONUNCIATION GUIDE -------------------------- */

const pronunciationGuideAudioFileCache = {};
for (const table of pronunciationGuideTables) {
    const btns = table.querySelectorAll("& button");
    for (const btn of btns) {
        const { soundSrc } = btn.dataset;
        if (soundSrc in pronunciationGuideAudioFileCache) continue;

        const audio = new Audio(soundSrc);
        audio.preload = "auto"; // load the audio file immediately

        pronunciationGuideAudioFileCache[soundSrc] = audio;
    }

    table.addEventListener("click", ({ target }) => {
        if (!(target instanceof HTMLButtonElement)) return;
        const { soundSrc, soundStart, soundLength } = target.dataset;

        const audio = pronunciationGuideAudioFileCache[soundSrc].cloneNode(true);
        audio.addEventListener("canplaythrough", async () => {
            audio.currentTime = +soundStart / 1000;
            await audio.play();
        }, { once: true });

        audio.addEventListener("playing", () => setTimeout(audio.pause.bind(audio), +soundLength), { once: true });
    });
}

/* ----------------------------- VOCABULARY LIST ---------------------------- */

listOfTopics.addEventListener("click", ({ target }) => {
    if (!(target instanceof HTMLButtonElement)) return;
    const { topicId } = target.dataset;

    for (const btn of listOfTopicsBtns) {
        btn.style.filter = "";
        btn.style.scale = "";
    }

    if (topicId === topicCard.dataset.currentTopic) {
        closeTopicCard();
        return;
    }

    target.style.filter = "brightness(150%)";
    target.style.scale = "105%";

    openTopicCard(topicId);
});

/* -------------------------------- MINIGAME -------------------------------- */

const gameBoundsResizer = new ResizeObserver(() => { // allows the browser to listen to resize events on a particular event without creating callback functions each time a listener is added
    const {
        width: gameBoundsWidth,
        height: gameBoundsHeight
    } = gameBounds.getBoundingClientRect();

    const answerBoxes = document.querySelectorAll(".answer-box");
    for (const box of answerBoxes) {
        const {
            width: boxWidth,
            height: boxHeight
        } = box.getBoundingClientRect();

        const x = parseFloat(box.style.left);
        const y = parseFloat(box.style.top);

        if (x < 0) box.style.left = "0px";
        if (x >= gameBoundsWidth - boxWidth) box.style.left = `${gameBoundsWidth - boxWidth - 1}px`;

        if (y < 0) box.style.top = "0px";
        if (y >= gameBoundsHeight - boxHeight) box.style.top = `${gameBoundsHeight - boxHeight - 1}px`;
    }
});

gameSettingsForm.addEventListener("submit", (evt) => {
    evt.preventDefault(); // prevent default form redirect after submitting the form
    const data = new FormData(gameSettingsForm);

    const topics = [];
    for (const { id } of TOPICS) data.get(`topic-${id}`) === "on" && topics.push(id);

    const timeLimitMinutes = +data.get("time-minutes");
    const timeLimitSeconds = +data.get("time-seconds");

    const difficulty = data.get("difficulty");

    const gameSettingsSectionAborter = new AbortController();

    gameSettingsSection.style.top = "-100%";
    gameSettingsSection.addEventListener("transitionend", ({ target }) => {
        if (target !== gameSettingsSection || gameSettingsSection.style.top !== "-100%") return;

        gameSettingsSection.style.display = "none";
        gameSettingsSectionAborter.abort();
    }, { signal: gameSettingsSectionAborter.signal });

    gameAnswers.style.display = "block";
    gameQuestions.style.display = "flex";
    gameUI.style.display = "block";

    gameAnswers.replaceChildren([]);
    gameQuestions.replaceChildren([]);

    gameScore.textContent = "Score: 0";
    gameTimer.textContent = `Time Left: ${data.get("time-minutes")}:${data.get("time-seconds").padStart(2, "0")}`

    const gameCountdownAborter = new AbortController();

    gameCountdown.textContent = "4";
    gameCountdown.style.transitionProperty = "none";
    gameCountdown.style.scale = "0%";

    const gameCountdownIntervalId = setInterval(() => {
        gameCountdown.style.transitionProperty = "none";
        gameCountdown.style.scale = "100%";

        const numOfSecsLeft = +gameCountdown.textContent;
        gameCountdown.textContent = `${numOfSecsLeft - 1 || "GO!"}`;

        requestAnimationFrame(() => requestAnimationFrame(() => {
            gameCountdown.style.transitionProperty = "scale";
            gameCountdown.style.scale = "0%";
        }));
    }, 1000);

    gameCountdown.addEventListener("transitionend", () => {
        if (gameCountdown.textContent !== "GO!") return;

        gameCountdown.style.display = "none";

        startGame({ topics, timeLimitSecs: timeLimitMinutes * 60 + timeLimitSeconds, difficulty });

        gameCountdownAborter.abort();
        clearInterval(gameCountdownIntervalId);
    }, { signal: gameCountdownAborter.signal });

    gameTitle.style.marginBlockStart = "0rem";
    gameTitle.style.marginBlockEnd = "0rem";
    gameTitle.style.fontSize = "0rem";
    gameTitle.addEventListener("transitionend", () => gameTitle.style.display = "none", { once: true });

    gameDesc.style.marginBlockStart = "0rem";
    gameDesc.style.marginBlockEnd = "0rem";
    gameDesc.style.fontSize = "0rem";
    gameDesc.addEventListener("transitionend", () => gameDesc.style.display = "none", { once: true });
});

for (const { id, name } of TOPICS) {
    const inputId = `topic-${id}`;

    const div = document.createElement("div");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = inputId;
    input.name = inputId;
    input.title = name;
    input.placeholder = "on";
    input.checked = true;

    const label = document.createElement("label");
    label.htmlFor = inputId;
    label.textContent = name;

    div.appendChild(input);
    div.appendChild(label);

    gameSettingsTopics.appendChild(div);
}

gameTimeLimitMinutesOption.addEventListener("input", () => {
    const { value: minutes } = gameTimeLimitMinutesOption;

    if (minutes < 0) gameTimeLimitMinutesOption.value = 0;
    if (minutes <= 0 && gameTimeLimitSecondsOption.value <= 0) gameTimeLimitSecondsOption.value = "01";
});

gameTimeLimitSecondsOption.addEventListener("input", () => {
    const { value: seconds } = gameTimeLimitSecondsOption;

    if (seconds < 0) {
        gameTimeLimitMinutesOption.value--;
        gameTimeLimitSecondsOption.value = 59;
    }

    if (seconds > 59) {
        gameTimeLimitMinutesOption.value++;
        gameTimeLimitSecondsOption.value = 0;
    }

    if (gameTimeLimitMinutesOption.value <= 0 && seconds <= 0) gameTimeLimitSecondsOption.value = 1;
    gameTimeLimitSecondsOption.value = `${gameTimeLimitSecondsOption.value}`.padStart(2, "0");
});

/* -------------------------------------------------------------------------- */
/*                               PAGE FUNCTIONS                               */
/* -------------------------------------------------------------------------- */

function openPage(pageId) {
    mainElt.scrollTo({
        top: 0,
        behavior: "instant"
    }); // scroll to the top immediately when a new page is open

    mainElt.style.display = "flex";
    mainElt.style.transitionDelay = "400ms";

    requestAnimationFrame(() => {
        mainElt.style.opacity = "100%";

        mainElt.style.rotate = "0deg";
        mainElt.style.scale = "100%";
        mainElt.style.translate = "0% 0%";
    });

    mainElt.dataset.currentPage = pageId;
}

function closePage() {
    const mainEltAborter = new AbortController();

    mainElt.style.opacity = "0%";

    mainElt.style.transitionDelay = "0ms";

    mainElt.style.rotate = "20deg";
    mainElt.style.scale = "80%";
    mainElt.style.translate = "0% 20%";

    mainElt.addEventListener("transitionend", ({ target }) => {
        if (target !== mainElt || mainElt.style.translate !== "0% 20%") return;

        mainElt.style.display = "none";
        mainEltAborter.abort();
    }, { signal: mainEltAborter.signal });
}

function openHeader() {
    if (isHeaderOpen) return;
    isHeaderOpen = true;

    header.style.translate = "0% 0%";

    headerTitleContainer.style.display = "block";
    headerNavContainer.style.display = "block";

    const closedHeaderBarAborter = new AbortController();

    closedHeaderBar.style.top = "-100%";
    closedHeaderBar.style.transitionDelay = "0ms";
    closedHeaderBar.addEventListener("transitionend", ({ target }) => { // transitionend events occur when a CSS transition finishes
        if (target !== closedHeaderBar || closedHeaderBar.style.top !== "-100%") return; // stop the event if children elements has finished its transitions or if the parent element has incorrect styles

        closedHeaderBar.style.display = "none";
        closedHeaderBarAborter.abort();
    }, { signal: closedHeaderBarAborter.signal });

    if (closedHeaderBtnsIntervalId !== null) {
        clearInterval(closedHeaderBtnsIntervalId);
        closedHeaderBtnsIntervalId = null;
    }

    footer.style.bottom = "-44%";
    footer.addEventListener("transitionend", () => {
        footerImgEventAborter = new AbortController(); // abort controllers allows us to remove event listeners all at once without needing to reference the callback functions themselves

        let isRotating = false;
        let rotationSpeed = 0;

        /** @type {number | null} */
        let startingX = null;

        /** @type {number | null} */
        let startingRotation = null;

        footerImg.style.transitionProperty = "none";
        footerImg.addEventListener("pointerdown", ({ pointerId, clientX }) => {
            if (isRotating) return;
            isRotating = true;

            rotationSpeed = 0;

            startingX ??= clientX; // will only be assigned if startingX is nullish (??= is the nullish-coalescing operator)
            startingRotation ??= parseFloat(footerImg.style.rotate);

            footerImg.setPointerCapture(pointerId); // always listen to the pointer even when it leaves the element
        }, { signal: footerImgEventAborter.signal });

        footerImg.addEventListener("pointerup", ({ pointerId }) => {
            if (!isRotating) return;
            isRotating = false;

            startingX = null;
            startingRotation = null;

            footerImg.releasePointerCapture(pointerId);
        }, { signal: footerImgEventAborter.signal });

        footerImg.addEventListener("pointermove", ({ clientX, movementX }) => {
            if (!isRotating || startingX === null || startingRotation === null) return;

            rotationSpeed = movementX * 0.4;
            footerImg.style.rotate = `${startingRotation + (clientX - startingX) / 3}deg`;
        }, { signal: footerImgEventAborter.signal });

        if (footerImgIntervalId === null) footerImgIntervalId = setInterval(() => {
            if (isRotating) return;

            const prevRotation = parseFloat(footerImg.style.rotate);
            footerImg.style.rotate = `${prevRotation + Math.floor(rotationSpeed * 1000) / 1000}deg`;

            rotationSpeed *= 0.97;
        });
    }, { once: true }); // only listen to any transitionend event once before it stops listening
}

function closeHeader() {
    if (!isHeaderOpen) return;
    isHeaderOpen = false;

    header.style.translate = "0% -100%";

    const closedHeaderBarAborter = new AbortController();

    closedHeaderBar.style.display = "flex";
    closedHeaderBar.style.transitionDelay = "400ms";
    requestAnimationFrame(() => closedHeaderBar.style.top = "100%");

    closedHeaderBar.addEventListener("transitionend", ({ target }) => {
        if (target !== closedHeaderBar || header.style.translate !== "0% -100%") return;

        headerTitleContainer.style.display = "none";
        headerNavContainer.style.display = "none";

        closedHeaderBarAborter.abort();
    }, { signal: closedHeaderBarAborter.signal });

    let toggleFullscreenBtnFrameIdx = 0;
    let openHeaderBtnFrameIdx = 0;

    if (closedHeaderBtnsIntervalId === null) closedHeaderBtnsIntervalId = setInterval(() => {
        const isToggleFullscreenBtnActive = toggleFullscreenBtn.matches(":active");
        const isFullscreen = document.fullscreenElement === document.documentElement;

        isToggleFullscreenBtnActive
            ? toggleFullscreenBtnFrameIdx < 99 + (100 * +isFullscreen) && toggleFullscreenBtnFrameIdx++
            : toggleFullscreenBtnFrameIdx > (160 * +isFullscreen)
                ? toggleFullscreenBtnFrameIdx--
                : isFullscreen && toggleFullscreenBtnFrameIdx < 160 && toggleFullscreenBtnFrameIdx++;

        toggleFullscreenBtn.style.backgroundPositionX = `${-toggleFullscreenBtnFrameIdx * 100}%`;

        const isOpenHeaderBtnActive = openHeaderBtn.matches(":active");
        isOpenHeaderBtnActive ? openHeaderBtnFrameIdx < 149 && openHeaderBtnFrameIdx++ : openHeaderBtnFrameIdx > 0 && openHeaderBtnFrameIdx--;

        openHeaderBtn.style.backgroundPositionX = `${-openHeaderBtnFrameIdx * 100}%`;
    }, 8);

    footer.style.bottom = "-100%";

    footerImgEventAborter?.abort(); // "?." means that if footerImgEventAborter is not nullish (!== null), then run the "abort" method
    if (footerImgIntervalId !== null) {
        clearInterval(footerImgIntervalId);
        footerImgIntervalId = null;
    }
}

function openTopicCard(topicId) {
    const {
        desc: topicDesc,
        words: topicWords
    } = TOPICS.find(({ id }) => id === topicId);

    topicCard.dataset.currentTopic = topicId;
    topicCardSection.style.display = "block";

    topicCardDesc.textContent = topicDesc;

    topicCardPhrases.replaceChildren([]);
    for (const word of topicWords) {
        const {
            romanisation,
            meaning
        } = WORDS[word];

        const article = document.createElement("article");

        const heading = document.createElement("h3");
        const ruby = document.createElement("ruby"); // ruby elements allow us to easily romanisations of Chinese characters

        const rubyChar = document.createTextNode(word);
        const rubyFallbackStart = document.createElement("rp"); // used to separate ruby text from the main text if the browser does not support properly rendered ruby text
        rubyFallbackStart.textContent = " (";

        const rubyText = document.createElement("rt");
        rubyText.textContent = romanisation;

        const rubyFallbackEnd = document.createElement("rp");
        rubyFallbackEnd.textContent = ") ";

        ruby.appendChild(rubyChar);

        ruby.appendChild(rubyFallbackStart);
        ruby.appendChild(rubyText);
        ruby.appendChild(rubyFallbackEnd);

        heading.appendChild(ruby);

        const desc = document.createElement("p");
        desc.textContent = meaning;

        article.appendChild(heading);
        article.appendChild(desc);

        topicCardPhrases.appendChild(article);
    }
}

function closeTopicCard() {
    topicCard.dataset.currentTopic = "";
    topicCardSection.style.display = "none";
}

function startGame({ topics, timeLimitSecs, difficulty }) {
    if (hasGameStarted) return;

    hasGameStarted = true;
    gameAborter = new AbortController();

    let score = 0;

    /** @type {HTMLElement | null} */
    let selectedBox = null;

    let selectedBoxLastX = "0px";
    let selectedBoxLastY = "0px";

    let selectedBoxRotation = 0;

    let selectedBoxOffsetX = 0;
    let selectedBoxOffsetY = 0;

    let selectedBoxWidth = 0;
    let selectedBoxHeight = 0;

    gameAnswers.addEventListener("pointerdown", ({ target, clientX, clientY, pointerId }) => {
        if (selectedBox !== null) return;

        while (!target.classList.contains("answer-box") && target !== document.body) target = target.parentElement;
        if (target === document.body) return;

        selectedBox = target;

        gameAnswers.removeChild(target);
        gameAnswers.appendChild(target);

        const previousRotation = target.style.rotate;
        target.style.rotate = "0deg";

        const { left, top, width, height } = target.getBoundingClientRect();
        target.style.rotate = previousRotation;

        selectedBoxLastX = target.style.left;
        selectedBoxLastY = target.style.top;

        selectedBoxRotation = +target.dataset.rotation;

        selectedBoxOffsetX = clientX - left;
        selectedBoxOffsetY = clientY - top;

        target.style.transitionProperty = "scale";
        target.style.transformOrigin = `${selectedBoxOffsetX}px ${Math.min(selectedBoxOffsetY, selectedBoxHeight / 2)}px`;

        selectedBoxWidth = width;
        selectedBoxHeight = height;

        gameAnswers.setPointerCapture(pointerId);
    }, { signal: gameAborter.signal });

    gameAnswers.addEventListener("pointerup", ({ clientX, clientY, pointerId }) => {
        if (selectedBox === null) return;

        const {
            width: gameAnswersWidth,
            height: gameAnswersHeight
        } = gameAnswers.getBoundingClientRect();

        const x = parseFloat(selectedBox.style.left);
        const y = parseFloat(selectedBox.style.top);

        selectedBox.style.transitionProperty = "left, top, scale";

        if (x < 0 || x >= gameAnswersWidth - selectedBoxWidth || y < 0 || y >= gameAnswersHeight - selectedBoxHeight) {
            selectedBox.style.left = selectedBoxLastX;
            selectedBox.style.top = selectedBoxLastY;

            const {
                left: gameQuestionsLeft,
                right: gameQuestionsRight,

                top: gameQuestionsTop,
                bottom: gameQuestionsBtm
            } = gameQuestions.getBoundingClientRect();

            if (clientX >= gameQuestionsLeft && clientX <= gameQuestionsRight && clientY >= gameQuestionsTop && clientY <= gameQuestionsBtm) {
                const questionBoxes = document.querySelectorAll(".question-box");
                for (const box of questionBoxes) {
                    const { // checking along the y-axis may make it hard to match boxes
                        left: boxLeft,
                        right: boxRight
                    } = box.getBoundingClientRect();

                    if (clientX >= boxLeft && clientX <= boxRight) {
                        if (box.dataset.answer === selectedBox.dataset.answer) {
                            box.style.scale = "0%";
                            box.addEventListener("transitionend", () => box.remove(), { once: true });

                            selectedBox.remove();

                            score++;
                            gameScore.textContent = `Score: ${score}`;

                            break;
                        }

                        let numOfMovementTicks = 40;
                        const movementIntervalId = setInterval(() => {
                            box.style.translate = `${Math.random() * 10 - 5}px 0px`;

                            numOfMovementTicks--;
                            if (numOfMovementTicks < 0) clearInterval(movementIntervalId);
                        }, 10);

                        break;
                    }
                }
            }
        }

        selectedBox.dataset.rotation = `${selectedBoxRotation}`;
        selectedBox = null;

        gameAnswers.releasePointerCapture(pointerId);
    }, { signal: gameAborter.signal });

    gameAnswers.addEventListener("pointermove", ({ clientX, clientY, movementX }) => {
        if (selectedBox === null) return;

        const {
            left: gameBoundsLeft,
            top: gameBoundsTop,

            width: gameBoundsWidth,
            height: gameBoundsHeight
        } = gameBounds.getBoundingClientRect();

        const x = clientX - gameBoundsLeft;
        const y = clientY - gameBoundsTop;

        const left = x - selectedBoxOffsetX;
        const top = y - selectedBoxOffsetY;

        const clampedLeft = Math.min(Math.max(0, left), gameBoundsWidth - selectedBoxWidth);
        const clampedTop = Math.min(Math.max(0, top), gameBoundsHeight - selectedBoxHeight);

        selectedBoxRotation += movementX;

        selectedBox.style.left = `${clampedLeft}px`;
        selectedBox.style.top = `${clampedTop}px`;

        if ((clampedLeft === left && clampedTop === top) || x < 0 || x >= gameBoundsWidth || y < 0 || y >= gameBoundsHeight) return;

        selectedBoxRotation -= movementX * Math.min(selectedBoxHeight / selectedBoxWidth, 1);

        const previousRotation = selectedBox.style.rotate;
        selectedBox.style.rotate = "0deg";

        const {
            left: selectedBoxLeft,
            top: selectedBoxTop
        } = selectedBox.getBoundingClientRect();

        selectedBox.style.rotate = previousRotation;

        selectedBoxOffsetX = clientX - selectedBoxLeft;
        selectedBoxOffsetY = clientY - selectedBoxTop;

        selectedBox.style.transformOrigin = `${selectedBoxOffsetX}px ${Math.min(selectedBoxOffsetY, selectedBoxHeight / 2)}px`;
    }, { signal: gameAborter.signal });

    gameBoundsResizer.observe(gameBounds);
    gameAnswersIntervalId = setInterval(() => {
        const answerBoxes = document.querySelectorAll(".answer-box");
        for (const box of answerBoxes) {
            if (box === selectedBox) {
                selectedBoxRotation += ((selectedBoxOffsetX / selectedBoxWidth - 0.5) * (-Math.atan2(selectedBoxHeight, selectedBoxWidth) * 180 / Math.PI) * Math.max((0.5 - selectedBoxOffsetY / selectedBoxHeight) * 2, 0) - selectedBoxRotation) / 25;
                selectedBox.style.rotate = `${selectedBoxRotation * +!isMotionReduced}deg`;

                continue;
            }

            box.dataset.rotation = `${+box.dataset.rotation * 0.96}`;
            box.style.rotate = `${+box.dataset.rotation * +!isMotionReduced}deg`;
        }
    });

    let timeoutLength;
    let minTimeoutLength;

    let startingNumOfPairs;
    switch (difficulty) {
        case "EASY": {
            timeoutLength = 2400;
            minTimeoutLength = 1600;

            startingNumOfPairs = 4;
        }

        case "MEDIUM": {
            timeoutLength = 2000;
            minTimeoutLength = 1200;

            startingNumOfPairs = 6;
        }

        case "HARD": {
            timeoutLength = 1600;
            minTimeoutLength = 1000;

            startingNumOfPairs = 6;
        }

        default: {
            timeoutLength = 2400;
            minTimeoutLength = 1600;
        }
    }

    addPair();
    for (const _ of Array(startingNumOfPairs - 1)) {
        const topicId = randItem(topics);
        addGameBoxPair(randItem(TOPICS.find(({ id }) => id === topicId).words));
    }

    gameTimerIntervalId = setInterval(() => {
        timeLimitSecs--;
        gameTimer.textContent = `Time Left: ${Math.floor(timeLimitSecs / 60)}:${`${timeLimitSecs % 60}`.padStart(2, "0")}`;

        if (timeLimitSecs <= 0) endGame(score);
    }, 1000);

    function addPair() {
        if (timeoutLength > minTimeoutLength) timeoutLength -= 10;

        const topicId = randItem(topics);
        addGameBoxPair(randItem(TOPICS.find(({ id }) => id === topicId).words));

        gameTimeoutTimeoutId = setTimeout(addPair, timeoutLength);
    }
}

function endGame(finalScore) {
    if (!hasGameStarted) return;
    hasGameStarted = false;

    gameAborter.abort();
    gameBoundsResizer.unobserve(gameBounds);

    if (gameAnswersIntervalId !== null) clearInterval(gameAnswersIntervalId);
    if (gameTimeoutTimeoutId !== null) clearInterval(gameTimeoutTimeoutId);
    if (gameTimerIntervalId !== null) clearInterval(gameTimerIntervalId);

    gameCountdown.style.display = "block";
    gameCountdown.style.fontSize = "3.6rem";

    requestAnimationFrame(() => requestAnimationFrame(() => gameCountdown.style.scale = "100%"));

    gameCountdown.textContent = "TIME'S UP!";

    setTimeout(() => {
        gameTitle.style.display = "block";
        gameDesc.style.display = "block";

        requestAnimationFrame(() => {
            gameTitle.style.marginBlockStart = "0.6rem";
            gameTitle.style.marginBlockEnd = "0.8rem";

            gameTitle.style.fontSize = "2.4rem";

            gameDesc.style.marginBlockStart = "0.2rem";
            gameDesc.style.marginBlockEnd = "1.6rem";

            gameDesc.style.fontSize = "1rem";
        });

        gameEndSection.style.display = "flex";
        requestAnimationFrame(() => requestAnimationFrame(() => gameEndSection.style.top = "0%"));

        const gameEndSectionAborter = new AbortController();
        gameEndSection.addEventListener("transitionend", ({ target }) => {
            if (target !== gameEndSection || gameEndSection.style.display !== "flex") return;

            gameAnswers.style.display = "none";
            gameQuestions.style.display = "none";
            gameUI.style.display = "none";

            gameEndSectionAborter.abort();
        }, { signal: gameEndSectionAborter.signal });

        gameFinalScore.textContent = `Your Final Score is: ${finalScore}!`;
        gameRestartBtn.addEventListener("click", () => {
            gameSettingsSection.style.display = "block";
            requestAnimationFrame(() => gameSettingsSection.style.top = "0%");

            const gameSettingsSectionAborter = new AbortController();
            gameSettingsSection.addEventListener("transitionend", ({ target }) => {
                if (target !== gameSettingsSection || gameSettingsSection.style.display !== "block") return;

                gameSettingsSectionAborter.abort();

                gameEndSection.style.display = "none";
                gameEndSection.style.top = "-100%";

            }, { signal: gameSettingsSectionAborter.signal });
        }, { once: true });
    }, 2400);
}

function addGameBoxPair(answer) {
    const { romanisation, meaning } = WORDS[answer];

    const answerBox = document.createElement("article");
    answerBox.classList.add("answer-box");
    answerBox.style.backgroundColor = `var(--theme-box-${Math.floor(Math.random() * 4) + 1})`;
    answerBox.dataset.answer = answer;
    answerBox.dataset.rotation = "0";

    const answerTitle = document.createElement("h2");
    const answerRuby = document.createElement("ruby");

    const answerRubyChar = document.createTextNode(answer);
    const rubyFallbackStart = document.createElement("rp");
    rubyFallbackStart.textContent = " (";

    const rubyText = document.createElement("rt");
    rubyText.textContent = romanisation;

    const rubyFallbackEnd = document.createElement("rp");
    rubyFallbackEnd.textContent = ") ";

    answerRuby.appendChild(answerRubyChar);

    answerRuby.appendChild(rubyFallbackStart);
    answerRuby.appendChild(rubyText);
    answerRuby.appendChild(rubyFallbackEnd);

    answerTitle.appendChild(answerRuby);
    answerBox.appendChild(answerTitle);

    gameAnswers.appendChild(answerBox);

    const {
        width: gameAnswersWidth,
        height: gameAnswersHeight
    } = gameAnswers.getBoundingClientRect();

    answerBox.style.transitionProperty = "none";
    answerBox.style.scale = "100%";

    const {
        width: answerBoxWidth,
        height: answerBoxHeight
    } = answerBox.getBoundingClientRect();

    answerBox.style.scale = "0%";

    answerBox.style.left = `${Math.random() * (gameAnswersWidth - answerBoxWidth)}px`;
    answerBox.style.top = `${Math.random() * (gameAnswersHeight - answerBoxHeight)}px`;

    const questionBox = document.createElement("article");
    questionBox.classList.add("question-box");
    questionBox.style.backgroundColor = `var(--theme-box-${Math.floor(Math.random() * 4) + 1})`;
    questionBox.dataset.answer = answer;

    const questionTitle = document.createElement("h2");
    questionTitle.textContent = meaning;

    questionBox.appendChild(questionTitle);
    gameQuestions.appendChild(questionBox);

    requestAnimationFrame(() => requestAnimationFrame(() => {
        answerBox.style.transitionProperty = "scale";
        answerBox.style.scale = "100%";

        questionBox.style.left = "0%";
    }));
}

/* -------------------------------------------------------------------------- */
/*                              UTILITY FUNCTIONS                             */
/* -------------------------------------------------------------------------- */

function randItem(arr) {
    return arr.length <= 0 ? null : arr[Math.floor(Math.random() * arr.length)];
}
