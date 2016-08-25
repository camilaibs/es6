class HttpService {

    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    let responseText = xhr.responseText;

                    if (xhr.status == 200) {
                        resolve(JSON.parse(responseText));
                    } else {
                        reject(responseText);
                    }
                }
            };
            xhr.send();
        });
    }

    post(url, dado) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    let responseText = xhr.responseText;

                    if (xhr.status == 200) {
                        resolve(JSON.parse(responseText));
                    } else {
                        reject(responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado));
        });
    }

}