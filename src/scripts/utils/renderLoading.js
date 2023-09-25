export function renderLoading(isLoading, element, defaultText='Сохранить') {
    if (isLoading) {
        element.textContent = "Сохранение...";
    } else {
        element.textContent = defaultText;
    }
}