// Define themes.
const themes = {
  light: {
    quote: '333',
    author: '2f80ed',
    background: 'ff',
    symbol: '4c71f2'
  },
  dark: {
    quote: '9f9f9f',
    author: 'fff',
    background: 'ff',
    symbol: '7eff00'
  },
  "chartreuse-dark": {
    quote: 'fff',
    author: '7fff00',
    background: 'ff',
    symbol: '00AEFF'
  },
  radical: {
    quote: 'a9fef7',
    author: 'fe428e',
    background: 'ff',
    symbol: 'f8d847'
  },
  merko: {
    quote: '68b587',
    author: 'abd200',
    background: 'ff',
    symbol: 'b7d364'
  },
  gruvbox: {
    quote: '8ec07c',
    author: 'fabd2f',
    background: 'ff',
    symbol: 'fe8019'
  },
  tokyonight: {
    quote: '38bdae',
    author: '70a5fd',
    background: 'ff',
    symbol: 'bf91f3'
  },
  catppuccin: {
    quote: '96CDFB',
    author: 'D9E0EE',
    background: 'ff',
    symbol: 'DDB6F2'
  },
  algolia: {
    quote: '00ADFE',
    author: 'FEFEFE',
    background: 'ff',
    symbol: '26BB85'
  },
  monokai: {
    quote: 'EA1F6A',
    author: 'CFCFC9',
    background: 'ff',
    symbol: 'E18905'
  },
  dracula: {
    quote: 'F8F8F2',
    author: '6272A4',
    background: 'ff',
    symbol: 'FF79c6'
  },
};

const renderTheme = theme => {
  // Check if theme exists in the themes object.
  if (themes[theme]) {
    return themes[theme];
  }

  // Else, return the light theme.
  return themes.light;
};

module.exports = { renderTheme, themes };
