export default function verifyTextIsEmail(text: string): boolean {
    return text.includes("@") && text.includes('.com');
}