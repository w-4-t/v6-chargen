(()=>{
'use strict';
const KEY='vtm_v6_alpha_chargen_language';
let locale=localStorage.getItem(KEY)==='uk'?'uk':'en';
const textOriginal=new WeakMap();
const attrOriginal=new WeakMap();
const MAP=new Map();
const add=(en,uk)=>{if(en&&uk&&en!==uk)MAP.set(String(en),String(uk));};

const UI={
'VTM V6 Alpha Character Generator':'VTM V6 Alpha — генератор персонажа',
'Character Generator':'Генератор персонажа','Physical Asset':'Фізичний Asset','Social Asset':'Соціальний Asset','Wealth':'Добробут','mortal':'смертний','neonate':'неонат','ancilla':'анцилла','elder':'старійшина',
'VTM V6 Alpha Chargen':'VTM V6 Alpha — генератор',
'V6 Alpha · project house rules labelled':'V6 Alpha · правила проєкту позначені окремо',
'Export JSON':'Експорт JSON','Import JSON':'Імпорт JSON','Export':'Експорт','Import':'Імпорт','Reset':'Скинути','Reset character':'Скинути персонажа','Info':'Довідка',
'Back':'Назад','Next':'Далі','Review':'Перегляд','This step is complete.':'Цей крок завершено.',
'Creature':'Тип','Clan':'Клан','Sire':'Sire','Lifepaths':'Lifepaths','Attributes':'Атрибути','Skills':'Skills','Focuses':'Focuses','Powers':'Дисципліни','Humanity':'Humanity','Resources':'Resources','Finish':'Завершення',
'What are you?':'Хто ви?','Your Clan':'Ваш клан','Sire & Generation':'Sire і покоління','Your Lifepaths':'Ваші Lifepaths','Disciplines, Traits & Merits':'Дисципліни, Traits і Merits','Humanity & Nature':'Humanity і Nature','Your Resources':'Ваші Resources','Finishing Touches':'Завершення персонажа',
'Step 1 · What Are You?':'Крок 1 · Хто ви?','Step 2 · Your Clan':'Крок 2 · Ваш клан','Step 3 · Sire & Generation':'Крок 3 · Sire і покоління','Step 4 · Your Lifepaths':'Крок 4 · Ваші Lifepaths','Step 5 · Attributes':'Крок 5 · Атрибути','Step 6 · Skills':'Крок 6 · Skills','Step 7 · Focuses':'Крок 7 · Focuses','Step 8 · Disciplines, Clan Traits & Merits':'Крок 8 · Дисципліни, Clan Traits і Merits','Step 9 · Humanity Scale & Nature':'Крок 9 · Шкала Humanity і Nature','Step 10 · Your Resources':'Крок 10 · Ваші Resources','Step 11 · Finishing Touches':'Крок 11 · Завершення персонажа',
'Choose the vampire tier used for this character. It controls the RAW creation budgets and maximum ratings.':'Виберіть tier вампіра. Він визначає RAW-бюджети створення персонажа та максимальні рейтинги.',
'Choose a clan. Long descriptions use list rows on desktop so each entry keeps its natural height.':'Виберіть клан. На desktop довгі описи подано рядками природної висоти.',
'Choose each part directly. This page no longer uses dropdowns for the primary chargen choices.':'Виберіть кожну складову напряму. Для основних рішень тут не використовуються випадаючі списки.',
'Choose a Lifepath.':'Виберіть Lifepath.','Selection':'Вибір','Choose…':'Вибрати…','Custom Lifepath (RAW)':'Власний Lifepath (RAW)',
'Optional young character rule':'Опційне правило молодого персонажа','Use one Lifepath':'Використати один Lifepath',
'Selected clan':'Вибраний клан','Full Alpha entry':'Повний запис Alpha','Full Alpha':'Повний Alpha','In development':'У розробці','Clan list':'Список кланів',
'Required':'Обов’язково','Caitiff · 3 randomly determined Disciplines':'Caitiff · 3 випадково визначені Дисципліни','RAW says these are randomly determined. Use Randomize for a RAW selection; manual changes remain available for table adjudication.':'RAW вимагає випадкового визначення. Кнопка Randomize дає RAW-вибір; ручна зміна лишається доступною для рішення столу.','Randomize 3':'Випадково 3',
'Sire type':'Тип Sire','Generation':'Покоління','Adoptive sire Clan':'Клан прийомного Sire','Broodmate Clan':'Клан broodmate','Bonus Discipline':'Бонусна Дисципліна',
'Lifepath Skills':'Skills Lifepath','Lifepath Resources':'Resources Lifepath','Skill dots':'Точки Skill','Resource dots':'Точки Resource','Read Lifepath details':'Довідка про Lifepath',
'Primary':'Основна','Secondary':'Додаткова','Tertiary':'Третинна','Physical':'Фізичні','Social':'Соціальні','Mental':'Ментальні',
'Reset Attributes':'Скинути Атрибути','Reset Skills':'Скинути Skills','Reset Focuses':'Скинути Focuses',
'Free Skill dots remaining':'Залишок вільних точок Skills','Focus choices remaining':'Залишок виборів Focus','Skills from selected Lifepaths':'Skills із вибраних Lifepaths','Other Skills':'Інші Skills',
'Current':'Поточний','Cap':'Ліміт','Player choice':'Вибір гравця','Suggested by Lifepath':'Рекомендовано Lifepath','RAW Skill examples':'Приклади RAW для Skill','Choose or type a Focus':'Виберіть або введіть Focus','Suggestions are optional. Enter another relevant Focus if it better fits the character.':'Рекомендації необов’язкові. Можна ввести інший доречний Focus, якщо він краще відповідає персонажу.',
'Discipline dots remaining':'Залишок точок Дисциплін','Powers remaining':'Залишок Powers','Clan Disciplines':'Кланові Дисципліни','Discipline Powers':'Powers Дисциплін','Clan Traits':'Clan Traits','Merits':'Merits','Known powers':'Відомі Powers','unlocks rank':'відкриває rank',
'Starting Humanity':'Початкова Humanity','Nature':'Nature','Balanced':'Збалансовано','Toward Beast':'До Beast','Toward Nature':'До Nature',
'How Resource dots work:':'Як працюють точки Resources:','From Lifepaths':'Із Lifepaths','Free Resources':'Вільні Resources','Free Resource dots remaining':'Залишок вільних точок Resources','Add Resource':'Додати Resource','Type':'Тип','Specific label':'Конкретизація','Dots':'Точки','Remove':'Видалити','Character details (optional)':'Деталі персонажа (необов’язково)','Make this asset specific':'Конкретизуйте цей Asset',
'Name':'Ім’я','Alias':'Псевдонім','Apparent Age':'Видимий вік','Actual Age':'Фактичний вік','Nostalgic Decade':'Ностальгічне десятиліття','Important Items':'Important Items','Weapons / combat gear (optional, Storyteller-adjudicated)':'Зброя / бойове спорядження (необов’язково, за рішенням Storyteller)','Flaws (optional, free text)':'Flaws (необов’язково, вільний текст)','Character Review':'Підсумковий чаршит','Validation':'Перевірка',
'Identity':'Ідентичність','Vitae Maximum':'Максимум Vitae','Willpower Maximum':'Максимум Willpower','Disciplines & Powers':'Дисципліни та Powers','Weapons / Combat Gear':'Зброя / бойове спорядження','Flaws':'Flaws',
'Rules reference':'Довідка правил','Information':'Інформація','VTM V6 Alpha Player Packet':'VTM V6 Alpha Player Packet',
'Current rating':'Поточний рейтинг','Tier Max Dots':'Максимум точок tier','Highest legal now':'Найвище доступне зараз','Category allocation':'Розподіл категорії','Final category total':'Підсумок категорії','Chargen cap':'Ліміт на chargen','Lifepath cap bonus':'Бонус ліміту від Lifepath','Focus slots':'Слоти Focus','Discipline':'Дисципліна','Activate':'Активація','Attribute':'Атрибут','Cost':'Вартість','Difficulty':'Difficulty','Distance':'Дистанція','Duration':'Тривалість','Alpha powers':'Powers у Alpha','Prerequisites':'Передумови',
'Tier of Play':'Tier гри','Maximum Dots':'Максимум точок','Maximum Discipline at chargen':'Максимум Дисципліни на chargen','Generation Modifier':'Модифікатор покоління',
'How tests use it':'Як використовується в тестах','Resource dots + an Attribute chosen by the Storyteller':'Точки Resource + Атрибут, який визначає Storyteller','Straining a Resource':'Напруження Resource','Temporarily spend a dot for a greater effect':'Тимчасово витратьте точку заради сильнішого ефекту','Recovery':'Відновлення','Spent dots recover through downtime':'Витрачені точки відновлюються через downtime',
'One scene':'Одна сцена','One Scene':'Одна сцена','One night':'Одна ніч','One night or until completed':'Одна ніч або до завершення','One turn':'Один хід','Instantaneous':'Миттєво','Permanent':'Постійно','Instantaneous or one night':'Миттєво або одна ніч','Self':'На себе','Touch':'Дотик','Short':'Коротка','Medium':'Середня','Close':'Близька','Action':'Дія','Minor action':'Мала дія','Minor action or reaction':'Мала дія або реакція','None':'Немає','Varies':'Залежить','Unknown':'Невідомо',
'full entry missing':'повний запис відсутній','Alpha source gap':'прогалина в Alpha','Discipline Power':'Power Дисципліни','Skill':'Skill','Lifepath':'Lifepath','Clan Trait':'Clan Trait','Merit':'Merit',
'No current Focus-bearing Skill is listed by a selected Lifepath.':'Жоден Skill із поточним слотом Focus не входить до вибраних Lifepaths.','No other Skill currently has a Focus slot.':'Жоден інший Skill зараз не має слота Focus.','No Lifepath Resource dots allocated yet.':'Точки Resources із Lifepaths ще не розподілено.','Character is complete under the implemented Alpha rules.':'Персонаж завершений відповідно до реалізованих правил Alpha.',
'Reset all Attribute ratings to their 1-dot baseline?':'Скинути всі Атрибути до базового рейтингу 1?',
'Reset all free Skill dots? Lifepath Skill dots will stay.':'Скинути всі вільні точки Skills? Точки Skills із Lifepaths залишаться.',
'Clear all selected Focuses?':'Очистити всі вибрані Focuses?',
'Reset the current character?':'Скинути поточного персонажа?',
'Could not import this character JSON: ':'Не вдалося імпортувати JSON персонажа: '
};
Object.entries(UI).forEach(([a,b])=>add(a,b));

function pair(en,uk){ if(typeof en==='string'&&typeof uk==='string') add(en,uk); }
function byId(arr,id){return (arr||[]).find(x=>x.id===id);}
function buildDataMap(){
 const E=window.V6_DATA,U=window.V6_UK_DATA||{}; if(!E)return;
 Object.entries(U.attributes||{}).forEach(([id,u])=>{const x=byId(E.attributes,id);if(!x)return;pair(x.name,u.name);pair(x.description,u.description);Object.entries(u.ratings||{}).forEach(([k,v])=>pair(x.ratings?.[k],v));(u.mechanics||[]).forEach((v,i)=>pair(x.mechanics?.[i],v));});
 Object.entries(U.skills||{}).forEach(([id,u])=>{const x=byId(E.skills,id);if(!x)return;pair(x.name,u.name);pair(x.description,u.description);(u.focuses||[]).forEach((f,i)=>{pair(x.focuses?.[i]?.name,f.name);pair(x.focuses?.[i]?.description,f.description);});});
 for(const section of ['sires','creatures','lifepaths','resourceTypes','disciplines','clans']) Object.entries(U[section]||{}).forEach(([id,u])=>{const x=byId(E[section],id);if(!x)return;for(const [k,v] of Object.entries(u)) if(typeof v==='string') pair(x[k],v);});
 const g=U.globals||{};for(const [k,v] of Object.entries(g))pair(E[k],v);
}
buildDataMap();

const LONG={
'Choose the vampire tier. The tier sets maximum dots and the character-creation budgets for Lifepaths, Attributes, Disciplines, powers, Merits, Clan Traits, Skills, and Resources.':'Виберіть tier вампіра. Tier визначає максимальні рейтинги та бюджети створення для Lifepaths, Атрибутів, Дисциплін, Powers, Merits, Clan Traits, Skills і Resources.',
'This build focuses on Vampire Neonate, Ancilla, and Elder. Ghoul and Duskborn remain outside the enabled flow for now.':'Ця збірка підтримує вампірів tier Neonate, Ancilla та Elder. Ghoul і Duskborn поки що не включені в активний процес генерації.',
'Clan determines your curse, Beast/frenzy expression, clan Disciplines, and available Clan Traits.':'Клан визначає ваше прокляття, прояв Beast/Frenzy, кланові Дисципліни та доступні Clan Traits.',
'Select a clan, then resolve any required variable Discipline immediately. For Lasombra this means choosing Corruption or Oblivion before Discipline-dot allocation.':'Виберіть клан і відразу визначте змінну Дисципліну, якщо вона потрібна. Для Lasombra це означає вибрати Corruption або Oblivion до розподілу точок Дисциплін.',
'Your sire type grants 1 additional Discipline dot. Generation places you in a power category and sets the generation modifier.':'Тип Sire дає 1 додаткову точку Дисципліни. Покоління визначає категорію сили крові та модифікатор покоління.',
'The Storyteller typically chooses generation. Neonates are 13th–11th generation, Ancillae 10th–9th, and Elders 8th–6th in the supplied Alpha rules.':'Зазвичай покоління визначає Storyteller. У наданій Alpha неонати мають 13–11 покоління, анцилли — 10–9, старійшини — 8–6.',
'Lifepaths represent past professions, identities, and roles. Each Lifepath gives Skill and Resource dots.':'Lifepaths представляють минулі професії, ідентичності та ролі. Кожен Lifepath дає точки Skills і Resources.',
'Attributes define the character’s potential in Physical, Social, and Mental categories.':'Атрибути визначають потенціал персонажа у фізичній, соціальній та ментальній категоріях.',
'Assign primary, secondary, and tertiary category budgets. Each Attribute begins at 1. Use the Info button to read what each rating means; changing dots on mobile no longer opens the help drawer automatically.':'Призначте основний, додатковий і третинний бюджети категорій. Кожен Атрибут починається з 1. Кнопка довідки пояснює значення кожного рейтингу.',
'Skills define learned competency. Lifepaths contribute dots first, then you distribute the free Skill dots from the tier budget.':'Skills описують набуту компетентність. Спочатку точки дають Lifepaths, після чого розподіляються вільні точки Skills із бюджету tier.',
'House rule: the base chargen Skill cap is 3, and each selected Lifepath that lists a Skill raises that Skill’s cap by +1, whether or not a Lifepath dot was assigned to it. Focus selection is handled on the next page.':'House rule: базовий ліміт Skill на chargen дорівнює 3; кожен вибраний Lifepath, у списку якого є цей Skill, підвищує його ліміт на +1 незалежно від того, чи була в нього вкладена точка Lifepath. Focuses вибираються на наступній сторінці.',
'A Skill has one Focus at rating 1, a second at 3, and a third at 5. Rating 2 therefore still has exactly one Focus.':'Skill отримує перший Focus на рейтингу 1, другий на 3 і третій на 5. Отже рейтинг 2 усе ще має рівно один Focus.',
'All Focus slots are player choices. Parenthetical Focuses printed in selected Lifepaths are shown as recommendations during selection, alongside the Skill’s RAW example Focuses. They never lock or auto-fill a Focus, and you may type another relevant Focus.':'Усі слоти Focus обирає гравець. Focuses у дужках у вибраних Lifepaths показуються як рекомендації поруч із RAW-прикладами Skill. Вони нічого не блокують і не заповнюються автоматично; можна ввести інший релевантний Focus.',
'Discipline dots unlock powers by rank. Clan Traits and Merits provide distinctive passive or activated abilities.':'Точки Дисципліни відкривають Powers відповідного rank. Clan Traits і Merits дають окремі пасивні або активовані властивості.',
'Choose the exact number of powers, Clan Traits, and Merits from the Dot Distribution table. A power’s rank cannot exceed your dots in its Discipline. Prerequisites are enforced when the Alpha text provides them.':'Виберіть точну кількість Powers, Clan Traits і Merits із таблиці Dot Distribution. Rank Power не може перевищувати рейтинг відповідної Дисципліни. Передумови застосовуються там, де їх містить Alpha.',
'A vampire begins balanced in the center of the seven-position Humanity Scale. Nature defines the mortal axis and its outburst.':'Вампір починає в центрі семипозиційної шкали Humanity. Nature визначає його смертну вісь та відповідний outburst.',
'Resources are Physical Assets, Social Assets, and Wealth. Lifepaths grant Resource dots; the Dot Distribution table grants additional free Resource dots.':'Resources поділяються на Physical Assets, Social Assets і Wealth. Lifepaths дають точки Resources, а таблиця Dot Distribution — додаткові вільні точки.',
'Calculate Vitae and Willpower, then define identity details, important items, and optional Flaws.':'Розрахуйте Vitae і Willpower, після чого визначте деталі ідентичності, Important Items та необов’язкові Flaws.',
'The Alpha packet provides a Skill description and example Focuses, but no rating-by-rating Skill scale comparable to Attributes.':'Alpha містить опис Skill та приклади Focuses, але не дає шкали значень кожного рейтингу, подібної до Атрибутів.',
'Powers are listed by rank. Open an individual power for activation, cost, Difficulty, distance, duration, and full rules text.':'Powers згруповані за rank. Відкрийте конкретну Power, щоб побачити активацію, вартість, Difficulty, дистанцію, тривалість і повний текст правила.',
'The supplied Alpha packet lists this Discipline in clan summaries but does not provide Chapter 5 power definitions for it.':'Надана Alpha згадує цю Дисципліну в описах кланів, але не містить визначень її Powers у Chapter 5.',
'The selected vampire tier sets character-creation budgets and maximum ratings.':'Вибраний tier вампіра визначає бюджети створення персонажа й максимальні рейтинги.',
'Generation measures how far the vampire is descended from the First Vampire.':'Покоління показує, наскільки далеко вампір стоїть у лінії нащадків від Першого Вампіра.',
'How old or young do you look? This is the character’s apparent age: the age an observer would estimate from their appearance. It is separate from Actual Age.':'Наскільки старим або молодим ви виглядаєте? Apparent Age — це вік, який сторонній спостерігач оцінив би за зовнішністю персонажа. Він відрізняється від Actual Age.'
};Object.entries(LONG).forEach(([a,b])=>add(a,b));

function dynamic(s){
 let x=s;
 const reps=[
  [/^(\d+)\/1 selected$/,'$1/1 вибрано'],[/^(\d+)\/1 Clan/,'$1/1 клан'],[/ (\d+)\/3 Disciplines/g,' $1/3 Дисципліни'],
  [/^(\d+)\/(\d+) choices · (\d+) left$/,'$1/$2 виборів · залишилось $3'],[/^(\d+)\/(\d+) paths · (\d+) dots left$/,'$1/$2 Lifepaths · залишилось $3 точок'],
  [/^(\d+)\/(\d+) distributed · (\d+) left$/,'$1/$2 розподілено · залишилось $3'],[/^(\d+)\/(\d+) free dots · (\d+) left$/,'$1/$2 вільних точок · залишилось $3'],
  [/^(\d+)\/(\d+) Focuses · (\d+) left$/,'$1/$2 Focuses · залишилось $3'],[/^(\d+)\/(\d+) required fields · (\d+) left$/,'$1/$2 обов’язкових полів · залишилось $3'],
  [/^Dots (\d+)\/(\d+) · Powers (\d+)\/(\d+) · Traits (\d+)\/(\d+) · Merits (\d+)\/(\d+)$/,'Точки $1/$2 · Powers $3/$4 · Traits $5/$6 · Merits $7/$8'],
  [/^(\d+)\/1 Nature$/,'$1/1 Nature'],
  [/^Max dots (\d+) · Chargen max Discipline (\d+) · Generation Modifier (\d+)$/,'Макс. точок $1 · Макс. Дисципліни на chargen $2 · Модифікатор покоління $3'],
  [/^(\d+) Lifepaths$/,'$1 Lifepaths'],[/^Attributes ([\d/]+)$/,'Атрибути $1'],[/^(\d+)\+(\d+) Discipline dots$/,'$1+$2 точок Дисциплін'],
  [/^Modifier (\d+)$/,'Модифікатор $1'],[/^Bonus: /,'Бонус: '],[/^Rating (\d+) · /,'Рейтинг $1 · '],
  [/^Current (\d+) · Cap (\d+)/,'Поточний $1 · Ліміт $2'],[/^Current (\d+)$/,'Поточний $1'],[/^Cap (\d+)$/,'Ліміт $1'],
  [/^(\d+) Focus slots?$/,'$1 слотів Focus'],[/^(\d+) Focus slot$/,'$1 слот Focus'],[/^Focus at rating (\d+)$/,'Focus на рейтингу $1'],
  [/^(\d+) of (\d+) selected$/,'Вибрано $1 із $2'],[/^(\d+) of (\d+) distributed$/,'Розподілено $1 із $2'],
  [/^(\d+) \/ (\d+) distributed · (\d+) left · final (\d+)$/,'$1 / $2 розподілено · залишилось $3 · підсумок $4'],
  [/^Rating (\d+) · max now (\d+)$/,'Рейтинг $1 · зараз максимум $2'],
  [/^Lifepath (\d+)$/,'Lifepath $1'],[/^Important Item (\d+)$/,'Important Item $1'],[/^(\d+)(th|st|nd|rd)$/,'$1'],
  [/^Step (\d+): /,'Крок $1: ']
 ];
 for(const [r,v] of reps)x=x.replace(r,v);
 return x;
}
function tr(s){const raw=String(s??'');const lead=raw.match(/^\s*/)?.[0]||'',trail=raw.match(/\s*$/)?.[0]||'';const core=raw.slice(lead.length,raw.length-trail.length);if(!core)return raw;const exact=MAP.get(core);if(exact)return lead+exact+trail;if(core.length<=220){const d=dynamic(core);if(d!==core)return lead+d+trail;}return raw;}
function shouldSkipText(n){const p=n.parentElement;if(!p)return true;return ['SCRIPT','STYLE','TEXTAREA','CODE','PRE'].includes(p.tagName);}
function apply(root=document){
 if(locale==='en'){
  const w=document.createTreeWalker(root.body||root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(textOriginal.has(n))n.nodeValue=textOriginal.get(n)}
  (root.querySelectorAll?.('[title],[aria-label],[placeholder]')||[]).forEach(el=>{const m=attrOriginal.get(el);if(m)for(const [a,v] of Object.entries(m))el.setAttribute(a,v)});
  updateControls();document.documentElement.lang='en';return;
 }
 const w=document.createTreeWalker(root.body||root,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(shouldSkipText(n))continue;if(!textOriginal.has(n))textOriginal.set(n,n.nodeValue);const base=textOriginal.get(n);n.nodeValue=tr(base)}
 (root.querySelectorAll?.('[title],[aria-label],[placeholder]')||[]).forEach(el=>{let m=attrOriginal.get(el);if(!m){m={};for(const a of ['title','aria-label','placeholder'])if(el.hasAttribute(a))m[a]=el.getAttribute(a);attrOriginal.set(el,m)}for(const [a,v] of Object.entries(m))el.setAttribute(a,tr(v))});
 updateControls();document.documentElement.lang='uk';
}
function updateControls(){const target=locale==='uk'?'EN':'UA';const title=locale==='uk'?'Перемкнути англійською':'Перемкнути українською';for(const id of ['langToggleBtn','mobileLangToggleBtn']){const b=document.getElementById(id);if(b){b.textContent=target;b.title=title;b.setAttribute('aria-label',title)}}const imp=document.getElementById('importLabelText');if(imp)imp.textContent=locale==='uk'?'Імпорт JSON':'Import JSON';const mi=document.getElementById('mobileImportLabelText');if(mi)mi.textContent=locale==='uk'?'Імпорт':'Import';}
function setLocale(l){locale=l==='uk'?'uk':'en';localStorage.setItem(KEY,locale);}
function toggle(){setLocale(locale==='uk'?'en':'uk');}
function getLocale(){return locale;}
window.V6I18N={apply,updateControls,setLocale,toggle,getLocale,tr};
})();
