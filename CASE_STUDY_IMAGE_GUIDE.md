# Case Study Image Guide

## How to Add Images to Your Case Study Pages

### ✅ **Current Status: FIXED**
The lightbox functionality is now working perfectly! All gallery items now use the existing `palmaevent_logo.jpeg` image and will display properly when clicked.

### 🔧 **Recent Fixes Applied:**

#### **1. Arrow Navigation Conflict - RESOLVED**
- **Problem**: Arrow keys were conflicting between lightbox navigation and project navigation
- **Solution**: 
  - Lightbox uses `ArrowLeft`/`ArrowRight` keys (only when lightbox is active)
  - Project navigation uses `PageUp`/`PageDown` keys as alternatives
  - Added `preventDefault()` and `stopPropagation()` to prevent conflicts
  - Event listeners are properly cleaned up when lightbox closes

#### **2. Arrow Positioning - IMPROVED**
- **Problem**: Navigation arrows were overlapping with images
- **Solution**:
  - Added padding to lightbox content container (100px on desktop, 60px on tablet, 50px on mobile)
  - Positioned arrows at the edges of the content area
  - Made arrows more visible with better contrast and hover effects
  - Responsive design ensures arrows are always accessible

#### **3. Enhanced User Experience**
- **Added Counter**: Shows current image position (e.g., "3 / 9")
- **Keyboard Hints**: Added tip about using PageUp/PageDown for project navigation
- **Better Visual Feedback**: Improved arrow styling and hover states
- **Independent Functions**: Lightbox and project navigation now work independently

### Step-by-Step Process

#### 1. **Create Project Image Folders**
Each project should have its own folder in `src/assets/images/projects/`:

```
src/assets/images/projects/
├── palma-identity/
│   ├── palmaevent_logo.jpeg (existing - working)
│   ├── palma-logo-light.jpg (add this)
│   ├── palma-logo-turquoise.jpg (add this)
│   ├── palma-logo-navy.jpg (add this)
│   ├── palma-shopping-bags.jpg (add this)
│   ├── palma-business-card.jpg (add this)
│   ├── palma-mug.jpg (add this)
│   ├── palma-usb.jpg (add this)
│   └── palma-pen.jpg (add this)
├── zain-telecom/
├── omo-fmcg/
└── [other-projects]/
```

#### 2. **Add Your Images**
- Place your project images in the appropriate folder
- Use descriptive filenames (e.g., `palma-logo-light.jpg`)
- Recommended formats: JPG, PNG, WebP
- Recommended sizes: 1200x800px or larger for gallery images

#### 3. **Update the HTML Structure**

**For Gallery Items:**
Replace the placeholder structure:
```html
<!-- OLD (Placeholder) -->
<div class="gallery-item" data-image="palma-logo-light.jpg" data-caption="Palma Logo on Light Background">
    <div class="gallery-item__image">
        <div class="gallery-item__placeholder">
            <span>Logo on Light Background</span>
        </div>
        <div class="gallery-item__zoom">
            <!-- zoom icon -->
        </div>
    </div>
</div>
```

With actual image:
```html
<!-- NEW (Real Image) -->
<div class="gallery-item" data-image="/src/assets/images/projects/palma-identity/palma-logo-light.jpg" data-caption="Palma Logo on Light Background">
    <div class="gallery-item__image">
        <img src="/src/assets/images/projects/palma-identity/palma-logo-light.jpg" alt="Palma Logo on Light Background">
        <div class="gallery-item__zoom">
            <!-- zoom icon -->
        </div>
    </div>
</div>
```

**For Hero Image:**
Replace the placeholder:
```html
<!-- OLD (Placeholder) -->
<div class="case-study-hero__image">
    <div class="case-study-hero__placeholder">
        <span>Palma Logo on Dark Turquoise Background</span>
    </div>
</div>
```

With actual image:
```html
<!-- NEW (Real Image) -->
<div class="case-study-hero__image">
    <img src="/src/assets/images/projects/palma-identity/palmaevent_logo.jpeg" alt="Palma Logo on Dark Turquoise Background">
</div>
```

#### 4. **Image Paths**
- **Hero Image**: Use the main project image (e.g., logo or key visual)
- **Gallery Images**: Use various applications and mockups
- **Paths**: Always use absolute paths starting with `/src/assets/images/projects/[project-name]/`

