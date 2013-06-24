var Countries = (function () {
    var list = [
        {
            "abr": "AN",
            "country": "Andorra",
            "capital": "Andorra la Vella",
            "FIELD4": ""
        },
        {
            "abr": "AE",
            "country": "United Arab Emirates",
            "capital": "Abu Dhabi",
            "FIELD4": ""
        },
        {
            "abr": "AF",
            "country": "Afghanistan",
            "capital": "Kabul",
            "FIELD4": ""
        },
        {
            "abr": "AC",
            "country": "Antigua and Barbuda",
            "capital": "St. John's",
            "FIELD4": ""
        },
        {
            "abr": "AV",
            "country": "Anguilla",
            "capital": "The Valley",
            "FIELD4": ""
        },
        {
            "abr": "AL",
            "country": "Albania",
            "capital": "Tirana",
            "FIELD4": ""
        },
        {
            "abr": "AM",
            "country": "Armenia",
            "capital": "Yerevan",
            "FIELD4": ""
        },
        {
            "abr": "NT",
            "country": "",
            "capital": "Willemstad",
            "FIELD4": ""
        },
        {
            "abr": "AO",
            "country": "Angola",
            "capital": "Luanda",
            "FIELD4": ""
        },
        {
            "abr": "AY",
            "country": "Antarctica",
            "capital": "",
            "FIELD4": ""
        },
        {
            "abr": "AR",
            "country": "Argentina",
            "capital": "Buenos Aires",
            "FIELD4": ""
        },
        {
            "abr": "AQ",
            "country": "American Samoa",
            "capital": "Pago Pago",
            "FIELD4": ""
        },
        {
            "abr": "AU",
            "country": "Austria",
            "capital": "Vienna",
            "FIELD4": ""
        },
        {
            "abr": "AS",
            "country": "Australia",
            "capital": "Canberra",
            "FIELD4": ""
        },
        {
            "abr": "AA",
            "country": "Aruba",
            "capital": "Oranjestad",
            "FIELD4": ""
        },
        {
            "abr": "",
            "country": "Åland",
            "capital": "Mariehamn",
            "FIELD4": ""
        },
        {
            "abr": "AJ",
            "country": "Azerbaijan",
            "capital": "Baku",
            "FIELD4": ""
        },
        {
            "abr": "BK",
            "country": "Bosnia and Herzegovina",
            "capital": "Sarajevo",
            "FIELD4": ""
        },
        {
            "abr": "BB",
            "country": "Barbados",
            "capital": "Bridgetown",
            "FIELD4": ""
        },
        {
            "abr": "BG",
            "country": "Bangladesh",
            "capital": "Dhaka",
            "FIELD4": ""
        },
        {
            "abr": "BE",
            "country": "Belgium",
            "capital": "Brussels",
            "FIELD4": ""
        },
        {
            "abr": "UV",
            "country": "Burkina Faso",
            "capital": "Ouagadougou",
            "FIELD4": ""
        },
        {
            "abr": "BU",
            "country": "Bulgaria",
            "capital": "Sofia",
            "FIELD4": ""
        },
        {
            "abr": "BA",
            "country": "Bahrain",
            "capital": "Manama",
            "FIELD4": ""
        },
        {
            "abr": "BY",
            "country": "Burundi",
            "capital": "Bujumbura",
            "FIELD4": ""
        },
        {
            "abr": "BN",
            "country": "Benin",
            "capital": "Porto-Novo",
            "FIELD4": ""
        },
        {
            "abr": "TB",
            "country": "Saint Barthélemy",
            "capital": "Gustavia",
            "FIELD4": ""
        },
        {
            "abr": "BD",
            "country": "Bermuda",
            "capital": "Hamilton",
            "FIELD4": ""
        },
        {
            "abr": "BX",
            "country": "Brunei",
            "capital": "Bandar Seri Begawan",
            "FIELD4": ""
        },
        {
            "abr": "BL",
            "country": "Bolivia",
            "capital": "Sucre",
            "FIELD4": ""
        },
        {
            "abr": "",
            "country": "Bonaire",
            "capital": "",
            "FIELD4": ""
        },
        {
            "abr": "BR",
            "country": "Brazil",
            "capital": "Brasilia",
            "FIELD4": ""
        },
        {
            "abr": "BF",
            "country": "Bahamas",
            "capital": "Nassau",
            "FIELD4": ""
        },
        {
            "abr": "BT",
            "country": "Bhutan",
            "capital": "Thimphu",
            "FIELD4": ""
        },
        {
            "abr": "BV",
            "country": "Bouvet Island",
            "capital": "",
            "FIELD4": ""
        },
        {
            "abr": "BC",
            "country": "Botswana",
            "capital": "Gaborone",
            "FIELD4": ""
        },
        {
            "abr": "BO",
            "country": "Belarus",
            "capital": "Minsk",
            "FIELD4": ""
        },
        {
            "abr": "BH",
            "country": "Belize",
            "capital": "Belmopan",
            "FIELD4": ""
        },
        {
            "abr": "CA",
            "country": "Canada",
            "capital": "Ottawa",
            "FIELD4": ""
        },
        {
            "abr": "CK",
            "country": "Cocos [Keeling] Islands",
            "capital": "West Island",
            "FIELD4": ""
        },
        {
            "abr": "CG",
            "country": "Democratic Republic of the Congo",
            "capital": "Kinshasa",
            "FIELD4": ""
        },
        {
            "abr": "CT",
            "country": "Central African Republic",
            "capital": "Bangui",
            "FIELD4": ""
        },
        {
            "abr": "CF",
            "country": "Republic of the Congo",
            "capital": "Brazzaville",
            "FIELD4": ""
        },
        {
            "abr": "SZ",
            "country": "Switzerland",
            "capital": "Berne",
            "FIELD4": ""
        },
        {
            "abr": "IV",
            "country": "Ivory Coast",
            "capital": "Yamoussoukro",
            "FIELD4": ""
        },
        {
            "abr": "CW",
            "country": "Cook Islands",
            "capital": "Avarua",
            "FIELD4": ""
        },
        {
            "abr": "CI",
            "country": "Chile",
            "capital": "Santiago",
            "FIELD4": ""
        },
        {
            "abr": "CM",
            "country": "Cameroon",
            "capital": "Yaounde",
            "FIELD4": "AS"
        },
        {
            "abr": "CH",
            "country": "China",
            "capital": "Beijing",
            "FIELD4": ""
        },
        {
            "abr": "CO",
            "country": "Colombia",
            "capital": "Bogota",
            "FIELD4": ""
        },
        {
            "abr": "CS",
            "country": "Costa Rica",
            "capital": "San Jose",
            "FIELD4": ""
        },
        {
            "abr": "YI",
            "country": "",
            "capital": "Belgrade",
            "FIELD4": ""
        },
        {
            "abr": "CU",
            "country": "Cuba",
            "capital": "Havana",
            "FIELD4": ""
        },
        {
            "abr": "CV",
            "country": "Cape Verde",
            "capital": "Praia",
            "FIELD4": ""
        },
        {
            "abr": "UC",
            "country": "Curacao",
            "capital": "Willemstad",
            "FIELD4": ""
        },
        {
            "abr": "KT",
            "country": "Christmas Island",
            "capital": "Flying Fish Cove",
            "FIELD4": ""
        },
        {
            "abr": "CY",
            "country": "Cyprus",
            "capital": "Nicosia",
            "FIELD4": ""
        },
        {
            "abr": "EZ",
            "country": "Czechia",
            "capital": "Prague",
            "FIELD4": ""
        },
        {
            "abr": "GM",
            "country": "Germany",
            "capital": "Berlin",
            "FIELD4": ""
        },
        {
            "abr": "DJ",
            "country": "Djibouti",
            "capital": "Djibouti",
            "FIELD4": ""
        },
        {
            "abr": "DA",
            "country": "Denmark",
            "capital": "Copenhagen",
            "FIELD4": ""
        },
        {
            "abr": "DO",
            "country": "Dominica",
            "capital": "Roseau",
            "FIELD4": ""
        },
        {
            "abr": "DR",
            "country": "Dominican Republic",
            "capital": "Santo Domingo",
            "FIELD4": ""
        },
        {
            "abr": "AG",
            "country": "Algeria",
            "capital": "Algiers",
            "FIELD4": ""
        },
        {
            "abr": "EC",
            "country": "Ecuador",
            "capital": "Quito",
            "FIELD4": ""
        },
        {
            "abr": "EN",
            "country": "Estonia",
            "capital": "Tallinn",
            "FIELD4": ""
        },
        {
            "abr": "EG",
            "country": "Egypt",
            "capital": "Cairo",
            "FIELD4": ""
        },
        {
            "abr": "WI",
            "country": "Western Sahara",
            "capital": "El-Aaiun",
            "FIELD4": ""
        },
        {
            "abr": "ER",
            "country": "Eritrea",
            "capital": "Asmara",
            "FIELD4": ""
        },
        {
            "abr": "SP",
            "country": "Spain",
            "capital": "Madrid",
            "FIELD4": ""
        },
        {
            "abr": "ET",
            "country": "Ethiopia",
            "capital": "Addis Ababa",
            "FIELD4": ""
        },
        {
            "abr": "FI",
            "country": "Finland",
            "capital": "Helsinki",
            "FIELD4": ""
        },
        {
            "abr": "FJ",
            "country": "Fiji",
            "capital": "Suva",
            "FIELD4": ""
        },
        {
            "abr": "FK",
            "country": "Falkland Islands",
            "capital": "Stanley",
            "FIELD4": ""
        },
        {
            "abr": "FM",
            "country": "Micronesia",
            "capital": "Palikir",
            "FIELD4": ""
        },
        {
            "abr": "FO",
            "country": "Faroe Islands",
            "capital": "Torshavn",
            "FIELD4": ""
        },
        {
            "abr": "FR",
            "country": "France",
            "capital": "Paris",
            "FIELD4": ""
        },
        {
            "abr": "GB",
            "country": "Gabon",
            "capital": "Libreville",
            "FIELD4": ""
        },
        {
            "abr": "UK",
            "country": "United Kingdom",
            "capital": "London",
            "FIELD4": ""
        },
        {
            "abr": "GJ",
            "country": "Grenada",
            "capital": "St. George's",
            "FIELD4": ""
        },
        {
            "abr": "GG",
            "country": "Georgia",
            "capital": "Tbilisi",
            "FIELD4": ""
        },
        {
            "abr": "FG",
            "country": "French Guiana",
            "capital": "Cayenne",
            "FIELD4": ""
        },
        {
            "abr": "GK",
            "country": "Guernsey",
            "capital": "St Peter Port",
            "FIELD4": ""
        },
        {
            "abr": "GH",
            "country": "Ghana",
            "capital": "Accra",
            "FIELD4": ""
        },
        {
            "abr": "GI",
            "country": "Gibraltar",
            "capital": "Gibraltar",
            "FIELD4": ""
        },
        {
            "abr": "GL",
            "country": "Greenland",
            "capital": "Nuuk",
            "FIELD4": ""
        },
        {
            "abr": "GA",
            "country": "Gambia",
            "capital": "Banjul",
            "FIELD4": ""
        },
        {
            "abr": "GV",
            "country": "Guinea",
            "capital": "Conakry",
            "FIELD4": ""
        },
        {
            "abr": "GP",
            "country": "Guadeloupe",
            "capital": "Basse-Terre",
            "FIELD4": ""
        },
        {
            "abr": "EK",
            "country": "Equatorial Guinea",
            "capital": "Malabo",
            "FIELD4": ""
        },
        {
            "abr": "GR",
            "country": "Greece",
            "capital": "Athens",
            "FIELD4": ""
        },
        {
            "abr": "SX",
            "country": "South Georgia and the South Sandwich Islands",
            "capital": "Grytviken",
            "FIELD4": ""
        },
        {
            "abr": "GT",
            "country": "Guatemala",
            "capital": "Guatemala City",
            "FIELD4": ""
        },
        {
            "abr": "GQ",
            "country": "Guam",
            "capital": "Hagatna",
            "FIELD4": ""
        },
        {
            "abr": "PU",
            "country": "Guinea-Bissau",
            "capital": "Bissau",
            "FIELD4": ""
        },
        {
            "abr": "GY",
            "country": "Guyana",
            "capital": "Georgetown",
            "FIELD4": ""
        },
        {
            "abr": "HK",
            "country": "Hong Kong",
            "capital": "Hong Kong",
            "FIELD4": ""
        },
        {
            "abr": "HM",
            "country": "Heard Island and McDonald Islands",
            "capital": "",
            "FIELD4": ""
        },
        {
            "abr": "HO",
            "country": "Honduras",
            "capital": "Tegucigalpa",
            "FIELD4": ""
        },
        {
            "abr": "HR",
            "country": "Croatia",
            "capital": "Zagreb",
            "FIELD4": ""
        },
        {
            "abr": "HA",
            "country": "Haiti",
            "capital": "Port-au-Prince",
            "FIELD4": ""
        },
        {
            "abr": "HU",
            "country": "Hungary",
            "capital": "Budapest",
            "FIELD4": ""
        },
        {
            "abr": "ID",
            "country": "Indonesia",
            "capital": "Jakarta",
            "FIELD4": ""
        },
        {
            "abr": "EI",
            "country": "Ireland",
            "capital": "Dublin",
            "FIELD4": ""
        },
        {
            "abr": "IS",
            "country": "Israel",
            "capital": "Jerusalem",
            "FIELD4": ""
        },
        {
            "abr": "IM",
            "country": "Isle of Man",
            "capital": "Douglas",
            "FIELD4": "AS"
        },
        {
            "abr": "IN",
            "country": "India",
            "capital": "New Delhi",
            "FIELD4": ""
        },
        {
            "abr": "IO",
            "country": "British Indian Ocean Territory",
            "capital": "Diego Garcia",
            "FIELD4": ""
        },
        {
            "abr": "IZ",
            "country": "Iraq",
            "capital": "Baghdad",
            "FIELD4": ""
        },
        {
            "abr": "IR",
            "country": "Iran",
            "capital": "Tehran",
            "FIELD4": ""
        },
        {
            "abr": "IC",
            "country": "Iceland",
            "capital": "Reykjavik",
            "FIELD4": ""
        },
        {
            "abr": "IT",
            "country": "Italy",
            "capital": "Rome",
            "FIELD4": ""
        },
        {
            "abr": "JE",
            "country": "Jersey",
            "capital": "Saint Helier",
            "FIELD4": ""
        },
        {
            "abr": "JM",
            "country": "Jamaica",
            "capital": "Kingston",
            "FIELD4": ""
        },
        {
            "abr": "JO",
            "country": "Jordan",
            "capital": "Amman",
            "FIELD4": ""
        },
        {
            "abr": "JA",
            "country": "Japan",
            "capital": "Tokyo",
            "FIELD4": ""
        },
        {
            "abr": "KE",
            "country": "Kenya",
            "capital": "Nairobi",
            "FIELD4": ""
        },
        {
            "abr": "KG",
            "country": "Kyrgyzstan",
            "capital": "Bishkek",
            "FIELD4": ""
        },
        {
            "abr": "CB",
            "country": "Cambodia",
            "capital": "Phnom Penh",
            "FIELD4": ""
        },
        {
            "abr": "KR",
            "country": "Kiribati",
            "capital": "Tarawa",
            "FIELD4": ""
        },
        {
            "abr": "CN",
            "country": "Comoros",
            "capital": "Moroni",
            "FIELD4": ""
        },
        {
            "abr": "SC",
            "country": "Saint Kitts and Nevis",
            "capital": "Basseterre",
            "FIELD4": ""
        },
        {
            "abr": "KN",
            "country": "North Korea",
            "capital": "Pyongyang",
            "FIELD4": ""
        },
        {
            "abr": "KS",
            "country": "South Korea",
            "capital": "Seoul",
            "FIELD4": ""
        },
        {
            "abr": "KU",
            "country": "Kuwait",
            "capital": "Kuwait City",
            "FIELD4": ""
        },
        {
            "abr": "CJ",
            "country": "Cayman Islands",
            "capital": "George Town",
            "FIELD4": ""
        },
        {
            "abr": "KZ",
            "country": "Kazakhstan",
            "capital": "Astana",
            "FIELD4": ""
        },
        {
            "abr": "LA",
            "country": "Laos",
            "capital": "Vientiane",
            "FIELD4": ""
        },
        {
            "abr": "LE",
            "country": "Lebanon",
            "capital": "Beirut",
            "FIELD4": ""
        },
        {
            "abr": "ST",
            "country": "Saint Lucia",
            "capital": "Castries",
            "FIELD4": ""
        },
        {
            "abr": "LS",
            "country": "Liechtenstein",
            "capital": "Vaduz",
            "FIELD4": ""
        },
        {
            "abr": "CE",
            "country": "Sri Lanka",
            "capital": "Colombo",
            "FIELD4": ""
        },
        {
            "abr": "LI",
            "country": "Liberia",
            "capital": "Monrovia",
            "FIELD4": ""
        },
        {
            "abr": "LT",
            "country": "Lesotho",
            "capital": "Maseru",
            "FIELD4": ""
        },
        {
            "abr": "LH",
            "country": "Lithuania",
            "capital": "Vilnius",
            "FIELD4": ""
        },
        {
            "abr": "LU",
            "country": "Luxembourg",
            "capital": "Luxembourg",
            "FIELD4": ""
        },
        {
            "abr": "LG",
            "country": "Latvia",
            "capital": "Riga",
            "FIELD4": ""
        },
        {
            "abr": "LY",
            "country": "Libya",
            "capital": "Tripolis",
            "FIELD4": ""
        },
        {
            "abr": "MO",
            "country": "Morocco",
            "capital": "Rabat",
            "FIELD4": ""
        },
        {
            "abr": "MN",
            "country": "Monaco",
            "capital": "Monaco",
            "FIELD4": ""
        },
        {
            "abr": "MD",
            "country": "Moldova",
            "capital": "Chisinau",
            "FIELD4": ""
        },
        {
            "abr": "MJ",
            "country": "Montenegro",
            "capital": "Podgorica",
            "FIELD4": ""
        },
        {
            "abr": "RN",
            "country": "Saint Martin",
            "capital": "Marigot",
            "FIELD4": ""
        },
        {
            "abr": "MA",
            "country": "Madagascar",
            "capital": "Antananarivo",
            "FIELD4": ""
        },
        {
            "abr": "RM",
            "country": "Marshall Islands",
            "capital": "Majuro",
            "FIELD4": ""
        },
        {
            "abr": "MK",
            "country": "Macedonia",
            "capital": "Skopje",
            "FIELD4": ""
        },
        {
            "abr": "ML",
            "country": "Mali",
            "capital": "Bamako",
            "FIELD4": ""
        },
        {
            "abr": "BM",
            "country": "Myanmar [Burma]",
            "capital": "Nay Pyi Taw",
            "FIELD4": ""
        },
        {
            "abr": "MG",
            "country": "Mongolia",
            "capital": "Ulan Bator",
            "FIELD4": ""
        },
        {
            "abr": "MC",
            "country": "Macao",
            "capital": "Macao",
            "FIELD4": ""
        },
        {
            "abr": "CQ",
            "country": "Northern Mariana Islands",
            "capital": "Saipan",
            "FIELD4": ""
        },
        {
            "abr": "MB",
            "country": "Martinique",
            "capital": "Fort-de-France",
            "FIELD4": ""
        },
        {
            "abr": "MR",
            "country": "Mauritania",
            "capital": "Nouakchott",
            "FIELD4": ""
        },
        {
            "abr": "MH",
            "country": "Montserrat",
            "capital": "Plymouth",
            "FIELD4": ""
        },
        {
            "abr": "MT",
            "country": "Malta",
            "capital": "Valletta",
            "FIELD4": ""
        },
        {
            "abr": "MP",
            "country": "Mauritius",
            "capital": "Port Louis",
            "FIELD4": ""
        },
        {
            "abr": "MV",
            "country": "Maldives",
            "capital": "Male",
            "FIELD4": ""
        },
        {
            "abr": "MI",
            "country": "Malawi",
            "capital": "Lilongwe",
            "FIELD4": ""
        },
        {
            "abr": "MX",
            "country": "Mexico",
            "capital": "Mexico City",
            "FIELD4": ""
        },
        {
            "abr": "MY",
            "country": "Malaysia",
            "capital": "Kuala Lumpur",
            "FIELD4": ""
        },
        {
            "abr": "MZ",
            "country": "Mozambique",
            "capital": "Maputo",
            "FIELD4": ""
        },
        {
            "abr": "WA",
            "country": "Namibia",
            "capital": "Windhoek",
            "FIELD4": ""
        },
        {
            "abr": "NC",
            "country": "New Caledonia",
            "capital": "Noumea",
            "FIELD4": ""
        },
        {
            "abr": "NG",
            "country": "Niger",
            "capital": "Niamey",
            "FIELD4": ""
        },
        {
            "abr": "NF",
            "country": "Norfolk Island",
            "capital": "Kingston",
            "FIELD4": ""
        },
        {
            "abr": "NI",
            "country": "Nigeria",
            "capital": "Abuja",
            "FIELD4": ""
        },
        {
            "abr": "NU",
            "country": "Nicaragua",
            "capital": "Managua",
            "FIELD4": ""
        },
        {
            "abr": "NL",
            "country": "Netherlands",
            "capital": "Amsterdam",
            "FIELD4": ""
        },
        {
            "abr": "NO",
            "country": "Norway",
            "capital": "Oslo",
            "FIELD4": ""
        },
        {
            "abr": "NP",
            "country": "Nepal",
            "capital": "Kathmandu",
            "FIELD4": ""
        },
        {
            "abr": "NR",
            "country": "Nauru",
            "capital": "Yaren",
            "FIELD4": ""
        },
        {
            "abr": "NE",
            "country": "Niue",
            "capital": "Alofi",
            "FIELD4": ""
        },
        {
            "abr": "NZ",
            "country": "New Zealand",
            "capital": "Wellington",
            "FIELD4": ""
        },
        {
            "abr": "MU",
            "country": "Oman",
            "capital": "Muscat",
            "FIELD4": ""
        },
        {
            "abr": "PM",
            "country": "Panama",
            "capital": "Panama City",
            "FIELD4": ""
        },
        {
            "abr": "PE",
            "country": "Peru",
            "capital": "Lima",
            "FIELD4": ""
        },
        {
            "abr": "FP",
            "country": "French Polynesia",
            "capital": "Papeete",
            "FIELD4": ""
        },
        {
            "abr": "PP",
            "country": "Papua New Guinea",
            "capital": "Port Moresby",
            "FIELD4": ""
        },
        {
            "abr": "RP",
            "country": "Philippines",
            "capital": "Manila",
            "FIELD4": ""
        },
        {
            "abr": "PK",
            "country": "Pakistan",
            "capital": "Islamabad",
            "FIELD4": ""
        },
        {
            "abr": "PL",
            "country": "Poland",
            "capital": "Warsaw",
            "FIELD4": ""
        },
        {
            "abr": "SB",
            "country": "Saint Pierre and Miquelon",
            "capital": "Saint-Pierre",
            "FIELD4": ""
        },
        {
            "abr": "PC",
            "country": "Pitcairn Islands",
            "capital": "Adamstown",
            "FIELD4": ""
        },
        {
            "abr": "RQ",
            "country": "Puerto Rico",
            "capital": "San Juan",
            "FIELD4": ""
        },
        {
            "abr": "WE",
            "country": "Palestine",
            "capital": "East Jerusalem",
            "FIELD4": ""
        },
        {
            "abr": "PO",
            "country": "Portugal",
            "capital": "Lisbon",
            "FIELD4": ""
        },
        {
            "abr": "PS",
            "country": "Palau",
            "capital": "Melekeok",
            "FIELD4": ""
        },
        {
            "abr": "PA",
            "country": "Paraguay",
            "capital": "Asuncion",
            "FIELD4": ""
        },
        {
            "abr": "QA",
            "country": "Qatar",
            "capital": "Doha",
            "FIELD4": ""
        },
        {
            "abr": "RE",
            "country": "Réunion",
            "capital": "Saint-Denis",
            "FIELD4": ""
        },
        {
            "abr": "RO",
            "country": "Romania",
            "capital": "Bucharest",
            "FIELD4": ""
        },
        {
            "abr": "RI",
            "country": "Serbia",
            "capital": "Belgrade",
            "FIELD4": ""
        },
        {
            "abr": "RS",
            "country": "Russia",
            "capital": "Moscow",
            "FIELD4": ""
        },
        {
            "abr": "RW",
            "country": "Rwanda",
            "capital": "Kigali",
            "FIELD4": ""
        },
        {
            "abr": "SA",
            "country": "Saudi Arabia",
            "capital": "Riyadh",
            "FIELD4": ""
        },
        {
            "abr": "BP",
            "country": "Solomon Islands",
            "capital": "Honiara",
            "FIELD4": ""
        },
        {
            "abr": "SE",
            "country": "Seychelles",
            "capital": "Victoria",
            "FIELD4": ""
        },
        {
            "abr": "SU",
            "country": "Sudan",
            "capital": "Khartoum",
            "FIELD4": ""
        },
        {
            "abr": "SW",
            "country": "Sweden",
            "capital": "Stockholm",
            "FIELD4": ""
        },
        {
            "abr": "SN",
            "country": "Singapore",
            "capital": "Singapur",
            "FIELD4": ""
        },
        {
            "abr": "SH",
            "country": "Saint Helena",
            "capital": "Jamestown",
            "FIELD4": ""
        },
        {
            "abr": "SI",
            "country": "Slovenia",
            "capital": "Ljubljana",
            "FIELD4": ""
        },
        {
            "abr": "SV",
            "country": "Svalbard and Jan Mayen",
            "capital": "Longyearbyen",
            "FIELD4": ""
        },
        {
            "abr": "LO",
            "country": "Slovakia",
            "capital": "Bratislava",
            "FIELD4": ""
        },
        {
            "abr": "SL",
            "country": "Sierra Leone",
            "capital": "Freetown",
            "FIELD4": ""
        },
        {
            "abr": "SM",
            "country": "San Marino",
            "capital": "San Marino",
            "FIELD4": ""
        },
        {
            "abr": "SG",
            "country": "Senegal",
            "capital": "Dakar",
            "FIELD4": ""
        },
        {
            "abr": "SO",
            "country": "Somalia",
            "capital": "Mogadishu",
            "FIELD4": ""
        },
        {
            "abr": "NS",
            "country": "Suriname",
            "capital": "Paramaribo",
            "FIELD4": ""
        },
        {
            "abr": "OD",
            "country": "South Sudan",
            "capital": "Juba",
            "FIELD4": ""
        },
        {
            "abr": "TP",
            "country": "São Tomé and Príncipe",
            "capital": "Sao Tome",
            "FIELD4": ""
        },
        {
            "abr": "ES",
            "country": "El Salvador",
            "capital": "San Salvador",
            "FIELD4": ""
        },
        {
            "abr": "NN",
            "country": "Sint Maarten",
            "capital": "Philipsburg",
            "FIELD4": ""
        },
        {
            "abr": "SY",
            "country": "Syria",
            "capital": "Damascus",
            "FIELD4": ""
        },
        {
            "abr": "WZ",
            "country": "Swaziland",
            "capital": "Mbabane",
            "FIELD4": ""
        },
        {
            "abr": "TK",
            "country": "Turks and Caicos Islands",
            "capital": "Cockburn Town",
            "FIELD4": ""
        },
        {
            "abr": "CD",
            "country": "Chad",
            "capital": "N'Djamena",
            "FIELD4": ""
        },
        {
            "abr": "FS",
            "country": "French Southern Territories",
            "capital": "Port-aux-Francais",
            "FIELD4": ""
        },
        {
            "abr": "TO",
            "country": "Togo",
            "capital": "Lome",
            "FIELD4": ""
        },
        {
            "abr": "TH",
            "country": "Thailand",
            "capital": "Bangkok",
            "FIELD4": ""
        },
        {
            "abr": "TI",
            "country": "Tajikistan",
            "capital": "Dushanbe",
            "FIELD4": ""
        },
        {
            "abr": "TL",
            "country": "Tokelau",
            "capital": "",
            "FIELD4": ""
        },
        {
            "abr": "TT",
            "country": "East Timor",
            "capital": "Dili",
            "FIELD4": ""
        },
        {
            "abr": "TX",
            "country": "Turkmenistan",
            "capital": "Ashgabat",
            "FIELD4": ""
        },
        {
            "abr": "TS",
            "country": "Tunisia",
            "capital": "Tunis",
            "FIELD4": ""
        },
        {
            "abr": "TN",
            "country": "Tonga",
            "capital": "Nuku'alofa",
            "FIELD4": ""
        },
        {
            "abr": "TU",
            "country": "Turkey",
            "capital": "Ankara",
            "FIELD4": ""
        },
        {
            "abr": "TD",
            "country": "Trinidad and Tobago",
            "capital": "Port of Spain",
            "FIELD4": ""
        },
        {
            "abr": "TV",
            "country": "Tuvalu",
            "capital": "Funafuti",
            "FIELD4": ""
        },
        {
            "abr": "TW",
            "country": "Taiwan",
            "capital": "Taipei",
            "FIELD4": ""
        },
        {
            "abr": "TZ",
            "country": "Tanzania",
            "capital": "Dodoma",
            "FIELD4": ""
        },
        {
            "abr": "UP",
            "country": "Ukraine",
            "capital": "Kiev",
            "FIELD4": ""
        },
        {
            "abr": "UG",
            "country": "Uganda",
            "capital": "Kampala",
            "FIELD4": ""
        },
        {
            "abr": "",
            "country": "U.S. Minor Outlying Islands",
            "capital": "",
            "FIELD4": ""
        },
        {
            "abr": "US",
            "country": "United States",
            "capital": "Washington",
            "FIELD4": ""
        },
        {
            "abr": "UY",
            "country": "Uruguay",
            "capital": "Montevideo",
            "FIELD4": ""
        },
        {
            "abr": "UZ",
            "country": "Uzbekistan",
            "capital": "Tashkent",
            "FIELD4": ""
        },
        {
            "abr": "VT",
            "country": "Vatican City",
            "capital": "Vatican City",
            "FIELD4": ""
        },
        {
            "abr": "VC",
            "country": "Saint Vincent and the Grenadines",
            "capital": "Kingstown",
            "FIELD4": ""
        },
        {
            "abr": "VE",
            "country": "Venezuela",
            "capital": "Caracas",
            "FIELD4": ""
        },
        {
            "abr": "VI",
            "country": "British Virgin Islands",
            "capital": "Road Town",
            "FIELD4": ""
        },
        {
            "abr": "VQ",
            "country": "U.S. Virgin Islands",
            "capital": "Charlotte Amalie",
            "FIELD4": ""
        },
        {
            "abr": "VM",
            "country": "Vietnam",
            "capital": "Hanoi",
            "FIELD4": ""
        },
        {
            "abr": "NH",
            "country": "Vanuatu",
            "capital": "Port Vila",
            "FIELD4": ""
        },
        {
            "abr": "WF",
            "country": "Wallis and Futuna",
            "capital": "Mata Utu",
            "FIELD4": ""
        },
        {
            "abr": "WS",
            "country": "Samoa",
            "capital": "Apia",
            "FIELD4": ""
        },
        {
            "abr": "KV",
            "country": "Kosovo",
            "capital": "Pristina",
            "FIELD4": ""
        },
        {
            "abr": "YM",
            "country": "Yemen",
            "capital": "Sanaa",
            "FIELD4": ""
        },
        {
            "abr": "MF",
            "country": "Mayotte",
            "capital": "Mamoudzou",
            "FIELD4": ""
        },
        {
            "abr": "SF",
            "country": "South Africa",
            "capital": "Pretoria",
            "FIELD4": ""
        },
        {
            "abr": "ZA",
            "country": "Zambia",
            "capital": "Lusaka",
            "FIELD4": ""
        },
        {
            "abr": "ZI",
            "country": "Zimbabwe",
            "capital": "Harare",
            "FIELD4": ""
        }
    ]

    return {

        search: function (search) {

            var result = [],
                total = mockData.length,
                regex = RegExp(search, "i"); // Case-insensitive

            while (total--) {

                if (mockData[total].text.match(regex)) {
                    result.push({
                        text: mockData[total].text,
                        value: mockData[total].value
                    });
                }
            }

            result = result.reverse(); // Put the list back in alphabetical order ( the while loop reversed it ).


            return result;
        },

        paginatedSearch: function (search, pageSize, pageIndex) {

            var result = Countries.search(search),
                total = result.length;

            result = result.slice(); // Clone the array.

            result = result.splice(pageIndex * pageSize, pageSize); // get the portion of the result set that corresponds to the pagination.

            return {
                data: result,
                total: total
            };
        }
    }
});