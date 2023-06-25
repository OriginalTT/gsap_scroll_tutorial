const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// End section
const section = document.querySelector('section');
const end = section.querySelector('h1');

const images = []; // Array of Image elements
const numImages = 134; // Number of images in the sequence
let loadedImages = 0;

const imageContainer = document.querySelector('#image-sequence');

for (let i = 0; i < numImages; i++) {
    const img = new Image();
    const paddedIndex = String(1 + i).padStart(3, '0');
    img.src = `./images/ezgif-frame-${paddedIndex}.png`;
    img.style.display = 'none'; // Hide the image by default
    img.onload = () => {
        loadedImages++;
    };
    imageContainer.appendChild(img); // Append the image to the container
    images.push(img);
}

// ...

function displayImage(index) {
    // Hide all images
    images.forEach(img => img.style.display = 'none');
    // Show the image at the given index
    images[index].style.display = 'block';
}

gsap.to(imageContainer, {
    scrollTrigger: {
        end: '+=5000vh',
        scrub: 0.5,
        pin: imageContainer,
        onUpdate: (self) => {
            const frameIndex = Math.round(self.progress * (numImages - 1));
            // Display the appropriate image for the current frameIndex
            console.log(frameIndex);
            displayImage(frameIndex);
        },
        markers: true,
    },
});

function displayImage(index) {
    // Hide all images
    images.forEach(img => img.style.display = 'none');
    // Show the image at the given index
    images[index].style.display = 'block';
}