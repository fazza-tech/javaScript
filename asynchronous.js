function x() {
    for (let i = 1; i <= 5; i++) {
        function close() {
            setTimeout(function () {
                console.log(i);
            }, 1 * 2000);
        }
        close();
    }
    console.log("Kummudu");
};

x();