export function pasteText(block, content){
    const searchBlock = document.getElementById(block);
    searchBlock.textContent = content;
}

