export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price6?: number;
  price12?: number;
  price?: number;
  category: 'Cold Subs' | 'Hot Subs' | 'Retro Special Features' | 'Salads' | 'Wings' | 'Fries';
}

export const MENU_ITEMS: MenuItem[] = [
  // Cold Subs
  { id: 'c1', name: 'Roasted Turkey', price6: 9.95, price12: 13.95, category: 'Cold Subs' },
  { id: 'c2', name: 'Honey Maple Turkey', price6: 9.95, price12: 13.95, category: 'Cold Subs' },
  { id: 'c3', name: 'Ham', price6: 8.95, price12: 12.95, category: 'Cold Subs' },
  { id: 'c4', name: 'Salami', price6: 8.95, price12: 12.95, category: 'Cold Subs' },
  { id: 'c5', name: 'Pepperoni', price6: 8.95, price12: 12.95, category: 'Cold Subs' },
  { id: 'c6', name: 'Buffalo Chicken', price6: 10.95, price12: 14.95, category: 'Cold Subs' },
  { id: 'c7', name: 'Pastrami', price6: 10.95, price12: 14.95, category: 'Cold Subs' },
  { id: 'c8', name: 'Roast Beef', price6: 10.95, price12: 14.95, category: 'Cold Subs' },
  { id: 'c9', name: 'Hot Capicola', price6: 10.95, price12: 14.95, category: 'Cold Subs' },
  { id: 'c10', name: 'Beef Bologna', price6: 9.95, price12: 13.95, category: 'Cold Subs' },
  { id: 'c11', name: 'Veggie', price6: 7.95, price12: 10.95, category: 'Cold Subs' },

  // Hot Subs
  { id: 'h1', name: 'Chicken Cutlet', price6: 10.95, price12: 14.95, category: 'Hot Subs' },
  { id: 'h2', name: 'Chicken Parm', price6: 10.95, price12: 14.95, category: 'Hot Subs' },
  { id: 'h3', name: 'Meatball Parm', price6: 10.95, price12: 14.95, category: 'Hot Subs' },
  { id: 'h4', name: 'Steak N Cheese', price6: 10.95, price12: 14.95, category: 'Hot Subs' },
  { id: 'h5', name: 'BLT', price6: 10.95, price12: 14.95, category: 'Hot Subs' },

  // Retro Special Features
  { id: 's1', name: 'The Godfather', description: 'ham pepperoni salami hot capicola', price6: 12.95, price12: 16.95, category: 'Retro Special Features' },
  { id: 's2', name: 'Captain America', description: 'turkey ham bologna', price6: 11.95, price12: 15.95, category: 'Retro Special Features' },
  { id: 's3', name: 'Fight Club', description: 'chicken cutlet w bacon', price6: 12.95, price12: 16.95, category: 'Retro Special Features' },
  { id: 's4', name: 'Players Club', description: 'honey maple turkey w bacon', price6: 11.95, price12: 15.95, category: 'Retro Special Features' },

  // Salads
  { id: 'sl1', name: 'Garden', price: 8.95, category: 'Salads' },
  { id: 'sl2', name: 'Greek', price: 8.95, category: 'Salads' },
  { id: 'sl3', name: 'Caesar', price: 8.95, category: 'Salads' },
  { id: 'sl4', name: 'Chicken Caesar', price: 10.95, category: 'Salads' },
  { id: 'sl5', name: 'Grilled Chicken', price: 10.95, category: 'Salads' },
  { id: 'sl6', name: 'Crispy Chicken', price: 10.95, category: 'Salads' },

  // Wings
  { id: 'w1', name: '6 Piece', price: 8.95, category: 'Wings' },
  { id: 'w2', name: '8 Piece', price: 10.95, category: 'Wings' },

  // Fries
  { id: 'f1', name: 'Classic Fries', price: 5.95, category: 'Fries' },
];

export const CUSTOMIZER = {
  fillers: ['Lettuce', 'Tomato', 'Red Onion', 'Dill Pickles', 'Sweet Pickles', 'Jalapeno', 'Banana Peppers', 'Roasted Peppers', 'Fresh Peppers', 'Cucumbers', 'Black Olives'],
  sauces: ['Mayo', 'Spicy Mustard', 'Yellow Mustard', 'BBQ', 'Ketchup', 'Sriracha', 'Chipotle', 'Hot Sauce', 'Oil', 'Vinegar'],
  spices: ['Salt', 'Pepper', 'Oregano', 'Italian Seasoning', 'Red Pepper Flakes'],
  cheeses: ['White American', 'Yellow American', 'Provolone', 'Pepper Jack', 'Mozzarella', 'Yellow Cheddar', 'Swiss'],
  extraMeat: 2.00
};
;
