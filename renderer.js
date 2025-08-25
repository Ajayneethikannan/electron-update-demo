const pingFunc = async () => {
    const response = await windows.versions.ping();
    console.log(response);
}

(async () => {
    await pingFunc()
})();