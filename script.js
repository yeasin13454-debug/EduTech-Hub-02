let items = [
            {
                id: 1,
                type: 'software',
                category: 'Windows',
                pricing: 'Free',
                title: 'Visual Studio Code for Windows',
                desc: 'World-class free source code editor optimized for modern Windows cloud apps.',
                badge: 'Windows',
                badgeColor: 'bg-blue-500 text-white',
                meta: 'Size: 90 MB • Windows 10/11',
                actionText: 'Download',
                icon: 'fa-brands fa-windows'
            },
            {
                id: 2,
                type: 'software',
                category: 'Windows',
                pricing: 'Paid',
                title: 'Adobe Photoshop CC Windows',
                desc: 'Industry standard image editing and graphic design software for Windows.',
                badge: 'Windows',
                badgeColor: 'bg-blue-500 text-white',
                meta: 'Size: 2.1 GB • Windows 10/11',
                actionText: 'Download',
                icon: 'fa-brands fa-windows'
            },
            {
                id: 3,
                type: 'software',
                category: 'Android',
                pricing: 'Free',
                title: 'Termux Terminal Emulator',
                desc: 'Powerful Linux environment and terminal emulator for Android devices.',
                badge: 'Android',
                badgeColor: 'bg-emerald-500 text-white',
                meta: 'Size: 85 MB • Android 8.0+',
                actionText: 'Download',
                icon: 'fa-brands fa-android'
            },
            {
                id: 4,
                type: 'software',
                category: 'Apple',
                pricing: 'Paid',
                title: 'Procreate Pocket iOS',
                desc: 'Complete illustration and digital sketching studio designed for iPhone.',
                badge: 'Apple',
                badgeColor: 'bg-slate-800 text-white',
                meta: 'Size: 310 MB • iOS 15+',
                actionText: 'Download',
                icon: 'fa-brands fa-apple'
            },
            {
                id: 5,
                type: 'software',
                category: 'Mac',
                pricing: 'Paid',
                title: 'Final Cut Pro for Mac',
                desc: 'Revolutionary video editing software optimized for Apple Silicon.',
                badge: 'Mac',
                badgeColor: 'bg-indigo-500 text-white',
                meta: 'Size: 3.4 GB • macOS 13+',
                actionText: 'Download',
                icon: 'fa-solid fa-laptop'
            },
            {
                id: 6,
                type: 'software',
                category: 'Linux',
                pricing: 'Free',
                title: 'Ubuntu Desktop 24.04 LTS',
                desc: 'Fast, secure, and open-source Linux operating system ISO image.',
                badge: 'Linux',
                badgeColor: 'bg-amber-600 text-white',
                meta: 'Size: 4.7 GB • 64-bit ISO',
                actionText: 'Download',
                icon: 'fa-brands fa-linux'
            },
            {
                id: 7,
                type: 'software',
                category: 'Games',
                pricing: 'Free',
                title: 'Cyber Arena Battle Royale',
                desc: 'High-octane multiplayer action game with next-gen graphics.',
                badge: 'Games',
                badgeColor: 'bg-purple-500 text-white',
                meta: 'Size: 1.8 GB • PC / Mobile',
                actionText: 'Download',
                icon: 'fa-solid fa-gamepad'
            },
            {
                id: 8,
                type: 'course',
                category: 'Web Development',
                pricing: 'Free',
                title: 'Full-Stack Web Development Bootcamp',
                desc: 'Learn HTML, Tailwind CSS, JavaScript, React, and Node.js from scratch.',
                badge: 'Web Development',
                badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                meta: '45 Lectures • 18 Hours',
                actionText: 'Enroll Now',
                icon: 'fa-solid fa-code'
            },
            {
                id: 9,
                type: 'course',
                category: 'UI/UX Design',
                pricing: 'Paid',
                title: 'Modern UI/UX Design with Figma',
                desc: 'Master user interface design, wireframing, and interactive prototyping.',
                badge: 'UI/UX Design',
                badgeColor: 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300',
                meta: '30 Lectures • 12 Hours',
                actionText: 'Enroll Now',
                icon: 'fa-solid fa-paint-brush'
            },
            {
                id: 10,
                type: 'course',
                category: 'Data Science',
                pricing: 'Paid',
                title: 'Python for Data Science & AI',
                desc: 'Analyze data, create visualizations, and build machine learning models.',
                badge: 'Data Science',
                badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
                meta: '50 Lectures • 22 Hours',
                actionText: 'Enroll Now',
                icon: 'fa-solid fa-chart-line'
            },
            {
                id: 11,
                type: 'course',
                category: 'Cyber Security',
                pricing: 'Free',
                title: 'Ethical Hacking & Cyber Security Basics',
                desc: 'Understand network security, penetration testing, and system defense.',
                badge: 'Cyber Security',
                badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                meta: '28 Lectures • 10 Hours',
                actionText: 'Enroll Now',
                icon: 'fa-solid fa-shield-halved'
            },
            {
                id: 12,
                type: 'software',
                category: 'Freelancing',
                pricing: 'Free',
                title: 'Complete Freelancing & Upwork Masterguide',
                desc: 'Step-by-step guide to building a winning profile and landing global clients.',
                badge: 'Freelancing',
                badgeColor: 'bg-teal-600 text-white',
                meta: 'PDF + Video Toolkit • 250 MB',
                actionText: 'Download',
                icon: 'fa-solid fa-briefcase'
            }
        ];

        const govtServicesData = [
            {
                region: "Asian Countries",
                countries: [
                    { name: "Bangladesh", flag: "https://flagcdn.com/w160/bd.png", portal: "bangladesh.gov.bd", url: "https://bangladesh.gov.bd", desc: "National Portal of Bangladesh" },
                    { name: "India", flag: "https://flagcdn.com/w160/in.png", portal: "india.gov.in", url: "https://www.india.gov.in", desc: "National Portal of India" },
                    { name: "Pakistan", flag: "https://flagcdn.com/w160/pk.png", portal: "pakistan.gov.pk", url: "https://pakistan.gov.pk", desc: "Official Gateway to Govt of Pakistan" },
                    { name: "Nepal", flag: "https://flagcdn.com/w160/np.png", portal: "nepal.gov.np", url: "https://nepal.gov.np", desc: "Government of Nepal Portal" },
                    { name: "Bhutan", flag: "https://flagcdn.com/w160/bt.png", portal: "gov.bt", url: "https://www.gov.bt", desc: "Royal Government of Bhutan" },
                    { name: "Sri Lanka", flag: "https://flagcdn.com/w160/lk.png", portal: "gov.lk", url: "https://www.gov.lk", desc: "Official Web Portal of Sri Lanka" },
                    { name: "Maldives", flag: "https://flagcdn.com/w160/mv.png", portal: "gov.mv", url: "https://www.gov.mv", desc: "Government of Maldives Portal" },
                    { name: "Afghanistan", flag: "https://flagcdn.com/w160/af.png", portal: "gov.af", url: "https://www.mfa.gov.af", desc: "Afghanistan Official Portal" },
                    { name: "China", flag: "https://flagcdn.com/w160/cn.png", portal: "english.www.gov.cn", url: "https://english.www.gov.cn", desc: "State Council of China" },
                    { name: "Japan", flag: "https://flagcdn.com/w160/jp.png", portal: "japan.go.jp", url: "https://www.japan.go.jp", desc: "The Government of Japan" },
                    { name: "South Korea", flag: "https://flagcdn.com/w160/kr.png", portal: "korea.net", url: "https://www.korea.net", desc: "Official Republic of Korea Portal" },
                    { name: "North Korea", flag: "https://flagcdn.com/w160/kp.png", portal: "naenara.com.kp", url: "http://www.naenara.com.kp", desc: "DPRK Official Information Portal" },
                    { name: "Mongolia", flag: "https://flagcdn.com/w160/mn.png", portal: "mongolia.gov.mn", url: "https://mongolia.gov.mn", desc: "Government of Mongolia" },
                    { name: "Taiwan", flag: "https://flagcdn.com/w160/tw.png", portal: "taiwan.gov.tw", url: "https://www.taiwan.gov.tw", desc: "Republic of China (Taiwan) Portal" },
                    { name: "Malaysia", flag: "https://flagcdn.com/w160/my.png", portal: "malaysia.gov.my", url: "https://www.malaysia.gov.my", desc: "MyGovernment Official Portal" },
                    { name: "Singapore", flag: "https://flagcdn.com/w160/sg.png", portal: "gov.sg", url: "https://www.gov.sg", desc: "Singapore Government Agency" },
                    { name: "Indonesia", flag: "https://flagcdn.com/w160/id.png", portal: "indonesia.go.id", url: "https://www.indonesia.go.id", desc: "Portal Nasional Republik Indonesia" },
                    { name: "Thailand", flag: "https://flagcdn.com/w160/th.png", portal: "thaigov.go.th", url: "https://www.thaigov.go.th", desc: "Royal Thai Government" },
                    { name: "Vietnam", flag: "https://flagcdn.com/w160/vn.png", portal: "vietnam.gov.vn", url: "https://vietnam.gov.vn", desc: "Socialist Republic of Vietnam" },
                    { name: "Philippines", flag: "https://flagcdn.com/w160/ph.png", portal: "gov.ph", url: "https://www.gov.ph", desc: "Official Gazette of the Philippines" },
                    { name: "Myanmar", flag: "https://flagcdn.com/w160/mm.png", portal: "myanmar.gov.mm", url: "https://www.myanmar.gov.mm", desc: "Myanmar National Portal" },
                    { name: "Brunei", flag: "https://flagcdn.com/w160/bn.png", portal: "gov.bn", url: "https://www.gov.bn", desc: "Brunei Darussalam Government" },
                    { name: "Cambodia", flag: "https://flagcdn.com/w160/kh.png", portal: "cambodia.gov.kh", url: "https://www.cambodia.gov.kh", desc: "Royal Government of Cambodia" },
                    { name: "Laos", flag: "https://flagcdn.com/w160/la.png", portal: "laogov.gov.la", url: "https://www.laogov.gov.la", desc: "Lao PDR Government Portal" },
                    { name: "Timor-Leste", flag: "https://flagcdn.com/w160/tl.png", portal: "timor-leste.gov.tl", url: "http://timor-leste.gov.tl", desc: "Government of Timor-Leste" },
                    { name: "Kazakhstan", flag: "https://flagcdn.com/w160/kz.png", portal: "gov.kz", url: "https://www.gov.kz", desc: "Unified Platform of Kazakhstan" },
                    { name: "Uzbekistan", flag: "https://flagcdn.com/w160/uz.png", portal: "gov.uz", url: "https://gov.uz", desc: "Government Portal of Uzbekistan" },
                    { name: "Turkmenistan", flag: "https://flagcdn.com/w160/tm.png", portal: "turkmenistan.gov.tm", url: "https://turkmenistan.gov.tm", desc: "Turkmenistan Golden Age Portal" },
                    { name: "Kyrgyzstan", flag: "https://flagcdn.com/w160/kg.png", portal: "gov.kg", url: "https://www.gov.kg", desc: "Cabinet of Ministers of Kyrgyzstan" },
                    { name: "Tajikistan", flag: "https://flagcdn.com/w160/tj.png", portal: "president.tj", url: "https://www.president.tj", desc: "Official Portal of Tajikistan" },
                    { name: "Georgia", flag: "https://flagcdn.com/w160/ge.png", portal: "gov.ge", url: "https://www.gov.ge", desc: "Government of Georgia" },
                    { name: "Armenia", flag: "https://flagcdn.com/w160/am.png", portal: "gov.am", url: "https://www.gov.am", desc: "Government of the Republic of Armenia" },
                    { name: "Azerbaijan", flag: "https://flagcdn.com/w160/az.png", portal: "gov.az", url: "https://www.gov.az", desc: "Azerbaijan Electronic Government" }
                ]
            },
            {
                region: "Middle Eastern Countries",
                countries: [
                    { name: "Saudi Arabia", flag: "https://flagcdn.com/w160/sa.png", portal: "my.gov.sa", url: "https://www.my.gov.sa", desc: "Unified National Platform of KSA" },
                    { name: "United Arab Emirates (UAE)", flag: "https://flagcdn.com/w160/ae.png", portal: "u.ae", url: "https://u.ae", desc: "Official Portal of the UAE Government" },
                    { name: "Qatar", flag: "https://flagcdn.com/w160/qa.png", portal: "hukoomi.gov.qa", url: "https://hukoomi.gov.qa", desc: "Qatar e-Government Portal" },
                    { name: "Kuwait", flag: "https://flagcdn.com/w160/kw.png", portal: "e.gov.kw", url: "https://e.gov.kw", desc: "Kuwait Government Online" },
                    { name: "Oman", flag: "https://flagcdn.com/w160/om.png", portal: "oman.om", url: "https://www.oman.om", desc: "Official Oman eGovernment Portal" },
                    { name: "Bahrain", flag: "https://flagcdn.com/w160/bh.png", portal: "bahrain.bh", url: "https://www.bahrain.bh", desc: "Kingdom of Bahrain National Portal" },
                    { name: "Iraq", flag: "https://flagcdn.com/w160/iq.png", portal: "gds.gov.iq", url: "https://gds.gov.iq", desc: "Government of Iraq Portal" },
                    { name: "Iran", flag: "https://flagcdn.com/w160/ir.png", portal: "dolat.ir", url: "https://dolat.ir", desc: "Islamic Republic of Iran Portal" },
                    { name: "Yemen", flag: "https://flagcdn.com/w160/ye.png", portal: "yemen.gov.ye", url: "https://www.yemen.gov.ye", desc: "Republic of Yemen Portal" },
                    { name: "Syria", flag: "https://flagcdn.com/w160/sy.png", portal: "egov.sy", url: "http://www.egov.sy", desc: "Syrian e-Government Portal" },
                    { name: "Jordan", flag: "https://flagcdn.com/w160/jo.png", portal: "jordan.gov.jo", url: "https://portal.jordan.gov.jo", desc: "Hashemite Kingdom of Jordan" },
                    { name: "Lebanon", flag: "https://flagcdn.com/w160/lb.png", portal: "pcm.gov.lb", url: "http://www.pcm.gov.lb", desc: "Presidency of the Council of Ministers" },
                    { name: "Israel", flag: "https://flagcdn.com/w160/il.png", portal: "gov.il", url: "https://www.gov.il", desc: "Israel Government Services" },
                    { name: "Palestine", flag: "https://flagcdn.com/w160/ps.png", portal: "palestine.ps", url: "http://www.palestine.ps", desc: "State of Palestine Official Portal" },
                    { name: "Turkey", flag: "https://flagcdn.com/w160/tr.png", portal: "turkiye.gov.tr", url: "https://www.turkiye.gov.tr", desc: "e-Devlet Kapısı Türkiye" },
                    { name: "Cyprus", flag: "https://flagcdn.com/w160/cy.png", portal: "gov.cy", url: "https://www.gov.cy", desc: "Republic of Cyprus Digital Portal" },
                    { name: "Egypt", flag: "https://flagcdn.com/w160/eg.png", portal: "egypt.gov.eg", url: "https://www.egypt.gov.eg", desc: "Egyptian Government Services Portal" }
                ]
            },
            {
                region: "European Countries",
                countries: [
                    { name: "United Kingdom (UK)", flag: "https://flagcdn.com/w160/gb.png", portal: "gov.uk", url: "https://www.gov.uk", desc: "UK Government Services & Info" },
                    { name: "France", flag: "https://flagcdn.com/w160/fr.png", portal: "gouvernement.fr", url: "https://www.gouvernement.fr", desc: "Portail du Gouvernement Français" },
                    { name: "Germany", flag: "https://flagcdn.com/w160/de.png", portal: "bundesregierung.de", url: "https://www.bundesregierung.de", desc: "The Federal Government of Germany" },
                    { name: "Netherlands", flag: "https://flagcdn.com/w160/nl.png", portal: "government.nl", url: "https://www.government.nl", desc: "Government of the Netherlands" },
                    { name: "Belgium", flag: "https://flagcdn.com/w160/be.png", portal: "belgium.be", url: "https://www.belgium.be", desc: "Official Information & Services" },
                    { name: "Switzerland", flag: "https://flagcdn.com/w160/ch.png", portal: "admin.ch", url: "https://www.admin.ch", desc: "Swiss Federal Administration" },
                    { name: "Austria", flag: "https://flagcdn.com/w160/at.png", portal: "oesterreich.gv.at", url: "https://www.oesterreich.gv.at", desc: "Digital Austria Portal" },
                    { name: "Ireland", flag: "https://flagcdn.com/w160/ie.png", portal: "gov.ie", url: "https://www.gov.ie", desc: "Central Portal for Irish Govt" },
                    { name: "Luxembourg", flag: "https://flagcdn.com/w160/lu.png", portal: "gouvernement.lu", url: "https://gouvernement.lu", desc: "Luxembourg Government Portal" },
                    { name: "Monaco", flag: "https://flagcdn.com/w160/mc.png", portal: "gouv.mc", url: "https://en.gouv.mc", desc: "Prince's Government of Monaco" },
                    { name: "Liechtenstein", flag: "https://flagcdn.com/w160/li.png", portal: "regierung.li", url: "https://www.regierung.li", desc: "Government of Liechtenstein" },
                    { name: "Italy", flag: "https://flagcdn.com/w160/it.png", portal: "governo.it", url: "https://www.governo.it", desc: "Governo Italiano Presidenza" },
                    { name: "Spain", flag: "https://flagcdn.com/w160/es.png", portal: "administracion.gob.es", url: "https://administracion.gob.es", desc: "Punto de Acceso General España" },
                    { name: "Portugal", flag: "https://flagcdn.com/w160/pt.png", portal: "eportugal.gov.pt", url: "https://eportugal.gov.pt", desc: "Portal Único de Serviços Públicos" },
                    { name: "Greece", flag: "https://flagcdn.com/w160/gr.png", portal: "gov.gr", url: "https://www.gov.gr", desc: "Unified Digital Portal of Greece" },
                    { name: "Malta", flag: "https://flagcdn.com/w160/mt.png", portal: "gov.mt", url: "https://www.gov.mt", desc: "Government of Malta Portal" },
                    { name: "San Marino", flag: "https://flagcdn.com/w160/sm.png", portal: "gov.sm", url: "https://www.gov.sm", desc: "Portale Istituzionale San Marino" },
                    { name: "Vatican City", flag: "https://flagcdn.com/w160/va.png", portal: "vaticanstate.va", url: "https://www.vaticanstate.va", desc: "Vatican City State Official" },
                    { name: "Andorra", flag: "https://flagcdn.com/w160/ad.png", portal: "govern.ad", url: "https://www.govern.ad", desc: "Govern d'Andorra Official" },
                    { name: "Sweden", flag: "https://flagcdn.com/w160/se.png", portal: "government.se", url: "https://www.government.se", desc: "Government Offices of Sweden" },
                    { name: "Norway", flag: "https://flagcdn.com/w160/no.png", portal: "regjeringen.no", url: "https://www.regjeringen.no", desc: "Norwegian Government Portal" },
                    { name: "Denmark", flag: "https://flagcdn.com/w160/dk.png", portal: "denmark.dk", url: "https://denmark.dk", desc: "Official Website of Denmark" },
                    { name: "Finland", flag: "https://flagcdn.com/w160/fi.png", portal: "valtioneuvosto.fi", url: "https://valtioneuvosto.fi", desc: "Finnish Government Portal" },
                    { name: "Iceland", flag: "https://flagcdn.com/w160/is.png", portal: "government.is", url: "https://www.government.is", desc: "Government of Iceland" },
                    { name: "Estonia", flag: "https://flagcdn.com/w160/ee.png", portal: "eesti.ee", url: "https://www.eesti.ee", desc: "e-Estonia State Portal" },
                    { name: "Latvia", flag: "https://flagcdn.com/w160/lv.png", portal: "latvija.gov.lv", url: "https://latvija.gov.lv", desc: "State Administration Services" },
                    { name: "Lithuania", flag: "https://flagcdn.com/w160/lt.png", portal: "lrv.lt", url: "https://lrv.lt", desc: "Government of Lithuania" },
                    { name: "Russia", flag: "https://flagcdn.com/w160/ru.png", portal: "government.ru", url: "http://government.ru", desc: "The Russian Government" },
                    { name: "Ukraine", flag: "https://flagcdn.com/w160/ua.png", portal: "kmu.gov.ua", url: "https://www.kmu.gov.ua", desc: "Cabinet of Ministers of Ukraine" },
                    { name: "Poland", flag: "https://flagcdn.com/w160/pl.png", portal: "gov.pl", url: "https://www.gov.pl", desc: "Service of the Republic of Poland" },
                    { name: "Romania", flag: "https://flagcdn.com/w160/ro.png", portal: "gov.ro", url: "https://www.gov.ro", desc: "Guvernul României Portal" },
                    { name: "Czech Republic", flag: "https://flagcdn.com/w160/cz.png", portal: "vlada.cz", url: "https://www.vlada.cz", desc: "Government of the Czech Republic" },
                    { name: "Hungary", flag: "https://flagcdn.com/w160/hu.png", portal: "kormany.hu", url: "https://kormany.hu", desc: "Website of the Hungarian Govt" },
                    { name: "Belarus", flag: "https://flagcdn.com/w160/by.png", portal: "government.by", url: "http://www.government.by", desc: "Council of Ministers of Belarus" },
                    { name: "Bulgaria", flag: "https://flagcdn.com/w160/bg.png", portal: "gov.bg", url: "https://www.gov.bg", desc: "Council of Ministers of Bulgaria" },
                    { name: "Slovakia", flag: "https://flagcdn.com/w160/sk.png", portal: "vlada.gov.sk", url: "https://www.vlada.gov.sk", desc: "Government Office of Slovakia" },
                    { name: "Croatia", flag: "https://flagcdn.com/w160/hr.png", portal: "vlada.gov.hr", url: "https://vlada.gov.hr", desc: "Government of Croatia" },
                    { name: "Serbia", flag: "https://flagcdn.com/w160/rs.png", portal: "srbija.gov.rs", url: "https://www.srbija.gov.rs", desc: "Government of the Republic of Serbia" },
                    { name: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w160/ba.png", portal: "vijeceministara.gov.ba", url: "http://www.vijeceministara.gov.ba", desc: "Council of Ministers BiH" },
                    { name: "Albania", flag: "https://flagcdn.com/w160/al.png", portal: "kryeministria.al", url: "https://www.kryeministria.al", desc: "Prime Minister's Office Albania" },
                    { name: "North Macedonia", flag: "https://flagcdn.com/w160/mk.png", portal: "vlada.mk", url: "https://vlada.mk", desc: "Government of North Macedonia" },
                    { name: "Slovenia", flag: "https://flagcdn.com/w160/si.png", portal: "gov.si", url: "https://www.gov.si", desc: "Portal GOV.SI Slovenia" },
                    { name: "Montenegro", flag: "https://flagcdn.com/w160/me.png", portal: "gov.me", url: "https://www.gov.me", desc: "Government of Montenegro" },
                    { name: "Kosovo", flag: "https://flagcdn.com/w160/xk.png", portal: "rks-gov.net", url: "https://www.rks-gov.net", desc: "Republic of Kosovo State Portal" }
                ]
            },
            {
                region: "North & Central America & Caribbean",
                countries: [
                    { name: "United States (USA)", flag: "https://flagcdn.com/w160/us.png", portal: "usa.gov", url: "https://www.usa.gov", desc: "Official Guide to US Govt Info" },
                    { name: "Canada", flag: "https://flagcdn.com/w160/ca.png", portal: "canada.ca", url: "https://www.canada.ca", desc: "Official Website of Govt of Canada" },
                    { name: "Mexico", flag: "https://flagcdn.com/w160/mx.png", portal: "gob.mx", url: "https://www.gob.mx", desc: "Portal Único del Gobierno de México" },
                    { name: "Panama", flag: "https://flagcdn.com/w160/pa.png", portal: "panamadigital.gob.pa", url: "https://www.panamadigital.gob.pa", desc: "Panamá Digital Services" },
                    { name: "Costa Rica", flag: "https://flagcdn.com/w160/cr.png", portal: "presidencia.go.cr", url: "https://www.presidencia.go.cr", desc: "Gobierno de Costa Rica" },
                    { name: "Nicaragua", flag: "https://flagcdn.com/w160/ni.png", portal: "presidencia.gob.ni", url: "https://www.presidencia.gob.ni", desc: "Gobierno de Nicaragua" },
                    { name: "Honduras", flag: "https://flagcdn.com/w160/hn.png", portal: "gob.hn", url: "https://www.gob.hn", desc: "Gobierno de la República Honduras" },
                    { name: "El Salvador", flag: "https://flagcdn.com/w160/sv.png", portal: "presidencia.gob.sv", url: "https://www.presidencia.gob.sv", desc: "Gobierno de El Salvador" },
                    { name: "Guatemala", flag: "https://flagcdn.com/w160/gt.png", portal: "guatemala.gob.gt", url: "https://guatemala.gob.gt", desc: "Gobierno de Guatemala" },
                    { name: "Belize", flag: "https://flagcdn.com/w160/bz.png", portal: "pressoffice.gov.bz", url: "https://www.pressoffice.gov.bz", desc: "Government of Belize Press" },
                    { name: "Cuba", flag: "https://flagcdn.com/w160/cu.png", portal: "presidencia.gob.cu", url: "https://www.presidencia.gob.cu", desc: "Presidencia de Cuba" },
                    { name: "Jamaica", flag: "https://flagcdn.com/w160/jm.png", portal: "gov.jm", url: "https://www.gov.jm", desc: "Government of Jamaica Portal" },
                    { name: "Haiti", flag: "https://flagcdn.com/w160/ht.png", portal: "primature.gouv.ht", url: "https://www.primature.gouv.ht", desc: "Gouvernement de la République d'Haïti" },
                    { name: "Dominican Republic", flag: "https://flagcdn.com/w160/do.png", portal: "gob.do", url: "https://www.gob.do", desc: "Portal Único Dominicano" },
                    { name: "Bahamas", flag: "https://flagcdn.com/w160/bs.png", portal: "bahamas.gov.bs", url: "https://www.bahamas.gov.bs", desc: "Government of The Bahamas" },
                    { name: "Barbados", flag: "https://flagcdn.com/w160/bb.png", portal: "gov.bb", url: "https://www.gov.bb", desc: "Barbados Government Info Service" },
                    { name: "Trinidad and Tobago", flag: "https://flagcdn.com/w160/tt.png", portal: "ttconnect.gov.tt", url: "https://www.ttconnect.gov.tt", desc: "Trinidad & Tobago e-Services" },
                    { name: "Saint Lucia", flag: "https://flagcdn.com/w160/lc.png", portal: "govt.lc", url: "https://www.govt.lc", desc: "Government of Saint Lucia" },
                    { name: "Grenada", flag: "https://flagcdn.com/w160/gd.png", portal: "gov.gd", url: "https://www.gov.gd", desc: "Official Portal of Grenada" },
                    { name: "Dominica", flag: "https://flagcdn.com/w160/dm.png", portal: "dominica.gov.dm", url: "https://dominica.gov.dm", desc: "Government of Dominica" },
                    { name: "Antigua and Barbuda", flag: "https://flagcdn.com/w160/ag.png", portal: "ab.gov.ag", url: "https://ab.gov.ag", desc: "Government of Antigua & Barbuda" },
                    { name: "Saint Vincent and the Grenadines", flag: "https://flagcdn.com/w160/vc.png", portal: "gov.vc", url: "https://www.gov.vc", desc: "Government of St. Vincent" },
                    { name: "Saint Kitts and Nevis", flag: "https://flagcdn.com/w160/kn.png", portal: "gov.kn", url: "https://www.gov.kn", desc: "St. Kitts & Nevis Information" }
                ]
            },
            {
                region: "South American Countries",
                countries: [
                    { name: "Brazil", flag: "https://flagcdn.com/w160/br.png", portal: "gov.br", url: "https://www.gov.br", desc: "Portal Oficial do Governo do Brasil" },
                    { name: "Argentina", flag: "https://flagcdn.com/w160/ar.png", portal: "argentina.gob.ar", url: "https://www.argentina.gob.ar", desc: "Sitio Oficial de Argentina" },
                    { name: "Colombia", flag: "https://flagcdn.com/w160/co.png", portal: "gov.co", url: "https://www.gov.co", desc: "Portal Único del Estado Colombiano" },
                    { name: "Chile", flag: "https://flagcdn.com/w160/cl.png", portal: "gob.cl", url: "https://www.gob.cl", desc: "Gobierno de Chile" },
                    { name: "Peru", flag: "https://flagcdn.com/w160/pe.png", portal: "gob.pe", url: "https://www.gob.pe", desc: "Plataforma Digital Única del Perú" },
                    { name: "Venezuela", flag: "https://flagcdn.com/w160/ve.png", portal: "gob.ve", url: "http://www.gob.ve", desc: "Gobierno Bolivariano de Venezuela" },
                    { name: "Ecuador", flag: "https://flagcdn.com/w160/ec.png", portal: "gob.ec", url: "https://www.gob.ec", desc: "Portal Único de Trámites Ecuador" },
                    { name: "Bolivia", flag: "https://flagcdn.com/w160/bo.png", portal: "gob.bo", url: "https://www.gob.bo", desc: "Portal del Estado Plurinacional" },
                    { name: "Paraguay", flag: "https://flagcdn.com/w160/py.png", portal: "paraguay.gov.py", url: "https://www.paraguay.gov.py", desc: "Portal Oficial del Paraguay" },
                    { name: "Uruguay", flag: "https://flagcdn.com/w160/uy.png", portal: "gub.uy", url: "https://www.gub.uy", desc: "Portal del Estado Uruguayo" },
                    { name: "Guyana", flag: "https://flagcdn.com/w160/gy.png", portal: "dpi.gov.gy", url: "https://dpi.gov.gy", desc: "Department of Public Info Guyana" },
                    { name: "Suriname", flag: "https://flagcdn.com/w160/sr.png", portal: "gov.sr", url: "https://gov.sr", desc: "Overheid van de Republiek Suriname" }
                ]
            },
            {
                region: "African Countries",
                countries: [
                    { name: "Morocco", flag: "https://flagcdn.com/w160/ma.png", portal: "maroc.ma", url: "https://www.maroc.ma", desc: "Portail National du Maroc" },
                    { name: "Algeria", flag: "https://flagcdn.com/w160/dz.png", portal: "cg.gov.dz", url: "https://www.cg.gov.dz", desc: "Portail du Premier Ministre Algérie" },
                    { name: "Tunisia", flag: "https://flagcdn.com/w160/tn.png", portal: "tunisie.gov.tn", url: "http://www.tunisie.gov.tn", desc: "Portail du Gouvernement Tunisien" },
                    { name: "Libya", flag: "https://flagcdn.com/w160/ly.png", portal: "pm.gov.ly", url: "https://pm.gov.ly", desc: "Government of National Unity Libya" },
                    { name: "Sudan", flag: "https://flagcdn.com/w160/sd.png", portal: "sudan.gov.sd", url: "http://www.sudan.gov.sd", desc: "Republic of the Sudan Portal" },
                    { name: "Nigeria", flag: "https://flagcdn.com/w160/ng.png", portal: "nigeria.gov.ng", url: "https://nigeria.gov.ng", desc: "Federal Republic of Nigeria Portal" },
                    { name: "Ghana", flag: "https://flagcdn.com/w160/gh.png", portal: "ghana.gov.gh", url: "https://www.ghana.gov.gh", desc: "Government of Ghana Services" },
                    { name: "Senegal", flag: "https://flagcdn.com/w160/sn.png", portal: "sec.gouv.sn", url: "https://www.sec.gouv.sn", desc: "Gouvernement du Sénégal" },
                    { name: "Ivory Coast (Côte d'Ivoire)", flag: "https://flagcdn.com/w160/ci.png", portal: "gouv.ci", url: "https://www.gouv.ci", desc: "Portail Officiel Côte d'Ivoire" },
                    { name: "Mali", flag: "https://flagcdn.com/w160/ml.png", portal: "primature.ml", url: "https://www.primature.ml", desc: "Primature de la République du Mali" },
                    { name: "Niger", flag: "https://flagcdn.com/w160/ne.png", portal: "presidence.ne", url: "https://www.presidence.ne", desc: "Présidence de la République du Niger" },
                    { name: "Guinea", flag: "https://flagcdn.com/w160/gn.png", portal: "gouvernement.gov.gn", url: "https://gouvernement.gov.gn", desc: "Gouvernement de la Guinée" },
                    { name: "Sierra Leone", flag: "https://flagcdn.com/w160/sl.png", portal: "statehouse.gov.sl", url: "https://statehouse.gov.sl", desc: "State House Sierra Leone" },
                    { name: "Liberia", flag: "https://flagcdn.com/w160/lr.png", portal: "emansion.gov.lr", url: "https://www.emansion.gov.lr", desc: "Executive Mansion of Liberia" },
                    { name: "Kenya", flag: "https://flagcdn.com/w160/ke.png", portal: "ecitizen.go.ke", url: "https://www.ecitizen.go.ke", desc: "Kenya eCitizen Digital Services" },
                    { name: "Ethiopia", flag: "https://flagcdn.com/w160/et.png", portal: "pmo.gov.et", url: "https://www.pmo.gov.et", desc: "Office of the Prime Minister" },
                    { name: "Tanzania", flag: "https://flagcdn.com/w160/tz.png", portal: "tanzania.go.tz", url: "https://www.tanzania.go.tz", desc: "United Republic of Tanzania" },
                    { name: "Uganda", flag: "https://flagcdn.com/w160/ug.png", portal: "gou.go.ug", url: "https://www.gou.go.ug", desc: "Government of Uganda Portal" },
                    { name: "Somalia", flag: "https://flagcdn.com/w160/so.png", portal: "opm.gov.so", url: "https://opm.gov.so", desc: "Federal Government of Somalia" },
                    { name: "Rwanda", flag: "https://flagcdn.com/w160/rw.png", portal: "gov.rw", url: "https://www.gov.rw", desc: "Government of Rwanda Portal" },
                    { name: "Burundi", flag: "https://flagcdn.com/w160/bi.png", portal: "presidence.gov.bi", url: "https://www.presidence.gov.bi", desc: "Présidence de la République Burundi" },
                    { name: "South Sudan", flag: "https://flagcdn.com/w160/ss.png", portal: "goss.org", url: "https://www.goss.org", desc: "Government of South Sudan" },
                    { name: "Djibouti", flag: "https://flagcdn.com/w160/dj.png", portal: "presidence.dj", url: "https://www.presidence.dj", desc: "République de Djibouti" },
                    { name: "Eritrea", flag: "https://flagcdn.com/w160/er.png", portal: "shabait.com", url: "https://shabait.com", desc: "Eritrea Ministry of Information" },
                    { name: "Mauritius", flag: "https://flagcdn.com/w160/mu.png", portal: "govmu.org", url: "https://govmu.org", desc: "Republic of Mauritius Portal" },
                    { name: "Seychelles", flag: "https://flagcdn.com/w160/sc.png", portal: "egov.sc", url: "https://www.egov.sc", desc: "Seychelles Government Portal" },
                    { name: "Democratic Republic of the Congo (DRC)", flag: "https://flagcdn.com/w160/cd.png", portal: "primature.cd", url: "https://www.primature.cd", desc: "Primature de la RDC" },
                    { name: "Cameroon", flag: "https://flagcdn.com/w160/cm.png", portal: "prc.cm", url: "https://www.prc.cm", desc: "Presidency of the Republic Cameroon" },
                    { name: "Angola", flag: "https://flagcdn.com/w160/ao.png", portal: "governo.gov.ao", url: "https://governo.gov.ao", desc: "Portal Oficial do Governo de Angola" },
                    { name: "Chad", flag: "https://flagcdn.com/w160/td.png", portal: "presidence.td", url: "https://presidence.td", desc: "Présidence de la République du Tchad" },
                    { name: "Gabon", flag: "https://flagcdn.com/w160/ga.png", portal: "gouvernement.ga", url: "https://gouvernement.ga", desc: "Gouvernement de la République Gabonaise" },
                    { name: "Central African Republic", flag: "https://flagcdn.com/w160/cf.png", portal: "presidence.cf", url: "https://www.presidence.cf", desc: "Présidence de la RCA" },
                    { name: "South Africa", flag: "https://flagcdn.com/w160/za.png", portal: "gov.za", url: "https://www.gov.za", desc: "South African Government Portal" },
                    { name: "Zimbabwe", flag: "https://flagcdn.com/w160/zw.png", portal: "zim.gov.zw", url: "https://www.zim.gov.zw", desc: "Zimbabwe Government Online" },
                    { name: "Zambia", flag: "https://flagcdn.com/w160/zm.png", portal: "gov.zm", url: "https://www.gov.zm", desc: "Republic of Zambia e-Services" },
                    { name: "Namibia", flag: "https://flagcdn.com/w160/na.png", portal: "gov.na", url: "https://gov.na", desc: "Government of the Republic of Namibia" },
                    { name: "Botswana", flag: "https://flagcdn.com/w160/bw.png", portal: "gov.bw", url: "https://www.gov.bw", desc: "Government of Botswana Portal" },
                    { name: "Mozambique", flag: "https://flagcdn.com/w160/mz.png", portal: "portaldogoverno.gov.mz", url: "https://www.portaldogoverno.gov.mz", desc: "Portal do Governo de Moçambique" },
                    { name: "Madagascar", flag: "https://flagcdn.com/w160/mg.png", portal: "presidence.gov.mg", url: "https://www.presidence.gov.mg", desc: "Présidence de Madagascar" },
                    { name: "Malawi", flag: "https://flagcdn.com/w160/mw.png", portal: "malawi.gov.mw", url: "https://www.malawi.gov.mw", desc: "Government of Malawi Portal" }
                ]
            }
        ];

        // Country Dial Codes & Flags matching all provided countries
                 const countryDialCodes = [
            { name: "Afghanistan", code: "+93", flag: "https://flagcdn.com/w40/af.png" },
            { name: "Albania", code: "+355", flag: "https://flagcdn.com/w40/al.png" },
            { name: "Algeria", code: "+213", flag: "https://flagcdn.com/w40/dz.png" },
            { name: "Andorra", code: "+376", flag: "https://flagcdn.com/w40/ad.png" },
            { name: "Angola", code: "+244", flag: "https://flagcdn.com/w40/ao.png" },
            { name: "Antigua and Barbuda", code: "+1-268", flag: "https://flagcdn.com/w40/ag.png" },
            { name: "Argentina", code: "+54", flag: "https://flagcdn.com/w40/ar.png" },
            { name: "Armenia", code: "+374", flag: "https://flagcdn.com/w40/am.png" },
            { name: "Austria", code: "+43", flag: "https://flagcdn.com/w40/at.png" },
            { name: "Azerbaijan", code: "+994", flag: "https://flagcdn.com/w40/az.png" },
            { name: "Bahamas", code: "+1-242", flag: "https://flagcdn.com/w40/bs.png" },
            { name: "Bahrain", code: "+973", flag: "https://flagcdn.com/w40/bh.png" },
            { name: "Bangladesh", code: "+880", flag: "https://flagcdn.com/w40/bd.png" },
            { name: "Barbados", code: "+1-246", flag: "https://flagcdn.com/w40/bb.png" },
            { name: "Belarus", code: "+375", flag: "https://flagcdn.com/w40/by.png" },
            { name: "Belgium", code: "+32", flag: "https://flagcdn.com/w40/be.png" },
            { name: "Belize", code: "+501", flag: "https://flagcdn.com/w40/bz.png" },
            { name: "Bhutan", code: "+975", flag: "https://flagcdn.com/w40/bt.png" },
            { name: "Bolivia", code: "+591", flag: "https://flagcdn.com/w40/bo.png" },
            { name: "Bosnia and Herzegovina", code: "+387", flag: "https://flagcdn.com/w40/ba.png" },
            { name: "Botswana", code: "+267", flag: "https://flagcdn.com/w40/bw.png" },
            { name: "Brazil", code: "+55", flag: "https://flagcdn.com/w40/br.png" },
            { name: "Brunei", code: "+673", flag: "https://flagcdn.com/w40/bn.png" },
            { name: "Bulgaria", code: "+359", flag: "https://flagcdn.com/w40/bg.png" },
            { name: "Burundi", code: "+257", flag: "https://flagcdn.com/w40/bi.png" },
            { name: "Cambodia", code: "+855", flag: "https://flagcdn.com/w40/kh.png" },
            { name: "Cameroon", code: "+237", flag: "https://flagcdn.com/w40/cm.png" },
            { name: "Canada", code: "+1", flag: "https://flagcdn.com/w40/ca.png" },
            { name: "Central African Republic", code: "+236", flag: "https://flagcdn.com/w40/cf.png" },
            { name: "Chad", code: "+235", flag: "https://flagcdn.com/w40/td.png" },
            { name: "Chile", code: "+56", flag: "https://flagcdn.com/w40/cl.png" },
            { name: "China", code: "+86", flag: "https://flagcdn.com/w40/cn.png" },
            { name: "Colombia", code: "+57", flag: "https://flagcdn.com/w40/co.png" },
            { name: "Costa Rica", code: "+506", flag: "https://flagcdn.com/w40/cr.png" },
            { name: "Croatia", code: "+385", flag: "https://flagcdn.com/w40/hr.png" },
            { name: "Cuba", code: "+53", flag: "https://flagcdn.com/w40/cu.png" },
            { name: "Cyprus", code: "+357", flag: "https://flagcdn.com/w40/cy.png" },
            { name: "Czech Republic", code: "+420", flag: "https://flagcdn.com/w40/cz.png" },
            { name: "Democratic Republic of the Congo (DRC)", code: "+243", flag: "https://flagcdn.com/w40/cd.png" },
            { name: "Denmark", code: "+45", flag: "https://flagcdn.com/w40/dk.png" },
            { name: "Djibouti", code: "+253", flag: "https://flagcdn.com/w40/dj.png" },
            { name: "Dominica", code: "+1-767", flag: "https://flagcdn.com/w40/dm.png" },
            { name: "Dominican Republic", code: "+1-809", flag: "https://flagcdn.com/w40/do.png" },
            { name: "Ecuador", code: "+593", flag: "https://flagcdn.com/w40/ec.png" },
            { name: "Egypt", code: "+20", flag: "https://flagcdn.com/w40/eg.png" },
            { name: "El Salvador", code: "+503", flag: "https://flagcdn.com/w40/sv.png" },
            { name: "Eritrea", code: "+291", flag: "https://flagcdn.com/w40/er.png" },
            { name: "Estonia", code: "+372", flag: "https://flagcdn.com/w40/ee.png" },
            { name: "Ethiopia", code: "+251", flag: "https://flagcdn.com/w40/et.png" },
            { name: "Finland", code: "+358", flag: "https://flagcdn.com/w40/fi.png" },
            { name: "France", code: "+33", flag: "https://flagcdn.com/w40/fr.png" },
            { name: "Gabon", code: "+241", flag: "https://flagcdn.com/w40/ga.png" },
            { name: "Georgia", code: "+995", flag: "https://flagcdn.com/w40/ge.png" },
            { name: "Germany", code: "+49", flag: "https://flagcdn.com/w40/de.png" },
            { name: "Ghana", code: "+233", flag: "https://flagcdn.com/w40/gh.png" },
            { name: "Greece", code: "+30", flag: "https://flagcdn.com/w40/gr.png" },
            { name: "Grenada", code: "+1-473", flag: "https://flagcdn.com/w40/gd.png" },
            { name: "Guatemala", code: "+502", flag: "https://flagcdn.com/w40/gt.png" },
            { name: "Guinea", code: "+224", flag: "https://flagcdn.com/w40/gn.png" },
            { name: "Guyana", code: "+592", flag: "https://flagcdn.com/w40/gy.png" },
            { name: "Haiti", code: "+509", flag: "https://flagcdn.com/w40/ht.png" },
            { name: "Honduras", code: "+504", flag: "https://flagcdn.com/w40/hn.png" },
            { name: "Hungary", code: "+36", flag: "https://flagcdn.com/w40/hu.png" },
            { name: "Iceland", code: "+354", flag: "https://flagcdn.com/w40/is.png" },
            { name: "India", code: "+91", flag: "https://flagcdn.com/w40/in.png" },
            { name: "Indonesia", code: "+62", flag: "https://flagcdn.com/w40/id.png" },
            { name: "Iran", code: "+98", flag: "https://flagcdn.com/w40/ir.png" },
            { name: "Iraq", code: "+964", flag: "https://flagcdn.com/w40/iq.png" },
            { name: "Ireland", code: "+353", flag: "https://flagcdn.com/w40/ie.png" },
            { name: "Israel", code: "+972", flag: "https://flagcdn.com/w40/il.png" },
            { name: "Italy", code: "+39", flag: "https://flagcdn.com/w40/it.png" },
            { name: "Ivory Coast (Côte d'Ivoire)", code: "+225", flag: "https://flagcdn.com/w40/ci.png" },
            { name: "Jamaica", code: "+1-876", flag: "https://flagcdn.com/w40/jm.png" },
            { name: "Japan", code: "+81", flag: "https://flagcdn.com/w40/jp.png" },
            { name: "Jordan", code: "+962", flag: "https://flagcdn.com/w40/jo.png" },
            { name: "Kazakhstan", code: "+7", flag: "https://flagcdn.com/w40/kz.png" },
            { name: "Kenya", code: "+254", flag: "https://flagcdn.com/w40/ke.png" },
            { name: "Kosovo", code: "+383", flag: "https://flagcdn.com/w40/xk.png" },
            { name: "Kuwait", code: "+965", flag: "https://flagcdn.com/w40/kw.png" },
            { name: "Kyrgyzstan", code: "+996", flag: "https://flagcdn.com/w40/kg.png" },
            { name: "Laos", code: "+856", flag: "https://flagcdn.com/w40/la.png" },
            { name: "Latvia", code: "+371", flag: "https://flagcdn.com/w40/lv.png" },
            { name: "Lebanon", code: "+961", flag: "https://flagcdn.com/w40/lb.png" },
            { name: "Liberia", code: "+231", flag: "https://flagcdn.com/w40/lr.png" },
            { name: "Libya", code: "+218", flag: "https://flagcdn.com/w40/ly.png" },
            { name: "Liechtenstein", code: "+423", flag: "https://flagcdn.com/w40/li.png" },
            { name: "Lithuania", code: "+370", flag: "https://flagcdn.com/w40/lt.png" },
            { name: "Luxembourg", code: "+352", flag: "https://flagcdn.com/w40/lu.png" },
            { name: "Madagascar", code: "+261", flag: "https://flagcdn.com/w40/mg.png" },
            { name: "Malawi", code: "+265", flag: "https://flagcdn.com/w40/mw.png" },
            { name: "Malaysia", code: "+60", flag: "https://flagcdn.com/w40/my.png" },
            { name: "Maldives", code: "+960", flag: "https://flagcdn.com/w40/mv.png" },
            { name: "Mali", code: "+223", flag: "https://flagcdn.com/w40/ml.png" },
            { name: "Malta", code: "+356", flag: "https://flagcdn.com/w40/mt.png" },
            { name: "Mauritius", code: "+230", flag: "https://flagcdn.com/w40/mu.png" },
            { name: "Mexico", code: "+52", flag: "https://flagcdn.com/w40/mx.png" },
            { name: "Monaco", code: "+377", flag: "https://flagcdn.com/w40/mc.png" },
            { name: "Mongolia", code: "+976", flag: "https://flagcdn.com/w40/mn.png" },
            { name: "Montenegro", code: "+382", flag: "https://flagcdn.com/w40/me.png" },
            { name: "Morocco", code: "+212", flag: "https://flagcdn.com/w40/ma.png" },
            { name: "Mozambique", code: "+258", flag: "https://flagcdn.com/w40/mz.png" },
            { name: "Myanmar", code: "+95", flag: "https://flagcdn.com/w40/mm.png" },
            { name: "Namibia", code: "+264", flag: "https://flagcdn.com/w40/na.png" },
            { name: "Nepal", code: "+977", flag: "https://flagcdn.com/w40/np.png" },
            { name: "Netherlands", code: "+31", flag: "https://flagcdn.com/w40/nl.png" },
            { name: "Nicaragua", code: "+505", flag: "https://flagcdn.com/w40/ni.png" },
            { name: "Niger", code: "+227", flag: "https://flagcdn.com/w40/ne.png" },
            { name: "Nigeria", code: "+234", flag: "https://flagcdn.com/w40/ng.png" },
            { name: "North Korea", code: "+850", flag: "https://flagcdn.com/w40/kp.png" },
            { name: "North Macedonia", code: "+389", flag: "https://flagcdn.com/w40/mk.png" },
            { name: "Norway", code: "+47", flag: "https://flagcdn.com/w40/no.png" },
            { name: "Oman", code: "+968", flag: "https://flagcdn.com/w40/om.png" },
            { name: "Pakistan", code: "+92", flag: "https://flagcdn.com/w40/pk.png" },
            { name: "Palestine", code: "+970", flag: "https://flagcdn.com/w40/ps.png" },
            { name: "Panama", code: "+507", flag: "https://flagcdn.com/w40/pa.png" },
            { name: "Paraguay", code: "+595", flag: "https://flagcdn.com/w40/py.png" },
            { name: "Peru", code: "+51", flag: "https://flagcdn.com/w40/pe.png" },
            { name: "Philippines", code: "+63", flag: "https://flagcdn.com/w40/ph.png" },
            { name: "Poland", code: "+48", flag: "https://flagcdn.com/w40/pl.png" },
            { name: "Portugal", code: "+351", flag: "https://flagcdn.com/w40/pt.png" },
            { name: "Qatar", code: "+974", flag: "https://flagcdn.com/w40/qa.png" },
            { name: "Romania", code: "+40", flag: "https://flagcdn.com/w40/ro.png" },
            { name: "Russia", code: "+7", flag: "https://flagcdn.com/w40/ru.png" },
            { name: "Rwanda", code: "+250", flag: "https://flagcdn.com/w40/rw.png" },
            { name: "Saint Kitts and Nevis", code: "+1-869", flag: "https://flagcdn.com/w40/kn.png" },
            { name: "Saint Lucia", code: "+1-758", flag: "https://flagcdn.com/w40/lc.png" },
            { name: "Saint Vincent and the Grenadines", code: "+1-784", flag: "https://flagcdn.com/w40/vc.png" },
            { name: "San Marino", code: "+378", flag: "https://flagcdn.com/w40/sm.png" },
            { name: "Saudi Arabia", code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
            { name: "Senegal", code: "+221", flag: "https://flagcdn.com/w40/sn.png" },
            { name: "Serbia", code: "+381", flag: "https://flagcdn.com/w40/rs.png" },
            { name: "Seychelles", code: "+248", flag: "https://flagcdn.com/w40/sc.png" },
            { name: "Sierra Leone", code: "+232", flag: "https://flagcdn.com/w40/sl.png" },
            { name: "Singapore", code: "+65", flag: "https://flagcdn.com/w40/sg.png" },
            { name: "Slovakia", code: "+421", flag: "https://flagcdn.com/w40/sk.png" },
            { name: "Slovenia", code: "+386", flag: "https://flagcdn.com/w40/si.png" },
            { name: "Somalia", code: "+252", flag: "https://flagcdn.com/w40/so.png" },
            { name: "South Africa", code: "+27", flag: "https://flagcdn.com/w40/za.png" },
            { name: "South Korea", code: "+82", flag: "https://flagcdn.com/w40/kr.png" },
            { name: "South Sudan", code: "+211", flag: "https://flagcdn.com/w40/ss.png" },
            { name: "Spain", code: "+34", flag: "https://flagcdn.com/w40/es.png" },
            { name: "Sri Lanka", code: "+94", flag: "https://flagcdn.com/w40/lk.png" },
            { name: "Sudan", code: "+249", flag: "https://flagcdn.com/w40/sd.png" },
            { name: "Suriname", code: "+597", flag: "https://flagcdn.com/w40/sr.png" },
            { name: "Sweden", code: "+46", flag: "https://flagcdn.com/w40/se.png" },
            { name: "Switzerland", code: "+41", flag: "https://flagcdn.com/w40/ch.png" },
            { name: "Syria", code: "+963", flag: "https://flagcdn.com/w40/sy.png" },
            { name: "Taiwan", code: "+886", flag: "https://flagcdn.com/w40/tw.png" },
            { name: "Tajikistan", code: "+992", flag: "https://flagcdn.com/w40/tj.png" },
            { name: "Tanzania", code: "+255", flag: "https://flagcdn.com/w40/tz.png" },
            { name: "Thailand", code: "+66", flag: "https://flagcdn.com/w40/th.png" },
            { name: "Timor-Leste", code: "+670", flag: "https://flagcdn.com/w40/tl.png" },
            { name: "Trinidad and Tobago", code: "+1-868", flag: "https://flagcdn.com/w40/tt.png" },
            { name: "Tunisia", code: "+216", flag: "https://flagcdn.com/w40/tn.png" },
            { name: "Turkey", code: "+90", flag: "https://flagcdn.com/w40/tr.png" },
            { name: "Turkmenistan", code: "+993", flag: "https://flagcdn.com/w40/tm.png" },
            { name: "Uganda", code: "+256", flag: "https://flagcdn.com/w40/ug.png" },
            { name: "Ukraine", code: "+380", flag: "https://flagcdn.com/w40/ua.png" },
            { name: "United Arab Emirates (UAE)", code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
            { name: "United Kingdom (UK)", code: "+44", flag: "https://flagcdn.com/w40/gb.png" },
            { name: "United States (USA)", code: "+1", flag: "https://flagcdn.com/w40/us.png" },
            { name: "Uruguay", code: "+598", flag: "https://flagcdn.com/w40/uy.png" },
            { name: "Uzbekistan", code: "+998", flag: "https://flagcdn.com/w40/uz.png" },
            { name: "Vatican City", code: "+379", flag: "https://flagcdn.com/w40/va.png" },
            { name: "Venezuela", code: "+58", flag: "https://flagcdn.com/w40/ve.png" },
            { name: "Vietnam", code: "+84", flag: "https://flagcdn.com/w40/vn.png" },
            { name: "Yemen", code: "+967", flag: "https://flagcdn.com/w40/ye.png" },
            { name: "Zambia", code: "+260", flag: "https://flagcdn.com/w40/zm.png" },
            { name: "Zimbabwe", code: "+263", flag: "https://flagcdn.com/w40/zw.png" }
            ]

        let selectedCountryCodes = {
            reg: { code: "+880", flag: "https://flagcdn.com/w40/bd.png" },
            settings: { code: "+880", flag: "https://flagcdn.com/w40/bd.png" }
        };

        function populateCountryList(prefix, filter = '') {
            const listEl = document.getElementById(`${prefix}CountryList`);
            if (!listEl) return;
            const filtered = countryDialCodes.filter(c =>
                c.name.toLowerCase().includes(filter.toLowerCase()) ||
                c.code.includes(filter)
            );
            listEl.innerHTML = filtered.map(c => `
                <button type="button" onclick="selectCountryCode('${prefix}', '${c.code}', '${c.flag}')" class="w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-indigo-50 dark:hover:bg-slate-700 transition">
                    <span class="flex items-center space-x-2 truncate pr-2">
                        <img src="${c.flag}" alt="${c.name}" class="w-5 h-3.5 object-cover rounded-xs shrink-0" onerror="this.src='https://placehold.co/40x28/e2e8f0/475569?text=Flag'">
                        <span class="text-slate-700 dark:text-slate-200 truncate">${c.name}</span>
                    </span>
                    <span class="font-semibold text-indigo-600 dark:text-indigo-400 shrink-0">${c.code}</span>
                </button>
            `).join('');
        }

        function toggleCountryDropdown(prefix) {
            const dropdown = document.getElementById(`${prefix}CountryDropdown`);
            dropdown.classList.toggle('hidden');
            if (!dropdown.classList.contains('hidden')) {
                populateCountryList(prefix);
            }
        }

        function filterCountryList(prefix, query) {
            populateCountryList(prefix, query);
        }

        function selectCountryCode(prefix, code, flag) {
            selectedCountryCodes[prefix] = { code, flag };
            document.getElementById(`${prefix}SelectedCode`).innerText = code;
            document.getElementById(`${prefix}SelectedFlag`).src = flag;
            document.getElementById(`${prefix}CountryDropdown`).classList.add('hidden');
        }

        // Close country dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            ['reg', 'settings'].forEach(prefix => {
                const dropdown = document.getElementById(`${prefix}CountryDropdown`);
                if (dropdown && !dropdown.contains(e.target) && !e.target.closest(`button[onclick="toggleCountryDropdown('${prefix}')"]`)) {
                    dropdown.classList.add('hidden');
                }
            });
        });

        let currentFilter = 'all';
        let currentUser = JSON.parse(localStorage.getItem('edutech_user_obj')) || null;

        // Check authentication and theme state on load
        window.onload = function() {
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.getElementById('themeIcon').className = "fa-solid fa-sun text-lg text-amber-400";
            } else {
                document.documentElement.classList.remove('dark');
                document.getElementById('themeIcon').className = "fa-solid fa-moon text-lg text-slate-700";
            }

            populateCountryList('reg');
            populateCountryList('settings');
            updateAuthUI();
            renderEcommerceRows('all');
            initHeroCarousel();
        }

        // Hero Image Carousel Animation
        function initHeroCarousel() {
            const slides = document.querySelectorAll('.hero-slide');
            if (slides.length === 0) return;
            let currentSlide = 0;
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4500);
        }

        // Dark / Light Mode Toggle
        function toggleDarkMode() {
            const html = document.documentElement;
            const themeIcon = document.getElementById('themeIcon');
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                themeIcon.className = "fa-solid fa-moon text-lg text-slate-700";
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.className = "fa-solid fa-sun text-lg text-amber-400";
            }
        }

        function updateAuthUI() {
            const authBtn = document.getElementById('authBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            const userInfo = document.getElementById('userInfo');
            const userNameDisplay = document.getElementById('userNameDisplay');
            const mobileAuthBtn = document.getElementById('mobileAuthBtn');
            const mobileProfileBtn = document.getElementById('mobileProfileBtn');

            if (currentUser) {
                authBtn.classList.add('hidden');
                logoutBtn.classList.remove('hidden');
                userInfo.classList.remove('hidden');
                userNameDisplay.innerText = currentUser.name;
                if (mobileAuthBtn) mobileAuthBtn.classList.add('hidden');
                if (mobileProfileBtn) mobileProfileBtn.classList.remove('hidden');
            } else {
                authBtn.classList.remove('hidden');
                logoutBtn.classList.add('hidden');
                userInfo.classList.add('hidden');
                if (mobileAuthBtn) mobileAuthBtn.classList.remove('hidden');
                if (mobileProfileBtn) mobileProfileBtn.classList.add('hidden');
            }
        }

        function openAuthModal(mode = 'login') {
            document.getElementById('authModal').classList.remove('hidden');
            switchAuthMode(mode);
        }

        function closeAuthModal() {
            document.getElementById('authModal').classList.add('hidden');
        }

        function switchAuthMode(mode) {
            const loginTabBtn = document.getElementById('loginTabBtn');
            const registerTabBtn = document.getElementById('registerTabBtn');
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');

            if (mode === 'login') {
                loginTabBtn.className = "flex-1 py-2.5 rounded-xl text-sm font-bold transition bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm";
                registerTabBtn.className = "flex-1 py-2.5 rounded-xl text-sm font-bold transition text-slate-500 dark:text-slate-400";
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            } else {
                registerTabBtn.className = "flex-1 py-2.5 rounded-xl text-sm font-bold transition bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm";
                loginTabBtn.className = "flex-1 py-2.5 rounded-xl text-sm font-bold transition text-slate-500 dark:text-slate-400";
                registerForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
                showRegStep(1);
            }
        }

        function showRegStep(step) {
            const step1 = document.getElementById('regStep1');
            const step2 = document.getElementById('regStep2');
            const stepNum = document.getElementById('regStepNum');
            const stepTitle = document.getElementById('regStepTitle');

            if (step === 1) {
                step1.classList.remove('hidden');
                step2.classList.add('hidden');
                stepNum.innerText = "1";
                stepTitle.innerText = "Personal Info";
            } else {
                step1.classList.add('hidden');
                step2.classList.remove('hidden');
                stepNum.innerText = "2";
                stepTitle.innerText = "Security & Credentials";
            }
        }

        function nextRegStep() {
            const name = document.getElementById('regName').value.trim();
            const mobile = document.getElementById('regMobile').value.trim();
            if (!name || !mobile) {
                showCustomModal("Required Fields", "Please fill in your name and mobile number first.");
                return;
            }
            showRegStep(2);
        }

        function prevRegStep() {
            showRegStep(1);
        }

        function handleRegisterSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value.trim();
            const rawMobile = document.getElementById('regMobile').value.trim();
            const mobile = `${selectedCountryCodes.reg.code} ${rawMobile}`;
            const email = document.getElementById('regEmail').value.trim();

            currentUser = { name, mobile, dialCode: selectedCountryCodes.reg.code, flag: selectedCountryCodes.reg.flag, rawMobile, email };
            localStorage.setItem('edutech_user_obj', JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            showCustomModal("Registration Successful!", `Welcome aboard, ${name}! Your account has been created.`);
        }

        function handleLoginSubmit(e) {
            e.preventDefault();
            const identifier = document.getElementById('loginEmail').value.trim();
            currentUser = { name: identifier.split('@')[0] || 'Member', mobile: '01700000000', email: identifier };
            localStorage.setItem('edutech_user_obj', JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            showCustomModal("Login Successful", `Welcome back, ${currentUser.name}!`);
        }

        function logoutUser() {
            currentUser = null;
            localStorage.removeItem('edutech_user_obj');
            updateAuthUI();
            showCustomModal("Logged Out", "You have successfully logged out.");
        }

        function openProfileModal() {
            if (!currentUser) {
                openAuthModal('login');
                return;
            }
            document.getElementById('profileNameDisplay').innerText = currentUser.name;
            document.getElementById('profileEmailDisplay').innerText = currentUser.email || currentUser.mobile || 'No email provided';
            document.getElementById('settingsName').value = currentUser.name;
            if (currentUser.dialCode && currentUser.flag) {
                selectCountryCode('settings', currentUser.dialCode, currentUser.flag);
                document.getElementById('settingsMobile').value = currentUser.rawMobile || '';
            } else {
                document.getElementById('settingsMobile').value = currentUser.mobile || '';
            }
            document.getElementById('profileModal').classList.remove('hidden');
            switchProfileTab('settings');
        }

        function closeProfileModal() {
            document.getElementById('profileModal').classList.add('hidden');
        }

        function switchProfileTab(tab) {
            const settingsTabBtn = document.getElementById('profileTabSettings');
            const uploadTabBtn = document.getElementById('profileTabUpload');
            const settingsSec = document.getElementById('profileSettingsSection');
            const uploadSec = document.getElementById('profileUploadSection');

            if (tab === 'settings') {
                settingsTabBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold transition bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm";
                uploadTabBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold transition text-slate-500 dark:text-slate-400";
                settingsSec.classList.remove('hidden');
                uploadSec.classList.add('hidden');
            } else {
                uploadTabBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold transition bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm";
                settingsTabBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold transition text-slate-500 dark:text-slate-400";
                uploadSec.classList.remove('hidden');
                settingsSec.classList.add('hidden');
            }
        }

        function updateProfileSettings(e) {
            e.preventDefault();
            const newName = document.getElementById('settingsName').value.trim();
            const rawMobile = document.getElementById('settingsMobile').value.trim();
            const newMobile = `${selectedCountryCodes.settings.code} ${rawMobile}`;

            currentUser.name = newName;
            currentUser.mobile = newMobile;
            currentUser.dialCode = selectedCountryCodes.settings.code;
            currentUser.flag = selectedCountryCodes.settings.flag;
            currentUser.rawMobile = rawMobile;
            localStorage.setItem('edutech_user_obj', JSON.stringify(currentUser));
            updateAuthUI();
            document.getElementById('profileNameDisplay').innerText = newName;
            closeProfileModal();
            showCustomModal("Settings Updated", "Your profile settings were saved successfully.");
        }

        function handleUpload(e) {
            e.preventDefault();
            const categorySelect = document.getElementById('itemType').value;
            const pricingSelect = document.getElementById('itemPricing').value;
            const title = document.getElementById('itemTitle').value;
            const desc = document.getElementById('itemDesc').value;
            const meta = document.getElementById('itemMeta').value;
            const icon = document.getElementById('itemIcon').value;

            let isCourse = ['Web Development', 'UI/UX Design', 'Data Science', 'Cyber Security'].includes(categorySelect);
            let type = isCourse ? 'course' : 'software';
            let badge = categorySelect;
            let badgeColor = isCourse ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300';

            if (categorySelect === 'Windows') badgeColor = 'bg-blue-500 text-white';
            else if (categorySelect === 'Android') badgeColor = 'bg-emerald-500 text-white';
            else if (categorySelect === 'Apple') badgeColor = 'bg-slate-800 text-white dark:bg-slate-700';
            else if (categorySelect === 'Mac') badgeColor = 'bg-indigo-500 text-white';
            else if (categorySelect === 'Linux') badgeColor = 'bg-amber-600 text-white';
            else if (categorySelect === 'Games') badgeColor = 'bg-purple-500 text-white';
            else if (categorySelect === 'Freelancing') badgeColor = 'bg-teal-600 text-white';
            else if (categorySelect === 'Govt Services') badgeColor = 'bg-emerald-600 text-white';

            const newItem = {
                id: items.length + 1,
                type: type,
                category: categorySelect,
                pricing: pricingSelect,
                title: title,
                desc: desc,
                badge: badge,
                badgeColor: badgeColor,
                meta: meta,
                actionText: isCourse ? 'Enroll Now' : 'Download',
                icon: icon
            };

            items.unshift(newItem);
            renderEcommerceRows(currentFilter, document.getElementById('searchInput').value);
            closeProfileModal();
            document.getElementById('newItemForm').reset();
            showCustomModal("Published Successfully!", `Your item "${title}" has been added successfully.`);
        }

        // Render E-Commerce Horizontal Scrollable Rows
        function renderEcommerceRows(filter = 'all', searchQuery = '') {
            const container = document.getElementById('ecommerceRowsContainer');
            container.innerHTML = '';

            // If filter is Govt Services, render country flag cards categorized by region (Asia, Europe, Middle East)
            if (filter === 'Govt Services') {
                let htmlContent = `
                    <div class="space-y-12">
                        <div class="text-center max-w-2xl mx-auto mb-6">
                            <span class="px-4 py-1.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">International Government Portals</span>
                            <h3 class="text-3xl font-black text-slate-800 dark:text-slate-100 mt-2">Government Services & Flags by Region</h3>
                            <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Explore official government portals and digital services across Asia, Europe, and the Middle East.</p>
                        </div>
                `;

                govtServicesData.forEach(regionGroup => {
                    htmlContent += `
                        <div class="space-y-4">
                            <h4 class="text-xl font-black text-slate-800 dark:text-slate-100 flex items-center space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                                <i class="fa-solid fa-earth-asia text-emerald-600 mr-2"></i> ${regionGroup.region}
                            </h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${regionGroup.countries.map(country => `
                                    <div onclick="window.open('${country.url}', '_blank')" class="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition duration-300 flex items-center space-x-5 group cursor-pointer">
                                        <div class="shrink-0 w-20 h-14 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-slate-100">
                                            <img src="${country.flag}" alt="${country.name} Flag" class="w-full h-full object-cover group-hover:scale-110 transition duration-300" onerror="this.src='https://placehold.co/160x100/e2e8f0/475569?text=Flag'">
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <div class="flex items-center justify-between mb-1">
                                                <h5 class="text-base font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-emerald-600 transition">${country.name}</h5>
                                                <i class="fa-solid fa-external-link-alt text-xs text-slate-400 group-hover:text-emerald-600 transition"></i>
                                            </div>
                                            <p class="text-indigo-600 dark:text-indigo-400 font-semibold text-xs truncate mb-1">${country.portal}</p>
                                            <p class="text-slate-600 dark:text-slate-400 text-xs line-clamp-1">${country.desc}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                });

                htmlContent += `</div>`;
                container.innerHTML = htmlContent;
                return;
            }

            const categories = filter === 'all' 
                ? ['Windows', 'Android', 'Apple', 'Mac', 'Linux', 'Games', 'Freelancing', 'Web Development', 'UI/UX Design', 'Data Science', 'Cyber Security']
                : [filter];

            let totalRendered = 0;

            categories.forEach(cat => {
                let catItems = items.filter(item => {
                    let matchesCategory = item.category === cat || (filter === 'course' && item.type === 'course') || (filter === 'software' && item.type === 'software');
                    if (filter === 'all' || filter === 'course' || filter === 'software') {
                        matchesCategory = item.category === cat;
                        if (filter === 'course') matchesCategory = item.type === 'course' && item.category === cat;
                        if (filter === 'software') matchesCategory = item.type === 'software' && item.category === cat;
                    }

                    let matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        item.category.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCategory && matchesSearch;
                });

                if (catItems.length === 0 && filter !== 'all') {
                    // Try matching by type if category doesn't match directly
                    catItems = items.filter(item => item.type === filter || item.category === filter);
                }

                if (catItems.length === 0) return;
                totalRendered += catItems.length;

                const rowDiv = document.createElement('div');
                rowDiv.className = "space-y-4";
                rowDiv.innerHTML = `
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 class="text-xl font-black text-slate-800 dark:text-slate-100 flex items-center space-x-2">
                            <i class="fa-solid fa-layer-group text-indigo-600 mr-2"></i> ${cat} Collection
                        </h4>
                        <span class="text-xs font-semibold px-3 py-1 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-full">${catItems.length} items</span>
                    </div>
                    <div class="flex overflow-x-auto space-x-6 pb-6 pt-2 scrollbar-thin scrollbar-thumb-indigo-500">
                        ${catItems.map(item => `
                            <div class="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition duration-300 flex flex-col justify-between group shrink-0">
                                <div>
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition">
                                            <i class="fa-solid ${item.icon || 'fa-code'}"></i>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <span class="px-3 py-1 text-xs font-bold rounded-full ${item.pricing === 'Free' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}">${item.pricing}</span>
                                            <span class="px-3 py-1 text-xs font-semibold rounded-full ${item.badgeColor}">${item.badge}</span>
                                        </div>
                                    </div>
                                    <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition line-clamp-1">${item.title}</h4>
                                    <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">${item.desc}</p>
                                </div>
                                <div>
                                    <div class="text-xs text-slate-400 dark:text-slate-500 mb-4 font-medium"><i class="fa-solid fa-circle-info mr-1"></i> ${item.meta}</div>
                                    <button onclick="triggerAction('${item.title}', '${item.type}')" class="w-full py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-100 dark:border-slate-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition duration-300 flex items-center justify-center space-x-2 shadow-sm cursor-pointer">
                                        <i class="fa-solid ${item.type === 'software' ? 'fa-download' : 'fa-arrow-right'}"></i>
                                        <span>${item.actionText}</span>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                container.appendChild(rowDiv);
            });

            if (totalRendered === 0) {
                container.innerHTML = `
                    <div class="text-center py-16">
                        <i class="fa-solid fa-box-open text-5xl text-slate-300 dark:text-slate-700 mb-4"></i>
                        <p class="text-slate-500 dark:text-slate-400 text-lg">No matching courses or softwares found.</p>
                    </div>
                `;
            }
        }

        // Toggle Mobile Menu Drawer
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Filter Selection
        function filterSelection(category) {
            currentFilter = category;
            
            const titleEl = document.getElementById('currentCategoryTitle');
            if (category === 'all') titleEl.innerText = "E-Commerce Category Showcase";
            else if (category === 'course') titleEl.innerText = "All Courses Showcase";
            else if (category === 'software') titleEl.innerText = "All Operating System Software & Games Rows";
            else titleEl.innerText = `${category} Row Showcase`;

            const searchQuery = document.getElementById('searchInput').value;
            renderEcommerceRows(category, searchQuery);
            
            document.getElementById('items-section').scrollIntoView({ behavior: 'smooth' });
        }

        // Search Items
        function searchItems() {
            const query = document.getElementById('searchInput').value;
            renderEcommerceRows(currentFilter, query);
        }

        // Trigger Action Modal
        function triggerAction(title, type) {
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');
            const modalIcon = document.getElementById('modalIcon');

            if (type === 'software') {
                modalTitle.innerText = "Download Started!";
                modalDesc.innerText = `Your download for "${title}" has begun successfully.`;
                modalIcon.className = "w-16 h-16 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl";
                modalIcon.innerHTML = '<i class="fa-solid fa-download"></i>';
            } else {
                modalTitle.innerText = "Congratulations!";
                modalDesc.innerText = `You have successfully enrolled in "${title}".`;
                modalIcon.className = "w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl";
                modalIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
            }

            document.getElementById('actionModal').classList.remove('hidden');
        }

        function showCustomModal(title, desc) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDesc').innerText = desc;
            document.getElementById('modalIcon').className = "w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl";
            document.getElementById('modalIcon').innerHTML = '<i class="fa-solid fa-check"></i>';
            document.getElementById('actionModal').classList.remove('hidden');
        }

        // Close Modal
        function closeModal() {
            document.getElementById('actionModal').classList.add('hidden');
        }
