(() => {
  "use strict";
  const KEY = "vtm_v6_alpha_chargen_language";
  let locale = localStorage.getItem(KEY) === "uk" ? "uk" : "en";
  const textOriginal = new WeakMap();
  const attrOriginal = new WeakMap();
  const MAP = new Map();
  const add = (en, uk) => {
    if (
      typeof en !== "string" ||
      typeof uk !== "string" ||
      !en ||
      !uk ||
      en === uk
    )
      return;
    MAP.set(en, uk);
    // The rules reference renders long source strings as separate paragraphs.
    // Register aligned paragraph pairs as well as the complete source string,
    // otherwise a translated multi-paragraph entry falls back to English after renderInfo() splits it.
    const ep = en.split(/\n\n+/),
      up = uk.split(/\n\n+/);
    if (ep.length === up.length && ep.length > 1) {
      for (let i = 0; i < ep.length; i++) {
        const a = ep[i],
          b = up[i];
        if (a && b && a !== b) MAP.set(a, b);
      }
    }
  };

  const UI = {
    "VTM V6 Alpha Character Generator": "VTM V6 Alpha — Генератор Персонажа",
    "Character Generator": "Генератор Персонажа",
    "VTM V6 Alpha Chargen": "VTM V6 Alpha — Генератор",
    "V6 Alpha · project house rules labelled":
      "V6 Alpha · правила проєкту позначено окремо",
    "Export JSON": "Експорт JSON",
    "Import JSON": "Імпорт JSON",
    Export: "Експорт",
    Import: "Імпорт",
    Reset: "Скинути",
    "Reset character": "Скинути персонажа",
    Info: "Довідка",
    Back: "Назад",
    Next: "Далі",
    Review: "Перегляд",
    "This step is complete.": "Цей крок завершено.",
    Creature: "Тип істоти",
    Clan: "Клан",
    Sire: "Sire",
    Lifepath: "Життєвий Шлях",
    Lifepaths: "Життєві Шляхи",
    Attribute: "Атрибут",
    Attributes: "Атрибути",
    Skill: "Навичка",
    Skills: "Навички",
    Focus: "Спеціалізація",
    Focuses: "Спеціалізації",
    Power: "Здібність",
    Powers: "Здібності",
    Humanity: "Людяність",
    Resource: "Ресурс",
    Resources: "Ресурси",
    Merit: "Перевага",
    Merits: "Переваги",
    "Clan Trait": "Кланова Риса",
    "Clan Traits": "Кланові Риси",
    Nature: "Натура",
    Finish: "Завершення",
    "Physical Asset": "Фізичний Актив",
    "Social Asset": "Соціальний Актив",
    Wealth: "Статки",
    mortal: "смертний",
    neonate: "Неонат",
    ancilla: "Анцилла",
    elder: "Старійшина",
    Neonate: "Неонат",
    Ancilla: "Анцилла",
    Elder: "Старійшина",
    "What are you?": "Хто ви?",
    "Your Clan": "Ваш Клан",
    "Sire & Generation": "Sire і Покоління",
    "Your Lifepaths": "Ваші Життєві Шляхи",
    "Disciplines, Traits & Merits": "Дисципліни, Риси та Переваги",
    "Humanity & Nature": "Людяність і Натура",
    "Your Resources": "Ваші Ресурси",
    "Finishing Touches": "Завершення персонажа",
    "Step 1 · What Are You?": "Крок 1 · Хто ви?",
    "Step 2 · Your Clan": "Крок 2 · Ваш Клан",
    "Step 3 · Sire & Generation": "Крок 3 · Sire і Покоління",
    "Step 4 · Your Lifepaths": "Крок 4 · Ваші Життєві Шляхи",
    "Step 5 · Attributes": "Крок 5 · Атрибути",
    "Step 6 · Skills": "Крок 6 · Навички",
    "Step 7 · Focuses": "Крок 7 · Спеціалізації",
    "Step 8 · Disciplines, Clan Traits & Merits":
      "Крок 8 · Дисципліни, Кланові Риси та Переваги",
    "Step 9 · Humanity Scale & Nature": "Крок 9 · Шкала Людяності та Натура",
    "Step 10 · Your Resources": "Крок 10 · Ваші Ресурси",
    "Step 11 · Finishing Touches": "Крок 11 · Завершення персонажа",
    "Choose the vampire tier used for this character. It controls the RAW creation budgets and maximum ratings.":
      "Виберіть рівень вампіра. Він визначає RAW-бюджети створення персонажа та максимальні рейтинги.",
    "Choose a clan. Long descriptions use list rows on desktop so each entry keeps its natural height.":
      "Виберіть Клан. На desktop довгі описи подано рядками природної висоти.",
    "Choose each part directly. This page no longer uses dropdowns for the primary chargen choices.":
      "Виберіть кожну складову напряму. Для основних рішень під час створення персонажа тут не використовуються випадаючі списки.",
    "Choose a Lifepath.": "Виберіть Життєвий Шлях.",
    Selection: "Вибір",
    "Choose…": "Вибрати…",
    "Custom Lifepath (RAW)": "Власний Життєвий Шлях (RAW)",
    "Optional young character rule": "Необов’язкове правило молодого персонажа",
    "Use one Lifepath": "Використати один Життєвий Шлях",
    "Selected clan": "Вибраний Клан",
    "Full Alpha entry": "Повний запис Alpha",
    "Full Alpha": "Повний запис Alpha",
    "In development": "У розробці",
    "Clan list": "Список Кланів",
    Required: "Обов’язково",
    "Caitiff · 3 randomly determined Disciplines":
      "Caitiff · 3 випадково визначені Дисципліни",
    "RAW says these are randomly determined. Use Randomize for a RAW selection; manual changes remain available for table adjudication.":
      "RAW вимагає випадкового визначення. Кнопка «Випадково 3» дає RAW-вибір; ручна зміна залишається доступною за рішенням групи.",
    "Randomize 3": "Випадково 3",
    "Sire type": "Тип Sire",
    Generation: "Покоління",
    "Adoptive sire Clan": "Клан прийомного Sire",
    "Broodmate Clan": "Клан Broodmate",
    "Bonus Discipline": "Бонусна Дисципліна",
    "Lifepath Skills": "Навички Життєвого Шляху",
    "Lifepath Resources": "Ресурси Життєвого Шляху",
    "Skill dots": "Точки Навичок",
    "Resource dots": "Точки Ресурсів",
    "Read Lifepath details": "Довідка про Життєвий Шлях",
    Primary: "Основна",
    Secondary: "Додаткова",
    Tertiary: "Третинна",
    Physical: "Фізичні",
    Social: "Соціальні",
    Mental: "Розумові",
    "Reset Attributes": "Скинути Атрибути",
    "Reset Skills": "Скинути Навички",
    "Reset Focuses": "Скинути Спеціалізації",
    "Free Skill dots remaining": "Залишок вільних точок Навичок",
    "Focus choices remaining": "Залишок виборів Спеціалізацій",
    "Skills from selected Lifepaths": "Навички з вибраних Життєвих Шляхів",
    "Other Skills": "Інші Навички",
    Current: "Поточний",
    Cap: "Ліміт",
    "Player choice": "Вибір гравця",
    "Suggested by Lifepath": "Рекомендовано Життєвим Шляхом",
    "RAW Skill examples": "RAW-приклади для Навички",
    "Choose or type a Focus": "Виберіть або введіть Спеціалізацію",
    "Suggestions are optional. Enter another relevant Focus if it better fits the character.":
      "Рекомендації необов’язкові. Можна ввести іншу доречну Спеціалізацію, якщо вона краще відповідає персонажу.",
    "Discipline dots remaining": "Залишок точок Дисциплін",
    "Powers remaining": "Залишок Здібностей",
    "Clan Disciplines": "Кланові Дисципліни",
    "Discipline Powers": "Здібності Дисциплін",
    "Known powers": "Відомі Здібності",
    "unlocks rank": "відкриває ранг",
    "Starting Humanity": "Початкова Людяність",
    Balanced: "Рівновага",
    "Toward Beast": "До Звіра",
    "Toward Nature": "До Натури",
    "How Resource dots work:": "Як працюють точки Ресурсів:",
    "From Lifepaths": "Із Життєвих Шляхів",
    "Free Resources": "Вільні Ресурси",
    "Free Resource dots remaining": "Залишок вільних точок Ресурсів",
    "Add Resource": "Додати Ресурс",
    Type: "Тип",
    "Specific label": "Конкретизація",
    Dots: "Точки",
    Remove: "Видалити",
    "Character details (optional)": "Деталі персонажа (необов’язково)",
    "Make this asset specific": "Конкретизуйте цей Актив",
    Name: "Ім’я",
    Alias: "Псевдонім",
    "Apparent Age": "Видимий Вік",
    "Actual Age": "Фактичний Вік",
    "Nostalgic Decade": "Ностальгічне Десятиліття",
    "Important Items": "Важливі Предмети",
    "Weapons / combat gear (optional, Storyteller-adjudicated)":
      "Зброя / бойове спорядження (необов’язково, за рішенням Оповідача)",
    "Flaws (optional, free text)": "Недоліки (необов’язково, вільний текст)",
    "Character Review": "Підсумковий лист персонажа",
    Validation: "Перевірка",
    Identity: "Ідентичність",
    "Vitae Maximum": "Максимум Vitae",
    "Willpower Maximum": "Максимум Сили Волі",
    "Disciplines & Powers": "Дисципліни та Здібності",
    "Weapons / Combat Gear": "Зброя / бойове спорядження",
    Flaws: "Недоліки",
    "Rules reference": "Довідка правил",
    Information: "Інформація",
    "VTM V6 Alpha Player Packet": "VTM V6 Alpha Player Packet",
    "Current rating": "Поточний рейтинг",
    "Tier Max Dots": "Максимум точок рівня",
    "Highest legal now": "Найвище доступне зараз",
    "Category allocation": "Розподіл категорії",
    "Final category total": "Підсумок категорії",
    "Chargen cap": "Ліміт під час створення",
    "Lifepath cap bonus": "Бонус ліміту від Життєвого Шляху",
    "Focus slots": "Слоти Спеціалізацій",
    Discipline: "Дисципліна",
    Activate: "Активація",
    Cost: "Вартість",
    Difficulty: "Складність",
    Distance: "Дистанція",
    Duration: "Тривалість",
    "Alpha powers": "Здібності в Alpha",
    Prerequisites: "Передумови",
    "Tier of Play": "Рівень гри",
    "Maximum Dots": "Максимум точок",
    "Maximum Discipline at chargen": "Максимум Дисципліни під час створення",
    "Generation Modifier": "Модифікатор Покоління",
    "How tests use it": "Як використовується в тестах",
    "Resource dots + an Attribute chosen by the Storyteller":
      "Точки Ресурсу + Атрибут, який визначає Оповідач",
    "Straining a Resource": "Напруження Ресурсу",
    "Temporarily spend a dot for a greater effect":
      "Тимчасово витратьте точку заради сильнішого ефекту",
    Recovery: "Відновлення",
    "Spent dots recover through downtime":
      "Витрачені точки відновлюються під час Downtime",
    "One scene": "Одна Сцена",
    "One Scene": "Одна Сцена",
    "One night": "Одна ніч",
    "One night or until completed": "Одна ніч або до завершення",
    "One turn": "Один хід",
    Instantaneous: "Миттєво",
    Permanent: "Постійно",
    "Instantaneous or one night": "Миттєво або одна ніч",
    Self: "На себе",
    Touch: "Дотик",
    Short: "Коротка",
    Medium: "Середня",
    Long: "Далека",
    "Far Away": "Дуже далека",
    Close: "Близька",
    Action: "Дія",
    "Minor action": "Мала Дія",
    "Minor Action": "Мала Дія",
    Reaction: "Реакція",
    "Minor action or reaction": "Мала Дія або Реакція",
    None: "Немає",
    Varies: "Залежить",
    Unknown: "Невідомо",
    "full entry missing": "повний запис відсутній",
    "Alpha source gap": "прогалина в Alpha",
    "Discipline Power": "Здібність Дисципліни",
    "No current Focus-bearing Skill is listed by a selected Lifepath.":
      "Жодна Навичка з поточним слотом Спеціалізації не входить до вибраних Життєвих Шляхів.",
    "No other Skill currently has a Focus slot.":
      "Жодна інша Навичка зараз не має слота Спеціалізації.",
    "No Lifepath Resource dots allocated yet.":
      "Точки Ресурсів із Життєвих Шляхів ще не розподілено.",
    "Character is complete under the implemented Alpha rules.":
      "Персонаж завершений відповідно до реалізованих правил Alpha.",
    "Reset all Attribute ratings to their 1-dot baseline?":
      "Скинути всі Атрибути до базового рейтингу 1?",
    "Reset all free Skill dots? Lifepath Skill dots will stay.":
      "Скинути всі вільні точки Навичок? Точки Навичок із Життєвих Шляхів залишаться.",
    "Clear all selected Focuses?": "Очистити всі вибрані Спеціалізації?",
    "Reset the current character?": "Скинути поточного персонажа?",
    "Could not import this character JSON: ":
      "Не вдалося імпортувати JSON персонажа: ",
  };
  Object.entries(UI).forEach(([a, b]) => add(a, b));

  function pairData(en, uk, key = "") {
    if (typeof en === "string" && typeof uk === "string") {
      if (!["id", "sourceRef"].includes(key)) add(en, uk);
      return;
    }
    if (Array.isArray(en) && Array.isArray(uk)) {
      const enById = en.every(
        (x) =>
          x &&
          typeof x === "object" &&
          !Array.isArray(x) &&
          typeof x.id === "string",
      );
      const ukById = uk.every(
        (x) =>
          x &&
          typeof x === "object" &&
          !Array.isArray(x) &&
          typeof x.id === "string",
      );
      if (enById && ukById) {
        const m = new Map(uk.map((x) => [x.id, x]));
        en.forEach((x) => {
          const u = m.get(x.id);
          if (u) pairData(x, u, "");
        });
      } else {
        const n = Math.min(en.length, uk.length);
        for (let i = 0; i < n; i++) pairData(en[i], uk[i], String(i));
      }
      return;
    }
    if (en && uk && typeof en === "object" && typeof uk === "object") {
      for (const k of Object.keys(en))
        if (Object.prototype.hasOwnProperty.call(uk, k))
          pairData(en[k], uk[k], k);
    }
  }
  pairData(window.V6_DATA, window.V6_UK_DATA);

  const LONG = {
    "Choose the vampire tier. The tier sets maximum dots and the character-creation budgets for Lifepaths, Attributes, Disciplines, powers, Merits, Clan Traits, Skills, and Resources.":
      "Виберіть рівень вампіра. Він визначає максимальні рейтинги та бюджети створення для Життєвих Шляхів, Атрибутів, Дисциплін, Здібностей, Переваг, Кланових Рис, Навичок і Ресурсів.",
    "This build focuses on Vampire Neonate, Ancilla, and Elder. Ghoul and Duskborn remain outside the enabled flow for now.":
      "Ця збірка підтримує Вампірів рівня Неонат, Анцилла та Старійшина. Гулі й Duskborn поки не включені в активний процес створення.",
    "Clan determines your curse, Beast/frenzy expression, clan Disciplines, and available Clan Traits.":
      "Клан визначає ваше Прокляття, прояв Звіра та Шаленства, Кланові Дисципліни й доступні Кланові Риси.",
    "Select a clan, then resolve any required variable Discipline immediately. For Lasombra this means choosing Corruption or Oblivion before Discipline-dot allocation.":
      "Виберіть Клан і відразу визначте змінну Дисципліну, якщо вона потрібна. Для Lasombra це означає вибрати Розбещення або Oblivion до розподілу точок Дисциплін.",
    "Your sire type grants 1 additional Discipline dot. Generation places you in a power category and sets the generation modifier.":
      "Тип Sire дає 1 додаткову точку Дисципліни. Покоління визначає категорію сили Крові та Модифікатор Покоління.",
    "The Storyteller typically chooses generation. Neonates are 13th–11th generation, Ancillae 10th–9th, and Elders 8th–6th in the supplied Alpha rules.":
      "Зазвичай Покоління визначає Оповідач. У наданих правилах Alpha Неонати мають 13–11 Покоління, Анцилли — 10–9, Старійшини — 8–6.",
    "Lifepaths represent past professions, identities, and roles. Each Lifepath gives Skill and Resource dots.":
      "Життєві Шляхи представляють минулі професії, ідентичності та ролі. Кожен Життєвий Шлях дає точки Навичок і Ресурсів.",
    "Attributes define the character’s potential in Physical, Social, and Mental categories.":
      "Атрибути визначають потенціал персонажа у Фізичній, Соціальній і Розумовій категоріях.",
    "Assign primary, secondary, and tertiary category budgets. Each Attribute begins at 1. Use the Info button to read what each rating means; changing dots on mobile no longer opens the help drawer automatically.":
      "Призначте основний, додатковий і третинний бюджети категорій. Кожен Атрибут починається з 1. Кнопка довідки пояснює значення кожного рейтингу; зміна точок на мобільному більше не відкриває довідку автоматично.",
    "Skills define learned competency. Lifepaths contribute dots first, then you distribute the free Skill dots from the tier budget.":
      "Навички описують набуту компетентність. Спочатку точки дають Життєві Шляхи, після чого розподіляються вільні точки Навичок із бюджету рівня.",
    "House rule: the base chargen Skill cap is 3, and each selected Lifepath that lists a Skill raises that Skill’s cap by +1, whether or not a Lifepath dot was assigned to it. Focus selection is handled on the next page.":
      "Правило проєкту: базовий ліміт Навички під час створення дорівнює 3; кожен вибраний Життєвий Шлях, у списку якого є ця Навичка, підвищує її ліміт на +1 незалежно від того, чи була в неї вкладена точка Життєвого Шляху. Спеціалізації вибираються на наступному кроці.",
    "A Skill has one Focus at rating 1, a second at 3, and a third at 5. Rating 2 therefore still has exactly one Focus.":
      "Навичка має одну Спеціалізацію на рейтингу 1, другу на 3 і третю на 5. Тому рейтинг 2 усе ще має рівно одну Спеціалізацію.",
    "All Focus slots are player choices. Parenthetical Focuses printed in selected Lifepaths are shown as recommendations during selection, alongside the Skill’s RAW example Focuses. They never lock or auto-fill a Focus, and you may type another relevant Focus.":
      "Усі слоти Спеціалізацій обирає гравець. Спеціалізації в дужках у вибраних Життєвих Шляхах показуються як рекомендації поруч із RAW-прикладами Навички. Вони не блокують вибір і не заповнюються автоматично; можна ввести іншу доречну Спеціалізацію.",
    "Discipline dots unlock powers by rank. Clan Traits and Merits provide distinctive passive or activated abilities.":
      "Рейтинг Дисципліни визначає, Здібності якого рангу доступні. Кількість відомих Здібностей має окремий бюджет, тому персонаж може знати кілька Здібностей одного доступного рангу. Кланові Риси та Переваги дають окремі пасивні або активовані властивості.",
    "Choose the exact number of powers, Clan Traits, and Merits from the Dot Distribution table. A power’s rank cannot exceed your dots in its Discipline. Prerequisites are enforced when the Alpha text provides them.":
      "Виберіть точну кількість Здібностей, Кланових Рис і Переваг із таблиці Розподілу Точок. Ранг Здібності не може перевищувати рейтинг відповідної Дисципліни. Передумови застосовуються там, де їх містить Alpha.",
    "A vampire begins balanced in the center of the seven-position Humanity Scale. Nature defines the mortal axis and its outburst.":
      "Вампір починає в центрі семипозиційної Шкали Людяності. Натура визначає смертну вісь персонажа та відповідний спалах.",
    "Resources are Physical Assets, Social Assets, and Wealth. Lifepaths grant Resource dots; the Dot Distribution table grants additional free Resource dots.":
      "Ресурси поділяються на Фізичні Активи, Соціальні Активи та Статки. Життєві Шляхи дають точки Ресурсів, а таблиця Розподілу Точок — додаткові вільні точки.",
    "Calculate Vitae and Willpower, then define identity details, important items, and optional Flaws.":
      "Розрахуйте Vitae та Силу Волі, після чого визначте деталі ідентичності, Важливі Предмети й необов’язкові Недоліки.",
    "The Alpha packet provides a Skill description and example Focuses, but no rating-by-rating Skill scale comparable to Attributes.":
      "Alpha містить опис Навички та приклади Спеціалізацій, але не дає шкали значень кожного рейтингу, подібної до Атрибутів.",
    "Powers are listed by rank. Open an individual power for activation, cost, Difficulty, distance, duration, and full rules text.":
      "Здібності згруповані за рангом. Відкрийте конкретну Здібність, щоб побачити активацію, вартість, Складність, дистанцію, тривалість і повний текст правила.",
    "The supplied Alpha packet lists this Discipline in clan summaries but does not provide Chapter 5 power definitions for it.":
      "Надана Alpha згадує цю Дисципліну в описах Кланів, але не містить визначень її Здібностей у Chapter 5.",
    "The selected vampire tier sets character-creation budgets and maximum ratings.":
      "Вибраний рівень вампіра визначає бюджети створення персонажа й максимальні рейтинги.",
    "Generation measures how far the vampire is descended from the First Vampire.":
      "Покоління показує, наскільки далеко вампір стоїть у лінії нащадків від Першого Вампіра.",
    "How old or young do you look? This is the character’s apparent age: the age an observer would estimate from their appearance. It is separate from Actual Age.":
      "Наскільки старим або молодим виглядає персонаж? Видимий Вік — це вік, який сторонній спостерігач оцінив би за зовнішністю. Він відрізняється від Фактичного Віку.",
  };
  Object.entries(LONG).forEach(([a, b]) => add(a, b));

  const EXTRA = {
    "Custom Lifepath": "Власний Життєвий Шлях",
    "Step 1 · Player Packet": "Крок 1 · Player Packet",
    "Step 2 · Player Packet": "Крок 2 · Player Packet",
    "Step 3 · Player Packet": "Крок 3 · Player Packet",
    "Step 4 · Player Packet": "Крок 4 · Player Packet",
    "Step 5 · Player Packet": "Крок 5 · Player Packet",
    "Step 5 · Player Packet + house rule":
      "Крок 5 · Player Packet + правило проєкту",
    "Step 6 · Player Packet": "Крок 6 · Player Packet",
    "Step 7 · Player Packet": "Крок 7 · Player Packet",
    "Step 8 · Player Packet": "Крок 8 · Player Packet",
    "Step 9 · Player Packet": "Крок 9 · Player Packet",
    "What Are You?": "Хто ви?",
    "Disciplines, Clan Traits & Merits": "Дисципліни, Кланові Риси та Переваги",
    "Humanity Scale & Nature": "Шкала Людяності та Натура",
    "Ancillae may begin at stage 1 toward either side if the Storyteller chooses an unbalanced beginning. Elders may begin at stage 2 toward either side.":
      "Анцилли можуть почати на 1 позицію ближче до будь-якого краю, якщо Оповідач обирає незбалансований початок. Старійшини можуть почати на 2 позиції ближче до будь-якого краю.",
    "Vitae Maximum = 10 + Stamina. Willpower Maximum = 5 + Composure + Resolve. You receive one additional important item per Lifepath, provided it fits that Lifepath. Flaws have no fixed mechanical bonus or penalty in the Alpha packet.":
      "Максимум Vitae = 10 + Витривалість. Максимум Сили Волі = 5 + Самовладання + Рішучість. Ви отримуєте один додатковий Важливий Предмет за кожен Життєвий Шлях, якщо він відповідає цьому Життєвому Шляху. У пакеті Alpha Недоліки не мають фіксованого механічного бонусу чи штрафу.",
    "Player Packet · Step 1 + Step 5: Maximum Dots and Attributes":
      "Player Packet · Кроки 1 і 5: Максимум Точок та Атрибути",
    "Player Packet · Step 5: Skills & Focuses · cap modified by project house rule":
      "Player Packet · Крок 5: Навички та Спеціалізації · ліміт змінено правилом проєкту",
    "Clan · Alpha entry complete": "Клан · повний запис Alpha",
    "Clan · Alpha entry incomplete": "Клан · неповний запис Alpha",
    "Player Packet · Chapter 3: The Clans": "Player Packet · Розділ 3: Клани",
    "Player Packet · Step 4: Lifepaths":
      "Player Packet · Крок 4: Життєві Шляхи",
    "Player Packet · Chapter 5: Powers of the Blood":
      "Player Packet · Розділ 5: Здібності Крові",
    "Player Packet · Step 6: Merits": "Player Packet · Крок 6: Переваги",
    "Player Packet · Step 7: Humanity Scale and Your Nature":
      "Player Packet · Крок 7: Шкала Людяності та Натура",
    "Tier determines the scale of the character and the chargen budgets used throughout this generator. The sidebar and each allocation step apply the selected tier automatically.":
      "Рівень визначає масштаб персонажа та бюджети створення, які використовує генератор. Бічна панель і кожен крок розподілу автоматично застосовують вибраний рівень.",
    "Player Packet · Step 1: What Are You?": "Player Packet · Крок 1: Хто ви?",
    "Lower generations have stronger blood. Generation Modifier is used by multiple blood- and generation-related rules. The allowed generation range depends on the selected tier.":
      "Нижче Покоління означає сильнішу Кров. Модифікатор Покоління використовується в низці правил, пов’язаних із Кров’ю та Поколінням. Дозволений діапазон Поколінь залежить від вибраного рівня.",
    "Player Packet · Step 3: Generation": "Player Packet · Крок 3: Покоління",
    "Sire Type": "Тип Sire",
    "The vampire relationship that shaped the character’s early nights.":
      "Вампірський зв’язок, який визначив перші ночі персонажа.",
    "The Sire step determines the bonus Discipline dot.":
      "Крок Sire визначає бонусну точку Дисципліни.",
    "Player Packet · Step 3: Your Sire and Generation":
      "Player Packet · Крок 3: Sire і Покоління",
    "Selected Lifepaths": "Вибрані Життєві Шляхи",
    "No Lifepaths selected": "Життєві Шляхи не вибрано",
    "Humanity Scale": "Шкала Людяності",
    "The Humanity Scale tracks the character between Beast-driven and mortal impulses.":
      "Шкала Людяності відображає положення персонажа між імпульсами Звіра та смертної природи.",
    "The starting position depends on tier and Storyteller options. Nature represents the mortal axis that continues to pull on the character. Open the Nature entry separately for its specific rules text.":
      "Початкова позиція залежить від рівня та рішень Оповідача. Натура представляє смертну вісь, яка продовжує впливати на персонажа. Відкрийте окремий запис Натури, щоб прочитати її конкретні правила.",
    "Player Packet · Step 7: Humanity Scale and Nature":
      "Player Packet · Крок 7: Шкала Людяності та Натура",
    "Character Detail": "Деталь персонажа",
    "How old or young the character looks.":
      "Наскільки старим або молодим виглядає персонаж.",
    "Vampires stop aging when they are Embraced. Apparent Age is the age someone would estimate from the character’s visible appearance. For a vampire that appearance is normally the body preserved from the Embrace, but the field asks how old the character looks rather than asking for the exact age-at-Embrace number. Actual Age is the chronological field: how old the character really is, how old they were at the Embrace, and how long ago that was.":
      "Після Обернення вампіри перестають старіти. Видимий Вік — це вік, який хтось оцінив би за зовнішністю персонажа. Для вампіра це зазвичай тіло, збережене з моменту Обернення, але поле питає саме про те, на скільки років персонаж виглядає, а не про точний хронологічний вік під час Обернення. Фактичний Вік — хронологічне поле: скільки персонажу років насправді, скільки було під час Обернення та скільки часу минуло відтоді.",
    "Player Packet · Step 9: Character Details":
      "Player Packet · Крок 9: Деталі персонажа",
    "Step 8 · Equipment": "Крок 8 · Спорядження",
    "A short list of key objects the character carries that may matter during play.":
      "Короткий список важливих предметів, які персонаж носить із собою і які можуть мати значення у грі.",
    "Baseline gear": "Базове спорядження",
    "ID, cellphone, and keys to the haven are assumed":
      "Посвідчення особи, мобільний телефон і ключі від Сховища вважаються наявними",
    "One additional Important Item per Lifepath":
      "Один додатковий Важливий Предмет за кожен Життєвий Шлях",
    "RAW says each additional Important Item must fit the character’s Lifepath background. The rule limits the number of items by the number of Lifepaths; it does not require a permanent one-to-one slot assignment to a particular Lifepath. If an Important Item is used creatively or interestingly during a test, the Storyteller might award +1 die. Important Items are therefore practical narrative equipment with a possible situational bonus, not a Touchstone-style relationship mechanic.\n\nWeapons are described separately. The Alpha gives weapon categories and says to work with the Storyteller to decide which weapon or weapons suit the character; it does not state a fixed chargen weapon count.":
      "За RAW кожен додатковий Важливий Предмет має відповідати минулому персонажа, описаному його Життєвими Шляхами. Правило обмежує кількість предметів кількістю Життєвих Шляхів, але не вимагає назавжди прив’язувати кожен слот до конкретного Життєвого Шляху. Якщо Важливий Предмет використано творчо або цікаво під час тесту, Оповідач може дати +1 кубик. Отже, Важливі Предмети — це практичне наративне спорядження з можливим ситуативним бонусом, а не механіка стосунків на кшталт Touchstone.\n\nЗброя описана окремо. Alpha дає категорії зброї та радить разом з Оповідачем визначити, яка зброя підходить персонажу; фіксованої кількості зброї під час створення персонажа не вказано.",
    "Player Packet · Step 8: Important Items and Weapons":
      "Player Packet · Крок 8: Важливі Предмети та Зброя",
    "Weapons use broad categories that determine base damage and effective distance.":
      "Зброя використовує широкі категорії, які визначають базову шкоду та ефективну дистанцію.",
    "Damage 2 · Close/Medium · +1 die to hide":
      "Шкода 2 · Близька/Середня · +1 кубик до приховування",
    "Damage 3 · Close/Long": "Шкода 3 · Близька/Далека",
    "Damage 4 · Close/Far Away · −1 die to hide":
      "Шкода 4 · Близька/Дуже далека · −1 кубик до приховування",
    "Unarmed attacks deal damage equal to half Strength and have Close distance. The weapon categories are deliberately loose. RAW says to work with the Storyteller to decide which weapon or weapons suit the character and how they are handled in play. The supplied Alpha does not state a fixed number of weapons granted during character creation.":
      "Беззбройні атаки завдають шкоди, що дорівнює половині Сили, і мають Близьку дистанцію. Категорії зброї навмисно широкі. RAW радить разом з Оповідачем визначити, яка зброя підходить персонажу та як саме вона працює у грі. Надана Alpha не встановлює фіксованої кількості зброї під час створення персонажа.",
    "Player Packet · Step 8: Weapons": "Player Packet · Крок 8: Зброя",
    "Each dot increases the Haven’s size and security and raises the Difficulty for others trying to find or break into it. The Alpha does not give a fixed square-meter or security-system table by rating.":
      "Кожна точка збільшує розмір і захищеність Сховища та підвищує Складність для тих, хто намагається його знайти або проникнути всередину. Alpha не дає фіксованої таблиці площі чи систем безпеки за рейтингом.",
    "Each dot increases the size, number, and overall value of your holdings, ranging from a handful of dilapidated fixer-uppers toward a massive downtown office tower.":
      "Кожна точка збільшує розмір, кількість і загальну цінність Нерухомості: від кількох занедбаних об’єктів під ремонт до великої офісної вежі в центрі міста.",
    "Each dot increases the size and complexity of the collection, from a modest collection with limited items toward a hoard that would make a museum jealous. For a weapons Repository, RAW does not map dots to specific weapon tiers or prices.":
      "Кожна точка збільшує розмір і складність колекції: від невеликого набору обмежених предметів до зібрання, якому позаздрив би музей. Для Сховища Ресурсів зі зброєю RAW не прив’язує точки до конкретних категорій зброї або цін.",
    "Each dot increases the vehicle’s size, value, and prestige, from small vehicles toward extremely expensive or prestigious ones. The Alpha gives no exact price brackets.":
      "Кожна точка збільшує розмір, вартість і престиж Транспорту: від невеликих транспортних засобів до надзвичайно дорогих або престижних. Alpha не дає точних цінових діапазонів.",
    "An Ally helps when doing so does not cost them too much or put them at great risk. The packet does not provide a separate 1–5 Ally scale beyond the Minions and Retainer variants.":
      "Союзник допомагає, коли це не коштує йому надто дорого й не наражає на значний ризик. Пакет не дає окремої шкали Союзника 1–5 поза варіантами Посіпак і Служителя.",
    "The dot rating is the Retainer’s NPC Level.":
      "Рейтинг у точках дорівнює Рівню NPC Служителя.",
    "Each dot represents greater proficiency, knowledge, and access to restricted or confidential information.":
      "Кожна точка означає вищу компетентність, знання та доступ до обмеженої або конфіденційної інформації.",
    "Each dot increases the reach of your fame, from a small niche toward an international audience.":
      "Кожна точка розширює охоплення Слави: від вузької ніші до міжнародної аудиторії.",
    "Each dot represents a small group of mortals you can safely feed on if needed.":
      "Кожна точка представляє невелику групу смертних, якими за потреби можна безпечно годуватися.",
    "Each dot represents a distinct alternate identity and improves the quality of your masks.":
      "Кожна точка представляє окрему альтернативну особу та підвищує якість Маски.",
    "Dots represent relative power and influence in a specific society. 1 dot is a basic but respectable member; 5 dots place you among its top authority figures.":
      "Точки представляють відносну владу й вплив у конкретному суспільстві. 1 точка означає звичайного, але поважного члена; 5 точок ставлять персонажа серед найвпливовіших фігур цього середовища.",
    "Dots increase overall financial worth and routine purchasing power. 1 dot supports frugal/economic habits; 5 dots makes you probably one of the wealthiest individuals in your city. The Alpha gives no fixed currency values for ratings 2–4. It explicitly gives an example where Wealth 2 can be strained by spending 1 dot for a particularly expensive purchase or several nights in a luxurious hotel.":
      "Точки збільшують загальний фінансовий капітал і звичайну купівельну спроможність. 1 точка відповідає ощадливому способу життя; 5 точок, імовірно, роблять персонажа одним із найбагатших людей міста. Alpha не встановлює фіксованих сум для рейтингів 2–4. Вона прямо наводить приклад, де Статки 2 можна напружити, витративши 1 точку на особливо дорогу покупку або кілька ночей у розкішному готелі.",
    "Player Packet · Step 8: Your Resources":
      "Player Packet · Крок 8: Ваші Ресурси",
    "Lifepaths represent major roles and experiences from the character’s past. They grant Skill and Resource allocations and can also establish suggested Focuses.":
      "Життєві Шляхи представляють важливі ролі й досвід із минулого персонажа. Вони дають розподіли Навичок і Ресурсів та можуть пропонувати рекомендовані Спеціалізації.",
    "Each Lifepath normally grants 5 Skill dots among its listed Skills and 3 Resource dots among its listed Resources.":
      "Кожен Життєвий Шлях зазвичай дає 5 точок Навичок серед перелічених у ньому Навичок і 3 точки Ресурсів серед перелічених Ресурсів.",
    "The selected vampire tier sets character-creation budgets and maximum ratings.":
      "Вибраний рівень вампіра визначає бюджети створення персонажа й максимальні рейтинги.",
    "The Humanity Scale tracks the character between Beast-driven and mortal impulses.":
      "Шкала Людяності відображає положення персонажа між імпульсами Звіра та смертної природи.",
    "The supplied Alpha packet gives no qualitative description for this Attribute rating.":
      "Наданий пакет Alpha не дає якісного опису цього рейтингу Атрибута.",
    "Choose a supported Vampire tier.":
      "Виберіть підтримуваний рівень Вампіра.",
    "Choose a Clan.": "Виберіть Клан.",
    "Caitiff requires 3 randomly determined Disciplines.":
      "Caitiff потребує 3 випадково визначених Дисциплін.",
    "This clan remains partially in development in the supplied Alpha packet.":
      "Цей Клан у наданому пакеті Alpha все ще частково перебуває в розробці.",
    "Choose a sire type.": "Виберіть тип Sire.",
    "Choose the adoptive sire / broodmate Clan.":
      "Виберіть Клан прийомного Sire / broodmate.",
    "Choose the bonus Discipline granted by the sire type.":
      "Виберіть бонусну Дисципліну, яку дає тип Sire.",
    "Generation is outside the selected tier.":
      "Покоління не входить до діапазону вибраного рівня.",
    "Physical, Social, and Mental must use different primary/secondary/tertiary budgets.":
      "Фізична, Соціальна й Розумова категорії мають використовувати різні основний, додатковий і третинний бюджети.",
    "Resolve the Clan’s three Disciplines first.":
      "Спочатку визначте три Дисципліни Клану.",
    "A selected Discipline power no longer meets its rank requirement.":
      "Вибрана Здібність Дисципліни більше не відповідає вимозі за рангом.",
    "Full Clan Traits are unavailable for this clan in the supplied Alpha packet.":
      "У наданому пакеті Alpha для цього Клану недоступний повний набір Кланових Рис.",
    "Choose a Nature.": "Виберіть Натуру.",
    "Starting Humanity position is not allowed for this tier.":
      "Початкова позиція Людяності недоступна для цього рівня.",
    "Enter a character name.": "Введіть ім’я персонажа.",
    "Adoptive sire": "Прийомний Sire",
    " and related Clan": " і пов’язаний Клан",
    "not selected": "не вибрано",
    "this clan": "цей Клан",
    " · Sire +1": " · Sire +1",
    " · powers in development": " · Здібності в розробці",
    "Cost —": "Вартість —",
    "Action —": "Дія —",
    "Monstrous 1": "Чудовисько 1",
    "Mortal 1": "Смертний 1",
    "Monstrous 2": "Чудовисько 2",
    "Mortal 2": "Смертний 2",
    "Middle dot of the 7-dot Humanity Scale.":
      "Середня точка семипозиційної Шкали Людяності.",
    "Optional unbalanced beginning if the Storyteller uses that rule.":
      "Необов’язковий незбалансований початок, якщо Оповідач використовує це правило.",
    "e.g. Armory, Dresden court, BMW 5 Series":
      "напр. арсенал, двір Дрездена, BMW 5 Series",
    "What exactly is this Resource for the character?":
      "Що саме являє собою цей Ресурс для персонажа?",
    "Explain Apparent Age": "Пояснити Видимий Вік",
    "Explain Important Items": "Пояснити Важливі Предмети",
    "Key object carried during the night":
      "Важливий предмет, який персонаж носить із собою вночі",
    "Explain weapon categories": "Пояснити категорії зброї",
    "The Alpha gives no fixed chargen weapon count; list agreed weapons or combat gear here.":
      "Alpha не встановлює фіксованої кількості зброї під час створення; перелічіть тут узгоджену зброю або бойове спорядження.",
    "Explain Humanity Scale": "Пояснити Шкалу Людяності",
    "Explain weapons": "Пояснити зброю",
    "Unsupported schema": "Непідтримувана схема",
    "and related Clan": "і пов’язаний Клан",
    "· Sire +1": "· Sire +1",
    "· powers in development": "· Здібності в розробці",
    "Could not import this character JSON:":
      "Не вдалося імпортувати JSON персонажа:",

    Curse: "Прокляття",
    Frenzy: "Шаленство",
    Count: "Кількість",
    Allowance: "Дозволено",
    Tier: "Рівень",
    Description: "Опис",
    Neutral: "Нейтральне",
    Light: "Легка",
    Heavy: "Важка",
    "Discipline dots": "Точки Дисциплін",
    "Clan dots": "Кланові точки",
    "Clan allocation": "Клановий розподіл",
    Traits: "Риси",
    "Selected Lifepaths:": "Вибрані Життєві Шляхи:",
    "No selected powers": "Немає вибраних Здібностей",
    "Custom Lifepath name": "Назва власного Життєвого Шляху",
    "Choose exactly 5 Skills": "Виберіть рівно 5 Навичок",
    "Define exactly 3 Resource types": "Визначте рівно 3 типи Ресурсів",
    "Other Skills · free allocation": "Інші Навички · вільний розподіл",
    "From Lifepaths": "Із Життєвих Шляхів",
    "House rule: base cap 3 +1 per Lifepath listing the Skill":
      "Правило проєкту: базовий ліміт 3 +1 за кожен Життєвий Шлях, у якому є Навичка",
    "No Skill dots have been assigned through Lifepaths yet.":
      "Точки Навичок із Життєвих Шляхів ще не розподілено.",
    "Every Attribute starts at 1. Assign the primary, secondary, and tertiary budgets as additional dots above that baseline. Choices are blocked immediately when they would exceed the category allocation or the tier’s Max Dots.":
      "Кожен Атрибут починається з 1. Основний, додатковий і третинний бюджети розподіляються як додаткові точки понад цю базу. Вибір одразу блокується, якщо він перевищує бюджет категорії або Максимум Точок рівня.",
    "RAW tier Max Dots: Neonate 5, Ancilla 6, Elder 8. Attribute budgets (7/5/3, 8/6/4, 9/7/5) are dots distributed above the free 1-dot baseline in every Attribute. Final category totals are therefore budget + 3. The Alpha provides qualitative rating descriptions only through 5.":
      "RAW Максимум Точок за рівнем: Неонат 5, Анцилла 6, Старійшина 8. Бюджети Атрибутів (7/5/3, 8/6/4, 9/7/5) — це точки, що розподіляються понад безкоштовну базову 1 у кожному Атрибуті. Отже, підсумок категорії дорівнює бюджету + 3. Alpha дає якісні описи рейтингів лише до 5.",
    "A Skill gains Focus slots at ratings 1, 3, and 5. Every Focus is selected by the player. Concrete parenthetical Focuses printed in Lifepaths are recommendations, never fixed values.":
      "Навичка отримує слоти Спеціалізацій на рейтингах 1, 3 і 5. Кожну Спеціалізацію обирає гравець. Конкретні Спеціалізації в дужках у Життєвих Шляхах є рекомендаціями, а не фіксованими значеннями.",
    "Concrete Lifepath suggestions appear first when available. Instructions such as “choose an art form” are not treated as Focus names. RAW Skill examples remain available as quick choices, and you can always type another relevant Focus.":
      "Конкретні рекомендації Життєвого Шляху, якщо вони є, показуються першими. Інструкції на кшталт «виберіть вид мистецтва» не вважаються назвами Спеціалізацій. RAW-приклади Навички лишаються доступними для швидкого вибору, а також завжди можна ввести іншу доречну Спеціалізацію.",
    "Choose the permitted starting Humanity position and the Nature that represents the character’s mortal axis.":
      "Виберіть дозволену початкову позицію Людяності та Натуру, що представляє смертну вісь персонажа.",
    "Matching Resources from multiple Lifepaths are combined into one rating. Define what each Physical or Social Asset actually is for this character.":
      "Однакові Ресурси з кількох Життєвих Шляхів об’єднуються в один рейтинг. Визначте, чим саме є кожен Фізичний або Соціальний Актив цього персонажа.",
    "How Resource dots work: dots represent usable economic, physical, or social capital. A Resource test uses Resource dots + an Attribute chosen by the Storyteller. Each dot improves the Resource’s quality or potential uses. You can temporarily spend a dot to strain the Resource for a greater effect, then recover spent dots through downtime. Use ? on a Resource for its specific dot meaning.":
      "Як працюють точки Ресурсів: вони представляють доступний економічний, фізичний або соціальний капітал. Тест Ресурсу використовує точки Ресурсу + Атрибут, який визначає Оповідач. Кожна точка підвищує якість Ресурсу або розширює можливості його використання. Точку можна тимчасово витратити, щоб напружити Ресурс заради сильнішого ефекту, а потім відновити витрачені точки під час Downtime. Кнопка ? біля Ресурсу пояснює значення його точок.",
    "Describe the actual asset, person, collection, or identity":
      "Опишіть конкретний актив, людину, колекцію або ідентичність",
    "e.g. basement flat in Neustadt, concealed entrance, reinforced shutters":
      "напр. підвальна квартира в Нойштадті, прихований вхід, посилені ролети",
    "Complete identity details, Important Items, weapons if relevant, and optional Flaws. The review below follows a character-sheet hierarchy instead of equal-weight dashboard cards.":
      "Заповніть деталі ідентичності, Важливі Предмети, зброю за потреби та необов’язкові Недоліки. Нижче підсумок організовано за ієрархією листа персонажа, а не як набір рівнозначних карток.",
    "How old the character looks, not a second chronological age field.":
      "Вік, на який виглядає персонаж; це не друге поле хронологічного віку.",
    "Chronological age; the Alpha also asks how old they were at the Embrace and how long ago it was.":
      "Хронологічний вік; Alpha також питає, скільки років персонажу було під час Обернення і скільки часу відтоді минуло.",
    "10 + Stamina": "10 + Витривалість",
    "5 + Composure + Resolve": "5 + Самовладання + Рішучість",
    "Physical and Social Assets must be specific to the character. Most Resource types do not have an exact 1–5 shopping list in the Alpha; their dots scale the quality, size, reach, access, or NPC Level described by that type.":
      "Фізичні та Соціальні Активи мають бути конкретизовані для персонажа. Для більшості типів Ресурсів Alpha не дає точної таблиці покупок від 1 до 5; точки масштабують якість, розмір, охоплення, доступ або Рівень NPC, описаний для відповідного типу.",
    "No eligible powers yet. Add or receive a Discipline dot first.":
      "Доступних Здібностей ще немає. Спершу додайте або отримайте точку Дисципліни.",
    "Complete the Clan Discipline choice first.":
      "Спершу завершіть вибір Кланових Дисциплін.",
    "No full power definitions for this Discipline are supplied in the Alpha packet.":
      "У пакеті Alpha немає повних описів Здібностей для цієї Дисципліни.",
    "Resolve the Clan’s three Disciplines first.":
      "Спершу визначте три Дисципліни Клану.",
    "Physical, Social, and Mental must use different primary/secondary/tertiary budgets.":
      "Фізичні, Соціальні та Розумові Атрибути мають використовувати різні основний, додатковий і третинний бюджети.",
    "Caitiff requires 3 randomly determined Disciplines.":
      "Caitiff потребує 3 випадково визначених Дисциплін.",
    "This clan remains partially in development in the supplied Alpha packet.":
      "Цей Клан лишається частково незавершеним у наданому пакеті Alpha.",
    "Choose a Clan.": "Виберіть Клан.",
    "Choose a Nature.": "Виберіть Натуру.",
    "Enter a character name.": "Введіть ім’я персонажа.",
    Rating: "Рейтинг",
    "Read Lifepath details": "Довідка про Життєвий Шлях",
    "Read Clan rules": "Довідка про правила Клану",
    "Player Packet · Chapter 5:": "Player Packet · Розділ 5:",
    "Player Packet · Chapter 3: The Clans": "Player Packet · Розділ 3: Клани",
    "No qualitative description for this rating is supplied in the Alpha.":
      "Alpha не містить якісного опису цього рейтингу.",
    "Choose the vampire tier used for this character. It controls the RAW creation budgets and maximum ratings.":
      "Виберіть рівень вампіра для цього персонажа. Він визначає RAW-бюджети створення та максимальні рейтинги.",
    "The project Lifepath Skill Cap house rule overrides the RAW cap-3 sentence: a Skill listed by this Lifepath has chargen cap 4.":
      "Правило проєкту щодо ліміту Навичок від Життєвого Шляху замінює RAW-обмеження 3: Навичка, що входить до цього Життєвого Шляху, має ліміт 4 під час створення.",
    "Spend the listed dots among the three Clan Disciplines; the sire-granted dot is separate and cannot be removed.":
      "Розподіліть указані точки між трьома Клановими Дисциплінами; точка, надана Sire, є окремою і не може бути прибрана.",
    "Open Clan step": "Відкрити крок Клану",
    "not selected": "не вибрано",
    "this clan": "цього Клану",
    "RAW says to distribute the listed dots among the three Clan Disciplines; it does not state a mandatory 3/2/1-style spread.":
      "RAW вимагає розподілити вказані точки між трьома Клановими Дисциплінами й не встановлює обов’язкового розподілу на кшталт 3/2/1.",
    "No current Focus-bearing Skill is listed by a selected Lifepath.":
      "Жодна Навичка з доступною Спеціалізацією не входить до вибраних Життєвих Шляхів.",
    "No other Skill currently has a Focus slot.":
      "Жодна інша Навичка зараз не має слота Спеціалізації.",
    "Clan Discipline": "Кланова Дисципліна",
    "Non-Clan": "Позакланова",
    "granted by Sire": "надано Sire",
    "non-Clan at chargen": "позакланова під час створення",
    "Clan allocation": "Клановий розподіл",
    "powers in development": "Здібності в розробці",
    "power selected": "Здібність вибрана",
    "powers selected": "Здібності вибрано",
    "Suggested Focus": "Рекомендована Спеціалізація",
    "Lifepath dots": "Точки Життєвого Шляху",
    Free: "Вільні",
    "Attribute dots remaining": "Залишок точок Атрибутів",
    "Discipline powers": "Здібності Дисциплін",
    "RAW Skill examples": "RAW-приклади Навички",
    "Suggested by Lifepath": "Рекомендовано Життєвим Шляхом",
    Rank: "Ранг",
    "No Lifepaths selected": "Життєві Шляхи не вибрано",
    "Selected Lifepaths": "Вибрані Життєві Шляхи",
    "Apparent Age help": "Довідка про Видимий Вік",
    "Important Item": "Важливий Предмет",
    Weapon: "Зброя",
    Weapons: "Зброя",
    "Player Packet · Step 8: Resources": "Player Packet · Крок 8: Ресурси",
    "Player Packet · Step 9: Finishing Touches":
      "Player Packet · Крок 9: Завершення персонажа",
    "dots represent usable economic, physical, or social capital. A Resource test uses Resource dots + an Attribute chosen by the Storyteller. Each dot improves the Resource’s quality or potential uses. You can temporarily spend a dot to strain the Resource for a greater effect, then recover spent dots through downtime. Use":
      "Точки представляють доступний економічний, фізичний або соціальний капітал. Тест Ресурсу використовує точки Ресурсу + Атрибут, який визначає Оповідач. Кожна точка підвищує якість Ресурсу або розширює можливості його використання. Точку можна тимчасово витратити, щоб напружити Ресурс заради сильнішого ефекту, а потім відновити витрачені точки під час Downtime. Використайте",
    "on a Resource for its specific dot meaning.":
      "біля Ресурсу, щоб прочитати конкретне значення його точок.",
    "Player Packet · Step 8: Your Resources":
      "Player Packet · Крок 8: Ваші Ресурси",
  };
  Object.entries(EXTRA).forEach(([a, b]) => add(a, b));

  function dynamic(s) {
    let x = s;
    const mt = (v) => MAP.get(String(v)) || String(v);
    const terms = (v) =>
      String(v).replace(
        /\b(Blood Sorcery|Animalism|Auspex|Celerity|Corruption|Dominate|Fortitude|Necromancy|Obfuscate|Oblivion|Potence|Presence|Tellurgy|Vicissitude|Neonate|Ancilla|Elder|Strength|Dexterity|Stamina|Charisma|Manipulation|Composure|Intelligence|Wits|Resolve)\b/g,
        (z) => mt(z),
      );
    const reps = [
      [
        /^Each Lifepath normally grants 5 Skill dots among its listed Skills and 3 Resource dots among its listed Resources\. (.+)$/,
        (m, a) =>
          `${MAP.get("Each Lifepath normally grants 5 Skill dots among its listed Skills and 3 Resource dots among its listed Resources.")} ${mt(a)}`,
      ],
      [
        /^(.+) The project Lifepath Skill Cap house rule overrides the RAW cap-3 sentence: a Skill listed by this Lifepath has chargen cap 4\.$/,
        (m, a) =>
          `${mt(a)} ${MAP.get("The project Lifepath Skill Cap house rule overrides the RAW cap-3 sentence: a Skill listed by this Lifepath has chargen cap 4.")}`,
      ],
      [/^Resource (\d+)$/, "Ресурс $1"],
      [
        /^Current (\d+) · Cap (\d+) · Lifepaths: (.+) · (\d+) Focus slots?$/,
        (m, c, cap, names, n) =>
          `Поточний ${c} · Ліміт ${cap} · Життєві Шляхи: ${names.split(" · ").map(mt).join(" · ")} · Слотів Спеціалізацій: ${n}`,
      ],
      [
        /^Spend (\d+) dots only among the three Clan Disciplines\. The sire-granted dot is already present and cannot be removed\. Then choose (\d+) powers, (\d+) Clan Traits, and (\d+) Merits\.$/,
        (m, d, p, t, me) =>
          `Розподіліть ${d} точок лише між трьома Клановими Дисциплінами. Точка, надана Sire, уже врахована й не може бути прибрана. Після цього виберіть Здібності: ${p}, Кланові Риси: ${t}, Переваги: ${me}.`,
      ],
      [
        /^(.+)’s variable Clan Discipline has not been resolved\.$/,
        (m, a) => `Змінну Кланову Дисципліну Клану ${mt(a)} ще не визначено.`,
      ],
      [
        /^Make that choice once on the Clan page before allocating Discipline dots\.$/,
        "Зробіть цей вибір на сторінці Клану до розподілу точок Дисциплін.",
      ],
      [
        /^RAW says to distribute the listed dots among the three Clan Disciplines; it does not state a mandatory 3\/2\/1-style spread\. Tier caps after character creation are Clan (\d+) \/ Non-Clan (\d+)\.$/,
        (m, a, b) =>
          `RAW вимагає розподілити вказані точки між трьома Клановими Дисциплінами й не встановлює обов’язкового розподілу на кшталт 3/2/1. Після створення персонажа ліміти рівня: Кланові ${a} / Позакланові ${b}.`,
      ],
      [/^(.+) \+(\d+)$/, (m, a, n) => `${mt(a)} +${n}`],
      [/^(.+) \(.*\)$/, (m) => m],
      [
        /^House-rule cap \+(\d+) \((.+)\) · Lifepath dots (\d+) \((.+)\)( · Free \+(\d+))?$/,
        (m, cap, capSrc, base, src, freePart, free) =>
          `Бонус ліміту за правилом проєкту +${cap} (${capSrc.split(" · ").map(mt).join(" · ")}) · Точки Життєвого Шляху ${base} (${src
            .split(" · ")
            .map((z) => {
              const q = z.match(/^(.+) \+(\d+)$/);
              return q ? `${mt(q[1])} +${q[2]}` : mt(z);
            })
            .join(" · ")})${free ? ` · Вільні +${free}` : ""}`,
      ],
      [
        /^Lifepath dots (\d+) \((.+)\)( · Free \+(\d+))?$/,
        (m, base, src, freePart, free) =>
          `Точки Життєвого Шляху ${base} (${src
            .split(" · ")
            .map((z) => {
              const q = z.match(/^(.+) \+(\d+)$/);
              return q ? `${mt(q[1])} +${q[2]}` : mt(z);
            })
            .join(" · ")})${free ? ` · Вільні +${free}` : ""}`,
      ],
      [/^ · Free \+(\d+)$/, " · Вільні +$1"],
      [
        /^(.+) · (\d+)-dot (.+)$/,
        (m, a, n, b) => `${mt(a)} · Ранг ${n} · ${mt(b)}`,
      ],
      [/^(\d+)-dot$/, "Ранг $1"],
      [/^(\d+) dots$/, "Точок: $1"],
      [
        /^RAW allowance: (\d+) additional Important Items? because the character has (\d+) Lifepaths?\. Each item should fit the character’s Lifepath background; slots are not permanently assigned one-to-one\. Selected Lifepaths: (.+)\.$/,
        (m, a, b, names) =>
          `Додаткових Важливих Предметів за RAW: ${a}. Життєвих Шляхів у персонажа: ${b}. Кожен предмет має відповідати минулому персонажа, описаному Життєвими Шляхами; слоти не прив’язані до них назавжди один-до-одного. Вибрані Життєві Шляхи: ${names.split(" · ").map(mt).join(" · ")}.`,
      ],
      [
        /^Choose exactly (\d+) Discipline powers\.$/,
        (m, n) => `Виберіть Здібності Дисциплін у кількості ${n}.`,
      ],
      [
        /^Choose exactly (\d+) Clan Traits\.$/,
        (m, n) => `Виберіть Кланові Риси у кількості ${n}.`,
      ],
      [
        /^Choose exactly (\d+) Merits\.$/,
        (m, n) => `Виберіть Переваги у кількості ${n}.`,
      ],
      [
        /^Required · choose (.+)’s third Discipline$/,
        (m, a) => `Обов’язково · виберіть третю Дисципліну Клану ${mt(a)}`,
      ],
      [/^Bonus: (.+)$/, (m, a) => `Бонус: ${mt(a)}`],
      [
        /^Choose the sire type(?: and related Clan)? first\.$/,
        (m) =>
          m.includes("related Clan")
            ? "Спершу виберіть тип Sire і пов’язаний Клан."
            : "Спершу виберіть тип Sire.",
      ],
      [
        /^Choose (\d+) Lifepaths?\. Allocate (\d+) Skill dots and (\d+) Resource dots inside each\.$/,
        (m, n, sd, rd) =>
          `Виберіть ${n} ${Number(n) === 1 ? "Життєвий Шлях" : "Життєві Шляхи"}. У кожному розподіліть ${sd} точок Навичок і ${rd} точок Ресурсів.`,
      ],
      [/^Skill dots (\d+) \/ (\d+)$/, "Точки Навичок $1 / $2"],
      [/^Resource dots (\d+) \/ (\d+)$/, "Точки Ресурсів $1 / $2"],
      [
        /^Suggested Focus: (.+)$/,
        (m, a) => `Рекомендована Спеціалізація: ${mt(a)}`,
      ],
      [
        /^Current (\d+) · Cap (\d+) · house-rule cap bonus \+(\d+)$/,
        "Поточний $1 · Ліміт $2 · бонус ліміту за правилом проєкту +$3",
      ],
      [
        /^House-rule cap \+(\d+) \((.+)\)(.*)$/,
        (m, n, a, rest) =>
          `Бонус ліміту за правилом проєкту +${n} (${a.split(" · ").map(mt).join(" · ")})${rest}`,
      ],
      [
        /^Lifepath dots (\d+)(.*)$/,
        (m, n, rest) => `Точки Життєвого Шляху ${n}${rest}`,
      ],
      [/^Free \+(\d+)$/, "Вільні +$1"],
      [
        /^Ratings earned through Lifepaths stay in place\. Spend (\d+) additional Skill dots without reducing any Lifepath rating\.$/,
        (m, n) =>
          `Рейтинги, отримані з Життєвих Шляхів, лишаються на місці. Розподіліть ${n} додаткових точок Навичок, не зменшуючи рейтинги від Життєвих Шляхів.`,
      ],
      [
        /^(\d+) \/ (\d+) distributed · (\d+) left · final (\d+)$/,
        "$1 / $2 розподілено · залишилось $3 · підсумок $4",
      ],
      [
        /^(Physical|Social|Mental) category priority$/,
        (m, a) => `Пріоритет категорії «${mt(a)}»`,
      ],
      [
        /^Set (.+) to (\d+)$/,
        (m, a, n) => `Встановити значення «${mt(a)}»: ${n}`,
      ],
      [
        /^Read (.+) description and rating scale$/,
        (m, a) => `Прочитати опис і шкалу рейтингів: ${mt(a)}`,
      ],
      [/^Read (.+) rules$/, (m, a) => `Прочитати правила: ${mt(a)}`],
      [/^Read (.+) clan rules$/, (m, a) => `Прочитати правила Клану ${mt(a)}`],
      [
        /^Read (.+) Nature rules$/,
        (m, a) => `Прочитати правила Натури ${mt(a)}`,
      ],
      [/^Read (.+) Nature$/, (m, a) => `Прочитати Натуру ${mt(a)}`],
      [/^Read (.+) information$/, (m, a) => `Прочитати довідку: ${mt(a)}`],
      [/^(\d+) dots$/, "$1 точок"],
      [/^(\d+)-dot$/, "$1 точки"],
      [/^Generation (\d+)$/, "Покоління $1"],
      [/^(\d+) · modifier ([+−-]?\d+)$/, "$1 · модифікатор $2"],
      [/^Nature:$/, "Натура:"],
      [/^Nature: (.+)$/, (m, a) => `Натура: ${mt(a)}`],
      [
        /^Rating (\d+) · Clan allocation (\d+)( · Sire \+1)?( · powers in development)?$/,
        (m, r, n, sire, gap) =>
          `Рейтинг ${r} · Клановий розподіл ${n}${sire ? " · Sire +1" : ""}${gap ? " · Здібності в розробці" : ""}`,
      ],
      [
        /^Rating 1 · granted by Sire · non-Clan at chargen$/,
        "Рейтинг 1 · надано Sire · позакланова під час створення",
      ],
      [
        /^Rating (\d+) · (\d+) powers? selected$/,
        (m, r, n) => `Рейтинг ${r} · вибрано Здібностей: ${n}`,
      ],
      [
        /^(.+) · (\d+)-dot (.+)$/,
        (m, a, n, b) => `${mt(a)} · ${n} точки · ${mt(b)}`,
      ],
      [/^Clan Trait · (.+)$/, (m, a) => `Кланова Риса · ${mt(a)}`],
      [/^Prerequisites: (.+)$/, (m, a) => `Передумови: ${terms(a)}`],
      [
        /^(Animalism|Auspex|Blood Sorcery|Celerity|Corruption|Dominate|Fortitude|Necromancy|Obfuscate|Oblivion|Potence|Presence|Tellurgy|Vicissitude) (\d+)$/,
        (m, a, n) => `${mt(a)} ${n}`,
      ],
      [/^Non-Clan$/, "Позакланова"],
      [
        /^This Sire type grants: (.+)\. The selected bonus dot is already included in the Discipline rating and cannot be removed during chargen\.$/,
        (m, a) =>
          `Цей тип Sire надає: ${mt(a)}. Вибрана бонусна точка вже врахована в рейтингу Дисципліни й не може бути прибрана під час створення персонажа.`,
      ],
      [
        /^Skills: (.+)$/,
        (m, a) =>
          `Навички: ${a
            .split(", ")
            .map((part) => {
              const z = part.match(/^(.+?) \(suggested Focus: (.+)\)$/);
              return z
                ? `${mt(z[1])} (рекомендована Спеціалізація: ${mt(z[2])})`
                : mt(part);
            })
            .join(", ")}`,
      ],
      [
        /^Resources: (.+)$/,
        (m, a) =>
          `Ресурси: ${a
            .split(", ")
            .map((part) => {
              const i = part.indexOf(": ");
              return i > 0
                ? `${mt(part.slice(0, i))}: ${mt(part.slice(i + 2))}`
                : mt(part);
            })
            .join(", ")}`,
      ],
      [
        /^([^:]+): (.+)$/,
        (m, a, b) => (MAP.has(a) && MAP.has(b) ? `${mt(a)}: ${mt(b)}` : m),
      ],
      [
        /^Player Packet · Chapter 5: (.+)$/,
        (m, a) => `Player Packet · Розділ 5: ${mt(a)}`,
      ],
      [
        /^(Physical|Social|Mental) Attribute$/,
        (m, a) =>
          `${a === "Physical" ? "Фізичний" : a === "Social" ? "Соціальний" : "Розумовий"} Атрибут`,
      ],
      [/^(\d+) \/ (\d+) distributed$/, "$1 / $2 розподілено"],
      [
        /^RAW allowance: (\d+) additional Important Items? because the character has (\d+) Lifepaths?\. Each item should fit the character’s Lifepath background; slots are not permanently assigned one-to-one\. Selected Lifepaths: (.+)\.$/,
        (m, a, b, names) =>
          `RAW дозволяє ${a} додатков${Number(a) === 1 ? "ий Важливий Предмет" : "і Важливі Предмети"}, оскільки персонаж має ${b} Життєв${Number(b) === 1 ? "ий Шлях" : "их Шляхи"}. Кожен предмет має відповідати минулому персонажа, описаному Життєвими Шляхами; слоти не прив’язані до них назавжди один-до-одного. Вибрані Життєві Шляхи: ${names.split(" · ").map(mt).join(" · ")}.`,
      ],
      [
        /^Step (\d+): (.+)$/,
        (m, n, a) => `Крок ${n}: ${mt(a) === a ? dynamic(a) : mt(a)}`,
      ],
      [
        /^The supplied Alpha packet does not provide a full Clan Trait set for (.+)\.$/,
        (m, a) =>
          `Наданий пакет Alpha не містить повного набору Кланових Рис для ${mt(a)}.`,
      ],
      [/^Powers (\d+) \/ (\d+)$/, "Здібності $1 / $2"],
      [/^Traits (\d+) \/ (\d+)$/, "Риси $1 / $2"],
      [/^Merits (\d+) \/ (\d+)$/, "Переваги $1 / $2"],
      [/^Clan dots (\d+) \/ (\d+)$/, "Кланові точки $1 / $2"],
      [/^Sire bonus: (.+)$/, (m, a) => `Бонус Sire: ${mt(a)}`],
      [/^Chargen max (\d+)$/, "Максимум під час створення $1"],
      [/^Rating (\d+) · dots$/, "Рейтинг $1 · точки"],
      [
        /^Choose (.+)’s variable third Discipline\.$/,
        (m, a) => `Виберіть змінну третю Дисципліну Клану ${mt(a)}.`,
      ],
      [/^Choose Lifepath (\d+)\.$/, (m, n) => `Виберіть Життєвий Шлях ${n}.`],
      [
        /^Custom Lifepath (\d+) needs a name\.$/,
        (m, n) => `Власний Життєвий Шлях ${n} потребує назви.`,
      ],
      [
        /^Custom Lifepath (\d+) must define exactly 5 Skills\.$/,
        (m, n) => `Власний Життєвий Шлях ${n} має містити рівно 5 Навичок.`,
      ],
      [
        /^Custom Lifepath (\d+) must define exactly 3 Resources\.$/,
        (m, n) => `Власний Життєвий Шлях ${n} має містити рівно 3 Ресурси.`,
      ],
      [
        /^Custom Lifepath (\d+): choose all 3 Resource types\.$/,
        (m, n) => `Власний Життєвий Шлях ${n}: виберіть усі 3 типи Ресурсів.`,
      ],
      [
        /^(.+): spend exactly (\d+) Lifepath Skill dots\.$/,
        (m, a, n) =>
          `${mt(a)}: розподіліть рівно ${n} точок Навичок Життєвого Шляху.`,
      ],
      [
        /^(.+): spend exactly (\d+) Lifepath Resource dots\.$/,
        (m, a, n) =>
          `${mt(a)}: розподіліть рівно ${n} точок Ресурсів Життєвого Шляху.`,
      ],
      [
        /^(Physical|Social|Mental): distribute exactly (\d+) Attribute dots above the three baseline dots \((\d+) distributed\)\.$/,
        (m, a, n, d) =>
          `${mt(a)}: розподіліть рівно ${n} точок Атрибутів понад три базові точки (${d} розподілено).`,
      ],
      [
        /^(.+) must be between 1 and (\d+)\.$/,
        (m, a, n) => `${mt(a)} має бути в межах від 1 до ${n}.`,
      ],
      [
        /^Spend exactly (\d+) free Skill dots\.$/,
        (m, n) => `Розподіліть рівно ${n} вільних точок Навичок.`,
      ],
      [
        /^(.+) exceeds its house-rule character-creation cap of (\d+)\.$/,
        (m, a, n) =>
          `${mt(a)} перевищує ліміт ${n} під час створення персонажа за правилом проєкту.`,
      ],
      [
        /^(.+): fill (\d+) Focus slots? for rating (\d+)\.$/,
        (m, a, n, r) =>
          `${mt(a)}: заповніть ${n} слот(и) Спеціалізацій для рейтингу ${r}.`,
      ],
      [
        /^Distribute exactly (\d+) Clan Discipline dots\.$/,
        (m, n) => `Розподіліть рівно ${n} точок Кланових Дисциплін.`,
      ],
      [
        /^(.+) exceeds maximum (\d+) dots for this tier\.$/,
        (m, a, n) => `${mt(a)} перевищує максимум ${n} точок для цього рівня.`,
      ],
      [
        /^Choose exactly (\d+) Discipline powers\.$/,
        (m, n) => `Виберіть рівно ${n} Здібностей Дисциплін.`,
      ],
      [
        /^(.+) is listed in the Alpha power summary but its full rules entry is missing from the supplied packet\.$/,
        (m, a) =>
          `${mt(a)} наведено у зведеному списку Здібностей Alpha, але повний запис правила відсутній у наданому пакеті.`,
      ],
      [
        /^Choose exactly (\d+) Clan Traits\.$/,
        (m, n) => `Виберіть рівно ${n} Кланових Рис.`,
      ],
      [
        /^Choose exactly (\d+) Merits\.$/,
        (m, n) => `Виберіть рівно ${n} Переваг.`,
      ],
      [
        /^No power definitions are supplied for: (.+)\.$/,
        (m, a) =>
          `Для цих Дисциплін не надано описів Здібностей: ${a.split(", ").map(mt).join(", ")}.`,
      ],
      [
        /^Spend exactly (\d+) free Resource dots\.$/,
        (m, n) => `Розподіліть рівно ${n} вільних точок Ресурсів.`,
      ],
      [
        /^(.+) exceeds the (\d+)-dot character-creation maximum after Lifepath sources are combined\.$/,
        (m, a, n) =>
          `${mt(a)} перевищує максимум ${n} точок під час створення після об’єднання джерел із Життєвих Шляхів.`,
      ],
      [
        /^(.+) from Lifepaths must be made specific with a character description\.$/,
        (m, a) =>
          `${mt(a)} із Життєвих Шляхів треба конкретизувати описом для цього персонажа.`,
      ],
      [
        /^Free Resource (\d+) has an unknown type\.$/,
        (m, n) => `Вільний Ресурс ${n} має невідомий тип.`,
      ],
      [
        /^Free Resource (\d+) has an invalid rating\.$/,
        (m, n) => `Вільний Ресурс ${n} має недопустимий рейтинг.`,
      ],
      [
        /^(.+) needs a specific label\.$/,
        (m, a) => `${mt(a)} потребує конкретної назви.`,
      ],
      [
        /^Important item (\d+) is empty\.$/,
        (m, n) => `Важливий Предмет ${n} не заповнено.`,
      ],
      [/^(\d+)\/1 selected$/, "$1/1 вибрано"],
      [/^(\d+)\/1 Clan/, "$1/1 Клан"],
      [/ (\d+)\/3 Disciplines/g, " $1/3 Дисципліни"],
      [/^(\d+)\/(\d+) choices · (\d+) left$/, "$1/$2 виборів · залишилось $3"],
      [
        /^(\d+)\/(\d+) paths · (\d+) dots left$/,
        "$1/$2 Життєвих Шляхів · залишилось $3 точок",
      ],
      [
        /^(\d+)\/(\d+) distributed · (\d+) left$/,
        "$1/$2 розподілено · залишилось $3",
      ],
      [
        /^(\d+)\/(\d+) free dots · (\d+) left$/,
        "$1/$2 вільних точок · залишилось $3",
      ],
      [
        /^(\d+)\/(\d+) Focuses · (\d+) left$/,
        "$1/$2 Спеціалізацій · залишилось $3",
      ],
      [
        /^(\d+)\/(\d+) required fields · (\d+) left$/,
        "$1/$2 обов’язкових полів · залишилось $3",
      ],
      [
        /^Dots (\d+)\/(\d+) · Powers (\d+)\/(\d+) · Traits (\d+)\/(\d+) · Merits (\d+)\/(\d+)$/,
        "Точки $1/$2 · Здібності $3/$4 · Риси $5/$6 · Переваги $7/$8",
      ],
      [/^(\d+)\/1 Nature$/, "$1/1 Натура"],
      [
        /^Max dots (\d+) · Chargen max Discipline (\d+) · Generation Modifier (\d+)$/,
        "Макс. точок $1 · Макс. Дисципліни під час створення $2 · Модифікатор Покоління $3",
      ],
      [/^(\d+) Lifepaths$/, "$1 Життєві Шляхи"],
      [/^Attributes ([\d/]+)$/, "Атрибути $1"],
      [/^(\d+)\+(\d+) Discipline dots$/, "$1+$2 точок Дисциплін"],
      [/^Modifier (\d+)$/, "Модифікатор $1"],
      [/^Bonus: /, "Бонус: "],
      [/^Rating (\d+) · /, "Рейтинг $1 · "],
      [/^Current (\d+) · Cap (\d+)/, "Поточний $1 · Ліміт $2"],
      [/^Current (\d+)$/, "Поточний $1"],
      [/^Cap (\d+)$/, "Ліміт $1"],
      [/^(\d+) Focus slots?$/, "$1 слотів Спеціалізацій"],
      [/^(\d+) Focus slot$/, "$1 слот Спеціалізації"],
      [/^Focus at rating (\d+)$/, "Спеціалізація на рейтингу $1"],
      [/^(\d+) of (\d+) selected$/, "Вибрано $1 із $2"],
      [/^(\d+) of (\d+) distributed$/, "Розподілено $1 із $2"],
      [
        /^(\d+) \/ (\d+) distributed · (\d+) left · final (\d+)$/,
        "$1 / $2 розподілено · залишилось $3 · підсумок $4",
      ],
      [/^Rating (\d+) · max now (\d+)$/, "Рейтинг $1 · зараз максимум $2"],
      [/^Lifepath (\d+)$/, "Життєвий Шлях $1"],
      [/^Important Item (\d+)$/, "Важливий Предмет $1"],
      [/^(\d+)(th|st|nd|rd)$/, "$1"],
      [/^Step (\d+): /, "Крок $1: "],
    ];
    for (const [r, v] of reps) x = x.replace(r, v);
    return x;
  }
  function tr(s) {
    const raw = String(s ?? "");
    const lead = raw.match(/^\s*/)?.[0] || "",
      trail = raw.match(/\s*$/)?.[0] || "";
    const core = raw.slice(lead.length, raw.length - trail.length);
    if (!core) return raw;
    const exact = MAP.get(core);
    if (exact) return lead + exact + trail;
    const d = dynamic(core);
    if (d !== core) return lead + d + trail;
    return raw;
  }
  function shouldSkipText(n) {
    const p = n.parentElement;
    if (!p) return true;
    return ["SCRIPT", "STYLE", "TEXTAREA", "CODE", "PRE"].includes(p.tagName);
  }
  function apply(root = document) {
    if (locale === "en") {
      const w = document.createTreeWalker(
        root.body || root,
        NodeFilter.SHOW_TEXT,
      );
      let n;
      while ((n = w.nextNode())) {
        if (textOriginal.has(n)) n.nodeValue = textOriginal.get(n);
      }
      (
        root.querySelectorAll?.("[title],[aria-label],[placeholder]") || []
      ).forEach((el) => {
        const m = attrOriginal.get(el);
        if (m) for (const [a, v] of Object.entries(m)) el.setAttribute(a, v);
      });
      document.documentElement.lang = "en";
      document.title = "VTM V6 Alpha Character Generator";
      updateControls();
      return;
    }
    const w = document.createTreeWalker(
      root.body || root,
      NodeFilter.SHOW_TEXT,
    );
    let n;
    while ((n = w.nextNode())) {
      if (shouldSkipText(n)) continue;
      if (!textOriginal.has(n)) textOriginal.set(n, n.nodeValue);
      n.nodeValue = tr(textOriginal.get(n));
    }
    (
      root.querySelectorAll?.("[title],[aria-label],[placeholder]") || []
    ).forEach((el) => {
      let m = attrOriginal.get(el);
      if (!m) {
        m = {};
        for (const a of ["title", "aria-label", "placeholder"])
          if (el.hasAttribute(a)) m[a] = el.getAttribute(a);
        attrOriginal.set(el, m);
      }
      for (const [a, v] of Object.entries(m)) el.setAttribute(a, tr(v));
    });
    document.documentElement.lang = "uk";
    document.title = "VTM V6 Alpha — Генератор Персонажа";
    updateControls();
  }
  function updateControls() {
    const target = locale === "uk" ? "EN" : "UA";
    const title =
      locale === "uk" ? "Перемкнути англійською" : "Перемкнути українською";
    for (const id of ["langToggleBtn", "mobileLangToggleBtn"]) {
      const b = document.getElementById(id);
      if (b) {
        b.textContent = target;
        b.title = title;
        b.setAttribute("aria-label", title);
      }
    }
    const imp = document.getElementById("importLabelText");
    if (imp) imp.textContent = locale === "uk" ? "Імпорт JSON" : "Import JSON";
    const mi = document.getElementById("mobileImportLabelText");
    if (mi) mi.textContent = locale === "uk" ? "Імпорт" : "Import";
  }
  function setLocale(l) {
    locale = l === "uk" ? "uk" : "en";
    localStorage.setItem(KEY, locale);
  }
  function toggle() {
    setLocale(locale === "uk" ? "en" : "uk");
  }
  function getLocale() {
    return locale;
  }
  window.V6I18N = { apply, updateControls, setLocale, toggle, getLocale, tr };
})();
