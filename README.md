# QR Code Generator

This project is a QR code generator built with Next.js and TypeScript. It allows users to generate QR codes for contact information and Wi-Fi credentials.

## Features

- Generate QR codes for contact information (vCard format).
- Generate QR codes for WiFi credentials.
- Customizable QR code appearance.

## Technologies Used

- TypeScript
- React
- Next.js
- Tailwind CSS
- npm
- next-qrcode

## Components

### `ContactForm`

A form to input contact information and generate a vCard QR code.

#### Props

- `setText: (text: string) => void` - Function to set the generated vCard text.

### `WifiForm`

A form to input WiFi credentials and generate a WiFi QR code.

#### Props

- `setText: (text: string) => void` - Function to set the generated WiFi text.

### `GenerateQrCode`

A component to generate and display a QR code.

#### Props

- `text: string` - The text to encode in the QR code.
- `options?: { errorCorrectionLevel?: "L" | "M" | "Q" | "H"; margin?: number; width?: number; color?: { dark?: string; light?: string; }; }` - Optional QR code customization options.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/usmanghanni/qrCodeNextJs.git
    ```
2. Navigate to the project directory:
    ```sh
    cd qrCodeNextJs
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

To start the development server, run:
```sh
npm run dev
```
