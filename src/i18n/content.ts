export type Lang = 'ru' | 'ua' | 'de'

export const languages: Lang[] = ['ru', 'ua', 'de']

export interface TranslationStrings {
  navAbout: string
  navServices: string
  navExperience: string
  navFaq: string
  menuLabel: string
  callBtn: string
  heroTag: string
  heroTitle: string
  heroName: string
  heroLead: string
  heroCta: string
  heroCaption: string
  aboutBadge: string
  aboutTitle: string
  aboutLead: string
  aboutNoteTitle: string
  aboutNoteText: string
  howBadge: string
  howTitle: string
  howLead: string
  step1Title: string
  step1Body: string
  step2Title: string
  step2Body: string
  step3Title: string
  step3Body: string
  expBadge: string
  expTitle: string
  expLead: string
  expShowMore: string
  expShowLess: string
  eduShowMore: string
  eduShowLess: string
  eduBadge: string
  eduTitle: string
  eduLead: string
  eduHighlightTitle: string
  eduHighlightText: string
  eduViewLabel: string
  servicesBadge: string
  servicesTitle: string
  servicesLead: string
  servicesCta: string
  servicesCtaMore: string
  free: string
  processBadge: string
  processTitle: string
  processLead: string
  p1Title: string
  p1Body: string
  p1Cta: string
  p2Title: string
  p2Body: string
  p3Title: string
  p3Body: string
  p4Title: string
  p4Body: string
  testiBadge: string
  testiTitle: string
  testiLead: string
  testiPlayLabel: string
  faqBadge: string
  faqTitle: string
  faqLead: string
  contactBadge: string
  contactTitle: string
  contactLead: string
  ctaNow: string
  ctaWhatsapp: string
  infoLangTitle: string
  infoLangText: string
  infoEthicsTitle: string
  infoEthicsText: string
  infoAddrTitle: string
  footerNote1: string
  footerNote2: string
}

export interface TimelineEntry {
  yr: string
  title: string
  desc: string
}

export interface EduEntry {
  year: string
  title: string
  desc: string
}

export interface ServiceEntry {
  name: string
  dur: string
  priceEUR: number | null
  unit: string
  desc: string
  bullets: string[]
  /** when set, the detail card's CTA opens WhatsApp with this message pre-filled instead of
   *  scrolling to #contact — used for services worth a quick question first (e.g. group therapy) */
  whatsappMessage?: string
}

export interface FaqEntry {
  q: string
  a: string
}

export interface Testimonial {
  text: string
  author: string
}

export interface TestimonialSet {
  q1: Testimonial
  q2: Testimonial
  q3: Testimonial
  q4: Testimonial
  q5: Testimonial
  q6: Testimonial
  q7: Testimonial
  q8: Testimonial
}

export const address = 'Klosterstraße 20, 40211 Düsseldorf'
export const phone = '+491623303232'
export const whatsappUrl = `https://wa.me/${phone.replace('+', '')}`
export const telegramUrl = 'https://t.me/ramina_kolbaya'
export const instagramUrl = 'https://www.instagram.com/yastobo.you?igsi=MTFrcTBlODM3dW54NQ=='
export const threadsUrl = 'https://www.threads.com/share/BAgSdZL8QI'

