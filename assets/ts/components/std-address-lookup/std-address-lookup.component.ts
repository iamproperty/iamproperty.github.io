import iamAddressLookup from '../address-lookup/address-lookup.component';

const countries = [
  {
    "id": "urn:als:country:AF",
    "country_name": "Afghanistan"
  },
  {
    "id": "urn:als:country:AX",
    "country_name": "Aland Islands"
  },
  {
    "id": "urn:als:country:AL",
    "country_name": "Albania"
  },
  {
    "id": "urn:als:country:DZ",
    "country_name": "Algeria"
  },
  {
    "id": "urn:als:country:AS",
    "country_name": "American Samoa"
  },
  {
    "id": "urn:als:country:AD",
    "country_name": "Andorra"
  },
  {
    "id": "urn:als:country:AO",
    "country_name": "Angola"
  },
  {
    "id": "urn:als:country:AI",
    "country_name": "Anguilla"
  },
  {
    "id": "urn:als:country:AQ",
    "country_name": "Antarctica"
  },
  {
    "id": "urn:als:country:AG",
    "country_name": "Antigua and Barbuda"
  },
  {
    "id": "urn:als:country:AR",
    "country_name": "Argentina"
  },
  {
    "id": "urn:als:country:AM",
    "country_name": "Armenia"
  },
  {
    "id": "urn:als:country:AW",
    "country_name": "Aruba"
  },
  {
    "id": "urn:als:country:AU",
    "country_name": "Australia"
  },
  {
    "id": "urn:als:country:AT",
    "country_name": "Austria"
  },
  {
    "id": "urn:als:country:AZ",
    "country_name": "Azerbaijan"
  },
  {
    "id": "urn:als:country:BS",
    "country_name": "Bahamas"
  },
  {
    "id": "urn:als:country:BH",
    "country_name": "Bahrain"
  },
  {
    "id": "urn:als:country:BD",
    "country_name": "Bangladesh"
  },
  {
    "id": "urn:als:country:BB",
    "country_name": "Barbados"
  },
  {
    "id": "urn:als:country:BY",
    "country_name": "Belarus"
  },
  {
    "id": "urn:als:country:BE",
    "country_name": "Belgium"
  },
  {
    "id": "urn:als:country:BZ",
    "country_name": "Belize"
  },
  {
    "id": "urn:als:country:BJ",
    "country_name": "Benin"
  },
  {
    "id": "urn:als:country:BM",
    "country_name": "Bermuda"
  },
  {
    "id": "urn:als:country:BT",
    "country_name": "Bhutan"
  },
  {
    "id": "urn:als:country:BO",
    "country_name": "Bolivia (Plurinational State of)"
  },
  {
    "id": "urn:als:country:BQ",
    "country_name": "Bonaire, Sint Eustatius and Saba"
  },
  {
    "id": "urn:als:country:BA",
    "country_name": "Bosnia and Herzegovina"
  },
  {
    "id": "urn:als:country:BW",
    "country_name": "Botswana"
  },
  {
    "id": "urn:als:country:BV",
    "country_name": "Bouvet Island"
  },
  {
    "id": "urn:als:country:BR",
    "country_name": "Brazil"
  },
  {
    "id": "urn:als:country:IO",
    "country_name": "British Indian Ocean Territory"
  },
  {
    "id": "urn:als:country:BN",
    "country_name": "Brunei Darussalam"
  },
  {
    "id": "urn:als:country:BG",
    "country_name": "Bulgaria"
  },
  {
    "id": "urn:als:country:BF",
    "country_name": "Burkina Faso"
  },
  {
    "id": "urn:als:country:BI",
    "country_name": "Burundi"
  },
  {
    "id": "urn:als:country:KH",
    "country_name": "Cambodia"
  },
  {
    "id": "urn:als:country:CM",
    "country_name": "Cameroon"
  },
  {
    "id": "urn:als:country:CA",
    "country_name": "Canada"
  },
  {
    "id": "urn:als:country:CV",
    "country_name": "Cabo Verde"
  },
  {
    "id": "urn:als:country:KY",
    "country_name": "Cayman Islands"
  },
  {
    "id": "urn:als:country:CF",
    "country_name": "Central African Republic"
  },
  {
    "id": "urn:als:country:TD",
    "country_name": "Chad"
  },
  {
    "id": "urn:als:country:CL",
    "country_name": "Chile"
  },
  {
    "id": "urn:als:country:CN",
    "country_name": "China"
  },
  {
    "id": "urn:als:country:CX",
    "country_name": "Christmas Island"
  },
  {
    "id": "urn:als:country:CC",
    "country_name": "Cocos (Keeling) Islands"
  },
  {
    "id": "urn:als:country:CO",
    "country_name": "Colombia"
  },
  {
    "id": "urn:als:country:KM",
    "country_name": "Comoros"
  },
  {
    "id": "urn:als:country:CG",
    "country_name": "Congo"
  },
  {
    "id": "urn:als:country:CD",
    "country_name": "Congo (Democratic Republic of the)"
  },
  {
    "id": "urn:als:country:CK",
    "country_name": "Cook Islands"
  },
  {
    "id": "urn:als:country:CR",
    "country_name": "Costa Rica"
  },
  {
    "id": "urn:als:country:CI",
    "country_name": "Côte d’Ivoire"
  },
  {
    "id": "urn:als:country:HR",
    "country_name": "Croatia"
  },
  {
    "id": "urn:als:country:CU",
    "country_name": "Cuba"
  },
  {
    "id": "urn:als:country:CW",
    "country_name": "Curaçao"
  },
  {
    "id": "urn:als:country:CY",
    "country_name": "Cyprus"
  },
  {
    "id": "urn:als:country:CZ",
    "country_name": "Czech Republic"
  },
  {
    "id": "urn:als:country:DK",
    "country_name": "Denmark"
  },
  {
    "id": "urn:als:country:DJ",
    "country_name": "Djibouti"
  },
  {
    "id": "urn:als:country:DM",
    "country_name": "Dominica"
  },
  {
    "id": "urn:als:country:DO",
    "country_name": "Dominican Republic"
  },
  {
    "id": "urn:als:country:EC",
    "country_name": "Ecuador"
  },
  {
    "id": "urn:als:country:EG",
    "country_name": "Egypt"
  },
  {
    "id": "urn:als:country:SV",
    "country_name": "El Salvador"
  },
  {
    "id": "urn:als:country:GQ",
    "country_name": "Equatorial Guinea"
  },
  {
    "id": "urn:als:country:ER",
    "country_name": "Eritrea"
  },
  {
    "id": "urn:als:country:EE",
    "country_name": "Estonia"
  },
  {
    "id": "urn:als:country:ET",
    "country_name": "Ethiopia"
  },
  {
    "id": "urn:als:country:FK",
    "country_name": "Falkland Islands (Malvinas)"
  },
  {
    "id": "urn:als:country:FO",
    "country_name": "Faroe Islands"
  },
  {
    "id": "urn:als:country:FJ",
    "country_name": "Fiji"
  },
  {
    "id": "urn:als:country:FI",
    "country_name": "Finland"
  },
  {
    "id": "urn:als:country:FR",
    "country_name": "France"
  },
  {
    "id": "urn:als:country:GF",
    "country_name": "French Guiana"
  },
  {
    "id": "urn:als:country:PF",
    "country_name": "French Polynesia"
  },
  {
    "id": "urn:als:country:TF",
    "country_name": "French Southern Territories"
  },
  {
    "id": "urn:als:country:GA",
    "country_name": "Gabon"
  },
  {
    "id": "urn:als:country:GM",
    "country_name": "Gambia"
  },
  {
    "id": "urn:als:country:GE",
    "country_name": "Georgia"
  },
  {
    "id": "urn:als:country:DE",
    "country_name": "Germany"
  },
  {
    "id": "urn:als:country:GH",
    "country_name": "Ghana"
  },
  {
    "id": "urn:als:country:GI",
    "country_name": "Gibraltar"
  },
  {
    "id": "urn:als:country:GR",
    "country_name": "Greece"
  },
  {
    "id": "urn:als:country:GL",
    "country_name": "Greenland"
  },
  {
    "id": "urn:als:country:GD",
    "country_name": "Grenada"
  },
  {
    "id": "urn:als:country:GP",
    "country_name": "Guadeloupe"
  },
  {
    "id": "urn:als:country:GU",
    "country_name": "Guam"
  },
  {
    "id": "urn:als:country:GT",
    "country_name": "Guatemala"
  },
  {
    "id": "urn:als:country:GG",
    "country_name": "Guernsey"
  },
  {
    "id": "urn:als:country:GN",
    "country_name": "Guinea"
  },
  {
    "id": "urn:als:country:GW",
    "country_name": "Guinea-Bissau"
  },
  {
    "id": "urn:als:country:GY",
    "country_name": "Guyana"
  },
  {
    "id": "urn:als:country:HT",
    "country_name": "Haiti"
  },
  {
    "id": "urn:als:country:HM",
    "country_name": "Heard Island and McDonald Islands"
  },
  {
    "id": "urn:als:country:VA",
    "country_name": "Holy See"
  },
  {
    "id": "urn:als:country:HN",
    "country_name": "Honduras"
  },
  {
    "id": "urn:als:country:HK",
    "country_name": "Hong Kong"
  },
  {
    "id": "urn:als:country:HU",
    "country_name": "Hungary"
  },
  {
    "id": "urn:als:country:IS",
    "country_name": "Iceland"
  },
  {
    "id": "urn:als:country:IN",
    "country_name": "India"
  },
  {
    "id": "urn:als:country:ID",
    "country_name": "Indonesia"
  },
  {
    "id": "urn:als:country:IR",
    "country_name": "Iran (Islamic Republic of)"
  },
  {
    "id": "urn:als:country:IQ",
    "country_name": "Iraq"
  },
  {
    "id": "urn:als:country:IE",
    "country_name": "Ireland"
  },
  {
    "id": "urn:als:country:IM",
    "country_name": "Isle of Man"
  },
  {
    "id": "urn:als:country:IL",
    "country_name": "Israel"
  },
  {
    "id": "urn:als:country:IT",
    "country_name": "Italy"
  },
  {
    "id": "urn:als:country:JM",
    "country_name": "Jamaica"
  },
  {
    "id": "urn:als:country:JP",
    "country_name": "Japan"
  },
  {
    "id": "urn:als:country:JE",
    "country_name": "Jersey"
  },
  {
    "id": "urn:als:country:JO",
    "country_name": "Jordan"
  },
  {
    "id": "urn:als:country:KZ",
    "country_name": "Kazakhstan"
  },
  {
    "id": "urn:als:country:KE",
    "country_name": "Kenya"
  },
  {
    "id": "urn:als:country:KI",
    "country_name": "Kiribati"
  },
  {
    "id": "urn:als:country:KP",
    "country_name": "Korea (Democratic People's Republic of)"
  },
  {
    "id": "urn:als:country:KR",
    "country_name": "Korea (Republic of)"
  },
  {
    "id": "urn:als:country:KW",
    "country_name": "Kuwait"
  },
  {
    "id": "urn:als:country:KG",
    "country_name": "Kyrgyzstan"
  },
  {
    "id": "urn:als:country:LA",
    "country_name": "Lao People's Democratic Republic"
  },
  {
    "id": "urn:als:country:LV",
    "country_name": "Latvia"
  },
  {
    "id": "urn:als:country:LB",
    "country_name": "Lebanon"
  },
  {
    "id": "urn:als:country:LS",
    "country_name": "Lesotho"
  },
  {
    "id": "urn:als:country:LR",
    "country_name": "Liberia"
  },
  {
    "id": "urn:als:country:LY",
    "country_name": "Libya"
  },
  {
    "id": "urn:als:country:LI",
    "country_name": "Liechtenstein"
  },
  {
    "id": "urn:als:country:LT",
    "country_name": "Lithuania"
  },
  {
    "id": "urn:als:country:LU",
    "country_name": "Luxembourg"
  },
  {
    "id": "urn:als:country:MO",
    "country_name": "Macao"
  },
  {
    "id": "urn:als:country:MK",
    "country_name": "Republic of North Macedonia"
  },
  {
    "id": "urn:als:country:MG",
    "country_name": "Madagascar"
  },
  {
    "id": "urn:als:country:MW",
    "country_name": "Malawi"
  },
  {
    "id": "urn:als:country:MY",
    "country_name": "Malaysia"
  },
  {
    "id": "urn:als:country:MV",
    "country_name": "Maldives"
  },
  {
    "id": "urn:als:country:ML",
    "country_name": "Mali"
  },
  {
    "id": "urn:als:country:MT",
    "country_name": "Malta"
  },
  {
    "id": "urn:als:country:MH",
    "country_name": "Marshall Islands"
  },
  {
    "id": "urn:als:country:MQ",
    "country_name": "Martinique"
  },
  {
    "id": "urn:als:country:MR",
    "country_name": "Mauritania"
  },
  {
    "id": "urn:als:country:MU",
    "country_name": "Mauritius"
  },
  {
    "id": "urn:als:country:YT",
    "country_name": "Mayotte"
  },
  {
    "id": "urn:als:country:MX",
    "country_name": "Mexico"
  },
  {
    "id": "urn:als:country:FM",
    "country_name": "Micronesia (Federated States of)"
  },
  {
    "id": "urn:als:country:MD",
    "country_name": "Moldova (Republic of)"
  },
  {
    "id": "urn:als:country:MC",
    "country_name": "Monaco"
  },
  {
    "id": "urn:als:country:MN",
    "country_name": "Mongolia"
  },
  {
    "id": "urn:als:country:ME",
    "country_name": "Montenegro"
  },
  {
    "id": "urn:als:country:MS",
    "country_name": "Montserrat"
  },
  {
    "id": "urn:als:country:MA",
    "country_name": "Morocco"
  },
  {
    "id": "urn:als:country:MZ",
    "country_name": "Mozambique"
  },
  {
    "id": "urn:als:country:MM",
    "country_name": "Myanmar"
  },
  {
    "id": "urn:als:country:NA",
    "country_name": "Namibia"
  },
  {
    "id": "urn:als:country:NR",
    "country_name": "Nauru"
  },
  {
    "id": "urn:als:country:NP",
    "country_name": "Nepal"
  },
  {
    "id": "urn:als:country:NL",
    "country_name": "Netherlands"
  },
  {
    "id": "urn:als:country:NC",
    "country_name": "New Caledonia"
  },
  {
    "id": "urn:als:country:NZ",
    "country_name": "New Zealand"
  },
  {
    "id": "urn:als:country:NI",
    "country_name": "Nicaragua"
  },
  {
    "id": "urn:als:country:NE",
    "country_name": "Niger"
  },
  {
    "id": "urn:als:country:NG",
    "country_name": "Nigeria"
  },
  {
    "id": "urn:als:country:NU",
    "country_name": "Niue"
  },
  {
    "id": "urn:als:country:NF",
    "country_name": "Norfolk Island"
  },
  {
    "id": "urn:als:country:MP",
    "country_name": "Northern Mariana Islands"
  },
  {
    "id": "urn:als:country:NO",
    "country_name": "Norway"
  },
  {
    "id": "urn:als:country:OM",
    "country_name": "Oman"
  },
  {
    "id": "urn:als:country:PK",
    "country_name": "Pakistan"
  },
  {
    "id": "urn:als:country:PW",
    "country_name": "Palau"
  },
  {
    "id": "urn:als:country:PS",
    "country_name": "Palestine, State of"
  },
  {
    "id": "urn:als:country:PA",
    "country_name": "Panama"
  },
  {
    "id": "urn:als:country:PG",
    "country_name": "Papua New Guinea"
  },
  {
    "id": "urn:als:country:PY",
    "country_name": "Paraguay"
  },
  {
    "id": "urn:als:country:PE",
    "country_name": "Peru"
  },
  {
    "id": "urn:als:country:PH",
    "country_name": "Philippines"
  },
  {
    "id": "urn:als:country:PN",
    "country_name": "Pitcairn"
  },
  {
    "id": "urn:als:country:PL",
    "country_name": "Poland"
  },
  {
    "id": "urn:als:country:PT",
    "country_name": "Portugal"
  },
  {
    "id": "urn:als:country:PR",
    "country_name": "Puerto Rico"
  },
  {
    "id": "urn:als:country:QA",
    "country_name": "Qatar"
  },
  {
    "id": "urn:als:country:RE",
    "country_name": "Réunion"
  },
  {
    "id": "urn:als:country:RO",
    "country_name": "Romania"
  },
  {
    "id": "urn:als:country:RU",
    "country_name": "Russian Federation"
  },
  {
    "id": "urn:als:country:RW",
    "country_name": "Rwanda"
  },
  {
    "id": "urn:als:country:BL",
    "country_name": "Saint Barthélemy"
  },
  {
    "id": "urn:als:country:SH",
    "country_name": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "id": "urn:als:country:KN",
    "country_name": "Saint Kitts and Nevis"
  },
  {
    "id": "urn:als:country:LC",
    "country_name": "Saint Lucia"
  },
  {
    "id": "urn:als:country:MF",
    "country_name": "Saint Martin (French part)"
  },
  {
    "id": "urn:als:country:PM",
    "country_name": "Saint Pierre and Miquelon"
  },
  {
    "id": "urn:als:country:VC",
    "country_name": "Saint Vincent and the Grenadines"
  },
  {
    "id": "urn:als:country:WS",
    "country_name": "Samoa"
  },
  {
    "id": "urn:als:country:SM",
    "country_name": "San Marino"
  },
  {
    "id": "urn:als:country:ST",
    "country_name": "Sao Tome and Principe"
  },
  {
    "id": "urn:als:country:SA",
    "country_name": "Saudi Arabia"
  },
  {
    "id": "urn:als:country:SN",
    "country_name": "Senegal"
  },
  {
    "id": "urn:als:country:RS",
    "country_name": "Serbia"
  },
  {
    "id": "urn:als:country:SC",
    "country_name": "Seychelles"
  },
  {
    "id": "urn:als:country:SL",
    "country_name": "Sierra Leone"
  },
  {
    "id": "urn:als:country:SG",
    "country_name": "Singapore"
  },
  {
    "id": "urn:als:country:SX",
    "country_name": "Sint Maarten (Dutch part)"
  },
  {
    "id": "urn:als:country:SK",
    "country_name": "Slovakia"
  },
  {
    "id": "urn:als:country:SI",
    "country_name": "Slovenia"
  },
  {
    "id": "urn:als:country:SB",
    "country_name": "Solomon Islands"
  },
  {
    "id": "urn:als:country:SO",
    "country_name": "Somalia"
  },
  {
    "id": "urn:als:country:ZA",
    "country_name": "South Africa"
  },
  {
    "id": "urn:als:country:GS",
    "country_name": "South Georgia and the South Sandwich Islands"
  },
  {
    "id": "urn:als:country:SS",
    "country_name": "South Sudan"
  },
  {
    "id": "urn:als:country:ES",
    "country_name": "Spain"
  },
  {
    "id": "urn:als:country:LK",
    "country_name": "Sri Lanka"
  },
  {
    "id": "urn:als:country:SD",
    "country_name": "Sudan"
  },
  {
    "id": "urn:als:country:SR",
    "country_name": "Suriname"
  },
  {
    "id": "urn:als:country:SJ",
    "country_name": "Svalbard and Jan Mayen"
  },
  {
    "id": "urn:als:country:SZ",
    "country_name": "The Kingdom of Eswatini"
  },
  {
    "id": "urn:als:country:SE",
    "country_name": "Sweden"
  },
  {
    "id": "urn:als:country:CH",
    "country_name": "Switzerland"
  },
  {
    "id": "urn:als:country:SY",
    "country_name": "Syrian Arab Republic"
  },
  {
    "id": "urn:als:country:TW",
    "country_name": "Taiwan, Province of China"
  },
  {
    "id": "urn:als:country:TJ",
    "country_name": "Tajikistan"
  },
  {
    "id": "urn:als:country:TZ",
    "country_name": "Tanzania, United Republic of"
  },
  {
    "id": "urn:als:country:TH",
    "country_name": "Thailand"
  },
  {
    "id": "urn:als:country:TL",
    "country_name": "Timor-Leste"
  },
  {
    "id": "urn:als:country:TG",
    "country_name": "Togo"
  },
  {
    "id": "urn:als:country:TK",
    "country_name": "Tokelau"
  },
  {
    "id": "urn:als:country:TO",
    "country_name": "Tonga"
  },
  {
    "id": "urn:als:country:TT",
    "country_name": "Trinidad and Tobago"
  },
  {
    "id": "urn:als:country:TN",
    "country_name": "Tunisia"
  },
  {
    "id": "urn:als:country:TR",
    "country_name": "Republic of Türkiye"
  },
  {
    "id": "urn:als:country:TM",
    "country_name": "Turkmenistan"
  },
  {
    "id": "urn:als:country:TC",
    "country_name": "Turks and Caicos Islands"
  },
  {
    "id": "urn:als:country:TV",
    "country_name": "Tuvalu"
  },
  {
    "id": "urn:als:country:UG",
    "country_name": "Uganda"
  },
  {
    "id": "urn:als:country:UA",
    "country_name": "Ukraine"
  },
  {
    "id": "urn:als:country:AE",
    "country_name": "United Arab Emirates"
  },
  {
    "id": "urn:als:country:GB",
    "country_name": "United Kingdom of Great Britain and Northern Ireland"
  },
  {
    "id": "urn:als:country:US",
    "country_name": "United States of America"
  },
  {
    "id": "urn:als:country:UM",
    "country_name": "United States Minor Outlying Islands"
  },
  {
    "id": "urn:als:country:UY",
    "country_name": "Uruguay"
  },
  {
    "id": "urn:als:country:UZ",
    "country_name": "Uzbekistan"
  },
  {
    "id": "urn:als:country:VU",
    "country_name": "Vanuatu"
  },
  {
    "id": "urn:als:country:VE",
    "country_name": "Venezuela (Bolivarian Republic of)"
  },
  {
    "id": "urn:als:country:VN",
    "country_name": "Viet Nam"
  },
  {
    "id": "urn:als:country:VG",
    "country_name": "Virgin Islands (British)"
  },
  {
    "id": "urn:als:country:VI",
    "country_name": "Virgin Islands (U.S.)"
  },
  {
    "id": "urn:als:country:WF",
    "country_name": "Wallis and Futuna"
  },
  {
    "id": "urn:als:country:EH",
    "country_name": "Western Sahara"
  },
  {
    "id": "urn:als:country:YE",
    "country_name": "Yemen"
  },
  {
    "id": "urn:als:country:ZM",
    "country_name": "Zambia"
  },
  {
    "id": "urn:als:country:ZW",
    "country_name": "Zimbabwe"
  }
];

