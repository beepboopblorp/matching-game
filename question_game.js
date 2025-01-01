let questiontype

//note: once form/content/function/context is added, might need to change the order of artist, input the defaults, etc. verifying artist existence with boolean
class info {
    constructor(artnum = "", name = "", date = "", material = "", form = "", artist = "", content = "content", art_function = "function", context = "context") {
        this.name = name;
        this.date = date;
        this.material = material;
        this.artist = artist;
        this.form = form;
        this.content = content;
        this.function = art_function;
        this.context = context;
        this.artnum = artnum;
    }
}

let art = [
    new info(1, "Apollo 11 Stones", "25,500 to 25,300 B.C.E.", "charcoal on stone", '<img title="Apollo 11 Stones" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/apollo-11-stone-870x671.jpg">'),
    new info(2, "Great Hall of the Bulls", "15,000 to 13,000 B.C.E.", "pigment on rock", '<img title="Great Hall of the Bulls" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/09/lascuax-II-narrow-870x653.jpg">'), 
    new info(3, "Camelid Sacrum in the Shape of a Canine", "14,000 to 7,000 B.C.E.", "bone", '<img title="Camelid Sacrum in the Shape of a Canine" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/c67e5c0fd3c098aee5a76bc76db05739.jpg">'), 
    new info(4, "Running Horned Woman", "6,000 to 4,000 B.C.E.", "pigment on rock", '<img title="Running Horned Woman" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-content-images/c17c2209e3db5da80274d200a3b8d08d4fbe5dd8.jpg">'), 
    new info(5, "Beaker with Ibex Motifs", "4,200 to 3,500 B.C.E.", "painted terra cotta", '<img title="Beaker with Ibex Motifs" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/07/12906002764_4ecca85fcc_o-870x495.jpg">'), 
    new info(6, "Anthropomorphic Stele", "4,000 to 3,001 B.C.E.", "sandstone", '<img title="Anthropomorphic Stele" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/09/anthro-stele-1000px-870x1305.jpeg">'), 
    new info(7, "Jade Cong", "3,000 to 2,200 B.C.E.", "carved jade", '<img title="Jade Cong" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/liangzhu41359579463247.jpg?w=982">'), 
    new info(8, "Stonehenge", "2,500 to 1,600 B.C.E.", "sandstone", '<img title="Stonehenge" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/09/Stonehenge_from_north_August_2010_cropped-870x289.jpeg">'), 
    new info(9, "The Ambum Stone", "1500 B.C.E.", "greywacke", '<img title="The Ambum Stone" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/09/ambumnga.jpg">'), 
    new info(10, "Tiatilco Female Figurine", "1200 to 900 B.C.E.", "ceramic", '<img title="Tiatilco Female Figurine" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/11/default-e1701372072437-300x640.jpg">'), 
    new info(11, "Terra Cotta Fragment", "1000 B.C.E.", "incised terra cotta", '<img title="Terra Cotta Fragment" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/12/lapitafragment-870x490.jpg">'),
    new info(12, "White Temple and its Ziggurat", "3,500 to 3,000 B.C.E.", "mud brick", '<img title="White Temple and its Ziggurat" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/ed02820b37d5a46767992fc210ac5680.jpg">'),
    new info(13, "Palette of King Narmer", "3,000 to 2,920 B.C.E.", "greywacke", '<img title="Palette of King Narmer" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/04/Narmer_Palette-870x613.jpeg">'), 
    new info(14, "Statue of Votive Figures", "2,700 B.C.E.", "gypsum inlaid with shell and black limestone", '<img title="Statue of Votive Figures" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://i0.wp.com/jisforjourney.com/wp-content/uploads/2016/10/sutori.com-votive-figures.png?fit=900%2C1293&ssl=1">'), 
    new info(15, "Seated Scribe", "2,620 to 2,500 B.C.E.", "painted limestone", '<img title="Seated Scribe" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://live.staticflickr.com/7555/15775012706_cd2d5ae7f0.jpg">'), 
    new info(16, "Standard of Ur", "2,600 to 2,400 B.C.E.", "wood inlaid with shell, lapis lazuli, and red limestone", '<img title="Standard of Ur" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://live.staticflickr.com/7083/7324379672_50795897a4_h.jpg">'), 
    new info(17, "Great Pyramids and Great Sphinx", "2,550 to 2,490 B.C.E.", "limestone", '<img title="Great Pyramids and Great Sphinx" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2020/11/Pyramids_of_the_Giza_Necropolis.jpg">'), 
    new info(18, "King Menkaure and Queen", "2,490 to 2,472 B.C.E.", "greywacke", '<img title="King Menkaure and Queen" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://live.staticflickr.com/7499/15179060794_7dc11a6d38_z.jpg">'), 
    new info(19, "The Code of Hammurabi", "1,792 to 1,750 B.C.E.", "basalt", '<img title="The Code of Hammurabi" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/06/0000230553_OG-300x466.jpg">'), 
    new info(20, "Temple of Amun-Re and Hypostyle Hall", "1550 and 1250 B.C.E.", "sandstone and mud brick", '<img title="Temple of Amun-Re and Hypostyle Hall" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://www.memphis.edu/hypostyle/images/about_reliefs/arial_hypostyle1.jpg">'), 
    new info(21, "Mortuary Temple of Hatshepsut", "1,473 to 1,458 B.C.E.", "sandstone and red granite", '<img title="Mortuary Temple of Hatshepsut" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://www.ancient-origins.net/sites/default/files/field/image/Temple-of-Hatshepsut.jpg">'), 
    new info(22, "Akhenaton, Nefertiti, and Three Daughters", "1,353 to 1,335 B.C.E.", "limestone", '<img title="Akhenaton, Nefertiti, and Three Daughters" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/e8d867ceb60cb9cc0af0ed5b771b6529ad8e27a6.jpg">'),
    new info(23, "Tutankhamun's Tomb, Innermost Coffin", "1,323 B.C.E.", "gold with inlay of enamel and semiprecious stone", '<img title="Tutankhamuns Tomb, Innermost Coffin" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/09/e1b12329963bfb171eebccdb14209090.jpg?w=640">'), 
    new info(24, "Last Judgement of Hu-Nefer", "1,275 B.C.E.", "painted papyrus scroll", '<img title="Last Judgement of Hu-Nefer" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/HuneferFull-870x401.jpg">'), 
    new info(25, "Lamassu from the Citadel of Sargon II", "720-705 B.C.E.", "alabaster", '<img title="Lamassu from the Citadel of Sargon II" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/07/14581729882_1be6955e2e_k-870x560.jpg">'), 
    new info(26, "Athenian Agora", "600 B.C.E. to 150 C.E.", "plan", '<img title="Athenian Agora" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://i.pinimg.com/originals/f6/28/22/f62822d9537a05b3ffe7436fcf1078da.jpg">'), 
    new info(27, "Anavysos Kouros", "530 B.C.E.", "painted marble", '<img title="Anavysos Kouros" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Kouros_anavissos.jpg">'), 
    new info(28, "Peplos Kore", "530 B.C.E.", "painted marble", '<img title="Peplos Kore" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2024/01/peplos-kore_acropolis-photo-870x621.jpg">'), 
    new info(29, "Sarcophagus of the Spouses", "520 B.C.E.", "terra cotta", '<img title="Sarcophagus of the Spouses" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/06/15623415937_f9b495b9a7_o-870x602.jpg">'),
    new info(30, "Audience Hall (Apadana) of Darius and Xerxes", "520 to 465 B.C.E.", "limestone", '<img title="Audience Hall (Apadana) of Darius and Xerxes" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://toursofiran.com/wp-content/uploads/2024/08/Apadana-palace-2.webp">'), 
    new info(31, "Temple of Minerva and Sculpture of Apollo", "510 to 500 B.C.E.", "wood, mud brick, and tufa with terra cotta sculpture", '<img title="Temple of Minerva and Sculpture of Apollo" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/101360510302272.jpg?w=1200">'), 
    new info(32, "Tomb of the Triclinium", "480 to 470 B.C.E.", "tufa and fresco", '<img title="Tomb of the Triclinium" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/tmp1027784400357556225.png">'),
    new info(33, "Niobides Krater", "460 to 450 B.C.E.", "clay with red-figure technique and white highlights", '<img title="Niobides Krater" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://i0.wp.com/jisforjourney.com/wp-content/uploads/2020/03/Niobid-Krater-apollo-artemis-scaled.jpg?resize=825%2C1100&ssl=1">', "Niobid Painter"), 
    new info(34, "Doryphoros (Spear Bearer)", "450 to 440 B.C.E.", "marble", '<img title="Doryphoros (Spear Bearer)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://alchetron.com/cdn/doryphoros-01fa64f9-cd0f-4878-aa88-726ba159fd9-resize-750.jpeg">', "Polykleitos"), 
    new info(35, "Acropolis", "447 to 410 B.C.E.", "marble", '<img title="Acropolis" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2020/08/Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_14220794964-870x502.jpg">', "Iktinos and Kallikrates"), 
    new info(36, "Grave Stele of Hegeso", "410 B.C.E.", "marble and paint", '<img title="Grave Stele of Hegeso" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://www.brown.edu/Departments/Joukowsky_Institute/courses/greekpast/files/3120062.jpg">', "Kallimachos"), 
    new info(37, "Winged Victory of Samothrace", "190 B.C.E.", "marble", '<img title="Winged Victory of Samothrace" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/08/5604386389_80952d8483_o-870x1160.jpg">'), 
    new info(38, "Great Altar of Zeus and Athena at Pergamon", "175 B.C.E.", "marble", '<img title="Great Altar of Zeus and Athena at Pergamon" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/03/athena-pergamon-scaled.jpg">'),
    new info(39, "House of the Vettii", "62 to 79 C.E.", "cut stone and fresco", '<img title="House of the Vettii" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/2431217760_4f2827fb26_o-scaled.jpg">'), 
    new info(40, "Alexander Mosaic", "100 B.C.E.", "mosaic", '<img title="Alexander Mosaic" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/06/8215878366_65752dd884_o-1-scaled.jpg">'), 
    new info(41, "Seated Boxer", "100 B.C.E.", "ceramic", '<img title="Seated Boxer" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/P%C3%BAgil_en_rep%C3%B2s_%28s._IV_a.C.%29%2C_Museu_Nacional_Rom%C3%A0_%28Palau_Massimo%29%2C_Roma_%28Vista_general%29.jpg/240px-P%C3%BAgil_en_rep%C3%B2s_%28s._IV_a.C.%29%2C_Museu_Nacional_Rom%C3%A0_%28Palau_Massimo%29%2C_Roma_%28Vista_general%29.jpg">'), 
    new info(42, "Head of a Roman Patrician", "75 to 50 B.C.E.", "marble", '<img title="Head of a Roman Patrician" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/11/Topsm-1536x864.jpg">'),
    new info(43, "Augustus of Prima Porta", "1 to 100 C.E.", "marble", '<img title="Augustus of Prima Porta" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2020/10/primaporta-tall-870x1399.jpg">'), 
    new info(44, "Colosseum (Flavian Amphitheater)", "70 to 80 B.C.E.", "stone and concrete", '<img title="Colosseum (Flavian Amphitheater)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg">'), 
    new info(45, "Forum of Trajan", "106 to 113 C.E.", "brick, concrete, and marble", '<img title="Forum of Trajan" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://atouchofrome.com/images/forums/basilica-ulpia-interior-seen-from-ground-level.webp">', "Apollodorus of Damascus"), 
    new info(46, "Pantheon", "118 to 125 C.E.", "concrete with stone facing", '<img title="Pantheon" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/855bce838bc86e2a83219cc376cd954ace50755f.jpg">'), 
    new info(47, "Ludovisi Battle Sarcophagus", "250 C.E.", "marble", '<img title="Ludovisi Battle Sarcophagus" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/sc0354.jpg?w=1200">'),
    new info(48, "Catacomb of Priscilla", "200 to 400 C.E.", "excavated tufa and fresco", '<img title="Catacomb of Priscilla" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://www.wga.hu/art/zearly/1/2mural/3priscil/1greek1.jpg">'),
    new info(49, "Santa Sabina", "422 to 432 C.E.", "brick and stone, wooden roof", '<img title="Santa Sabina" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/01/16542925467_a0dd79c2c8_k-870x551.jpg">'),
    new info(50, "Vienna Genesis", "Early 6th Century C.E.", "pigment on vellum", '<img title="Vienna Genesis" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/aea9c0e400214ead03ffe8b1fcfea4054d3f9ba0.jpg">'), 
    new info(51, "San Vitale", "526 to 547 C.E.", "brick, marble, and stone veneer mosaic", '<img title="San Vitale" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/07/52188874888_5b1f2cab73_k-1536x1025.jpg">'),
    new info(52, "Hagia Sophia", "532 to 537 C.E.", "brick and ceramic elements with stone and mosaic veneer", '<img title="Hagia Sophia" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://i.pinimg.com/736x/fa/23/68/fa236821b8e6c02e63fcad6114002875.jpg">', "Anthemius of Tralles and Isidorus of Miletus"),
    new info(53, "Merovingian Looped Fibula", "Mid 6th Century C.E.", "Silver gilt worked in filigree, with inlays of garnets and other stones", '<img title="Merovingian Looped Fibula" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2018/07/fibulae-870x805.jpg">'), 
    new info(54, "Virgin and Child between Saints Theodore and George", "500 to 600 C.E.", "encaustic on wood", '<img title="Virgin and Child between Saints Theodore and George" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/12/53378290946_2e90ce6f1f_o-870x1214.jpg">'), 
    new info(55, "Lindisfarne Gospels", "700 C.E.", "ink, pigments, and gold on vellum", '<img title="Lindisfarne Gospels" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/10/carpetpage_big.jpg?w=640">'), 
    new info(56, "Great Mosque", "785 to 786 C.E.", "stone masonry", '<img title="Great Mosque" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2017/02/cordoba_desde_el_aire_cordoba_espancc83a-1.jpg">'), 
    new info(57, "Pyxis of al-Mughira", "968 C.E.", "ivory", '<img title="Pyxis of al-Mughira" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/PyxFront-870x1199.jpg">'), 
    new info(58, "Church of Sainte-Foy", "800 to 1130 C.E.", "stone, paint, gold, silver, gemstones, and enamel over wood", '<img title="Church of Sainte-Foy" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://aparthistorygo.wordpress.com/wp-content/uploads/2017/11/conques_jpg02.jpg?w=982">'), 
    new info(59, "Bayeux Tapestry", "1066 to 1080 C.E.", "embroidery on linen", '<img title="Bayeux Tapestry" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/Screen-Shot-2021-10-18-at-10.57.54-AM-870x401.png">'),
    new info(60, "Chartres Cathedral", "1550 and 1250 B.C.E.", "sandstone and mud brick", '<img title="Chartres Cathedral" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Chartres_1.jpg">'), 
    new info(61, "Bibles Moralisée of King Louis IX (Dedication Page from the Apocalypse)", "1226 to 1234 C.E.", "ink, tempera, and gold leaf on vellum", '<img title="Bibles Moralisée of King Louis IX (Dedication Page from the Apocalypse)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2024/04/53476192528_9b6d52dc7c_6k-870x1140.jpg">'), 
    new info(62, "Rottgen Pieta", "1300 to 1325 C.E.", "painted wood", '<img title="Rottgen Pieta" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/8297481802_090d1c9915_k-870x1310.jpg">'),
    new info(63, "Arena (Scrovegni) Chapel", "1,303 C.E.", "brick", '<img title="Arena (Scrovegni) Chapel" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2020/10/scrovegni-sm-870x693.jpg">', "Giotto di Bondone"), 
    new info(64, "Golden Haggadah", "1320 C.E.", "pigment on vellum", '<img title="Golden Haggadah" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2015/08/f60074-12.jpg">'), 
    new info(65, "Alhambra Palace", "1354 to 1391 C.E.", "whitewashed adobe stucco, wood, tile, paint, and gilding", '<img title="Alhambra Palace" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/915b6df06e779bfcf803e9462b57edc5661604ac.jpg">'), 
    new info(66, "Annunciation Triptych (Merode Altarpiece)", "1427 to 1432 C.E.", "oil on oak wood", '<img title="Annunciation Triptych (Merode Altarpiece)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/470304/977961/main-image">', "Robert Campin"), 
    new info(67, "Pazzi Chapel", "1429 to 1461 C.E.", "masonry", '<img title="Pazzi Chapel" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.britannica.com/75/145975-050-FCDB89C0/Pazzi-Chapel-Florence-Filippo-Brunelleschi.jpg">', "Filippo Brunelleschi"), 
    new info(68, "The Arnolfini Portrait", "530 B.C.E.", "painted marble", '<img title="The Arnolfini Portrait" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2018/09/ArnolfiniSm-870x1118.jpg">', "Jan van Eyck"),
    new info(69, "David", "1440 to 1460 C.E.", "bronze", '<img title="David" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/fbc9db5b0760fc2705e8c467307fd4be9e23a24c.jpg">', "Donatello"), 
    new info(70, "Palazzo Rucellai", "1450 C.E.", "stone, masonry", '<img title="Palazzo Rucellai" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/15876451506_51c74f4bcc_k-870x585.jpg">', "Leon Battista Alberti"), 
    new info(71, "Madonna and Child with Two Angels", "1465 C.E.", "tempera on wood", '<img title="Madonna and Child with Two Angels" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/06/standard_Fra_Filippo_Lippi_-_Madonna_and_Child_with_two_Angels_-_Uffizi.jpeg">', "Fra Filippo"), 
    new info(72, "Birth of Venus", "1484 to 1486 C.E.", "tempera on canvas", '<img title="Birth of Venus" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.britannica.com/51/239351-138-0D6B3C28/Sandro-Botticelli-Birth-of-Venus.jpg?w=400&h=225&c=crop">', "Sandro Botticelli"),
    new info(73, "Last Supper", "1489 to 1494 C.E.", "oil tempera", '<img title="Last Supper" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/11/52083520739_1e5b3aa6d6_6k-870x521.jpg">', "Leonardo da Vinci"), 
    new info(74, "Adam and Eve", "1504 C.E.", "engraving", '<img title="Adam and Eve" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/10/Durer-870x1101.jpeg">', "Albrecht Dürer"), 
    new info(75, "Sistine Chapel", "1508 to 1541 C.E.", "fresco", '<img title="Sistine Chapel" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/09/sistine-chapel-ceiling-300x444.jpg">', "Michelangelo"), 
    new info(76, "School of Athens", "1509 to 1511 C.E.", "fresco", '<img title="School of Athens" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/fae695cb8498e6a3ac50a22d9fd692c677968bbb.png">', "Stanza della Segnatura"), 
    new info(77, "Isenheim Altarpiece", "1512 to 1516 C.E.", "oil on wood", '<img title="Isenheim Altarpiece" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Grunewald_Isenheim1.jpg/1280px-Grunewald_Isenheim1.jpg">', "Matthias Grunewald"), 
    new info(78, "Entombment of Christ", "1525 to 1528 C.E.", "oil on wood", '<img title="Entombment of Christ" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg/800px-Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg">', "Jacopo da Pontormo"), 
    new info(79, "Allegory of Law and Grace", "1530 C.E.", "woodcut", '<img title="Allegory of Law and Grace" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cranach_law_and_grace_woodcut.jpg/300px-Cranach_law_and_grace_woodcut.jpg">', "Lucas Cranach the Elder"), 
    new info(80, "Venus of Urbino", "1538 C.E.", "oil on canvas", '<img title="Venus of Urbino" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2020/08/UrbinoWhole-870x489.jpg">', "Titian"), 
    new info(81, "Frontispiece of the Codex Mendoza", "1541 to 1542 C.E.", "pigment on paper", '<img title="Frontispiece of the Codex Mendoza" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/11/CodexMendoza01-870x1269.jpeg">', "Viceroyalty of New Spain"), 
    new info(82, "Il Gesu", "1568 to 1679 C.E.", "brick, marble, fresco, and stucco", '<img title="Il Gesu" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/G.B.Gaulli-Triumph_of_the_Name_of_Jesus.jpg">', "Giacomo da Vignola, Giacomo della Porta, Giovanni Battista Gaulli"),
    new info(83, "Hunters in the Snow", "1565 C.E.", "oil on wood", '<img title="Hunters in the Snow" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/11/24187158602_fc9bd804a4_o-870x606.jpg">', "Pieter Bruegal"),
    new info(84, "Mosque of Selim II", "1568 to 1575 C.E.", "brick and stone", '<img title="Mosque of Selim II" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/11/selimiye-full-870x653.jpg">', "Sinan"),
    new info(85, "Calling of Saint Matthew", "1597 to 1601 C.E.", "oil on canvas", '<img title="Calling of Saint Matthew" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://primematters.com/sites/default/files/styles/article/public/2020-08/caravaggio-the-calling-of-st-matthew-1200x800-wikimedia-public-domain%20%281%29.jpg?h=10d202d3&itok=ie14dxvF">', "Caravaggio"), 
    new info(86, "Henri IV Receives the Portrait of Marie de' Medici", "1631 to 1625 C.E.", "oil on canvas", '<img title="Henri IV Receives the Portrait of Marie de Medici" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/07/14582410965_de23a9f2da_k-870x1096.jpg">', "Peter Paul Rubens"),
    new info(87, "Self-Portrait with Saskia", "1636 C.E.", "etching", '<img title="Self-Portrait with Saskia" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/11/RembrandtSaskia-870x962.jpg">', "Rembrandt van Rijn"),
    new info(88, "San Carlo alle Quattro Fontane", "1638 to 1646 C.E.", "stone and stucco", '<img title="San Carlo alle Quattro Fontane" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/San_Carlo_alle_Quattro_Fontane_282829-397x680.jpg">', "Francesco Borromin"), 
    new info(89, "Ecstasy of Saint Teresa", "1647 to 1652 C.E.", "marble, stucco, and gilt bronze", '<img title="Ecstasy of Saint Teresa" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://preview.redd.it/ecstasy-of-saint-teresa-by-bernini-1652-rome-one-of-v0-rq9ibmfw2q991.jpg?width=640&crop=smart&auto=webp&s=97755b589e3c207e65d7a03baa0a54f0f19cfea2">', "Gian Lorenzo Bernini"), 
    new info(90, "Angel with Arquebus, Asiel Timore Dei", "17th century C.E.", "oil on canvas", '<img title="Angel with Arquebus" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/01/asiel-timor-dei-angel.jpg">', "Master of Calamarca"), 
    new info(91, "Las Meninas", "1656 C.E.", "oil on canvas", '<img title="Las Meninas" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://artincontext.org/wp-content/uploads/2022/09/Las-Meninas-by-Diego-Vela%CC%81zquez.jpg">', "Diego Velázquez"), 
    new info(92, "Woman Holding a Balance", "1664 C.E.", "oil on canvas", '<img title="Woman Holding a Balance" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://media.nga.gov/iiif/c948cf32-e6c7-41a0-a053-0ad0562960c4/full/!750,900/0/default.jpg">', "Johannes Vermeer"),
    new info(93, "The Palace at Versailles", "1669 C.E.", "masonry, stone, wood, iron, gold leaf, marble, and bronze", '<img title="The Palace at Versailles" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/11/Vue_ae%CC%81rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073-scaled-e1636561440123-870x411.jpg">', "Louis Le Vau and Jules Hardouin-Mansart"), 
    new info(94, "Screen with the Siege of Belgrade", "1697 to 1701 C.E.", "tempera and resin on wood, shell inlay", '<img title="Screen with the Siege of Belgrade" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2017/02/biombo.jpg">', "Circle of the González Family"), 
    new info(95, "The Virgin of Guadalupe", "1698 C.E.", "oil on canvas on wood, mother-of-pearl inlay", '<img title="The Virgin of Guadalupe" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2017/08/ma-5847.jpg">'), 
    new info(96, "Fruit and Insects", "1711 C.E.", "oil on wood", '<img title="Fruit and Insects" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/09/13953706999_fb0bb11835_4k-870x658.jpg">', "Rachel Ruysch"),
    new info(97, "Spaniard and Indian Produce a Mestizo", "1715 C.E.", "oil on canvas", '<img title="Spaniard and Indian Produce a Mestizo" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/01/rodriguez-juarez-casta-brearmore-870x669.jpg">', "Juan Rodríguez Juárez"), 
    new info(98, "The Tete a Tete", "1743 C.E.", "oil on canvas", '<img title="The Tete a Tete" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://mydailyartdisplay.uk/wp-content/uploads/2011/05/marriage-a-la-mode-tete-a-tete-by-william-hogarth.jpg">', "William Hogarth"),
    new info(99, "Portrait of Sor Juana Inez de la Cruz", "1750 C.E.", "oil on canvas", '<img title="Portrait of Sor Juana Inez de la Cruz" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/11/Sor-Juana-full-scaled-1-870x727.jpg">', "Miguel Cabrera"),
    new info(100, "A Philospher Giving a Lecture at the Orrery", "1763-1765 C.E.", "oil on canvas", '<img title="A Philospher Giving a Lecture at the Orrery" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/Wright_of_Derby_The_Orrery-870x611.jpeg">', "Joseph Wright of Derby"),
    new info(101, "The Swing", "1767 C.E.", "oil on canvas", '<img title="The Swing" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/02/Fragonard-Swing-Whole-870x1092.jpg">', "Jean-Honore Fragonard"),
    new info(102, "Monticello", "1768-1809 C.E.", "brick, glass, stone, and wood", '<img title="Monticello" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/Thomas_Jeffersons_Monticello_cropped-870x344.jpeg">', "Thomas Jefferson"),
    new info(103, "The Oath of the Horatii", "1784 C.E.", "oil on canvas", '<img title="The Oath of the Horatii" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/01/davidoathsm-870x687.jpg">', "Jacques-Louis David"),
    new info(104, "George Washington", "1788-1792 C.E.", "marble", '<img title="George Washington" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/09/Full-Tall-sm-300x540.jpg">', "Jean-Antoine Houdon"),
    new info(105, "Self-Portrait", "1790 C.E.", "oil on canvas", '<img title="Self-Portrait" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/E%CC%81lisabeth_Louise_Vige%CC%81e_Le_Brun_1755-1842_-_Self_Portrait_-_851782_-_National_Trust-870x1079.jpeg">', "Elisabeth Louise Vigee Le Brun"),
    new info(106, "Y no hai remedio (And There is Nothing to Be Done)", "1863 C.E.", "drypoint etching", '<img title="Y no hai remedio (And There is Nothing to Be Done)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/GoyaWhole-870x735.jpg">', "Francisco de Goya"),
    new info(107, "La Grande Odalisque", "1814 C.E.", "oil on canvas", '<img title="La Grande Odalisque" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/03/IngresOdalisque-870x488.jpg">', "Jean-Auguste-Dominique Ingres"),
    new info(108, "Liberty Leading the People", "1830 C.E.", "oil on canvas", '<img title="Liberty Leading the People" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2015/11/dellibwholesm-870x685.jpg">', "Eugene Delacroix"),
    new info(109, "The Oxbow", "1836 C.E.", "oil on canvas", '<img title="The Oxbow" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/OxbowFull-870x586.jpg">', "Thomas Cole"),
    new info(110, "Still Life in Studio", "1837 C.E.", "photograph", '<img title="Still Life in Studio" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/06/Daguerreotype_Daguerre_Atelier_1837-870x633.jpg">', "Louis-Jacques-Mande Daguerre"),
    new info(111, "Slave Ship", "1840 C.E.", "oil on canvas", '<img title="Slave Ship" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/02/8283629458_b554a9c5b7_k-1-e1614016367323-570x350.jpg">', "Joseph Mallard William Turner"),
    new info(112, "Palace of Westminster", "1840-1870 C.E.", "limestone masonry and glass", '<img title="Palace of Westminster" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Houses_of_Parliament_in_2022_%28cropped%29.jpg">', "Charles Barry and Augustus W.N. Pugin"),
    new info(113, "The Stone Breakers", "1849 C.E.", "oil on canvas", '<img title="The Stone Breakers" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/800px-Courbet_-_Kamieniarze.jpeg">', "Gustave Courbet"),
    new info(114, "Nadar Raising Photography to the Height of Art", "1862 C.E.", "lithograph", '<img title="Nadar Raising Photography to the Height of Art" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/06/nadar_elevant_la_photographie_a_la_hauteur_de_lart_1954.12.22-870x1107.jpg">', "Honore Daumier"),
    new info(115, "Olympia", "1863 C.E.", "oil on canvas", '<img title="Olympia" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/12/23783241193_f4eaed8227_k.jpg">', "Edouard Manet"),
    new info(116, "The Saint-Lazare Station", "1877 C.E.", "oil on canvas", '<img title="The Saint-Lazare Station" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/02/24444010465_bc72fe7bc8_k-870x649.jpg">', "Claude Monet"),
    new info(117, "The Horse in Motion", "1878 C.E.", "photograph", '<img title="The Horse in Motion" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/06/mubridge-scaled-2-1536x958.jpg">', "Eadweard Muybridge"),
    new info(118, "The Valley of Mexico from the Hillside of Santa Isabel", "1882 C.E.", "oil on canvas", '<img title="The Valley of Mexico from the Hillside of Santa Isabel" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/17011656808_647f03c465_k-870x611.jpg">', "Jose Maria Velasco"),
    new info(119, "The Burghers of Calais", "1884-1895 C.E.",  "bronze", '<img title="The Burghers of Calais" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/Statue_bourgeois_calais_rodin-870x653.jpeg">', "Auguste Rodin"),
    new info(120, "The Starry Night", "1889 C.E.", "oil on canvas", '<img title="The Starry Night" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/04/StarryNightFull-870x696.jpg">', "Vincent van Gogh"),
    new info(121, "The Coiffure", "1890-1891 C.E.", "drypoint and aquatint on paper", '<img title="The Coiffure" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/the_coiffure_1943.3.2758-870x1153.jpg">', "Mary Cassatt"),
    new info(122, "The Scream", "1893 C.E.", "tempera and pastels on cardboard", '<img title="The Scream" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg">', "Edvard Munch"),
    new info(123, "Where Do We Come From? What Are We? Where Are We Going?", "1897-1898 C.E.", "oil on canvas", '<img title="Where Do We Come From? What Are We? Where Are We Going?" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/11/52482051120_0ddd860b8d_6k-870x321.jpg">', "Paul Gauguin"),
    new info(124, "Carson, Pirie, Scott and Company Building", "1899-1903 C.E.", "iron, steel, glass, terra cotta", '<img title="Carson, Pirie, Scott and Company Building" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/Carson_Pirie_Scott_and_Company_Building_Sullivan_Center_Chicago_Illinois_9179422705-870x820.jpeg">', "Louis Sullivan"),
    new info(125, "Mont Saint-Victoire", "1902-1904 C.E.", "oil on canvas", '<img title="Mont Saint-Victoire" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2017/04/cezannethumb-870x659.jpg">', "Paul Cezanne"),
    new info(126, "Les Demoiselles dAvignon", "1907 C.E.", "oil on canvas", '<img title="Les Demoiselles dAvignon" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/23401375822_3dca5ac5ce_k-870x896.jpg">', "Pablo Picasso"),
    new info(127, "The Steerage", "1907 C.E.", "photograph", '<img title="The Steerage" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/ma-10474-870x1105.jpg">', "Alfred Stieglitz"),
    new info(128, "The Kiss", "1907-1908 C.E.", "oil on canvas", '<img title="The Kiss" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://paintvine.co.nz/cdn/shop/articles/The-Kiss.jpg?v=1694649199">', "Gustav Klimt"),
    new info(129, "The Kiss", "1907-1908 C.E.", "limestone", '<img title="The Kiss" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://o.quizlet.com/giLl.ChiOu.sLooWe7dPxg.jpg">', "Constantin Brancusi"),
    new info(130, "The Portugese", "1911 C.E.", "oil on canvas", '<img title="The Portugese" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/Braque-The-Portuguese-sm-870x1246.jpg">', "Georges Braque"),
    new info(131, "Goldfish", "1912 C.E.", "oil on canvas", '<img title="Goldfish" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/4149_foto_1_03.jpg">', "Henri Matisse"),
    new info(132, "Improvisation 28 (second version)", "1912 C.E.", "oil on canvas", '<img title="Improvisation 28 (second version)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2018/09/Kandinsky-improvisation-thumb-570x350.jpg">', "Vassily Kandinsky"),
    new info(133, "Self-Portrait as a Solider", "1915 C.E.", "oil on canvas", '<img title="Self-Portrait as a Solider" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/05/Ernst-Ludwig-Kirchner-Self-Portrait-of-a-Soldier-1915-MeisterDrucke-254836-870x1007.jpg">', "ErnstLudwig Kirchner"),
    new info(134, "Memorial Sheet for Karl Liebknecht", "1919-1920 C.E.", "woodcut", '<img title="Memorial Sheet for Karl Liebknecht" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2021/12/1280px-Ka%CC%88the_Kollwitz_Gedenkblatt_fu%CC%88r_Karl_Liebknecht_1920-870x659.jpeg">', "Kathe Kollwitz"),
    new info(135, "Villa Savoye", "1929 C.E.", "steel and reinforced concrete", '<img title="Villa Savoye" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/01/6310090780_5e48e01fa3_k-870x578.jpg">', "Le Corbusier"),
    new info(136, "Composition with Red, Blue and Yellow", "1930 C.E.", "oil on canvas", '<img title="Composition with Red, Blue and Yellow" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/01/1010px-Piet_Mondriaan_1930_-_Mondrian_Composition_II_in_Red_Blue_and_Yellow-870x882.jpeg">', "Piet Mondrian"),
    new info(137, "The Results of the First Five-Year Plan", "1932 C.E.", "photomontage", '<img title="The Results of the First Five-Year Plan" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/01/fiveyearplan-e1641571424106-870x594.jpg">', "Varvara Stepanova"),
    new info(138, "Object (Le Dejeuner en fourrure)", "1936 C.E.", "fur-covered cup, saucer, and spoon", '<img title="Object (Le Dejeuner en fourrure)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/b06d8534b0d5c5a4593904250d7ba60032ae21dc.jpg">', "Meret Oppenheim"),
    new info(139, "Fallingwater", "1936-1939 C.E.", "reinforced concrete, sandstone, steel, and glass", '<img title="Fallingwater" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/05/Fallingwater-rep-1-870x637.jpeg">', "Frank Lloyd Wright"),
    new info(140, "The Two Fridas", "1939 C.E.", "oil on canvas", '<img title="The Two Fridas" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/01/Screen-Shot-2022-01-07-at-4.53.22-PM-1-870x873.png">', "Frida Kahlo"),
    new info(141, "The Migration of the Negro, Panel no. 49", "1940-1941 C.E.", "casein tempera on hardboard", '<img title="The Migration of the Negro, Panel no. 49" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://www.moma.org/interactives/exhibitions/2015/onewayticket/site/assets/2014/10/49.jpg">', "Jacob Lawrence"),
    new info(142, "The Jungle", "1943 C.E.", "gouache on paper mounted on canvas", '<img title="The Jungle" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/02/LamTheJungle-870x909.jpg">', "Wifredo Lam"),
    new info(143, "Dream of a Sunday Afternoon in the Alameda Park", "1947-1948 C.E.", "fresco", '<img title="Dream of a Sunday Afternoon in the Alameda Park" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/03/Mural_Suen%CC%83o_de_una_tarde_dominical_en_la_Alameda_Central-1536x373.jpg">', "Diego Rivera"),
    new info(144, "Fountain (second version)", "1950 C.E.", "glazed sanitary china with black paint", '<img title="Fountain (second version)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-perseus-images/8563bb352b1d93895822bbf0d5f4259c3b7c8168.jpg">', "Marcel Duchamp"),
    new info(145, "Woman, I", "1950-1952 C.E.", "oil on canvas", '<img title="Woman, I" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-youtube-converted/WEYKoJTIHcE.mp4/WEYKoJTIHcE.png">', "Willem de Kooning"),
    new info(146, "Seagram Building", "1954-1958 C.E.", "steel, glass, and bronze", '<img title="Seagram Building" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.britannica.com/33/188633-050-2A2082F3/Seagram-Building-constructed-1958-Ludwig-Mies-van-der-Rohe-Philip-Johnson-New-York.jpg">', "Ludwig Miles van der Rohe and Philip Johnson"),
    new info(147, "Marilyn Diptych", "1962 C.E.", "oil, acrylic, and silkscreen enamel on canvas", '<img title="Marilyn Diptych" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/02/MarilynDip-870x615.jpg">', "Andy Warhol"),
    new info(148, "Narcissus Garden", "1966 C.E.", "mirror balls", '<img title="Narcissus Garden" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://d2jv9003bew7ag.cloudfront.net/uploads/Narcissus-Garden-by-Yayoi-Kusama-at-Tuileries-Palace-in-Paris.jpg">', "Yayoi Kusama"),
    new info(149, "The Bay", "1963 C.E.", "acrylic on canvas", '<img title="The Bay" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/05/Whole-1-870x840.jpg">', "Helen Frankenthaler"),
    new info(150, "Lipstick (Ascending) on Caterpillar Tracks", "1969-1974 C.E.", "steel, aluminum, resin, and polyurethane enamel paint", '<img title="Lipstick (Ascending) on Caterpillar Tracks" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://upload.wikimedia.org/wikipedia/en/7/79/Lipstick-catepillar.jpg">', "Claes Oldenburg"),
    new info(151, "Spiral Jetty", "1970 C.E.", "mud, salt crystals, rock, and water coil", '<img title="Spiral Jetty" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/06/spiral-jetty-robert-smithson.jpg">', "Robert Smithson"),
    new info(152, "House in Newcastle County", "1978-1983 C.E.", "wood frame and stucco", '<img title="House in Newcastle County" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/04/Venturi_01-870x524.jpg">', "Robert Venturi, John Rauch, Denise Scott Brown"),
    new info(153, "Chavin de Huantar", "900-200 B.C.E.", "stone, granite, gold", '<img title="Chavin de Huantar" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/02/51149644124_91bf74837e_k-870x353.jpg">', "Chavin culture"),
    new info(154, "Mesa Verde Cliff Dwellings", "450-1300 C.E.", "sandstone", '<img title="Mesa Verde Cliff Dwellings" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/02/17062813499_74070291c3_b-870x603.jpg">', "Anasazi culture"),
    new info(155, "Yaxchilan", '725 C.E.', "limestone", '<img title="Yaxchilan" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/04/16425423149_e6d676cbb7_o-1-870x339.jpg">', "Maya culture"),
    new info(156, "Great Serpent Mound", "1070 C.E.", "effigy mound", '<img title="Great Serpent Mound" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://lopezapah.wordpress.com/wp-content/uploads/2016/03/screen-shot-2016-03-13-at-9-46-41-pm.png?w=450">', "Mississippian culture"),
    new info(157, "Templo Mayor", "1375-1520 C.E.", "stone, volcanic stone, basalt", '<img title="Templo Mayor" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/10/diagram_Templo-Mayor-870x489.jpg">', "Aztec culture"),
    new info(158, "Rulers Feather Headdress", "1428-1520 C.E.", "quetzal and cotinga feathers, gold", '<img title="Rulers Feather Headdress" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://www.habsburger.net/files/styles/large/public/originale/federkopfschmuck_um_1520_original.jpg?itok=8YQqfMjx">', "Aztec culture"),
    new info(159, "City of Cusco", "1440 C.E.", "sandstone", '<img title="City of Cusco" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.kastatic.org/ka-content-images/0622b1176a9350d1aa2f06190438c1220b81bf50.jpg">', "Inka culture"),
    new info(160, "Silver and Gold Maize Cobs", "1400-1533 C.E.", "sheet metal, gold, silver", '<img title="Silver and Gold Maize Cobs" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/02/cj7d3BpKJiIq.jpg">', "Inka culture"),
    new info(161, "Machu Picchu", "1450-1540 C.E.", "granite", '<img title="Machu Picchu" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/03/50618773601_7983706494_o.jpg">', "Inka culture"),
    new info(162, "All-Toqapu Tunic", "1450-1540 C.E.", "camelid fiber and cotton", '<img title="All-Toqapu Tunic" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2019/11/InkaTunic-870x1010.jpg">', "Inka culture"),
    new info(163, "Bandolier Bag", "1850 C.E.", "beadwork on leather", '<img title="Bandolier Bag" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://o.quizlet.com/mWGtvqOCrOewOBY.hjjeAw.png">', "Lenape tribe"),
    new info(164, "Transformation Mask", "Late 1800s C.E.", "wood, paint, string", '<img title="Transformation Mask" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2024/04/collcon-e1712952058914.jpeg">', "Kwakiutl Tribe"),
    new info(165, "Hide Painting of Sun Dance", "1890-1900 C.E.", "painted elk hide", '<img title="Hide Painting of Sun Dance" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/09/resize_formatfull-870x776.jpeg">', "Cotsiogo"),
    new info(166, "Black-on-black Ceramic Vessel", "mid-1900s C.E.", "blackware ceramic", '<img title="Black-on-black Ceramic Vessel" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/07/1986.213.jpg">', "Maria and Julian Martinez"),
    new info(167, "Conical Tower and Circular Wall of Great Zimbabwe", "1000-1400 C.E.", "coursed granite blocks", '<img title="Conical Tower and Circular Wall of Great Zimbabwe" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://cdn.britannica.com/15/153415-050-86C6DBCB/Ruins-Great-Zimbabwe.jpg">', "Shona culture"),
    new info(168, "Great Mosque of Djenne", "original 1200 C.E., rebuilt 1906-1907 C.E.", "adobe", '<img title="Great Mosque of Djenne" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/05/2434809322_f76c6575e5_o-1536x775.png">'),
    new info(169, "Wall Plaque from Obas Palace", "1500s C.E.", "cast brass", '<img title="Wall Plaque from Obas Palace" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2016/09/dp295360.jpg">', "Edo culture"),
    new info(170, "Sika Dwa Kofi (Golden Stool)", "1700 C.E.", "gold and wood", '<img title="Sika Dwa Kofi (Golden Stool)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2018/08/golden-stool-thumb-624x374.jpg">', "Ashanti culture"),
    new info(171, "Ndop (portrait figure)", "1760-1780 C.E.", "wood", '<img title="Ndop (portrait figure)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/10/61.33_PS2-300x400.jpg">', "Kuba culture"),
    new info(172, "Power Figure (Nkisi nkondi)", "late 1800s C.E.", "wood and metal", '<img title="Power Figure (Nkisi nkondi)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/11/76.79-S3-2-870x1116.jpeg">', "Kongo culture"),
    new info(173, "Female (Pwo) Mask", "late 1800s - early 1900s C.E.", "wood, fiber, pigment, metal", '<img title="Female (Pwo) Mask" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://slideplayer.com/slide/14597270/90/images/22/Image+174+Chokwe+Mask-+Female+%28Pwo%29+late+19th+Century.jpg">', "Chokwe culture"),
    new info(174, "Portrait Mask (Mblo)", "late 1800s - early 1900s C.E.", "wood and pigment", '<img title="Portrait Mask (Mblo)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/07/portrait-copy-300x426.png">', "Baule culture"),
    new info(175, "Bundu Mask", "1800s-1900s C.E.", "wood, cloth, fiber", '<img title="Bundu Mask" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://ferrelltheafricas.weebly.com/uploads/4/6/2/3/46230375/7311261.jpg?205">', "Sande Society, Mende culture"),
    new info(176, "Ikenga (shrine figure)", "1800s-1900s C.E.", "wood", '<img title="Ikenga (shrine figure)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://i.pinimg.com/originals/13/08/76/1308761cecd97ce3308d7110c804d2bf.jpg">', "Igbo culture"),
    new info(177, "Lukasa (memory board)", "1800s-1900s C.E.", "wood, beads, metal", '<img title="Lukasa (memory board)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2022/11/Lukasa.jpeg">', "Mbudye Society, Luba culture"),
    new info(178, "Aka Elephant Mask", "1800s-1900s C.E.", "wood, woven raffia, cloth, beads", '<img title="Aka Elephant Mask" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2023/05/414591.jpeg">', "Bamileke culture"),
    new info(179, "Reliquary Figure (nblo bieri)", "1800s-1900s C.E.", "wood", '<img title="Reliquary Figure (nblo bieri)" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://lopezapah.wordpress.com/wp-content/uploads/2016/01/d71284c1ab658f260dad1fd503c72bd7.jpg">', "Fang culture"),
    new info(180, "Veranda Post: Equestrian Figure and Female Caryatid", "before 1938 C.E.", "wood and pigment", '<img title="Veranda Post: Equestrian Figure and Female Caryatid" class="cardforms" style="max-width: 150px; max-height: 150px;" src="https://smarthistory.org/wp-content/uploads/2019/10/IMG_5717-300x811.jpg">', "Yoruba culture")
];

