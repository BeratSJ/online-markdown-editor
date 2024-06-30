document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    editor.addEventListener('input', () => {
        const markdownText = editor.value;
        const html = marked(markdownText, {
            highlight: function(code, lang) {
                const language = lang || 'plaintext';
                return hljs.highlight(language, code).value;
            }
        });
        preview.innerHTML = html;
    });
});
