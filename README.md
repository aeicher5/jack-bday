# Jack's Birthday Tribute Website

A beautiful scrolling tribute website for Jack's 30th birthday, containing messages and photos from friends and family.

## Features

- Scrolling tribute with messages from family and friends
- Photo gallery with all submitted photos
- Download all photos as a ZIP file
- Automatic conversion of HEIC images to JPEG for browser compatibility
- Smooth animations and transitions
- Mobile-responsive design

## How to Use

1. Open the `index.html` file in a web browser to view the tribute.
   - Click "View Photo Gallery" to see all submitted photos in a grid layout.

2. The website is designed to scroll smoothly with fade-in animations for each entry.

3. You can save the webpage as a PDF using your browser's print function:
   - Open the page in Chrome or another modern browser
   - Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
   - Set the destination to "Save as PDF"
   - Make sure "Background graphics" is checked in the settings
   - Click "Save"

## File Structure

- `index.html`: The main HTML file containing all tribute entries
- `gallery.html`: The photo gallery page displaying all submitted photos
- `styles.css`: Styling for the main tribute page
- `gallery.css`: Styling specific to the photo gallery
- `script.js`: JavaScript for smooth scrolling and animations
- `photos/`: Directory containing all the photos from friends and family

## HEIC Image Handling

This website includes automatic conversion of HEIC images (common format from iOS devices) to JPEG for browser compatibility. The conversion happens client-side using the heic2any library, so no special server setup is required.

## Notes

- The HEIC conversion may take a few moments to process, especially for larger images.
- The website is responsive and will work on mobile devices, but is optimized for viewing on larger screens.

## Credits

Created with love for Jack's 30th birthday. 