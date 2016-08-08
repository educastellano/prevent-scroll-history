// Stolen from:
//  http://stackoverflow.com/questions/8737709/any-way-to-prevent-horizontal-scrolling-triggering-swipe-back-gesture-on-os-x-li
// 
module.exports = function (element) {

    element.addEventListener('mousewheel', function(event) {
        // We don't want to scroll below zero or above the width and height
        var maxX = this.scrollWidth - this.offsetWidth;

        // If this event looks like it will scroll beyond the bounds of the element, 
        // prevent it and set the scroll to the boundary manually
        if (this.scrollLeft + event.deltaX < 0 ||
            this.scrollLeft + event.deltaX > maxX) {

            event.preventDefault();

            // Manually set the scroll to the boundary
            this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
        }
    }, false);

}