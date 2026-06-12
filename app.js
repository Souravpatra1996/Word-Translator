const languageList = [
  ["en", "English"],
  ["af", "Afrikaans"],
  ["sq", "Albanian"],
  ["am", "Amharic"],
  ["ar", "Arabic"],
  ["hy", "Armenian"],
  ["az", "Azerbaijani"],
  ["eu", "Basque"],
  ["be", "Belarusian"],
  ["bn", "Bengali"],
  ["bs", "Bosnian"],
  ["bg", "Bulgarian"],
  ["ca", "Catalan"],
  ["ceb", "Cebuano"],
  ["zh-CN", "Chinese Simplified"],
  ["zh-TW", "Chinese Traditional"],
  ["co", "Corsican"],
  ["hr", "Croatian"],
  ["cs", "Czech"],
  ["da", "Danish"],
  ["nl", "Dutch"],
  ["eo", "Esperanto"],
  ["et", "Estonian"],
  ["fi", "Finnish"],
  ["fr", "French"],
  ["fy", "Frisian"],
  ["gl", "Galician"],
  ["ka", "Georgian"],
  ["de", "German"],
  ["el", "Greek"],
  ["gu", "Gujarati"],
  ["ht", "Haitian Creole"],
  ["ha", "Hausa"],
  ["haw", "Hawaiian"],
  ["he", "Hebrew"],
  ["hi", "Hindi"],
  ["hmn", "Hmong"],
  ["hu", "Hungarian"],
  ["is", "Icelandic"],
  ["ig", "Igbo"],
  ["id", "Indonesian"],
  ["ga", "Irish"],
  ["it", "Italian"],
  ["ja", "Japanese"],
  ["jv", "Javanese"],
  ["kn", "Kannada"],
  ["kk", "Kazakh"],
  ["km", "Khmer"],
  ["rw", "Kinyarwanda"],
  ["ko", "Korean"],
  ["ku", "Kurdish"],
  ["ky", "Kyrgyz"],
  ["lo", "Lao"],
  ["la", "Latin"],
  ["lv", "Latvian"],
  ["lt", "Lithuanian"],
  ["lb", "Luxembourgish"],
  ["mk", "Macedonian"],
  ["mg", "Malagasy"],
  ["ms", "Malay"],
  ["ml", "Malayalam"],
  ["mt", "Maltese"],
  ["mi", "Maori"],
  ["mr", "Marathi"],
  ["mn", "Mongolian"],
  ["my", "Myanmar"],
  ["ne", "Nepali"],
  ["no", "Norwegian"],
  ["ny", "Nyanja"],
  ["or", "Odia"],
  ["ps", "Pashto"],
  ["fa", "Persian"],
  ["pl", "Polish"],
  ["pt", "Portuguese"],
  ["pa", "Punjabi"],
  ["ro", "Romanian"],
  ["ru", "Russian"],
  ["sm", "Samoan"],
  ["gd", "Scots Gaelic"],
  ["sr", "Serbian"],
  ["st", "Sesotho"],
  ["sn", "Shona"],
  ["sd", "Sindhi"],
  ["si", "Sinhala"],
  ["sk", "Slovak"],
  ["sl", "Slovenian"],
  ["so", "Somali"],
  ["es", "Spanish"],
  ["su", "Sundanese"],
  ["sw", "Swahili"],
  ["sv", "Swedish"],
  ["tl", "Tagalog"],
  ["tg", "Tajik"],
  ["ta", "Tamil"],
  ["tt", "Tatar"],
  ["te", "Telugu"],
  ["th", "Thai"],
  ["tr", "Turkish"],
  ["tk", "Turkmen"],
  ["uk", "Ukrainian"],
  ["ur", "Urdu"],
  ["ug", "Uyghur"],
  ["uz", "Uzbek"],
  ["vi", "Vietnamese"],
  ["cy", "Welsh"],
  ["xh", "Xhosa"],
  ["yi", "Yiddish"],
  ["yo", "Yoruba"],
  ["zu", "Zulu"]
];

const languages = Object.fromEntries(
  languageList.map(([code, name]) => [code, { name, voice: code }])
);

