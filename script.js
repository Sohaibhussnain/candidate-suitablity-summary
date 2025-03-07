// Drag and Drop Functionality
const dropArea = document.getElementById("dropArea");
const cvUpload = document.getElementById("cvUpload");

dropArea.addEventListener("click", () => cvUpload.click());

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = "#e3e3e3";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.backgroundColor = "#f8f9fa";
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = "#f8f9fa";
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        cvUpload.files = files;
        dropArea.innerHTML = `<p>${files[0].name} uploaded</p>`;
    }
});

function analyzeCandidate() {
    const jobDescription = document.getElementById("jobDescription").value;
    const cvFile = cvUpload.files[0];

    if (!jobDescription || !cvFile) {
        alert("Please upload a CV and paste a job description.");
        return;
    }

    document.getElementById("result").innerHTML = "<p>Analyzing candidate suitability...</p>";

    // Simulating AI analysis (replace this with actual ChatGPT API call if needed)
    setTimeout(() => {
        document.getElementById("result").innerHTML = `
            <p><b>Suitability Summary:</b></p>
            <p>This candidate matches <b>75%</b> of the job requirements.</p>
        `;
    }, 2000);
}
