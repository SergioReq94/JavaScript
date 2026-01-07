setInterval(() => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const nombre = cookie.split("=")[0].trim();
        
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    console.log("Cookies borradas a los " + new Date().getSeconds() + " segundos.");
}, 10000);