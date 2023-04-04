import audi from "./images/car-audi.jpg"
import vw from "./images/car-vw.jpg"
import toyota from "./images/car-toyota.jpg"
import bmw from "./images/car-bmw.jpg"
import mercedez from "./images/car-mercedes.jpg"
import vw_passat from "./images/car-vw-passat.jpg"

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
    
    { id: 1, name: 'Audi A1 S-Line', image: audi, price: '45', characteristics:{ model: 'Audi', mark: 'A1', year: '2012', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'Gasoline' } },

    { id: 2, name: 'VW Golf 6', image: vw, price: '37', characteristics:{ model: 'Golf 6', mark: 'Volkswagen', year: '2008', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'Diesel' } },

    { id: 3, name: 'Toyota Camry', image: toyota, price: '30', characteristics:{ model: 'Camry', mark: 'Toyota', year: '2006', doors: '4/5', ac: 'yes', transmission: 'automatic', fuel: 'hybrid' } },

    { id: 4, name: 'BMW 320 Modern Line', image: bmw, price: '35', characteristics:{ model: '320', mark: 'BMW', year: '2012', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'Diesel' } },

    { id: 5, name: 'Mercedes-Benz-GLK', image: mercedez, price: '50', characteristics:{ model: 'Benz GLK', mark: 'Mercedes', year: '2006', doors: '4/5', ac: 'yes', transmission: 'manual', fuel: 'diesel' } },

    { id: 6, name: 'VW Passat CC', image: vw_passat, price: '27', characteristics:{ model: 'Passat CC', mark: 'Volkswagen', year: '2008', doors: '4/5', ac: 'yes', transmission: 'automatic', fuel: 'Gasoline' } },
    
];