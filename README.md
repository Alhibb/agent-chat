```markdown
# AgentIPY Chatbot

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Solana](https://img.shields.io/badge/Solana-%23000000.svg?style=for-the-badge&logo=solana&logoColor=white)

An AI-powered chatbot interface for AgentIPY, built with Next.js and Google's Gemini AI.

[Live Demo](#) · [Report Bug](https://github.com/Alhibb/agent-chat/issues) · [Request Feature](https://github.com/Alhibb/agent-chat/issues)

</div>

## 🌟 Features

- 🤖 AI-powered chatbot using Google's Gemini AI
- 📊 Real-time AgentiPy (APY) token information
- 📈 Live Solana TPS tracking
- 🔍 Token data fetching capabilities
- 🧮 Yield farming calculator
- 🌓 Dark mode support
- 📱 Fully responsive design

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn
- A Google Gemini API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/Alhibb/agent-chat.git
cd agent-chat
```

2. Install dependencies


```shellscript
npm install
```

3. Set up environment variables


```shellscript
cp .env.example .env.local
```

Add your Gemini API key to `.env.local`:

```plaintext
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server


```shellscript
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser


## 📦 Dependencies

### Core Dependencies

```shellscript
npm install @radix-ui/react-dropdown-menu @radix-ui/react-slot @radix-ui/react-toast class-variance-authority clsx lucide-react next-themes react-markdown react-syntax-highlighter @google/generative-ai
```

### Development Dependencies

```shellscript
npm install -D tailwindcss postcss autoprefixer
```

### UI Components (shadcn/ui)

```shellscript
# Initialize shadcn/ui
npx shadcn@latest init

# Add required components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add scroll-area
npx shadcn@latest add card
npx shadcn@latest add dropdown-menu
npx shadcn@latest add sheet
npx shadcn@latest add tabs
npx shadcn@latest add skeleton
npx shadcn@latest add toast
```

## 🏗️ Project Structure

```plaintext
agent-chat/
├── app/                # Next.js app directory
├── components/         # React components
├── hooks/             # Custom React hooks
├── lib/              # Utility functions
├── public/           # Static assets
└── ...config files
```

## 🔧 Configuration

The project uses several configuration files:

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration


## 🌐 API Routes

### Chat Endpoint

```typescript
POST /api/chat
Body: { messages: Array<{ role: string, content: string }> }
Response: { role: 'assistant', content: string }
```

### Token Price Endpoint

```typescript
GET /api/token-price
Response: {
  price: number,
  marketCap: number,
  volume: number,
  priceChange24h: number,
  liquidity: number
}
```

### TPS Endpoint

```typescript
GET /api/tps
Response: { tps: number }
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch

```shellscript
git checkout -b feature/AmazingFeature
```


3. Commit your changes

```shellscript
git commit -m 'Add some AmazingFeature'
```


4. Push to the branch

```shellscript
git push origin feature/AmazingFeature
```


5. Open a Pull Request


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Alhibb - [@I_Bakondare](https://twitter.com/I_Bakondare)

Project Link: [https://github.com/Alhibb/agent-chat](https://github.com/Alhibb/agent-chat)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Google Generative AI](https://ai.google.dev/)
- [Solana](https://solana.com/)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





