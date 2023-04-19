// @ts-nocheck
function alert(element) {
    // Create a dissmissable button
    element.addEventListener('click', function (e) {
        for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches('.btn-close')) {
                e.preventDefault();
                element.classList.remove('show');
                setTimeout(function () {
                    element.remove();
                }, 300); // Execute something() 1 second later.
                break;
            }
        }
    }, false);
    // Self disappearing alert
    if (element.hasAttribute('data-timeout')) {
        let timeOut = element.getAttribute('data-timeout');
        setTimeout(function () {
            element.classList.remove('show');
            setTimeout(function () {
                element.remove();
            }, 300); // Execute something() 1 second later.
        }, timeOut); // Execute something() 1 second later.
    }
    // Create an alert holder thats fixed to the bottom of the page, alerts with the class of alert--fix are then moved to this area. Creating a fixed but scrollable area that alerts can be stacked up on.
    if (!document.querySelector('.alert__holder')) {
        var bodyElement = document.getElementsByTagName("BODY")[0];
        let newDiv = document.createElement("div");
        newDiv.classList.add('alert__holder');
        if (document.querySelector('main'))
            document.querySelector('main').appendChild(newDiv);
        else
            document.body.appendChild(newDiv);
    }
    let alertHolder = document.querySelector('.alert__holder');
    if (element.classList.contains('alert--fixed') && !element.parentNode.classList.contains('alert__wrapper')) {
        alertHolder.appendChild(element);
    }
}
export default alert;