export const translations: Record<Lang, TranslationStrings> = {
  ru: {
    navAbout: 'Обо мне', navServices: 'Услуги', navExperience: 'Опыт', navFaq: 'Вопросы', menuLabel: 'Меню', callBtn: 'Позвонить',
    heroTag: 'Онлайн или в Дюссельдорфе',
    heroTitle: 'Психолог и арт-терапевт',
    heroName: 'Рамина Колбая',
    heroLead: 'Пространство, где можно говорить о важном, разбираться в чувствах и находить опору — без оценок и спешки',
    heroCta: 'Записаться на бесплатную встречу',
    heroCaption: 'Здесь можно наконец выдохнуть',
    aboutBadge: 'Обо мне', aboutTitle: 'С какими вопросами приходят',
    aboutLead: 'Ко мне обращаются взрослые, подростки и родители, которые ищут помощь для ребёнка. У каждого свой запрос.',
    aboutNoteTitle: 'Важно о психиатрических диагнозах',
    aboutNoteText: 'Если есть психиатрический диагноз или нужна медикаментозная поддержка, я работаю только в паре с врачом-психиатром.',
    howBadge: 'Подход', howTitle: 'Как я работаю',
    howLead: 'Психологическая работа — это не магия и не готовые ответы. Это спокойный совместный процесс, в котором вы остаётесь главным человеком в своей жизни.',
    step1Title: 'Бережный контакт и безопасность',
    step1Body: 'Сначала мы созваниваемся и знакомимся — так вы поймёте, комфортно ли будет работать со мной, а я услышу вашу проблему. Всё происходит в спокойной атмосфере и в вашем ритме.',
    step2Title: 'Совместный поиск и опора',
    step2Body: 'Дальше мы разбиваем большую проблему на маленькие, понятные шаги. На сессиях работаем не только словами, но и с телом: дыхательные практики, коппинг-стратегии, техники, которые помогают справиться с тревогой не только на сеансе, но и в жизни.',
    step3Title: 'Темп и поддержка изменений',
    step3Body: 'Периодически возвращаемся к тому, что изменилось: какие чувства стали слабее, что получилось сделать иначе. Так терапия превращается не в разговор раз в неделю, а в постепенное движение к жизни, о которой вы мечтали.',
    expBadge: 'Мой путь', expTitle: 'Опыт работы',
    expLead: 'Профессиональный путь с 2022 года — постепенное накопление опыта, супервизии и постоянное обучение.',
    expShowMore: 'Это ещё не всё',
    expShowLess: 'Свернуть',
    eduShowMore: 'Показать остальное',
    eduShowLess: 'Свернуть',
    eduBadge: 'Квалификация', eduTitle: 'Образование и квалификация',
    eduLead: 'Постоянное обучение — часть профессии. Регулярная супервизия помогает держать высокий стандарт работы.',
    eduHighlightTitle: 'Дипломированный психолог',
    eduHighlightText: 'Диплом признан в Германии (ZAB — Zentralstelle für ausländisches Bildungswesen)',
    eduViewLabel: 'Посмотреть',
    servicesBadge: 'Форматы и стоимость', servicesTitle: 'Услуги и стоимость',
    servicesLead: 'Несколько форматов встреч под разные задачи. Выберите вариант слева, чтобы увидеть подробности.',
    servicesCta: 'Записаться',
    servicesCtaMore: 'Узнать больше',
    free: 'Бесплатно',
    processBadge: 'Процесс', processTitle: 'Что происходит на встречах',
    processLead: 'От первой бесплатной встречи до самостоятельного движения',
    p1Title: 'Первичная встреча', p1Body: 'Бесплатный 15-минутный звонок — краткое знакомство, уточнение запроса и ожиданий, определение направления работы.', p1Cta: 'Записаться',
    p2Title: 'Оценка запроса и формулирование целей',
    p2Body: 'Сбор анамнеза, первичный анализ ситуации, выявление основных трудностей и перевод запроса в конкретные, реалистичные и достижимые терапевтические цели.',
    p3Title: 'Психологическая работа',
    p3Body: 'Применение психологических методов: работа с эмоциями, мыслями, внутренним критиком, телесными реакциями и навыками саморегуляции.',
    p4Title: 'Интеграция и обратная связь',
    p4Body: 'Отслеживание изменений, фиксация первых результатов, развитие способности самостоятельно справляться с трудностями и постепенная корректировка процесса.',
    testiBadge: 'Отзывы', testiTitle: 'Отзывы моих клиентов', testiLead: 'То, что мотивирует меня работать',
    testiPlayLabel: 'Воспроизвести видео-отзыв',
    faqBadge: 'Вопросы', faqTitle: 'Частые вопросы',
    faqLead: 'Если вашего вопроса нет в списке, вы можете задать его на бесплатной встрече-знакомстве',
    contactBadge: 'Контакты', contactTitle: 'Запишитесь на бесплатную встречу',
    contactLead: 'Напишите мне, и мы подберём удобное время. Я буду рада вам помочь',
    ctaNow: 'Записаться на бесплатную встречу', ctaWhatsapp: 'Написать в WhatsApp',
    infoLangTitle: 'Языки консультаций', infoLangText: 'Русский и украинский',
    infoEthicsTitle: 'Профессиональная этика', infoEthicsText: 'Соблюдаю этический кодекс, прохожу регулярную супервизию',
    infoAddrTitle: 'Адрес',
    footerNote1: '© 2026 Рамина Колбая · психологическое консультирование',
    footerNote2: 'Содержание страницы не является медицинской помощью',
  },
  ua: {
    navAbout: 'Про мене', navServices: 'Послуги', navExperience: 'Досвід', navFaq: 'Питання', menuLabel: 'Меню', callBtn: 'Зателефонувати',
    heroTag: 'Онлайн і очно в Дюсельдорфі',
    heroTitle: 'Психолог та арт-терапевт',
    heroName: 'Раміна Колбая',
    heroLead: 'Простір, де можна говорити про важливе, розбиратися в почуттях і знаходити опору — без оцінок і поспіху',
    heroCta: 'Записатися на безкоштовну зустріч',
    heroCaption: 'Тут нарешті можна видихнути',
    aboutBadge: 'Про мене', aboutTitle: 'З якими питаннями звертаються',
    aboutLead: 'До мене звертаються дорослі, підлітки та батьки, які шукають допомогу для дитини. У кожного свій запит.',
    aboutNoteTitle: 'Важливо про психіатричні діагнози',
    aboutNoteText: 'Якщо є психіатричний діагноз або потрібна медикаментозна підтримка, я працюю лише в парі з лікарем-психіатром.',
    howBadge: 'Підхід', howTitle: 'Як я працюю',
    howLead: 'Психологічна робота — це не магія і не готові відповіді. Це спокійний спільний процес, у якому головною людиною у своєму житті залишаєтесь саме ви.',
    step1Title: 'Бережний контакт і безпека',
    step1Body: 'Спочатку ми телефонуємо одне одному і знайомимося — так ви зрозумієте, чи комфортно буде працювати зі мною, а я почую вашу проблему. Усе відбувається у спокійній атмосфері та у вашому темпі.',
    step2Title: 'Спільний пошук і опора',
    step2Body: 'Далі ми розбиваємо велику проблему на маленькі, зрозумілі кроки. На сесіях працюємо не тільки словами, а й з тілом: дихальні практики, копінг-стратегії, техніки, які допомагають упоратися з тривогою не тільки на сесії, а й у житті.',
    step3Title: 'Темп і підтримка змін',
    step3Body: 'Періодично повертаємося до того, що змінилося: які почуття стали слабшими, що вдалося зробити інакше. Так терапія перетворюється не на розмову раз на тиждень, а на поступовий рух до життя, про яке ви мріяли.',
    expBadge: 'Мій шлях', expTitle: 'Досвід роботи',
    expLead: 'Професійний шлях з 2022 року — поступове накопичення досвіду, супервізії та постійне навчання.',
    expShowMore: 'Це ще не все',
    expShowLess: 'Згорнути',
    eduShowMore: 'Показати решту',
    eduShowLess: 'Згорнути',
    eduBadge: 'Кваліфікація', eduTitle: 'Освіта та кваліфікація',
    eduLead: 'Постійне навчання — частина професії. Регулярна супервізія допомагає тримати високий стандарт роботи.',
    eduHighlightTitle: 'Дипломований психолог',
    eduHighlightText: 'Диплом визнано в Німеччині (ZAB — Zentralstelle für ausländisches Bildungswesen)',
    eduViewLabel: 'Переглянути',
    servicesBadge: 'Формати та вартість', servicesTitle: 'Послуги та вартість',
    servicesLead: 'Кілька форматів зустрічей під різні задачі. Оберіть варіант зліва, щоб побачити подробиці.',
    servicesCta: 'Записатися',
    servicesCtaMore: 'Дізнатися більше',
    free: 'Безкоштовно',
    processBadge: 'Процес', processTitle: 'Що відбувається на зустрічах',
    processLead: 'Від першої безкоштовної зустрічі до самостійного руху',
    p1Title: 'Перша зустріч', p1Body: 'Безкоштовний 15-хвилинний дзвінок — коротке знайомство, уточнення запиту й очікувань, визначення напрямку роботи.', p1Cta: 'Записатися',
    p2Title: 'Оцінка запиту та формулювання цілей',
    p2Body: 'Збір анамнезу, первинний аналіз ситуації, виявлення основних труднощів і переведення запиту в конкретні, реалістичні та досяжні терапевтичні цілі.',
    p3Title: 'Психологічна робота',
    p3Body: 'Застосування психологічних методів: робота з емоціями, думками, внутрішнім критиком, тілесними реакціями та навичками саморегуляції.',
    p4Title: "Інтеграція та зворотний зв'язок",
    p4Body: 'Відстеження змін, фіксація перших результатів, розвиток здатності самостійно долати труднощі та поступове коригування процесу.',
    testiBadge: 'Відгуки', testiTitle: 'Відгуки моїх клієнтів', testiLead: 'Те, що мотивує мене працювати',
    testiPlayLabel: 'Відтворити відеовідгук',
    faqBadge: 'Питання', faqTitle: 'Часті питання',
    faqLead: 'Якщо вашого питання немає в списку, ви можете поставити його на безкоштовній зустрічі-знайомстві',
    contactBadge: 'Контакти', contactTitle: 'Запишіться на безкоштовну зустріч',
    contactLead: 'Напишіть мені, і ми підберемо зручний час. Я буду рада вам допомогти',
    ctaNow: 'Записатися на безкоштовну зустріч', ctaWhatsapp: 'Написати у WhatsApp',
    infoLangTitle: 'Мови консультацій', infoLangText: 'Російська та українська',
    infoEthicsTitle: 'Професійна етика', infoEthicsText: 'Дотримуюся етичного кодексу, проходжу регулярну супервізію',
    infoAddrTitle: 'Адреса',
    footerNote1: '© 2026 Раміна Колбая · психологічне консультування',
    footerNote2: 'Зміст сторінки не є медичною допомогою',
  },
  de: {
    navAbout: 'Über mich', navServices: 'Leistungen', navExperience: 'Erfahrung', navFaq: 'Fragen', menuLabel: 'Menü', callBtn: 'Anrufen',
    heroTag: 'Online und persönlich in Düsseldorf',
    heroTitle: 'Psychologin und Kunsttherapeutin',
    heroName: 'Ramina Kolbaya',
    heroLead: 'Ein Raum, in dem Sie über Wichtiges sprechen, Ihre Gefühle verstehen und Halt finden können — ohne Bewertung und ohne Eile',
    heroCta: 'Kostenloses Erstgespräch buchen',
    heroCaption: 'Hier können Sie endlich durchatmen',
    aboutBadge: 'Über mich', aboutTitle: 'Womit Klienten zu mir kommen',
    aboutLead: 'Zu mir kommen Erwachsene, Jugendliche und Eltern, die Hilfe für ihr Kind suchen. Jeder hat sein eigenes Anliegen.',
    aboutNoteTitle: 'Wichtiger Hinweis zu psychiatrischen Diagnosen',
    aboutNoteText: 'Bei einer psychiatrischen Diagnose oder wenn eine medikamentöse Unterstützung nötig ist, arbeite ich ausschließlich zusammen mit einem Psychiater.',
    howBadge: 'Ansatz', howTitle: 'So arbeite ich',
    howLead: 'Psychologische Arbeit ist keine Magie und keine fertigen Antworten. Es ist ein ruhiger gemeinsamer Prozess, in dem Sie die Hauptperson in Ihrem Leben bleiben.',
    step1Title: 'Behutsamer Kontakt und Sicherheit',
    step1Body: 'Zuerst telefonieren wir und lernen uns kennen — so merken Sie, ob die Zusammenarbeit mit mir für Sie stimmig ist, und ich höre mir Ihr Anliegen an. Alles geschieht in Ruhe und in Ihrem eigenen Tempo.',
    step2Title: 'Gemeinsame Suche und Halt',
    step2Body: 'Danach zerlegen wir das große Problem in kleine, verständliche Schritte. In den Sitzungen arbeiten wir nicht nur mit Worten, sondern auch mit dem Körper: Atemübungen, Coping-Strategien, Techniken, die helfen, Angst nicht nur in der Sitzung, sondern auch im Alltag zu bewältigen.',
    step3Title: 'Tempo und Begleitung der Veränderung',
    step3Body: 'Wir schauen immer wieder, was sich verändert hat: welche Gefühle schwächer geworden sind, was Sie anders machen konnten. So wird Therapie nicht zu einem wöchentlichen Gespräch, sondern zu einer schrittweisen Bewegung hin zu dem Leben, von dem Sie träumen.',
    expBadge: 'Mein Werdegang', expTitle: 'Berufserfahrung',
    expLead: 'Beruflicher Werdegang seit 2022 — stetiger Erfahrungsaufbau, Supervision und kontinuierliche Weiterbildung.',
    expShowMore: 'Das ist noch nicht alles',
    expShowLess: 'Einklappen',
    eduShowMore: 'Mehr anzeigen',
    eduShowLess: 'Einklappen',
    eduBadge: 'Qualifikation', eduTitle: 'Ausbildung und Qualifikation',
    eduLead: 'Kontinuierliche Weiterbildung gehört zum Beruf. Regelmäßige Supervision sichert einen hohen Arbeitsstandard.',
    eduHighlightTitle: 'Diplom-Psychologin',
    eduHighlightText: 'Diplom in Deutschland anerkannt (ZAB — Zentralstelle für ausländisches Bildungswesen)',
    eduViewLabel: 'Ansehen',
    servicesBadge: 'Angebote und Preise', servicesTitle: 'Leistungen und Preise',
    servicesLead: 'Verschiedene Gesprächsformate für unterschiedliche Anliegen. Wählen Sie links eine Option, um Details zu sehen.',
    servicesCta: 'Termin buchen',
    servicesCtaMore: 'Mehr erfahren',
    free: 'Kostenlos',
    processBadge: 'Ablauf', processTitle: 'Was in den Sitzungen passiert',
    processLead: 'Vom ersten kostenlosen Gespräch bis zum eigenständigen Weg',
    p1Title: 'Erstgespräch', p1Body: 'Kostenloses 15-minütiges Telefonat — kurzes Kennenlernen, Klärung von Anliegen und Erwartungen, Festlegung der Arbeitsrichtung.', p1Cta: 'Termin buchen',
    p2Title: 'Anliegenklärung und Zielformulierung',
    p2Body: 'Erhebung der Vorgeschichte, erste Analyse der Situation, Herausarbeiten der wichtigsten Schwierigkeiten und Übersetzung des Anliegens in konkrete, realistische und erreichbare therapeutische Ziele.',
    p3Title: 'Psychologische Arbeit',
    p3Body: 'Einsatz psychologischer Methoden: Arbeit mit Gefühlen, Gedanken, dem inneren Kritiker, Körperreaktionen und Fähigkeiten zur Selbstregulation.',
    p4Title: 'Integration und Feedback',
    p4Body: 'Beobachtung der Veränderungen, Festhalten erster Ergebnisse, Entwicklung der Fähigkeit, Schwierigkeiten selbstständig zu bewältigen, und schrittweise Anpassung des Prozesses.',
    testiBadge: 'Erfahrungsberichte', testiTitle: 'Stimmen meiner Klientinnen und Klienten', testiLead: 'Das, was mich in meiner Arbeit motiviert',
    testiPlayLabel: 'Video-Erfahrungsbericht abspielen',
    faqBadge: 'Fragen', faqTitle: 'Häufige Fragen',
    faqLead: 'Falls Ihre Frage hier nicht aufgeführt ist, können Sie sie gern im kostenlosen Erstgespräch stellen',
    contactBadge: 'Kontakt', contactTitle: 'Vereinbaren Sie ein kostenloses Erstgespräch',
    contactLead: 'Schreiben Sie mir, und wir finden einen passenden Termin. Ich freue mich, Ihnen zu helfen',
    ctaNow: 'Kostenloses Erstgespräch buchen', ctaWhatsapp: 'Über WhatsApp schreiben',
    infoLangTitle: 'Beratungssprachen', infoLangText: 'Russisch und Ukrainisch',
    infoEthicsTitle: 'Berufsethik', infoEthicsText: 'Ich halte mich an den Berufsethikkodex und nehme regelmäßig an Supervisionen teil',
    infoAddrTitle: 'Adresse',
    footerNote1: '© 2026 Ramina Kolbaya · Psychologische Beratung',
    footerNote2: 'Der Inhalt dieser Seite stellt keine medizinische Behandlung dar',
  },
}

