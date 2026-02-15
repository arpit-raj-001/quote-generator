# 💬 Random Quote Generator

A dynamic and interactive web application that fetches random quotes from an external API. Beyond simply displaying text, this project integrates native Web APIs to provide Text-to-Speech capabilities, clipboard interaction, and social media sharing.

## 🚀 Features

* **Instant Quote Fetching:** Retrieves a new random quote and author with a single click.
* **Loading State:** Visual feedback on the button ("Loading...") while data is being fetched.
* **🔊 Text-to-Speech:** Uses the browser's native Speech Synthesis API to read the quote aloud.
* **📋 Copy to Clipboard:** Copies the quote text instantly with a "copied" popup confirmation.
* **🐦 Social Sharing:** Direct integration to Tweet/Post the current quote on X (Twitter).
* **Error Handling:** Gracefully displays an error message if the API request fails.

---

## 🧠 Technical Approach

The logic was built using **Vanilla JavaScript**, focusing on asynchronous operations and native browser APIs to avoid external dependencies.

### 1. Asynchronous Data Fetching
I utilized the **Fetch API** to handle data retrieval.
* **Endpoint:** `https://dummyjson.com/quotes/random`
* **Logic:** The `randomquote()` function handles the request. I used `.then()` chaining to handle the promise resolution and JSON parsing.
* **UX Consideration:** Before the fetch begins, the button text changes to "Loading..." and a class is added to prevent spam clicking. Upon success or failure, the state is reset.

### 2. Native Web APIs
Instead of using heavy libraries, I leveraged powerful APIs built into modern browsers:
* **SpeechSynthesis API:** The "Sound" button creates a `SpeechSynthesisUtterance` instance. It combines the quote text and the author's name into a single string for the browser to speak.
* **Clipboard API:** The `navigator.clipboard.writeText()` method is used for the copy function. This is asynchronous and cleaner than the older `document.execCommand` method.

### 3. Event-Driven Architecture
The application is purely event-driven. I selected DOM elements using `querySelector` and attached `click` event listeners to handle specific user interactions (New Quote, Sound, Copy, Tweet).

---


