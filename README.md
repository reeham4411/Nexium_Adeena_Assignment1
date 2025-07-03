# Quote Generator

A beautiful quote generator built with Next.js and React. Browse inspiring quotes by topic with a modern, responsive interface.

## Features

- 🎨 Beautiful gradient UI with animations
- 📱 Mobile responsive design
- 🌙 Dark mode support
- 🔍 Topic-based quote filtering

## Tech Stack

- Next.js 14+ (TypeScript)
- Tailwind CSS
- shadcn/ui components

## Installation

```bash
# Clone and install
git clone <repository-url>
cd quote-generator
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Usage

1. Select a topic from the dropdown
2. Browse the curated quotes
3. Get inspired!

## Project Structure

```
├── components/
│   ├── QuoteForm.tsx     # Topic selection form
│   └── QuoteLists.tsx    # Quote display
├── lib/
│   └── filterQuotes.ts   # Quote data & filtering
└── app/
    └── page.tsx         # Main page
```

## Adding Quotes

Edit `/lib/filterQuotes.ts`:

```typescript
{
  topic: "Your Topic",
  quotes: [
    { text: "Your quote", author: "Author Name" }
  ]
}
```

## License

MIT License

---

Made with ❤️ using Next.js and TypeScript
