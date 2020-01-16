export default {
    'post /api/login': (req, res) => {
        const { username, password } = req.body;
        console.log(username, password);
        if (username == "panjie" && password == "123") {
            return res.json({
                code: 0,
                data: {
                    token: "panjieisgood",
                    role: "admin",
                    balance: 1000,
                    username: "panjie"
                }
            })
        }
        if (username == "jerry" && password == "123") {
            return res.json({
                code: 0,
                data: {
                    token: "panjieisgood",
                    role: "user",
                    balance: 100,
                    username: "jerry"
                }
            });
        }
        return res.json({
            code: -1,
            msg: "密码错误"
        });
    }
}