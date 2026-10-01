// Keyword-based photos, so each image matches its title. `lock` keeps the same photo on every reload.
const pic = (keyword, lock) => `https://loremflickr.com/600/400/${keyword}?lock=${lock}`;

export const CATEGORIES = ['Nature', 'City', 'Animals', 'Food', 'Travel', 'Technology'];

export const initialImages = [
  { id: 1, title: 'Misty Mountains', url: pic('mountain', 1), category: 'Nature', description: 'Morning fog over a mountain ridge.', favorite: false },
  { id: 2, title: 'Forest Trail', url: pic('forest', 2), category: 'Nature', description: 'A quiet trail through tall pines.', favorite: true },
  { id: 3, title: 'Night Skyline', url: pic('skyline', 3), category: 'City', description: 'City lights after sunset.', favorite: false },
  { id: 4, title: 'Old Town Street', url: pic('oldstreet', 4), category: 'City', description: 'Narrow lane in the old quarter.', favorite: false },
  { id: 5, title: 'Sleepy Fox', url: pic('fox', 5), category: 'Animals', description: 'A fox resting in tall grass.', favorite: false },
  { id: 6, title: 'Coastal Birds', url: pic('seagull', 6), category: 'Animals', description: 'Seabirds along the shore.', favorite: false },
  { id: 7, title: 'Fresh Fruit Bowl', url: pic('fruit', 7), category: 'Food', description: 'Seasonal fruit on a wooden table.', favorite: true },
  { id: 8, title: 'Street Food Stall', url: pic('streetfood', 8), category: 'Food', description: 'Evening food stall with warm lights.', favorite: false },
  { id: 9, title: 'Beach Sunrise', url: pic('beach', 9), category: 'Travel', description: 'First light on an empty beach.', favorite: false },
  { id: 10, title: 'Mountain Railway', url: pic('train', 10), category: 'Travel', description: 'A train winding up the hills.', favorite: false },
  { id: 11, title: 'Circuit Board', url: pic('circuit', 11), category: 'Technology', description: 'Close-up of a microcontroller board.', favorite: false },
  { id: 12, title: 'Workspace Setup', url: pic('laptop', 12), category: 'Technology', description: 'Laptop and notes on a desk.', favorite: false },
];
