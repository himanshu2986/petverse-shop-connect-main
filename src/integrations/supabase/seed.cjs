"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var supabase_js_1 = require("@supabase/supabase-js");
var supabaseUrl = 'https://rppfafnnlverweyirprl.supabase.co';
var supabaseKey = process.env.SUPABASE_SERVICE_KEY;
if (!supabaseKey) {
    console.error('Error: SUPABASE_SERVICE_KEY environment variable not set.');
    process.exit(1);
}
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, categories, categoriesError, categoryMap, products, _b, data, error;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, supabase
                        .from('categories')
                        .select('id, slug')];
                case 1:
                    _a = _c.sent(), categories = _a.data, categoriesError = _a.error;
                    if (categoriesError) {
                        console.error('Error fetching categories:', categoriesError);
                        return [2 /*return*/];
                    }
                    categoryMap = categories.reduce(function (acc, category) {
                        acc[category.slug] = category.id;
                        return acc;
                    }, {});
                    products = [
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
                        {
                            name: 'Trained Dogs',
                            description: 'Well-trained dogs for your family.',
                            price: 999.99,
                            category_id: categoryMap['dogs'],
                            stock: 10,
                            rating: 5.0,
                            reviews_count: 10,
                            is_featured: true,
                            image_url: '/public/assets/trained-dog.jpg',
                        },
                    ];
                    return [4 /*yield*/, supabase.from('products').insert(products)];
                case 2:
                    _b = _c.sent(), data = _b.data, error = _b.error;
                    if (error) {
                        console.error('Error seeding data:', error);
                    }
                    else {
                        console.log('Seeding successful:', data);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
