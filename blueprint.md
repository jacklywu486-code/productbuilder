# **Project Blueprint: Lotto Number Generator**

## **Overview**

This project creates a web-based Lotto Number Generator. The application will provide a user-friendly interface for generating random, unique lottery numbers. It is built using modern web technologies (HTML, CSS, JavaScript) with a focus on a clean, responsive, and visually appealing design.

## **Design and Features**

### **Visual Design**
*   **Aesthetics:** A modern and bold design with a unique user experience.
*   **Layout:** A visually balanced, mobile-responsive layout with clean spacing.
*   **Color Palette:** A vibrant and energetic color palette will be used.
*   **Typography:** Expressive and relevant typography will be used to emphasize key information.
*   **Texture:** A subtle noise texture will be applied to the main background for a premium feel.
*   **Visual Effects:** Multi-layered drop shadows will be used to create a sense of depth. Interactive elements will have a "glow" effect.
*   **Iconography:** Icons will be used to enhance user understanding and navigation.

### **Features**
*   **Number Generation:** Generates a set of 6 unique random numbers within a specified range (e.g., 1-45).
*   **Interactive UI:** A "Generate" button to trigger the number generation.
*   **Number Display:** The generated numbers will be displayed in a clear and visually appealing format.
*   **Web Components:** A custom element (`<lotto-display>`) will be used to encapsulate the number display logic.
*   **Dark/Light Mode:** A theme toggle allows users to switch between light and dark modes, with persistence using local storage.

## **Current Plan**

1.  **`index.html`**:
    *   Add a theme toggle button.
2.  **`style.css`**:
    *   Define CSS variables for both light and dark themes.
    *   Implement theme switching using a class on the body element.
3.  **`main.js`**:
    *   Implement theme toggle logic.
    *   Persist the theme preference in `localStorage`.
4.  **Deployment**:
    *   Commit and push changes to the repository.
