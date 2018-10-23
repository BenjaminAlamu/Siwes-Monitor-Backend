module.exports = {
    statusNotification : async function (sender, reciever, message){
        try{
            let info = `Dear ${reciever},\n ${sender} ${message}`
            let payload = {
                sender,
                reciever,
                info
            }
            const data = await Notification.create(payload);
            console.log("Status notification successful sent")
        }catch(err){
            console.log(err);
        }
    }
}