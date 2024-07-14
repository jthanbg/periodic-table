const button = document.getElementById('changeColorBtn');
const body = document.body;
const nightColors = ['#263238'];
const lightColors = ['#eceff1'];
let isNightMode = false;

button.addEventListener('click', toggleNightMode);

function toggleNightMode() {
  isNightMode = !isNightMode;
  const randomColor = isNightMode
    ? nightColors[Math.floor(Math.random() * nightColors.length)]
    : lightColors[Math.floor(Math.random() * lightColors.length)];

  body.style.backgroundColor = randomColor;

  if (isNightMode) {
    button.classList.add('moon-icon');
    button.classList.remove('sun-icon');
    body.classList.add('night-mode');
    body.classList.remove('light-mode');
  } else {
    button.classList.add('sun-icon');
    button.classList.remove('moon-icon');
    body.classList.remove('night-mode');
    body.classList.add('light-mode');
  }
}



const elements = [
  { number: 0, symbol: 'Nu', name: 'Neutronio', type: 'Gas noble', weight: '1', period: '0', group: '18', block: 's', valence: '0', oxidationStates: '-', meltingPoint: '-', boilingPoint: '-', density: '0.000045 g/l', row: 1, col: 20 },
  { number: 1, symbol: 'H', name: 'Hidrógeno', type: 'No metal', weight: '1.008', period: '1', group: '1', block: 's', valence: '1', oxidationStates: '+1, -1', meltingPoint: '-259.14°C', boilingPoint: '-252.87°C', density: '0.0899 g/l', row: 2, col: 3 },
  { number: 2, symbol: 'He', name: 'Helio', type: 'Gas noble', weight: '4.002602', period: '1', group: '18', block: 's', valence: '0', oxidationStates: '0', meltingPoint: 'N/A', boilingPoint: '-268.93 °C', density: '0.1785 g/l', row: 2, col: 20 },
  { number: 3, symbol: 'Li', name: 'Litio', type: 'Metal alcalino', weight: '6.94', period: '2', group: '1', block: 's', valence: '1', oxidationStates: '+1', meltingPoint: '180.54 °C', boilingPoint: '1342 °C', density: '0.535 g/cm3', row: 3, col: 3 },
  { number: 4, symbol: 'Be', name: 'Berilio', type: ' Metal alcalinotérreo', weight: '9.0121831', period: '2', group: '2', block: 's', valence: '2', oxidationStates: '+1 +2', meltingPoint: '1287 °C', boilingPoint: '2470 °C', density: '1.848 g/cm3', row: 3, col: 4 },
  { number: 5, symbol: 'B', name: 'Boro',  type: 'Semimetal', weight: '10.81', period: '2', group: '13', block: 'p', valence: '3', oxidationStates: '-5, -1, +1, +2, +3', meltingPoint: '2075°C', boilingPoint: '3999.99°C', density: '2.46 g/cm3', row: 3, col: 15 },
  { number: 6, symbol: 'C', name: 'Carbono',  type: 'No metal', weight: '12.011', period: '2', group: '14', block: 'p', valence: '4', oxidationStates: '-4, -3, -2, -1, 0, +1, +2, +3, +4', meltingPoint: '3550°C', boilingPoint: '4027°C', density: '2.26 g/cm3', row: 3, col: 16 },
  { number: 7, symbol: 'N', name: 'Nitrógeno',  type: 'No metal', weight: '14.007', period: '2', group: '15', block: 'p', valence: '3', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5', meltingPoint: '-210.1°C', boilingPoint: '-195.79°C', density: '1.251 g/l', row: 3, col: 17 },
  { number: 8, symbol: 'O', name: 'Oxígeno',  type: 'Anfígeno', weight: '15.999', period: '2', group: '16', block: 'p', valence: '2', oxidationStates: '-2, -1, +1, +2', meltingPoint: '-218.3°C', boilingPoint: '-182.9°C', density: '1.429 g/l', row: 3, col: 18 },
  { number: 9, symbol: 'F', name: 'Flúor',  type: 'Halógeno', weight: '18.998403163', period: '2', group: '17', block: 'p', valence: '1', oxidationStates: '-1', meltingPoint: '-219.6°C', boilingPoint: '-188.12°C', density: '1.696 g/l', row: 3, col: 19 },
  { number: 10, symbol: 'Ne', name: 'Neón',  type: 'Gas noble', weight: '20.1797', period: '2', group: '18', block: 'p', valence: '0', oxidationStates: '0', meltingPoint: '-248.59°C', boilingPoint: '-246.08°C', density: '0.9 g/l', row: 3, col: 20 },
  { number: 11, symbol: 'Na', name: 'Sodio',  type: 'Metal alcalino', weight: '22.98976928', period: '3', group: '1', block: 's', valence: '1', oxidationStates: '-1, +1', meltingPoint: '97.72°C', boilingPoint: '883°C', density: '0.968 g/cm3', row: 4, col: 3 },
  { number: 12, symbol: 'Mg', name: 'Magnesio',  type: 'Metal alcalinotérreo', weight: '24.305', period: '3', group: '2', block: 's', valence: '2', oxidationStates: '+1, +2', meltingPoint: '650°C', boilingPoint: '1090°C', density: '1.738 g/cm3', row: 4, col: 4 },
  { number: 13, symbol: 'Al', name: 'Aluminio',  type: 'Metal del bloque p', weight: '26.9815385', period: '3', group: '13', block: 'p', valence: '3', oxidationStates: '-2, -1, +1, +2, +3', meltingPoint: '660.32°C', boilingPoint: '2519°C', density: '2.7 g/cm3', row: 4, col: 15 },
  { number: 14, symbol: 'Si', name: 'Silicio',  type: 'Semimetal', weight: '28.085', period: '3', group: '14', block: 'p', valence: '4', oxidationStates: '-4, -3, -2, -1, +1, +2, +3, +4', meltingPoint: '1414°C', boilingPoint: '2900°C', density: '2.33 g/cm3', row: 4, col: 16 },
  { number: 15, symbol: 'P', name: 'Fósforo',  type: 'No metal', weight: '30.973761998', period: '3', group: '15', block: 'p', valence: '5', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5', meltingPoint: '42.2°C', boilingPoint: '280.5°C', density: '1.823 g/cm3', row: 4, col: 17 },
  { number: 16, symbol: 'S', name: 'Azufre',  type: 'Anfígeno', weight: '32.06', period: '3', group: '16', block: 'p', valence: '6', oxidationStates: '-2, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '115.21°C', boilingPoint: '444.72°C', density: '1.96 g/cm3', row: 4, col: 18 },
  { number: 17, symbol: 'Cl', name: 'Cloro',  type: 'Halógeno', weight: '35.45', period: '3', group: '17', block: 'p', valence: '5', oxidationStates: '-1, +1, +2, +3, +4, +5, +6, +7', meltingPoint: '-101.5°C', boilingPoint: '-34.05°C', density: '3.214 g/l', row: 4, col: 19 },
  { number: 18, symbol: 'Ar', name: 'Argón', type: 'Gas noble', weight: '39.948', period: '3', group: '18', block: 'p', valence: '-', oxidationStates: '-', meltingPoint: '-189.3°C', boilingPoint: '-185.5°C', density: '1.784 g/l', row: 4, col: 20 },
  { number: 19, symbol: 'K', name: 'Potasio', type: 'Metal alcalino', weight: '39.0983', period: '4', group: '1', block: 's', valence: '1', oxidationStates: '-1, +1', meltingPoint: '63.38°C', boilingPoint: '759°C', density: '0.856 g/cm3', row: 5, col: 3 },
  { number: 20, symbol: 'Ca', name: 'Calcio', type: 'Metal alcalinotérreo', weight: '40.078', period: '4', group: '12', block: 's', valence: '2', oxidationStates: '+1, +2', meltingPoint: '842°C', boilingPoint: '1484°C', density: '1.55 g/cm3', row: 5, col: 4 },
  { number: 21, symbol: 'Sc', name: 'Escandio', type: 'Metal de transición', weight: '44.955908', period: '4', group: '3', block: 'd', valence: '3', oxidationStates: '+1, +3', meltingPoint: '1541°C', boilingPoint: '2830°C', density: '2.985 g/cm3', row: 5, col: 5 },
  { number: 22, symbol: 'Ti', name: 'Titanio', type: 'Metal de transición', weight: '47.867', period: '4', group: '4', block: 'd', valence: '4', oxidationStates: '-2, -1, +1, +2, +3, +4', meltingPoint: '1668°C', boilingPoint: '3287°C', density: '4.507 g/cm3', row: 5, col: 6 },
  { number: 23, symbol: 'V', name: 'Vanadio', type: 'Metal de transición', weight: '50.9415', period: '4', group: '5', block: 'd', valence: '5', oxidationStates: '-3, -1, +1, +2, +3, +4, +5', meltingPoint: '1910°C', boilingPoint: '3407°C', density: '6.11 g/cm3', row: 5, col: 7 },
  { number: 24, symbol: 'Cr', name: 'Cromo', type: 'Metal de transición', weight: '51.9961', period: '4', group: '6', block: 'd', valence: '6', oxidationStates: '-4, -2, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '1907°C', boilingPoint: '2671°C', density: '7.19 g/cm3', row: 5, col: 8 },
  { number: 25, symbol: 'Mn', name: 'Manganeso', type: 'Metal de transición', weight: '54.938044', period: '4', group: '7', block: 'd', valence: '4', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5, +6, +7', meltingPoint: '1246°C', boilingPoint: '2061°C', density: '7.47 g/cm3', row: 5, col: 9 },
  { number: 26, symbol: 'Fe', name: 'Hierro', type: 'Metal de transición', weight: '55.845', period: '4', group: '8', block: 'd', valence: '3', oxidationStates: '-4, -2, -1, +1, +2, +3, +4, +5, +6, +7', meltingPoint: '1538°C', boilingPoint: '2861°C', density: '7.874 g/cm3', row: 5, col: 10 },
  { number: 27, symbol: 'Co', name: 'Cobalto', type: 'Metal de transición', weight: '58.933194', period: '4', group: '9', block: 'd', valence: '4', oxidationStates: '-3, -1, +1, +2, +3, +4, +5', meltingPoint: '1495°C', boilingPoint: '2927°C', density: '8.9 g/cm3', row: 5, col: 11 },
  { number: 28, symbol: 'Ni', name: 'Níquel', type: 'Metal de transición', weight: '58.6934', period: '4', group: '10', block: 'd', valence: '2', oxidationStates: '-2, -1, +1, +2, +3, +4', meltingPoint: '1455°C', boilingPoint: '2913°C', density: '8.908 g/cm3', row: 5, col: 12 },
  { number: 29, symbol: 'Cu', name: 'Cobre', type: 'Metal de transición', weight: '63.546', period: '4', group: '11', block: 'd', valence: '2', oxidationStates: '-2, +1, +2, +3, +4', meltingPoint: '1084.61°C', boilingPoint: '2562°C', density: '8.96 g/cm3', row: 5, col: 13 },
  { number: 30, symbol: 'Zn', name: 'Zinc', type: 'Metal de transición', weight: '65.38', period: '4', group: '12', block: 'd', valence: '2', oxidationStates: '-2, 0, +1, +2', meltingPoint: '419.53°C', boilingPoint: '907°C', density: '7.14 g/cm3', row: 5, col: 14 },
  { number: 31, symbol: 'Ga', name: 'Galio', type: 'Metal del bloque p', weight: '69.723', period: '4', group: '13', block: 'p', valence: '3', oxidationStates: '-5, -4, -2, -1, +1, +2, +3', meltingPoint: '29.76°C', boilingPoint: '2204°C', density: '5.904 g/cm3', row: 5, col: 15 },
  { number: 32, symbol: 'Ge', name: 'Germanio', type: 'Semimetal', weight: '72.63', period: '4', group: '14', block: 'p', valence: '4', oxidationStates: '-4 -3, -2, -1, 0, +1, +2, +3, +4', meltingPoint: '938.3°C', boilingPoint: '2820°C', density: '5.323 g/cm3', row: 5, col: 16 },
  { number: 33, symbol: 'As', name: 'Arsénico', type: 'Semimetal', weight: '74.921595', period: '4', group: '15', block: 'p', valence: '5', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5', meltingPoint: '817°C', boilingPoint: '614°C', density: '5.727 g/cm3', row: 5, col: 17 },
  { number: 34, symbol: 'Se', name: 'Selenio', type: 'Anfígeno', weight: '78.971', period: '4', group: '16', block: 'p', valence: '6', oxidationStates: '-2, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '221°C', boilingPoint: '685°C', density: '4.819 g/cm3', row: 5, col: 18 },
  { number: 35, symbol: 'Br', name: 'Bromo', type: 'Halógeno', weight: '79.904', period: '4', group: '17', block: 'p', valence: '5', oxidationStates: '-1, +1, +3, +4, +5, +7', meltingPoint: '-7.3°C', boilingPoint: '59°C', density: '3.12 g/cm3', row: 5, col: 19 },
  { number: 36, symbol: 'Kr', name: 'Kriptón', type: 'Gas noble', weight: '83.798', period: '4', group: '18', block: 'p', valence: '2', oxidationStates: '0, +1, +2', meltingPoint: '-157.37°C', boilingPoint: '-153.22°C', density: '3.75 g/l', row: 5, col: 20 },
  { number: 37, symbol: 'Rb', name: 'Rubidio', type: 'Metal alcalino', weight: '85.4678', period: '5', group: '1', block: 's', valence: '1', oxidationStates: '1, +1', meltingPoint: '39.31°C', boilingPoint: '688°C', density: '1.532 g/cm3', row: 6, col: 3 },
  { number: 38, symbol: 'Sr', name: 'Estroncio', type: 'Metal alcalinotérreos', weight: '87.62', period: '5', group: '2', block: 's', valence: '2', oxidationStates: '+1, +2', meltingPoint: '777°C', boilingPoint: '1382°C', density: '2.63 g/cm3', row: 6, col: 4 },
  { number: 39, symbol: 'Y', name: 'Itrio', type: 'Metal de transición', weight: '88.90584', period: '5', group: '3', block: 'd', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '1526°C', boilingPoint: '3345°C', density: '4.472 g/cm3', row: 6, col: 5 },
  { number: 40, symbol: 'Zr', name: 'Circonio', type: 'Metal de transición', weight: '91.224', period: '5', group: '4', block: 'd', valence: '4', oxidationStates: '-2, +1, +2, +3, +4', meltingPoint: '1855°C', boilingPoint: '4409°C', density: '6.511 g/cm3', row: 6, col: 6 },
  { number: 41, symbol: 'Nb', name: 'Niobio', type: 'Metal de transición', weight: '92.90637', period: '5', group: '5', block: 'd', valence: '5', oxidationStates: '-3, -1, +1, +2, +3, +4, +5', meltingPoint: '2477°C', boilingPoint: '4744°C', density: '8.57 g/cm3', row: 6, col: 7 },
  { number: 42, symbol: 'Mo', name: 'Molibdeno', type: 'Metal de transición', weight: '95.95', period: '5', group: '6', block: 'd', valence: '6', oxidationStates: '-4, -2, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '2623°C', boilingPoint: '4639°C', density: '10.28 g/cm3', row: 6, col: 8 },
  { number: 43, symbol: 'Tc', name: 'Tecnecio', type: 'Metal de transición', weight: '97', period: '5', group: '7', block: 'd', valence: '6', oxidationStates: '-3, +1, +4, +5, +6, +7', meltingPoint: '2157°C', boilingPoint: '4265°C', density: '11.5 g/cm3', row: 6, col: 9 },
  { number: 44, symbol: 'Ru', name: 'Rutenio', type: 'Metal de transición', weight: '101.07', period: '5', group: '8', block: 'd', valence: '6', oxidationStates: '-4, -2, +1, +2, +3, +4, +5, +6, +7, +8', meltingPoint: '2334°C', boilingPoint: '4150°C', density: '12.37 g/cm3', row: 6, col: 10 },
  { number: 45, symbol: 'Rh', name: 'Rodio', type: 'Metal de transición', weight: '102.9055', period: '5', group: '9', block: 'd', valence: '6', oxidationStates: '-3, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '1964°C', boilingPoint: '3695°C', density: '12.45 g/cm3', row: 6, col: 11 },
  { number: 46, symbol: 'Pd', name: 'Paladio', type: 'Metal de transición', weight: '106.42', period: '5', group: '10', block: 'd', valence: '4', oxidationStates: '0, +1, +2, +3, +4', meltingPoint: '1554.9°C', boilingPoint: '2963°C', density: '12.023 g/cm3', row: 6, col: 12 },
  { number: 47, symbol: 'Ag', name: 'Plata', type: 'Metal de transición', weight: '107.8682', period: '5', group: '11', block: 'd', valence: '1', oxidationStates: '-2, -1, +1, +2, +3', meltingPoint: '961.78°C', boilingPoint: '2162°C', density: '10.49 g/cm3', row: 6, col: 13 },
  { number: 48, symbol: 'Cd', name: 'Cadmio', type: 'Metal de transición', weight: '112.414', period: '5', group: '12', block: 'd', valence: '2', oxidationStates: '-2, +1, +2', meltingPoint: '321.07°C', boilingPoint: '767°C', density: '8.65 g/cm3', row: 6, col: 14 },
  { number: 49, symbol: 'In', name: 'Indio', type: 'Metal del bloque p', weight: '114.818', period: '5', group: '13', block: 'p', valence: '3', oxidationStates: '-5, -2, -1, +1, +2, +3', meltingPoint: '156.6°C', boilingPoint: '2072°C', density: '7.31 g/cm3', row: 6, col: 15 },
  { number: 50, symbol: 'Sn', name: 'Estaño', type: 'Metal del bloque p', weight: '118.71', period: '5', group: '14', block: 'p', valence: '4', oxidationStates: '-4, -3, -2, -1, +1, +2, +3, +4', meltingPoint: '231.93°C', boilingPoint: '2602°C', density: '7.31 g/cm3', row: 6, col: 16 },
  { number: 51, symbol: 'Sb', name: 'Antimonio', type: 'Semimetal', weight: '121.76', period: '5', group: '15', block: 'p', valence: '5', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5', meltingPoint: '630.63°C', boilingPoint: '1587°C', density: '6.697 g/cm3', row: 6, col: 17 },
  { number: 52, symbol: 'Te', name: 'Telurio', type: 'Halógeno', weight: '127.6', period: '5', group: '16', block: 'p', valence: '6', oxidationStates: '-2, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '449.51°C', boilingPoint: '988°C', density: '6.24 g/cm3', row: 6, col: 18 },
  { number: 53, symbol: 'I', name: 'Yodo', type: 'Halógeno', weight: '126.90447', period: '5', group: '17', block: 'p', valence: '7', oxidationStates: '-1, +1, +3, +4, +5, +6, +7', meltingPoint: '113.7°C', boilingPoint: '184.3°C', density: '4.94 g/cm3', row: 6, col: 19 },
  { number: 54, symbol: 'Xe', name: 'Xenón', type: 'Gas noble', weight: '131.293', period: '5', group: '18', block: 'p', valence: '6', oxidationStates: '0, +1, +2, +4, +6, +8', meltingPoint: '-111.8°C', boilingPoint: '-108°C', density: '5.9 g/l', row: 6, col: 20 },
  { number: 55, symbol: 'Cs', name: 'Cesio', type: 'Metal alcalino', weight: '132.90545196', period: '6', group: '1', block: 's', valence: '1', oxidationStates: '-1, +1', meltingPoint: '28.44°C', boilingPoint: '671°C', density: '1.879 g/cm3', row: 7, col: 3 },
  { number: 56, symbol: 'Ba', name: 'Bario', type: 'Metal alcalinotérreo', weight: '137.327', period: '6', group: '2', block: 's', valence: '2', oxidationStates: '+1, +1', meltingPoint: '727°C', boilingPoint: '1870°C', density: '3.51 g/cm3', row: 7, col: 4 },
  { number: 57, symbol: 'La', name: 'Lantano', type: 'Lantánido', weight: '138.90547', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '919 °C', boilingPoint: '3464 °C', density: '6.146 g/cm3', row: 7, col: 5 },
  { number: 72, symbol: 'Hf', name: 'Hafnium', type: 'Metal de transición', weight: '178.49', period: '6', group: '4', block: 'd', valence: '4', oxidationStates: '-2, +1, +2, +3, +4', meltingPoint: '2233 °C', boilingPoint: '4603 °C', density: '13.31 g/cm3', row: 7, col: 6 },
  { number: 73, symbol: 'Ta', name: 'Tántalo', type: 'Metal de transición', weight: '180.948', period: '6', group: '5', block: 'd', valence: '5', oxidationStates: '-3, -1, +1, +2, +3, +4, +5', meltingPoint: '3017 °C', boilingPoint: '5458 °C', density: '16.65 g/cm3', row: 7, col: 7 },
  { number: 74, symbol: 'W', name: 'Wolframio', type: 'Metal de transición', weight: '183.84', period: '6', group: '6', block: 'd', valence: '6', oxidationStates: '-4, -2, -1, 0, +1, +2, +3, +4, +5, +6', meltingPoint: '3422 °C', boilingPoint: '5555 °C', density: '19.25 g/cm3', row: 7, col: 8 },
  { number: 75, symbol: 'Re', name: 'Renio', type: 'Metal de transición', weight: '186.207', period: '6', group: '7', block: 'd', valence: '7', oxidationStates: '-3, -1, 0, +1, +2, +3, +4, +5, +6, +7', meltingPoint: '3186 °C', boilingPoint: '5596 °C', density: '21.02 g/cm3', row: 7, col: 9 },
  { number: 76, symbol: 'Os', name: 'Osmio', type: 'Metal de transición', weight: '190.23', period: '6', group: '8', block: 'd', valence: '6', oxidationStates: '-4, -2, -1, 0, +1, +2, +3, +4, +5, +6, +7, +8', meltingPoint: '3033 °C', boilingPoint: '5012 °C', density: '22.59 g/cm3', row: 7, col: 10 },
  { number: 77, symbol: 'Ir', name: 'Iridio', type: 'Metal de transición', weight: '192.217', period: '6', group: '9', block: 'd', valence: '6', oxidationStates: '-3, -1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9', meltingPoint: '2466 °C', boilingPoint: '4428 °C', density: '22.56 g/cm3', row: 7, col: 11 },
  { number: 78, symbol: 'Pt', name: 'Platino', type: 'Metal de transición', weight: '195.084', period: '6', group: '10', block: 'd', valence: '6', oxidationStates: '-3, -2, -1, +1, +2, +3, +4, +5, +6', meltingPoint: '1768.3 °C', boilingPoint: '3825 °C', density: '21.45 g/cm3', row: 7, col: 12 },
  { number: 79, symbol: 'Au', name: 'Gold', row: 7, col: 13 },
  { number: 80, symbol: 'Hg', name: 'Mercury', row: 7, col: 14 },
  { number: 81, symbol: 'Tl', name: 'Thallium', row: 7, col: 15 },
  { number: 82, symbol: 'Pb', name: 'Lead', row: 7, col: 16 },
  { number: 83, symbol: 'Bi', name: 'Bismuth', row: 7, col: 17 },
  { number: 84, symbol: 'Po', name: 'Polonium', row: 7, col: 18 },
  { number: 85, symbol: 'At', name: 'Astatine', row: 7, col: 19 },
  { number: 86, symbol: 'Rn', name: 'Radon', row: 7, col: 20 },
  { number: 87, symbol: 'Fr', name: 'Francium', row: 8, col: 3 },
  { number: 88, symbol: 'Ra', name: 'Radium', row: 8, col: 4 },
  { number: 89, symbol: 'Ac', name: 'Actinio', type: 'Actínido', weight: '227', period: '7', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '1050 °C', boilingPoint: '3200 °C', density: '10.07 g/cm3', row: 8, col: 5 },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', row: 8, col: 6 },
  { number: 105, symbol: 'Db', name: 'Dubnium', row: 8, col: 7 },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', row: 8, col: 8 },
  { number: 107, symbol: 'Bh', name: 'Bohrium', row: 8, col: 9 },
  { number: 108, symbol: 'Hs', name: 'Hassium', row: 8, col: 10 },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', row: 8, col: 11 },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', row: 8, col: 12 },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', row: 8, col: 13 },
  { number: 112, symbol: 'Cn', name: 'Copernicium', row: 8, col: 14 },
  { number: 113, symbol: 'Nh', name: 'Nihonium', row: 8, col: 15 },
  { number: 114, symbol: 'Fl', name: 'Flerovium', row: 8, col: 16 },
  { number: 115, symbol: 'Mc', name: 'Moscovium', row: 8, col: 17 },
  { number: 116, symbol: 'Lv', name: 'Livermorium', row: 8, col: 18 },
  { number: 117, symbol: 'Ts', name: 'Tennessine', row: 8, col: 19 },
  { number: 118, symbol: 'Og', name: 'Oganesson', row: 8, col: 20 },
];

const periodicTable = document.querySelector('.periodic_table_container_1');

elements.forEach(element => {
  const elementDiv = document.createElement('div');
  elementDiv.classList.add('element');
  elementDiv.style.gridColumn = element.col;
  elementDiv.style.gridRow = element.row;
  elementDiv.innerHTML = `
      <div class="number">${element.number}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>
  `;
  periodicTable.appendChild(elementDiv);
});

const elements2 = [
  { number: 57, symbol: 'La', name: 'Lantano', type: 'Lantánido', weight: '138.90547', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '919 °C', boilingPoint: '3464 °C', density: '6.146 g/cm3', row: 1, col: 3 },
  { number: 58, symbol: 'Ce', name: 'Cerio', type: 'Lantánido', weight: '140.116', period: '6', group: '-', block: 'f', valence: '4', oxidationStates: '+1, +2, +3, +4', meltingPoint: '798 °C', boilingPoint: '3360 °C', density: '6.689 g/cm3', row: 1, col: 4 },
  { number: 59, symbol: 'Pr', name: 'Praseodimio', type: 'Lantánido', weight: '140.908', period: '6', group: '-', block: 'f', valence: '4', oxidationStates: '+1, +2, +3, +4, +5', meltingPoint: '931 °C', boilingPoint: '3290 °C', density: '6.64 g/cm3', row: 1, col: 5 },
  { number: 60, symbol: 'Nd', name: 'Neodimio', type: 'Lantánido', weight: '144.242', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3, +4', meltingPoint: '1021 °C', boilingPoint: '3100 °C', density: '7.01 g/cm3', row: 1, col: 6 },
  { number: 61, symbol: 'Pm', name: 'Prometio', type: 'Lantánido', weight: '145', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '1100 °C', boilingPoint: '3000 °C', density: '7.264 g/cm3', row: 1, col: 7 },
  { number: 62, symbol: 'Sm', name: 'Samario', type: 'Lantánido', weight: '150.36', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3, +4', meltingPoint: '1072 °C', boilingPoint: '1803 °C', density: '7.353 g/cm3', row: 1, col: 8 },
  { number: 63, symbol: 'Eu', name: 'Europio', type: 'Lantánido', weight: '151.964', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '822 °C', boilingPoint: '1527 °C', density: '5.244 g/cm3', row: 1, col: 9 },
  { number: 64, symbol: 'Gd', name: 'Gadolinio', type: 'Lantánido', weight: '157.25', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '1313 °C', boilingPoint: '3250 °C', density: '7.901 g/cm3', row: 1, col: 10 },
  { number: 65, symbol: 'Tb', name: 'Terbio', type: 'Lantánido', weight: '158.925', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3, +4', meltingPoint: '1356 °C', boilingPoint: '3230 °C', density: '8.219 g/cm3', row: 1, col: 11 },
  { number: 66, symbol: 'Dy', name: 'Disprosio', type: 'Lantánido', weight: '162.5', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3, +4', meltingPoint: '1412 °C', boilingPoint: '2567 °C', density: '8.551 g/cm3', row: 1, col: 12 },
  { number: 67, symbol: 'Ho', name: 'Holmio', type: 'Lantánido', weight: '164.93', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '1474 °C', boilingPoint: '2700 °C', density: '8.795 g/cm3', row: 1, col: 13 },
  { number: 68, symbol: 'Er', name: 'Erbio', type: 'Lantánido', weight: '167.259', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '1497 °C', boilingPoint: '2868 °C', density: '9.066 g/cm3', row: 1, col: 14 },
  { number: 69, symbol: 'Tm', name: 'Tulio', type: 'Lantánido', weight: '168.934', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '1545 °C', boilingPoint: '1950 °C', density: '9.32 g/cm3', row: 1, col: 15 },
  { number: 70, symbol: 'Yb', name: 'Iterbio', type: 'Lantánido', weight: '173.045', period: '6', group: '-', block: 'f', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '819 °C', boilingPoint: '1196 °C', density: '6.57 g/cm3', row: 1, col: 16 },
  { number: 71, symbol: 'Lu', name: 'Lutecio', type: 'Metal de transición', weight: '174.9668', period: '6', group: '3', block: 'd', valence: '3', oxidationStates: '+1, +2, +3', meltingPoint: '1663 °C', boilingPoint: '3402 °C', density: '9.841 g/cm3', row: 1, col: 17 },
  { number: 89, symbol: 'Ac', name: 'Actinio', type: 'Actínido', weight: '227', period: '7', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '1050 °C', boilingPoint: '3200 °C', density: '10.07 g/cm3', row: 2, col: 3 },
  { number: 90, symbol: 'Th', name: 'Torio', type: 'Actínido', weight: '232.038', period: '7', group: '-', block: 'f', valence: '4', oxidationStates: '+1, +2, +3, +4', meltingPoint: '1750 °C', boilingPoint: '4820 °C', density: '11.724 g/cm3', row: 2, col: 4 },
  { number: 91, symbol: 'Pa', name: 'Protactinio', type: 'Actínido', weight: '231.036', period: '7', group: '-', block: 'f', valence: '5', oxidationStates: '+2, +3, +4, +5', meltingPoint: '1572 °C', boilingPoint: '4000 °C', density: '15.37 g/cm3', row: 2, col: 5 },
  { number: 92, symbol: 'U', name: 'Uranio', type: 'Actínido', weight: '238.029', period: '7', group: '-', block: 'f', valence: '6', oxidationStates: '+1, +2, +3, +4, +5, +6', meltingPoint: '1135 °C', boilingPoint: '3927 °C', density: '19.05 g/cm3', row: 2, col: 6 },
  { number: 93, symbol: 'Np', name: 'Neptunio', type: 'Actínido', weight: '237', period: '7', group: '-', block: 'f', valence: '6', oxidationStates: '+1, +2, +3, +4, +5, +6, +7', meltingPoint: '644 °C', boilingPoint: '4000 °C', density: '20.45 g/cm3', row: 2, col: 7 },
  { number: 94, symbol: 'Pu', name: 'Plutonio', type: 'Actínido', weight: '244', period: '7', group: '-', block: 'f', valence: '6', oxidationStates: '+1, +2, +3, +4, +5, +6, +7', meltingPoint: '640 °C', boilingPoint: '3230 °C', density: '19.816 g/cm3', row: 2, col: 8 },
  { number: 95, symbol: 'Am', name: 'Americio', type: 'Actínido', weight: '243', period: '7', group: '-', block: 'f', valence: '4', oxidationStates: '+2, +3, +4, +5, +6, +7', meltingPoint: '1176 °C', boilingPoint: '2011 °C', density: '13.67 g/cm3', row: 2, col: 9 },
  { number: 96, symbol: 'Cm', name: 'Curio', type: 'Actínido', weight: '247', period: '7', group: '-', block: 'f', valence: '4', oxidationStates: '+2, +3, +4, +5', meltingPoint: '1345 °C', boilingPoint: '3110 °C', density: '13.51 g/cm3', row: 2, col: 10 },
  { number: 97, symbol: 'Bk', name: 'Berkelio', type: 'Actínido', weight: '247', period: '7', group: '-', block: 'f', valence: '4', oxidationStates: '+2, +3, +4, +5', meltingPoint: '1050 °C', boilingPoint: '-', density: '14.78 g/cm3', row: 2, col: 11 },
  { number: 98, symbol: 'Cf', name: 'Californio', type: 'Actínido', weight: '251', period: '7', group: '-', block: 'f', valence: '4', oxidationStates: '+2, +3, +4, +5', meltingPoint: '900 °C', boilingPoint: '-', density: '15.1 g/cm3', row: 2, col: 12 },
  { number: 99, symbol: 'Es', name: 'Einstenio', type: 'Actínido', weight: '252', period: '7', group: '-', block: 'f', valence: '4', oxidationStates: '+2, +3, +4', meltingPoint: '860 °C', boilingPoint: '-', density: '-', row: 2, col: 13 },
  { number: 100, symbol: 'Fm', name: 'Fermio', type: 'Actínido', weight: '257', period: '7', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '1527 °C', boilingPoint: '-', density: '-', row: 2, col: 14 },
  { number: 101, symbol: 'Md', name: 'Mendelevio', type: 'Actínido', weight: '258', period: '7', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '828 °C', boilingPoint: '-', density: '-', row: 2, col: 15 },
  { number: 102, symbol: 'No', name: 'Nobelio', type: 'Actínido', weight: '259', period: '7', group: '-', block: 'f', valence: '3', oxidationStates: '+2, +3', meltingPoint: '828 °C', boilingPoint: '-', density: '-', row: 2, col: 16 },
  { number: 103, symbol: 'Lr', name: 'Lawrencio', type: 'Metal de transición', weight: '262', period: '7', group: '3', block: 'd', valence: '3', oxidationStates: '+3', meltingPoint: '1627 °C', boilingPoint: '-', density: '-', row: 2, col: 17 },
];

const periodicTable2 = document.querySelector('.periodic_table_container_2');

elements2.forEach(element => {
  const elementDiv2 = document.createElement('div');
  elementDiv2.classList.add('element');
  elementDiv2.style.gridColumn = element.col;
  elementDiv2.style.gridRow = element.row;
  elementDiv2.innerHTML = `
      <div class="number">${element.number}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>
  `;
  periodicTable2.appendChild(elementDiv2);
});


const elementInfo = document.querySelector('.element_info');
const infoNumber = document.querySelector('.info_number');
const infoSymbol = document.querySelector('.info_symbol');
const infoName = document.querySelector('.info_name');
const infoType = document.querySelector('.info_type');
const infoWeight = document.querySelector('.info_weight');
const infoPeriod = document.querySelector('.info_period');
const infoGroup = document.querySelector('.info_group');
const infoBlock = document.querySelector('.info_block');
const infoValence = document.querySelector('.info_valence');
const infoOxidationStates = document.querySelector('.info_oxidationStates');
const infoMeltingPoint = document.querySelector('.info_meltingPoint');
const infoBoilingPoint = document.querySelector('.info_boilingPoint');
const infoDensity = document.querySelector('.info_density');
const closeButton = document.querySelector('.close_button');

periodicTable.addEventListener('click', event => {
  const clickedElement = event.target.closest('.element');
  if (clickedElement) {
      const number = clickedElement.querySelector('.number').textContent;
      const symbol = clickedElement.querySelector('.symbol').textContent;
      const name = clickedElement.querySelector('.name').textContent;
      const type = elements.find(element => element.symbol === symbol).type;
      const weight = elements.find(element => element.symbol === symbol).weight;
      const period = elements.find(element => element.symbol === symbol).period;
      const group = elements.find(element => element.symbol === symbol).group;
      const block = elements.find(element => element.symbol === symbol).block;
      const valence = elements.find(element => element.symbol === symbol).valence;
      const oxidationStates = elements.find(element => element.symbol === symbol).oxidationStates;
      const meltingPoint = elements.find(element => element.symbol === symbol).meltingPoint;
      const boilingPoint = elements.find(element => element.symbol === symbol).boilingPoint;
      const density = elements.find(element => element.symbol === symbol).density;

      infoNumber.textContent = `Número atómico: ${number}`;
      infoSymbol.textContent = `Símbolo: ${symbol}`;
      infoName.textContent = `Nombre: ${name}`;
      infoType.textContent = `Tipo de elemento: ${type}`;
      infoWeight.textContent = `Peso atómico: ${weight}`;
      infoPeriod.textContent = `Periodo: ${period}`;
      infoGroup.textContent = `Grupo: ${group}`;
      infoBlock.textContent = `Bloque: ${block}`;
      infoValence.textContent = `Valencia: ${valence}`;
      infoOxidationStates.textContent = `Estado de oxidación: ${oxidationStates}`;
      infoMeltingPoint.textContent = `Punto de fusión: ${meltingPoint}`;
      infoBoilingPoint.textContent = `Punto de ebullición: ${boilingPoint}`;
      infoDensity.textContent = `Densidad: ${density}`;

      elementInfo.style.display = 'block';
  }
});

closeButton.addEventListener('click', () => {
    elementInfo.style.display = 'none';
});


const elementInfo2 = document.querySelector('.element_info');
const infoNumber2 = document.querySelector('.info_number');
const infoSymbol2 = document.querySelector('.info_symbol');
const infoName2 = document.querySelector('.info_name');
const infoType2 = document.querySelector('.info_type');
const infoWeight2 = document.querySelector('.info_weight');
const infoPeriod2 = document.querySelector('.info_period');
const infoGroup2 = document.querySelector('.info_group');
const infoBlock2 = document.querySelector('.info_block');
const infoValence2 = document.querySelector('.info_valence');
const infoOxidationStates2 = document.querySelector('.info_oxidationStates');
const infoMeltingPoint2 = document.querySelector('.info_meltingPoint');
const infoBoilingPoint2 = document.querySelector('.info_boilingPoint');
const infoDensity2 = document.querySelector('.info_density');
const closeButton2 = document.querySelector('.close_button');

periodicTable2.addEventListener('click', event => {
    const clickedElement = event.target.closest('.element');
    if (clickedElement) {
        const symbol2 = clickedElement.querySelector('.symbol').textContent;
        const element = elements2.find(element => element.symbol === symbol2);
        if (element) {
            infoNumber2.textContent = `Número atómico: ${element.number}`;
            infoSymbol2.textContent = `Símbolo: ${element.symbol}`;
            infoName2.textContent = `Nombre: ${element.name}`;
            infoType2.textContent = `Tipo de elemento: ${element.type}`;
            infoWeight2.textContent = `Peso atómico: ${element.weight}`;
            infoPeriod2.textContent = `Periodo: ${element.period}`;
            infoGroup2.textContent = `Grupo: ${element.group}`;
            infoBlock2.textContent = `Bloque: ${element.block}`;
            infoValence2.textContent = `Valencia: ${element.valence}`;
            infoOxidationStates2.textContent = `Estado de oxidación: ${element.oxidationStates}`;
            infoMeltingPoint2.textContent = `Punto de fusión: ${element.meltingPoint}`;
            infoBoilingPoint2.textContent = `Punto de ebullición: ${element.boilingPoint}`;
            infoDensity2.textContent = `Densidad: ${element.density}`;

            elementInfo2.style.display = 'block';
        }
    }
});

closeButton2.addEventListener('click', () => {
    elementInfo2.style.display = 'none';
});
