window.addEventListener('load', function() {
    const projectItems = document.querySelectorAll('.projects-item');
    const screenWidth = this.window.innerHeight;
    // Function to find the tallest image height among all project items
    function setPaddingBasedOnTallestImage() {
        let tallestImageHeight = 0;
      
        // Loop through each project item to find the tallest image
        projectItems.forEach(item => {
            const image = item.querySelector('img');
            if (image.clientHeight > tallestImageHeight) {
                tallestImageHeight = image.clientHeight;
            }
        });
      
        // Set padding based on the tallest image height
        projectItems.forEach(item => {
            const image = item.querySelector('img');
            const paddingValue = 100 * ((tallestImageHeight - image.clientHeight) / screenWidth);
            item.style.paddingTop = `${paddingValue / 2 + 3}vh`;
            item.style.paddingBottom = `${paddingValue / 2 + 3}vh`;
        });
    }

    // Call the function when the window loads and if it resizes
    window.addEventListener('resize', setPaddingBasedOnTallestImage);
    setPaddingBasedOnTallestImage();
});
