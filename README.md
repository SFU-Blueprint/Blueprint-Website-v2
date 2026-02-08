## Getting Started

### Prerequisites
- Node.js 22.x
- npm 10.x or higher

### Setup
Run `npm ci`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite's dev server.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes using hot module replacement (HMR).

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build from the `dist` folder.\
Useful for testing the production build before deployment.

# Website Data Management

This README guide is designed to help you understand and manage the data for your website effectively. All crucial data is stored in the `src/constants` directory, within specific JavaScript files organized by functionality. Below, you will find instructions on how to navigate and update each file.

## Directory Structure

The data for the website is organized into several files within the `src/constants` directory:

- **Team/**
  - `Alumni.js`: Contains data about alumni who have previously worked with the organization.
  - `Blueprint.js`: Manages data related to team members who worked on the Blueprint project.
  - `Execs.js`: Holds information about the executive members of the organization.
  - `Members.js`: General file for current team members not tied to a specific project.
  - `Mosaic.js`: Contains data about team members who worked on the Mosaic project.
  - `Pedals.js`: Manages data related to team members who worked on the Pedals project.
- `Events.js`: Manages data related to upcoming and past events.
- `Hiring.js`: Contains data about the open roles and hiring status.
- `Events.js`: Manages data related to upcoming and past events.
- `Notification.js`: Controls the notifications displayed on the website.
- `Projects.js`: Holds information about ongoing and past projects.

## How to Modify Data

### 1. Events

To update or add new events, navigate to the `Events.js` file. This file contains an array of event objects. Each object represents an event with properties such as title, image, date, description, and a link. To add an event, append a new object to the array with the respective details.

### 2. Hiring

The `Hiring.js` file within the `Team` folder manages information related to job openings and roles. It is structured as an array of role objects, each with details like the role name, description, hiring status, and links for applications. Modify the `Hiring` property to `true` or `false` to open or close the hiring for a role, and update the link and description as necessary.

### 3. Notification

To update or change the notification messages displayed on the website, you should modify the `Notification.js` file located in the `src/constants` directory. This file controls the visibility and content of notifications across the site.


### 4. Projects

To add or update project information, go to the `Projects.js` file. This file contains a list of projects each defined by a comprehensive set of properties such as the project name, description, images, tags, and detailed descriptions of the project and the associated non-profit organization. Update the existing project details or add new ones as needed by following the same object structure.

## General Tips

- Always ensure that the structure of the data objects is consistent with existing entries to avoid issues in the frontend rendering.
- When adding images or links, make sure they are correctly pathed and accessible.


## Saving Changes

After making changes, save the files and commit the changes. 
Make sure to test the website to see that all data updates are appearing as expected.
Finally submit a Pull Request.


