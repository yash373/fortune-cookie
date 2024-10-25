# 🥠 Fortune Cookie App

A modern web application that generates random fortune cookie messages using Next.js and Tailwind CSS.

Live demo: [https://fortune-cookie-zj8g.vercel.app/](https://fortune-cookie-zj8g.vercel.app/)

## Features

- ✨ Random fortune cookie generation
- 🎨 Beautifully animated cookie cracking effect
- 📱 Fully responsive design
- 💾 Save favorite fortunes

## Tech Stack

- Next.js 14
- Tailwind CSS
- TypeScript
- Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yash373/fortune-cookie.git
cd fortune-cookie
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fortune-cookie/
├── src/
│   ├── pages/
│   │   ├── index.tsx
│   │   └── _app.tsx
│   ├── components/
│   │   └── Cookie.tsx
│   ├── scripts/
│   │   └── getMessage.tsx
│   └── styles/
│       └── globals.css
├── public/
└── tailwind.config.js
```

## Usage

- Click the fortune cookie to crack it open
- Your fortune will appear with a smooth animation
- Save fortunes to your favorites list

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Deployment

This project is deployed on Vercel. You can visit the live version at:
[https://fortune-cookie-zj8g.vercel.app/](https://fortune-cookie-zj8g.vercel.app/)

To deploy your own version:
1. Fork this repository
2. Import the project to [Vercel](https://vercel.com/new)
3. Deploy with default settings

## Support

For support, please open an issue in the GitHub repository.

## Acknowledgments

- Fortune cookie messages curated from various sources