const counties = [
    {
        "id": "urn:als:county:ekHuOPAhk",
        "county": "Monmouthshire"
    },
    {
        "id": "urn:als:county:AEbmaIiuw",
        "county": "Cambridgeshire"
    },
    {
        "id": "urn:als:county:HN2Hekmbp",
        "county": "South Lanarkshire"
    },
    {
        "id": "urn:als:county:520Tnh4wg",
        "county": "Derbyshire"
    },
    {
        "id": "urn:als:county:l5UCrwlvB",
        "county": "Devon"
    },
    {
        "id": "urn:als:county:GCA8Jh6Ic",
        "county": "Bristol"
    },
    {
        "id": "urn:als:county:Mi1lAB5uQ",
        "county": "Rhondda Cynon Taf"
    },
    {
        "id": "urn:als:county:n4jPkt4qP",
        "county": "Carmarthenshire"
    },
    {
        "id": "urn:als:county:XO1G4TTb5",
        "county": "Aberdeenshire"
    },
    {
        "id": "urn:als:county:JIaxjhlxx",
        "county": "North Somerset"
    },
    {
        "id": "urn:als:county:hLrOnlFfB",
        "county": "Nottinghamshire"
    },
    {
        "id": "urn:als:county:oGMGorIRg",
        "county": "Durham"
    },
    {
        "id": "urn:als:county:eBaLXgG8Y",
        "county": "Isle of Wight"
    },
    {
        "id": "urn:als:county:NMsdqInpw",
        "county": "Northamptonshire"
    },
    {
        "id": "urn:als:county:xRBQIke3k",
        "county": "Warwickshire"
    },
    {
        "id": "urn:als:county:R7yUpOlb4",
        "county": "Berwickshire"
    },
    {
        "id": "urn:als:county:S9DHMO2Hh",
        "county": "East Sussex"
    },
    {
        "id": "urn:als:county:rj4pK09x7",
        "county": "Denbighshire"
    },
    {
        "id": "urn:als:county:vuduFOMex",
        "county": "Lanarkshire"
    },
    {
        "id": "urn:als:county:5W66e6apO",
        "county": "East Riding of Yorkshire"
    },
    {
        "id": "urn:als:county:Hb6eqUJQj",
        "county": "North Ayrshire"
    },
    {
        "id": "urn:als:county:fwRrCvJ4C",
        "county": "Greater Manchester"
    },
    {
        "id": "urn:als:county:aekGxogbo",
        "county": "East Renfrewshire"
    },
    {
        "id": "urn:als:county:f3srYWllA",
        "county": "Cardiff"
    },
    {
        "id": "urn:als:county:DhVZEpSj5",
        "county": "West Lothian"
    },
    {
        "id": "urn:als:county:URWWHN7s0",
        "county": "Dorset"
    },
    {
        "id": "urn:als:county:jYK8wiDnY",
        "county": "Leicestershire"
    },
    {
        "id": "urn:als:county:048PGRA4X",
        "county": "Blaenau Gwent"
    },
    {
        "id": "urn:als:county:wrHCVsCva",
        "county": "Berkshire"
    },
    {
        "id": "urn:als:county:cCH4TjJ9q",
        "county": "Norfolk"
    },
    {
        "id": "urn:als:county:mvHEsdXhM",
        "county": "Suffolk"
    },
    {
        "id": "urn:als:county:faXBprr9q",
        "county": "East Ayrshire"
    },
    {
        "id": "urn:als:county:5wGBTbwou",
        "county": "Conwy"
    },
    {
        "id": "urn:als:county:5YXi0mQkk",
        "county": "Cheshire"
    },
    {
        "id": "urn:als:county:fuYiP18oc",
        "county": "Bridgend"
    },
    {
        "id": "urn:als:county:QaX0cXbOV",
        "county": "West Yorkshire"
    },
    {
        "id": "urn:als:county:Lo7JLx9og",
        "county": "South Gloucestershire"
    },
    {
        "id": "urn:als:county:B64E1f4T3",
        "county": "Merthyr Tydfil"
    },
    {
        "id": "urn:als:county:vacNt3Iie",
        "county": "Banffshire"
    },
    {
        "id": "urn:als:county:HSETldFbK",
        "county": "Staffordshire"
    },
    {
        "id": "urn:als:county:njUDNfLD3",
        "county": "Western Isles"
    },
    {
        "id": "urn:als:county:smlxqTdZE",
        "county": "Bath and North East Somerset"
    },
    {
        "id": "urn:als:county:2asBQ47Jh",
        "county": "South Yorkshire"
    },
    {
        "id": "urn:als:county:5hYXpCuJ7",
        "county": "Stirling"
    },
    {
        "id": "urn:als:county:lhFYBMSuq",
        "county": "Powys"
    },
    {
        "id": "urn:als:county:PamgW3ebq",
        "county": "Vale of Glamorgan"
    },
    {
        "id": "urn:als:county:zIasSsrlZ",
        "county": "Clackmannanshire"
    },
    {
        "id": "urn:als:county:WZUQNZxOy",
        "county": "Lancashire"
    },
    {
        "id": "urn:als:county:HoTgPpS58",
        "county": "Hertfordshire"
    },
    {
        "id": "urn:als:county:oNrluXBHA",
        "county": "Fife"
    },
    {
        "id": "urn:als:county:2OxE9CASK",
        "county": "Neath Port Talbot"
    },
    {
        "id": "urn:als:county:9J7YezLBA",
        "county": "Highland"
    },
    {
        "id": "urn:als:county:7IfpMh1Gx",
        "county": "Ceredigion"
    },
    {
        "id": "urn:als:county:ZwQ3mTTE2",
        "county": "Orkney Islands"
    },
    {
        "id": "urn:als:county:ZyNmV7NCn",
        "county": "North Yorkshire"
    },
    {
        "id": "urn:als:county:LwrVeERzu",
        "county": "Pembrokeshire"
    },
    {
        "id": "urn:als:county:porOuVsSM",
        "county": "Wrexham"
    },
    {
        "id": "urn:als:county:3o4Rx4sO8",
        "county": "Renfrewshire"
    },
    {
        "id": "urn:als:county:loLWjKyk8",
        "county": "Oxfordshire"
    },
    {
        "id": "urn:als:county:AN7Bz5tny",
        "county": "Moray"
    },
    {
        "id": "urn:als:county:RGzSdoQp3",
        "county": "Ayrshire"
    },
    {
        "id": "urn:als:county:nEBK48RIK",
        "county": "Caithness"
    },
    {
        "id": "urn:als:county:a90XABrjs",
        "county": "West Dunbartonshire"
    },
    {
        "id": "urn:als:county:Qjkb0wsyP",
        "county": "West Sussex"
    },
    {
        "id": "urn:als:county:fNJcfheKq",
        "county": "Cornwall"
    },
    {
        "id": "urn:als:county:lx0kEWvsb",
        "county": "Anglesey"
    },
    {
        "id": "urn:als:county:rkvgiBRHz",
        "county": "Caerphilly"
    },
    {
        "id": "urn:als:county:kx0t2zRVP",
        "county": "Tyne and Wear"
    },
    {
        "id": "urn:als:county:lVb75qnOW",
        "county": "Merseyside"
    },
    {
        "id": "urn:als:county:M7eZzrA8u",
        "county": "Wiltshire"
    },
    {
        "id": "urn:als:county:8Uo4sJw3x",
        "county": "Perth and Kinross"
    },
    {
        "id": "urn:als:county:73kc3w0cu",
        "county": "Dumfries & Galloway"
    },
    {
        "id": "urn:als:county:VFjExDeTO",
        "county": "Swansea"
    },
    {
        "id": "urn:als:county:lzsJuaRiS",
        "county": "Isles of Scilly"
    },
    {
        "id": "urn:als:county:abvvK0ZwH",
        "county": "Worcestershire"
    },
    {
        "id": "urn:als:county:1FKCbFkt2",
        "county": "Scottish Borders"
    },
    {
        "id": "urn:als:county:WKaOjrTLM",
        "county": "Essex"
    },
    {
        "id": "urn:als:county:0F00szlVA",
        "county": "South Ayrshire"
    },
    {
        "id": "urn:als:county:KDtAS0c8U",
        "county": "Inverclyde"
    },
    {
        "id": "urn:als:county:Md88sraTz",
        "county": "Shetland Islands"
    },
    {
        "id": "urn:als:county:LzzEE6zpp",
        "county": "Herefordshire"
    },
    {
        "id": "urn:als:county:lXaRRDNrq",
        "county": "Angus"
    },
    {
        "id": "urn:als:county:A5B4FFytC",
        "county": "Surrey"
    },
    {
        "id": "urn:als:county:B3siky9El",
        "county": "Kent"
    },
    {
        "id": "urn:als:county:V9njlL3kq",
        "county": "Northumberland"
    },
    {
        "id": "urn:als:county:WJiolIFFI",
        "county": "Flintshire"
    },
    {
        "id": "urn:als:county:4lXGX7NbU",
        "county": "Gwynedd"
    },
    {
        "id": "urn:als:county:7gzISbzTK",
        "county": "Lincolnshire"
    },
    {
        "id": "urn:als:county:D5GgqTxzN",
        "county": "East Dunbartonshire"
    },
    {
        "id": "urn:als:county:hhwXe4hTH",
        "county": "Somerset"
    },
    {
        "id": "urn:als:county:nECEnleYv",
        "county": "Midlothian"
    },
    {
        "id": "urn:als:county:2jksb8BIf",
        "county": "Cumbria"
    },
    {
        "id": "urn:als:county:ttfY8qr15",
        "county": "Bedfordshire"
    },
    {
        "id": "urn:als:county:YhQVg1amj",
        "county": "West Midlands"
    },
    {
        "id": "urn:als:county:EnbDIubYS",
        "county": "North Lanarkshire"
    },
    {
        "id": "urn:als:county:5SdVf3hnm",
        "county": "Kincardineshire"
    },
    {
        "id": "urn:als:county:BPedWUQXc",
        "county": "Dunbartonshire"
    },
    {
        "id": "urn:als:county:YLngqBWd4",
        "county": "Hampshire"
    },
    {
        "id": "urn:als:county:zBZHWiWon",
        "county": "Buckinghamshire"
    },
    {
        "id": "urn:als:county:kLes1W5ny",
        "county": "East Lothian"
    },
    {
        "id": "urn:als:county:yCMA4ANpN",
        "county": "Rutland"
    },
    {
        "id": "urn:als:county:jhourkJ4W",
        "county": "Torfaen"
    },
    {
        "id": "urn:als:county:aC8dF3IVE",
        "county": "Newport"
    },
    {
        "id": "urn:als:county:AnfqGRnhm",
        "county": "Argyll & Bute"
    },
    {
        "id": "urn:als:county:5BjmQe9mS",
        "county": "Gloucestershire"
    },
    {
        "id": "urn:als:county:G7WiUO5Sh",
        "county": "Cleveland"
    },
    {
        "id": "urn:als:county:zu7zHJPWh",
        "county": "Shropshire"
    },
    {
        "id": "urn:als:county:Bt301fwoy",
        "county": "Greater London"
    },
    {
        "id": "urn:als:county:LXHPqo5nj",
        "county": "City of Edinburgh"
    },
    {
        "id": "urn:als:county:YejLSQLAx",
        "county": "Aberdeen City"
    },
    {
        "id": "urn:als:county:o5lgD8dv7",
        "county": "Dundee City"
    },
    {
        "id": "urn:als:county:0HPMQtb09",
        "county": "Falkirk"
    },
    {
        "id": "urn:als:county:z1rPhQlGB",
        "county": "Glasgow City"
    },
    {
        "id": "urn:als:county:CskSiG5W0",
        "county": "Brecknockshire"
    },
    {
        "id": "urn:als:county:zulaN5fgu",
        "county": "Caernarfonshire"
    },
    {
        "id": "urn:als:county:D1YYNRchZ",
        "county": "Cardiganshire"
    },
    {
        "id": "urn:als:county:3DDFfQzoP",
        "county": "Clwyd"
    },
    {
        "id": "urn:als:county:hBr4CCduy",
        "county": "Dyfed"
    },
    {
        "id": "urn:als:county:7wcgGTpU9",
        "county": "Antrim"
    },
    {
        "id": "urn:als:county:PKM8DGZbI",
        "county": "Armagh"
    },
    {
        "id": "urn:als:county:LrvLXtQv4",
        "county": "Down"
    },
    {
        "id": "urn:als:county:HXDwhW1QG",
        "county": "Fermanagh"
    },
    {
        "id": "urn:als:county:eRHjMdT0e",
        "county": "Londonderry"
    },
    {
        "id": "urn:als:county:Xqs7aJsen",
        "county": "Tyrone"
    },
    {
        "id": "urn:als:county:rYAgcPlXZ",
        "county": "Middlesex"
    }
]

