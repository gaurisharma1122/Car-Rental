import audi from "./images/car-audi.jpg"
import vw from "./images/car-vw.jpg"
import toyota from "./images/car-toyota.jpg"
import bmw from "./images/car-bmw.jpg"
import mercedez from "./images/car-mercedes.jpg"
import vw_passat from "./images/car-vw-passat.jpg"
import car_1 from "./images/car-1-full.png"
import car_2 from "./images/car-2-full.png"
import car_3 from "./images/car-3-full.png"
import car_4 from "./images/car-4-full.png"
import car_5 from "./images/car-5-full.png"
import car_6 from "./images/car-6-full.png"



export const navLinks= [
    { id:1, title: 'Home', url: '/'},
    { id:2, title: 'About', url: '/about'},
    { id:3, title: 'Vehicle Models', url: '/vehicle_models'},
    { id:4, title: 'Testimonials', url: '/testimonials'},
    { id:5, title: 'Our Team', url: '/our_team'},
    { id:6, title: 'Contact', url: '/contact'},
];
export const carTypes= [
    { id: 1, title: 'Audi A1 S-Line'},
    { id: 2, title: 'VW Golf 6'},
    { id: 3, title: 'Toyota Camry'},
    { id: 4, title: 'BMW 320 Modern Line'},
    { id: 5, title: 'Merceds Benz GLK'},
    { id: 6, title: 'VW Passat CC'},
];
export const locations= [
    { id: 1, title: 'Belgrade'},
    { id: 2, title: 'Novi Sad'},
    { id: 3, title: 'Nis'},
    { id: 4, title: 'Kragujevac'},
    { id: 5, title: 'Sabotica'}, 
];
export const rentalSteps=[
    { id: 1, title: 'Select Car', description: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs', icon: 'fa-solid fa-car'},
    { id: 2, title: 'Contact Operator', description: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns', icon: 'fa-solid fa-headset'},
    { id: 3, title: "Let's Drive", description: "Whether you're hitting the open road, we have got you covered with our wide range of cars", icon: 'fa-solid fa-car-on'}, 
];
export const vehicleModels=[
    
    { id: 1, name: 'Audi A1 S-Line', image: audi, full_image: car_1, price: '45', rating: 4, characteristics:{ model: 'Audi', mark: 'A1', year: '2012', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'Gasoline' } },
    { id: 2, name: 'VW Golf 6', image: vw, full_image: car_2, price: '37', rating: 5, characteristics:{ model: 'Golf 6', mark: 'Volkswagen', year: '2008', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'Diesel' } },
    { id: 3, name: 'Toyota Camry', image: toyota, full_image: car_3, price: '30', rating: 4, characteristics:{ model: 'Camry', mark: 'Toyota', year: '2006', doors: '4/5', ac: 'yes', transmission: 'automatic', fuel: 'hybrid' } },
    { id: 4, name: 'BMW 320 Modern Line', image: bmw, full_image: car_4, price: '35', rating: 4, characteristics:{ model: '320', mark: 'BMW', year: '2012', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'Diesel' } },
    { id: 5, name: 'Mercedes-Benz-GLK', image: mercedez, full_image: car_5, price: '50', rating: 3, characteristics:{ model: 'Benz GLK', mark: 'Mercedes', year: '2006', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'diesel' } },
    { id: 6, name: 'VW Passat CC', image: vw_passat, full_image: car_6, price: '27', rating: 5, characteristics:{ model: 'Passat CC', mark: 'Volkswagen', year: '2008', doors: '4/5', ac: 'yes', transmission: 'automatic', fuel: 'Gasoline' } },
    
];

export const faq=[
    { id: 1, title: 'What is special about comparing rental car deals?', description: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.'},
    { id: 2, title: 'How do I find such low rental car prices?', description: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'},
    { id: 3, title: 'How do I find the car rental deals?', description: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'},
];