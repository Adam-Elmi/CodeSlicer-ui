const fileInput = document.getElementById("file-input");

const fileArea = {
    fileName: document.querySelector(".file-name"),
    fileSize: document.querySelector(".file-size"),
    fileExtension: document.querySelector(".extension")
};

let content = "";

try {
    if (fileInput) {
        fileInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    console.log(split(e.target.result));
                    fileArea.fileName.textContent = file.name;
                    fileArea.fileSize.textContent = calculateSize(file.size);
                    fileArea.fileExtension.textContent = file.name.slice(file.name.lastIndexOf(".") + 1);
                }
                reader.onerror = (error) => {
                    console.error("file failed to load: ", error);
                }
                reader.readAsText(file);
            }
        });
    }
    
} catch (error) {
    console.error("File input is not found");
}


// calculate size in BYTES, KB, MB
function calculateSize(actualSize) {
    if (actualSize) {
        switch (true) {
            case (actualSize < 1000):
                return `${actualSize} Bytes`;
            case (actualSize >= 1000 && actualSize < 1000000):
                return `${(actualSize / 1000).toFixed(2)} KB`;
            case (actualSize >= 1000000):
                return `${(actualSize / 1000000).toFixed(2)} MB`;
        }
    }
}

// cutting text
function cuttingText(text) {
    if (!text || typeof text != "string") throw new Error("text is not found.");
    return text.length > 15 ? text.slice(0, 12) + "..." : text;
};

// copying text
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Text copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
};