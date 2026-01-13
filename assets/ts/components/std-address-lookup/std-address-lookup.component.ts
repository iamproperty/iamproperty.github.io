import iamAddressLookup from '../address-lookup/address-lookup.component';

const countries = [
  {
    "id": "urn:iamproperty:country:AF",
    "country_name": "Afghanistan"
  },
  {
    "id": "urn:iamproperty:country:AX",
    "country_name": "Aland Islands"
  },
  {
    "id": "urn:iamproperty:country:AL",
    "country_name": "Albania"
  },
  {
    "id": "urn:iamproperty:country:DZ",
    "country_name": "Algeria"
  },
  {
    "id": "urn:iamproperty:country:AS",
    "country_name": "American Samoa"
  },
  {
    "id": "urn:iamproperty:country:AD",
    "country_name": "Andorra"
  },
  {
    "id": "urn:iamproperty:country:AO",
    "country_name": "Angola"
  },
  {
    "id": "urn:iamproperty:country:AI",
    "country_name": "Anguilla"
  },
  {
    "id": "urn:iamproperty:country:AQ",
    "country_name": "Antarctica"
  },
  {
    "id": "urn:iamproperty:country:AG",
    "country_name": "Antigua and Barbuda"
  },
  {
    "id": "urn:iamproperty:country:AR",
    "country_name": "Argentina"
  },
  {
    "id": "urn:iamproperty:country:AM",
    "country_name": "Armenia"
  },
  {
    "id": "urn:iamproperty:country:AW",
    "country_name": "Aruba"
  },
  {
    "id": "urn:iamproperty:country:AU",
    "country_name": "Australia"
  },
  {
    "id": "urn:iamproperty:country:AT",
    "country_name": "Austria"
  },
  {
    "id": "urn:iamproperty:country:AZ",
    "country_name": "Azerbaijan"
  },
  {
    "id": "urn:iamproperty:country:BS",
    "country_name": "Bahamas"
  },
  {
    "id": "urn:iamproperty:country:BH",
    "country_name": "Bahrain"
  },
  {
    "id": "urn:iamproperty:country:BD",
    "country_name": "Bangladesh"
  },
  {
    "id": "urn:iamproperty:country:BB",
    "country_name": "Barbados"
  },
  {
    "id": "urn:iamproperty:country:BY",
    "country_name": "Belarus"
  },
  {
    "id": "urn:iamproperty:country:BE",
    "country_name": "Belgium"
  },
  {
    "id": "urn:iamproperty:country:BZ",
    "country_name": "Belize"
  },
  {
    "id": "urn:iamproperty:country:BJ",
    "country_name": "Benin"
  },
  {
    "id": "urn:iamproperty:country:BM",
    "country_name": "Bermuda"
  },
  {
    "id": "urn:iamproperty:country:BT",
    "country_name": "Bhutan"
  },
  {
    "id": "urn:iamproperty:country:BO",
    "country_name": "Bolivia (Plurinational State of)"
  },
  {
    "id": "urn:iamproperty:country:BQ",
    "country_name": "Bonaire, Sint Eustatius and Saba"
  },
  {
    "id": "urn:iamproperty:country:BA",
    "country_name": "Bosnia and Herzegovina"
  },
  {
    "id": "urn:iamproperty:country:BW",
    "country_name": "Botswana"
  },
  {
    "id": "urn:iamproperty:country:BV",
    "country_name": "Bouvet Island"
  },
  {
    "id": "urn:iamproperty:country:BR",
    "country_name": "Brazil"
  },
  {
    "id": "urn:iamproperty:country:IO",
    "country_name": "British Indian Ocean Territory"
  },
  {
    "id": "urn:iamproperty:country:BN",
    "country_name": "Brunei Darussalam"
  },
  {
    "id": "urn:iamproperty:country:BG",
    "country_name": "Bulgaria"
  },
  {
    "id": "urn:iamproperty:country:BF",
    "country_name": "Burkina Faso"
  },
  {
    "id": "urn:iamproperty:country:BI",
    "country_name": "Burundi"
  },
  {
    "id": "urn:iamproperty:country:KH",
    "country_name": "Cambodia"
  },
  {
    "id": "urn:iamproperty:country:CM",
    "country_name": "Cameroon"
  },
  {
    "id": "urn:iamproperty:country:CA",
    "country_name": "Canada"
  },
  {
    "id": "urn:iamproperty:country:CV",
    "country_name": "Cabo Verde"
  },
  {
    "id": "urn:iamproperty:country:KY",
    "country_name": "Cayman Islands"
  },
  {
    "id": "urn:iamproperty:country:CF",
    "country_name": "Central African Republic"
  },
  {
    "id": "urn:iamproperty:country:TD",
    "country_name": "Chad"
  },
  {
    "id": "urn:iamproperty:country:CL",
    "country_name": "Chile"
  },
  {
    "id": "urn:iamproperty:country:CN",
    "country_name": "China"
  },
  {
    "id": "urn:iamproperty:country:CX",
    "country_name": "Christmas Island"
  },
  {
    "id": "urn:iamproperty:country:CC",
    "country_name": "Cocos (Keeling) Islands"
  },
  {
    "id": "urn:iamproperty:country:CO",
    "country_name": "Colombia"
  },
  {
    "id": "urn:iamproperty:country:KM",
    "country_name": "Comoros"
  },
  {
    "id": "urn:iamproperty:country:CG",
    "country_name": "Congo"
  },
  {
    "id": "urn:iamproperty:country:CD",
    "country_name": "Congo (Democratic Republic of the)"
  },
  {
    "id": "urn:iamproperty:country:CK",
    "country_name": "Cook Islands"
  },
  {
    "id": "urn:iamproperty:country:CR",
    "country_name": "Costa Rica"
  },
  {
    "id": "urn:iamproperty:country:CI",
    "country_name": "Côte d’Ivoire"
  },
  {
    "id": "urn:iamproperty:country:HR",
    "country_name": "Croatia"
  },
  {
    "id": "urn:iamproperty:country:CU",
    "country_name": "Cuba"
  },
  {
    "id": "urn:iamproperty:country:CW",
    "country_name": "Curaçao"
  },
  {
    "id": "urn:iamproperty:country:CY",
    "country_name": "Cyprus"
  },
  {
    "id": "urn:iamproperty:country:CZ",
    "country_name": "Czech Republic"
  },
  {
    "id": "urn:iamproperty:country:DK",
    "country_name": "Denmark"
  },
  {
    "id": "urn:iamproperty:country:DJ",
    "country_name": "Djibouti"
  },
  {
    "id": "urn:iamproperty:country:DM",
    "country_name": "Dominica"
  },
  {
    "id": "urn:iamproperty:country:DO",
    "country_name": "Dominican Republic"
  },
  {
    "id": "urn:iamproperty:country:EC",
    "country_name": "Ecuador"
  },
  {
    "id": "urn:iamproperty:country:EG",
    "country_name": "Egypt"
  },
  {
    "id": "urn:iamproperty:country:SV",
    "country_name": "El Salvador"
  },
  {
    "id": "urn:iamproperty:country:GQ",
    "country_name": "Equatorial Guinea"
  },
  {
    "id": "urn:iamproperty:country:ER",
    "country_name": "Eritrea"
  },
  {
    "id": "urn:iamproperty:country:EE",
    "country_name": "Estonia"
  },
  {
    "id": "urn:iamproperty:country:ET",
    "country_name": "Ethiopia"
  },
  {
    "id": "urn:iamproperty:country:FK",
    "country_name": "Falkland Islands (Malvinas)"
  },
  {
    "id": "urn:iamproperty:country:FO",
    "country_name": "Faroe Islands"
  },
  {
    "id": "urn:iamproperty:country:FJ",
    "country_name": "Fiji"
  },
  {
    "id": "urn:iamproperty:country:FI",
    "country_name": "Finland"
  },
  {
    "id": "urn:iamproperty:country:FR",
    "country_name": "France"
  },
  {
    "id": "urn:iamproperty:country:GF",
    "country_name": "French Guiana"
  },
  {
    "id": "urn:iamproperty:country:PF",
    "country_name": "French Polynesia"
  },
  {
    "id": "urn:iamproperty:country:TF",
    "country_name": "French Southern Territories"
  },
  {
    "id": "urn:iamproperty:country:GA",
    "country_name": "Gabon"
  },
  {
    "id": "urn:iamproperty:country:GM",
    "country_name": "Gambia"
  },
  {
    "id": "urn:iamproperty:country:GE",
    "country_name": "Georgia"
  },
  {
    "id": "urn:iamproperty:country:DE",
    "country_name": "Germany"
  },
  {
    "id": "urn:iamproperty:country:GH",
    "country_name": "Ghana"
  },
  {
    "id": "urn:iamproperty:country:GI",
    "country_name": "Gibraltar"
  },
  {
    "id": "urn:iamproperty:country:GR",
    "country_name": "Greece"
  },
  {
    "id": "urn:iamproperty:country:GL",
    "country_name": "Greenland"
  },
  {
    "id": "urn:iamproperty:country:GD",
    "country_name": "Grenada"
  },
  {
    "id": "urn:iamproperty:country:GP",
    "country_name": "Guadeloupe"
  },
  {
    "id": "urn:iamproperty:country:GU",
    "country_name": "Guam"
  },
  {
    "id": "urn:iamproperty:country:GT",
    "country_name": "Guatemala"
  },
  {
    "id": "urn:iamproperty:country:GG",
    "country_name": "Guernsey"
  },
  {
    "id": "urn:iamproperty:country:GN",
    "country_name": "Guinea"
  },
  {
    "id": "urn:iamproperty:country:GW",
    "country_name": "Guinea-Bissau"
  },
  {
    "id": "urn:iamproperty:country:GY",
    "country_name": "Guyana"
  },
  {
    "id": "urn:iamproperty:country:HT",
    "country_name": "Haiti"
  },
  {
    "id": "urn:iamproperty:country:HM",
    "country_name": "Heard Island and McDonald Islands"
  },
  {
    "id": "urn:iamproperty:country:VA",
    "country_name": "Holy See"
  },
  {
    "id": "urn:iamproperty:country:HN",
    "country_name": "Honduras"
  },
  {
    "id": "urn:iamproperty:country:HK",
    "country_name": "Hong Kong"
  },
  {
    "id": "urn:iamproperty:country:HU",
    "country_name": "Hungary"
  },
  {
    "id": "urn:iamproperty:country:IS",
    "country_name": "Iceland"
  },
  {
    "id": "urn:iamproperty:country:IN",
    "country_name": "India"
  },
  {
    "id": "urn:iamproperty:country:ID",
    "country_name": "Indonesia"
  },
  {
    "id": "urn:iamproperty:country:IR",
    "country_name": "Iran (Islamic Republic of)"
  },
  {
    "id": "urn:iamproperty:country:IQ",
    "country_name": "Iraq"
  },
  {
    "id": "urn:iamproperty:country:IE",
    "country_name": "Ireland"
  },
  {
    "id": "urn:iamproperty:country:IM",
    "country_name": "Isle of Man"
  },
  {
    "id": "urn:iamproperty:country:IL",
    "country_name": "Israel"
  },
  {
    "id": "urn:iamproperty:country:IT",
    "country_name": "Italy"
  },
  {
    "id": "urn:iamproperty:country:JM",
    "country_name": "Jamaica"
  },
  {
    "id": "urn:iamproperty:country:JP",
    "country_name": "Japan"
  },
  {
    "id": "urn:iamproperty:country:JE",
    "country_name": "Jersey"
  },
  {
    "id": "urn:iamproperty:country:JO",
    "country_name": "Jordan"
  },
  {
    "id": "urn:iamproperty:country:KZ",
    "country_name": "Kazakhstan"
  },
  {
    "id": "urn:iamproperty:country:KE",
    "country_name": "Kenya"
  },
  {
    "id": "urn:iamproperty:country:KI",
    "country_name": "Kiribati"
  },
  {
    "id": "urn:iamproperty:country:KP",
    "country_name": "Korea (Democratic People's Republic of)"
  },
  {
    "id": "urn:iamproperty:country:KR",
    "country_name": "Korea (Republic of)"
  },
  {
    "id": "urn:iamproperty:country:KW",
    "country_name": "Kuwait"
  },
  {
    "id": "urn:iamproperty:country:KG",
    "country_name": "Kyrgyzstan"
  },
  {
    "id": "urn:iamproperty:country:LA",
    "country_name": "Lao People's Democratic Republic"
  },
  {
    "id": "urn:iamproperty:country:LV",
    "country_name": "Latvia"
  },
  {
    "id": "urn:iamproperty:country:LB",
    "country_name": "Lebanon"
  },
  {
    "id": "urn:iamproperty:country:LS",
    "country_name": "Lesotho"
  },
  {
    "id": "urn:iamproperty:country:LR",
    "country_name": "Liberia"
  },
  {
    "id": "urn:iamproperty:country:LY",
    "country_name": "Libya"
  },
  {
    "id": "urn:iamproperty:country:LI",
    "country_name": "Liechtenstein"
  },
  {
    "id": "urn:iamproperty:country:LT",
    "country_name": "Lithuania"
  },
  {
    "id": "urn:iamproperty:country:LU",
    "country_name": "Luxembourg"
  },
  {
    "id": "urn:iamproperty:country:MO",
    "country_name": "Macao"
  },
  {
    "id": "urn:iamproperty:country:MK",
    "country_name": "Republic of North Macedonia"
  },
  {
    "id": "urn:iamproperty:country:MG",
    "country_name": "Madagascar"
  },
  {
    "id": "urn:iamproperty:country:MW",
    "country_name": "Malawi"
  },
  {
    "id": "urn:iamproperty:country:MY",
    "country_name": "Malaysia"
  },
  {
    "id": "urn:iamproperty:country:MV",
    "country_name": "Maldives"
  },
  {
    "id": "urn:iamproperty:country:ML",
    "country_name": "Mali"
  },
  {
    "id": "urn:iamproperty:country:MT",
    "country_name": "Malta"
  },
  {
    "id": "urn:iamproperty:country:MH",
    "country_name": "Marshall Islands"
  },
  {
    "id": "urn:iamproperty:country:MQ",
    "country_name": "Martinique"
  },
  {
    "id": "urn:iamproperty:country:MR",
    "country_name": "Mauritania"
  },
  {
    "id": "urn:iamproperty:country:MU",
    "country_name": "Mauritius"
  },
  {
    "id": "urn:iamproperty:country:YT",
    "country_name": "Mayotte"
  },
  {
    "id": "urn:iamproperty:country:MX",
    "country_name": "Mexico"
  },
  {
    "id": "urn:iamproperty:country:FM",
    "country_name": "Micronesia (Federated States of)"
  },
  {
    "id": "urn:iamproperty:country:MD",
    "country_name": "Moldova (Republic of)"
  },
  {
    "id": "urn:iamproperty:country:MC",
    "country_name": "Monaco"
  },
  {
    "id": "urn:iamproperty:country:MN",
    "country_name": "Mongolia"
  },
  {
    "id": "urn:iamproperty:country:ME",
    "country_name": "Montenegro"
  },
  {
    "id": "urn:iamproperty:country:MS",
    "country_name": "Montserrat"
  },
  {
    "id": "urn:iamproperty:country:MA",
    "country_name": "Morocco"
  },
  {
    "id": "urn:iamproperty:country:MZ",
    "country_name": "Mozambique"
  },
  {
    "id": "urn:iamproperty:country:MM",
    "country_name": "Myanmar"
  },
  {
    "id": "urn:iamproperty:country:NA",
    "country_name": "Namibia"
  },
  {
    "id": "urn:iamproperty:country:NR",
    "country_name": "Nauru"
  },
  {
    "id": "urn:iamproperty:country:NP",
    "country_name": "Nepal"
  },
  {
    "id": "urn:iamproperty:country:NL",
    "country_name": "Netherlands"
  },
  {
    "id": "urn:iamproperty:country:NC",
    "country_name": "New Caledonia"
  },
  {
    "id": "urn:iamproperty:country:NZ",
    "country_name": "New Zealand"
  },
  {
    "id": "urn:iamproperty:country:NI",
    "country_name": "Nicaragua"
  },
  {
    "id": "urn:iamproperty:country:NE",
    "country_name": "Niger"
  },
  {
    "id": "urn:iamproperty:country:NG",
    "country_name": "Nigeria"
  },
  {
    "id": "urn:iamproperty:country:NU",
    "country_name": "Niue"
  },
  {
    "id": "urn:iamproperty:country:NF",
    "country_name": "Norfolk Island"
  },
  {
    "id": "urn:iamproperty:country:MP",
    "country_name": "Northern Mariana Islands"
  },
  {
    "id": "urn:iamproperty:country:NO",
    "country_name": "Norway"
  },
  {
    "id": "urn:iamproperty:country:OM",
    "country_name": "Oman"
  },
  {
    "id": "urn:iamproperty:country:PK",
    "country_name": "Pakistan"
  },
  {
    "id": "urn:iamproperty:country:PW",
    "country_name": "Palau"
  },
  {
    "id": "urn:iamproperty:country:PS",
    "country_name": "Palestine, State of"
  },
  {
    "id": "urn:iamproperty:country:PA",
    "country_name": "Panama"
  },
  {
    "id": "urn:iamproperty:country:PG",
    "country_name": "Papua New Guinea"
  },
  {
    "id": "urn:iamproperty:country:PY",
    "country_name": "Paraguay"
  },
  {
    "id": "urn:iamproperty:country:PE",
    "country_name": "Peru"
  },
  {
    "id": "urn:iamproperty:country:PH",
    "country_name": "Philippines"
  },
  {
    "id": "urn:iamproperty:country:PN",
    "country_name": "Pitcairn"
  },
  {
    "id": "urn:iamproperty:country:PL",
    "country_name": "Poland"
  },
  {
    "id": "urn:iamproperty:country:PT",
    "country_name": "Portugal"
  },
  {
    "id": "urn:iamproperty:country:PR",
    "country_name": "Puerto Rico"
  },
  {
    "id": "urn:iamproperty:country:QA",
    "country_name": "Qatar"
  },
  {
    "id": "urn:iamproperty:country:RE",
    "country_name": "Réunion"
  },
  {
    "id": "urn:iamproperty:country:RO",
    "country_name": "Romania"
  },
  {
    "id": "urn:iamproperty:country:RU",
    "country_name": "Russian Federation"
  },
  {
    "id": "urn:iamproperty:country:RW",
    "country_name": "Rwanda"
  },
  {
    "id": "urn:iamproperty:country:BL",
    "country_name": "Saint Barthélemy"
  },
  {
    "id": "urn:iamproperty:country:SH",
    "country_name": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "id": "urn:iamproperty:country:KN",
    "country_name": "Saint Kitts and Nevis"
  },
  {
    "id": "urn:iamproperty:country:LC",
    "country_name": "Saint Lucia"
  },
  {
    "id": "urn:iamproperty:country:MF",
    "country_name": "Saint Martin (French part)"
  },
  {
    "id": "urn:iamproperty:country:PM",
    "country_name": "Saint Pierre and Miquelon"
  },
  {
    "id": "urn:iamproperty:country:VC",
    "country_name": "Saint Vincent and the Grenadines"
  },
  {
    "id": "urn:iamproperty:country:WS",
    "country_name": "Samoa"
  },
  {
    "id": "urn:iamproperty:country:SM",
    "country_name": "San Marino"
  },
  {
    "id": "urn:iamproperty:country:ST",
    "country_name": "Sao Tome and Principe"
  },
  {
    "id": "urn:iamproperty:country:SA",
    "country_name": "Saudi Arabia"
  },
  {
    "id": "urn:iamproperty:country:SN",
    "country_name": "Senegal"
  },
  {
    "id": "urn:iamproperty:country:RS",
    "country_name": "Serbia"
  },
  {
    "id": "urn:iamproperty:country:SC",
    "country_name": "Seychelles"
  },
  {
    "id": "urn:iamproperty:country:SL",
    "country_name": "Sierra Leone"
  },
  {
    "id": "urn:iamproperty:country:SG",
    "country_name": "Singapore"
  },
  {
    "id": "urn:iamproperty:country:SX",
    "country_name": "Sint Maarten (Dutch part)"
  },
  {
    "id": "urn:iamproperty:country:SK",
    "country_name": "Slovakia"
  },
  {
    "id": "urn:iamproperty:country:SI",
    "country_name": "Slovenia"
  },
  {
    "id": "urn:iamproperty:country:SB",
    "country_name": "Solomon Islands"
  },
  {
    "id": "urn:iamproperty:country:SO",
    "country_name": "Somalia"
  },
  {
    "id": "urn:iamproperty:country:ZA",
    "country_name": "South Africa"
  },
  {
    "id": "urn:iamproperty:country:GS",
    "country_name": "South Georgia and the South Sandwich Islands"
  },
  {
    "id": "urn:iamproperty:country:SS",
    "country_name": "South Sudan"
  },
  {
    "id": "urn:iamproperty:country:ES",
    "country_name": "Spain"
  },
  {
    "id": "urn:iamproperty:country:LK",
    "country_name": "Sri Lanka"
  },
  {
    "id": "urn:iamproperty:country:SD",
    "country_name": "Sudan"
  },
  {
    "id": "urn:iamproperty:country:SR",
    "country_name": "Suriname"
  },
  {
    "id": "urn:iamproperty:country:SJ",
    "country_name": "Svalbard and Jan Mayen"
  },
  {
    "id": "urn:iamproperty:country:SZ",
    "country_name": "The Kingdom of Eswatini"
  },
  {
    "id": "urn:iamproperty:country:SE",
    "country_name": "Sweden"
  },
  {
    "id": "urn:iamproperty:country:CH",
    "country_name": "Switzerland"
  },
  {
    "id": "urn:iamproperty:country:SY",
    "country_name": "Syrian Arab Republic"
  },
  {
    "id": "urn:iamproperty:country:TW",
    "country_name": "Taiwan, Province of China"
  },
  {
    "id": "urn:iamproperty:country:TJ",
    "country_name": "Tajikistan"
  },
  {
    "id": "urn:iamproperty:country:TZ",
    "country_name": "Tanzania, United Republic of"
  },
  {
    "id": "urn:iamproperty:country:TH",
    "country_name": "Thailand"
  },
  {
    "id": "urn:iamproperty:country:TL",
    "country_name": "Timor-Leste"
  },
  {
    "id": "urn:iamproperty:country:TG",
    "country_name": "Togo"
  },
  {
    "id": "urn:iamproperty:country:TK",
    "country_name": "Tokelau"
  },
  {
    "id": "urn:iamproperty:country:TO",
    "country_name": "Tonga"
  },
  {
    "id": "urn:iamproperty:country:TT",
    "country_name": "Trinidad and Tobago"
  },
  {
    "id": "urn:iamproperty:country:TN",
    "country_name": "Tunisia"
  },
  {
    "id": "urn:iamproperty:country:TR",
    "country_name": "Republic of Türkiye"
  },
  {
    "id": "urn:iamproperty:country:TM",
    "country_name": "Turkmenistan"
  },
  {
    "id": "urn:iamproperty:country:TC",
    "country_name": "Turks and Caicos Islands"
  },
  {
    "id": "urn:iamproperty:country:TV",
    "country_name": "Tuvalu"
  },
  {
    "id": "urn:iamproperty:country:UG",
    "country_name": "Uganda"
  },
  {
    "id": "urn:iamproperty:country:UA",
    "country_name": "Ukraine"
  },
  {
    "id": "urn:iamproperty:country:AE",
    "country_name": "United Arab Emirates"
  },
  {
    "id": "urn:iamproperty:country:GB",
    "country_name": "United Kingdom of Great Britain and Northern Ireland"
  },
  {
    "id": "urn:iamproperty:country:US",
    "country_name": "United States of America"
  },
  {
    "id": "urn:iamproperty:country:UM",
    "country_name": "United States Minor Outlying Islands"
  },
  {
    "id": "urn:iamproperty:country:UY",
    "country_name": "Uruguay"
  },
  {
    "id": "urn:iamproperty:country:UZ",
    "country_name": "Uzbekistan"
  },
  {
    "id": "urn:iamproperty:country:VU",
    "country_name": "Vanuatu"
  },
  {
    "id": "urn:iamproperty:country:VE",
    "country_name": "Venezuela (Bolivarian Republic of)"
  },
  {
    "id": "urn:iamproperty:country:VN",
    "country_name": "Viet Nam"
  },
  {
    "id": "urn:iamproperty:country:VG",
    "country_name": "Virgin Islands (British)"
  },
  {
    "id": "urn:iamproperty:country:VI",
    "country_name": "Virgin Islands (U.S.)"
  },
  {
    "id": "urn:iamproperty:country:WF",
    "country_name": "Wallis and Futuna"
  },
  {
    "id": "urn:iamproperty:country:EH",
    "country_name": "Western Sahara"
  },
  {
    "id": "urn:iamproperty:country:YE",
    "country_name": "Yemen"
  },
  {
    "id": "urn:iamproperty:country:ZM",
    "country_name": "Zambia"
  },
  {
    "id": "urn:iamproperty:country:ZW",
    "country_name": "Zimbabwe"
  }
];