export const aboutItems: Record<Lang, string[]> = {
  ru: ['Неуверенность в себе, чувство беспомощности', 'Прокрастинация, отсутствие мотивации, ощущение, что стоите на месте', 'Вопросы самоценности и самореализации', 'Эмоциональная нестабильность', 'Тревога, страхи, фобии', 'Невротические и эмоциональные расстройства', 'Депрессия, апатия, панические атаки', 'Признаки ПТСР — посттравматического стрессового расстройства', 'Отсутствие взаимопонимания в отношениях, постоянные обиды', 'Семейные и профессиональные конфликты', 'Социофобия', 'Сложности адаптации в новой стране', 'Трудности подросткового возраста'],
  ua: ['Невпевненість у собі, відчуття безпорадності', 'Прокрастинація, відсутність мотивації, відчуття, що стоїте на місці', 'Питання самоцінності та самореалізації', 'Емоційна нестабільність', 'Тривога, страхи, фобії', 'Невротичні та емоційні розлади', 'Депресія, апатія, панічні атаки', 'Ознаки ПТСР — посттравматичного стресового розладу', 'Відсутність порозуміння у стосунках, постійні образи', 'Сімейні та професійні конфлікти', 'Соціофобія', 'Складнощі адаптації в новій країні', 'Труднощі підліткового віку'],
  de: ['Unsicherheit, Gefühl der Hilflosigkeit', 'Prokrastination, fehlende Motivation, das Gefühl, auf der Stelle zu treten', 'Fragen zum Selbstwert und zur Selbstverwirklichung', 'Emotionale Instabilität', 'Angst, Ängste, Phobien', 'Neurotische und emotionale Störungen', 'Depression, Apathie, Panikattacken', 'Anzeichen einer PTBS — posttraumatischen Belastungsstörung', 'Fehlendes gegenseitiges Verständnis in Beziehungen, ständige Kränkungen', 'Familiäre und berufliche Konflikte', 'Sozialphobie', 'Schwierigkeiten bei der Eingewöhnung im neuen Land', 'Schwierigkeiten im Jugendalter'],
}

