import { colors as darkcolors } from './darkcolors.js';
import { colors as lightcolors } from './lightcolors.js';

const basiccolors = {
    'transparent': 'transparent'
}

export const dark = { ...basiccolors, ...darkcolors }
export const light = { ...basiccolors, ...lightcolors }

export const gradients = {
    'none': 'none',
    'brand-gradient': 'linear-gradient(87deg, #018F8B 0%, #01DCAF 100%)',
    'brand-gradient-hover': 'linear-gradient(87deg, #006E62 0%, #00AC99 100%)',
    'brand-gradient-focused': 'linear-gradient(87deg, #006E62 0%, #00AC99 100%)',
    'brand-gradient-pressed': 'linear-gradient(87deg, #33BDAD 0%, #5CCABE 100%)',
    'white-gradient': 'linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 100%)',
    'blue-gradient': 'linear-gradient(86.7deg, #3674D1 0%, #5F9FFF 100%)',
    'yellow-gradient': 'linear-gradient(86.7deg, #EE9630 0%, #FFB967 100%)',
    'card-gradient': 'linear-gradient(157.4deg, rgba(0, 172, 153, 0.24) 0%, rgba(0, 172, 153, 0) 72.39%)'
}

export const boxShadow = {
    'shadow-btn': '0px 0px 2px rgb(54, 65, 64)',
    'fill-btn': '0px 4px 8px 0px rgba(0, 172, 153, 0.16)',
    'fill-btn-hovered': '0px 8px 16px 0px rgba(0, 172, 153, 0.32)',
    'fill-btn-focused': '0px 4px 8px 0px rgba(0, 172, 153, 0.16)',
    'fill-btn-pressed': '0px 8px 16px 0px rgba(51, 189, 173, 0.24)',
}