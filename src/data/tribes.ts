import { Tribe } from '../types';

export const TRIBES_DATA: Tribe[] = [
  {
    id: 'igorot',
    name: 'Igorot',
    altNames: ['Ifugao', 'Bontoc', 'Kankanaey', 'Ibaloi', 'People of the Mountains'],
    region: 'Cordillera Administrative Region (CAR), Luzon',
    islandGroup: 'Luzon',
    coords: { x: 44, y: 22 },
    image: '/src/assets/images/igorot_illustration_1784294782539.jpg',
    language: 'Kankanaey / Ibaloi / Tuwali / Bontoc',
    livelihood: 'Hagdan-hagdang Pagsasaka, Pag-ukit (Woodcarving), at Sining-Metal',
    overview: 'Ang mga Igorot ay ang kolektibong tawag sa iba\'t ibang katutubong grupo sa Cordillera Mountain Range sa Luzon tulad ng Ifugao, Bontoc, Kankanaey, at Ibaloi. Kilala sila sa buong mundo sa paglikha ng Hagdan-hagdang Palayan at sa kanilang matagumpay na pagtatanggol sa kanilang kultura laban sa mga dayuhan.',
    nature: {
      title: 'Ugnayan sa Kalikasan (The Muyong System)',
      description: 'Paano pinangangalagaan ng mga Igorot ang kalikasan at watershed sa Cordillera?',
      details: [
        'Sistemang Muyong: Tradisyunal at komunidad-driven na pamamahala ng kagubatan kung saan bawat pamilya ay nag-aalaga ng sariling gubat upang protektahan ang suplay ng tubig para sa palayan.',
        'Hagdan-hagdang Palayan: Isang kahanga-hangang engineering ng sustainable agriculture na sumusunod sa natural na tabas ng mga bundok nang hindi sumisira sa kalikasan.',
        'Lapat System: Isang tradisyunal na pagbabawal sa pangangaso o pagputol ng puno sa partikular na panahon upang bigyang-daan ang pagbawi ng kagubatan.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Gangsa, Ikat, & Woodcarving)',
      description: 'Ano ang mga natatanging sining, kasuotan, at panitikan ng mga Igorot?',
      details: [
        'Gangsa Gongs: Mga tradisyunal na tansong gong na tinutugtog gamit ang kamay o patpat sa mga seremonya, kasal, at ritwal ng pasasalamat.',
        'Kasuotan at Paghahabi (Wanes & Lufid): Ang tradisyunal na kasuotang bahag (wanes) para sa lalaki at tapis (lufid) para sa babae na may makukulay na guhit ng pula at itim.',
        'Sining ng Pag-ukit (Woodcarving): Kilala sa paglikha ng mga functional na kagamitan, estatwa tulad ng Bulul, at dekorasyon mula sa matitibay na kahoy.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Kabunian & Bulul)',
      description: 'Sino ang mga espiritu at anitong gumagabay sa buhay ng mga Igorot?',
      details: [
        'Bulul Guardians: Mga inukit na kahoy na estatwa ng mga ninuno na nagsisilbing tagapangalaga ng kamalig ng palay upang masiguro ang masaganang ani.',
        'Kabunian: Ang kanilang kataas-taasang diyos na lumikha ng mundo at pinagmumulan ng lahat ng biyaya at karunungan sa kabundukan.',
        'Begnas Ritual: Isang serye ng pasasalamat at ritwal ng komunidad para sa anihan, kalusugan, at proteksyon sa komunidad.'
      ]
    },
    stamps: [
      { id: 'igorot-rice', name: 'Hagdan-Hagdang Palayan', symbol: '🌾', description: 'Simbolo ng ugnayan sa kalikasan at galing sa engineering.' },
      { id: 'igorot-bulul', name: 'Bulul Guardian', symbol: '🪵', description: 'Kahoy na bantay ng sining, anihan, at mga ninuno.' },
      { id: 'igorot-gong', name: 'Gangsa Gongs', symbol: '🥁', description: 'Instrumentong tanso na nag-uugnay sa mga ritwal at komunidad.' }
    ]
  },
  {
    id: 'isneg',
    name: 'Isneg',
    altNames: ['Isnag', 'Apayao', 'People of the River'],
    region: 'Apayao Province, Cordillera Administrative Region (CAR), Luzon',
    islandGroup: 'Luzon',
    coords: { x: 43, y: 12 },
    image: '/src/assets/images/isneg_illustration_1784294765585.jpg',
    language: 'Isnag (Isneg)',
    livelihood: 'Swidden Agriculture (Kaingin) at Pangingisda sa Ilog',
    overview: 'Ang mga Isneg (o Isnag) ay katutubong pamayanan sa bulubunduking lalawigan ng Apayao sa Cordillera. Sila ay kilala sa tawag na "People of the River" dahil sa kanilang malalim na koneksyon sa Ilog Apayao, sa kanilang maringal na tradisyunal na bahay-binuron, at sa sining ng paghahabi.',
    nature: {
      title: 'Ugnayan sa Kalikasan (The River & Swidden Forest)',
      description: 'Paano namumuhay ang mga Isneg kasabay ng kalikasan ng Apayao?',
      details: [
        'Koneksyon sa Ilog: Ang Ilog Apayao ang pangunahing daluyan ng transportasyon, pagkain, at espirituwal na ugnayan ng mga Isneg.',
        'Kaingin (Swidden Farming): Rotational farming na gumagalang sa kagubatan; may takdang taon ng pagpapahinga ng lupa (fallow) upang mapanatili ang taba nito.',
        'Pagkilala sa Yamang Gubat: Malalim na kaalaman sa mga prutas, halamang-gamot, at kawayan na kinukuha nang may sapat na limitasyon upang maprotektahan ang gubat.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Binuron & Tarektek)',
      description: 'Ano ang mga natatanging sining, kasuotan, at arkitektura ng mga Isneg?',
      details: [
        'Arkitekturang Binuron: Tradisyunal na bahay-Isneg na ang bubong ay hugis nakabaligtad na bangka, inspirasyon mula sa kanilang kulturang pandagat.',
        'Sayaw na Tarektek: Isang katutubong sayaw na ginagaya ang pagliligawan ng mga ibon, sinasabayan ng masisiglang tugtog ng gong.',
        'Say-am at Talip: Mga ritwal na sayaw kung saan ipinapakita ang kahusayan sa paghawak ng mga tradisyunal na kalasag (shield) at kagamitan.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Say-am Celebration)',
      description: 'Ano ang mga pinahahalagahan at tradisyunal na pagtitipon ng mga Isneg?',
      details: [
        'Ritwal ng Say-am: Ang pinakamalaking pagdiriwang ng mga Isneg para sa pasasalamat sa ani, kapayapaan, o pagtatapos ng pagdadalamhati.',
        'Anito at Espiritu: Naniniwala sa mga anito na nagbabantay sa ilog at kagubatan. Bago magtanim o mangisda, nagsasagawa ng mga alay.',
        'Sipok at Kultural na Paggalang: Tradisyonal na pagkilala sa kapangyarihan ng pamilya at matatandang pinuno sa pagpapanatili ng kapayapaan.'
      ]
    },
    stamps: [
      { id: 'isneg-binuron', name: 'Bahay na Binuron', symbol: '🏠', description: 'Katutubong bahay na may bubong na hugis nakabaligtad na bangka.' },
      { id: 'isneg-hat', name: 'Sinalitan Headgear', symbol: '👑', description: 'Makulay at marangyang palamuti sa ulo na isinusuot sa mga ritwal.' },
      { id: 'isneg-shield', name: 'Tradisyunal na Kalasag', symbol: '🛡️', description: 'Inukit na kahoy na kalasag na gamit sa mga seremonya at sayaw.' }
    ]
  },
  {
    id: 'mangyan',
    name: 'Mangyan',
    altNames: ['Hanunuo Mangyan', 'People of the Highlands'],
    region: 'Probinisya ng Mindoro, Luzon/MIMAROPA',
    islandGroup: 'Luzon',
    coords: { x: 38, y: 44 },
    image: '/src/assets/images/mangyan_illustration_1784293038239.jpg',
    language: 'Minangyan (Hanunóo Script)',
    livelihood: 'Rotational Forest Farming (Kaingin/Swidden Agriculture)',
    overview: 'Ang "Mangyan" ay ang pangkalahatang tawag sa walong katutubong grupo sa Mindoro. Sila ay tanyag sa pangangalaga ng kanilang sinaunang pre-kolonyal na sistema ng pagsulat—ang Surat Mangyan—at sa kanilang mapayapang pamumuhay.',
    nature: {
      title: 'Ugnayan sa Kalikasan (Sustainable Swidden)',
      description: 'Paano iginagalang ng mga Mangyan ang kagubatan at bundok ng Mindoro?',
      details: [
        'Swidden Agriculture (Kaingin): Hindi ito basta pagsunog; mayroon silang rotational farming kung saan pinapayagang magpahinga ang lupa (fallow) ng ilang taon upang bumalik ang taba nito.',
        'Pagkilala sa Yamang-Gubat: Malalim ang kanilang kaalaman sa mga ligaw na halaman para sa pagkain, gamot, at materyales nang hindi inaabuso ang kagubatan.',
        'Bantay ng Mt. Halcon: Itinuturing nilang sagrado ang mga bundok kung saan naninirahan ang mga espiritu ng kalikasan.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Ambahan & Hanunóo Script)',
      description: 'Ano ang natatanging sining ng pag-awit at pagsulat ng mga Mangyan?',
      details: [
        'Surat Mangyan: Isa sa mga natitirang sinaunang sulat-aksara sa Pilipinas bago dumating ang mga Espanyol. Isinusulat ito sa pamamagitan ng pag-ukit sa kawayan.',
        'Ambahan: Isang tradisyunal na tula na may pitong pantig sa bawat linya. Karaniwan itong kinakanta nang may himig upang magpahayag ng pag-ibig, pakikipagkaibigan, o payo.',
        'Ramit Weaving: Ang makulay na asul at puting tela na hinahabi gamit ang backstrap loom, na nilalagyan ng mga geometrikong disenyo.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Spirits of the Wild)',
      description: 'Paano gumagabay ang mga anito at espiritu sa buhay ng mga Mangyan?',
      details: [
        'Mahal na Makaako: Ang lumikha ng lahat ng bagay na nagpapanatili ng balanse at kaayusan sa mundo.',
        'Espiritu ng Kalikasan: Naniniwala sila na ang bawat puno, ilog, at bato ay may bantay na espiritu. Bago kumuha ng anuman sa gubat, humihingi muna sila ng pahintulot.',
        'Ritwal ng Pag-aalay: Nagsasagawa sila ng mga ritwal pagkatapos ng ani (kutay) at bago magtanim upang pasalamatan at amuin ang mga espiritu ng lupa.'
      ]
    },
    stamps: [
      { id: 'mangyan-bamboo', name: 'Inukit na Kawayan', symbol: '🎋', description: 'Kawayan na naglalaman ng inukit na tula gamit ang Surat Mangyan.' },
      { id: 'mangyan-weave', name: 'Ramit Weave', symbol: '🧵', description: 'Tradisyunal na asul at puting tela ng mga Hanunoo.' },
      { id: 'mangyan-script', name: 'Surat Hanunóo', symbol: '✍️', description: 'Sinaunang sulat-Pilipino na buhay at gamit pa rin hanggang ngayon.' }
    ]
  },
  {
    id: 'ati',
    name: 'Tribong Ati',
    altNames: ['Aeta of Panay', 'First Settlers'],
    region: 'Isla ng Panay, Negros, at Boracay, Visayas',
    islandGroup: 'Visayas',
    coords: { x: 44, y: 60 },
    image: '/src/assets/images/ati_illustration_1784293053357.jpg',
    language: 'Inati / Hiligaynon',
    livelihood: 'Pangangaso, Pangingisda, Pagsasaka, at Turismo',
    overview: 'Ang mga Ati ay kabilang sa mga pinakamaagang nanirahan sa Pilipinas. Sila ay pangkat Negrito na nanirahan sa Panay bago dumating ang mga Malay. Ang kanilang simpleng buhay at kasunduan sa mga Malay ang naging pundasyon ng tanyag na Ati-Atihan Festival.',
    nature: {
      title: 'Ugnayan sa Kalikasan (The Forest Pharmacy)',
      description: 'Paano ginagamit at pinangangalagaan ng mga Ati ang kagubatan at baybayin ng Panay?',
      details: [
        'Kagubatan bilang Parmasya: May pambihira silang kaalaman sa "halamang-gamot." Kilala sila bilang mga natural healers na gumagamit ng ugat, dahon, at balat ng puno nang hindi pinapatay ang halaman.',
        'Pangangalaga sa Lupa: Mayroon silang batas na bawal bunutin ang mga batang puno o ubusin ang mga ligaw na pananim upang may magamit pa sa susunod na henerasyon.',
        'Nomadikong Pangingisda: Nakikiangkop sila sa panahon at hangin; lumilipat sila ng pook-pangingisda upang hindi maubos ang yamang-dagat sa isang lugar.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Weaving & Mimetic Dances)',
      description: 'Ano ang sining ng paghahabi at sining ng sayaw ng mga Ati?',
      details: [
        'Paghahabi ng Banig at Baskets: Gamit ang mga ligaw na damo, pandan, at yantok mula sa kagubatan, gumagawa sila ng mga matitibay na banig at basket.',
        'Mimetic Dances: Ang kanilang mga katutubong sayaw ay panggagaya sa mga hayop tulad ng paglipad ng ibon, paggalaw ng unggoy, at pag-iwas sa bubuyog.',
        'Ati-Atihan Origin: Ang tanyag na pagdiriwang ay isinasagawa bilang paggunita sa pagkakaibigan ng mga Ati at mga Malay na dinaluhan ng mga sayaw.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (The Tagbanua Spirits)',
      description: 'Ano ang paniniwala ng mga Ati sa kapangyarihan ng kalikasan at anito?',
      details: [
        'Tagbanua: Ang paniniwala sa mga espiritu ng kalikasan na nagbabantay sa mga puno, ilog, at bundok. Ang hindi paggalang sa kanila ay nagdudulot ng sakit.',
        'Diyandi Shamanism: Ang kanilang mga pinunong espirituwal o "medicine men" na nag-uugnay sa tao, kalikasan, at mga espiritu sa pamamagitan ng ritwal.',
        'Ritwal ng Pagsisindi: Nag-aalay sila ng usok at mga pananim sa paanan ng malalaking puno bilang pasasalamat sa proteksyon.'
      ]
    },
    stamps: [
      { id: 'ati-drum', name: 'Lubgong Drum', symbol: '🪘', description: 'Tradisyunal na tambol na gawa sa balat at kahoy na nagbibigay ritmo.' },
      { id: 'ati-herb', name: 'Katutubong Gamot', symbol: '🌱', description: 'Simbolo ng kanilang malalim na kaalaman sa panggagamot gamit ang mga halaman.' },
      { id: 'ati-mat', name: 'Ati Banig Basket', symbol: '🧺', description: 'Katutubong sining ng paghahabi gamit ang pandan at yantok.' }
    ]
  },
  {
    id: 'kinaraya',
    name: 'Tribong Kinaray-a',
    altNames: ['Hiniraya', 'Kinaray-a Bukidnon'],
    region: 'Antique, Iloilo, Capiz, at Aklan (Panay Island), Visayas',
    islandGroup: 'Visayas',
    coords: { x: 41, y: 63 },
    image: '/src/assets/images/kinaraya_illustration_1784294325323.jpg',
    language: 'Kinaray-a',
    livelihood: 'Pagsasaka ng Palay, Mais, Niyog, at Gawang Kawayan',
    overview: 'Ang mga Kinaray-a ay isa sa mga pinakamatandang pangkat etnolinggwistiko sa Panay. Ang pangalang Kinaray-a ay nagmula sa salitang "iraya" (itaas ng ilog) at "ka" (kasama). Kilala sila sa pagiging masipag, magalang, at sa kanilang mayamang panitikan.',
    nature: {
      title: 'Ugnayan sa Kalikasan (Highland Waters)',
      description: 'Paano namumuhay ang mga Kinaray-a sa itaas ng ilog at bundok ng Antique?',
      details: [
        'Buhay sa Iraya: Bilang mga "tao sa itaas ng ilog", ang kanilang pagsasaka ay nakaayon sa mga daloy at agos ng mga bundok at ilog ng Antique.',
        'Katutubong Pagsasaka: Gumagamit sila ng matatandang pamamaraan sa pagtatanim ng palay, niyog, tubo, at gulay na gumagalang sa sustansya ng lupa.',
        'Paggamit ng Kawayan at Nito: Kinukuha nila ang mga likas na kawayan at nito sa kagubatan upang lumikha ng mga kagamitang pambahay nang may pangangalaga.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Oral Literature & Weaving)',
      description: 'Ano ang mga natatanging sining, wika, at tradisyon ng mga Kinaray-a?',
      details: [
        'Wikang Kinaray-a: Isang wikang Austronesyo na mayaman sa bokabularyo para sa agrikultura at pamilya, malawakang ginagamit sa Panay.',
        'Panitikang-Bayan: Mayaman sa mga epiko, kuwentong-bayan, at tradisyunal na awitin na ipinapasa sa pamabagitan ng pasalitang tradisyon.',
        'Sining-Kagamitan: Tanyag sa paglikha ng magagandang produktong yari sa kawayan at nito na ginagamit sa araw-araw na pamumuhay.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Faith and Community)',
      description: 'Ano ang mga pinahahalagahan at ritwal ng mga Kinaray-a?',
      details: [
        'Pagyakap sa Pamilya at Komunidad: Lubos na pinahahalagahan ang pagtutulungan (bayanihan/maragtas) at pagkakaisa ng pamilya.',
        'Kulturang Pagdiriwang: Ipinagdiriwang ang mga lokal na kapistahan na nagpapakita ng pasasalamat sa magandang ani ng lupa.',
        'Pagsasama ng Pananampalataya: Ang kanilang paniniwala ay nagpapakita ng kombinasyon ng tradisyunal na paggalang sa kalikasan at makabagong relihiyon.'
      ]
    },
    stamps: [
      { id: 'kinaraya-basket', name: 'Nito Basket', symbol: '🧺', description: 'Magandang hinabing basket na yari sa nito at kawayan.' },
      { id: 'kinaraya-flute', name: 'Bamboo Flute', symbol: '🪈', description: 'Tradisyunal na instrumentong naglalarawan ng himig ng bundok.' },
      { id: 'kinaraya-abaca', name: 'Kinaray-a Weave', symbol: '🧵', description: 'Makukulay na hinabing tela mula sa katutubong hibla.' }
    ]
  },
  {
    id: 'waray',
    name: 'Waray',
    altNames: ['Pintados', 'People of Samar and Leyte'],
    region: 'Samar, Leyte, at Biliran, Silangang Visayas',
    islandGroup: 'Visayas',
    coords: { x: 62, y: 58 },
    image: '/src/assets/images/waray_illustration_1784294339785.jpg',
    language: 'Waray-Waray / Bahasa Leyte',
    livelihood: 'Pangingisda, Pagtatanim ng Niyog (Kopra) at Palay',
    overview: 'Dahil ang rehiyon ng mga Waray ay nakaharap sa Pacific Ocean at madalas dumaan ang malalakas na bagyo, naging matapang, matatag, at madiskarte ang mga Waray. Kilala sila noong pre-kolonyal bilang "Pintados" dahil sa kanilang magagarbong tattoo na sumisimbolo sa katapangan.',
    nature: {
      title: 'Ugnayan sa Kalikasan (Pacific Edge)',
      description: 'Paano nakikipamuhay ang mga Waray sa bagyo at maalong dagat ng Leyte at Samar?',
      details: [
        'Katatagan sa Bagyo: Ang kanilang ugali ay hinubog ng mga bagyo. Ang pagiging matatag at palaban ay bahagi ng kanilang pamumuhay at pakikibaka sa kalikasan.',
        'Kopra at Niyugan: Ang malalawak na niyugan ng rehiyon ang nagbibigay ng pangunahing kabuhayan sa pamamagitan ng paggawa ng kopra.',
        'Tikog Grass Harvesting: Kinokolekta ang tikog, isang uri ng damo na tumutubo sa mga basang lupa o latian sa Samar, upang ihabi bilang banig.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Pintados Tattoo & Mats)',
      description: 'Ano ang mga sining, artifacts, at tradisyon ng mga Waray?',
      details: [
        'Sining ng Pintados: Ang mga tattoo ay itinuturing na dekorasyon at simbolo ng katapangan sa giyera at karangalan sa lipunan.',
        'Banig na Tikog: Ang sining ng paghahabi ng banig mula sa damong tikog. Kilala ang Samar sa paggawa ng matitibay at makukulay na banig na may geometrikong ukit.',
        'Paraw Boatbuilders: Paggawa ng matitibay na bangkang kahoy (Paraw) upang kayanin ang malalakas na alon ng Karagatang Pasipiko.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Spirit of Courage)',
      description: 'Ano ang mga pinahahalagahan at katutubong sandata ng mga Waray?',
      details: [
        'Sundang (Itak): Isang tradisyunal na itak na gamit sa pag-ani ng niyog, paggawa sa bukid, at proteksyon. Simbolo ito ng kasipagan at katapangan.',
        'Paggalang sa Kalikasan at Dagat: Mayroon silang malalim na paggalang sa mga espiritu ng karagatan na nagbibigay ng pagkain sa kabila ng panganib ng bagyo.',
        'Katutubong Awitin: Kilala sa kanilang mga awit ng pag-ibig at pakikibaka tulad ng "Kuratsa" na sayaw ng panliligaw.'
      ]
    },
    stamps: [
      { id: 'waray-sundang', name: 'Sundang Itak', symbol: '⚔️', description: 'Tradisyunal na itak para sa pagsasaka at simbolo ng katapangan.' },
      { id: 'waray-mat', name: 'Banig na Tikog', symbol: '🟥', description: 'Banig na hinabi mula sa tikog grass na matatagpuan sa Samar.' },
      { id: 'waray-tattoo', name: 'Pintados Tattoo', symbol: '🌀', description: 'Tradisyunal na sining ng pagtatattoo bilang tanda ng tapang.' }
    ]
  },
  {
    id: 'badjao',
    name: 'Badjao',
    altNames: ['Sama-Badjao', 'Sama Dilaut', 'Sea Nomads'],
    region: 'Sulu, Tawi-Tawi, Basilan, at Zamboanga, Mindanao',
    islandGroup: 'Mindanao',
    coords: { x: 26, y: 92 },
    image: '/src/assets/images/badjao_illustration_1784293067422.jpg',
    language: 'Sinama (Sama Dilaut)',
    livelihood: 'Free-diving, Paninisid ng Perlas, at Pangingisda',
    overview: 'Ang mga "Sea Gypsies" o Sama Dilaut ay nabubuhay sa ibabaw ng dagat. Ang buong buhay nila ay nakatali rito: dito sila isinisilang, namumuhay sa bangkang-bahay, at inililibing. Tanyag sila bilang pambihirang free-divers na kayang pigilin ang paghinga sa ilalim ng dagat.',
    nature: {
      title: 'Ugnayan sa Kalikasan (The Sea as Soul)',
      description: 'Paano idinugtong ng mga Badjao ang kanilang katawan at buhay sa karagatan?',
      details: [
        'Ebolusyonaryong Free-diving: Kakayahang manatili sa ilalim ng tubig nang ilang minuto nang walang oxygen tank upang manghuli ng isda o kumuha ng perlas.',
        'Pagbasa sa Dagat: May matalas na kakayahang basahin ang hangin (habagat at amihan), agos, at posisyon ng mga bituin para sa paglalayag.',
        'Paniniwalang Animismo: Naniniwala sa mga espiritu ng dagat (Omboh). Madalas silang mag-alay sa dagat upang humingi ng ligtas na paglalayag at masaganang huli.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Lepa & Pangalay)',
      description: 'Ano ang mga tanyag na tradisyon at kagamitan ng mga Badjao?',
      details: [
        'Sayaw na Pangalay: Tradisyunal na sayaw na paimbabaw na nanggagaya sa banayad na alon ng dagat. Nagkakabit ng mahahabang artipisyal na kuko na metal (jenggeng).',
        'Regatta Lepa: Isang taunang festival kung saan nagtitipon ang mga pamilya upang ipagmalaki ang kanilang makukulay na pinalamutiang bangkang-bahay.',
        'Paghahabi ng Tepoh: Mga banig na gawa sa pandan na ginagamit sa pagtulog. Kilala ang mga kababaihan sa paghabi nito gamit ang matingkad na kulay.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Umboh & Akalummuh)',
      description: 'Ano ang mga paniniwala sa pamilya at espiritu ng mga Badjao?',
      details: [
        'Tarsila: Ang kanilang pasalitang tradisyon na nagkukuwento ng pinagmulan ng kanilang lahi mula sa dugong-bughaw.',
        'Akalummuh at Asammal: Mataas ang respeto sa pamilya. Bawal hawakan ang kamay ng babae hangga\'t hindi kasal (Asammal) at binibigyang halaga ang dalisay (Akalummuh).',
        'Pagumboh at Lindur Amdam: Nagdiriwang ng Pagumboh bilang paggalang sa ninuno. Ang tradisyon ng Lindur Amdam ay ang pag-iyak kapag may namatay.'
      ]
    },
    stamps: [
      { id: 'badjao-lepa', name: 'Lepa Boat', symbol: '⛵', description: 'Ang magandang inukit na houseboat na tirahan ng mga pamilyang Badjao.' },
      { id: 'badjao-gabbang', name: 'Gabbang', symbol: '🪵', description: 'Tradisyunal na instrumentong gawa sa kawayan na kahawig ng xylophone.' },
      { id: 'badjao-tepoh', name: 'Tepoh Banig', symbol: '🟥', description: 'Matingkad na banig na gawa sa dahon ng pandan na may disenyong geometriko.' }
    ]
  },
  {
    id: 'moro',
    name: 'Moro',
    altNames: ['Pilipinong Muslim', 'Sultanato ng Maguindanao'],
    region: 'Mindanao, Sulu, at Palawan, Mindanao',
    islandGroup: 'Mindanao',
    coords: { x: 46, y: 84 },
    image: '/src/assets/images/moro_illustration_1784294280474.jpg',
    language: 'Maguindanaon / Iranun',
    livelihood: 'Maritime Trading, Pagsasaka, at Sining-Metal',
    overview: 'Ang "Moro" ay ang pangkalahatang katawagan na ibinigay ng mga Espanyol sa mga Pilipinong Muslim sa Mindanao. Sila ay may sariling politikal na pamayanan tulad ng Sultanato ng Maguindanao at Sulu na hindi kailanman ganap na nasakop ng mga mananakop.',
    nature: {
      title: 'Ugnayan sa Kalikasan (Maritime Strength)',
      description: 'Paano nakikipamuhay ang mga Moro sa mga baybayin at sapa ng Mindanao?',
      details: [
        'Labanan sa Dagat: Dahil sa kanilang liksi at kahusayan sa pakikipaglaban sa dagat at paglalayag, naging tanyag silang mandirigma sa karagatan.',
        'Sultanato at Lupa: Ang pamamahala sa lupa ay nakatali sa sistema ng Sultanato, kung saan iginagalang ang teritoryong pinamumunuan ng Sultan.',
        'Ugnayan sa Dagat: Ginamit ang dagat bilang pangunahing daanan ng kalakalan (trade route) sa pagitan ng Pilipinas, Borneo, at Indonesia.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Okir & Kulintang)',
      description: 'Ano ang mga makukulay na sining at musika ng mga Moro?',
      details: [
        'Sining ng Okir: Isang estilo ng pag-ukit ng mga halaman at baging na makikita sa kanilang mga bahay, gamit, at mga instrumento.',
        'Kulintang: Isang serye ng maliliit na gongs na tanso na nakahanay, tinutugtog sa mga pagtitipon, kasal, at ritwal.',
        'Vinta Boat: Isang tradisyunal na bangka na may makukulay na layag na sumisimbolo sa kanilang galing sa paglalayag.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Faith and the Kris)',
      description: 'Sino ang mga pinuno at ano ang tradisyunal na sandata ng mga Moro?',
      details: [
        'Pananampalatayang Islam: Ang kanilang lipunan ay malalim na nakatali sa Islam, kung saan ipinagdiriwang ang Hari Raya Puasa pagkatapos ng Ramadan.',
        'Sari-saring Antas: May malinaw na hirarkiya mula sa Sultan, mga Mandirigma, Pinuno ng Relihiyon, hanggang sa karaniwang mamamayan.',
        'Kris (Sundang): Isang tradisyunal na kampilan o sundang na may paalon-alon na talim, ginagamit para sa proteksyon at simbolo ng katayuan.'
      ]
    },
    stamps: [
      { id: 'moro-vinta', name: 'Vinta Boat', symbol: '⛵', description: 'Tradisyunal na bangka na may makukulay na layag.' },
      { id: 'moro-kulintang', name: 'Kulintang Gongs', symbol: '🔔', description: 'Serye ng maliliit na gongs na tanso na ginagamit sa musika.' },
      { id: 'moro-kris', name: 'Kris Sword', symbol: '🗡️', description: 'Tradisiyunal na kampilan na may paalon-alon na talim bilang simbolo ng tapang.' }
    ]
  },
  {
    id: 'tausug',
    name: 'Tausug',
    altNames: ['Tau Sug', 'People of the Current'],
    region: 'Sulu Archipelago, Jolo, Tawi-Tawi, at Basilan, Mindanao',
    islandGroup: 'Mindanao',
    coords: { x: 32, y: 90 },
    image: '/src/assets/images/tausug_illustration_1784294296623.jpg',
    language: 'Bahasa Sug (Wikang Tausug)',
    livelihood: 'Maritime Trade, Paninisid ng Perlas, at Pagsasaka',
    overview: 'Ang mga Tausug ay ang "People of the Current" (mga tao ng agos). Sila ang nagtatag ng makapangyarihang Sultanato ng Sulu noong 1450, na naging sentro ng pandaigdigang kalakalan sa dagat at tinaguriang "Pearl Capital" ng Timog-silangang Asya noong sinaunang panahon.',
    nature: {
      title: 'Ugnayan sa Kalikasan (The Strong Currents)',
      description: 'Paano nakikipamuhay ang mga Tausug sa agos at matabang lupa ng Sulu?',
      details: [
        'Tau Higad at Tau Gitasan: Nahahati sa dalawa: Tau Gitasan (nakatira sa sentro ng isla para magsasaka ng niyog, durian, at panggih) at Tau Higad (sa baybayin para pangingisda at paninisid ng perlas).',
        'Volcanic Soil: Ang mga isla ng Sulu ay may matatabang lupang bulkanik na perpekto para sa agrikultura kahit maliit ang sukat ng lupa.',
        'Bahasa Sug at Karagatan: Ang kanilang wika ay mayaman sa mga terminolohiyang pandagat, direksyon ng hangin, at agos ng tubig.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Baju Lapi & Pangalay)',
      description: 'Ano ang mga natatanging kasuotan at sining ng mga Tausug?',
      details: [
        'Baju Lapi at Sawal: Tradisyunal na elegante at semi-fitted na kasuotan: mahabang manggas na may butones na ginto (Baju Lapi) at maluwag na pantalon (Sawal).',
        'Pangalay: Sayaw na gumagamit ng jengkeng (metal na kuko). Ang galaw ng kamay ay hango sa agos ng dagat at paglipad ng mga ibon.',
        'Patis (Tadjung): Ang kanilang bersyon ng malong na isinasampay sa balikat, gawa sa magaan at preskong seda para sa klima.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (The Sultanate & Kris)',
      description: 'Sino ang mga pinuno at ano ang kultura ng katapangan ng mga Tausug?',
      details: [
        'Sultanato ng Sulu: Itinatag noong 1450, pinaka-organisadong kaharian sa bansa na kumontrol sa Dagat ng Sulu at nakipag-ugnayan sa Tsina.',
        'Panglima at Kris: Sila ay kilala bilang mga matatapang na mandirigma na gumagamit ng Kris (kurbadong espada) upang ipagtanggol ang kanilang kalayaan.',
        'Pakikipagbakas sa Mundo: Maagang nakipag-ugnayan sa mga dinastiyang Tsino tulad ng Ming, na naglagay sa kanila sa mga sinaunang mapa ng daigdig.'
      ]
    },
    stamps: [
      { id: 'tausug-pearl', name: 'Sulu Pearl', symbol: '⚪', description: 'Ang tanyag na perlas ng Sulu na nakarating hanggang sa Europa.' },
      { id: 'tausug-baju', name: 'Baju Lapi', symbol: '🥋', description: 'Elegante at tradisyunal na kasuotan ng mga Tausug na may gintong butones.' },
      { id: 'tausug-kris', name: 'Tausug Kris', symbol: '⚔️', description: 'Kurbadong espada na sumasagisag sa kalayaan at katapangan.' }
    ]
  },
  {
    id: 'maranao',
    name: 'Maranao',
    altNames: ['Mëranaw', 'People of the Lake'],
    region: 'Lawa ng Lanao, Lanao del Sur at Lanao del Norte, Mindanao',
    islandGroup: 'Mindanao',
    coords: { x: 50, y: 80 },
    image: '/src/assets/images/maranao_illustration_1784294311207.jpg',
    language: 'Mëranaw',
    livelihood: 'Pagsasaka, Pangingisda sa Lawa, at Sining ng Tanso',
    overview: 'Ang mga Maranao ay ang mga "People of the Lake" (mga tao sa lawa) na nakatira sa paligid ng Lawa ng Lanao—isang high-altitude lake na pinaliligiran ng bundok. Kilala sila sa kanilang maringal na sining ng Okir, paggawa ng tanso sa Tugaya, at ang kanilang epikong Darangen.',
    nature: {
      title: 'Ugnayan sa Kalikasan (The Sacred Lake)',
      description: 'Paano idinugtong ng mga Maranao ang kanilang buhay sa Lawa ng Lanao?',
      details: [
        'Lawa bilang Pundasyon: Ang Lawa ng Lanao (700 metro itaas ng dagat) ay hindi lamang pinagkukunan ng isda kundi simbolo rin ng kanilang espirituwal na buhay.',
        'Pagsasaka at Palapa: Pagtatanim ng palay sa matabang lupang bulkanik. Sikat sila sa pagtatanim ng sakurab (scallion) na ginagamit sa kanilang sarsa, ang palapa.',
        'Kahoy mula sa Gubat: Dahil sa yaman ng gubat sa paligid ng lawa, naging eksperto sila sa woodworking o pag-ukit sa kahoy.'
      ]
    },
    culture: {
      title: 'Kultura at Sining (Torogan, Okir, & Sarimanok)',
      description: 'Ano ang mga tanyag na sining, arkitektura, at epiko ng mga Maranao?',
      details: [
        'Torogan at Panolong: Ang tradisyunal na bahay ng mga maharlika na may nakaukit na pakpak ng kahoy (panolong) sa disenyong okir.',
        'Sarimanok: Isang mitolohikal na ibon na may hawak na isda, sumisimbolo sa sining ng Mindanao na kilala sa buong mundo.',
        'Darangen Epiko: Isang sikat na epiko ng mga Maranao na kinilala ng UNESCO bilang Masterpiece of the Oral and Intangible Heritage of Humanity.'
      ]
    },
    beliefs: {
      title: 'Paniniwala at Tradisyon (Sultanate of Lanao & Islam)',
      description: 'Paano gumagabay ang sistema ng Sultanato at Islam sa mga Maranao?',
      details: [
        'Malalim na Islamiko: Ang kultura ay pagsasama ng katutubong tradisyon at relihiyong Islam na pumasok noong ika-14 na siglo.',
        'Sultanato ng Lanao: Napanatili ang sistema ng Sultanato hanggang sa kasalukuyan dahil sa matagumpay na paglaban sa Espanya at Amerika.',
        'Malong Landap: Ang tradisyunal na hugis-tubong malong na isinusuot sa mga okasyon, may tahi na tinatawag na langkit.'
      ]
    },
    stamps: [
      { id: 'maranao-sarimanok', name: 'Sarimanok', symbol: '🐓', description: 'Mitolohikal na ibon na sumasagisag sa sining at kultura ng Maranao.' },
      { id: 'maranao-torogan', name: 'Torogan House', symbol: '🏠', description: 'Maringal na tahanan ng mga maharlikang Maranao na may ukit na okir.' },
      { id: 'maranao-brass', name: 'Tugaya Brassware', symbol: '🏺', description: 'Tradisyunal na tanso o kulintang na inukit nang manu-mano sa Tugaya.' }
    ]
  }
];
