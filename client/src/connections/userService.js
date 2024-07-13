const URL = "http://localhost:3000/users";

export const register = async (username, password) => {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        const response = res.json();
        //console.log("in register, res is: ", response)
        return response;
}

export const getUserDetails = async (userId, token) => {
    const res = await fetch(`${URL}/${userId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const response = res.json();
    console.log("in getUserdeets res is " , response)
    return response;
}

export const verifyToken = async () => {
    const res = await fetch(`${URL}/validateUser`, {
        method: "GET"
    })
    return res.json();
}