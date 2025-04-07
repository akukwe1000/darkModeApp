import cauch from './cauch.png';
import surrounding from './surroundings.jpg';
import home from './house.png';
import house from './pexel-house.jpg';
import { MdNoteAlt } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

export const property = [
    {
        id:1,
        address: '16 banire street',
        category:'building',
        image:cauch,
        name:"green",
        price:"$8000",
    },
    {
        id:2,
        address: '4 banire street',
        category:'building',
        image:surrounding,
        name:'chudubame',
        price:"$3000",
    },
    {
        id:3,
        address: '10 durojaiye street',
        category:'building',
        image:home,
        name:'favour',
        price:"$7000",
    },
    {
        id:4,
        address: '12 karimu street',
        category:'building',
        image:house,
        name:'Akukwe',
        price:"$12000",
    }
]

export const service = [
    {
        icon:MdNoteAlt,
        title: 'sell your home',
    },
    {
        icon:FaHome,
        title: 'sell your home',
    },
]