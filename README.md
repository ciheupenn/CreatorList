# WEB103 Prework - *Creatorverse*

Submitted by: **Cindy**

About this web app: **Creatorverse is a full-stack web application that allows users to discover, add, edit, and delete their favorite content creators. Users can manage a personalized list of content creators from platforms like YouTube, Twitch, Instagram, TikTok, and more.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Responsive design that works on both desktop and mobile devices
* [x] Beautiful gradient background and modern UI design
* [x] Smooth hover animations and transitions for better user experience
* [x] Loading states to provide feedback during API calls
* [x] Form validation and error handling for better user experience
* [x] Delete confirmation dialogs to prevent accidental deletions
* [x] Back navigation links and intuitive routing between pages
* [x] Professional card-based layout with consistent styling
* [x] PicoCSS integration for clean, semantic HTML styling
* [x] Pre-populated database with five sample content creators

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./CreatorList/src/assets/creatorList.gif' title='Video Walkthrough' width='100%' alt='Creatorverse App Demo' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with MacOS

## Notes

**Challenges encountered while building the app:**

1. **Supabase Setup**: Initially had some difficulty setting up the Supabase database connection and ensuring the API keys were properly configured. Resolved by carefully following the Supabase documentation and double-checking the environment setup.

2. **React Router Implementation**: Implementing client-side routing with React Router required careful consideration of the URL structure and navigation flow. Ensured each creator has a unique URL path for proper routing.

3. **State Management**: Managing form state and API calls with async/await patterns required careful error handling and loading state management to provide a smooth user experience.

4. **Responsive Design**: Creating a layout that works well on different screen sizes while maintaining the card-based design was challenging but achieved through CSS Grid and Flexbox.

5. **Delete Functionality**: Implementing safe deletion with confirmation dialogs to prevent accidental data loss while maintaining good UX.

**Additional Context:**

The app uses modern React patterns with functional components and hooks, Supabase for the backend database, and PicoCSS for clean, semantic styling. PicoCSS provides beautiful default styles for HTML elements without requiring custom CSS classes, making the code more semantic and maintainable. The project structure follows React best practices with separate components and pages directories. The application successfully implements all CRUD operations (Create, Read, Update, Delete) for content creator management with five sample creators pre-loaded in the database.

## License

Copyright [2024] [Cindy]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
