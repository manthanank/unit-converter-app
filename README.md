# Unit Converter App

A simple unit converter application built with Angular and styled using Tailwind CSS. The app allows users to convert between different units of length, including meters, kilometers, centimeters, and millimeters.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Convert between meters, kilometers, centimeters, and millimeters.
- Responsive design using Tailwind CSS.
- User-friendly interface for quick unit conversions.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/manthanank/unit-converter-app.git
   cd unit-converter-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Tailwind CSS:**

   Tailwind CSS is already configured in the project. To ensure it is working correctly, Tailwind directives are included in `src/styles.scss`.

4. **Run the application:**

   ```bash
   ng serve
   ```

   Navigate to `http://localhost:4200/` in your browser.

## Usage

Once the application is running, you can:

- Input a value to convert.
- Select the "From" and "To" units using the dropdown menus.
- Click the **Convert** button to see the result.
- To reset the conversion, click the **Reset** button.
- Swap the "From" and "To" units using the **Swap** button.
- The result will be displayed below the input fields.
- The app is responsive and works on both desktop and mobile devices.

## Project Structure

```plaintext
unit-converter-app/
│
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.scss
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   ├── styles.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── ...
├── tailwind.config.js
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies Used

- **Angular**: Frontend framework for building the app.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **TypeScript**: Strongly-typed JavaScript used in Angular.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
