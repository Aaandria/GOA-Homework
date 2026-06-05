// დაწერე პროგრამა, რომელიც თავიდან გამოიტანს Downloading File…, 4 წამის შემდეგ File Downloaded, ხოლო ბოლოს Ready To Open.

console.log("Downloading File...");
setTimeout(() => console.log("File Downloaded"), 4000);
setTimeout(() => console.log("Ready To Open"), 5000);
// Downloading File...
// File Downloaded
// Ready To Open