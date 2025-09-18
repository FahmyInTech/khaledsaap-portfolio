// This function checks if two rectangles are overlapping.
function isOverlapping(rect1, rect2) {
  // Add a small padding to the check to create more space
  const padding = 20; 
  return !(
    rect1.right < rect2.left - padding ||
    rect1.left > rect2.right + padding ||
    rect1.bottom < rect2.top - padding ||
    rect1.top > rect2.bottom + padding
  );
}

export function initWordCloud() {
  const container = document.querySelector('.word-cloud-background');
  if (!container) return;

  const words = Array.from(container.querySelectorAll('span'));
  const heroSection = document.querySelector('.hero-section');
  const textContent = document.querySelector('.hero-text-content');
  
  // Define the exclusion zone based on the main text content
  const textContentRect = textContent.getBoundingClientRect();
  const containerRect = heroSection.getBoundingClientRect();
  
  const exclusionZone = {
    top: textContentRect.top - containerRect.top,
    left: textContentRect.left - containerRect.left,
    right: textContentRect.right - containerRect.left,
    bottom: textContentRect.bottom - containerRect.top
  };

  const placedRects = [exclusionZone]; // Start with the exclusion zone already "placed"

  words.forEach(word => {
    word.style.position = 'absolute';
    const wordRect = word.getBoundingClientRect();
    let isPlaced = false;

    for (let i = 0; i < 100; i++) { // Increased attempts for better placement
      const candidate = {
        top: Math.random() * (containerRect.height - wordRect.height),
        left: Math.random() * (containerRect.width - wordRect.width),
        width: wordRect.width,
        height: wordRect.height,
      };
      candidate.right = candidate.left + candidate.width;
      candidate.bottom = candidate.top + candidate.height;

      let hasCollision = false;
      for (const placedRect of placedRects) {
        if (isOverlapping(candidate, placedRect)) {
          hasCollision = true;
          break;
        }
      }

      if (!hasCollision) {
        word.style.top = `${candidate.top}px`;
        word.style.left = `${candidate.left}px`;
        placedRects.push(candidate);
        isPlaced = true;
        break;
      }
    }

    if (!isPlaced) {
      word.style.display = 'none';
    }
  });

  // The interactive spotlight effect remains the same
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    words.forEach(word => {
      if (word.style.display === 'none') return;
      const wordRect = word.getBoundingClientRect();
      const wordX = (wordRect.left - rect.left) + (wordRect.width / 2);
      const wordY = (wordRect.top - rect.top) + (wordRect.height / 2);
      const distance = Math.sqrt(Math.pow(mouseX - wordX, 2) + Math.pow(mouseY - wordY, 2));
      const maxDistance = 150;

      if (distance < maxDistance) {
        word.style.opacity = 0.8 * (1 - distance / maxDistance);
      } else {
        word.style.opacity = 0.08;
      }
    });
  });
} 