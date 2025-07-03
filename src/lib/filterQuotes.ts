import quotes  from "../data/quotes";
type Quote = {
    text: string;
};

type QuoteTopic = {
    topic: string;
    quotes: Quote[];
};

export default function filterQuotes(): QuoteTopic[] {
    return quotes().map((quoteTopic: QuoteTopic) => ({
        topic: quoteTopic.topic,
        quotes: quoteTopic.quotes.map((quote: Quote) => ({
            text: quote.text,
        })),
    }));
}