const baseDictionary = {
  hello: { en: "hello", hi: "\u0928\u092e\u0938\u094d\u0924\u0947", es: "hola", fr: "bonjour", de: "hallo", ja: "\u3053\u3093\u306b\u3061\u306f" },
  goodbye: { en: "goodbye", hi: "\u0905\u0932\u0935\u093f\u0926\u093e", es: "adios", fr: "au revoir", de: "auf wiedersehen", ja: "\u3055\u3088\u3046\u306a\u3089" },
  water: { en: "water", hi: "\u092a\u093e\u0928\u0940", es: "agua", fr: "eau", de: "wasser", ja: "\u6c34" },
  food: { en: "food", hi: "\u092d\u094b\u091c\u0928", es: "comida", fr: "nourriture", de: "essen", ja: "\u98df\u3079\u7269" },
  friend: { en: "friend", hi: "\u0926\u094b\u0938\u094d\u0924", es: "amigo", fr: "ami", de: "freund", ja: "\u53cb\u9054" },
  family: { en: "family", hi: "\u092a\u0930\u093f\u0935\u093e\u0930", es: "familia", fr: "famille", de: "familie", ja: "\u5bb6\u65cf" },
  school: { en: "school", hi: "\u0938\u094d\u0915\u0942\u0932", es: "escuela", fr: "ecole", de: "schule", ja: "\u5b66\u6821" },
  book: { en: "book", hi: "\u0915\u093f\u0924\u093e\u092c", es: "libro", fr: "livre", de: "buch", ja: "\u672c" },
  house: { en: "house", hi: "\u0918\u0930", es: "casa", fr: "maison", de: "haus", ja: "\u5bb6" },
  city: { en: "city", hi: "\u0936\u0939\u0930", es: "ciudad", fr: "ville", de: "stadt", ja: "\u90fd\u5e02" },
  love: { en: "love", hi: "\u092a\u094d\u092f\u093e\u0930", es: "amor", fr: "amour", de: "liebe", ja: "\u611b" },
  peace: { en: "peace", hi: "\u0936\u093e\u0902\u0924\u093f", es: "paz", fr: "paix", de: "frieden", ja: "\u5e73\u548c" },
  sun: { en: "sun", hi: "\u0938\u0942\u0930\u091c", es: "sol", fr: "soleil", de: "sonne", ja: "\u592a\u967d" },
  moon: { en: "moon", hi: "\u091a\u093e\u0901\u0926", es: "luna", fr: "lune", de: "mond", ja: "\u6708" },
  work: { en: "work", hi: "\u0915\u093e\u092e", es: "trabajo", fr: "travail", de: "arbeit", ja: "\u4ed5\u4e8b" },
  happy: { en: "happy", hi: "\u0916\u0941\u0936", es: "feliz", fr: "heureux", de: "glucklich", ja: "\u5e78\u305b" },
  sad: { en: "sad", hi: "\u0909\u0926\u093e\u0938", es: "triste", fr: "triste", de: "traurig", ja: "\u60b2\u3057\u3044" },
  yes: { en: "yes", hi: "\u0939\u093e\u0901", es: "si", fr: "oui", de: "ja", ja: "\u306f\u3044" },
  no: { en: "no", hi: "\u0928\u0939\u0940\u0902", es: "no", fr: "non", de: "nein", ja: "\u3044\u3044\u3048" },
  please: { en: "please", hi: "\u0915\u0943\u092a\u092f\u093e", es: "por favor", fr: "s'il vous plait", de: "bitte", ja: "\u304a\u9858\u3044\u3057\u307e\u3059" },
  thanks: { en: "thanks", hi: "\u0927\u0928\u094d\u092f\u0935\u093e\u0926", es: "gracias", fr: "merci", de: "danke", ja: "\u3042\u308a\u304c\u3068\u3046" }
};

const storageKey = "word-translator-custom-v2";
const historyKey = "word-translator-history-v2";

