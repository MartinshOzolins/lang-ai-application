// scrolls to the element
export function scrollToElement(elementRef) {
  elementRef.current?.scrollIntoView({ behavior: "smooth" });
}
