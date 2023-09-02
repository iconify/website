export interface ParsedNewsItem {
    time: number; // Time in UTC
    year: number; // Year
    title: string; // Heading
    link: string; // Link to news
    hidden?: boolean; // True if news is hidden
    content: string; // Content without heading/metadata
    file: string; // Full filename
    filename: string; // Short filename
}
