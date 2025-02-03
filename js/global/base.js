document.addEventListener("DOMContentLoaded", () => {
    const isGitHub = location.hostname.includes("github.io");
    if (isGitHub) {
        const base = document.createElement("base");
        base.href = "/PPID-Surakarta/";
        document.head.appendChild(base);
    }

    console.log("Base href set to:", document.querySelector('base')?.href || "Not set");
});
