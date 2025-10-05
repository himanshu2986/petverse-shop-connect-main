import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rppfafnnlverweyirprl.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseKey) {
  console.error('Error: SUPABASE_SERVICE_KEY environment variable not set.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data: categories, error: categoriesError } = await supabase
    .from('categories')
    .select('id, slug');

  if (categoriesError) {
    console.error('Error fetching categories:', categoriesError);
    return;
  }

  const categoryMap = categories.reduce((acc, category) => {
    acc[category.slug] = category.id;
    return acc;
  }, {});

  const products = [
    {
      name: 'Dog Food',
      description: 'High-quality dog food for all breeds.',
      price: 25.99,
      stock: 100,
      image_url: '/public/assets/dog-food.jpg',
      category_id: categoryMap['dogs'],
    },
    {
      name: 'Cat Toy',
      description: 'A fun and interactive toy for your cat.',
      price: 9.99,
      stock: 150,
      image_url: '/public/assets/cat-toy.jpg',
      category_id: categoryMap['cats'],
    },
    {
      name: 'Bird Cage',
      description: 'A spacious and comfortable cage for your bird.',
      price: 75.50,
      stock: 50,
      image_url: '/public/assets/bird-cage.jpg',
      category_id: categoryMap['birds'],
    },
    {
      name: 'Hamster Habitat',
      description: 'A multi-level habitat for your hamster.',
      price: 45.00,
      stock: 75,
      image_url: '/public/assets/hamster-habitat.jpg',
      category_id: categoryMap['small-pets'],
    },
    {
        name: 'Premium Dog Food',
        description: 'High-quality nutrition for adult dogs',
        price: 49.99,
        category_id: categoryMap['dogs'],
        stock: 50,
        rating: 4.5,
        reviews_count: 120,
        is_featured: true,
        image_url: '/public/assets/dog-food.jpg',
      },
      {
        name: 'Interactive Cat Toy',
        description: 'Keep your cat entertained for hours',
        price: 19.99,
        category_id: categoryMap['cats'],
        stock: 100,
        rating: 4.8,
        reviews_count: 85,
        is_featured: true,
        image_url: '/public/assets/cat-toy.jpg',
      },
      {
        name: 'Large Bird Cage',
        description: 'Spacious and secure home for your bird',
        price: 129.99,
        category_id: categoryMap['birds'],
        stock: 20,
        rating: 4.6,
        reviews_count: 45,
        is_featured: true,
        image_url: '/public/assets/bird-cage.jpg',
      },
      {
        name: 'Hamster Habitat Kit',
        description: 'Complete habitat setup for small pets',
        price: 79.99,
        category_id: categoryMap['small-pets'],
        stock: 30,
        rating: 4.7,
        reviews_count: 62,
        is_featured: true,
        image_url: '/public/assets/hamster-habitat.jpg',
      },
      {
        name: 'Dog Leash & Collar Set',
        description: 'Durable and comfortable walking set',
        price: 34.99,
        category_id: categoryMap['dogs'],
        stock: 75,
        rating: 4.4,
        reviews_count: 98,
        is_featured: false,
        image_url: '/public/assets/dog-leash.jpg',
      },
      {
        name: 'Cat Scratching Post',
        description: 'Save your furniture with this sturdy post',
        price: 44.99,
        category_id: categoryMap['cats'],
        stock: 40,
        rating: 4.3,
        reviews_count: 71,
        is_featured: false,
        image_url: '/public/assets/cat-scratch-post.jpg',
      },
      {
        name: 'Bird Food Mix',
        description: 'Nutritious blend for all bird species',
        price: 24.99,
        category_id: categoryMap['birds'],
        stock: 60,
        rating: 4.5,
        reviews_count: 54,
        is_featured: false,
        image_url: '/public/assets/bird-food.jpg',
      },
      {
        name: 'Small Pet Bedding',
        description: 'Comfortable and absorbent bedding',
        price: 14.99,
        category_id: categoryMap['small-pets'],
        stock: 80,
        rating: 4.2,
        reviews_count: 33,
        is_featured: false,
        image_url: '/public/assets/small-pet-bedding.jpg',
      },
      {
        name: 'Fish Tank Kit',
        description: 'Complete starter kit for your new fish',
        price: 99.99,
        category_id: categoryMap['fish'],
        stock: 25,
        rating: 4.6,
        reviews_count: 50,
        is_featured: true,
        image_url: '/public/assets/fish-tank.jpg',
      },
      {
        name: 'Reptile Heat Lamp',
        description: 'Essential for maintaining a healthy reptile habitat',
        price: 29.99,
        category_id: categoryMap['reptiles'],
        stock: 40,
        rating: 4.8,
        reviews_count: 65,
        is_featured: false,
        image_url: '/public/assets/reptile-lamp.jpg',
      },
      {
        name: 'Small Animal Playpen',
        description: 'Safe and expandable play area for small pets',
        price: 39.99,
        category_id: categoryMap['small-pets'],
        stock: 50,
        rating: 4.5,
        reviews_count: 42,
        is_featured: false,
        image_url: '/public/assets/small-animal-playpen.jpg',
      },
  ];

  const { data, error } = await supabase.from('products').insert(products);

  if (error) {
    console.error('Error seeding data:', error);
  } else {
    console.log('Seeding successful:', data);
  }
}

main();
