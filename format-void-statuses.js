// Function to extract values from a paragraph
function extractValues(paragraph) {
    // Regular expression to match "ES-" followed by digits
    const regex = /ES-\d+/g;
    // Extract all matches from the paragraph
    const matches = paragraph.match(regex);
    // If matches are found, return them separated by commas
    if (matches) {
        return matches.join(", ");
    } else {
        return "No matches found.";
    }
}
  
// Main function to process command line arguments
function main() {
    // Check if a paragraph is provided as an argument
    if (process.argv.length < 3) {
        console.log("Please provide a paragraph as an argument.");
        return;
    }
    // Get the paragraph from command line arguments
    const paragraph = process.argv.slice(2).join(" ");
    // Call the extractValues function and print the result
    console.log("\n");
    console.log(extractValues(paragraph));
}
  
// Call the main function
main();