const counties = [
    {
        "id": "urn:iamproperty:county:ekHuOPAhk",
        "county": "Monmouthshire"
    },
    {
        "id": "urn:iamproperty:county:AEbmaIiuw",
        "county": "Cambridgeshire"
    },
    {
        "id": "urn:iamproperty:county:HN2Hekmbp",
        "county": "South Lanarkshire"
    },
    {
        "id": "urn:iamproperty:county:520Tnh4wg",
        "county": "Derbyshire"
    },
    {
        "id": "urn:iamproperty:county:l5UCrwlvB",
        "county": "Devon"
    },
    {
        "id": "urn:iamproperty:county:GCA8Jh6Ic",
        "county": "Bristol"
    },
    {
        "id": "urn:iamproperty:county:Mi1lAB5uQ",
        "county": "Rhondda Cynon Taf"
    },
    {
        "id": "urn:iamproperty:county:n4jPkt4qP",
        "county": "Carmarthenshire"
    },
    {
        "id": "urn:iamproperty:county:XO1G4TTb5",
        "county": "Aberdeenshire"
    },
    {
        "id": "urn:iamproperty:county:JIaxjhlxx",
        "county": "North Somerset"
    },
    {
        "id": "urn:iamproperty:county:hLrOnlFfB",
        "county": "Nottinghamshire"
    },
    {
        "id": "urn:iamproperty:county:oGMGorIRg",
        "county": "Durham"
    },
    {
        "id": "urn:iamproperty:county:eBaLXgG8Y",
        "county": "Isle of Wight"
    },
    {
        "id": "urn:iamproperty:county:NMsdqInpw",
        "county": "Northamptonshire"
    },
    {
        "id": "urn:iamproperty:county:xRBQIke3k",
        "county": "Warwickshire"
    },
    {
        "id": "urn:iamproperty:county:R7yUpOlb4",
        "county": "Berwickshire"
    },
    {
        "id": "urn:iamproperty:county:S9DHMO2Hh",
        "county": "East Sussex"
    },
    {
        "id": "urn:iamproperty:county:rj4pK09x7",
        "county": "Denbighshire"
    },
    {
        "id": "urn:iamproperty:county:vuduFOMex",
        "county": "Lanarkshire"
    },
    {
        "id": "urn:iamproperty:county:5W66e6apO",
        "county": "East Riding of Yorkshire"
    },
    {
        "id": "urn:iamproperty:county:Hb6eqUJQj",
        "county": "North Ayrshire"
    },
    {
        "id": "urn:iamproperty:county:fwRrCvJ4C",
        "county": "Greater Manchester"
    },
    {
        "id": "urn:iamproperty:county:aekGxogbo",
        "county": "East Renfrewshire"
    },
    {
        "id": "urn:iamproperty:county:f3srYWllA",
        "county": "Cardiff"
    },
    {
        "id": "urn:iamproperty:county:DhVZEpSj5",
        "county": "West Lothian"
    },
    {
        "id": "urn:iamproperty:county:URWWHN7s0",
        "county": "Dorset"
    },
    {
        "id": "urn:iamproperty:county:jYK8wiDnY",
        "county": "Leicestershire"
    },
    {
        "id": "urn:iamproperty:county:048PGRA4X",
        "county": "Blaenau Gwent"
    },
    {
        "id": "urn:iamproperty:county:wrHCVsCva",
        "county": "Berkshire"
    },
    {
        "id": "urn:iamproperty:county:cCH4TjJ9q",
        "county": "Norfolk"
    },
    {
        "id": "urn:iamproperty:county:mvHEsdXhM",
        "county": "Suffolk"
    },
    {
        "id": "urn:iamproperty:county:faXBprr9q",
        "county": "East Ayrshire"
    },
    {
        "id": "urn:iamproperty:county:5wGBTbwou",
        "county": "Conwy"
    },
    {
        "id": "urn:iamproperty:county:5YXi0mQkk",
        "county": "Cheshire"
    },
    {
        "id": "urn:iamproperty:county:fuYiP18oc",
        "county": "Bridgend"
    },
    {
        "id": "urn:iamproperty:county:QaX0cXbOV",
        "county": "West Yorkshire"
    },
    {
        "id": "urn:iamproperty:county:Lo7JLx9og",
        "county": "South Gloucestershire"
    },
    {
        "id": "urn:iamproperty:county:B64E1f4T3",
        "county": "Merthyr Tydfil"
    },
    {
        "id": "urn:iamproperty:county:vacNt3Iie",
        "county": "Banffshire"
    },
    {
        "id": "urn:iamproperty:county:HSETldFbK",
        "county": "Staffordshire"
    },
    {
        "id": "urn:iamproperty:county:njUDNfLD3",
        "county": "Western Isles"
    },
    {
        "id": "urn:iamproperty:county:smlxqTdZE",
        "county": "Bath and North East Somerset"
    },
    {
        "id": "urn:iamproperty:county:2asBQ47Jh",
        "county": "South Yorkshire"
    },
    {
        "id": "urn:iamproperty:county:5hYXpCuJ7",
        "county": "Stirling"
    },
    {
        "id": "urn:iamproperty:county:lhFYBMSuq",
        "county": "Powys"
    },
    {
        "id": "urn:iamproperty:county:PamgW3ebq",
        "county": "Vale of Glamorgan"
    },
    {
        "id": "urn:iamproperty:county:zIasSsrlZ",
        "county": "Clackmannanshire"
    },
    {
        "id": "urn:iamproperty:county:WZUQNZxOy",
        "county": "Lancashire"
    },
    {
        "id": "urn:iamproperty:county:HoTgPpS58",
        "county": "Hertfordshire"
    },
    {
        "id": "urn:iamproperty:county:oNrluXBHA",
        "county": "Fife"
    },
    {
        "id": "urn:iamproperty:county:2OxE9CASK",
        "county": "Neath Port Talbot"
    },
    {
        "id": "urn:iamproperty:county:9J7YezLBA",
        "county": "Highland"
    },
    {
        "id": "urn:iamproperty:county:7IfpMh1Gx",
        "county": "Ceredigion"
    },
    {
        "id": "urn:iamproperty:county:ZwQ3mTTE2",
        "county": "Orkney Islands"
    },
    {
        "id": "urn:iamproperty:county:ZyNmV7NCn",
        "county": "North Yorkshire"
    },
    {
        "id": "urn:iamproperty:county:LwrVeERzu",
        "county": "Pembrokeshire"
    },
    {
        "id": "urn:iamproperty:county:porOuVsSM",
        "county": "Wrexham"
    },
    {
        "id": "urn:iamproperty:county:3o4Rx4sO8",
        "county": "Renfrewshire"
    },
    {
        "id": "urn:iamproperty:county:loLWjKyk8",
        "county": "Oxfordshire"
    },
    {
        "id": "urn:iamproperty:county:AN7Bz5tny",
        "county": "Moray"
    },
    {
        "id": "urn:iamproperty:county:RGzSdoQp3",
        "county": "Ayrshire"
    },
    {
        "id": "urn:iamproperty:county:nEBK48RIK",
        "county": "Caithness"
    },
    {
        "id": "urn:iamproperty:county:a90XABrjs",
        "county": "West Dunbartonshire"
    },
    {
        "id": "urn:iamproperty:county:Qjkb0wsyP",
        "county": "West Sussex"
    },
    {
        "id": "urn:iamproperty:county:fNJcfheKq",
        "county": "Cornwall"
    },
    {
        "id": "urn:iamproperty:county:lx0kEWvsb",
        "county": "Anglesey"
    },
    {
        "id": "urn:iamproperty:county:rkvgiBRHz",
        "county": "Caerphilly"
    },
    {
        "id": "urn:iamproperty:county:kx0t2zRVP",
        "county": "Tyne and Wear"
    },
    {
        "id": "urn:iamproperty:county:lVb75qnOW",
        "county": "Merseyside"
    },
    {
        "id": "urn:iamproperty:county:M7eZzrA8u",
        "county": "Wiltshire"
    },
    {
        "id": "urn:iamproperty:county:8Uo4sJw3x",
        "county": "Perth and Kinross"
    },
    {
        "id": "urn:iamproperty:county:73kc3w0cu",
        "county": "Dumfries & Galloway"
    },
    {
        "id": "urn:iamproperty:county:VFjExDeTO",
        "county": "Swansea"
    },
    {
        "id": "urn:iamproperty:county:lzsJuaRiS",
        "county": "Isles of Scilly"
    },
    {
        "id": "urn:iamproperty:county:abvvK0ZwH",
        "county": "Worcestershire"
    },
    {
        "id": "urn:iamproperty:county:1FKCbFkt2",
        "county": "Scottish Borders"
    },
    {
        "id": "urn:iamproperty:county:WKaOjrTLM",
        "county": "Essex"
    },
    {
        "id": "urn:iamproperty:county:0F00szlVA",
        "county": "South Ayrshire"
    },
    {
        "id": "urn:iamproperty:county:KDtAS0c8U",
        "county": "Inverclyde"
    },
    {
        "id": "urn:iamproperty:county:Md88sraTz",
        "county": "Shetland Islands"
    },
    {
        "id": "urn:iamproperty:county:LzzEE6zpp",
        "county": "Herefordshire"
    },
    {
        "id": "urn:iamproperty:county:lXaRRDNrq",
        "county": "Angus"
    },
    {
        "id": "urn:iamproperty:county:A5B4FFytC",
        "county": "Surrey"
    },
    {
        "id": "urn:iamproperty:county:B3siky9El",
        "county": "Kent"
    },
    {
        "id": "urn:iamproperty:county:V9njlL3kq",
        "county": "Northumberland"
    },
    {
        "id": "urn:iamproperty:county:WJiolIFFI",
        "county": "Flintshire"
    },
    {
        "id": "urn:iamproperty:county:4lXGX7NbU",
        "county": "Gwynedd"
    },
    {
        "id": "urn:iamproperty:county:7gzISbzTK",
        "county": "Lincolnshire"
    },
    {
        "id": "urn:iamproperty:county:D5GgqTxzN",
        "county": "East Dunbartonshire"
    },
    {
        "id": "urn:iamproperty:county:hhwXe4hTH",
        "county": "Somerset"
    },
    {
        "id": "urn:iamproperty:county:nECEnleYv",
        "county": "Midlothian"
    },
    {
        "id": "urn:iamproperty:county:2jksb8BIf",
        "county": "Cumbria"
    },
    {
        "id": "urn:iamproperty:county:ttfY8qr15",
        "county": "Bedfordshire"
    },
    {
        "id": "urn:iamproperty:county:YhQVg1amj",
        "county": "West Midlands"
    },
    {
        "id": "urn:iamproperty:county:EnbDIubYS",
        "county": "North Lanarkshire"
    },
    {
        "id": "urn:iamproperty:county:5SdVf3hnm",
        "county": "Kincardineshire"
    },
    {
        "id": "urn:iamproperty:county:BPedWUQXc",
        "county": "Dunbartonshire"
    },
    {
        "id": "urn:iamproperty:county:YLngqBWd4",
        "county": "Hampshire"
    },
    {
        "id": "urn:iamproperty:county:zBZHWiWon",
        "county": "Buckinghamshire"
    },
    {
        "id": "urn:iamproperty:county:kLes1W5ny",
        "county": "East Lothian"
    },
    {
        "id": "urn:iamproperty:county:yCMA4ANpN",
        "county": "Rutland"
    },
    {
        "id": "urn:iamproperty:county:jhourkJ4W",
        "county": "Torfaen"
    },
    {
        "id": "urn:iamproperty:county:aC8dF3IVE",
        "county": "Newport"
    },
    {
        "id": "urn:iamproperty:county:AnfqGRnhm",
        "county": "Argyll & Bute"
    },
    {
        "id": "urn:iamproperty:county:5BjmQe9mS",
        "county": "Gloucestershire"
    },
    {
        "id": "urn:iamproperty:county:G7WiUO5Sh",
        "county": "Cleveland"
    },
    {
        "id": "urn:iamproperty:county:zu7zHJPWh",
        "county": "Shropshire"
    },
    {
        "id": "urn:iamproperty:county:Bt301fwoy",
        "county": "Greater London"
    },
    {
        "id": "urn:iamproperty:county:LXHPqo5nj",
        "county": "City of Edinburgh"
    },
    {
        "id": "urn:iamproperty:county:YejLSQLAx",
        "county": "Aberdeen City"
    },
    {
        "id": "urn:iamproperty:county:o5lgD8dv7",
        "county": "Dundee City"
    },
    {
        "id": "urn:iamproperty:county:0HPMQtb09",
        "county": "Falkirk"
    },
    {
        "id": "urn:iamproperty:county:z1rPhQlGB",
        "county": "Glasgow City"
    },
    {
        "id": "urn:iamproperty:county:CskSiG5W0",
        "county": "Brecknockshire"
    },
    {
        "id": "urn:iamproperty:county:zulaN5fgu",
        "county": "Caernarfonshire"
    },
    {
        "id": "urn:iamproperty:county:D1YYNRchZ",
        "county": "Cardiganshire"
    },
    {
        "id": "urn:iamproperty:county:3DDFfQzoP",
        "county": "Clwyd"
    },
    {
        "id": "urn:iamproperty:county:hBr4CCduy",
        "county": "Dyfed"
    },
    {
        "id": "urn:iamproperty:county:7wcgGTpU9",
        "county": "Antrim"
    },
    {
        "id": "urn:iamproperty:county:PKM8DGZbI",
        "county": "Armagh"
    },
    {
        "id": "urn:iamproperty:county:LrvLXtQv4",
        "county": "Down"
    },
    {
        "id": "urn:iamproperty:county:HXDwhW1QG",
        "county": "Fermanagh"
    },
    {
        "id": "urn:iamproperty:county:eRHjMdT0e",
        "county": "Londonderry"
    },
    {
        "id": "urn:iamproperty:county:Xqs7aJsen",
        "county": "Tyrone"
    },
    {
        "id": "urn:iamproperty:county:rYAgcPlXZ",
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
    ${this.hasAttribute('data-url') ? `data-url='${this.getAttribute('data-url')}?search_string='` : `data-url='/standardaddress.json?search_query='`}
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
    ${this.hasAttribute('data-auth') ? `data-auth='${this.getAttribute('data-auth')}'` : ''}
    ${this.hasAttribute('data-token') ? `data-token='${this.getAttribute('data-token')}'` : ''}
    ${this.hasAttribute('data-amz-date') ? `data-amz-date='${this.getAttribute('data-amz-date')}'` : ''}
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
        <option value="urn:iamproperty:region:qo7jMNaA4" data-value="England">England</option>
        <option value="urn:iamproperty:region:JPBkFjL6I" data-value="Scotland">Scotland</option>
        <option value="urn:iamproperty:region:3lqe2D3qO" data-value="Wales">Wales</option>
        <option value="urn:iamproperty:region:Tm5pOBfK9" data-value="Northern Ireland">Northern Ireland</option>
        <option value="urn:iamproperty:region:ZwIRAnNJo" data-value="Channel Islands">Channel Islands</option>
        <option value="urn:iamproperty:region:8CIOi1khw" data-value="Jersey">Jersey</option>
        <option value="urn:iamproperty:region:qHdx7tNtL" data-value="Guernsey">Guernsey</option>
        <option value="urn:iamproperty:region:DH6LU70lY" data-value="Isle of Man">Isle of Man</option>
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
    ${this.hasAttribute('data-address-unknown') ? `<label slot="actions"><input type="checkbox" value="true" name="${this.getAttribute('data-address-unknown')}" ${this.hasAttribute('data-address-unknown-checked') ? 'checked="checked"' : '' }/> Address unknown</label>` : ``}
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


    const openOverseas = () => {
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
  }

  static get observedAttributes(): any {
    return ['data-url','data-auth','data-amz-date','data-token'];
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {

    const addressComponent = this.querySelector('iam-address-lookup');

    console.log(this.querySelector('iam-address-lookup'));


    switch (attrName) {
      case 'data-url': {
        if (oldVal != newVal && addressComponent) {
          addressComponent.setAttribute('data-url', newVal + '?search_string=');
        }
        break;
      }
      case 'data-auth': {
        if (oldVal != newVal && addressComponent) {
          addressComponent.setAttribute('data-auth', newVal);
        }
        break;
      }
      case 'data-amz-date': {
        if (oldVal != newVal && addressComponent) {
          addressComponent.setAttribute('data-amz-date', newVal);
        }
        break;
      }
      case 'data-token': {
        if (oldVal != newVal && addressComponent) {
          addressComponent.setAttribute('data-token', newVal);
        }
        break;
      }
    }
  }
}

export default iamSTDAddressLookup;