export const timeline: Record<Lang, TimelineEntry[]> = {
  ru: [
    { yr: '2022', title: 'Частная психотерапевтическая практика', desc: '' },
    { yr: '2022', title: 'Психологическая поддержка украинских беженцев в Германии', desc: 'консультации подросткам и взрослым, помощь с тревогой, стрессом, утратой чувства безопасности, буллингом и адаптацией в новой стране' },
    { yr: '2022', title: 'Групповые встречи поддержки для подростков и взрослых', desc: 'снижение чувства изоляции, стабилизация эмоционального состояния, поддерживающее сообщество' },
    { yr: '2022', title: 'Арт-терапия как способ безопасно говорить о переживаниях через творчество', desc: 'там, где словами пока трудно' },
    { yr: '2025', title: 'Основала центр психологической поддержки и развития «Yastobo.You» в Дюссельдорфе', desc: 'индивидуальная и групповая работа с детьми, подростками и семьями' },
    { yr: '2025', title: 'Модерация групповых сессий в клиент-центрированной психотерапии', desc: '' },
  ],
  ua: [
    { yr: '2022', title: 'Приватна психотерапевтична практика', desc: '' },
    { yr: '2022', title: 'Психологічна підтримка українських біженців у Німеччині', desc: 'консультації підліткам і дорослим, допомога з тривогою, стресом, втратою відчуття безпеки, булінгом та адаптацією в новій країні' },
    { yr: '2022', title: 'Групові зустрічі підтримки для підлітків і дорослих', desc: 'зниження відчуття ізоляції, стабілізація емоційного стану, підтримувальна спільнота' },
    { yr: '2022', title: 'Арттерапія як спосіб безпечно говорити про переживання через творчість', desc: 'там, де словами поки важко' },
    { yr: '2025', title: 'Заснувала центр психологічної підтримки та розвитку «Yastobo.You» у Дюсельдорфі', desc: 'індивідуальна та групова робота з дітьми, підлітками та родинами' },
    { yr: '2025', title: 'Модерація групових сесій у клієнт-центрованій психотерапії', desc: '' },
  ],
  de: [
    { yr: '2022', title: 'Private psychotherapeutische Praxis', desc: '' },
    { yr: '2022', title: 'Psychologische Unterstützung ukrainischer Geflüchteter in Deutschland', desc: 'Beratung für Jugendliche und Erwachsene, Hilfe bei Angst, Stress, verlorenem Sicherheitsgefühl, Mobbing und der Eingewöhnung im neuen Land' },
    { yr: '2022', title: 'Gruppenunterstützung für Jugendliche und Erwachsene', desc: 'weniger Isolationsgefühl, emotionale Stabilisierung, eine unterstützende Gemeinschaft' },
    { yr: '2022', title: 'Kunsttherapie als sicherer Weg, über Erlebtes durch Kreativität zu sprechen', desc: 'dort, wo Worte noch schwerfallen' },
    { yr: '2025', title: 'Gründung des Zentrums für psychologische Unterstützung und Entwicklung „Yastobo.You" in Düsseldorf', desc: 'Einzel- und Gruppenarbeit mit Kindern, Jugendlichen und Familien' },
    { yr: '2025', title: 'Moderation von Gruppensitzungen in der klientenzentrierten Psychotherapie', desc: '' },
  ],
}

