class User
{
    constructor(client)
    {
        this.client=client;
    }

    async getUsers(req, res,next)
    {
        console.log(this);
        try
        {

            const data = await this.client.query('SELECT * FROM minerales');
            res.status(200).json({
                status: 'success',
                data: data,
            });

        }
        catch (e)
        {
            res.status(500).json({
                status: 'error',
                message: e.message
            });
        }
    }
}

module.exports= User;
