document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const cmykValue = document.getElementById('cmykValue');

    const copyIcons = document.querySelectorAll('.fas.fa-copy');

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }

    function rgbToCmyk(r, g, b) {
        const c = 1 - r / 255;
        const m = 1 - g / 255;
        const y = 1 - b / 255;
        const k = Math.min(c, m, y);
        const cmyk = {
            c: Math.round(((c - k) / (1 - k || 1)) * 100),
            m: Math.round(((m - k) / (1 - k || 1)) * 100),
            y: Math.round(((y - k) / (1 - k || 1)) * 100),
            k: Math.round(k * 100),
        };
        return cmyk;
    }

    function updateValues() {
        const hex = colorInput.value;
        const { r, g, b } = hexToRgb(hex);
        const { c, m, y, k } = rgbToCmyk(r, g, b);

        hexValue.value = hex;
        rgbValue.value = `rgb(${r}, ${g}, ${b})`;
        cmykValue.value = `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
    }

    function copyToClipboard(targetId) {
        const input = document.getElementById(targetId);
        input.select();
        document.execCommand('copy');
        alert(`${targetId.toUpperCase()} value copied to clipboard!`);
    }

    colorInput.addEventListener('input', updateValues);

    copyIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const target = icon.getAttribute('data-copy-target');
            copyToClipboard(target);
        });
    });

    // Initialize values
    updateValues();
});
