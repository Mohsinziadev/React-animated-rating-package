## React Advanced Rating

A highly customizable and animated rating component for React, allowing you to add star ratings with animation effects, and supports editable, read-only, alert, and reset functionalities.

### Demo

https://react-advanced-animated-rating.vercel.app/

<br />
<div align="center">
  <a href="https://react-advanced-animated-rating.vercel.app/">
    <img src="https://drive.google.com/uc?id=11-viYdaXh_SC4Jv7AUEFQ_bIZHclSVmC" alt="Logo"  style="max-width: 100%; height: 15rem; object-fit: cover;">
  </a>
</div>

### Compatibility

Your project needs to use React 16.8 or later. react-advanced-rating uses modern web technologies, making it fast, lightweight, and easy to style. This comes at the cost of supporting only modern browsers , as shown [supporting only modern browsers](https://caniuse.com/#feat=internationalization).

## Features

- Animated star rating with transition effects
- Editable and read-only rating modes
- Alert on rating change
- Rating reset functionality
- Fully customizable star colors and background
- Support for animation effects
- Responsive design
- Easy to integrate with React components

### Explanation of Props:

- rating: The initial rating value (e.g., 3).
- editable: A boolean that controls whether the rating is editable (default: true).
- enableAnimation: A boolean to enable or disable the animation effect (default: false).
- onChange: A function that is called when the rating changes (e.g., onChange={handleRatingChange}).
- backgroundClass: A string to apply additional styling to the star's background (optional).
- starColor: The color for the stars (default: 'yellow').
- resetRating: A function to reset the rating value.
- alertOnChange: A boolean that triggers an alert when the rating changes (optional).

### Installation

Add `react-advanced-rating` to your project by running one of the following commands:

### Usage

```jsx
npm install react-advanced-rating
# or
yarn add react-advanced-rating
```

```jsx
import React, { useState } from "react";
import Rating from "react-advanced-animated-rating";


function App() {
  const [currentRating, setCurrentRating] = useState(3);
  const [readOnlyRating, setReadOnlyRating] = useState(4);
  const [ratingAlert, setRatingAlert] = useState(3);
  const [resetRating, setResetRating] = useState(2);

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  const handleRatingChangeAlert = (newRating) => {
    alert("Rating: " + newRating);
    setRatingAlert(newRating);
  };

  const handleResetRatingChange = (newRating) => {
    setResetRating(newRating);
  };

  const resetRatingValue = () => {
    setResetRating(2);
  };

  return (
    <Rating
      rating={currentRating}
      editable={true}
      enableAnimation={true}
      starColor="#FFDF00"
      backgroundClass="bg-[#f8f8f8] rounded-md p-0"
      onChange={handleRatingChange}
    />
  );
}
export default App;
```
