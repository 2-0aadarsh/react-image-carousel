# React Image Carousel

## Overview
This project is a modern and lightweight image carousel built using React.js and Tailwind CSS. It provides smooth transitions, auto-sliding, and manual navigation for an enhanced user experience.

## Features
- **Auto-Sliding Images** – Images change automatically every few seconds.  
- **Smooth Transitions** – Optimized fade-in and zoom effects.  
- **Manual Navigation** – Left/right arrow buttons for user control.  
- **Optimized Performance** – Preloads images to prevent flickering.  
- **Responsive Design** – Works seamlessly across all devices.  
- **Minimal Dependencies** – Lightweight and fast.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS  
- **Icons:** React Icons  
- **Image Source:** [Picsum Photos](https://picsum.photos/) (for placeholder images)

## Project Structure
```
react-image-carousel
├── src
│   ├── components
│   │   ├── ImageCarousel.jsx  # Carousel component
│   ├── App.js                 # Main application file
│   ├── index.js               # Entry point
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind customization
├── .gitignore                 # Ignored files
└── README.md                  # Project documentation
```

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/2-0aadarsh/react-image-carousel.git
cd react-image-carousel
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm start
```
The app will be available at **http://localhost:3000/**.

## How It Works
- The app fetches images dynamically from an API.  
- Images automatically slide every **4 seconds**.  
- Users can manually switch images using arrow buttons.  
- Smooth transitions ensure a visually appealing experience.  

## Customization
- Modify **transition effects** in `ImageCarousel.jsx`.  
- Update **Tailwind styles** in `tailwind.config.js`.  
- Change **image sources** by replacing the API URL.  

## Contributing
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.
