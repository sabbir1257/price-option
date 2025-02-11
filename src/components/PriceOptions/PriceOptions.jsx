import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
     const priceOptions = [
          {
               "id": 1,
               "name": "Basic Membership",
               "price": 29.99,
               "features": [
                    "Access to gym equipment",
                    "Locker room access",
                    "Free Wi-Fi",
                    "Open gym access",
                    "Cardio and strength training area",
                    "Fitness tracking app access"
               ]
          },
          {
               "id": 2,
               "name": "Standard Membership",
               "price": 49.99,
               "features": [
                    "All Basic Membership features",
                    "Group fitness classes (Yoga, Zumba, HIIT)",
                    "Sauna & steam room access",
                    "Nutritional guidance",
                    "Discount on protein shakes & supplements",
                    "Access to indoor cycling classes"
               ]
          },
          {
               "id": 3,
               "name": "Premium Membership",
               "price": 79.99,
               "features": [
                    "All Standard Membership features",
                    "Personal trainer (2 sessions/month)",
                    "Hydro massage & relaxation lounge",
                    "Exclusive workout programs",
                    "24/7 gym access",
                    "Guest pass (1 per month)",
                    "Free body composition analysis"
               ]
          },
          {
               "id": 4,
               "name": "VIP Membership",
               "price": 119.99,
               "features": [
                    "All Premium Membership features",
                    "Unlimited personal trainer sessions",
                    "Private training room access",
                    "Complimentary supplements & drinks",
                    "Priority booking for fitness classes",
                    "Dedicated fitness concierge service",
                    "Custom tailored diet plan",
                    "Exclusive VIP locker area"
               ]
          },
          {
               "id": 5,
               "name": "Annual Membership",
               "price": 499.99,
               "features": [
                    "All Standard Membership features",
                    "10% discount on personal training sessions",
                    "Exclusive member events & workshops",
                    "Custom meal plan with dietitian",
                    "Access to outdoor training sessions",
                    "One free personal training session every 3 months",
                    "Discount on sportswear & accessories"
               ]
          },
          {
               "id": 6,
               "name": "Family Membership",
               "price": 149.99,
               "features": [
                    "Includes 2 adults & 2 children",
                    "All Standard Membership features",
                    "Family-friendly workout sessions",
                    "Childcare services during workouts",
                    "Access to swimming pool",
                    "Discount on kids' fitness programs",
                    "Group fitness classes for families"
               ]
          },
          {
               "id": 7,
               "name": "Student Membership",
               "price": 39.99,
               "features": [
                    "All Basic Membership features",
                    "Discounted student pricing",
                    "Access to study lounge with free coffee",
                    "Late-night gym access (until midnight)",
                    "Student-exclusive group workouts",
                    "Free guest pass for a friend (once a month)"
               ]
          }
     ]

     return (
          <div>
               <h2 className="text-5xl">Best Prices in the town</h2>
               {
                    priceOptions.map(option => <PriceOption key={option.id} option={option} />)
               }
          </div>
     );
};

export default PriceOptions;