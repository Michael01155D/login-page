const URL = "http://localhost:3000/login";
export const login = async (username, password) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        return res.json();
}