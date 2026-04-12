export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Main Cast' | 'Blockbusters' | 'Action Stars' | 'Supporting Roles';
  image: string;
  badge?: string;
  isHot?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'godfather',
    name: 'The Godfather',
    description: 'The offer you can’t refuse: Ham, Pepperoni, Salami, and Hot Capicola piled high.',
    price: 12.95,
    category: 'Blockbusters',
    image: 'https://picsum.photos/seed/godfather/800/600',
    badge: 'Most Popular',
  },
  {
    id: 'fight-club',
    name: 'Fight Club',
    description: 'The first rule is: you talk about this chicken cutlet + bacon combo.',
    price: 11.95,
    category: 'Blockbusters',
    image: 'https://picsum.photos/seed/fightclub/800/600',
    badge: 'Fan Favorite',
  },
  {
    id: 'turkey',
    name: 'Roasted Turkey',
    description: 'Classic roasted turkey breast with your choice of toppings.',
    price: 10.95,
    category: 'Main Cast',
    image: 'https://picsum.photos/seed/turkey/800/600',
  },
  {
    id: 'capicola',
    name: 'Hot Capicola',
    description: 'Spicy Italian capicola ham for those who like a little kick.',
    price: 10.95,
    category: 'Main Cast',
    image: 'https://picsum.photos/seed/capicola/800/600',
  },
  {
    id: 'steak-cheese',
    name: 'Steak N Cheese',
    description: 'Sizzling shaved steak with melted provolone and grilled onions.',
    price: 13.95,
    category: 'Action Stars',
    image: 'https://picsum.photos/seed/steak/800/600',
    isHot: true,
  },
  {
    id: 'chicken-parm',
    name: 'Chicken Parm',
    description: 'Breaded chicken cutlet with marinara and melted mozzarella.',
    price: 12.95,
    category: 'Action Stars',
    image: 'https://picsum.photos/seed/chickenparm/800/600',
    isHot: true,
  },
];

export const SUPPORTING_ROLES = {
  fillers: ['Lettuce', 'Tomato', 'Dill Pickles', 'Onions', 'Banana Peppers', 'Jalapenos'],
  sauces: ['Mayo', 'Spicy Mustard', 'BBQ', 'Oil & Vinegar', 'Chipotle Mayo'],
  cheeses: ['Provolone', 'American', 'Swiss', 'Mozzarella'],
};
