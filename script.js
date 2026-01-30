// Car data
const carData = [
    {
        id: 1,
        name: "Aston Martin DB11",
        model: "Luxury Grand Tourer",
        price: "$205,600",
        colors: ["#1a1a1a", "#c0c0c0", "#003366", "#8b0000"],
        currentColor: "#1a1a1a",
        specs: {
            "Engine": "5.2L Twin-Turbo V12",
            "Horsepower": "630 hp",
            "0-60 mph": "3.7 seconds",
            "Top Speed": "208 mph",
            "Transmission": "8-Speed Automatic",
            "Drive Type": "Rear-Wheel Drive"
        },
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Porsche 911 Turbo S",
        model: "Sports Car",
        price: "$216,100",
        colors: ["#000000", "#c0c0c0", "#ffcc00", "#ff0000"],
        currentColor: "#000000",
        specs: {
            "Engine": "3.8L Twin-Turbo Flat-6",
            "Horsepower": "640 hp",
            "0-60 mph": "2.6 seconds",
            "Top Speed": "205 mph",
            "Transmission": "8-Speed PDK",
            "Drive Type": "All-Wheel Drive"
        },
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Tesla Model S Plaid",
        model: "Electric Sedan",
        price: "$129,990",
        colors: ["#000000", "#ffffff", "#5d5d5d", "#0066cc"],
        currentColor: "#000000",
        specs: {
            "Motor": "Tri-Motor Electric",
            "Horsepower": "1,020 hp",
            "0-60 mph": "1.99 seconds",
            "Top Speed": "200 mph",
            "Range": "396 miles",
            "Drive Type": "All-Wheel Drive"
        },
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Mercedes-Benz S-Class",
        model: "Luxury Sedan",
        price: "$114,500",
        colors: ["#000000", "#c0c0c0", "#2f4f4f", "#800020"],
        currentColor: "#000000",
        specs: {
            "Engine": "3.0L Inline-6 Turbo",
            "Horsepower": "429 hp",
            "0-60 mph": "4.5 seconds",
            "Top Speed": "155 mph",
            "Transmission": "9-Speed Automatic",
            "Drive Type": "All-Wheel Drive"
        },
        image: "https://images.unsplash.com/photo-1563720223485-8d6d5c5c8c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "BMW M8 Competition",
        model: "Luxury Coupe",
        price: "$133,995",
        colors: ["#000000", "#c0c0c0", "#003366", "#8b0000"],
        currentColor: "#000000",
        specs: {
            "Engine": "4.4L Twin-Turbo V8",
            "Horsepower": "617 hp",
            "0-60 mph": "3.0 seconds",
            "Top Speed": "190 mph",
            "Transmission": "8-Speed Automatic",
            "Drive Type": "All-Wheel Drive"
        },
        image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Lamborghini Huracán",
        model: "Supercar",
        price: "$261,274",
        colors: ["#ffcc00", "#000000", "#ff0000", "#00cc00"],
        currentColor: "#ffcc00",
        specs: {
            "Engine": "5.2L V10",
            "Horsepower": "631 hp",
            "0-60 mph": "2.5 seconds",
            "Top Speed": "202 mph",
            "Transmission": "7-Speed Automatic",
            "Drive Type": "All-Wheel Drive"
        },
        image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// DOM elements
const carImage = document.getElementById('carImage');
const carName = document.getElementById('carName');
const carSpecs = document.getElementById('carSpecs');
const carPrice = document.getElementById('carPrice');
const colorSelector = document.getElementById('colorSelector');
const carSelector = document.getElementById('carSelector');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const rotateBtn = document.getElementById('rotateBtn');

// State variables
let currentCarIndex = 0;
let isRotating = false;

// Initialize the showroom
function initShowroom() {
    renderCarCards();
    updateCarDisplay();
    updateColorSelector();
    addEventListeners();
}

// Render car selection cards
function renderCarCards() {
    carSelector.innerHTML = '';
    
    carData.forEach((car, index) => {
        const card = document.createElement('div');
        card.className = `car-card ${index === currentCarIndex ? 'active' : ''}`;
        card.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-card-img">
            <h3 class="car-card-title">${car.name}</h3>
            <p class="car-card-subtitle">${car.model}</p>
        `;
        
        card.addEventListener('click', () => {
            currentCarIndex = index;
            updateCarDisplay();
            updateColorSelector();
            updateCarCards();
        });
        
        carSelector.appendChild(card);
    });
}

// Update car cards active state
function updateCarCards() {
    const cards = document.querySelectorAll('.car-card');
    cards.forEach((card, index) => {
        if (index === currentCarIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Update the main car display
function updateCarDisplay() {
    const currentCar = carData[currentCarIndex];
    
    // Add loading effect
    carImage.classList.add('loading');
    
    // Update car image with color effect
    setTimeout(() => {
        carImage.src = currentCar.image;
        carImage.style.filter = `drop-shadow(0 10px 20px rgba(0, 0, 0, 0.7)) hue-rotate(${getHueRotation(currentCar.currentColor)}deg)`;
        carImage.classList.remove('loading');
    }, 300);
    
    // Update car info
    carName.textContent = currentCar.name;
    carPrice.textContent = currentCar.price;
    
    // Update car specs
    carSpecs.innerHTML = '';
    for (const [key, value] of Object.entries(currentCar.specs)) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${key}</span><span class="spec-value">${value}</span>`;
        carSpecs.appendChild(li);
    }
}

// Calculate hue rotation based on color
function getHueRotation(color) {
    const colorMap = {
        "#1a1a1a": 0,
        "#c0c0c0": 0,
        "#003366": 200,
        "#8b0000": 0,
        "#000000": 0,
        "#ffcc00": 50,
        "#ff0000": 0,
        "#ffffff": 0,
        "#5d5d5d": 0,
        "#0066cc": 200,
        "#2f4f4f": 180,
        "#800020": 340,
        "#00cc00": 120
    };
    
    return colorMap[color] || 0;
}

// Update color selector
function updateColorSelector() {
    const currentCar = carData[currentCarIndex];
    colorSelector.innerHTML = '';
    
    currentCar.colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = `color-option ${color === currentCar.currentColor ? 'active' : ''}`;
        colorOption.style.backgroundColor = color;
        colorOption.title = getColorName(color);
        
        colorOption.addEventListener('click', () => {
            currentCar.currentColor = color;
            updateCarDisplay();
            updateColorSelector();
        });
        
        colorSelector.appendChild(colorOption);
    });
}

// Helper function to get color name from hex code
function getColorName(hex) {
    const colorNames = {
        "#1a1a1a": "Onyx Black",
        "#c0c0c0": "Silver Metallic",
        "#003366": "Midnight Blue",
        "#8b0000": "Burgundy Red",
        "#000000": "Jet Black",
        "#ffcc00": "Lamborghini Yellow",
        "#ff0000": "Ferrari Red",
        "#ffffff": "Alpine White",
        "#5d5d5d": "Graphite Gray",
        "#0066cc": "Electric Blue",
        "#2f4f4f": "Dark Slate",
        "#800020": "Mercedes Red",
        "#00cc00": "Lime Green"
    };
    
    return colorNames[hex] || "Custom Color";
}

// Navigation functions
function showNextCar() {
    currentCarIndex = (currentCarIndex + 1) % carData.length;
    updateCarDisplay();
    updateColorSelector();
    updateCarCards();
}

function showPrevCar() {
    currentCarIndex = (currentCarIndex - 1 + carData.length) % carData.length;
    updateCarDisplay();
    updateColorSelector();
    updateCarCards();
}

// Toggle auto-rotation
function toggleRotation() {
    isRotating = !isRotating;
    
    if (isRotating) {
        carImage.classList.add('rotate-animation');
        rotateBtn.innerHTML = '<i class="fas fa-pause"></i> Stop Rotation';
        rotateBtn.style.background = 'rgba(255, 100, 100, 0.2)';
    } else {
        carImage.classList.remove('rotate-animation');
        rotateBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Auto Rotate';
        rotateBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    }
}

// Add event listeners
function addEventListeners() {
    prevBtn.addEventListener('click', showPrevCar);
    nextBtn.addEventListener('click', showNextCar);
    rotateBtn.addEventListener('click', toggleRotation);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showPrevCar();
        } else if (e.key === 'ArrowRight') {
            showNextCar();
        } else if (e.key === ' ' || e.key === 'Spacebar') {
            toggleRotation();
            e.preventDefault();
        }
    });
    
    // Add some interactive effects for the car image
    carImage.addEventListener('mouseenter', () => {
        if (!isRotating) {
            carImage.style.transform = 'scale(1.05)';
        }
    });
    
    carImage.addEventListener('mouseleave', () => {
        if (!isRotating) {
            carImage.style.transform = 'scale(1)';
        }
    });
    
    // Handle image loading errors
    carImage.addEventListener('error', () => {
        console.error('Failed to load car image');
        carImage.src = 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        carImage.classList.remove('loading');
    });
}

// Initialize the showroom when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShowroom);
} else {
    initShowroom();
}