export const eduList: Record<Lang, EduEntry[]> = {
  ru: [
    { year: '2021', title: 'Курс кризисной психологии', desc: 'Институт семейной психологии и консультирования.' },
    { year: '2021', title: 'Психолого-педагогический тренинг «Soft Skills — навыки успеха»', desc: 'Харьковский национальный университет имени В. Н. Каразина.' },
    { year: '2023', title: 'Вебинар по методу Felt Sense Polyvagal Model™ (работа с травмой и зависимостями)', desc: 'Украинский институт клиент-центрированной и опытно-ориентированной психотерапии.' },
    { year: '2023', title: 'Курс по арт-терапии в работе с детьми', desc: 'Международная федерация арт-терапии и самореализации.' },
    { year: '2023', title: 'Международный форум по прикладной психосоматике ART-PRAKTIK SOMA', desc: 'Восточноукраинская ассоциация арт-терапии.' },
    { year: '2026', title: 'Международная школа психологии «Women\'s Compass School»', desc: 'Сертификат по курсу Nail Board Standing Therapy.' },
    { year: '2026', title: 'Ukrainian Institute of Client-Centered and Experiential Psychotherapy (VICCEP)', desc: 'Certificate: Facilitation of Group Meetings in Client-Centered Psychotherapy.' },
  ],
  ua: [
    { year: '2021', title: 'Курс кризової психології', desc: 'Інститут сімейної психології та консультування.' },
    { year: '2021', title: 'Психолого-педагогічний тренінг «Soft Skills — навички успіху»', desc: 'Харківський національний університет імені В. Н. Каразіна.' },
    { year: '2023', title: 'Вебінар з методу Felt Sense Polyvagal Model™ (робота з травмою і залежностями)', desc: 'Український інститут клієнт-центрованої та досвідно-орієнтованої психотерапії.' },
    { year: '2023', title: 'Курс з арттерапії в роботі з дітьми', desc: 'Міжнародна федерація арттерапії та самореалізації.' },
    { year: '2023', title: 'Міжнародний форум з прикладної психосоматики ART-PRAKTIK SOMA', desc: 'Східноукраїнська асоціація арттерапії.' },
    { year: '2026', title: 'Міжнародна школа психології «Women\'s Compass School»', desc: 'Сертифікат за курсом Nail Board Standing Therapy.' },
    { year: '2026', title: 'Ukrainian Institute of Client-Centered and Experiential Psychotherapy (VICCEP)', desc: 'Certificate: Facilitation of Group Meetings in Client-Centered Psychotherapy.' },
  ],
  de: [
    { year: '2021', title: 'Kurs für Krisenpsychologie', desc: 'Institut für Familienpsychologie und Beratung.' },
    { year: '2021', title: 'Psychologisch-pädagogisches Training „Soft Skills — Erfolgskompetenzen"', desc: 'W.-N.-Karasin-Universität Charkiw.' },
    { year: '2023', title: 'Webinar zur Felt Sense Polyvagal Model™-Methode (Arbeit mit Trauma und Abhängigkeiten)', desc: 'Ukrainisches Institut für klientenzentrierte und erfahrungsorientierte Psychotherapie.' },
    { year: '2023', title: 'Kurs für Kunsttherapie in der Arbeit mit Kindern', desc: 'Internationale Föderation für Kunsttherapie und Selbstverwirklichung.' },
    { year: '2023', title: 'Internationales Forum für angewandte Psychosomatik ART-PRAKTIK SOMA', desc: 'Ostukrainischer Verband für Kunsttherapie.' },
    { year: '2026', title: 'Internationale Schule für Psychologie „Women\'s Compass School"', desc: 'Zertifikat im Kurs Nail Board Standing Therapy.' },
    { year: '2026', title: 'Ukrainian Institute of Client-Centered and Experiential Psychotherapy (VICCEP)', desc: 'Certificate: Facilitation of Group Meetings in Client-Centered Psychotherapy.' },
  ],
}