let units = document.getElementsByClassName("select_unit");
let chosen_unit;

let unitarts = [];

for (i=0; i < units.length; i++) {
    if (units[i]) {
        units[i].addEventListener("click", unitselect);
    }
}

let canchooseunit = true;
function unitselect() {
    if (canchooseunit) {
        canchooseunit = false;
        this.style.backgroundColor = "rebeccapurple";
        this.style.color = "black";
        chosen_unit = this.value;
        switch (chosen_unit) {
            case "1B":
                unitarts = [];
                for (i=0; i < 11; i++) {
                    unitarts.push(art[i]);
                }
                break;
                
            case "2B":
                unitarts = [];
                for (i=11; i < 25; i++) {
                    unitarts.push(art[i]);
                }
                break;
                
            case "2C":
                unitarts = [];
                for (i=25; i < 47; i++) {
                    unitarts.push(art[i]);
                }
                break;
            
            case "3":
                unitarts = [];
                for (i=47; i < 64; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "4A":
                unitarts = [];
                for (i=64; i < 81; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "4B":
                unitarts = [];
                for (i=81; i < 98; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "5A":
                unitarts = [];
                for (i=98; i < 124; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "5B":
                unitarts = [];
                for (i=124; i < 152; i++) {
                    unitarts.push(art[i]);
                }
                break;
                
            case "7":
                unitarts = [];
                for (i=152; i < 166; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "6":
                unitarts = [];
                for (i=166; i < 180; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "8A":
                unitarts = [];
                for (i=180; i < 191; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "8B":
                unitarts = [];
                for (i=191; i < 212; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "9":
                unitarts = [];
                for (i=212; i < 223; i++) {
                    unitarts.push(art[i]);
                }
                break;

            case "10":
                unitarts = [];
                for (i=223; i < 250; i++) {
                    unitarts.push(art[i]);
                }
                break;
        }
        document.getElementById("selecttype").style.display = "inline";
        document.getElementById("submit_type").style.display = "inline";
    }
}

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setq);}

function artisterror() {
    document.getElementById("selectunit").style.display = "none";
    let choosetype = document.getElementsByName("select_type");
    for (let i=0; i<choosetype.length; i++) {
        choosetype[i].style.display = "none";
    }
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "An error occured. There are not enough artists in this selection. Click return to play again."
}

let arttouse = [];
function setq() {
    let properties = document.getElementsByName("select_type");
    for (let i=0; i<properties.length; i++) {
        if (properties[i].checked) {
            questiontype = properties[i].value;
        } else {
            document.getElementById("errormsg").innerText = "No property was selected. Try again.";
        }
    }
    if (questiontype) {
        document.getElementById("selectunit").style.display = "none";
        let choosetype = document.getElementsByName("select_type");
        for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}

        if (questiontype == "artist") {
            console.log("type is artist");
            for (i=0; i < unitarts.length; i++) {
                console.log("inside for loop");
                console.log(unitarts[i].artist);
                if (unitarts[i].artist) {
                    console.log("artist: " + unitarts[i].artist)
                    arttouse.push(unitarts[i]);
                    console.log("arttouse length: " + arttouse.length);
                } else {console.log("no artist");}
            }

            console.log(arttouse.length)

            if (arttouse.length > 3) {
                console.log("assign questions");
                assignq();
            } else {
                console.log("enact error")
                artisterror();
            }
        } else {
            assignq();
        }
    } 
}

let randq, randnum, ca;
let lastnums = ["", "", "", "", ""];
let acceptableq = true;
let mcqc = [1,2,3,4];

if (document.getElementById("showoptions")) {
    document.getElementById("showoptions").addEventListener("click", () => {
        if (document.getElementById("showoptions").style.color == "white") {
            document.getElementById("showoptions").style.color = "rebeccapurple";
            document.getElementById("showoptions").style.backgroundColor = "white";
            document.getElementById("MC").style.display = "inline";
        } else {
            document.getElementById("showoptions").style.color = "white";
            document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";
            document.getElementById("MC").style.display = "none";
        }
    })
}

function assignq() {
    document.getElementById("questionthings").style.display = "inline";
    document.getElementById("showoptions").style.color = "white";
    document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";

    do {
        if (questiontype == "artist") {randq = Math.floor(Math.random() * arttouse.length)} else {randq = Math.floor(Math.random() * unitarts.length)}
        if(!lastnums.includes(randq)) {
            acceptableq = true;
        } else {
            acceptableq = false;
        }
    } while (!acceptableq)

    if (acceptableq) {
        lastnums.push(randq);
        lastnums.splice(0, 1);
        let i = 0;
        switch (questiontype) {
            case "dates":
                document.getElementById("qask").innerText = unitarts[randq].name + " date";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].date;
                mcqc.splice(ca, 1);
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].date != document.getElementById("answer1").innerText) && (unitarts[randnum].date != document.getElementById("answer2").innerText) && (unitarts[randnum].date != document.getElementById("answer3").innerText) && (unitarts[randnum].date != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].date;
                        i++
                    }
                }
                break;
            
            case "materials":
                document.getElementById("qask").innerText = unitarts[randq].name + " material";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].material;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].material != document.getElementById("answer1").innerText) && (unitarts[randnum].material != document.getElementById("answer2").innerText) && (unitarts[randnum].material != document.getElementById("answer3").innerText) && (unitarts[randnum].material != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].material;
                        i++
                    }
                }
                break;

            case "artist":
                document.getElementById("qask").innerText = arttouse[randq].name + " artist";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = arttouse[randq].artist;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * arttouse.length);
                    if ((arttouse[randnum].artist != document.getElementById("answer1").innerText) && (arttouse[randnum].artist != document.getElementById("answer2").innerText) && (arttouse[randnum].artist != document.getElementById("answer3").innerText) && (arttouse[randnum].artist != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = arttouse[randnum].artist;
                        i++
                    }
                }
                break;
                
            case "forms":
                document.getElementById("qask").innerText = unitarts[randq].name + " form";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerHTML = unitarts[randq].form;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].form != document.getElementById("answer1").innerHTML) && (unitarts[randnum].form != document.getElementById("answer2").innerHTML) && (unitarts[randnum].form != document.getElementById("answer3").innerHTML) && (unitarts[randnum].form != document.getElementById("answer4").innerHTML)) {
                        document.getElementById("answer" + mcqc[i]).innerHTML = unitarts[randnum].form;
                        i++
                    }
                }
                break;
                
            case "contents":
                document.getElementById("qask").innerText = unitarts[randq].name + " content";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].content;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].content != document.getElementById("answer1").innerText) && (unitarts[randnum].content != document.getElementById("answer2").innerText) && (unitarts[randnum].content != document.getElementById("answer3").innerText) && (unitarts[randnum].content != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].content;
                        i++
                    }
                }
                break;
                
            case "functions":
                document.getElementById("qask").innerText = unitarts[randq].name + " function";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].function;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].function != document.getElementById("answer1").innerText) && (unitarts[randnum].function != document.getElementById("answer2").innerText) && (unitarts[randnum].function != document.getElementById("answer3").innerText) && (unitarts[randnum].function != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].function;
                        i++
                    }
                }
                break;
                
            case "contexts":
                document.getElementById("qask").innerText = unitarts[randq].name + " context";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].context;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].context != document.getElementById("answer1").innerText) && (unitarts[randnum].context != document.getElementById("answer2").innerText) && (unitarts[randnum].context != document.getElementById("answer3").innerText) && (unitarts[randnum].context != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].context;
                        i++
                    }
                }
                break;   
        }
    }
}

//check mcq answers

function mcqreset() {
    mcqc = [1, 2, 3, 4];
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + (i + 1)).style.backgroundColor = "rebeccapurple";
    }
    document.getElementById("MC").style.display = "none";
    assignq()
}

for (let i = 0; i < 4; i++) {
    if (document.getElementById("answer" + (i + 1))) {
        document.getElementById("answer" + (i + 1)).addEventListener("click", checkmcq);
    }
}

let qredo;
function checkmcq() {
    if (this.value == ca) {
        this.style.backgroundColor = "green";
        setTimeout(mcqreset, 1000);
    } else {
        this.style.backgroundColor = "red";
    }
}

if (document.getElementById("endgame")) {document.getElementById("endgame").addEventListener("click", ()=>{
    document.getElementById("questionthings").style.display = "none";
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "You completed the game! Click return to play again."
})}