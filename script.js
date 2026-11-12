// TODO: trocar pelo número real da loja (DDI + DDD + número, só dígitos)
const WHATSAPP = "5511982630288";

// Amostra: só os perfumes que já têm foto. O catálogo completo (40) entra depois da aprovação do texto.
// Cada tamanho tem "label" (botão) e "msg" (texto na mensagem do WhatsApp). Sem decant: só o frasco em ml.
const PRODUCTS = [
  { id: "club-de-nuit-intense-man", name: "Club de Nuit Intense Man", cat: "arabe", gender: "masculino", best: true, brand: "Armaf", fam: "Amadeirado frutado", desc: "Perfil amadeirado frutado, com saída de abacaxi, limão e groselha preta e fundo de defumado, patchouli e baunilha.", notes: {"top": ["Abacaxi", "Limão", "Groselha preta"], "base": ["Defumado", "Patchouli", "Baunilha"]}, img: ["club-de-nuit-intense-man-1.jpg", "club-de-nuit-intense-man-2.jpg"], sizes: [{ label: "105 ml", msg: "105 ml" }] },
  { id: "club-de-nuit-iconic", name: "Club de Nuit Iconic", cat: "arabe", gender: "masculino", best: true, brand: "Armaf", fam: "Aromático fresco", desc: "Perfil aromático fresco, com saída de toranja, limão e pimenta rosa e fundo de sândalo, âmbar e incenso.", notes: {"top": ["Toranja", "Limão", "Pimenta rosa"], "base": ["Sândalo", "Âmbar", "Incenso"]}, img: ["club-de-nuit-iconic-1.jpg", "club-de-nuit-iconic-2.jpg"], sizes: [{ label: "105 ml", msg: "105 ml" }] },
  { id: "hawas", name: "Hawas", cat: "arabe", gender: "masculino", brand: "Rasasi", fam: "Aromático aquático", desc: "Perfil aromático aquático, com saída de maçã, bergamota e limão e fundo de âmbar, almíscar e patchouli.", notes: {"top": ["Maçã", "Bergamota", "Limão"], "base": ["Âmbar", "Almíscar", "Patchouli"]}, img: ["hawas-1.jpg", "hawas-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "asad-elixir", name: "Asad Elixir", cat: "arabe", gender: "masculino", brand: "Lattafa", fam: "Ambarado especiado", desc: "Perfil ambarado especiado, com saída de pimenta rosa, açafrão e toranja e fundo de patchouli, incenso e âmbar.", notes: {"top": ["Pimenta rosa", "Açafrão", "Toranja"], "base": ["Patchouli", "Incenso", "Âmbar"]}, img: ["asad-elixir-1.jpg", "asad-elixir-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "laventure", name: "L'Aventure", cat: "arabe", gender: "masculino", brand: "Al Haramain", fam: "Frutado amadeirado", desc: "Perfil frutado amadeirado, com saída de bergamota, limão e maçã e fundo de almíscar, musgo de carvalho e âmbar-gris.", notes: {"top": ["Bergamota", "Limão", "Maçã"], "base": ["Almíscar", "Musgo de carvalho", "Âmbar-gris"]}, img: ["laventure-1.jpg", "laventure-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "fakhar-black", name: "Fakhar Black", cat: "arabe", gender: "masculino", best: true, brand: "Lattafa", fam: "Aromático", desc: "Perfil aromático, com saída de maçã, bergamota e gengibre e fundo de tonka, cedro e vetiver.", notes: {"top": ["Maçã", "Bergamota", "Gengibre"], "base": ["Tonka", "Cedro", "Vetiver"]}, img: ["fakhar-black-1.jpg", "fakhar-black-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "historic-olmeda", name: "Historic Olmeda", cat: "arabe", gender: "masculino", brand: "Afnan", fam: "Amadeirado", desc: "Perfil amadeirado, com saída de pimenta rosa, cardamomo e toranja e fundo de patchouli, âmbar-gris e almíscar.", notes: {"top": ["Pimenta rosa", "Cardamomo", "Toranja"], "base": ["Patchouli", "Âmbar-gris", "Almíscar"]}, img: ["historic-olmeda-1.jpg", "historic-olmeda-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "attar-al-wesal-gold", name: "Attar Al Wesal Gold", cat: "arabe", gender: "masculino", brand: "Al Wataniah", fam: "Ambarado especiado", desc: "Perfil ambarado especiado, com saída de pera, lavanda e bergamota e fundo de baunilha negra, âmbar e patchouli.", notes: {"top": ["Pera", "Lavanda", "Bergamota"], "base": ["Baunilha negra", "Âmbar", "Patchouli"]}, img: ["attar-al-wesal-gold-1.jpg", "attar-al-wesal-gold-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "aether-extrait", name: "Aether Extrait", cat: "arabe", gender: "masculino", brand: "French Avenue", fam: "Aromático", desc: "Perfil aromático, com saída de maçã verde, bergamota e tangerina e fundo de musgo de carvalho, almíscar e madeira âmbar.", notes: {"top": ["Maçã verde", "Bergamota", "Tangerina"], "base": ["Musgo de carvalho", "Almíscar", "Madeira âmbar"]}, img: ["aether-extrait-1.jpg", "aether-extrait-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "vulcan-feu", name: "Vulcan Feu", cat: "arabe", gender: "masculino", brand: "French Avenue", fam: "Amadeirado especiado", desc: "Perfil amadeirado especiado, com saída de manga, gengibre e limão e fundo de almíscar, âmbar e oud.", notes: {"top": ["Manga", "Gengibre", "Limão"], "base": ["Almíscar", "Âmbar", "Oud"]}, img: ["vulcan-feu-1.jpg", "vulcan-feu-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "club-de-nuit-woman", name: "Club de Nuit Woman", cat: "arabe", gender: "feminino", brand: "Armaf", fam: "Floral chypre", desc: "Perfil floral chypre, com saída de bergamota, toranja e laranja e fundo de patchouli, baunilha e almíscar.", notes: {"top": ["Bergamota", "Toranja", "Laranja"], "base": ["Patchouli", "Baunilha", "Almíscar"]}, img: ["club-de-nuit-woman1.jpg", "club-de-nuit-woman2.jpg"], sizes: [{ label: "105 ml", msg: "105 ml" }] },
  { id: "yara-elixir", name: "Yara Elixir", cat: "arabe", gender: "feminino", brand: "Lattafa", fam: "Floral gourmand", desc: "Perfil floral gourmand, com saída de morango, groselha preta e toranja rosa e fundo de baunilha, âmbar e almíscar.", notes: {"top": ["Morango", "Groselha preta", "Toranja rosa"], "base": ["Baunilha", "Âmbar", "Almíscar"]}, img: ["yara-elixir-1.jpg", "yara-elixir-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "tharwah-gold", name: "Tharwah Gold", cat: "arabe", gender: "feminino", brand: "Lattafa", fam: "Oriental", desc: "Perfil oriental, com saída de lavanda, bergamota e flor de laranjeira e fundo de baunilha, âmbar e vetiver.", notes: {"top": ["Lavanda", "Bergamota", "Flor de laranjeira"], "base": ["Baunilha", "Âmbar", "Vetiver"]}, img: ["tharwah-gold-1.jpg", "tharwah-gold-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "dalal", name: "Dalal", cat: "arabe", gender: "feminino", brand: "Lattafa", fam: "Gourmand", desc: "Perfil gourmand, com saída de maçã, tangerina e ylang-ylang e fundo de baunilha, almíscar e musgo de carvalho.", notes: {"top": ["Maçã", "Tangerina", "Ylang-ylang"], "base": ["Baunilha", "Almíscar", "Musgo de carvalho"]}, img: ["dalal-1.jpg", "dalal-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "musamam", name: "Musamam", cat: "arabe", gender: "feminino", brand: "Lattafa", fam: "Floral oriental", desc: "Perfil floral oriental, com saída de tangerina, lavanda e açafrão e fundo de olíbano, akigalawood e cisto.", notes: {"top": ["Tangerina", "Lavanda", "Açafrão"], "base": ["Olíbano", "Akigalawood", "Cisto"]}, img: ["musamam-1.jpg", "musamam-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "the-kingdom", name: "The Kingdom", cat: "arabe", gender: "feminino", brand: "Lattafa", fam: "Floral", desc: "Perfil floral, com saída de groselha preta, peônia e pera e fundo de baunilha, sândalo e âmbar.", notes: {"top": ["Groselha preta", "Peônia", "Pera"], "base": ["Baunilha", "Sândalo", "Âmbar"]}, img: ["the-kingdom-1.jpg", "the-kingdom-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "pink-eclipse", name: "Pink Eclipse", cat: "arabe", gender: "feminino", brand: "Maison Alhambra", fam: "Floral frutado", desc: "Perfil floral frutado, com saída de pera, bergamota e tangerina e fundo de baunilha, benjoim e almíscar.", notes: {"top": ["Pera", "Bergamota", "Tangerina"], "base": ["Baunilha", "Benjoim", "Almíscar"]}, img: ["pink-eclipse-1.jpg", "pink-eclipse-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "delilah-pour-femme", name: "Delilah Pour Femme", cat: "arabe", gender: "feminino", brand: "Maison Alhambra", fam: "Floral", desc: "Perfil floral, com saída de ruibarbo, lichia e bergamota e fundo de almíscar branco, baunilha e cashmeran.", notes: {"top": ["Ruibarbo", "Lichia", "Bergamota"], "base": ["Almíscar branco", "Baunilha", "Cashmeran"]}, img: ["delilah-pour-femme-1.jpg", "delilah-pour-femme-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "sabah-al-ward", name: "Sabah Al Ward", cat: "arabe", gender: "feminino", brand: "Al Wataniah", fam: "Floral", desc: "Perfil floral, com saída de tangerina, pimenta rosa e cacau e fundo de baunilha, tonka e patchouli.", notes: {"top": ["Tangerina", "Pimenta rosa", "Cacau"], "base": ["Baunilha", "Tonka", "Patchouli"]}, img: ["sabah-al-ward-1.jpg", "sabah-al-ward-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "khamrah", name: "Khamrah", cat: "arabe", gender: "feminino", best: true, brand: "Lattafa", fam: "Ambarado gourmand", desc: "Perfil ambarado gourmand, com saída de canela, noz-moscada e bergamota e fundo de baunilha, tonka e âmbar amadeirado.", notes: {"top": ["Canela", "Noz-moscada", "Bergamota"], "base": ["Baunilha", "Tonka", "Âmbar amadeirado"]}, img: ["khamrah-1.jpg", "khamrah-2.jpg"], sizes: [{ label: "100 ml", msg: "100 ml" }] },
  { id: "bleu-de-chanel", name: "Bleu de Chanel", cat: "importado", gender: "masculino", brand: "Chanel", fam: "Amadeirado aromático", desc: "Perfil amadeirado aromático, com saída de toranja, limão e hortelã e fundo de incenso, cedro e sândalo.", notes: {"top": ["Toranja", "Limão", "Hortelã"], "base": ["Incenso", "Cedro", "Sândalo"]}, img: ["bleu-de-chanel-1.jpg", "bleu-de-chanel-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "sauvage-eau-forte", name: "Sauvage Eau Forte", cat: "importado", gender: "masculino", brand: "Dior", fam: "Aromático fresco", desc: "Perfil aromático fresco, com saída de pimenta, cardamomo e anis-estrela e fundo de almíscar, madeira e lavanda.", notes: {"top": ["Pimenta", "Cardamomo", "Anis-estrela"], "base": ["Almíscar", "Madeira", "Lavanda"]}, img: ["sauvage-eau-forte-1.jpg", "sauvage-eau-forte-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "scandal-pour-homme", name: "Scandal Pour Homme", cat: "importado", gender: "masculino", brand: "Jean Paul Gaultier", fam: "Ambarado", desc: "Perfil ambarado, com saída de tangerina, sálvia esclareia e caramelo e fundo de vetiver, fava tonka e cedro.", notes: {"top": ["Tangerina", "Sálvia esclareia", "Caramelo"], "base": ["Vetiver", "Fava tonka", "Cedro"]}, img: ["scandal-pour-homme-1.jpg", "scandal-pour-homme-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "k-by-dolce-gabbana", name: "K by Dolce & Gabbana", cat: "importado", gender: "masculino", brand: "Dolce & Gabbana", fam: "Aromático cítrico", desc: "Perfil aromático cítrico, com saída de laranja-sanguínea, limão siciliano e zimbro e fundo de cedro, vetiver e patchouli.", notes: {"top": ["Laranja-sanguínea", "Limão siciliano", "Zimbro"], "base": ["Cedro", "Vetiver", "Patchouli"]}, img: ["k-by-dolce-gabbana-1.jpg", "k-by-dolce-gabbana-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "boss-bottled-parfum", name: "Boss Bottled Parfum", cat: "importado", gender: "masculino", brand: "Hugo Boss", fam: "Amadeirado", desc: "Perfil amadeirado, com saída de tangerina, incenso e figueira e fundo de cedro, couro e íris.", notes: {"top": ["Tangerina", "Incenso", "Figueira"], "base": ["Cedro", "Couro", "Íris"]}, img: ["boss-bottled-parfum-1.jpg", "boss-bottled-parfum-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "azzaro-wanted", name: "Azzaro Wanted", cat: "importado", gender: "masculino", brand: "Azzaro", fam: "Amadeirado especiado", desc: "Perfil amadeirado especiado, com saída de gengibre, limão e lavanda e fundo de fava tonka, vetiver e madeira âmbar.", notes: {"top": ["Gengibre", "Limão", "Lavanda"], "base": ["Fava tonka", "Vetiver", "Madeira âmbar"]}, img: ["azzaro-wanted-1.jpg", "azzaro-wanted-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "212-men-nyc", name: "212 Men NYC", cat: "importado", gender: "masculino", brand: "Carolina Herrera", fam: "Aromático", desc: "Perfil aromático, com saída de toranja, bergamota e lavanda e fundo de almíscar, sândalo e incenso.", notes: {"top": ["Toranja", "Bergamota", "Lavanda"], "base": ["Almíscar", "Sândalo", "Incenso"]}, img: ["212-men-nyc-1.jpg", "212-men-nyc-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "y", name: "Y", cat: "importado", gender: "masculino", brand: "Yves Saint Laurent", fam: "Aromático fresco", desc: "Perfil aromático fresco, com saída de maçã, bergamota e gengibre e fundo de cedro, vetiver e fava tonka.", notes: {"top": ["Maçã", "Bergamota", "Gengibre"], "base": ["Cedro", "Vetiver", "Fava tonka"]}, img: ["y-1.jpg", "y-2.jpg"], sizes: [{ label: "60 ml", msg: "60 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "invictus", name: "Invictus", cat: "importado", gender: "masculino", brand: "Paco Rabanne", fam: "Aromático aquático", desc: "Perfil aromático aquático, com saída de toranja, notas marinhas e tangerina e fundo de madeira de guaiaco, âmbar cinzento e patchouli.", notes: {"top": ["Toranja", "Notas marinhas", "Tangerina"], "base": ["Madeira de guaiaco", "Âmbar cinzento", "Patchouli"]}, img: ["invictus-1.jpg", "invictus-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "acqua-di-gio", name: "Acqua di Giò", cat: "importado", gender: "masculino", brand: "Giorgio Armani", fam: "Aquático", desc: "Perfil aquático, com saída de bergamota, neroli e tangerina e fundo de patchouli, cedro e almíscar.", notes: {"top": ["Bergamota", "Neroli", "Tangerina"], "base": ["Patchouli", "Cedro", "Almíscar"]}, img: ["acqua-di-gio-1.jpg", "acqua-di-gio-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "la-vie-est-belle", name: "La Vie Est Belle", cat: "importado", gender: "feminino", brand: "Lancôme", fam: "Gourmand", desc: "Perfil gourmand, com saída de pera, groselha preta e bergamota e fundo de pralinê, baunilha e patchouli.", notes: {"top": ["Pera", "Groselha preta", "Bergamota"], "base": ["Pralinê", "Baunilha", "Patchouli"]}, img: ["la-vie-est-belle-1.jpg", "la-vie-est-belle-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "212-vip-rose", name: "212 VIP Rosé", cat: "importado", gender: "feminino", brand: "Carolina Herrera", fam: "Floral frutado", desc: "Perfil floral frutado, com saída de champanhe rosé, pimenta rosa e maracujá e fundo de madeira Queenwood, almíscar e patchouli.", notes: {"top": ["Champanhe rosé", "Pimenta rosa", "Maracujá"], "base": ["Madeira Queenwood", "Almíscar", "Patchouli"]}, img: ["212-vip-rose-1.jpg", "212-vip-rose-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "80 ml", msg: "80 ml" }] },
  { id: "good-girl", name: "Good Girl", cat: "importado", gender: "feminino", brand: "Carolina Herrera", fam: "Oriental floral", desc: "Perfil oriental floral, com saída de amêndoa, café e bergamota e fundo de fava tonka, cacau e baunilha.", notes: {"top": ["Amêndoa", "Café", "Bergamota"], "base": ["Fava tonka", "Cacau", "Baunilha"]}, img: ["good-girl-1.jpg", "good-girl-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "80 ml", msg: "80 ml" }] },
  { id: "libre", name: "Libre", cat: "importado", gender: "feminino", brand: "Yves Saint Laurent", fam: "Floral", desc: "Perfil floral, com saída de tangerina, lavanda e neroli e fundo de baunilha, almíscar e cedro.", notes: {"top": ["Tangerina", "Lavanda", "Neroli"], "base": ["Baunilha", "Almíscar", "Cedro"]}, img: ["libre-1.jpg", "libre-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "90 ml", msg: "90 ml" }] },
  { id: "miss-dior", name: "Miss Dior", cat: "importado", gender: "feminino", brand: "Dior", fam: "Floral", desc: "Perfil floral, com saída de peônia, lírio-do-vale e íris e fundo de almíscar, baunilha e sândalo.", notes: {"top": ["Peônia", "Lírio-do-vale", "Íris"], "base": ["Almíscar", "Baunilha", "Sândalo"]}, img: ["miss-dior-1.jpg", "miss-dior-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "coco-mademoiselle", name: "Coco Mademoiselle", cat: "importado", gender: "feminino", brand: "Chanel", fam: "Chypre floral", desc: "Perfil chypre floral, com saída de laranja, tangerina e bergamota e fundo de patchouli, vetiver e baunilha.", notes: {"top": ["Laranja", "Tangerina", "Bergamota"], "base": ["Patchouli", "Vetiver", "Baunilha"]}, img: ["coco-mademoiselle-1.jpg", "coco-mademoiselle-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "jadore", name: "J'adore", cat: "importado", gender: "feminino", brand: "Dior", fam: "Floral", desc: "Perfil floral, com saída de bergamota, tangerina e magnólia e fundo de almíscar, baunilha e cedro.", notes: {"top": ["Bergamota", "Tangerina", "Magnólia"], "base": ["Almíscar", "Baunilha", "Cedro"]}, img: ["jadore-1.jpg", "jadore-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "olympea", name: "Olympéa", cat: "importado", gender: "feminino", brand: "Paco Rabanne", fam: "Oriental floral", desc: "Perfil oriental floral, com saída de tangerina verde, jasmim e flor de gengibre e fundo de âmbar-gris, cashmeran e sândalo.", notes: {"top": ["Tangerina verde", "Jasmim", "Flor de gengibre"], "base": ["Âmbar-gris", "Cashmeran", "Sândalo"]}, img: ["olympea-1.jpg", "olympea-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "80 ml", msg: "80 ml" }] },
  { id: "idole", name: "Idôle", cat: "importado", gender: "feminino", brand: "Lancôme", fam: "Floral", desc: "Perfil floral, com saída de bergamota, pera e pimenta rosa e fundo de almíscar, baunilha e patchouli.", notes: {"top": ["Bergamota", "Pera", "Pimenta rosa"], "base": ["Almíscar", "Baunilha", "Patchouli"]}, img: ["idole-1.jpg", "idole-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "100 ml", msg: "100 ml" }] },
  { id: "scandal", name: "Scandal", cat: "importado", gender: "feminino", brand: "Jean Paul Gaultier", fam: "Floral gourmand", desc: "Perfil floral gourmand, com saída de laranja sanguínea, gardênia e tangerina e fundo de patchouli, caramelo e alcaçuz.", notes: {"top": ["Laranja sanguínea", "Gardênia", "Tangerina"], "base": ["Patchouli", "Caramelo", "Alcaçuz"]}, img: ["scandal-1.jpg", "scandal-2.jpg"], sizes: [{ label: "50 ml", msg: "50 ml" }, { label: "80 ml", msg: "80 ml" }] },
];

const $ = (id) => document.getElementById(id);
const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/* ---------- estado da lista ---------- */
let list = [];
try { list = JSON.parse(localStorage.getItem("attos-list") || "[]"); } catch (e) { list = []; }
const save = () => { try { localStorage.setItem("attos-list", JSON.stringify(list)); } catch (e) {} };

/* ---------- catálogo ---------- */
const picked = {}; // id -> índice do tamanho escolhido (padrão: frasco inteiro)
PRODUCTS.forEach((p) => { picked[p.id] = p.sizes.length - 1; });
/* ícones das notas olfativas: cada nota aponta para uma categoria */
const NI = {
  citrus: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10M8.5 8.5l7 7M15.5 8.5l-7 7"/>',
  pineapple: '<path d="M12 9c-3.3 0-5 2.4-5 6s1.7 6 5 6 5-2.4 5-6-1.7-6-5-6z"/><path d="M9 4l3 4 3-4M12 3v5M9.5 12l5 6M14.5 12l-5 6"/>',
  berry: '<circle cx="8.5" cy="14.5" r="3.5"/><circle cx="15.5" cy="14.5" r="3.5"/><circle cx="12" cy="8.5" r="3.5"/><path d="M12 5c0-1.5 1-2.5 2.5-2.5"/>',
  apple: '<path d="M12 8c-2-1.5-6-1-6 4 0 4 2.5 8 6 8s6-4 6-8c0-5-4-5.500-6-4z"/><path d="M12 8c0-2 1-3.500 3-4"/>',
  leaf: '<path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14z"/><path d="M5 19L14 10"/>',
  wood: '<path d="M12 3l5 7h-3l4 6H6l4-6H7z"/><path d="M12 16v5"/>',
  smoke: '<path d="M8 21c-2-2 2-3.500 0-6s2-4 0-6M13 21c-2-2 2-3.500 0-6s2-4 0-6M18 21c-2-2 2-3.500 0-6s2-4 0-6"/>',
  flower: '<circle cx="12" cy="12" r="2.500"/><path d="M12 9.500C10.500 7 10.500 4 12 3c1.500 1 1.500 4 0 6.500zM14.500 12c2.500-1.500 5.500-1.500 6.500 0-1 1.500-4 1.500-6.500 0zM12 14.500c1.500 2.500 1.500 5.500 0 6.500-1.500-1-1.500-4 0-6.500zM9.500 12C7 13.500 4 13.500 3 12c1-1.500 4-1.500 6.500 0z"/>',
  spice: '<path d="M12 3v18M12 7l-4-3M12 7l4-3M12 12l-5-3M12 12l5-3M12 17l-4-3M12 17l4-3"/>',
  amber: '<path d="M12 3l7 6-7 12L5 9z"/><path d="M5 9h14M9.500 9L12 21M14.500 9L12 21M9.500 9L12 3l2.500 6"/>',
  musk: '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/><path d="M9.500 15a2.500 2.500 0 0 0 2.500 2.500"/>',
  wave: '<path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0"/>',
  sweet: '<circle cx="12.0" cy="7.4" r="3.2"/><circle cx="16.4" cy="10.6" r="3.2"/><circle cx="14.7" cy="15.7" r="3.2"/><circle cx="9.3" cy="15.7" r="3.2"/><circle cx="7.6" cy="10.6" r="3.2"/><circle cx="12" cy="12" r="1.2"/>',
};
const NOTE = { "Limão":"citrus", "Laranja":"citrus", "Bergamota":"citrus", "Toranja":"citrus", "Abacaxi":"pineapple", "Groselha preta":"berry", "Frutas vermelhas":"berry", "Maçã":"apple",
  "Almíscar":"musk", "Ambargris":"amber", "Âmbar":"amber", "Patchouli":"leaf", "Lavanda":"flower", "Rosa":"flower", "Jasmim":"flower",
  "Madeira":"wood", "Cedro":"wood", "Sândalo":"wood", "Oud":"wood", "Vetiver":"wood", "Defumado":"smoke", "Incenso":"smoke", "Couro":"smoke",
  "Baunilha":"sweet", "Caramelo":"sweet", "Canela":"spice", "Cardamomo":"spice", "Pimenta":"spice",
  "Tangerina":"citrus", "Tangerina verde":"citrus", "Toranja rosa":"citrus", "Laranja sanguínea":"citrus", "Laranja-sanguínea":"citrus", "Limão siciliano":"citrus", "Manga":"pineapple", "Maracujá":"pineapple", "Morango":"berry", "Lichia":"berry", "Champanhe rosé":"berry", "Pera":"apple", "Maçã verde":"apple", "Ruibarbo":"apple", "Musgo de carvalho":"leaf", "Hortelã":"leaf", "Sálvia esclareia":"leaf", "Zimbro":"leaf", "Figueira":"leaf", "Cisto":"leaf", "Flor de laranjeira":"flower", "Flor de gengibre":"flower", "Gardênia":"flower", "Lírio-do-vale":"flower", "Magnólia":"flower", "Neroli":"flower", "Peônia":"flower", "Ylang-ylang":"flower", "Íris":"flower", "Violeta":"flower", "Açafrão":"spice", "Anis-estrela":"spice", "Gengibre":"spice", "Noz-moscada":"spice", "Pimenta rosa":"spice", "Akigalawood":"wood", "Cashmeran":"wood", "Madeira Queenwood":"wood", "Madeira de guaiaco":"wood", "Benjoim":"amber", "Âmbar amadeirado":"amber", "Âmbar cinzento":"amber", "Âmbar-gris":"amber", "Madeira âmbar":"amber", "Madeira Âmbar":"amber", "Almíscar branco":"musk", "Olíbano":"smoke", "Alcaçuz":"sweet", "Amêndoa":"sweet", "Baunilha negra":"sweet", "Cacau":"sweet", "Café":"sweet", "Fava tonka":"sweet", "Pralinê":"sweet", "Tonka":"sweet", "Notas marinhas":"wave" };
const noteIcon = (n) => `<svg viewBox="0 0 24 24" aria-hidden="true">${NI[NOTE[n] || "leaf"]}</svg>`;

/* ícone da família olfativa (tag do produto): pela primeira palavra */
const FAMILY = { "Amadeirado": "wood", "Aromático": "leaf", "Ambarado": "amber", "Floral": "flower", "Cítrico": "citrus", "Frutado": "apple", "Oriental": "spice", "Gourmand": "sweet", "Chypre": "leaf", "Aquático": "musk" };
const famIcon = (f) => `<svg class="fi" viewBox="0 0 24 24" aria-hidden="true">${NI[FAMILY[f.split(" ")[0]] || "leaf"]}</svg>`;

const sizesHtml = (p) => p.sizes.length === 1
  ? `<span class="size-one">${p.sizes[0].label}</span>`
  : `<div class="sizes">${p.sizes.map((s, i) => `<button type="button" class="size${i === picked[p.id] ? " on" : ""}" data-size="${i}">${s.label}</button>`).join("")}</div>`;
/* mais vendidos: 7 masculinos e 7 femininos, nesta ordem (carrossel) */
const BEST = {
  masculino: ["club-de-nuit-intense-man", "asad-elixir", "fakhar-black", "hawas", "acqua-di-gio", "bleu-de-chanel", "y"],
  feminino: ["khamrah", "yara-elixir", "sabah-al-ward", "club-de-nuit-woman", "la-vie-est-belle", "good-girl", "libre"],
};
const SECTIONS = {
  catalogo: () => false,
  masculino: (p) => p.gender === "masculino",
  feminino: (p) => p.gender === "feminino",
};
const EMPTY = { catalogo: "Novos perfumes chegando em breve.", masculino: "Novos perfumes masculinos chegando em breve.", feminino: "Perfumes femininos chegando em breve." };
const FIRST = 4; // cada seção abre com 4
const stepFor = (cat) => (cat === "all" ? 8 : 6); // "Ver mais": 8 por vez em Todos, 6 nos filtros Árabe/Importado
function renderGrid(sec, cat, shown = FIRST) {
  sec.dataset.cat = cat;
  sec.dataset.shown = shown;
  const all = PRODUCTS.filter((p) => SECTIONS[sec.id](p) && (cat === "all" || p.cat === cat));
  const items = all.slice(0, shown);
  let more = sec.querySelector(".more-btn");
  if (!more) {
    more = document.createElement("button");
    more.type = "button";
    more.className = "btn more-btn";
    more.textContent = "Ver mais";
    sec.querySelector(".grid").after(more);
  }
  more.hidden = all.length <= shown;
  const empty = sec.querySelector(".empty-cat");
  empty.hidden = items.length > 0;
  empty.textContent = cat === "importado" ? "Novos importados chegando em breve." : EMPTY[sec.id];
  sec.querySelector(".grid").innerHTML = items.map((p) => `
  <article class="card has-detail" data-id="${p.id}">
    <div class="card-img">
      ${p.img.map((f) => `<img src="img/perfumes/${f}" alt="${p.name}" loading="lazy">`).join("")}
    </div>
    <div class="card-body">
      <div class="card-top"><span class="brand">${p.brand}</span><span class="badge">${famIcon(p.fam)}${p.fam}</span></div>
      <h3>${p.name}</h3>
      ${sizesHtml(p)}
      <div class="card-actions">
        <button type="button" class="btn buy">Comprar</button>
        <button type="button" class="btn add plus" aria-label="Adicionar à lista">+</button>
      </div>
    </div>
  </article>`).join("");
}
const cardHtml = (p) => `
  <article class="card has-detail" data-id="${p.id}">
    <div class="card-img">
      ${p.img.map((f) => `<img src="img/perfumes/${f}" alt="${p.name}" loading="lazy">`).join("")}
    </div>
    <div class="card-body">
      <div class="card-top"><span class="brand">${p.brand}</span><span class="badge">${famIcon(p.fam)}${p.fam}</span></div>
      <h3>${p.name}</h3>
      ${sizesHtml(p)}
      <div class="card-actions">
        <button type="button" class="btn buy">Comprar</button>
        <button type="button" class="btn add plus" aria-label="Adicionar à lista">+</button>
      </div>
    </div>
  </article>`;
/* carrossel dos mais vendidos */
(function () {
  const sec = $("catalogo"), grid = sec.querySelector(".carousel");
  const render = (cat) => {
    grid.innerHTML = BEST[cat].map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean).map(cardHtml).join("");
    grid.scrollTo({ left: 0 });
    update();
  };
  const step = () => { const c = grid.firstElementChild; return c ? c.getBoundingClientRect().width + parseFloat(getComputedStyle(grid).columnGap || 0) : 240; };
  const update = () => {
    sec.querySelector(".prev").disabled = grid.scrollLeft < 4;
    sec.querySelector(".next").disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4;
  };
  sec.querySelector(".prev").addEventListener("click", () => grid.scrollBy({ left: -step() * 2, behavior: "smooth" }));
  sec.querySelector(".next").addEventListener("click", () => grid.scrollBy({ left: step() * 2, behavior: "smooth" }));
  grid.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  sec.querySelector(".filters").addEventListener("click", (e) => {
    const f = e.target.closest(".filter");
    if (!f) return;
    sec.querySelectorAll(".filter").forEach((b) => b.classList.toggle("on", b === f));
    render(f.dataset.cat);
  });
  render("masculino");

  /* animação: avança sozinho; pausa ao tocar/passar o mouse e fora da tela */
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  let timer = null, visible = false, hold = false;
  const tick = () => {
    if (!visible || hold) return;
    const end = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 4;
    if (end) grid.scrollTo({ left: 0, behavior: "smooth" });
    else grid.scrollBy({ left: step(), behavior: "smooth" });
  };
  const start = () => { clearInterval(timer); timer = setInterval(tick, 3500); };
  const pause = (v) => { hold = v; if (!v) start(); };
  const car = sec.querySelector(".car");
  car.addEventListener("pointerenter", () => pause(true));
  car.addEventListener("pointerleave", () => pause(false));
  car.addEventListener("touchstart", () => pause(true), { passive: true });
  car.addEventListener("touchend", () => setTimeout(() => pause(false), 4000), { passive: true });
  car.addEventListener("focusin", () => pause(true));
  car.addEventListener("focusout", () => pause(false));
  sec.querySelector(".filters").addEventListener("click", start);
  if ("IntersectionObserver" in window) new IntersectionObserver((en) => { visible = en[0].isIntersecting; }, { threshold: 0.3 }).observe(car);
  else visible = true;
  start();
})();
document.querySelectorAll("section.catalog:not(#catalogo)").forEach((sec) => {
  renderGrid(sec, "all");
  sec.addEventListener("click", (e) => {
    if (!e.target.closest(".more-btn")) return;
    renderGrid(sec, sec.dataset.cat, +sec.dataset.shown + stepFor(sec.dataset.cat));
  });
  sec.querySelector(".filters").addEventListener("click", (e) => {
    const f = e.target.closest(".filter");
    if (!f) return;
    sec.querySelectorAll(".filter").forEach((b) => b.classList.toggle("on", b === f));
    renderGrid(sec, f.dataset.cat);
  });
});

/* ---------- produto em destaque ---------- */
const FEATURED = "club-de-nuit-intense-man";
(function () {
  const p = PRODUCTS.find((x) => x.id === FEATURED);
  if (!p || !p.notes) return;
  const col = (title, arr) => `<div><h4>${title}</h4><ul>${arr.map((n) => `<li>${noteIcon(n)}${n}</li>`).join("")}</ul></div>`;
  $("feature").innerHTML = `
  <article class="card feat" data-id="${p.id}">
    <img class="feat-img" src="img/perfumes/produto-destaque.jpg" alt="${p.name}" loading="lazy">
    <div class="feat-body">
      <span class="badge">${famIcon(p.fam)}${p.fam}</span>
      <span class="brand">${p.brand}</span>
      <h3>${p.name}</h3>
      ${sizesHtml(p)}
      <p class="feat-desc">${p.desc}</p>
      <div class="notes">${col("Notas de topo", p.notes.top)}${col("Notas de fundo", p.notes.base)}</div>
      <div class="card-actions">
        <button type="button" class="btn buy">Comprar</button>
        <button type="button" class="btn add plus" aria-label="Adicionar à lista">+</button>
      </div>
    </div>
  </article>`;
})();

function addToList(p) {
  const size = p.sizes[picked[p.id]];
  const key = `${p.id}|${size.msg}`;
  const found = list.find((i) => i.key === key);
  if (found) found.qty++;
  else list.push({ key, name: p.name, size: size.msg, qty: 1 });
  save(); renderList();
}

/* ---------- pop-up de detalhes (só para perfumes com "notes") ---------- */
const noteCol = (title, arr) => `<div><h4>${title}</h4><ul>${arr.map((n) => `<li>${noteIcon(n)}${n}</li>`).join("")}</ul></div>`;
function openModal(p) {
  $("modalBody").innerHTML = `
    <div class="md">
      <div class="md-gallery" data-i="0">
        <div class="md-thumbs">
          ${p.img.length > 1 ? `<button type="button" class="md-arrow" data-dir="-1" aria-label="Foto anterior"><svg viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"/></svg></button>` : ""}
          ${p.img.map((f, i) => `<button type="button" class="md-thumb${i === 0 ? " on" : ""}" data-i="${i}" aria-label="Foto ${i + 1}"><img src="img/perfumes/${f}" alt=""></button>`).join("")}
          ${p.img.length > 1 ? `<button type="button" class="md-arrow" data-dir="1" aria-label="Próxima foto"><svg viewBox="0 0 24 24"><path d="M5 9l7 7 7-7"/></svg></button>` : ""}
        </div>
        <div class="md-stage">
          <img class="md-main" src="img/perfumes/${p.img[0]}" alt="${p.name}">
        </div>
      </div>
      <div class="md-info" data-id="${p.id}">
        <span class="brand">${p.brand}</span>
        <h3 id="modalTitle">${p.name}</h3>
        <span class="badge">${famIcon(p.fam)}${p.fam}</span>
        <p class="md-desc">${p.desc}</p>
        ${p.notes ? `<div class="notes">${noteCol("Notas de topo", p.notes.top)}${noteCol("Notas de fundo", p.notes.base)}</div>` : ""}
        ${sizesHtml(p)}
        <div class="card-actions">
          <button type="button" class="btn buy">Comprar</button>
          <button type="button" class="btn add plus" aria-label="Adicionar à lista">+</button>
        </div>
      </div>
    </div>`;
  $("modal").hidden = false;
  document.body.classList.add("lock");
  $("modal").querySelector(".modal-x").focus();
}
function closeModal() { $("modal").hidden = true; document.body.classList.remove("lock"); }
$("modal").addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) { closeModal(); return; }
  const nav = e.target.closest(".md-thumb, .md-arrow");
  if (nav) {
    const g = $("modal").querySelector(".md-gallery");
    const imgs = PRODUCTS.find((x) => x.id === $("modal").querySelector(".md-info").dataset.id).img;
    const i = nav.dataset.dir ? (+g.dataset.i + +nav.dataset.dir + imgs.length) % imgs.length : +nav.dataset.i;
    g.dataset.i = i;
    g.querySelector(".md-main").src = "img/perfumes/" + imgs[i];
    g.querySelectorAll(".md-thumb").forEach((b, k) => b.classList.toggle("on", k === i));
    return;
  }
  const info = e.target.closest(".md-info");
  if (!info) return;
  const p = PRODUCTS.find((x) => x.id === info.dataset.id);
  const sb = e.target.closest(".size");
  if (sb) {
    picked[p.id] = +sb.dataset.size;
    info.querySelectorAll(".size").forEach((b) => b.classList.toggle("on", b === sb));
    return;
  }
  if (e.target.closest(".buy")) { addToList(p); closeModal(); toggle(true); return; }
  const add = e.target.closest(".add");
  if (add) { addToList(p); add.textContent = "✓"; setTimeout(() => { add.textContent = "+"; }, 1200); }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("modal").hidden) closeModal(); });
// zoom leve na foto do pop-up: acompanha o ponteiro
$("modal").addEventListener("pointermove", (e) => {
  const st = e.target.closest(".md-stage");
  if (!st) return;
  const r = st.getBoundingClientRect(), img = st.querySelector(".md-main");
  img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
});

const onCardClick = (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const p = PRODUCTS.find((x) => x.id === card.dataset.id);
  if (e.target.closest(".card-img, h3")) { openModal(p); return; }
  const sizeBtn = e.target.closest(".size");
  if (sizeBtn) {
    picked[p.id] = +sizeBtn.dataset.size;
    card.querySelectorAll(".size").forEach((b) => b.classList.toggle("on", b === sizeBtn));
    return;
  }
  if (e.target.closest(".buy")) { addToList(p); toggle(true); return; }
  const add = e.target.closest(".add");
  if (add) {
    addToList(p);
    add.textContent = "✓";
    setTimeout(() => { add.textContent = "+"; }, 1200);
  }
};
document.querySelectorAll("section.catalog .grid").forEach((g) => g.addEventListener("click", onCardClick));
$("feature").addEventListener("click", onCardClick);

/* ---------- lista / WhatsApp ---------- */
function renderList() {
  const total = list.reduce((n, i) => n + i.qty, 0);
  $("count").textContent = total;
  $("drawer").classList.toggle("has", list.length > 0);
  $("listItems").innerHTML = list.map((i) => `
    <li data-key="${i.key}">
      <div><strong>${i.name}</strong><small>${i.size}</small></div>
      <div class="qty">
        <button type="button" data-act="minus" aria-label="Diminuir">−</button>
        <span>${i.qty}</span>
        <button type="button" data-act="plus" aria-label="Aumentar">+</button>
      </div>
    </li>`).join("");
  const lines = list.map((i) => `${i.qty}x ${i.name} – ${i.size}`).join("\n");
  $("sendList").href = wa(`Olá, Attos Imports! Gostaria de consultar o valor destes perfumes:\n${lines}`);
}

$("listItems").addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const key = b.closest("li").dataset.key;
  const item = list.find((i) => i.key === key);
  item.qty += b.dataset.act === "plus" ? 1 : -1;
  if (item.qty <= 0) list = list.filter((i) => i !== item);
  save(); renderList();
});
$("clearList").addEventListener("click", () => { list = []; save(); renderList(); });

const toggle = (open) => {
  $("drawer").classList.toggle("open", open);
  $("drawer").setAttribute("aria-hidden", String(!open));
  $("overlay").hidden = !open;
  document.body.classList.toggle("lock", open);
};
$("openList").addEventListener("click", () => toggle(true));
$("closeList").addEventListener("click", () => toggle(false));
$("overlay").addEventListener("click", () => toggle(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });

/* ---------- geral ---------- */
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = wa(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});
$("year").textContent = new Date().getFullYear();
renderList();


/* ---------- depoimentos: faixa que corre sozinha (modelo Livia) ---------- */
(function () {
  const root = $("tCarousel");
  if (!root) return;
  const vp = root.querySelector(".t-viewport");
  const originals = [...vp.children];
  originals.forEach((c) => { const k = c.cloneNode(true); k.setAttribute("aria-hidden", "true"); vp.appendChild(k); });
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const SPEED = 36; // px por segundo
  let pos = 0, last = 0, paused = false, timer;
  const loopW = () => originals.length * (originals[0].offsetWidth + (parseFloat(getComputedStyle(vp).columnGap) || 0));
  function tick(now) {
    const dt = Math.min(now - last, 64) / 1000; last = now;
    if (!paused) { pos += SPEED * dt; const w = loopW(); if (pos >= w) pos -= w; vp.scrollLeft = pos; }
    requestAnimationFrame(tick);
  }
  const hold = () => { paused = true; clearTimeout(timer); };
  const release = (d) => { clearTimeout(timer); timer = setTimeout(() => { pos = vp.scrollLeft; paused = false; }, d); };
  vp.addEventListener("mouseenter", hold);
  vp.addEventListener("mouseleave", () => release(0));
  vp.addEventListener("touchstart", hold, { passive: true });
  vp.addEventListener("touchend", () => release(1800), { passive: true });
  vp.addEventListener("focusin", hold);
  vp.addEventListener("focusout", () => release(0));
  requestAnimationFrame((n) => { last = n; tick(n); });
})();


/* ---------- vídeos do Instagram: carrossel coverflow (modelo Glassy Carousel) ---------- */
/* Cada item: title, subtitle, video (arquivo .mp4 em img/videos), image (capa) e href (link no Instagram) */
const REELS = [
  { id: "v1", title: "Atendimento", subtitle: "Atendimento na loja", video: "img/videos/1.mp4", image: "img/videos/capa%201.jpg", href: "https://instagram.com/lojaattos" },
  { id: "v2", title: "Novidade sem álcool", subtitle: "Fixação extrema", video: "img/videos/2.mp4", image: "img/videos/capa%202.jpg", href: "https://instagram.com/lojaattos" },
  { id: "v3", title: "Mais aguardado de 2026", subtitle: "Perfume árabe", video: "img/videos/3.mp4", image: "img/videos/capa%203.jpg", href: "https://instagram.com/lojaattos" },
  { id: "v4", title: "2 novidades incríveis", subtitle: "Lançamentos Attos", video: "img/videos/4.mp4", image: "img/videos/capa%204.jpg", href: "https://instagram.com/lojaattos" },
  { id: "v5", title: "Perfumes masculinos", subtitle: "Nossa seleção", video: "img/videos/5.mp4", image: "img/videos/capa%205.jpg", href: "https://instagram.com/lojaattos" },
];
(function () {
  const root = $("gc"), stage = $("gcStage");
  if (!root || !REELS.length) return;
  const n = REELS.length, INTERVAL = 5000;
  const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
  let index = 0, drag = 0, dragging = false, playing = !reduced, hovered = false, focused = false, visible = false, timer = null, dlgOpen = false;
  let cardW = 240, step = 190;
  const wrap = (v) => ((v % n) + n) % n;
  const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>';

  stage.innerHTML = REELS.map((r, i) => `
    <button type="button" class="gc-card" data-i="${i}" aria-label="${r.title}">
      <span class="gc-poster">${r.image ? `<img src="${r.image}" alt="" draggable="false" loading="lazy">` : `<span class="gc-ph">${PLAY}</span>`}
        <span class="gc-shade" aria-hidden="true"></span>
        <span class="gc-watch" aria-hidden="true">${PLAY} Assistir</span>
      </span>
    </button>`).join("");
  const cards = [...stage.children];

  function measure() {
    const w = stage.clientWidth, hgt = stage.clientHeight;
    cardW = Math.max(120, Math.min(250, w * 0.56, (hgt - 24) * 9 / 16));
    step = cardW * 0.78;
    root.style.setProperty("--gc-w", cardW + "px");
  }
  function place() {
    cards.forEach((c, i) => {
      let d = wrap(i - index);
      if (d > n / 2) d -= n;
      const off = d + drag, abs = Math.abs(off), hide = Math.abs(d) > 2;
      const jump = c.dataset.d !== undefined && Math.abs(d - +c.dataset.d) > 2;
      if (jump) c.style.transition = "none";
      c.style.transform = `translate3d(${off * step}px,0,${-Math.min(abs, 3) * 130}px) rotateY(${-Math.max(-42, Math.min(42, off * 30))}deg) scale(${1 - Math.min(abs, 3) * 0.08})`;
      c.style.opacity = hide ? 0 : 1;
      c.style.zIndex = 10 - Math.abs(d);
      c.style.pointerEvents = hide ? "none" : "";
      c.style.setProperty("--gc-shade", Math.min(abs, 2) * 0.19);
      c.tabIndex = d === 0 ? 0 : -1;
      c.toggleAttribute("data-active", d === 0);
      c.setAttribute("aria-hidden", hide ? "true" : "false");
      c.dataset.d = d;
      if (jump) { void c.offsetWidth; c.style.transition = ""; }
    });
    const r = REELS[index];
    $("gcTitle").textContent = r.title;
    $("gcSub").textContent = r.subtitle;
    $("gcCur").textContent = String(index + 1).padStart(2, "0");
    $("gcTot").textContent = String(n).padStart(2, "0");
  }
  const go = (i) => { index = wrap(i); drag = 0; place(); schedule(); };

  /* autoplay */
  function schedule() {
    clearTimeout(timer);
    if (!playing || reduced || n < 2 || hovered || focused || dragging || dlgOpen || !visible || document.hidden) return;
    timer = setTimeout(() => go(index + 1), INTERVAL);
  }
  const setPlaying = (v) => {
    playing = v;
    const b = $("gcPlay");
    b.setAttribute("aria-pressed", v);
    b.setAttribute("aria-label", v ? "Pausar" : "Reproduzir");
    b.classList.toggle("paused", !v);
    schedule();
  };
  $("gcPlay").addEventListener("click", () => setPlaying(!playing));
  $("gcPlay").disabled = reduced || n < 2;
  $("gcPrev").addEventListener("click", () => go(index - 1));
  $("gcNext").addEventListener("click", () => go(index + 1));
  if (n < 2) { $("gcPrev").disabled = $("gcNext").disabled = true; }
  $("gcPlay").classList.toggle("paused", !playing);
  document.addEventListener("visibilitychange", schedule);
  stage.addEventListener("mouseenter", () => { hovered = true; schedule(); });
  stage.addEventListener("mouseleave", () => { hovered = false; schedule(); });
  stage.addEventListener("focusin", () => { focused = true; schedule(); });
  stage.addEventListener("focusout", (e) => { if (!stage.contains(e.relatedTarget)) { focused = false; schedule(); } });
  if ("IntersectionObserver" in window) new IntersectionObserver((en) => { visible = en[0].isIntersecting; schedule(); }, { threshold: 0.25 }).observe(root);
  else visible = true;

  /* arrastar (swipe) */
  let g = null, suppress = 0;
  stage.addEventListener("pointerdown", (e) => {
    if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) return;
    g = { x: e.clientX, y: e.clientY, t: performance.now(), h: false };
  });
  stage.addEventListener("pointermove", (e) => {
    if (!g) return;
    const dx = e.clientX - g.x, dy = e.clientY - g.y;
    if (!g.h && Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) { g = null; return; }
    if (!g.h && Math.abs(dx) > 8) { g.h = true; dragging = true; stage.setPointerCapture(e.pointerId); stage.dataset.dragging = ""; clearTimeout(timer); }
    if (g.h) { drag = Math.max(-1.2, Math.min(1.2, dx / step)); place(); }
  });
  const end = (e, cancel) => {
    const s = g; g = null;
    if (s && s.h) {
      const dx = e.clientX - s.x, v = Math.abs(dx) / Math.max(1, performance.now() - s.t);
      suppress = performance.now() + 300;
      drag = 0;
      if (!cancel && (Math.abs(dx) > Math.min(55, cardW * 0.18) || (Math.abs(dx) > 14 && v > 0.35))) index = wrap(index + (dx < 0 ? 1 : -1));
    }
    dragging = false; delete stage.dataset.dragging;
    place(); schedule();
    if (stage.hasPointerCapture && stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
  };
  stage.addEventListener("pointerup", (e) => end(e, false));
  stage.addEventListener("pointercancel", (e) => end(e, true));

  /* teclado */
  root.addEventListener("keydown", (e) => {
    if (dlgOpen || e.altKey || e.ctrlKey || e.metaKey) return;
    const k = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: n - 1 }[e.key];
    if (k === undefined) return;
    e.preventDefault();
    const onCard = e.target.closest && e.target.closest(".gc-card");
    go(k);
    if (onCard) cards[index].focus({ preventScroll: true });
  });

  /* pop-up: abre o vídeo do Instagram sob demanda */
  const dlg = $("gcDialog");
  const embedUrl = (u) => { const m = /instagram\.com\/(reel|reels|p|tv)\/([\w-]+)/.exec(u || ""); return m ? `https://www.instagram.com/${m[1] === "reels" ? "reel" : m[1]}/${m[2]}/embed` : ""; };
  function openDlg(r) {
    const emb = embedUrl(r.href);
    $("gcDlgTitle").textContent = r.title;
    const media = r.video
      ? `<video src="${r.video}" poster="${r.image || ""}" controls autoplay playsinline preload="auto"></video>`
      : emb ? `<iframe src="${emb}" title="${r.title}" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`
      : (r.image ? `<img src="${r.image}" alt="${r.title}">` : `<p class="gc-dlg-empty">Assista este vídeo no Instagram.</p>`);
    $("gcDlgBody").innerHTML = media + `<a class="btn gc-ext" href="${r.href}" target="_blank" rel="noopener">Ver no Instagram</a>`;
    dlgOpen = true; clearTimeout(timer);
    dlg.showModal();
  }
  const closeDlg = () => { if (dlg.open) dlg.close(); };
  dlg.addEventListener("close", () => { dlgOpen = false; $("gcDlgBody").innerHTML = ""; schedule(); });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeDlg(); });
  $("gcDlgClose").addEventListener("click", closeDlg);

  stage.addEventListener("click", (e) => {
    const c = e.target.closest(".gc-card");
    if (!c || performance.now() < suppress) return;
    const i = +c.dataset.i;
    if (i === index) openDlg(REELS[i]); else go(i);
  });

  new ResizeObserver(() => { measure(); place(); }).observe(stage);
  measure(); place(); schedule();
})();


/* ---------- encomenda: formulário que abre o WhatsApp ---------- */
(function () {
  const f = $("orderForm");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = (n) => f.elements[n].value.trim();
    const nome = v("nome"), produto = v("produto"), tamanho = v("tamanho"), msg = v("mensagem");
    $("orderErr").hidden = !!(nome && produto);
    if (!nome || !produto) { (nome ? f.elements.produto : f.elements.nome).focus(); return; }
    const text = ["Olá, Attos Imports! Gostaria de consultar um produto:",
      `Perfume: ${produto}`,
      tamanho && `Tamanho: ${tamanho}`,
      msg && `Observações: ${msg}`,
      `Meu nome: ${nome}`].filter(Boolean).join(String.fromCharCode(10));
    window.open(wa(text), "_blank", "noopener");
  });
  f.addEventListener("input", () => { if (f.elements.nome.value.trim() && f.elements.produto.value.trim()) $("orderErr").hidden = true; });
})();


/* ---------- hero -> próxima seção: progresso da rolagem + vídeo pausa quando coberto ---------- */
(function () {
  const hero = $("hero");
  if (!hero || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const video = hero.querySelector("video");
  let ticking = false, paused = false;
  const update = () => {
    ticking = false;
    const p = Math.min(1, Math.max(0, scrollY / Math.max(1, innerHeight * 0.9)));
    hero.style.setProperty("--hp", p.toFixed(3));
    if (video) {
      if (p >= 1 && !paused) { video.pause(); paused = true; }
      else if (p < 1 && paused) { paused = false; const r = video.play(); if (r && r.catch) r.catch(() => {}); }
    }
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();

/* ---------- entrada em sequência das seções ---------- */
(function () {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches || !("IntersectionObserver" in window)) return;
  const sel = [".brands", ".cat-head", "#catalogo .car", "#catalogo .feature", ".testimonials .section-head", ".t-carousel", ".reels .section-head", ".steps .section-head", ".steps li", ".faq .section-head", ".faq details", ".order .oc", ".ft-brand", ".ft-sections>div", ".ft-bottom"];
  const els = [...document.querySelectorAll(sel.join(","))];
  els.forEach((el) => {
    el.classList.add("rv");
    const sib = [...el.parentElement.children].filter((c) => c.matches("li,details"));
    const i = sib.indexOf(el);
    if (i > 0) el.style.setProperty("--rd", i * 0.09 + "s");
  });
  document.documentElement.classList.add("rv-on");
  const io = new IntersectionObserver((en) => {
    en.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach((el) => io.observe(el));
  /* grades de produtos: os cards entram em sequência (também ao filtrar / "Ver mais") */
  document.querySelectorAll("section.catalog:not(#catalogo) .grid").forEach((g) => io.observe(g));
})();


/* ---------- FAQ: só uma pergunta aberta por vez ---------- */
(function () {
  const items = [...document.querySelectorAll(".faq details")];
  items.forEach((d) => d.addEventListener("toggle", () => {
    if (d.open) items.forEach((o) => { if (o !== d) o.open = false; });
  }));
})();

/* ---------- menu (modelo Livia) ---------- */
(function () {
  const header = $("menu"), burger = header.querySelector(".menu-burger");
  const links = [...header.querySelectorAll(".menu-nav a")];
  const onScroll = () => header.classList.toggle("solid", scrollY > 4);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    header.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  burger.addEventListener("click", () => setMenu(!header.classList.contains("open")));
  header.querySelectorAll(".menu-panel a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", (e) => { if (header.classList.contains("open") && !header.contains(e.target)) setMenu(false); });
  addEventListener("resize", () => { if (matchMedia("(min-width:1024px)").matches) setMenu(false); });

  const sections = links.map((l) => ({ l, el: $(l.dataset.section) })).filter((s) => s.el);
  if (sections.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const m = sections.find((s) => s.el === en.target);
        if (m) links.forEach((l) => l.classList.toggle("is-active", l === m.l));
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    sections.forEach((s) => spy.observe(s.el));
  }
})();

/* ---------- botões: preenchimento que nasce do ponto de entrada ---------- */
(function () {
  const setOrigin = (btn, x, y) => {
    const r = btn.getBoundingClientRect();
    const d = Math.ceil(2 * Math.max(Math.hypot(x, y), Math.hypot(r.width - x, y), Math.hypot(x, r.height - y), Math.hypot(r.width - x, r.height - y)));
    btn.style.setProperty("--ox", x + "px");
    btn.style.setProperty("--oy", y + "px");
    btn.style.setProperty("--d", d + "px");
  };
  const fromPointer = (btn, e) => { const r = btn.getBoundingClientRect(); setOrigin(btn, e.clientX - r.left, e.clientY - r.top); };
  const fromCenter = (btn) => { const r = btn.getBoundingClientRect(); setOrigin(btn, r.width / 2, r.height / 2); };

  document.addEventListener("pointerover", (e) => {
    const b = e.target.closest(".btn");
    if (!b || b.contains(e.relatedTarget)) return;
    fromPointer(b, e); b.classList.add("fill");
  });
  document.addEventListener("pointerout", (e) => {
    const b = e.target.closest(".btn");
    if (!b || b.contains(e.relatedTarget)) return;
    b.classList.remove("fill");
  });
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(".btn");
    if (b) { fromPointer(b, e); b.classList.add("fill"); }
  });
  document.addEventListener("focusin", (e) => {
    const b = e.target.closest && e.target.closest(".btn");
    if (b && b.matches(":focus-visible")) { fromCenter(b); b.classList.add("fill"); }
  });
  document.addEventListener("focusout", (e) => {
    const b = e.target.closest && e.target.closest(".btn");
    if (b) b.classList.remove("fill");
  });
})();