const form = document.querySelector("#translator-form");
const wordInput = document.querySelector("#word-input");
const sourceLanguage = document.querySelector("#source-language");
const targetLanguage = document.querySelector("#target-language");
const swapButton = document.querySelector("#swap-button");
const resultWord = document.querySelector("#result-word");
const resultNote = document.querySelector("#result-note");
const copyButton = document.querySelector("#copy-button");
const speakButton = document.querySelector("#speak-button");
const suggestionList = document.querySelector("#suggestion-list");
const clearHistoryButton = document.querySelector("#clear-history");
const customForm = document.querySelector("#custom-form");
const customEnglish = document.querySelector("#custom-english");
const customLanguage = document.querySelector("#custom-language");
const customTranslation = document.querySelector("#custom-translation");
const savedList = document.querySelector("#saved-list");
const translateButton = form.querySelector(".primary-button");

let customDictionary = readJson(storageKey, {});
let searchHistory = readJson(historyKey, []);
let currentTranslation = "";

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The app still works if browser storage is blocked.
  }
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function dictionary() {
  return { ...baseDictionary, ...customDictionary };
}

function populateLanguages() {
  languageList.forEach(([code, name]) => {
    sourceLanguage.add(new Option(name, code));
    targetLanguage.add(new Option(name, code));
    customLanguage.add(new Option(name, code));
  });

  sourceLanguage.value = "en";
  targetLanguage.value = "hi";
  customLanguage.value = "hi";
}

function findOfflineEntry(query, fromCode) {
  const lowerQuery = normalize(query);
  const entries = Object.entries(dictionary());

  if (fromCode === "en" && dictionary()[lowerQuery]) {
    return [lowerQuery, dictionary()[lowerQuery]];
  }

  return entries.find(([, translations]) => normalize(translations[fromCode] || "") === lowerQuery);
}

function translateOffline(query, fromCode, toCode) {
  const match = findOfflineEntry(query, fromCode);
  if (!match) {
    return null;
  }

  const [englishWord, translations] = match;
  if (!translations[toCode]) {
    return null;
  }

  return {
    englishWord,
    fromValue: translations[fromCode],
    value: translations[toCode]
  };
}

async function fetchWithTimeout(url, timeout = 12000) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeout);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function cleanTranslatedText(value) {
  const parser = new DOMParser();
  return parser.parseFromString(value || "", "text/html").documentElement.textContent.trim();
}

async function translateWithGoogle(query, fromCode, toCode) {
  if (fromCode === toCode) {
    return query;
  }

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", fromCode);
  url.searchParams.set("tl", toCode);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", query);

  const response = await fetchWithTimeout(url);
  if (!response.ok) {
    throw new Error("Google translation unavailable");
  }

  const data = await response.json();
  const translatedText = data?.[0]?.map((part) => part?.[0] || "").join("").trim();

  if (!translatedText) {
    throw new Error("Google returned no translation");
  }

  return cleanTranslatedText(translatedText);
}

async function translateWithMyMemory(query, fromCode, toCode) {
  if (fromCode === toCode) {
    return query;
  }

  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", query);
  url.searchParams.set("langpair", `${fromCode}|${toCode}`);

  const response = await fetchWithTimeout(url);
  if (!response.ok) {
    throw new Error("MyMemory translation unavailable");
  }

  const data = await response.json();
  if (data.responseStatus && Number(data.responseStatus) >= 400) {
    throw new Error(data.responseDetails || "MyMemory service error");
  }

  const translatedText = data?.responseData?.translatedText?.trim();
  if (!translatedText) {
    throw new Error("MyMemory returned no translation");
  }

  return cleanTranslatedText(translatedText);
}

async function translateOnline(query, fromCode, toCode) {
  try {
    return {
      text: await translateWithGoogle(query, fromCode, toCode),
      service: "Google"
    };
  } catch {
    return {
      text: await translateWithMyMemory(query, fromCode, toCode),
      service: "MyMemory"
    };
  }
}


