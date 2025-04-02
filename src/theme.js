const theme = {
    colors: {
        // Base colors
        background: "#ffffff",
        backgroundLight: "#f5f5f5",
        backgroundDarker: "#000000",
        textPrimary: "#333333",
        textSecondary: "#666666",

        // Main accents
        accent: "#1a1a1a",
        accentSecondary: "#444444",
        accentTertiary: "#888888",

        // Section-specific colors
        hero: {
            accent: "#3a86ff",      // Vibrant blue
            gradient: "linear-gradient(135deg, #3a86ff 0%, #0043a3 100%)"
        },
        about: {
            accent: "#ff595e",      // Red-coral
            highlight: "rgba(255, 89, 94, 0.1)"
        },
        skills: {
            accent: "#ffca3a",      // Vibrant yellow
            highlight: "rgba(255, 202, 58, 0.1)"
        },
        projects: {
            accent: "#8ac926",      // Vibrant green
            highlight: "rgba(138, 201, 38, 0.1)"
        },
        testimonials: {
            accent: "#6a4c93",      // Purple
            highlight: "rgba(106, 76, 147, 0.1)"
        },
        contact: {
            accent: "#e63946",      // Bright red/pink
            highlight: "rgba(230, 57, 70, 0.1)"
        },

        // General purpose
        gradient: "linear-gradient(90deg, #333333 0%, #555555 100%)",
        codeHighlight: "#333333",
        success: "#4CAF50",
        warning: "#FFC107",
        error: "#ff4444",
        info: "#2196F3"
    },
    fonts: {
        main: "'Poppins', sans-serif",
        code: "'JetBrains Mono', monospace",
    },
    breakpoints: {
        xs: "screen and (max-width: 480px)",
        sm: "screen and (max-width: 640px)",
        md: "screen and (max-width: 768px)",
        lg: "screen and (max-width: 1024px)",
        xl: "screen and (max-width: 1280px)"
    },
    transitions: {
        fast: "0.2s ease-in-out",
        medium: "0.3s ease-in-out",
        slow: "0.5s ease-in-out"
    }
};

export default theme; 