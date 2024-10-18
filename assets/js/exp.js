// JavaScript can be used if you want to dynamically set the green bar to the top event,
// or move the bar based on which event is current.

window.onload = function () {
    const topEvent = document.querySelector('.top-event');
    const timelineLine = document.querySelector('.timeline-line');

    const eventOffsetTop = topEvent.offsetTop;
    const greenBarHeight = topEvent.offsetHeight + 20;

    timelineLine.style.setProperty('--greenBarHeight', `${greenBarHeight}px`);
    timelineLine.style.setProperty('--greenBarTop', `${eventOffsetTop}px`);
};