async function handleTranslate(event) {
  event.preventDefault();
  const query = wordInput.value.trim();

  if (!query) {
    showResult("Type something", "The translator is ready when you are.", "");
    return;
  }

  setLoading(true);
  showResult("Translating...", "Checking online translation first.", "");

  try {
    const onlineTranslation = await translateOnline(query, sourceLanguage.value, targetLanguage.value);
    showResult(
      onlineTranslation.text,
      `${languages[sourceLanguage.value].name} to ${languages[targetLanguage.value].name} | ${onlineTranslation.service}`,
      onlineTranslation.text
    );
    rememberWord(query);
    return;
  } catch {
    const offlineTranslation = translateOffline(query, sourceLanguage.value, targetLanguage.value);

    if (offlineTranslation) {
      showResult(
        offlineTranslation.value,
        `${languages[sourceLanguage.value].name}: ${offlineTranslation.fromValue} | Offline`,
        offlineTranslation.value
      );
      rememberWord(offlineTranslation.englishWord);
      return;
    }

    showResult(
      "Not translated",
      "Check your internet connection, then try again. Saved words still work offline.",
      ""
    );
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  translateButton.disabled = isLoading;
  translateButton.textContent = isLoading ? "Translating..." : "Translate";
}

function showResult(word, note, translation) {
  resultWord.textContent = word;
  resultNote.textContent = note;
  currentTranslation = translation;
}

function rememberWord(word) {
  searchHistory = [word, ...searchHistory.filter((item) => item !== word)].slice(0, 9);
  writeJson(historyKey, searchHistory);
  renderSuggestions();
}

function renderSuggestions() {
  const starterWords = ["hello", "water", "friend", "book", "happy", "thanks"];
  const words = [...new Set([...searchHistory, ...starterWords])].slice(0, 10);
  suggestionList.innerHTML = "";

  words.forEach((word) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = word;
    button.addEventListener("click", () => {
      wordInput.value = word;
      form.requestSubmit();
    });
    suggestionList.append(button);
  });
}

function renderSavedWords() {
  const customEntries = Object.entries(customDictionary);
  savedList.innerHTML = "";

  if (!customEntries.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No custom words yet.";
    savedList.append(empty);
    return;
  }

  customEntries.forEach(([englishWord, translations]) => {
    const item = document.createElement("div");
    item.className = "saved-item";
    const word = document.createElement("strong");
    const detail = document.createElement("span");
    const savedTranslations = Object.entries(translations)
      .filter(([code]) => code !== "en" && languages[code])
      .map(([code, value]) => `${languages[code].name}: ${value}`)
      .join(" | ");

    word.textContent = englishWord;
    detail.textContent = savedTranslations || "No translation saved.";
    item.append(word, detail);
    savedList.append(item);
  });
}

function saveCustomWord(event) {
  event.preventDefault();
  const englishWord = normalize(customEnglish.value);
  const languageCode = customLanguage.value;
  const translation = customTranslation.value.trim();

  if (!englishWord || !translation) {
    return;
  }

  const previous = customDictionary[englishWord] || baseDictionary[englishWord] || { en: englishWord };
  customDictionary[englishWord] = {
    ...previous,
    en: englishWord,
    [languageCode]: translation
  };

  writeJson(storageKey, customDictionary);
  customForm.reset();
  customLanguage.value = languageCode;
  wordInput.value = englishWord;
  sourceLanguage.value = "en";
  targetLanguage.value = languageCode;
  renderSavedWords();
  renderSuggestions();
  form.requestSubmit();
}

async function copyTranslation() {
  if (!currentTranslation) {
    return;
  }

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(currentTranslation);
    } else {
      const tempInput = document.createElement("textarea");
      tempInput.value = currentTranslation;
      document.body.append(tempInput);
      tempInput.select();
      document.execCommand("copy");
      tempInput.remove();
    }
    resultNote.textContent = "Copied to clipboard.";
  } catch {
    resultNote.textContent = "Copy failed. Select the translation and copy it manually.";
  }
}

function speakTranslation() {
  if (!currentTranslation || !("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(currentTranslation);
  utterance.lang = languages[targetLanguage.value].voice;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function swapLanguages() {
  const from = sourceLanguage.value;
  sourceLanguage.value = targetLanguage.value;
  targetLanguage.value = from;

  if (wordInput.value.trim()) {
    form.requestSubmit();
  }
}

form.addEventListener("submit", handleTranslate);
swapButton.addEventListener("click", swapLanguages);
copyButton.addEventListener("click", copyTranslation);
speakButton.addEventListener("click", speakTranslation);
customForm.addEventListener("submit", saveCustomWord);
clearHistoryButton.addEventListener("click", () => {
  searchHistory = [];
  writeJson(historyKey, searchHistory);
  renderSuggestions();
});

populateLanguages();
renderSuggestions();
renderSavedWords();