#### 5. **File Naming Convention**
Use descriptive, consistent naming:
- `[project]-[description]-[background].jpg`
- Examples:
  - `palma-logo-light.jpg`
  - `palma-logo-turquoise.jpg`
  - `palma-business-card.jpg`
  - `palma-shopping-bags.jpg`

#### 6. **Image Requirements**
- **Format**: JPG, PNG, or WebP
- **Size**: 1200x800px minimum for gallery images
- **Quality**: High quality, optimized for web
- **Aspect Ratio**: 3:2 ratio works best with current CSS

### Example for a New Project

Let's say you want to add images for a "Zain Telecom" project:

1. **Create folder**: `src/assets/images/projects/zain-telecom/`
2. **Add images**:
   - `zain-logo-primary.jpg`
   - `zain-billboard-mockup.jpg`
   - `zain-mobile-app.jpg`
   - `zain-business-cards.jpg`

3. **Update HTML**:
```html
<div class="gallery-item" data-image="/src/assets/images/projects/zain-telecom/zain-logo-primary.jpg" data-caption="Zain Primary Logo">
    <div class="gallery-item__image">
        <img src="/src/assets/images/projects/zain-telecom/zain-logo-primary.jpg" alt="Zain Primary Logo">
        <div class="gallery-item__zoom">
            <!-- zoom icon -->
        </div>
    </div>
</div>
```

### Features Available

Once you add real images, you'll get:
- ✅ **Lightbox Gallery**: Click any image to view full-size
- ✅ **Arrow Navigation**: Click arrows or use ArrowLeft/ArrowRight keys
- ✅ **Project Navigation**: Use PageUp/PageDown keys to navigate projects
- ✅ **Hover Effects**: Subtle zoom and overlay effects
- ✅ **Responsive Design**: Images adapt to different screen sizes
- ✅ **Loading States**: Smooth transitions between images
- ✅ **Image Counter**: Shows current position (e.g., "3 / 9")

### Navigation Controls

#### **Lightbox Navigation:**
- **Mouse**: Click left/right arrow buttons
- **Keyboard**: `ArrowLeft` / `ArrowRight` keys
- **Close**: `Escape` key or click outside

#### **Project Navigation:**
- **Mouse**: Click "Previous Project" / "Next Project" links
- **Keyboard**: `PageUp` / `PageDown` keys
- **Alternative**: `ArrowLeft` / `ArrowRight` keys (when lightbox is closed)

### Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images exist in the specified folders
- Verify file permissions

**Images look distorted?**
- Use consistent aspect ratios (3:2 recommended)
- Ensure images are high quality
- Check image dimensions are appropriate

**Lightbox not working?**
- ✅ **FIXED**: All gallery items now use existing images
- Verify `data-image` attributes point to correct paths
- Check that `case-study.js` is loaded
- Ensure no JavaScript errors in console

**Arrow navigation conflicts?**
- ✅ **FIXED**: Lightbox and project navigation are now independent
- Lightbox uses ArrowLeft/ArrowRight (only when active)
- Project navigation uses PageUp/PageDown as alternatives
- Event listeners are properly managed

**Arrows overlapping images?**
- ✅ **FIXED**: Arrows are now positioned outside image area
- Added padding to content container
- Responsive design ensures proper spacing

### CSS Classes Available

- `.gallery-item--large`: Makes an image span 2 columns
- `.gallery-item`: Standard gallery item
- `.gallery-item__image`: Image container
- `.gallery-item__zoom`: Zoom icon overlay

The CSS automatically handles:
- Responsive grid layout
- Hover animations
- Image scaling and cropping
- Lightbox functionality

### Current Working State

**Palma Identity Case Study:**
- ✅ Hero image displays correctly
- ✅ All gallery items show the logo image
- ✅ Lightbox opens when clicking any gallery item
- ✅ Arrow navigation works (no conflicts)
- ✅ Project navigation works independently
- ✅ Responsive design works on all screen sizes
- ✅ Image counter shows current position

**Next Steps:**
1. Add more diverse images to the `palma-identity` folder
2. Update the HTML to use different images for each gallery item
3. Repeat the process for other case studies
