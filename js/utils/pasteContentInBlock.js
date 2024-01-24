export const pasteContent = (block, content) => {
    const searchBlock = document.getElementById(block);
    searchBlock.textContent = content;
}