export const services: Record<Lang, ServiceEntry[]> = {
  ru: [
    { name: 'Знакомство', dur: '15 минут', priceEUR: null, unit: '', desc: 'Обычно достаточно 15 минут. Просто чтобы познакомиться, обсудить ваш запрос и решить, подходим ли мы друг другу', bullets: ['Бережное знакомство без обязательств', 'Обсуждение запроса и ожиданий', 'Ответы на вопросы о формате работы', 'Онлайн или очно в кабинете'] },
    { name: 'Консультация для взрослых', dur: '40–45 минут', priceEUR: 40, unit: '/встреча', desc: 'Индивидуальная работа с запросом взрослого человека — в удобном темпе и без оценок.', bullets: ['Индивидуальный формат', 'Онлайн или очно', 'Конфиденциально', 'Гибкое расписание'] },
    { name: 'Консультация для подростков', dur: '40–45 минут', priceEUR: 40, unit: '/встреча', desc: 'Пространство для подростка, где его слышат и не торопят с ответами.', bullets: ['Бережный темп', 'Учитываем возрастные особенности', 'При необходимости — с участием родителя', 'Онлайн или очно'] },
    { name: 'Консультация для детей 5–8 лет', dur: 'до 25 минут, с элементами арт-терапии', priceEUR: 25, unit: '/встреча', desc: 'Работа через игру и творчество — там, где словами говорить пока сложно.', bullets: ['Арт-терапевтические техники', 'Короткий, комфортный формат', 'Работа через творчество', 'Очно в кабинете'] },
    { name: 'Групповая терапия для взрослых', dur: '4 встречи по 2 часа', priceEUR: 90, unit: '/курс', desc: 'Поддерживающая группа, где можно почувствовать, что вы не одни.', bullets: ['4 встречи по 2 часа', 'Поддерживающее сообщество', 'Онлайн или очно', 'Ограниченный размер группы'], whatsappMessage: 'Здравствуйте! Расскажите про групповую терапию подробнее' },
  ],
  ua: [
    { name: 'Знайомство', dur: '15 хвилин', priceEUR: null, unit: '', desc: 'Зазвичай достатньо 15 хвилин. Просто щоб познайомитися, обговорити ваш запит і зрозуміти, чи підходимо ми одне одному', bullets: ["Бережне знайомство без зобов'язань", 'Обговорення запиту та очікувань', 'Відповіді на запитання про формат роботи', 'Онлайн або очно в кабінеті'] },
    { name: 'Консультація для дорослих', dur: '40–45 хвилин', priceEUR: 40, unit: '/зустріч', desc: 'Індивідуальна робота із запитом дорослої людини — у комфортному темпі й без оцінок.', bullets: ['Індивідуальний формат', 'Онлайн або очно', 'Конфіденційно', 'Гнучкий розклад'] },
    { name: 'Консультація для підлітків', dur: '40–45 хвилин', priceEUR: 40, unit: '/зустріч', desc: 'Простір для підлітка, де його чують і не поспішають з відповідями.', bullets: ['Бережний темп', 'Враховуємо вікові особливості', 'За потреби — з участю батьків', 'Онлайн або очно'] },
    { name: 'Консультація для дітей 5–8 років', dur: 'до 25 хвилин, з елементами арттерапії', priceEUR: 25, unit: '/зустріч', desc: 'Робота через гру та творчість — там, де словами говорити ще складно.', bullets: ['Арттерапевтичні техніки', 'Короткий, комфортний формат', 'Робота через творчість', 'Очно в кабінеті'] },
    { name: 'Групова терапія для дорослих', dur: '4 зустрічі по 2 години', priceEUR: 90, unit: '/курс', desc: 'Підтримувальна група, де можна відчути, що ви не одні.', bullets: ['4 зустрічі по 2 години', 'Підтримувальна спільнота', 'Онлайн або очно', 'Обмежений розмір групи'], whatsappMessage: 'Доброго дня! Розкажіть, будь ласка, детальніше про групову терапію' },
  ],
  de: [
    { name: 'Kennenlernen', dur: '15 Minuten', priceEUR: null, unit: '', desc: 'In der Regel reichen 15 Minuten, um sich kennenzulernen, Ihr Anliegen zu besprechen und zu spüren, ob die Zusammenarbeit passt', bullets: ['Behutsames Kennenlernen ohne Verpflichtung', 'Besprechung von Anliegen und Erwartungen', 'Antworten auf Fragen zum Arbeitsformat', 'Online oder persönlich in der Praxis'] },
    { name: 'Beratung für Erwachsene', dur: '40–45 Minuten', priceEUR: 40, unit: '/Sitzung', desc: 'Individuelle Arbeit mit dem Anliegen eines Erwachsenen — im eigenen Tempo und ohne Bewertung.', bullets: ['Individuelles Format', 'Online oder persönlich', 'Vertraulich', 'Flexible Terminplanung'] },
    { name: 'Beratung für Jugendliche', dur: '40–45 Minuten', priceEUR: 40, unit: '/Sitzung', desc: 'Ein Raum für Jugendliche, in dem sie gehört werden und niemand sie zu Antworten drängt.', bullets: ['Behutsames Tempo', 'Altersgerechtes Vorgehen', 'Bei Bedarf mit Einbeziehung der Eltern', 'Online oder persönlich'] },
    { name: 'Beratung für Kinder 5–8 Jahre', dur: 'bis zu 25 Minuten, mit Elementen der Kunsttherapie', priceEUR: 25, unit: '/Sitzung', desc: 'Arbeit durch Spiel und Kreativität — dort, wo Worte noch schwerfallen.', bullets: ['Kunsttherapeutische Techniken', 'Kurzes, angenehmes Format', 'Arbeit durch Kreativität', 'Persönlich in der Praxis'] },
    { name: 'Gruppentherapie für Erwachsene', dur: '4 Termine à 2 Stunden', priceEUR: 90, unit: '/Kurs', desc: 'Eine unterstützende Gruppe, in der Sie spüren können, dass Sie nicht allein sind.', bullets: ['4 Termine à 2 Stunden', 'Unterstützende Gemeinschaft', 'Online oder persönlich', 'Begrenzte Gruppengröße'], whatsappMessage: 'Hallo! Erzählen Sie mir bitte mehr über die Gruppentherapie' },
  ],
}