let countriesString = '';

countries.forEach((country) => {
  countriesString += `<option value="${country['id']}" data-value="${country['country_name']}">${country['country_name']}</option>`;
});

let countiesString = '';

counties.forEach((county) => {
  countiesString += `<option value="${county['id']}" data-value="${county['county']}">${county['county']}</option>`;
});



// Data layer Web component created
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'customElementRegistered',
  element: 'STD Address Lookup',
});

class iamSTDAddressLookup extends HTMLElement {
  constructor() {
    super();
    /*
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    
    </style>
    `;
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    */
  }

  connectedCallback(): void {

    if (!window.customElements.get(`iam-address-lookup`)) window.customElements.define(`iam-address-lookup`, iamAddressLookup);

    const currentContent = this.innerHTML;
    this.innerHTML = `<iam-address-lookup 
    class="${this.getAttribute('class')}" 
    ${this.hasAttribute('data-url') ? `data-url='${this.getAttribute('data-url')}?search_query='` : `data-url='/standardaddress.json?search_query='`}
    data-postcode="true" 
    data-min-chars="5" 
    ${this.hasAttribute('data-title') ? `data-title='${this.getAttribute('data-title')}'` : `data-title='Find an address by postcode'`}
    data-placeholder="UK, Isle of Man, & Channel Islands " 
    ${this.hasAttribute('data-manual') ? 'data-manual' : ''}  
    ${this.hasAttribute('data-allow-manual') ? 'data-allow-manual' : ''} 
    ${this.hasAttribute('data-use') ? `data-use='${this.getAttribute('data-use')}'` : ''} 
    ${this.hasAttribute('data-use-label') ? `data-use-label='${this.getAttribute('data-use-label')}'` : ''} 
    ${this.hasAttribute('data-postcode-value') ? `data-postcode-value='${this.getAttribute('data-postcode-value')}'` : ''}
    ${this.hasAttribute('data-list-class') ? `data-list-class='${this.getAttribute('data-list-class')}'` : ''}
    ${this.hasAttribute('data-input-class') ? `data-input-class='${this.getAttribute('data-input-class')}'` : ''}
    ${this.hasAttribute('data-error-msg') ? `data-error-msg='${this.getAttribute('data-error-msg')}'` : ''}
    ${this.hasAttribute('data-use-default') ? `data-use-default` : ''}
    ${this.hasAttribute('data-force-manual') ? `data-force-manual` : ''}
    ${this.hasAttribute('data-matched') ? `data-matched='${this.getAttribute('data-matched')}'` : ''}
    ${this.hasAttribute('data-matched-label') ? `data-matched-label='${this.getAttribute('data-matched-label')}'` : ''}
    ${this.hasAttribute('data-disabled') ? 'data-disabled="disabled"' : ''} 
    data-postcode-lookup-label="Back to UK postcode lookup">

    <p class="hint pb-2 d-block" slot="hint">Unsure of the postcode? Check with the <a href="https://www.royalmail.com/find-a-postcode" target="_blank"><i class="fa-regular fa-arrow-up-right-from-square"></i>Royal Mail address finder</a></p>
    <span class="h3 pb-2">Street address</span>

    <fieldset class="atleastone mb-3">
      <span class="invalid-feedback">You must complete at least one of the highlighted fields.</span>

      <span class="hint mb-4">Please ensure details are provided for at least one of these fields.</span>

      <label class="mb-1">Flat number <input name="sub_building_name" type="text" data-readonly data-required /></label>
      <span class="hint mb-2">Flat, unit or floor number (e.g. Flat 5, or Floor 6)</span>
      
      <label class="mb-1">Building name <input name="building_name" type="text" data-required maxlength="50"/></label>
      <span class="hint mb-2">Name of the house or building</span>

      <label>House Number <input name="building_number" type="text" data-required data-readonly maxlength="50"/></label>
      <span class="hint mb-2">House or street number (e.g. 42)</span>

      <label class="mb-1">Street 1 <input name="dependent_thoroughfare" type="text" data-readonly data-required maxlength="81"/></label>
      <span class="hint mb-2">Additional street name </span>

      <label class="mb-1">Street 2 <input name="thoroughfare" type="text" data-readonly data-required maxlength="81"/></label>
      <span class="hint mb-2">Primary street name</span>
    </fieldset>


    <span class="h3 pb-2">Locality details</span>
    <label>Area${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="dependent_locality" type="text" maxlength="35" data-readonly/></label>
    <label>Village${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="locality" type="text" maxlength="35" data-readonly/></label>
    <label>Town / City${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="post_town" type="text" maxlength="30" data-readonly/></label>
    <label>County${this.hasAttribute('data-show-required') && this.hasAttribute('data-county-required') ? '*' : (!this.hasAttribute('data-show-required') && !this.hasAttribute('data-county-required') ? ' (optional)' : '')} 
    <select name="postal_county" ${this.hasAttribute('data-county-required') ? 'data-required' : ''} data-readonly>
      <option></option>  
      ${countiesString}
    </select></label>
    <label>Postcode${this.hasAttribute('data-show-required') ? '*' : ''} <input name="postcode" type="text" ${!this.hasAttribute('data-required') || this.hasAttribute('data-required') && this.getAttribute('data-required') == 'false' ? 'required data-required' : ''} data-readonly maxlength="8" ${this.hasAttribute('data-required') ? ' required' : ''}/></label>
    <label>Country${this.hasAttribute('data-show-required') && this.hasAttribute('data-country-required') ? '*' : (!this.hasAttribute('data-show-required') && !this.hasAttribute('data-county-required') ? ' (optional)' : '')} 
      <select name="region" data-readonly ${this.hasAttribute('data-country-required') ? 'data-required' : ''}>
        <option value=""></option>
        <option value="urn:als:region:qo7jMNaA4" data-value="England">England</option>
        <option value="urn:als:region:JPBkFjL6I" data-value="Scotland">Scotland</option>
        <option value="urn:als:region:3lqe2D3qO" data-value="Wales">Wales</option>
        <option value="urn:als:region:Tm5pOBfK9" data-value="Northern Ireland">Northern Ireland</option>
        <option value="urn:als:region:ZwIRAnNJo" data-value="Channel Islands">Channel Islands</option>
        <option value="urn:als:region:8CIOi1khw" data-value="Jersey">Jersey</option>
        <option value="urn:als:region:qHdx7tNtL" data-value="Guernsey">Guernsey</option>
        <option value="urn:als:region:DH6LU70lY" data-value="Isle of Man">Isle of Man</option>
      </select>
    </label>

    ${this.hasAttribute('data-allow-overseas') ?
        `<fieldset class="overseas">

      <span class="h3 pb-2">Street address</span>

      <fieldset class="overseas-atleastone">
        <span class="invalid-feedback">You must complete at least one of the highlighted fields.</span>

        <span class="hint mb-4">Please ensure details are provided for at least one of these fields.</span>


        <label class="mb-1">Flat number${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[sub_building_name]" type="text" data-overseas-required /></label>
        <span class="hint d-block mb-2">Flat, unit or floor number (e.g. Flat 5, or Floor 6)</span>

        <label class="mb-1">Building name${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[building_name]" type="text" data-overseas-required maxlength="50" /></label>
        <span class="hint d-block mb-2">Name of the house or building</span>

        <label class="mb-1">House number${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[building_number]" type="text" data-overseas-required maxlength="50" /></label>
        <span class="hint d-block mb-2">House or street number (e.g. 42)</span>

        <label class="mb-2">Street name${this.hasAttribute('data-show-required') ? '*' : ''} <input name="overseas[thoroughfare]" type="text" data-overseas-required maxlength="81" /></label>
      </fieldset>
      <span class="h3 pb-2">Locality details</span>



      <label class="mb-1">Locality${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[dependent_locality]" type="text" /></label>
      <span class="hint d-block mb-2">Main locality, such as the village, suburb, or district</span>


      <label>Town / City${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[post_town]" type="text" maxlength="30" /></label>
      <label>State / Province / Region${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[double_dependent_locality]" type="text" /></label>
      <label>Postcode / ZIP code${this.hasAttribute('data-show-required') ? '' : ' (optional)'} <input name="overseas[zip_code]" type="text" /></label>
      
      <label>Country <select name="overseas[country_code]" data-overseas-required>
        <option value=""></option>
        ${countriesString}
        <option value="urn:als:country:ndjIqa72" data-value="Poland">Poland</option>
      </select></label>
    </fieldset>

    <button slot="actions" type="button" id="overseasToggle" class="link toggleOverseas">Use overseas address</button>` : ''}
    ${this.hasAttribute('data-address-unknown') ? `<label slot="actions" id="address_unknown_checkbox"><input type="checkbox" value="true" name="${this.getAttribute('data-address-unknown')}" ${this.hasAttribute('data-address-unknown-checked') ? 'checked="checked"' : '' }/> Address unknown</label>` : ``}
    <div class="bg-light text-center px-3" slot="afterList">
      <p class="p-2">Can't find an address? Check details with the <br/><a href="" class="fa-new"><i class="fa-regular fa-arrow-up-right-from-square"></i>Royal mail address finder</a></p>
      ${this.hasAttribute('data-allow-overseas') ? `<hr/><p class="p-2">If the address doesn’t exist you can enter manually <br /><button type="button" id="overseasToggleInline" class="mt-1 mb-0 btn btn-action"><i class="fa-regular fa-edit me-1"></i>Enter address manually</button></p>` : ''}
    </div>
    <div class="bg-light text-center px-3" slot="beforeList">
      <p class="p-2"><span class="default">Welsh</span><span class="alt">English</span> language addresses are available <br /><button type="button" id="languageToggle" class="mt-1 mb-0 btn btn-action"><i class="fa-regular fa-globe me-1"></i>Show addresses in <span class="default">Welsh</span><span class="alt">English</span></button></p>
    </div>
    ${currentContent}
    </iam-address-lookup>`;

    const addressComponent = this.querySelector('iam-address-lookup');
    const overseasToggle = this.querySelector('#overseasToggle');
    const overseasToggleInline = this.querySelector('#overseasToggleInline');
    const languageToggle = this.querySelector('#languageToggle');
    const atleastone = this.querySelector('.overseas-atleastone');
    const overseasFields = this.querySelector('.overseas');
    const addressUnknownCheckbox = this.querySelector('#address_unknown_checkbox input');

    const openOverseas = (): void => {
      const updateEvent = new CustomEvent('open-manual');
      addressComponent.dispatchEvent(updateEvent);
      this.classList.add('show-overseas');

      Array.from(addressComponent.querySelectorAll('[data-required]')).forEach((input) => {
        input.removeAttribute('required');
      });
      Array.from(overseasFields.querySelectorAll('[data-overseas-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
    }

    overseasToggle?.addEventListener('click', () => {

      if (!this.classList.contains('show-overseas')) {
        openOverseas();
      }
    });

    overseasToggleInline?.addEventListener('click', () => {

      if (!this.classList.contains('show-overseas')) {
        openOverseas();
      }
    });

    addressComponent?.addEventListener('switch-to-lookup', () => {
      this.classList.remove('show-overseas');


      Array.from(overseasFields.querySelectorAll('[data-overseas-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });
    });

    languageToggle?.addEventListener('click', () => {

      if (!addressComponent.classList.contains('show-welsh')) {
        addressComponent.classList.add('show-welsh');
        addressComponent?.setAttribute('data-url-2', '&welsh_language=true');
      }
      else {
        addressComponent.classList.remove('show-welsh');
        addressComponent?.setAttribute('data-url-2', '&welsh_language=false');
      }

      const updateEvent = new CustomEvent('search');
      addressComponent.dispatchEvent(updateEvent);

      languageToggle.focus();

    });


    atleastone?.addEventListener('input', (e) => {

      Array.from(atleastone.querySelectorAll('[data-overseas-required]')).forEach((input) => {
        input.setAttribute('required', 'true');
      });


      if (atleastone.querySelector('input:valid, input.is-valid')) {
        Array.from(atleastone.querySelectorAll('input')).forEach(element => {
          element.removeAttribute('required');
        });
      }
      else {
        Array.from(atleastone.querySelectorAll('input')).forEach((input) => {
          input.setAttribute('required', 'true');
        });
      }
    });


    // If the address unknown checkbox if checked then remove any required fields so you can post the form
    if(this.hasAttribute('data-address-unknown')){
      const addressUnknownInput = this.querySelector(`[name="${this.getAttribute('data-address-unknown')}"]`);

      if(addressUnknownInput && addressUnknownInput.checked) {
        
        Array.from(this.querySelectorAll('[required]')).forEach(element => {
          element.removeAttribute('required');
          element.setAttribute('data-not-unknown-required','true');
        });
      }

      addressUnknownInput?.addEventListener('change',(event) => {
        if(addressUnknownInput.checked) {
          Array.from(this.querySelectorAll('[required]')).forEach(element => {
            element.removeAttribute('required');
            element.setAttribute('data-not-unknown-required','true');
          });

          const updateEvent = new CustomEvent('address-unknown');
          this.dispatchEvent(updateEvent);
        }
        else {
          Array.from(this.querySelectorAll('[data-not-unknown-required')).forEach(element => {
            element.setAttribute('required','true');
          });
          
          const updateEvent = new CustomEvent('address-known');
          this.dispatchEvent(updateEvent);
        }
      });
    }


    // If inside conditional
    

    if(this.closest('.conditional')){


      Array.from(this.querySelectorAll('[required]')).forEach((input) => {

        input.setAttribute('data-conditional-required','true');
        input.removeAttribute('required');
      });
      
      Array.from(this.querySelectorAll('[data-required]')).forEach((input) => {

        input.setAttribute('data-conditional-data-required','true');
        input.removeAttribute('data-required');
      });
      
      const conditionalStyles = window.getComputedStyle(this.closest('.conditional'));

      if(conditionalStyles.getPropertyValue("display") == 'block'){
        Array.from(this.querySelectorAll('[data-conditional-data-required]')).forEach((input) => {
          input.setAttribute('data-required', 'true');
        });
        Array.from(this.querySelectorAll('[data-conditional-required]')).forEach((input) => {
          input.setAttribute('required', 'true');
        });
      }
    }


    // Addres unknown

    if(this.hasAttribute('data-address-unknown')) {
      const toggleAddressFields = () => {

        if(addressUnknownCheckbox.checked){
          Array.from(this.querySelectorAll(`input:not([name="${this.getAttribute('data-address-unknown')}"]), select`)).forEach((input) => {

            input.setAttribute('disabled','disabled');
            input.setAttribute('data-unknown-disabled','true');

            addressComponent.setAttribute('data-disabled','disabled');
          });
        }
        else {
          Array.from(this.querySelectorAll('[data-unknown-disabled]')).forEach((input) => {

            addressComponent.removeAttribute('data-disabled','disabled');
            input.removeAttribute('disabled');
            input.removeAttribute('data-unknown-disabled');
          });
        }
      }
      toggleAddressFields();

      addressUnknownCheckbox?.addEventListener('change', (e) => {

        toggleAddressFields();
      });
    }
  }

  static get observedAttributes(): any {
    return ['data-url'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    const addressComponent = this.querySelector('iam-address-lookup');

    switch (attrName) {
      case 'data-url': {
        if (oldVal != newVal && addressComponent) {
          addressComponent.setAttribute('data-url', newVal + '?search_string=');
        }
        break;
      }
    }
  }
}

export default iamSTDAddressLookup;
