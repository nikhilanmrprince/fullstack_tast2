const img = (name) => `${import.meta.env.BASE_URL}images/${name}.svg`;

export const CATEGORIES = ['Nature', 'City', 'Animals', 'Food', 'Travel', 'Technology'];

export const initialImages = [
  { id: 1, title: 'Misty Mountains', url: img('mountain'), category: 'Nature', description: 'Morning fog over a mountain ridge.', favorite: false },
  { id: 2, title: 'Forest Trail', url: img('forest'), category: 'Nature', description: 'A quiet trail through tall pines.', favorite: true },
  { id: 3, title: 'Night Skyline', url: img('skyline'), category: 'City', description: 'City lights after sunset.', favorite: false },
  { id: 4, title: 'Old Town Street', url: img('oldstreet'), category: 'City', description: 'Narrow lane in the old quarter.', favorite: false },
  { id: 5, title: 'Sleepy Fox', url: img('fox'), category: 'Animals', description: 'A fox resting in tall grass.', favorite: false },
  { id: 6, title: 'Coastal Birds', url: img('seagull'), category: 'Animals', description: 'Seabirds along the shore.', favorite: false },
  { id: 7, title: 'Fresh Fruit Bowl', url: img('fruit'), category: 'Food', description: 'Seasonal fruit on a wooden table.', favorite: true },
  { id: 8, title: 'Street Food Stall', url: img('streetfood'), category: 'Food', description: 'Evening food stall with warm lights.', favorite: false },
  { id: 9, title: 'Beach Sunrise', url: img('beach'), category: 'Travel', description: 'First light on an empty beach.', favorite: false },
  { id: 10, title: 'Mountain Railway', url: img('train'), category: 'Travel', description: 'A train winding up the hills.', favorite: false },
  { id: 11, title: 'Circuit Board', url: img('circuit'), category: 'Technology', description: 'Close-up of a microcontroller board.', favorite: false },
  { id: 12, title: 'Workspace Setup', url: img('laptop'), category: 'Technology', description: 'Laptop and notes on a desk.', favorite: false },
];