export const faqList: Record<Lang, FaqEntry[]> = {
  ru: [
    { q: 'Психолог, психотерапевт или психиатр — кто мне нужен?', a: 'Психолог помогает разобраться с тем, что происходит внутри и в отношениях с другими, опираясь на психологические методы, а не на медицину. Я работаю именно так — как психолог и арт-терапевт. Если есть психиатрический диагноз или нужны медикаменты, я работаю в паре с врачом-психиатром, а не вместо него.' },
    { q: 'Как часто нужно приходить на консультации?', a: 'Обычно мы договариваемся об этом на первой встрече — это зависит от запроса. Кому-то подходит раз в неделю, кому-то реже.' },
    { q: 'Это конфиденциально?', a: 'Да. Всё, что происходит на консультациях, остаётся между нами.' },
    { q: 'На каком языке проходят консультации?', a: 'На русском и украинском.' },
    { q: 'Что если я не знаю, что именно хочу обсудить?', a: 'Это нормально. Мы вместе разберёмся, с чего начать, — для этого и нужна первая бесплатная встреча.' },
  ],
  ua: [
    { q: 'Психолог, психотерапевт чи психіатр — хто мені потрібен?', a: 'Психолог допомагає розібратися з тим, що відбувається всередині і в стосунках з іншими, спираючись на психологічні методи, а не на медицину. Я працюю саме так — як психолог і арттерапевт. Якщо є психіатричний діагноз або потрібні медикаменти, я працюю в парі з лікарем-психіатром, а не замість нього.' },
    { q: 'Як часто потрібно приходити на консультації?', a: 'Зазвичай ми домовляємося про це на першій зустрічі — це залежить від запиту. Комусь підходить раз на тиждень, комусь рідше.' },
    { q: 'Це конфіденційно?', a: 'Так. Усе, що відбувається на консультаціях, залишається між нами.' },
    { q: 'Якою мовою проходять консультації?', a: 'Російською та українською.' },
    { q: 'Що якщо я не знаю, що саме хочу обговорити?', a: 'Це нормально. Ми разом розберемося, з чого почати, — саме для цього і потрібна перша безкоштовна зустріч.' },
  ],
  de: [
    { q: 'Psychologin, Psychotherapeutin oder Psychiaterin — wen brauche ich?', a: 'Eine Psychologin hilft, das zu verstehen, was innerlich und in Beziehungen zu anderen geschieht, gestützt auf psychologische Methoden statt auf Medizin. Genau so arbeite ich — als Psychologin und Kunsttherapeutin. Bei einer psychiatrischen Diagnose oder wenn Medikamente nötig sind, arbeite ich zusammen mit einem Psychiater, nicht anstelle von ihm.' },
    { q: 'Wie oft sollte ich zur Beratung kommen?', a: 'Das besprechen wir meist im ersten Gespräch — es hängt vom Anliegen ab. Manchen passt ein wöchentlicher Rhythmus, anderen ein selteneres Intervall.' },
    { q: 'Ist das vertraulich?', a: 'Ja. Alles, was in der Beratung besprochen wird, bleibt zwischen uns.' },
    { q: 'In welcher Sprache finden die Beratungen statt?', a: 'Auf Russisch und Ukrainisch.' },
    { q: 'Was, wenn ich nicht weiß, worüber ich sprechen möchte?', a: 'Das ist ganz normal. Wir finden gemeinsam heraus, wo wir anfangen — genau dafür ist das erste kostenlose Gespräch da.' },
  ],
}

