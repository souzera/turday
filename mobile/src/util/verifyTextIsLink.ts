export default function verifyTextIsLink(text: string): boolean {
    return text.includes("http") || text.includes('.com');
}