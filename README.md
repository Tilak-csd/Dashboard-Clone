# React Dashboard

A modular **React.js** dashboard project. The project is still under development and not fully functional, but the UI structure and components are in place.

## Project Structure

```
Dashboard/
├── public/
│   ├── discount.png
│   ├── image.png
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── CustomIcon.jsx
│   │   └── react.svg
│   ├── components/
│   │   ├── amount/
│   │   │   ├── AmountPending.jsx
│   │   │   ├── AmountProcessed.jsx
│   │   │   └── NextPayout.jsx
│   │   └── sidebar/
│   │       ├── Sidebar.jsx
│   │       └── SidebarItems.jsx
│   ├── UI/
│   │   ├── Button.jsx
│   │   ├── DropdownMonth.jsx
│   │   ├── Filter.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Layout.jsx
│   │   ├── MainContent.jsx
│   │   └── Navbar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── main.jsx
├── .gitignore
├── eslintrc.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Features (Planned)

* Sidebar navigation with dynamic items
* Main content area displaying data cards
* Dropdown filters and buttons for interactivity
* Amount tracking components: Pending, Processed, and Next Payout
* Responsive layout for different screen sizes
* Future integration with APIs and data management

## Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS 
* **Icons & UI:** React Icons (heroicons)
* **Bundler:** Vite
* **State Management:** React Context / Recoil

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Tilak-csd/Dashboard-Clone.git
```

2. Navigate to the project folder:

```bash
cd Dashboard-Clone
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173) (default for Vite).

## Preview
**Desktop**
<img width="1352" height="646" alt="image" src="https://github.com/user-attachments/assets/08a770a4-5673-4f5e-aa66-4c42504fa1f2" />
<img width="1355" height="646" alt="image" src="https://github.com/user-attachments/assets/3081c742-b609-4160-88a7-2749f52d6354" />
**Mobile**
<img width="213" height="468" alt="image" src="https://github.com/user-attachments/assets/6aa5549d-3c9f-44b8-94df-c5378a7c3870" />


## Contributing

* Fork the repository.
* Create a new branch: `git checkout -b feature-name`
* Make your changes and commit: `git commit -m 'Add feature'`
* Push the branch and open a pull request.

## License

This project is licensed under the MIT License.

---

> ⚠️ **Note:** This dashboard is a work in progress. Components are modular but functionality is incomplete. Contributions and feedback are welcome!