export const testimonials: Record<Lang, TestimonialSet> = {
  ru: {
    q1: { text: 'Спасибо тебе большое за помощь, ты заставила задуматься о её будущем и поведении, ей комфортно с тобой', author: '— родитель подростка' },
    q2: { text: 'Начало практики — страх 10/10, к концу — 5-6/10. После практики появилась лёгкость, тревога снизилась заметно.', author: '— клиентка · работа с тревогой' },
    q3: { text: 'Спасибо тебе, в последние дни чувствую легкость', author: '— клиентка · терапия' },
    q4: { text: 'Раминочка, спасибо огромное. Спасибо Богу, что мы Вас нашли', author: '— родитель клиентки' },
    q5: { text: 'Дочке понравилась группа и ваш подход! Спасибо за ваш проект, мы будем продолжать', author: '— родитель участницы группы' },
    q6: { text: 'Спасибо, что в переломный период моей жизни именно ты стала моей поддержкой и помогла пройти через все трудности. Уже через несколько месяцев после терапии я всё ещё практикую и медитирую.', author: '— клиентка, индивидуальная терапия' },
    q7: { text: 'Спасибо большое за всё, дочь осталась очень довольна. Мы продолжаем терапию с вами.', author: '— мама клиентки' },
    q8: { text: 'Это правда сработало! Не стало легче сразу, но сегодня я заметила, что даже дышать как-то легче. Спасибо тебе.', author: '— из переписки с клиенткой' },
  },
  ua: {
    q1: { text: 'Дуже дякую за допомогу, ти змусила задуматися про її майбутнє і поведінку, їй комфортно з тобою', author: '— батько/мати підлітка' },
    q2: { text: "На початку практики — страх 10/10, до кінця — 5-6/10. Після практики з'явилася легкість, тривога помітно знизилася.", author: '— клієнтка · робота з тривогою' },
    q3: { text: 'Дякую тобі, останніми днями відчуваю легкість', author: '— клієнтка · терапія' },
    q4: { text: 'Раміночко, дуже дякую. Дякуємо Богу, що ми Вас знайшли', author: '— батько/мати клієнтки' },
    q5: { text: 'Донечці сподобалась група і Ваш підхід! Дякую за Ваш проєкт, ми будемо продовжувати', author: '— батько/мати учасниці групи' },
    q6: { text: 'Дякую, що в переломний період мого життя саме ти стала моєю підтримкою і допомогла пройти через усі труднощі. Вже через кілька місяців після терапії досі практикую та медитую.', author: '— клієнтка, індивідуальна терапія' },
    q7: { text: 'Дуже дякую за все, донька залишилась дуже задоволена. Ми продовжуємо терапію з вами.', author: '— мама клієнтки' },
    q8: { text: 'Це дійсно спрацювало! Не стало добре прям одразу, але сьогодні я помітила, що навіть дихати легше якось. Дякую тобі.', author: '— з переписки з клієнткою' },
  },
  de: {
    q1: { text: 'Vielen Dank für Ihre Hilfe, Sie haben mich zum Nachdenken über ihre Zukunft und ihr Verhalten gebracht, sie fühlt sich bei Ihnen wohl', author: '— Elternteil einer Jugendlichen' },
    q2: { text: 'Am Anfang der Praxis — Angst 10/10, am Ende — 5-6/10. Danach kam ein Gefühl von Leichtigkeit, die Angst hat merklich abgenommen.', author: '— Klientin · Arbeit mit Angst' },
    q3: { text: 'Danke, in den letzten Tagen fühle ich mich leicht', author: '— Klientin · Therapie' },
    q4: { text: 'Liebe Ramina, vielen herzlichen Dank. Wir sind so dankbar, dass wir Sie gefunden haben', author: '— Elternteil einer Klientin' },
    q5: { text: 'Meiner Tochter haben die Gruppe und Ihr Ansatz gefallen! Danke für Ihr Projekt, wir machen weiter.', author: '— Elternteil einer Gruppenteilnehmerin' },
    q6: { text: 'Danke, dass du in einer entscheidenden Zeit meines Lebens meine Stütze warst und mir geholfen hast, alle Schwierigkeiten zu überstehen. Noch Monate nach der Therapie praktiziere und meditiere ich weiterhin.', author: '— Klientin, Einzeltherapie' },
    q7: { text: 'Vielen Dank für alles, meine Tochter war sehr zufrieden. Wir setzen die Therapie mit Ihnen fort.', author: '— Mutter einer Klientin' },
    q8: { text: 'Es hat wirklich funktioniert! Es wurde nicht sofort besser, aber heute habe ich gemerkt, dass ich irgendwie leichter atmen kann. Danke dir.', author: '— aus einer Nachricht einer Klientin' },
  },
}

export const testimonialOrder: (keyof TestimonialSet)[] = ['q4', 'q1', 'q2', 'q3', 'q6', 'q5', 'q8', 'q7']
